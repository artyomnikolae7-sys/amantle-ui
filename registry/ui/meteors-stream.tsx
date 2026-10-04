"use client";
import React from "react";
/**
 * @component MeteorsStream
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function MeteorsStream({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-28 w-56 rounded-2xl border border-border/60 bg-card p-4 overflow-hidden flex items-center justify-center ${className}`}>
      <span className="font-bold text-xs text-foreground">Meteorite Track</span>
      <span className="absolute -top-4 -right-4 h-12 w-0.5 rotate-45 bg-gradient-to-b from-primary to-transparent animate-ping" />
    </div>
  );
}
export default MeteorsStream;
