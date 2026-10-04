"use client";
import React from "react";
/**
 * @component TremorP99LatencySparkline
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorP99LatencySparkline({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">P99 Response Tail</span>
          <div className="text-xl font-bold tracking-tight text-foreground">ms18.4</div>
        </div>
        <svg className="w-20 h-8 stroke-emerald-500 fill-emerald-500/10" viewBox="0 0 100 40">
          <path d="M0,35 Q20,10 40,25 T70,12 T100,5" fill="none" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
export default TremorP99LatencySparkline;
