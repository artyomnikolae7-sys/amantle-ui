"use client";
import React from "react";
/**
 * @component HoverSpotlightBorder
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverSpotlightBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative rounded-2xl p-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent bg-[length:200%_auto] hover:animate-[spin_4s_linear_infinite] max-w-xs ${className}`}>
      <div className="rounded-[14px] bg-card p-5">
        <h5 className="text-xs font-bold text-foreground">Perimeter Spotlight</h5>
        <p className="text-[11px] text-muted-foreground mt-1">Conic border animation triggered on card focus.</p>
      </div>
    </div>
  );
}
export default HoverSpotlightBorder;
