"use client";
import React from "react";
/**
 * @component LampHeader
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function LampHeader({ title = "Conical Luminary", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`relative flex h-36 w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-card ${className}`}>
      <div className="absolute top-0 h-16 w-32 bg-primary/30 blur-2xl" />
      <h3 className="relative z-10 text-base font-black tracking-tight text-foreground">{title}</h3>
    </div>
  );
}
export default LampHeader;
