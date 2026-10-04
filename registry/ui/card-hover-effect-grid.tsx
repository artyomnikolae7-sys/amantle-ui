"use client";
import React, { useState } from "react";
/**
 * @component CardHoverEffectGrid
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function CardHoverEffectGrid({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const cards = ["Next.js 15", "React 19", "Tailwind v4"];
  return (
    <div className={`grid grid-cols-3 gap-2 w-full max-w-sm ${className}`}>
      {cards.map((c, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className={`rounded-xl border p-3 text-center text-xs font-bold transition-all ${
            hovered === i ? "border-primary bg-primary/10 scale-105 shadow-md" : "border-border/60 bg-card"
          }`}
        >
          {c}
        </div>
      ))}
    </div>
  );
}
export default CardHoverEffectGrid;
