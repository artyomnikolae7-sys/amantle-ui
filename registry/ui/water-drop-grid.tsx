"use client";

import React, { useState } from "react";

/**
 * @component WaterDropGrid
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface WaterDropGridProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export function WaterDropGrid({
  rows = 5,
  cols = 8,
  className = "",
}: WaterDropGridProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setActiveIdx(idx);
    setTimeout(() => setActiveIdx(null), 600);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
      className={`gap-2.5 rounded-2xl border border-border/60 bg-card p-6 shadow-sm ${className}`}
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const isCenter = activeIdx === i;
        return (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`h-4 w-4 rounded-full transition-all duration-200 active:scale-50 ${
              isCenter
                ? "scale-150 bg-primary shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                : "bg-muted/70 hover:bg-primary/50 hover:scale-125"
            }`}
          />
        );
      })}
    </div>
  );
}

export default WaterDropGrid;
