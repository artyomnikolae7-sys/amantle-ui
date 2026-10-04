"use client";
import React from "react";
/**
 * @component TremorP99LatencySummaryStat
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorP99LatencySummaryStat({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="text-center p-2">
        <div className="text-2xl font-black tracking-tight text-foreground">ms18.4</div>
        <div className="text-[11px] font-medium text-muted-foreground mt-0.5">P99 Response Tail</div>
      </div>
    </div>
  );
}
export default TremorP99LatencySummaryStat;
