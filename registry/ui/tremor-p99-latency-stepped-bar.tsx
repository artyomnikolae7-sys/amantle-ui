"use client";
import React from "react";
/**
 * @component TremorP99LatencySteppedBar
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorP99LatencySteppedBar({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="space-y-1.5 w-full">
        <div className="flex justify-between text-xs">
          <span className="font-medium text-muted-foreground">P99 Response Tail</span>
          <span className="font-bold text-foreground">ms18.4</span>
        </div>
        <div className="grid grid-cols-6 gap-1 h-1.5">
          <div className="rounded-full bg-indigo-500" />
          <div className="rounded-full bg-indigo-500" />
          <div className="rounded-full bg-indigo-500" />
          <div className="rounded-full bg-indigo-500" />
          <div className="rounded-full bg-indigo-500/30" />
          <div className="rounded-full bg-indigo-500/30" />
        </div>
      </div>
    </div>
  );
}
export default TremorP99LatencySteppedBar;
