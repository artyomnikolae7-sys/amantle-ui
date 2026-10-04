"use client";
import React from "react";
/**
 * @component CardClusterNodeBento
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function CardClusterNodeBento({
  title = "Global CDN Instance",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div className={`group relative p-5 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] max-w-xs ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-base">🖥️</span>
        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
          Compute
        </span>
      </div>
      <h4 className="text-xs font-bold text-foreground tracking-tight">{title}</h4>
      <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
        High-fidelity reactive surface with bento grid tile styling.
      </p>
    </div>
  );
}
export default CardClusterNodeBento;
