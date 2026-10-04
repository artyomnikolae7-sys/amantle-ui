"use client";
import React, { useState } from "react";
/**
 * @component OriginColorPalettePicker
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginColorPalettePicker({ className = "" }: { className?: string }) {
  const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4"];
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <div className={`flex items-center gap-2 p-2 rounded-xl border border-border/60 bg-card/60 max-w-fit ${className}`}>
      {colors.map((c) => (
        <button
          key={c}
          onClick={() => setActiveColor(c)}
          style={{ backgroundColor: c }}
          className={`h-6 w-6 rounded-full transition-transform active:scale-90 ${
            activeColor === c ? "ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110" : "hover:scale-105"
          }`}
        />
      ))}
    </div>
  );
}
export default OriginColorPalettePicker;
