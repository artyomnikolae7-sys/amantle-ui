"use client";
import React from "react";
/**
 * @component HoverLiquidCard
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverLiquidCard({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative p-6 bg-card border border-border/70 rounded-2xl transition-all duration-500 hover:rounded-[2rem] max-w-xs shadow-sm hover:shadow-xl ${className}`}>
      <h4 className="text-sm font-bold text-foreground">Fluid Curvature</h4>
      <p className="text-xs text-muted-foreground mt-1">Dynamic organic border-radius morph on hover states.</p>
    </div>
  );
}
export default HoverLiquidCard;
