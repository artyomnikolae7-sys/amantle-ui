"use client";
import React from "react";
/**
 * @component TremorLtvExpansionSegmentedPill
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorLtvExpansionSegmentedPill({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="space-y-2 w-full">
        <div className="flex justify-between items-center text-xs">
          <span className="font-medium text-foreground">LTV Projection</span>
          <span className="text-muted-foreground">+12.7%</span>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden flex bg-muted">
          <div className="h-full bg-emerald-500 w-[60%]" />
          <div className="h-full bg-indigo-500 w-[25%]" />
          <div className="h-full bg-amber-500 w-[15%]" />
        </div>
      </div>
    </div>
  );
}
export default TremorLtvExpansionSegmentedPill;
