import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_DIR = path.join(ROOT_DIR, "registry");
const OUTPUT_DIR = path.join(ROOT_DIR, "public", "r");

const registryProvenanceSchema = z.object({
  source: z.string(),
  author: z.string(),
  license: z.string(),
  modified: z.string().optional(),
});

const registryItemFileSchema = z.object({
  path: z.string(),
  content: z.string(),
  type: z.string(),
  target: z.string().optional(),
});

const registryItemSchema = z.object({
  name: z.string(),
  type: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).default([]),
  devDependencies: z.array(z.string()).default([]),
  registryDependencies: z.array(z.string()).default([]),
  files: z.array(registryItemFileSchema),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
  meta: registryProvenanceSchema.optional(),
});

const registryIndexSchema = z.array(registryItemSchema.omit({ files: true }));

function parseProvenance(fileContent, fileName) {
  const jsdocMatch = fileContent.match(/\/\*\*([\s\S]*?)\*\//);
  if (!jsdocMatch) {
    throw new Error(`[Provenance Error] File ${fileName} is missing JSDoc header with @source, @author, @license.`);
  }

  const jsdoc = jsdocMatch[1];
  const sourceMatch = jsdoc.match(/@source\s+([^\r\n*]+)/);
  const authorMatch = jsdoc.match(/@author\s+([^\r\n*]+)/);
  const licenseMatch = jsdoc.match(/@license\s+([^\r\n*]+)/);
  const modifiedMatch = jsdoc.match(/@modified\s+([^\r\n*]+)/);

  if (!sourceMatch || !authorMatch || !licenseMatch) {
    throw new Error(
      `[Provenance Error] File ${fileName} has incomplete JSDoc. Required: @source, @author, @license.`
    );
  }

  return {
    source: sourceMatch[1].trim(),
    author: authorMatch[1].trim(),
    license: licenseMatch[1].trim(),
    modified: modifiedMatch ? modifiedMatch[1].trim() : undefined,
  };
}

function detectDependencies(content) {
  const dependencies = new Set();
  const registryDependencies = new Set();

  if (content.includes("@radix-ui/react-")) {
    const matches = content.match(/@radix-ui\/react-[a-z-]+/g);
    matches?.forEach((m) => dependencies.add(m));
  }
  if (content.includes("lucide-react")) dependencies.add("lucide-react");
  if (content.includes("class-variance-authority")) dependencies.add("class-variance-authority");
  if (content.includes("clsx")) dependencies.add("clsx");
  if (content.includes("tailwind-merge")) dependencies.add("tailwind-merge");
  if (content.includes("sonner")) dependencies.add("sonner");

  const regMatches = content.match(/@\/(?:registry|components)\/ui\/([a-z-]+)/g);
  regMatches?.forEach((m) => {
    const comp = m.split("/").pop();
    if (comp) registryDependencies.add(comp);
  });

  return {
    dependencies: Array.from(dependencies),
    registryDependencies: Array.from(registryDependencies),
  };
}

export function buildRegistry() {
  console.log("🚀 Building AMANTLE UI Registry...");

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const categories = [
    { dir: "ui", type: "registry:ui" },
    { dir: "blocks", type: "registry:block" },
    { dir: "templates", type: "registry:template" },
    { dir: "hooks", type: "registry:hook" },
    { dir: "lib", type: "registry:lib" },
  ];

  const indexList = [];
  let totalBuilt = 0;

  for (const { dir, type } of categories) {
    const categoryPath = path.join(REGISTRY_DIR, dir);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
      continue;
    }

    const files = fs.readdirSync(categoryPath);
    for (const file of files) {
      if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;

      const filePath = path.join(categoryPath, file);
      const name = path.basename(file, path.extname(file));
      const content = fs.readFileSync(filePath, "utf-8");

      const provenance = parseProvenance(content, file);
      const { dependencies, registryDependencies } = detectDependencies(content);

      const registryItem = {
        name,
        type,
        title: name.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" "),
        description: `AMANTLE UI ${type.replace("registry:", "")}: ${name}`,
        dependencies,
        registryDependencies,
        files: [
          {
            path: `${dir}/${file}`,
            content,
            type,
            target: `components/${dir}/${file}`,
          },
        ],
        category: dir,
        tags: [dir, name],
        meta: provenance,
      };

      const validatedItem = registryItemSchema.parse(registryItem);

      fs.writeFileSync(
        path.join(OUTPUT_DIR, `${name}.json`),
        JSON.stringify(validatedItem, null, 2),
        "utf-8"
      );

      const { files: _, ...indexItem } = validatedItem;
      indexList.push(indexItem);
      totalBuilt++;
    }
  }

  const validatedIndex = registryIndexSchema.parse(indexList);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "index.json"),
    JSON.stringify(validatedIndex, null, 2),
    "utf-8"
  );

  console.log(`✅ AMANTLE UI Registry successfully built! Total items: ${totalBuilt}`);
  console.log(`📁 Manifests saved in: ${OUTPUT_DIR}`);
  return totalBuilt;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    buildRegistry();
  } catch (err) {
    console.error("❌ Registry build failed:", err.message);
    process.exit(1);
  }
}
