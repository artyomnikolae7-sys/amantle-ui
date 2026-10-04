"use client";
import React from "react";
/**
 * @component HyperBlockFaqItemContrast
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperBlockFaqItemContrast({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl transition-all ${"border-2 border-foreground/30 bg-card"} ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="text-xl">❓</span>
        <div>
          <div className="text-sm font-bold text-foreground">Expandable Accordion FAQ</div>
          <div className="text-xs text-muted-foreground">High Contrast Style Block</div>
        </div>
      </div>
    </div>
  );
}
export default HyperBlockFaqItemContrast;
