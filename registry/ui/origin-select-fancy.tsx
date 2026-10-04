"use client";

import React, { useState } from "react";

/**
 * @component OriginSelectFancy
 * @source https://originui.com/selects
 * @author Origin UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface OriginSelectOption {
  value: string;
  label: string;
  icon?: string;
}

export interface OriginSelectFancyProps {
  options?: OriginSelectOption[];
  defaultValue?: string;
  className?: string;
}

export function OriginSelectFancy({
  options = [
    { value: "reactbits", label: "React Bits Engine", icon: "⚡" },
    { value: "magicui", label: "Magic UI Primitives", icon: "✨" },
    { value: "aceternity", label: "Aceternity Cinematic", icon: "🌌" },
    { value: "cultui", label: "Cult UI Minimal", icon: "🪐" },
  ],
  defaultValue = "reactbits",
  className = "",
}: OriginSelectFancyProps) {
  const [selected, setSelected] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const activeOption = options.find((o) => o.value === selected) || options[0];

  return (
    <div className={`relative w-full max-w-xs ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-2.5 text-xs font-semibold text-foreground shadow-xs transition-all hover:bg-muted/30 active:scale-[0.98]"
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <span className="flex items-center gap-2">
          <span>{activeOption.icon}</span>
          <span>{activeOption.label}</span>
        </span>
        <span className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div
          className="absolute z-50 mt-1.5 flex w-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card p-1 shadow-xl animate-in fade-in zoom-in-95 duration-150"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setSelected(opt.value);
                setOpen(false);
              }}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                selected === opt.value ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{opt.icon}</span>
                <span>{opt.label}</span>
              </span>
              {selected === opt.value && <span>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default OriginSelectFancy;
