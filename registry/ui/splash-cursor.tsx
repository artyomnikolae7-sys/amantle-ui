"use client";
import React, { useState } from "react";
/**
 * @component SplashCursor
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function SplashCursor({ className = "" }: { className?: string }) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple = { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top };
    setRipples(r => [...r.slice(-4), newRipple]);
  };
  return (
    <div
      onClick={handleClick}
      className={`relative h-40 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm cursor-crosshair select-none flex items-center justify-center ${className}`}
    >
      {ripples.map(r => (
        <span
          key={r.id}
          style={{ left: r.x - 20, top: r.y - 20 }}
          className="pointer-events-none absolute h-10 w-10 rounded-full border-2 border-primary animate-ping opacity-75"
        />
      ))}
      <span className="text-xs font-medium text-muted-foreground">Click anywhere for kinetic ripple splash</span>
    </div>
  );
}
export default SplashCursor;
