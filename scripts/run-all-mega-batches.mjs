#!/usr/bin/env node
/**
 * @file scripts/run-all-mega-batches.mjs
 * @description Master Ingestion Pipeline for Batches 3, 4, 5, 6 to reach 2,051 components
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";
import { generateMegaBatch3 } from "./batch-defs/mega-batch-3.mjs";
import { generateMegaBatch4 } from "./batch-defs/mega-batch-4.mjs";
import { generateMegaBatch5 } from "./batch-defs/mega-batch-5.mjs";
import { generateMegaBatch6 } from "./batch-defs/mega-batch-6.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_UI_DIR = path.join(ROOT_DIR, "registry", "ui");
const COMPONENTS_MAP_PATH = path.join(ROOT_DIR, "lib", "components-map.tsx");
const ECOSYSTEMS_PATH = path.join(ROOT_DIR, "lib", "ecosystems.ts");
const STATE_PATH = path.join(ROOT_DIR, "_harvest", "state.json");
const LOG_PATH = path.join(ROOT_DIR, "_docs", "COMPONENT_PIPELINE_EXECUTION.log");

function log(msg, sym = "⚡") {
  console.log(`[MASTER-PIPELINE] ${sym} ${msg}`);
}

function writeComponents(items) {
  for (const item of items) {
    const filePath = path.join(REGISTRY_UI_DIR, `${item.name}.tsx`);
    fs.writeFileSync(filePath, item.code, "utf-8");
  }
  log(`Записано ${items.length} TSX файлов в registry/ui/`, "💾");
}

function registerInComponentsMap(allItems) {
  let content = fs.readFileSync(COMPONENTS_MAP_PATH, "utf-8");
  const marker = "export const componentMap: Record<string, React.ComponentType<any>> = {";

  let newImports = "";
  let newEntries = "";
  let addedCount = 0;

  for (const item of allItems) {
    if (content.includes(`"${item.name}":`)) continue;
    const importName = item.name
      .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
      .replace(/^[a-z]/, (s) => s.toUpperCase());

    newImports += `import { ${importName} } from "@/registry/ui/${item.name}";\n`;
    newEntries += `  "${item.name}": (props: any) => (\n    <div className="flex items-center justify-center p-6">\n      <${importName} {...props} />\n    </div>\n  ),\n`;
    addedCount++;
  }

  if (newImports && newEntries) {
    content = content.replace(marker, `${newImports}\n${marker}\n${newEntries}`);
    fs.writeFileSync(COMPONENTS_MAP_PATH, content, "utf-8");
    log(`Зарегистрировано ${addedCount} новых компонентов в lib/components-map.tsx`, "🔗");
  }
}

function updateEcosystemsConfig(allItems) {
  let content = fs.readFileSync(ECOSYSTEMS_PATH, "utf-8");

  const itemsBySite = {};
  for (const item of allItems) {
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

    content = content.replace(siteBlockRegex, `$1\n${formatted}\n    $3`);
  }

  fs.writeFileSync(ECOSYSTEMS_PATH, content, "utf-8");
  log("Обновлена карта экосистем в lib/ecosystems.ts", "🗺️");
}

function updateState(allItems) {
  if (fs.existsSync(STATE_PATH)) {
    try {
      const state = JSON.parse(fs.readFileSync(STATE_PATH, "utf-8"));
      state.updatedAt = new Date().toISOString();
      if (!state.harvested) state.harvested = {};
      for (const item of allItems) {
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

  let logContent = `\n--- MASTER INGESTION: ${allItems.length} ITEMS ADDED ---\n`;
  for (const item of allItems) {
    logContent += `[MASTER-INGEST] ${item.name} (${item.site}) -> registry/ui/${item.name}.tsx [OK]\n`;
  }
  fs.appendFileSync(LOG_PATH, logContent, "utf-8");
}

async function main() {
  log("Запуск генерации Mega Batches 3, 4, 5, 6 (1,150 компонентов)...", "🚀");

  const mb3 = generateMegaBatch3();
  log(`Mega Batch 3: ${mb3.length} компонентов.`, "📦");
  writeComponents(mb3);

  const mb4 = generateMegaBatch4();
  log(`Mega Batch 4: ${mb4.length} компонентов.`, "📦");
  writeComponents(mb4);

  const mb5 = generateMegaBatch5();
  log(`Mega Batch 5: ${mb5.length} компонентов.`, "📦");
  writeComponents(mb5);

  const mb6 = generateMegaBatch6();
  log(`Mega Batch 6: ${mb6.length} компонентов.`, "📦");
  writeComponents(mb6);

  const allNew = [...mb3, ...mb4, ...mb5, ...mb6];
  log(`Всего новых компонентов: ${allNew.length}. Выполняем регистрацию...`, "🔗");

  registerInComponentsMap(allNew);
  updateEcosystemsConfig(allNew);
  updateState(allNew);

  log("Пересборка реестра AMANTLE UI (финальный билд до 2,051)...", "🔄");
  const total = buildRegistry();

  log(`🎉 ФИНАЛЬНЫЙ РЕЕСТР УСПЕШНО СОБРАН! Всего компонентов: ${total}`, "🏆");
}

main().catch((err) => {
  console.error("Ошибка при выполнении мастер-конвейера:", err);
  process.exit(1);
});
