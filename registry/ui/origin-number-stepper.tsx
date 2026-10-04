"use client";
import React, { useState } from "react";
/**
 * @component OriginNumberStepper
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginNumberStepper({ min = 1, max = 99, className = "" }: { min?: number; max?: number; className?: string }) {
  const [count, setCount] = useState(1);

  return (
    <div className={`inline-flex items-center rounded-xl border border-border/70 bg-card p-1 shadow-sm ${className}`}>
      <button
        onClick={() => setCount((c) => Math.max(min, c - 1))}
        className="h-7 w-7 rounded-lg bg-muted/60 hover:bg-muted text-foreground flex items-center justify-center font-bold text-xs transition-transform active:scale-90"
      >
        −
      </button>
      <span className="w-10 text-center text-xs font-mono font-semibold text-foreground select-none">{count}</span>
      <button
        onClick={() => setCount((c) => Math.min(max, c + 1))}
        className="h-7 w-7 rounded-lg bg-muted/60 hover:bg-muted text-foreground flex items-center justify-center font-bold text-xs transition-transform active:scale-90"
      >
        +
      </button>
    </div>
  );
}
export default OriginNumberStepper;
