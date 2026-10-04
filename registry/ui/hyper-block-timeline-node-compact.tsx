"use client";
import React from "react";
/**
 * @component HyperBlockTimelineNodeCompact
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperBlockTimelineNodeCompact({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl transition-all ${"border border-border bg-card p-3 text-xs"} ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="text-xl">🏁</span>
        <div>
          <div className="text-sm font-bold text-foreground">Product Roadmap Milestone</div>
          <div className="text-xs text-muted-foreground">Compact Density Style Block</div>
        </div>
      </div>
    </div>
  );
}
export default HyperBlockTimelineNodeCompact;
