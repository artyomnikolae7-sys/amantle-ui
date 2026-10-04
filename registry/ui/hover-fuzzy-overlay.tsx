"use client";
import React, { useState } from "react";
/**
 * @component HoverFuzzyOverlay
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverFuzzyOverlay({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 max-w-xs transition-all duration-300 ${className}`}
    >
      <div
        className={`absolute inset-0 bg-primary/10 transition-opacity duration-300 pointer-events-none ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <h4 className="relative z-10 text-sm font-bold text-foreground">Retro Texture Glow</h4>
      <p className="relative z-10 text-xs text-muted-foreground mt-1">Ambient glow reaction on hover triggers.</p>
    </div>
  );
}
export default HoverFuzzyOverlay;
