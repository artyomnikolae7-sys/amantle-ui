"use client";
import React, { useState } from "react";
/**
 * @component FocusCards
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function FocusCards({ className = "" }: { className?: string }) {
  const [focused, setFocused] = useState<number | null>(null);
  const items = ["Alpha", "Beta", "Gamma"];
  return (
    <div className={`flex gap-2 w-full max-w-xs ${className}`}>
      {items.map((it, i) => (
        <div
          key={i}
          onMouseEnter={() => setFocused(i)}
          onMouseLeave={() => setFocused(null)}
          className={`flex-1 rounded-xl border border-border/60 bg-card p-3 text-center text-xs font-bold transition-all ${
            focused !== null && focused !== i ? "blur-xs opacity-50" : "scale-105 shadow-md border-primary"
          }`}
        >
          {it}
        </div>
      ))}
    </div>
  );
}
export default FocusCards;
