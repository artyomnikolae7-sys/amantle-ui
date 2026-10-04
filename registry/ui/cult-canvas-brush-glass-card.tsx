"use client";
import React from "react";
/**
 * @component CultCanvasBrushGlassCard
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function CultCanvasBrushGlassCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="p-4 rounded-2xl bg-card/40 border border-rose-500/20 backdrop-blur-md">
        <div className="text-lg">✒️</div>
        <div className="text-sm font-bold text-foreground mt-1">Vector Precision Pen</div>
        <div className="text-[11px] text-muted-foreground mt-0.5">Ultra-precise responsive tactile surface.</div>
      </div>
    </div>
  );
}
export default CultCanvasBrushGlassCard;
