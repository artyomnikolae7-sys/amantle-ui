#!/usr/bin/env node

/**
 * AMANTLE UI - Model Context Protocol (MCP) Server
 * Stdio Transport for IDEs (Cursor, Claude Desktop, Antigravity, VS Code)
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const publicRDir = path.resolve(projectRoot, "public", "r");

function loadRegistryIndex() {
  const indexPath = path.join(publicRDir, "index.json");
  if (!fs.existsSync(indexPath)) return [];
  try {
    return JSON.parse(fs.readFileSync(indexPath, "utf-8"));
  } catch (err) {
    return [];
  }
}

function searchRegistry({ query = "", category }) {
  const items = loadRegistryIndex();
  const q = query.trim().toLowerCase();

  return items.filter((item) => {
    if (category && item.category?.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (!q) return true;

    const inName = item.name.toLowerCase().includes(q);
    const inTitle = item.title?.toLowerCase().includes(q);
    const inDesc = item.description?.toLowerCase().includes(q);
    const inTags = item.tags?.some((t) => t.toLowerCase().includes(q));

    return inName || inTitle || inDesc || inTags;
  });
}

function getComponent({ name }) {
  const filePath = path.join(publicRDir, `${name}.json`);
  if (!fs.existsSync(filePath)) {
    const items = loadRegistryIndex();
    const found = items.find((i) => i.name.toLowerCase() === name.toLowerCase());
    if (found) {
      const altPath = path.join(publicRDir, `${found.name}.json`);
      if (fs.existsSync(altPath)) {
        return parseComp(altPath);
      }
    }
    return null;
  }
  return parseComp(filePath);
}

function parseComp(p) {
  try {
    const parsed = JSON.parse(fs.readFileSync(p, "utf-8"));
    const files = parsed.files || [];
    const primaryFile = files[0];
    return {
      name: parsed.name,
      title: parsed.title || parsed.name,
      category: parsed.category || "ui",
      description: parsed.description || "",
      tags: parsed.tags || [],
      dependencies: parsed.dependencies || [],
      devDependencies: parsed.devDependencies || [],
      registryDependencies: parsed.registryDependencies || [],
      code: primaryFile?.content || "",
      files,
      meta: parsed.meta,
    };
  } catch (err) {
    return null;
  }
}

function listCategories() {
  const items = loadRegistryIndex();
  const categoryConfigs = {
    ui: {
      title: "UI Primitives",
      description: "Базовые переиспользуемые атомарные компоненты интерфейса (Button, Input, Dialog, etc.)",
    },
    blocks: {
      title: "Composite Blocks",
      description: "Готовые смысловые блоки и паттерны страниц (Hero, Pricing, Bento, Testimonials, etc.)",
    },
    templates: {
      title: "Page Templates",
      description: "Полноценные экраны и шаблоны приложений (Landing, Dashboard, Auth)",
    },
  };

  const map = { ui: [], blocks: [], templates: [] };
  for (const item of items) {
    const cat = item.category || "ui";
    if (!map[cat]) map[cat] = [];
    map[cat].push(item.name);
  }

  const categories = Object.keys(map).map((cat) => ({
    name: cat,
    title: categoryConfigs[cat]?.title || cat,
    description: categoryConfigs[cat]?.description || "",
    count: map[cat].length,
    items: map[cat],
  }));

  return {
    totalComponents: items.length,
    categories,
  };
}

const PALETTES = {
  zinc: {
    light: { "--primary": "hsl(240 5.9% 10%)", "--primary-foreground": "hsl(0 0% 98%)", "--ring": "hsl(240 5.9% 10%)" },
    dark: { "--primary": "hsl(0 0% 98%)", "--primary-foreground": "hsl(240 5.9% 10%)", "--ring": "hsl(240 4.9% 83.9%)" },
  },
  slate: {
    light: { "--primary": "hsl(215 25% 27%)", "--primary-foreground": "hsl(210 40% 98%)", "--ring": "hsl(215 25% 27%)" },
    dark: { "--primary": "hsl(210 40% 98%)", "--primary-foreground": "hsl(215 25% 27%)", "--ring": "hsl(217.2 32.6% 17.5%)" },
  },
  violet: {
    light: { "--primary": "hsl(263.4 70% 50.4%)", "--primary-foreground": "hsl(210 20% 98%)", "--ring": "hsl(263.4 70% 50.4%)" },
    dark: { "--primary": "hsl(263.4 70% 50.4%)", "--primary-foreground": "hsl(210 20% 98%)", "--ring": "hsl(263.4 70% 50.4%)" },
  },
  emerald: {
    light: { "--primary": "hsl(142.1 76.2% 36.3%)", "--primary-foreground": "hsl(355.7 100% 97.3%)", "--ring": "hsl(142.1 76.2% 36.3%)" },
    dark: { "--primary": "hsl(142.1 70.6% 45.3%)", "--primary-foreground": "hsl(144.9 80.4% 10%)", "--ring": "hsl(142.1 70.6% 45.3%)" },
  },
  rose: {
    light: { "--primary": "hsl(346.8 77.2% 49.8%)", "--primary-foreground": "hsl(355.7 100% 97.3%)", "--ring": "hsl(346.8 77.2% 49.8%)" },
    dark: { "--primary": "hsl(346.8 77.2% 49.8%)", "--primary-foreground": "hsl(355.7 100% 97.3%)", "--ring": "hsl(346.8 77.2% 49.8%)" },
  },
};

const BASE_LIGHT = {
  "--background": "hsl(0 0% 100%)",
  "--foreground": "hsl(240 10% 3.9%)",
  "--card": "hsl(0 0% 100%)",
  "--card-foreground": "hsl(240 10% 3.9%)",
  "--popover": "hsl(0 0% 100%)",
  "--popover-foreground": "hsl(240 10% 3.9%)",
  "--secondary": "hsl(240 4.8% 95.9%)",
  "--secondary-foreground": "hsl(240 5.9% 10%)",
  "--muted": "hsl(240 4.8% 95.9%)",
  "--muted-foreground": "hsl(240 3.8% 46.1%)",
  "--accent": "hsl(240 4.8% 95.9%)",
  "--accent-foreground": "hsl(240 5.9% 10%)",
  "--destructive": "hsl(0 84.2% 60.2%)",
  "--destructive-foreground": "hsl(0 0% 98%)",
  "--border": "hsl(240 5.9% 90%)",
  "--input": "hsl(240 5.9% 90%)",
  "--radius": "0.625rem",
};

const BASE_DARK = {
  "--background": "hsl(240 10% 3.9%)",
  "--foreground": "hsl(0 0% 98%)",
  "--card": "hsl(240 10% 3.9%)",
  "--card-foreground": "hsl(0 0% 98%)",
  "--popover": "hsl(240 10% 3.9%)",
  "--popover-foreground": "hsl(0 0% 98%)",
  "--secondary": "hsl(240 3.7% 15.9%)",
  "--secondary-foreground": "hsl(0 0% 98%)",
  "--muted": "hsl(240 3.7% 15.9%)",
  "--muted-foreground": "hsl(240 5% 64.9%)",
  "--accent": "hsl(240 3.7% 15.9%)",
  "--accent-foreground": "hsl(0 0% 98%)",
  "--destructive": "hsl(0 62.8% 30.6%)",
  "--destructive-foreground": "hsl(0 0% 98%)",
  "--border": "hsl(240 3.7% 15.9%)",
  "--input": "hsl(240 3.7% 15.9%)",
};

function getThemeTokens({ theme = "zinc", mode }) {
  let paletteKey = theme.toLowerCase().trim();
  let explicitMode = mode;

  if (paletteKey.includes("-dark")) {
    paletteKey = paletteKey.replace("-dark", "");
    explicitMode = "dark";
  } else if (paletteKey.includes("-light")) {
    paletteKey = paletteKey.replace("-light", "");
    explicitMode = "light";
  }

  const palette = PALETTES[paletteKey] || PALETTES.zinc;
  const targetMode = explicitMode || "all";

  let cssOutput = "";
  const tokensMap = {};

  if (targetMode === "light" || targetMode === "all") {
    const lightTokens = { ...BASE_LIGHT, ...palette.light };
    Object.assign(tokensMap, lightTokens);
    cssOutput += `:root {\n`;
    for (const [k, v] of Object.entries(lightTokens)) {
      cssOutput += `  ${k}: ${v};\n`;
    }
    cssOutput += `}\n\n`;
  }

  if (targetMode === "dark" || targetMode === "all") {
    const darkTokens = { ...BASE_DARK, ...palette.dark };
    if (targetMode === "dark") {
      Object.assign(tokensMap, darkTokens);
    }
    cssOutput += `.dark {\n`;
    for (const [k, v] of Object.entries(darkTokens)) {
      cssOutput += `  ${k}: ${v};\n`;
    }
    cssOutput += `}\n`;
  }

  return {
    theme: paletteKey,
    mode: targetMode,
    css: cssOutput.trim(),
    tokens: tokensMap,
  };
}

async function main() {
  const server = new McpServer({
    name: "amantle-ui",
    version: "1.0.0",
  });

  server.tool(
    "search_registry",
    "Поиск компонентов AMANTLE UI по смысловым запросам, категориям (ui, blocks, templates) и тегам.",
    {
      query: z.string().optional().describe("Поисковый запрос (например: 'button', 'pricing', 'hero')"),
      category: z.enum(["ui", "blocks", "templates"]).optional().describe("Категория компонентов"),
    },
    async ({ query, category }) => {
      const results = searchRegistry({ query, category });
      return {
        content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      };
    }
  );

  server.tool(
    "get_component",
    "Извлечение полного кода компонента, списка npm-пакетов и внутренних зависимостей реестра для прямой вставки в проект.",
    {
      name: z.string().describe("Уникальное имя компонента (например: 'button', 'hero-simple')"),
    },
    async ({ name }) => {
      const comp = getComponent({ name });
      if (!comp) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `Компонент '${name}' не найден в реестре AMANTLE UI. Используйте search_registry.`,
            },
          ],
        };
      }
      return {
        content: [{ type: "text", text: JSON.stringify(comp, null, 2) }],
      };
    }
  );

  server.tool(
    "list_categories",
    "Вывод дерева разделов (ui, blocks, templates) и агрегированной статистики по доступным элементам реестра AMANTLE UI.",
    {},
    async () => {
      const cats = listCategories();
      return {
        content: [{ type: "text", text: JSON.stringify(cats, null, 2) }],
      };
    }
  );

  server.tool(
    "get_theme_tokens",
    "Генерация готового блока CSS-переменных для выбранной цветовой палитры (zinc, slate, violet, emerald, rose) и режима темы (dark/light) для настройки globals.css.",
    {
      theme: z.string().describe("Цветовая палитра: zinc, slate, violet, emerald, rose (или составное имя violet-dark)"),
      mode: z.enum(["light", "dark"]).optional().describe("Режим оформления: light или dark"),
    },
    async ({ theme, mode }) => {
      const tokens = getThemeTokens({ theme, mode });
      return {
        content: [{ type: "text", text: JSON.stringify(tokens, null, 2) }],
      };
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("AMANTLE UI MCP Server running on stdio");
}

main().catch((err) => {
  console.error("Fatal error running AMANTLE MCP server:", err);
  process.exit(1);
});
