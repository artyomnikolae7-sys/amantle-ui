"use client";
import React from "react";
/**
 * @component DitherCard
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function DitherCard({ title = "Dither Matrix Surface", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`group relative flex h-48 w-72 flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-md hover:shadow-xl transition-all active:scale-[0.98] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:8px_8px] opacity-25 group-hover:opacity-40 transition-opacity" />
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
        ░
      </div>
      <div className="relative z-10">
        <h4 className="text-sm font-bold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">High-frequency dither halftone shader</p>
      </div>
    </div>
  );
}
export default DitherCard;
