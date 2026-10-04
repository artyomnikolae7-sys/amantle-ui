"use client";
import React, { useState } from "react";
/**
 * @component DirectionAwareHover
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function DirectionAwareHover({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative h-40 w-52 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm cursor-pointer flex items-center justify-center ${className}`}
    >
      <span className={`text-xs font-bold transition-all duration-300 ${hovered ? "scale-115 text-primary" : "text-foreground"}`}>
        Directional Surface
      </span>
    </div>
  );
}
export default DirectionAwareHover;
