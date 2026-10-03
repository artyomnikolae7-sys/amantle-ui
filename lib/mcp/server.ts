import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  searchRegistry,
  getComponent,
  listCategories,
  getThemeTokens,
} from "./tools";

/**
 * Factory for creating the AMANTLE UI MCP Server with all 4 registered tools:
 * 1. search_registry
 * 2. get_component
 * 3. list_categories
 * 4. get_theme_tokens
 */
export function createAmantleMcpServer(): McpServer {
  const server = new McpServer({
    name: "amantle-ui",
    version: "1.0.0",
  });

  // Tool 1: search_registry
  server.tool(
    "search_registry",
    "Поиск компонентов AMANTLE UI по смысловым запросам, категориям (ui, blocks, templates) и тегам.",
    {
      query: z
        .string()
        .optional()
        .describe("Поисковый запрос (например: 'button', 'pricing', 'hero', 'dialog')"),
      category: z
        .enum(["ui", "blocks", "templates"])
        .optional()
        .describe("Категория компонентов"),
    },
    async ({ query, category }) => {
      const results = searchRegistry({ query, category });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(results, null, 2),
          },
        ],
      };
    }
  );

  // Tool 2: get_component
  server.tool(
    "get_component",
    "Извлечение полного кода компонента, списка npm-пакетов и внутренних зависимостей реестра для прямой вставки в проект.",
    {
      name: z
        .string()
        .describe("Уникальное имя компонента (например: 'button', 'hero-simple', 'saas-landing-page')"),
    },
    async ({ name }) => {
      const component = getComponent({ name });
      if (!component) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `Компонент '${name}' не найден в реестре AMANTLE UI. Используйте search_registry для поиска доступных компонентов.`,
            },
          ],
        };
      }
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(component, null, 2),
          },
        ],
      };
    }
  );

  // Tool 3: list_categories
  server.tool(
    "list_categories",
    "Вывод дерева разделов (ui, blocks, templates) и агрегированной статистики по доступным элементам реестра AMANTLE UI.",
    {},
    async () => {
      const data = listCategories();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data, null, 2),
          },
        ],
      };
    }
  );

  // Tool 4: get_theme_tokens
  server.tool(
    "get_theme_tokens",
    "Генерация готового блока CSS-переменных для выбранной цветовой палитры (zinc, slate, violet, emerald, rose) и режима темы (dark/light) для настройки globals.css.",
    {
      theme: z
        .string()
        .describe("Цветовая палитра: zinc, slate, violet, emerald, rose (или составное имя violet-dark)"),
      mode: z
        .enum(["light", "dark"])
        .optional()
        .describe("Режим оформления: light или dark"),
    },
    async ({ theme, mode }) => {
      const tokens = getThemeTokens({ theme, mode });
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(tokens, null, 2),
          },
        ],
      };
    }
  );

  return server;
}
