"use client";

import React, { useState } from "react";

/**
 * @component StudioComponentInspector
 * @source https://shadcnstudio.dev
 * @author Shadcn Studio
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface StudioComponentInspectorProps {
  className?: string;
}

export function StudioComponentInspector({
  className = "",
}: StudioComponentInspectorProps) {
  const [radius, setRadius] = useState("0.5rem");
  const [theme, setTheme] = useState("violet");
  const [mode, setMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const palettes = ["zinc", "violet", "blue", "emerald", "rose", "amber"];
  const radii = [
    { label: "0", val: "0rem" },
    { label: "4px", val: "0.25rem" },
    { label: "8px", val: "0.5rem" },
    { label: "12px", val: "0.75rem" },
    { label: "Pill", val: "9999px" },
  ];

  return (
    <div className={`flex w-full max-w-lg flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-xl ${className}`}>
      <div className="flex items-center justify-between border-b border-border/40 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">⚙️</span>
          <span className="text-sm font-bold text-foreground">Studio Inspector</span>
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-border/50 bg-muted/40 p-1">
          <button
            onClick={() => setMode("desktop")}
            className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${mode === "desktop" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
          >
            🖥️ Desktop
          </button>
          <button
            onClick={() => setMode("tablet")}
            className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${mode === "tablet" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
          >
            📱 Tablet
          </button>
          <button
            onClick={() => setMode("mobile")}
            className={`rounded px-2 py-0.5 text-[10px] font-medium transition-colors ${mode === "mobile" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
          >
            📲 Mobile
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground">Radius Token</label>
          <div className="mt-2 flex gap-1">
            {radii.map((r) => (
              <button
                key={r.val}
                onClick={() => setRadius(r.val)}
                className={`flex-1 rounded-md border border-border/60 py-1 text-[11px] font-medium transition-colors active:scale-95 ${
                  radius === r.val ? "bg-primary text-primary-foreground border-primary" : "bg-muted/40 hover:bg-muted text-muted-foreground"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground">Color Palette</label>
          <div className="mt-2 flex gap-1.5">
            {palettes.map((p) => (
              <button
                key={p}
                onClick={() => setTheme(p)}
                className={`h-6 w-6 rounded-full border-2 transition-transform ${
                  theme === p ? "scale-110 border-foreground shadow-xs" : "border-transparent opacity-70 hover:opacity-100"
                }`}
                style={{
                  backgroundColor:
                    p === "violet" ? "#8b5cf6" : p === "blue" ? "#3b82f6" : p === "emerald" ? "#10b981" : p === "rose" ? "#f43f5e" : p === "amber" ? "#f59e0b" : "#71717a",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-dashed border-border/80 bg-muted/20 p-6 flex flex-col items-center justify-center">
        <button
          style={{ borderRadius: radius }}
          className="bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all active:scale-[0.97]"
        >
          Live Interactive Preview
        </button>
        <span className="mt-2 font-mono text-[10px] text-muted-foreground">
          --radius: {radius} | theme: {theme}
        </span>
      </div>
    </div>
  );
}

export default StudioComponentInspector;
