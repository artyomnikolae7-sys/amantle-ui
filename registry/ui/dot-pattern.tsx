"use client";
import React from "react";
/**
 * @component DotPattern
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-32 w-64 rounded-2xl border border-border/60 bg-card overflow-hidden flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
      <span className="relative z-10 text-xs font-bold text-foreground">Dot Pattern Grid</span>
    </div>
  );
}
export default DotPattern;
