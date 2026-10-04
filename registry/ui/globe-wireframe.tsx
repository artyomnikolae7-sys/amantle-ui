"use client";
import React from "react";
/**
 * @component GlobeWireframe
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function GlobeWireframe({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex h-40 w-40 items-center justify-center rounded-full border border-border/80 bg-card shadow-lg select-none ${className}`}>
      <div className="absolute inset-2 rounded-full border border-dashed border-primary/40 animate-spin" style={{ animationDuration: "12s" }} />
      <div className="absolute inset-6 rounded-full border border-primary/20" />
      <span className="font-mono text-xs font-bold text-primary">GLOBAL_NET</span>
    </div>
  );
}
export default GlobeWireframe;
