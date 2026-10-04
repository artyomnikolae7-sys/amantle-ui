"use client";
import React, { useState } from "react";
/**
 * @component MagneticDock
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function MagneticDock({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const icons = ["🏠", "🔍", "⚡", "📁", "⚙️"];
  return (
    <div className={`inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-card/80 p-2 shadow-lg backdrop-blur-md ${className}`}>
      {icons.map((ic, i) => {
        const isHovered = hovered === i;
        const isNeighbor = hovered !== null && Math.abs(hovered - i) === 1;
        return (
          <button
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transform: isHovered ? "scale(1.3) translateY(-4px)" : isNeighbor ? "scale(1.15) translateY(-2px)" : "scale(1)",
              transition: "transform 180ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60 text-sm shadow-xs"
          >
            {ic}
          </button>
        );
      })}
    </div>
  );
}
export default MagneticDock;
