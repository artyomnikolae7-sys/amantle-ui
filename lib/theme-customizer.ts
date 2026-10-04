/**
 * @file lib/theme-customizer.ts
 * @description Theme & Remix State Engine for AMANTLE UI
 * Provides dynamic control over color palettes, border radius, styling flavors, and live CSS sync.
 */

"use client";

import { useEffect, useState } from "react";

export type ColorPalette =
  | "zinc"
  | "slate"
  | "stone"
  | "violet"
  | "emerald"
  | "rose"
  | "blue"
  | "amber";

export type RadiusValue = "0" | "0.3" | "0.5" | "0.75" | "1.0" | "full";

export type DesignStyle = "default" | "neo-brutalist" | "cyber-glass";

export interface ThemeConfig {
  palette: ColorPalette;
  radius: RadiusValue;
  style: DesignStyle;
}

export const PALETTES: { id: ColorPalette; name: string; primaryHex: string; darkHex: string }[] = [
  { id: "zinc", name: "Zinc", primaryHex: "#18181b", darkHex: "#fafafa" },
  { id: "slate", name: "Slate", primaryHex: "#0f172a", darkHex: "#f8fafc" },
  { id: "stone", name: "Stone", primaryHex: "#1c1917", darkHex: "#fafaf9" },
  { id: "violet", name: "Violet", primaryHex: "#7c3aed", darkHex: "#8b5cf6" },
  { id: "blue", name: "Blue", primaryHex: "#2563eb", darkHex: "#3b82f6" },
  { id: "emerald", name: "Emerald", primaryHex: "#059669", darkHex: "#10b981" },
  { id: "rose", name: "Rose", primaryHex: "#e11d48", darkHex: "#f43f5e" },
  { id: "amber", name: "Amber", primaryHex: "#d97706", darkHex: "#f59e0b" },
];

export const RADII: { id: RadiusValue; label: string; value: string }[] = [
  { id: "0", label: "0px (Sharp)", value: "0rem" },
  { id: "0.3", label: "4px (Compact)", value: "0.3rem" },
  { id: "0.5", label: "8px (Default)", value: "0.5rem" },
  { id: "0.75", label: "12px (Soft)", value: "0.75rem" },
  { id: "1.0", label: "16px (Rounded)", value: "1.0rem" },
  { id: "full", label: "Pill (Full)", value: "9999px" },
];

export const DESIGN_STYLES: { id: DesignStyle; name: string; description: string }[] = [
  { id: "default", name: "Modern Minimal", description: "Чистый каноничный дизайн shadcn/ui" },
  { id: "neo-brutalist", name: "Neo-Brutalist", description: "Контрастные обводки 2px, плотные тени и смещение" },
  { id: "cyber-glass", name: "Cyber-Glass", description: "Матовое стекло backdrop-blur, неоновая аура и тонкие границы" },
];

const STORAGE_KEY = "amantle_theme_config";

const DEFAULT_CONFIG: ThemeConfig = {
  palette: "violet",
  radius: "0.5",
  style: "default",
};

export function getStoredThemeConfig(): ThemeConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    const parsed = JSON.parse(raw);
    return {
      palette: parsed.palette || DEFAULT_CONFIG.palette,
      radius: parsed.radius || DEFAULT_CONFIG.radius,
      style: parsed.style || DEFAULT_CONFIG.style,
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

export function applyThemeConfig(config: ThemeConfig) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  // 1. Palette
  root.setAttribute("data-theme", config.palette);

  // 2. Radius
  const radiusEntry = RADII.find((r) => r.id === config.radius);
  if (radiusEntry) {
    root.style.setProperty("--radius", radiusEntry.value);
    root.setAttribute("data-radius", config.radius);
  }

  // 3. Style flavor
  root.setAttribute("data-style", config.style);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {}

  // Dispatch custom event for listener components
  window.dispatchEvent(new CustomEvent("amantle_theme_change", { detail: config }));
}

export function useThemeCustomizer() {
  const [config, setConfig] = useState<ThemeConfig>(DEFAULT_CONFIG);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initial = getStoredThemeConfig();
    setConfig(initial);
    applyThemeConfig(initial);

    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<ThemeConfig>;
      if (customEvent.detail) {
        setConfig(customEvent.detail);
      }
    };

    window.addEventListener("amantle_theme_change", handler);
    return () => window.removeEventListener("amantle_theme_change", handler);
  }, []);

  const updateConfig = (partial: Partial<ThemeConfig>) => {
    const next = { ...config, ...partial };
    setConfig(next);
    applyThemeConfig(next);
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    applyThemeConfig(DEFAULT_CONFIG);
  };

  return {
    config,
    updateConfig,
    resetConfig,
    mounted,
  };
}

export function generateCSSSnippet(config: ThemeConfig): string {
  const radiusEntry = RADII.find((r) => r.id === config.radius);
  return `/* AMANTLE UI - Customized Tokens */
:root {
  --radius: ${radiusEntry?.value || "0.5rem"};
}

/* Palette: ${config.palette} */
[data-theme="${config.palette}"] {
  /* Active theme tokens applied */
}`;
}
