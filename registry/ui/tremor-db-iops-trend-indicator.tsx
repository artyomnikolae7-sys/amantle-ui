"use client";
import React from "react";
/**
 * @component TremorDbIopsTrendIndicator
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorDbIopsTrendIndicator({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card">
        <span className="text-xs font-medium text-foreground">Read Replica IOPS</span>
        <span className="text-xs font-extrabold text-amber-500">+14.8%</span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
      </div>
    </div>
  );
}
export default TremorDbIopsTrendIndicator;
