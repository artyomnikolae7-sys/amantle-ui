"use client";
import React, { useState } from "react";
/**
 * @component PixelTransition
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function PixelTransition({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative h-44 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-lg cursor-pointer flex flex-col justify-between ${className}`}
    >
      <div className="grid grid-cols-8 gap-1 opacity-75">
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className={`h-3 rounded-xs transition-colors duration-200 ${
              active ? (i % 2 === 0 ? "bg-primary" : "bg-primary/40") : "bg-muted"
            }`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-xs font-semibold">
        <span>Pixel Grid Matrix</span>
        <span className="font-mono text-primary">{active ? "ENGAGED" : "IDLE"}</span>
      </div>
    </div>
  );
}
export default PixelTransition;
