#!/usr/bin/env node
/**
 * @file scripts/run-mega-batch.mjs
 * @description Ingestion runner for mega batches
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";
import { generateMegaBatch1 } from "./batch-defs/mega-batch-1.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_UI_DIR = path.join(ROOT_DIR, "registry", "ui");
const COMPONENTS_MAP_PATH = path.join(ROOT_DIR, "lib", "components-map.tsx");
const ECOSYSTEMS_PATH = path.join(ROOT_DIR, "lib", "ecosystems.ts");
const STATE_PATH = path.join(ROOT_DIR, "_harvest", "state.json");
const LOG_PATH = path.join(ROOT_DIR, "_docs", "COMPONENT_PIPELINE_EXECUTION.log");

function log(msg, sym = "⚡") {
  console.log(`[MEGA-INGEST] ${sym} ${msg}`);
}

function writeComponents(items) {
  for (const item of items) {
    const filePath = path.join(REGISTRY_UI_DIR, `${item.name}.tsx`);
    fs.writeFileSync(filePath, item.code, "utf-8");
  }
  log(`Записано ${items.length} TSX файлов в registry/ui/`, "💾");
}

function registerInComponentsMap(items) {
  let content = fs.readFileSync(COMPONENTS_MAP_PATH, "utf-8");
  const marker = "export const componentMap: Record<string, React.ComponentType<any>> = {";

  let newImports = "";
  let newEntries = "";

  for (const item of items) {
    if (content.includes(`"${item.name}":`)) continue;
    const importName = item.name
      .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
      .replace(/^[a-z]/, (s) => s.toUpperCase());

    newImports += `import { ${importName} } from "@/registry/ui/${item.name}";\n`;
    newEntries += `  "${item.name}": (props: any) => (\n    <div className="flex items-center justify-center p-6">\n      <${importName} {...props} />\n    </div>\n  ),\n`;
  }

  if (newImports && newEntries) {
    content = content.replace(marker, `${newImports}\n${marker}\n${newEntries}`);
    fs.writeFileSync(COMPONENTS_MAP_PATH, content, "utf-8");
    log(`Зарегистрировано ${items.length} компонентов в lib/components-map.tsx`, "🔗");
  }
}

function updateEcosystemsConfig(items) {
  let content = fs.readFileSync(ECOSYSTEMS_PATH, "utf-8");
  
  const itemsBySite = {};
  for (const item of items) {
    if (!itemsBySite[item.site]) itemsBySite[item.site] = [];
    itemsBySite[item.site].push(item.name);
  }

  for (const [siteKey, names] of Object.entries(itemsBySite)) {
    const siteBlockRegex = new RegExp(`(${siteKey}:[\\s\\S]*?components:\\s*\\[)([\\s\\S]*?)(\\])`, "m");
    const match = content.match(siteBlockRegex);
    if (!match) continue;
    
    const existingStr = match[2];
    const existingMatches = existingStr.match(/"([^"]+)"/g) || [];
    const existingNames = existingMatches.map((m) => m.replace(/"/g, ""));
    
    const combined = [...new Set([...existingNames, ...names])];
    const formatted = combined.map((n) => `      "${n}",`).join("\n");
    
    content = content.replace(
      siteBlockRegex,
      `$1\n${formatted}\n    $3`
    );
  }

  fs.writeFileSync(ECOSYSTEMS_PATH, content, "utf-8");
  log("Обновлена карта экосистем в lib/ecosystems.ts", "🗺️");
}

function updateState(items, batchName) {
  if (fs.existsSync(STATE_PATH)) {
    try {
      const state = JSON.parse(fs.readFileSync(STATE_PATH, "utf-8"));
      state.updatedAt = new Date().toISOString();
      if (!state.harvested) state.harvested = {};
      for (const item of items) {
        state.harvested[item.name] = {
          title: item.title,
          site: item.site,
          category: item.category,
          family: item.family,
          status: "COMPLETED",
          timestamp: new Date().toISOString(),
        };
      }
      fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), "utf-8");
    } catch {}
  }

  let logContent = `\n--- MEGA BATCH INGEST: ${batchName} (${items.length} ITEMS) ---\n`;
  for (const item of items) {
    logContent += `[BATCH-INGEST] ${item.name} (${item.site}) -> registry/ui/${item.name}.tsx [OK]\n`;
  }
  fs.appendFileSync(LOG_PATH, logContent, "utf-8");
}

async function main() {
  const batchArg = process.argv[2] || "2";
  const batchModulePath = `./batch-defs/mega-batch-${batchArg}.mjs`;
  const fnName = `generateMegaBatch${batchArg}`;

  log(`Запуск генерации Mega Batch ${batchArg}...`, "🚀");
  const mod = await import(batchModulePath);
  const generator = mod[fnName] || mod.default || Object.values(mod).find(v => typeof v === "function");
  
  if (!generator) {
    throw new Error(`Не найдена функция генерации в ${batchModulePath}`);
  }

  const items = generator();
  log(`Сгенерировано ${items.length} определений компонентов.`, "📦");

  writeComponents(items);
  registerInComponentsMap(items);
  updateEcosystemsConfig(items);
  updateState(items, `Mega Batch ${batchArg}`);

  log("Пересборка реестра AMANTLE UI...", "🔄");
  buildRegistry();

  log(`✅ Mega Batch ${batchArg} (${items.length} компонентов) успешно интегрирован!`, "🎉");
}

main().catch((err) => {
  console.error("Ошибка при интеграции батча:", err);
  process.exit(1);
});
