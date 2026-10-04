"use client";
import React, { useState } from "react";
/**
 * @component RippleButton
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function RippleButton({ children = "Click for Ripple", className = "" }: { children?: React.ReactNode; className?: string }) {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  return (
    <button
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - r.left, y: e.clientY - r.top });
        setTimeout(() => setCoords(null), 500);
      }}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md active:scale-95 ${className}`}
    >
      {coords && (
        <span
          style={{ left: coords.x, top: coords.y }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white/30 animate-ping"
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
export default RippleButton;
