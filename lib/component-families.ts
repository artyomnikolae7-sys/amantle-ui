/**
 * @file lib/component-families.ts
 * @description Hierarchical Component Grouping & Family Definitions for AMANTLE UI
 * Intelligently classifies all UI primitives, blocks, and templates into intuitive component families.
 */

export interface ComponentFamily {
  id: string;
  name: string;
  category: "ui" | "blocks" | "templates" | "all";
  iconName: string;
  badge?: string;
}

export const FAMILIES: Record<string, ComponentFamily> = {
  // === UI Primitives Families ===
  "buttons-actions": {
    id: "buttons-actions",
    name: "Кнопки и Действия",
    category: "ui",
    iconName: "MousePointerClick",
  },
  "inputs-forms": {
    id: "inputs-forms",
    name: "Формы и Ввод данных",
    category: "ui",
    iconName: "FormInput",
  },
  "cards-surfaces": {
    id: "cards-surfaces",
    name: "Карточки и Поверхности",
    category: "ui",
    iconName: "LayoutTemplate",
  },
  "navigation-menus": {
    id: "navigation-menus",
    name: "Навигация и Меню",
    category: "ui",
    iconName: "Compass",
  },
  "typography-text": {
    id: "typography-text",
    name: "Текст и Типографика",
    category: "ui",
    iconName: "Type",
  },
  "feedback-overlays": {
    id: "feedback-overlays",
    name: "Уведомления и Модалки",
    category: "ui",
    iconName: "Bell",
  },
  "data-display": {
    id: "data-display",
    name: "Отображение данных",
    category: "ui",
    iconName: "Table",
  },
  "motion-fx": {
    id: "motion-fx",
    name: "Анимации и Визуальные FX",
    category: "ui",
    iconName: "Sparkles",
  },

  // === Composite Blocks Families ===
  "blocks-hero": {
    id: "blocks-hero",
    name: "Hero & Первые экраны",
    category: "blocks",
    iconName: "Zap",
  },
  "blocks-features": {
    id: "blocks-features",
    name: "Сетки преимуществ & Bento",
    category: "blocks",
    iconName: "Grid",
  },
  "blocks-pricing": {
    id: "blocks-pricing",
    name: "Тарифные планы (Pricing)",
    category: "blocks",
    iconName: "CreditCard",
  },
  "blocks-social": {
    id: "blocks-social",
    name: "Отзывы, Команда & FAQ",
    category: "blocks",
    iconName: "Users",
  },
  "blocks-footers": {
    id: "blocks-footers",
    name: "Футеры & CTA секции",
    category: "blocks",
    iconName: "Footprints",
  },

  // === Templates ===
  "templates-pages": {
    id: "templates-pages",
    name: "Готовые шаблоны страниц",
    category: "templates",
    iconName: "BookOpen",
  },

  // Fallback
  "other-components": {
    id: "other-components",
    name: "Другие компоненты",
    category: "all",
    iconName: "Layers",
  },
};

export function getComponentFamily(name: string, category: string = "ui"): ComponentFamily {
  const n = name.toLowerCase();

  // Templates
  if (category === "templates") {
    return FAMILIES["templates-pages"];
  }

  // Blocks
  if (category === "blocks") {
    if (n.startsWith("hero") || n.includes("header") || n.includes("banner")) {
      return FAMILIES["blocks-hero"];
    }
    if (n.startsWith("pricing") || n.includes("plan") || n.includes("tier")) {
      return FAMILIES["blocks-pricing"];
    }
    if (n.startsWith("feature") || n.includes("bento") || n.includes("stats") || n.includes("grid")) {
      return FAMILIES["blocks-features"];
    }
    if (n.startsWith("testimonial") || n.startsWith("team") || n.startsWith("faq") || n.includes("review")) {
      return FAMILIES["blocks-social"];
    }
    if (n.startsWith("footer") || n.startsWith("cta") || n.includes("newsletter")) {
      return FAMILIES["blocks-footers"];
    }
    return FAMILIES["blocks-features"];
  }

  // UI Primitives
  if (
    n.startsWith("button") ||
    n.includes("button") ||
    n.startsWith("badge") ||
    n.includes("badge") ||
    n.includes("chip") ||
    n.includes("action")
  ) {
    return FAMILIES["buttons-actions"];
  }

  if (
    n.startsWith("input") ||
    n.includes("input") ||
    n.startsWith("checkbox") ||
    n.startsWith("radio") ||
    n.startsWith("switch") ||
    n.startsWith("slider") ||
    n.startsWith("select") ||
    n.includes("select") ||
    n.includes("slider") ||
    n.includes("switch") ||
    n.includes("check") ||
    n.includes("radio") ||
    n.startsWith("form") ||
    n.startsWith("calendar") ||
    n.startsWith("combobox") ||
    n.includes("toggle") ||
    n.includes("rating") ||
    n.includes("scrub")
  ) {
    return FAMILIES["inputs-forms"];
  }

  if (
    n.startsWith("card") ||
    n.includes("card") ||
    n.includes("bento") ||
    n.includes("surface") ||
    n.includes("aspect-ratio") ||
    n.includes("decay") ||
    n.includes("spotlight") ||
    n.includes("tilted") ||
    n.includes("reflective") ||
    n.includes("glare")
  ) {
    return FAMILIES["cards-surfaces"];
  }

  if (
    n.startsWith("nav") ||
    n.includes("nav") ||
    n.includes("menu") ||
    n.startsWith("tabs") ||
    n.includes("tabs") ||
    n.startsWith("dock") ||
    n.includes("dock") ||
    n.includes("breadcrumb") ||
    n.includes("pagination") ||
    n.includes("drawer") ||
    n.includes("sheet") ||
    n.includes("sidebar") ||
    n.includes("command") ||
    n.includes("tree-view")
  ) {
    return FAMILIES["navigation-menus"];
  }

  if (
    n.includes("text") ||
    n.includes("type") ||
    n.includes("ticker") ||
    n.includes("rotate") ||
    n.includes("count-up") ||
    n.includes("shuffle") ||
    n.includes("heading") ||
    n.includes("focus")
  ) {
    return FAMILIES["typography-text"];
  }

  if (
    n.startsWith("dialog") ||
    n.startsWith("alert") ||
    n.startsWith("toast") ||
    n.includes("toast") ||
    n.startsWith("tooltip") ||
    n.includes("tooltip") ||
    n.startsWith("popover") ||
    n.startsWith("hover-card") ||
    n.startsWith("progress") ||
    n.includes("progress") ||
    n.startsWith("skeleton") ||
    n.includes("gauge") ||
    n.includes("loader") ||
    n.includes("spinner")
  ) {
    return FAMILIES["feedback-overlays"];
  }

  if (
    n.startsWith("table") ||
    n.startsWith("avatar") ||
    n.startsWith("separator") ||
    n.startsWith("scroll-area") ||
    n.startsWith("collapsible") ||
    n.startsWith("accordion") ||
    n.includes("chart") ||
    n.includes("timeline") ||
    n.includes("user-profile")
  ) {
    return FAMILIES["data-display"];
  }

  if (
    n.includes("spark") ||
    n.includes("crosshair") ||
    n.includes("magnet") ||
    n.includes("star-border") ||
    n.includes("border") ||
    n.includes("dither") ||
    n.includes("laser") ||
    n.includes("mesh") ||
    n.includes("balls") ||
    n.includes("noise") ||
    n.includes("particles") ||
    n.includes("cubes") ||
    n.includes("trail") ||
    n.includes("cursor")
  ) {
    return FAMILIES["motion-fx"];
  }

  return FAMILIES["other-components"];
}
