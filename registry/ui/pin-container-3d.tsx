"use client";
import React from "react";
/**
 * @component PinContainer3D
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function PinContainer3D({ title = "Pin Location", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 rounded-2xl border border-border/60 bg-card p-4 shadow-sm ${className}`}>
      <div className="flex h-3 w-3 rounded-full bg-primary animate-ping" />
      <span className="text-xs font-bold text-foreground">{title}</span>
    </div>
  );
}
export default PinContainer3D;
