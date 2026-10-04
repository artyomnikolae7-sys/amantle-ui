"use client";
import React from "react";
/**
 * @component SparklesCore
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function SparklesCore({ title = "Sparkle Stellar Field", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`relative flex h-36 w-64 items-center justify-center rounded-2xl border border-border/60 bg-card overflow-hidden ${className}`}>
      <span className="text-xs font-black tracking-widest text-primary uppercase select-none">✨ {title} ✨</span>
    </div>
  );
}
export default SparklesCore;
