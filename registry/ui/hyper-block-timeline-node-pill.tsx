"use client";
import React from "react";
/**
 * @component HyperBlockTimelineNodePill
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperBlockTimelineNodePill({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl transition-all ${"border border-border bg-card rounded-3xl"} ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="text-xl">🏁</span>
        <div>
          <div className="text-sm font-bold text-foreground">Product Roadmap Milestone</div>
          <div className="text-xs text-muted-foreground">Curved Capsule Style Block</div>
        </div>
      </div>
    </div>
  );
}
export default HyperBlockTimelineNodePill;
