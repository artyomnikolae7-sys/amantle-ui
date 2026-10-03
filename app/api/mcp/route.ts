import { NextRequest, NextResponse } from "next/server";
import {
  searchRegistry,
  getComponent,
  listCategories,
  getThemeTokens,
} from "@/lib/mcp/tools";

export const dynamic = "force-dynamic";

const TOOLS_METADATA = [
  {
    name: "search_registry",
    description:
      "Поиск компонентов AMANTLE UI по смысловым запросам, категориям (ui, blocks, templates) и тегам.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Поисковый запрос (например: 'button', 'pricing', 'hero', 'dialog')",
        },
        category: {
          type: "string",
          enum: ["ui", "blocks", "templates"],
          description: "Категория компонентов",
        },
      },
    },
  },
  {
    name: "get_component",
    description:
      "Извлечение полного кода компонента, списка npm-пакетов и внутренних зависимостей реестра для прямой вставки в проект.",
    inputSchema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          description:
            "Уникальное имя компонента (например: 'button', 'hero-simple', 'saas-landing-page')",
        },
      },
      required: ["name"],
    },
  },
  {
    name: "list_categories",
    description:
      "Вывод дерева разделов (ui, blocks, templates) и агрегированной статистики по доступным элементам реестра AMANTLE UI.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "get_theme_tokens",
    description:
      "Генерация готового блока CSS-переменных для выбранной цветовой палитры (zinc, slate, violet, emerald, rose) и режима темы (dark/light) для настройки globals.css.",
    inputSchema: {
      type: "object",
      properties: {
        theme: {
          type: "string",
          description:
            "Цветовая палитра: zinc, slate, violet, emerald, rose (или составное имя violet-dark)",
        },
        mode: {
          type: "string",
          enum: ["light", "dark"],
          description: "Режим оформления: light или dark",
        },
      },
      required: ["theme"],
    },
  },
];

function executeTool(name: string, args: Record<string, any> = {}) {
  switch (name) {
    case "search_registry":
      return searchRegistry({
        query: args.query,
        category: args.category,
      });

    case "get_component": {
      const comp = getComponent({ name: args.name });
      if (!comp) {
        throw new Error(
          `Компонент '${args.name}' не найден в реестре AMANTLE UI. Используйте search_registry.`
        );
      }
      return comp;
    }

    case "list_categories":
      return listCategories();

    case "get_theme_tokens":
      return getThemeTokens({
        theme: args.theme,
        mode: args.mode,
      });

    default:
      throw new Error(`Неизвестный инструмент MCP: '${name}'`);
  }
}

/**
 * GET /api/mcp - Информация о MCP-сервере и перечень инструментов
 */
export async function GET() {
  return NextResponse.json({
    name: "amantle-ui-mcp",
    version: "1.0.0",
    protocol: "mcp-jsonrpc-2.0",
    description:
      "AMANTLE UI Design System Model Context Protocol Server for AI coding assistants.",
    tools: TOOLS_METADATA,
  });
}

/**
 * POST /api/mcp - Обработка JSON-RPC 2.0 и прямых вызовов инструментов
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. JSON-RPC 2.0 format
    if (body.jsonrpc === "2.0") {
      const { id, method, params } = body;

      if (method === "tools/list") {
        return NextResponse.json({
          jsonrpc: "2.0",
          id,
          result: {
            tools: TOOLS_METADATA,
          },
        });
      }

      if (method === "tools/call") {
        const toolName = params?.name;
        const toolArgs = params?.arguments || {};

        try {
          const result = executeTool(toolName, toolArgs);
          return NextResponse.json({
            jsonrpc: "2.0",
            id,
            result: {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(result, null, 2),
                },
              ],
            },
          });
        } catch (toolErr: any) {
          return NextResponse.json({
            jsonrpc: "2.0",
            id,
            result: {
              isError: true,
              content: [
                {
                  type: "text",
                  text: toolErr.message || String(toolErr),
                },
              ],
            },
          });
        }
      }

      return NextResponse.json(
        {
          jsonrpc: "2.0",
          id,
          error: {
            code: -32601,
            message: `Method '${method}' not found`,
          },
        },
        { status: 404 }
      );
    }

    // 2. Direct REST format: { tool: "name", args: { ... } } or { name: "name", arguments: { ... } }
    const toolName = body.tool || body.name;
    const toolArgs = body.args || body.arguments || {};

    if (!toolName) {
      return NextResponse.json(
        {
          error:
            "Не указано имя инструмента. Передайте 'tool' или используйте JSON-RPC 2.0 (method: 'tools/call')",
        },
        { status: 400 }
      );
    }

    const result = executeTool(toolName, toolArgs);
    return NextResponse.json({ success: true, tool: toolName, result });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Внутренняя ошибка обработки MCP-запроса" },
      { status: 500 }
    );
  }
}
