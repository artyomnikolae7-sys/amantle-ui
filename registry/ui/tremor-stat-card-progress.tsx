"use client";
import React from "react";
/**
 * @component TremorStatCardProgress
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorStatCardProgress({ className = "" }: { className?: string }) {
  return (
    <div className={`p-4 rounded-xl border border-border/60 bg-card max-w-xs space-y-3 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-foreground">Weekly Target</span>
        <span className="font-mono text-primary font-bold">84%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: "84%" }} />
      </div>
      <p className="text-[11px] text-muted-foreground">303 of 361 automated components passed motion audit.</p>
    </div>
  );
}
export default TremorStatCardProgress;
