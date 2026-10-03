"use client";

import * as React from "react";
import { Sun, Moon, Palette as PaletteIcon } from "lucide-react";
import { useAppTheme, type Palette } from "./theme-provider";

const PALETTES: { name: Palette; label: string; color: string }[] = [
  { name: "zinc", label: "Zinc", color: "bg-zinc-500" },
  { name: "slate", label: "Slate", color: "bg-slate-500" },
  { name: "violet", label: "Violet", color: "bg-violet-600" },
  { name: "emerald", label: "Emerald", color: "bg-emerald-600" },
  { name: "rose", label: "Rose", color: "bg-rose-600" },
];

export function ThemeToggle() {
  const { theme, setTheme, palette, setPalette } = useAppTheme();
  const [mounted, setMounted] = React.useState(false);
  const [showPaletteMenu, setShowPaletteMenu] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8" />;
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      {/* Palette selector dropdown / pill */}
      <div className="relative">
        <button
          onClick={() => setShowPaletteMenu(!showPaletteMenu)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md border border-border bg-card text-foreground hover:bg-accent transition-colors"
          title="Сменить цветовую палитру"
        >
          <span className={`w-2.5 h-2.5 rounded-full ${PALETTES.find((p) => p.name === palette)?.color || "bg-primary"}`} />
          <span className="capitalize hidden sm:inline">{palette}</span>
          <PaletteIcon className="w-3.5 h-3.5 opacity-60 ml-0.5" />
        </button>

        {showPaletteMenu && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowPaletteMenu(false)}
            />
            <div className="absolute right-0 mt-1.5 z-50 min-w-[130px] rounded-lg border border-border bg-popover p-1.5 shadow-md">
              <div className="text-[10px] uppercase font-semibold text-muted-foreground px-2 py-1">
                Палитра
              </div>
              {PALETTES.map((p) => (
                <button
                  key={p.name}
                  onClick={() => {
                    setPalette(p.name);
                    setShowPaletteMenu(false);
                  }}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-md transition-colors ${
                    palette === p.name ? "bg-accent font-semibold text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  }`}
                >
                  <span className={`w-3 h-3 rounded-full ${p.color}`} />
                  {p.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Mode toggle button (Dark / Light) */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="p-1.5 rounded-md border border-border bg-card text-foreground hover:bg-accent transition-colors"
        title={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      >
        {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
      </button>
    </div>
  );
}
