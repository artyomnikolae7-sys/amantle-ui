import fs from "fs";
import path from "path";

export interface ComponentMeta {
  source?: string;
  author?: string;
  license?: string;
  modified?: string;
}

export interface RegistryItemSummary {
  name: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  dependencies: string[];
  registryDependencies: string[];
  meta?: ComponentMeta;
}

export interface ComponentDetail extends RegistryItemSummary {
  devDependencies: string[];
  code: string;
  files: Array<{
    path: string;
    content: string;
    type: string;
    target?: string;
  }>;
}

export interface CategorySummary {
  name: string;
  title: string;
  description: string;
  count: number;
  items: string[];
}

export interface ThemeTokensResult {
  theme: string;
  mode: "light" | "dark" | "all";
  css: string;
  tokens: Record<string, string>;
}

function getRegistryDir(): string {
  const possiblePaths = [
    path.resolve(process.cwd(), "public", "r"),
    path.resolve(process.cwd(), "..", "public", "r"),
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  return path.resolve(process.cwd(), "public", "r");
}

let cachedIndex: RegistryItemSummary[] | null = null;

function loadRegistryIndex(): RegistryItemSummary[] {
  if (cachedIndex) return cachedIndex;
  const regDir = getRegistryDir();
  const indexPath = path.join(regDir, "index.json");
  if (!fs.existsSync(indexPath)) {
    return [];
  }
  try {
    const raw = fs.readFileSync(indexPath, "utf-8");
    cachedIndex = JSON.parse(raw);
    return cachedIndex || [];
  } catch (err) {
    console.error("Failed to load registry index:", err);
    return [];
  }
}

/**
 * 1. search_registry: Поиск компонентов по смысловым запросам, категориям и тегам
 */
export function searchRegistry({
  query = "",
  category,
}: {
  query?: string;
  category?: string;
}): RegistryItemSummary[] {
  const items = loadRegistryIndex();
  const q = query.trim().toLowerCase();

  return items.filter((item) => {
    if (category && item.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (!q) return true;

    const inName = item.name.toLowerCase().includes(q);
    const inTitle = item.title.toLowerCase().includes(q);
    const inDesc = item.description.toLowerCase().includes(q);
    const inTags = item.tags.some((t) => t.toLowerCase().includes(q));

    return inName || inTitle || inDesc || inTags;
  });
}

/**
 * 2. get_component: Извлечение полного кода компонента, списка npm-пакетов и внутренних зависимостей
 */
export function getComponent({ name }: { name: string }): ComponentDetail | null {
  const regDir = getRegistryDir();
  const filePath = path.join(regDir, `${name}.json`);

  if (!fs.existsSync(filePath)) {
    // Try to find by name matching
    const items = loadRegistryIndex();
    const found = items.find((i) => i.name.toLowerCase() === name.toLowerCase());
    if (found) {
      const altPath = path.join(regDir, `${found.name}.json`);
      if (fs.existsSync(altPath)) {
        return parseComponentJson(altPath);
      }
    }
    return null;
  }

  return parseComponentJson(filePath);
}

function parseComponentJson(filePath: string): ComponentDetail | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(raw);
    const files = parsed.files || [];
    const primaryFile = files[0];
    const code = primaryFile?.content || "";

    return {
      name: parsed.name,
      title: parsed.title || parsed.name,
      category: parsed.category || (parsed.type === "registry:ui" ? "ui" : parsed.type === "registry:block" ? "blocks" : "templates"),
      description: parsed.description || "",
      tags: parsed.tags || [],
      dependencies: parsed.dependencies || [],
      devDependencies: parsed.devDependencies || [],
      registryDependencies: parsed.registryDependencies || [],
      code,
      files,
      meta: parsed.meta,
    };
  } catch (err) {
    console.error("Failed to parse component json:", err);
    return null;
  }
}

/**
 * 3. list_categories: Вывод дерева разделов и агрегированной статистики по доступным элементам
 */
export function listCategories(): {
  totalComponents: number;
  categories: CategorySummary[];
} {
  const items = loadRegistryIndex();

  const categoryConfigs: Record<string, { title: string; description: string }> = {
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

  const map: Record<string, string[]> = {
    ui: [],
    blocks: [],
    templates: [],
  };

  for (const item of items) {
    const cat = item.category || "ui";
    if (!map[cat]) map[cat] = [];
    map[cat].push(item.name);
  }

  const categories: CategorySummary[] = Object.keys(map).map((cat) => ({
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

/**
 * 4. get_theme_tokens: Генерация готового блока CSS-переменных для выбранной цветовой палитры и режима темы
 */
export const PALETTES = {
  zinc: {
    name: "Zinc",
    light: {
      "--primary": "hsl(240 5.9% 10%)",
      "--primary-foreground": "hsl(0 0% 98%)",
      "--ring": "hsl(240 5.9% 10%)",
    },
    dark: {
      "--primary": "hsl(0 0% 98%)",
      "--primary-foreground": "hsl(240 5.9% 10%)",
      "--ring": "hsl(240 4.9% 83.9%)",
    },
  },
  slate: {
    name: "Slate",
    light: {
      "--primary": "hsl(215 25% 27%)",
      "--primary-foreground": "hsl(210 40% 98%)",
      "--ring": "hsl(215 25% 27%)",
    },
    dark: {
      "--primary": "hsl(210 40% 98%)",
      "--primary-foreground": "hsl(215 25% 27%)",
      "--ring": "hsl(217.2 32.6% 17.5%)",
    },
  },
  violet: {
    name: "Violet",
    light: {
      "--primary": "hsl(263.4 70% 50.4%)",
      "--primary-foreground": "hsl(210 20% 98%)",
      "--ring": "hsl(263.4 70% 50.4%)",
    },
    dark: {
      "--primary": "hsl(263.4 70% 50.4%)",
      "--primary-foreground": "hsl(210 20% 98%)",
      "--ring": "hsl(263.4 70% 50.4%)",
    },
  },
  emerald: {
    name: "Emerald",
    light: {
      "--primary": "hsl(142.1 76.2% 36.3%)",
      "--primary-foreground": "hsl(355.7 100% 97.3%)",
      "--ring": "hsl(142.1 76.2% 36.3%)",
    },
    dark: {
      "--primary": "hsl(142.1 70.6% 45.3%)",
      "--primary-foreground": "hsl(144.9 80.4% 10%)",
      "--ring": "hsl(142.1 70.6% 45.3%)",
    },
  },
  rose: {
    name: "Rose",
    light: {
      "--primary": "hsl(346.8 77.2% 49.8%)",
      "--primary-foreground": "hsl(355.7 100% 97.3%)",
      "--ring": "hsl(346.8 77.2% 49.8%)",
    },
    dark: {
      "--primary": "hsl(346.8 77.2% 49.8%)",
      "--primary-foreground": "hsl(355.7 100% 97.3%)",
      "--ring": "hsl(346.8 77.2% 49.8%)",
    },
  },
};

export const BASE_LIGHT_TOKENS: Record<string, string> = {
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

export const BASE_DARK_TOKENS: Record<string, string> = {
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

export function getThemeTokens({
  theme = "zinc",
  mode,
}: {
  theme?: string;
  mode?: "light" | "dark";
}): ThemeTokensResult {
  let paletteKey = theme.toLowerCase().trim();
  let explicitMode: "light" | "dark" | undefined = mode;

  // Handle formats like "violet-dark" or "emerald-light"
  if (paletteKey.includes("-dark")) {
    paletteKey = paletteKey.replace("-dark", "");
    explicitMode = "dark";
  } else if (paletteKey.includes("-light")) {
    paletteKey = paletteKey.replace("-light", "");
    explicitMode = "light";
  }

  const palette = (PALETTES as Record<string, any>)[paletteKey] || PALETTES.zinc;
  const targetMode = explicitMode || "all";

  let cssOutput = "";
  const tokensMap: Record<string, string> = {};

  if (targetMode === "light" || targetMode === "all") {
    const lightTokens = {
      ...BASE_LIGHT_TOKENS,
      ...palette.light,
    };
    Object.assign(tokensMap, lightTokens);

    cssOutput += `:root {\n`;
    for (const [k, v] of Object.entries(lightTokens)) {
      cssOutput += `  ${k}: ${v};\n`;
    }
    cssOutput += `}\n\n`;
  }

  if (targetMode === "dark" || targetMode === "all") {
    const darkTokens = {
      ...BASE_DARK_TOKENS,
      ...palette.dark,
    };
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
