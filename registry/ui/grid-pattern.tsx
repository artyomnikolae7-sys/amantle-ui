"use client";
import React from "react";
/**
 * @component GridPattern
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-32 w-64 rounded-2xl border border-border/60 bg-card overflow-hidden flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />
      <span className="relative z-10 text-xs font-bold text-foreground">Grid Pattern Geometry</span>
    </div>
  );
}
export default GridPattern;
