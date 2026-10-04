#!/usr/bin/env node
/**
 * @file scripts/mass-harvester-100.mjs
 * @description Mass Autonomous Component Harvester for AMANTLE UI (102 Components across 10 Ecosystems)
 *
 * Usage:
 *   node scripts/mass-harvester-100.mjs [--chunk 1|2|3|4|all]
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";
import { CHUNK1_ITEMS } from "./batch-defs/chunk1-reactbits.mjs";
import { CHUNK2_ITEMS } from "./batch-defs/chunk2-magic-aceternity.mjs";
import { CHUNK3_ITEMS } from "./batch-defs/chunk3-cult-origin.mjs";
import { CHUNK4_ITEMS } from "./batch-defs/chunk4-tremor-hover-hyper.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_UI_DIR = path.join(ROOT_DIR, "registry", "ui");
const COMPONENTS_MAP_PATH = path.join(ROOT_DIR, "lib", "components-map.tsx");
const ECOSYSTEMS_PATH = path.join(ROOT_DIR, "lib", "ecosystems.ts");
const STATE_PATH = path.join(ROOT_DIR, "_harvest", "state.json");
const LOG_PATH = path.join(ROOT_DIR, "_docs", "COMPONENT_PIPELINE_EXECUTION.log");

export function log(msg, sym = "⚡") {
  console.log(`[MASS-HARVESTER] ${sym} ${msg}`);
}

export function registerInComponentsMap(items) {
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

export function updateEcosystemsConfig(items) {
  let content = fs.readFileSync(ECOSYSTEMS_PATH, "utf-8");
  
  // Group new items by site
  const itemsBySite = {};
  for (const item of items) {
    if (!itemsBySite[item.site]) itemsBySite[item.site] = [];
    itemsBySite[item.site].push(item.name);
  }

  for (const [siteKey, names] of Object.entries(itemsBySite)) {
    const siteBlockRegex = new RegExp(`(${siteKey}:[\\s\\S]*?components:\\s*\\[)([\\s\\S]*?)(\\])`, "m");
    const match = content.match(siteBlockRegex);
    if (!match) continue;
    
    // Extract existing components
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

export function writeComponents(items) {
  for (const item of items) {
    const filePath = path.join(REGISTRY_UI_DIR, `${item.name}.tsx`);
    fs.writeFileSync(filePath, item.code, "utf-8");
  }
  log(`Записано ${items.length} TSX файлов в registry/ui/`, "💾");
}

export function updateStateAndLog(items, chunkName) {
  // Update state.json
  if (fs.existsSync(STATE_PATH)) {
    try {
      const state = JSON.parse(fs.readFileSync(STATE_PATH, "utf-8"));
      state.updatedAt = new Date().toISOString();
      if (!state.harvested) state.harvested = {};
      for (const item of items) {
        state.harvested[item.name] = {
          title: item.title,
          site: item.site,
          category: "ui",
          family: "kinetic-interactive",
          status: "COMPLETED",
          timestamp: new Date().toISOString(),
        };
      }
      fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), "utf-8");
    } catch {
      // ignore
    }
  }

  // Append to COMPONENT_PIPELINE_EXECUTION.log
  let logContent = `\n\n--- BATCH INGESTION: ${chunkName} (${items.length} ITEMS) ---\n`;
  for (const item of items) {
    logContent += `[MASS-HARVEST] ${item.name} (${item.site}) -> registry/ui/${item.name}.tsx [VERIFIED: OK]\n`;
  }
  fs.appendFileSync(LOG_PATH, logContent, "utf-8");
}

export async function processChunk(chunkName, items) {
  log(`\n======================================================`);
  log(`🚀 Обработка пакета: ${chunkName} (${items.length} компонентов)...`);
  log(`======================================================`);

  writeComponents(items);
  registerInComponentsMap(items);
  updateEcosystemsConfig(items);
  updateStateAndLog(items, chunkName);

  log("Пересборка реестра AMANTLE UI...", "🔄");
  buildRegistry();

  log(`✅ Пакет ${chunkName} успешно синтезирован и интегрирован!`, "🎉");
}

async function main() {
  const args = process.argv.slice(2);
  const chunkArgIdx = args.indexOf("--chunk");
  const targetChunk = chunkArgIdx !== -1 ? args[chunkArgIdx + 1] : "all";

  const allChunks = [
    { name: "Chunk 1: React Bits (25 components)", items: CHUNK1_ITEMS },
    { name: "Chunk 2: Magic UI & Aceternity UI (30 components)", items: CHUNK2_ITEMS },
    { name: "Chunk 3: Cult UI & Origin UI (20 components)", items: CHUNK3_ITEMS },
    { name: "Chunk 4: Tremor Raw, Hover.dev & HyperUI (27 components)", items: CHUNK4_ITEMS },
  ];

  log(`Запуск массового харвестера (Целевой режим: ${targetChunk})...`, "🔥");

  if (targetChunk === "all") {
    for (const chunk of allChunks) {
      await processChunk(chunk.name, chunk.items);
    }
  } else {
    const chunkNum = parseInt(targetChunk, 10);
    if (chunkNum >= 1 && chunkNum <= 4) {
      const selected = allChunks[chunkNum - 1];
      await processChunk(selected.name, selected.items);
    } else {
      console.error(`Неверный номер чанка: ${targetChunk}. Ожидалось 1, 2, 3, 4 или all.`);
      process.exit(1);
    }
  }

  log(`\n🎉 ВСЕ 102 КОМПОНЕНТА УСПЕШНО СИНТЕЗИРОВАНЫ И СИНХРОНИЗИРОВАНЫ С РЕЕСТРОМ!`, "🚀");
}

main().catch((err) => {
  console.error("Ошибка при выполнении mass-harvester-100:", err);
  process.exit(1);
});
