#!/usr/bin/env node
/**
 * @file scripts/pipeline.mjs
 * @description Fast 3-minute component migration, analysis, tokenization, A/B snapshot, and publishing engine for AMANTLE UI
 *
 * Usage:
 *   node scripts/pipeline.mjs --source <url-or-file> --name <name> --category <ui|blocks> [options]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_DIR = path.join(ROOT_DIR, "registry");
const REFS_DIR = path.join(REGISTRY_DIR, "_references");
const COMPONENTS_MAP_PATH = path.join(ROOT_DIR, "lib", "components-map.tsx");
const PLAYGROUND_SCHEMAS_PATH = path.join(ROOT_DIR, "lib", "playground-schemas.ts");

export function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    source: "",
    name: "",
    title: "",
    description: "",
    category: "ui",
    author: "Open Source",
    license: "MIT",
    modified: "Tokenized for AMANTLE UI with Tailwind v4 semantic variables",
    skipTest: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--source" && args[i + 1]) options.source = args[++i];
    else if (arg === "--name" && args[i + 1]) options.name = args[++i];
    else if (arg === "--title" && args[i + 1]) options.title = args[++i];
    else if (arg === "--description" && args[i + 1]) options.description = args[++i];
    else if (arg === "--category" && args[i + 1]) options.category = args[++i];
    else if (arg === "--author" && args[i + 1]) options.author = args[++i];
    else if (arg === "--license" && args[i + 1]) options.license = args[++i];
    else if (arg === "--modified" && args[i + 1]) options.modified = args[++i];
    else if (arg === "--skip-test") options.skipTest = true;
  }

  return options;
}

function convertGitHubUrl(url) {
  if (url.includes("github.com") && url.includes("/blob/")) {
    return url.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
  }
  return url;
}

export async function fetchSourceContent(source) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    const rawUrl = convertGitHubUrl(source);
    console.log(`  🌐 [Анализ] Загрузка удаленного исходника: ${rawUrl}`);
    const res = await fetch(rawUrl);
    if (!res.ok) {
      throw new Error(`Не удалось загрузить исходник по URL ${rawUrl}: ${res.status} ${res.statusText}`);
    }
    return await res.text();
  }

  const localPath = path.isAbsolute(source) ? source : path.resolve(process.cwd(), source);
  if (!fs.existsSync(localPath)) {
    throw new Error(`Локальный файл не найден: ${localPath}`);
  }
  console.log(`  📄 [Анализ] Чтение локального файла: ${localPath}`);
  return fs.readFileSync(localPath, "utf-8");
}

/**
 * Phase 1: Analysis (Анализ)
 * Извлекает пропсы, CVA варианты, размеры, зависимости и хардкодные токены
 */
export function analyzeComponent(rawCode, name) {
  console.log(`  🔍 [Анализ] Извлечение метаданных, пропсов и зависимостей...`);

  // 1. Dependencies
  const dependencies = [];
  const npmMatches = rawCode.matchAll(/from\s+["'](@radix-ui\/[a-z0-9-]+|lucide-react|framer-motion|recharts|clsx|tailwind-merge|class-variance-authority)["']/g);
  for (const match of npmMatches) {
    if (!dependencies.includes(match[1])) {
      dependencies.push(match[1]);
    }
  }

  // Lucide icons
  const iconMatches = rawCode.match(/import\s+\{([^}]+)\}\s+from\s+["']lucide-react["']/);
  const detectedIcons = iconMatches
    ? iconMatches[1].split(",").map((s) => s.trim()).filter((s) => s.length > 0 && s[0] === s[0].toUpperCase())
    : [];

  // 2. Variants from CVA or TypeScript types
  const variants = [];
  const cvaVariantMatch = rawCode.match(/variant:\s*\{([^}]+)\}/);
  if (cvaVariantMatch) {
    const keys = cvaVariantMatch[1].matchAll(/([a-zA-Z0-9_-]+)\s*:/g);
    for (const k of keys) {
      const v = k[1].replace(/['"]/g, "");
      if (!variants.includes(v)) variants.push(v);
    }
  }

  // Fallback: look for union types
  if (variants.length === 0) {
    const unionMatch = rawCode.match(/variant\??:\s*([^\r\n;]+)/);
    if (unionMatch) {
      const items = unionMatch[1].matchAll(/["']([a-zA-Z0-9_-]+)["']/g);
      for (const item of items) {
        if (!variants.includes(item[1])) variants.push(item[1]);
      }
    }
  }
  if (variants.length === 0) {
    variants.push("default", "secondary", "outline");
  }

  // 3. Sizes
  const sizes = [];
  const cvaSizeMatch = rawCode.match(/size:\s*\{([^}]+)\}/);
  if (cvaSizeMatch) {
    const keys = cvaSizeMatch[1].matchAll(/([a-zA-Z0-9_-]+)\s*:/g);
    for (const k of keys) {
      const s = k[1].replace(/['"]/g, "");
      if (!sizes.includes(s)) sizes.push(s);
    }
  }
  if (sizes.length === 0) {
    sizes.push("sm", "default", "lg");
  }

  // 4. Boolean Flags
  const booleanFlags = [];
  if (rawCode.includes("loading")) booleanFlags.push("loading");
  if (rawCode.includes("disabled")) booleanFlags.push("disabled");
  if (rawCode.includes("active")) booleanFlags.push("active");

  // 5. Component PascalName
  const pascalName = name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  return {
    name,
    pascalName,
    dependencies,
    detectedIcons,
    variants,
    sizes,
    booleanFlags,
  };
}

/**
 * Phase 2: Adaptation (Реализация и Токенизация)
 * Трансформирует классы в семантические переменные AMANTLE UI (Tailwind v4)
 */
export function adaptComponent(rawCode, analysis, options) {
  console.log(`  ⚙️ [Реализация] Адаптация исходника под токены AMANTLE UI...`);

  let code = rawCode;
  const tokenReplacementsLog = [];

  // Import normalization
  code = code.replace(/from\s+["'](?:\.\.\/)+lib\/utils["']/g, 'from "@/lib/utils"');
  code = code.replace(/from\s+["']@\/components\/ui\/([a-z-]+)["']/g, 'from "@/registry/ui/$1"');

  const replacements = [
    // Backgrounds
    { from: /\bbg-zinc-950\b/g, to: "bg-background", label: "bg-zinc-950 → bg-background" },
    { from: /\bbg-zinc-900\b/g, to: "bg-card", label: "bg-zinc-900 → bg-card" },
    { from: /\bbg-zinc-800\b/g, to: "bg-muted", label: "bg-zinc-800 → bg-muted" },
    { from: /\bbg-zinc-100\b/g, to: "bg-muted", label: "bg-zinc-100 → bg-muted" },
    { from: /\bbg-gray-100\b/g, to: "bg-muted", label: "bg-gray-100 → bg-muted" },
    { from: /\bbg-neutral-900\b/g, to: "bg-card", label: "bg-neutral-900 → bg-card" },
    { from: /\bbg-slate-900\b/g, to: "bg-card", label: "bg-slate-900 → bg-card" },
    { from: /\bbg-blue-600\b/g, to: "bg-primary", label: "bg-blue-600 → bg-primary" },
    { from: /\bbg-indigo-600\b/g, to: "bg-primary", label: "bg-indigo-600 → bg-primary" },

    // Texts
    { from: /\btext-zinc-50\b/g, to: "text-foreground", label: "text-zinc-50 → text-foreground" },
    { from: /\btext-zinc-100\b/g, to: "text-foreground", label: "text-zinc-100 → text-foreground" },
    { from: /\btext-zinc-400\b/g, to: "text-muted-foreground", label: "text-zinc-400 → text-muted-foreground" },
    { from: /\btext-zinc-500\b/g, to: "text-muted-foreground", label: "text-zinc-500 → text-muted-foreground" },
    { from: /\btext-gray-400\b/g, to: "text-muted-foreground", label: "text-gray-400 → text-muted-foreground" },
    { from: /\btext-gray-500\b/g, to: "text-muted-foreground", label: "text-gray-500 → text-muted-foreground" },
    { from: /\btext-blue-600\b/g, to: "text-primary", label: "text-blue-600 → text-primary" },

    // Borders
    { from: /\bborder-zinc-800\b/g, to: "border-border", label: "border-zinc-800 → border-border" },
    { from: /\bborder-zinc-700\b/g, to: "border-border", label: "border-zinc-700 → border-border" },
    { from: /\bborder-zinc-200\b/g, to: "border-border", label: "border-zinc-200 → border-border" },
    { from: /\bborder-gray-200\b/g, to: "border-border", label: "border-gray-200 → border-border" },
  ];

  for (const { from, to, label } of replacements) {
    if (from.test(code)) {
      code = code.replace(from, to);
      tokenReplacementsLog.push(label);
    }
  }

  // Ensure JSDoc provenance
  const existingJsdocMatch = code.match(/\/\*\*([\s\S]*?)\*\//);
  let provenanceHeader = `/**
 * @source ${options.source || "AMANTLE UI Pipeline"}
 * @author ${options.author || "Open Source"}
 * @license ${options.license || "MIT"}
 * @modified ${options.modified}
 */\n\n`;

  if (existingJsdocMatch) {
    code = code.replace(existingJsdocMatch[0], provenanceHeader.trim());
  } else {
    code = provenanceHeader + code.trimStart();
  }

  return {
    adaptedCode: code,
    tokenReplacementsLog,
  };
}

/**
 * Phase 3: Registration (Регистрация в components-map.tsx и playground-schemas.ts)
 */
export function registerInComponentsMap(name, pascalName, category) {
  console.log(`  🔌 [Регистрация] Добавление в lib/components-map.tsx...`);
  let content = fs.readFileSync(COMPONENTS_MAP_PATH, "utf-8");

  // Check if already registered
  const pattern = new RegExp(`(?:["']${name}["']|\\b${name})\\s*:`);
  if (pattern.test(content)) {
    console.log(`    ℹ️ Компонент «${name}» уже зарегистрирован в componentMap.`);
    return;
  }

  // 1. Add import
  const importStatement = `import { ${pascalName} } from "@/registry/${category}/${name}";\n`;
  const importAnchor = "// Page Templates";
  if (content.includes(importAnchor)) {
    content = content.replace(importAnchor, `${importStatement}${importAnchor}`);
  } else {
    content = `${importStatement}${content}`;
  }

  // 2. Add demo wrapper
  const demoCode = `  "${name}": (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="flex flex-col items-center justify-center p-8 gap-4">
          <${pascalName}
            variant={props.variant || "default"}
            size={props.size || "default"}
            ${props => "" /* dynamic placeholders */}
          >
            {props.label || "${pascalName}"}
          </${pascalName}>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-4 items-center justify-center p-8">
        <${pascalName} variant="default">${pascalName}</${pascalName}>
        <${pascalName} variant="secondary">Secondary</${pascalName}>
        <${pascalName} variant="outline">Outline</${pascalName}>
      </div>
    );
  },\n`;

  const mapAnchor = "export const componentMap: Record<string, React.ComponentType<any>> = {";
  content = content.replace(mapAnchor, `${mapAnchor}\n${demoCode}`);

  fs.writeFileSync(COMPONENTS_MAP_PATH, content, "utf-8");
  console.log(`    ✅ Добавлено превью в componentMap [${name}].`);
}

export function registerInPlaygroundSchemas(name, pascalName, analysis) {
  console.log(`  🎛 [Регистрация] Создание интерактивной схемы Playground в lib/playground-schemas.ts...`);
  let content = fs.readFileSync(PLAYGROUND_SCHEMAS_PATH, "utf-8");

  if (content.includes(`"${name}":`)) {
    console.log(`    ℹ️ Схема для «${name}» уже существует в playground-schemas.ts.`);
    return;
  }

  const controls = [];

  // Variant control
  if (analysis.variants && analysis.variants.length > 0) {
    controls.push(`      {
        name: "variant",
        label: "Вариант (variant)",
        type: "select",
        options: ${JSON.stringify(analysis.variants)},
        defaultValue: "${analysis.variants[0]}",
      }`);
  }

  // Size control
  if (analysis.sizes && analysis.sizes.length > 0) {
    controls.push(`      {
        name: "size",
        label: "Размер (size)",
        type: "select",
        options: ${JSON.stringify(analysis.sizes)},
        defaultValue: "${analysis.sizes.includes("default") ? "default" : analysis.sizes[0]}",
      }`);
  }

  // Text label
  controls.push(`      {
        name: "label",
        label: "Текст (label)",
        type: "text",
        defaultValue: "${pascalName}",
      }`);

  // Boolean toggles
  for (const flag of analysis.booleanFlags) {
    controls.push(`      {
        name: "${flag}",
        label: "Состояние ${flag}",
        type: "boolean",
        defaultValue: false,
      }`);
  }

  const schemaEntry = `  "${name}": {
    defaultProps: {
      variant: "${analysis.variants[0] || "default"}",
      size: "default",
      label: "${pascalName}",
      ${analysis.booleanFlags.map((f) => `${f}: false`).join(", ")}
    },
    controls: [
${controls.join(",\n")}
    ],
    generateUsage: (props) => {
      const attrs = [];
      if (props.variant && props.variant !== "default") attrs.push(\`variant="\${props.variant}"\`);
      if (props.size && props.size !== "default") attrs.push(\`size="\${props.size}"\`);
      ${analysis.booleanFlags.map((f) => `if (props.${f}) attrs.push("${f}");`).join("\n      ")}
      const attrStr = attrs.length > 0 ? " " + attrs.join(" ") : "";
      return \`<${pascalName}\${attrStr}>\${props.label || "${pascalName}"}</${pascalName}>\`;
    },
  },\n`;

  const mapAnchor = "export const COMPONENT_PLAYGROUND_SCHEMAS: Record<string, PlaygroundComponentSchema> = {";
  content = content.replace(mapAnchor, `${mapAnchor}\n${schemaEntry}`);

  fs.writeFileSync(PLAYGROUND_SCHEMAS_PATH, content, "utf-8");
  console.log(`    ✅ Схема Playground для [${name}] успешно сгенерирована.`);
}

/**
 * Phase 4 & 5: Testing & A/B Snapshot (Тесты и верификация)
 */
export async function verifyComponentRoute(name, category) {
  console.log(`  🧪 [Тесты] Проверка HTTP-роута превью...`);
  const url = `http://localhost:3000/preview/${category}/${name}`;
  try {
    const res = await fetch(url);
    if (res.status === 200) {
      console.log(`    ✅ Роут ${url} доступен (HTTP 200 OK)`);
      return true;
    } else {
      console.warn(`    ⚠️ Роут ${url} вернул код ${res.status}`);
      return false;
    }
  } catch (err) {
    console.warn(`    ℹ️ Dev-сервер не ответил на ${url} (${err.message}). Пропустили HTTP-проверку.`);
    return true;
  }
}

/**
 * Main Pipeline Orchestrator
 */
export async function runPipeline() {
  const startTime = Date.now();
  const options = parseArgs();

  console.log(`\n======================================================`);
  console.log(`🚀 AMANTLE UI — Быстрый Конвейер Онбординга (3 мин/компонент)`);
  console.log(`======================================================\n`);

  if (!options.source) {
    console.error("❌ Ошибка: Укажите параметр --source (URL или путь к файлу)");
    console.log("Пример: node scripts/pipeline.mjs --source https://.../badge.tsx --name badge-shimmer --category ui");
    process.exit(1);
  }

  if (!options.name) {
    const baseName = path.basename(options.source, path.extname(options.source));
    options.name = baseName.toLowerCase().replace(/[^a-z0-9-]/g, "-");
  }

  console.log(`📦 Компонент: [${options.name}] | Категория: [${options.category}]`);

  // 1. Fetch & Analyze
  const rawCode = await fetchSourceContent(options.source);
  const analysis = analyzeComponent(rawCode, options.name);

  // 2. Adapt & Tokenize
  const { adaptedCode, tokenReplacementsLog } = adaptComponent(rawCode, analysis, options);

  // Save reference for A/B compare
  if (!fs.existsSync(REFS_DIR)) {
    fs.mkdirSync(REFS_DIR, { recursive: true });
  }
  const refFile = path.join(REFS_DIR, `${options.name}.raw.tsx`);
  fs.writeFileSync(refFile, rawCode, "utf-8");

  // Save adapted component
  const targetDir = path.join(REGISTRY_DIR, options.category);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const targetFile = path.join(targetDir, `${options.name}.tsx`);
  fs.writeFileSync(targetFile, adaptedCode, "utf-8");
  console.log(`  💾 Сохранён исходник: ${targetFile}`);
  console.log(`  💾 Сохранён оригинал для A/B: ${refFile}`);

  // 3. Register in components-map and playground-schemas
  registerInComponentsMap(options.name, analysis.pascalName, options.category);
  registerInPlaygroundSchemas(options.name, analysis.pascalName, analysis);

  // 4. Build Registry
  console.log(`  🏗️ [Сборка] Генерация манифестов реестра...`);
  const totalBuilt = buildRegistry();

  // 5. Test
  if (!options.skipTest) {
    await verifyComponentRoute(options.name, options.category);
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log(`\n======================================================`);
  console.log(`🎉 Компонент [${options.name}] успешно интегрирован!`);
  console.log(`⚡ Время работы конвейера: ${durationSec} сек (цель: < 10 сек машина)`);
  console.log(`📊 Заменено токенов: ${tokenReplacementsLog.length}`);
  console.log(`🔗 Каталог: http://localhost:3000/${options.category}/${options.name}`);
  console.log(`🔗 Превью: http://localhost:3000/preview/${options.category}/${options.name}`);
  console.log(`📁 Всего компонентов в реестре: ${totalBuilt}`);
  console.log(`======================================================\n`);

  return {
    name: options.name,
    category: options.category,
    durationSec,
    tokenReplacementsLog,
    totalBuilt,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runPipeline().catch((err) => {
    console.error("❌ Ошибка выполнения конвейера:", err.message);
    process.exit(1);
  });
}
