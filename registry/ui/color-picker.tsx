/**
 * @source https://magicui.design/docs/components/color-picker
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ColorPickerProps {
  className?: string;
  defaultColor?: string;
  onChange?: (color: string) => void;
}

const PRESET_COLORS = [
  "#6366f1", "#8b5cf6", "#ec4899", "#ef4444", "#f97316", "#eab308", "#10b981", "#06b6d4", "#3b82f6", "#0f172a"
];

export function ColorPicker({ className, defaultColor = "#6366f1", onChange }: ColorPickerProps) {
  const [color, setColor] = React.useState(defaultColor);

  const handleSelect = (c: string) => {
    setColor(c);
    onChange?.(c);
  };

  return (
    <div className={cn("w-64 rounded-xl border border-border bg-card p-4 shadow-xl space-y-3", className)}>
      <div className="flex items-center gap-3">
        <div style={{ backgroundColor: color }} className="h-10 w-10 rounded-lg border border-border shadow-inner shrink-0" />
        <div className="flex-1">
          <label className="text-[11px] font-semibold text-muted-foreground uppercase">Цвет HEX</label>
          <input
            value={color}
            onChange={(e) => handleSelect(e.target.value)}
            className="w-full font-mono text-sm uppercase bg-transparent text-foreground outline-none font-bold"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 pt-2 border-t border-border">
        {PRESET_COLORS.map((c) => (
          <button
            key={c}
            onClick={() => handleSelect(c)}
            style={{ backgroundColor: c }}
            className="h-8 w-8 rounded-md flex items-center justify-center transition-transform hover:scale-110 shadow-sm cursor-pointer"
          >
            {color.toLowerCase() === c.toLowerCase() && <Check className="h-4 w-4 text-white drop-shadow" />}
          </button>
        ))}
      </div>
    </div>
  );
}
