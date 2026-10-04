"use client";
import React from "react";
/**
 * @component TremorCpuLoadRadialGauge
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorCpuLoadRadialGauge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="none" className="stroke-muted" strokeWidth="3" />
            <circle cx="18" cy="18" r="14" fill="none" className="stroke-indigo-500" strokeWidth="3" strokeDasharray="88" strokeDashoffset="22" strokeLinecap="round" />
          </svg>
          <span className="absolute text-[10px] font-bold">75%</span>
        </div>
        <div>
          <div className="text-xs font-medium text-muted-foreground">Cluster Average CPU</div>
          <div className="text-sm font-bold text-foreground">%41.8</div>
        </div>
      </div>
    </div>
  );
}
export default TremorCpuLoadRadialGauge;
