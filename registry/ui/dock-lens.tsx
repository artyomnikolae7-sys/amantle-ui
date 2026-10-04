"use client";
import React, { useState } from "react";
/**
 * @component DockLens
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function DockLens({ className = "" }: { className?: string }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const items = [
    { label: "Home", icon: "⌂" },
    { label: "Search", icon: "🔍" },
    { label: "Analytics", icon: "📊" },
    { label: "Settings", icon: "⚙️" },
    { label: "Profile", icon: "👤" },
  ];

  return (
    <div className={`flex items-end gap-2 p-2 rounded-2xl bg-card/80 backdrop-blur-md border border-border/60 shadow-xl ${className}`}>
      {items.map((item, idx) => {
        const isHovered = hoveredIdx === idx;
        const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;
        const scale = isHovered ? "scale-125 -translate-y-2" : isNeighbor ? "scale-110 -translate-y-1" : "scale-100";

        return (
          <button
            key={item.label}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`group relative flex h-11 w-11 items-center justify-center rounded-xl bg-muted/60 hover:bg-primary/20 text-foreground transition-all duration-200 ease-out active:scale-95 ${scale}`}
            title={item.label}
          >
            <span className="text-lg">{item.icon}</span>
            {isHovered && (
              <span className="absolute -top-8 px-2 py-0.5 text-[10px] font-medium bg-popover text-popover-foreground rounded-md shadow-sm border border-border/40 whitespace-nowrap animate-in fade-in zoom-in-90 duration-150">
                {item.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
export default DockLens;
