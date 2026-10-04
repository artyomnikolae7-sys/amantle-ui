/**
 * @file components/theme-customizer-modal.tsx
 * @description Interactive Theme & Remix Customizer for AMANTLE UI
 * Allows live switching of color palettes, corner radiuses, and design styles (Neo-Brutalist, Cyber-Glass).
 */

"use client";

import React, { useState } from "react";
import {
  useThemeCustomizer,
  PALETTES,
  RADII,
  DESIGN_STYLES,
  generateCSSSnippet,
  ColorPalette,
  RadiusValue,
  DesignStyle,
} from "@/lib/theme-customizer";
import { SlidersHorizontal, Check, Copy, RotateCcw, X, Sparkles } from "lucide-react";

export function ThemeCustomizerTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const { config, updateConfig, resetConfig, mounted } = useThemeCustomizer();
  const [copied, setCopied] = useState(false);

  if (!mounted) return null;

  const handleCopy = () => {
    const css = generateCSSSnippet(config);
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-background/80 hover:bg-muted/80 backdrop-blur-md transition-all shadow-xs cursor-pointer"
        title="Настроить дизайн-систему (Remix)"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-primary animate-pulse" />
        <span className="hidden sm:inline">Remix Theme</span>
      </button>

      {/* Drawer / Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full max-w-md bg-card text-card-foreground border border-border rounded-2xl shadow-2xl p-6 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">AMANTLE Remix Engine</h3>
                  <p className="text-xs text-muted-foreground">Живая кастомизация токенов дизайн-системы</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-5 py-4 max-h-[70vh] overflow-y-auto pr-1">
              {/* 1. Color Palette */}
              <div>
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">
                  Цветовая гамма (Palette)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {PALETTES.map((p) => {
                    const isSelected = config.palette === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => updateConfig({ palette: p.id })}
                        className={`flex items-center gap-2 p-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary shadow-xs"
                            : "border-border/60 bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/60"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0 shadow-inner"
                          style={{ backgroundColor: p.primaryHex }}
                        />
                        <span className="truncate">{p.name}</span>
                        {isSelected && <Check className="w-3 h-3 text-primary ml-auto" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Border Radius */}
              <div>
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">
                  Скругление углов (Border Radius)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {RADII.map((r) => {
                    const isSelected = config.radius === r.id;
                    return (
                      <button
                        key={r.id}
                        onClick={() => updateConfig({ radius: r.id })}
                        className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary shadow-xs"
                            : "border-border/60 bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/60"
                        }`}
                      >
                        {r.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Design Style */}
              <div>
                <label className="text-xs font-semibold text-foreground uppercase tracking-wider block mb-2">
                  Стилистический характер (Style Flavor)
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {DESIGN_STYLES.map((s) => {
                    const isSelected = config.style === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => updateConfig({ style: s.id })}
                        className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary shadow-xs"
                            : "border-border/60 bg-muted/30 text-muted-foreground hover:border-border hover:bg-muted/60"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-xs font-semibold text-foreground">{s.name}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
                        </div>
                        <span className="text-[11px] text-muted-foreground mt-0.5">{s.description}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border/60 gap-2">
              <button
                onClick={resetConfig}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Сброс</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm cursor-pointer ml-auto"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Скопировано!" : "Копировать CSS"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
