"use client";
import React from "react";
/**
 * @component GlowBorderCard
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function GlowBorderCard({
  title = "Ambient Card",
  description = "Fluid micro-interaction with subtle radial border illumination.",
  className = "",
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`group relative rounded-2xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(var(--primary),0.3)] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-cyan-500/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative rounded-2xl bg-card p-6 border border-border/60 group-hover:border-transparent transition-colors">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 font-mono font-bold text-xs">
          01
        </div>
        <h4 className="font-semibold text-foreground text-sm tracking-tight">{title}</h4>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
export default GlowBorderCard;
