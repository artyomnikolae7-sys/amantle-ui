import fs from "node:fs/promises";
import path from "node:path";
import { buildRegistry } from "./build-registry.mjs";

const rootDir = process.cwd();

export async function deployBatch(components) {
  console.log(`📦 Deploying batch of ${components.length} components...`);

  // 1. Write each component file
  for (const comp of components) {
    const targetDir = path.join(rootDir, "registry", comp.category);
    await fs.mkdir(targetDir, { recursive: true });
    const targetFile = path.join(targetDir, `${comp.name}.tsx`);
    await fs.writeFile(targetFile, comp.code, "utf-8");
  }

  // 2. Rebuild the registry (generates public/r/*.json and public/r/index.json)
  buildRegistry();

  console.log(`✨ Successfully deployed ${components.length} components!`);
}
