"use client";
import React from "react";
/**
 * @component TremorMrrFlowDeltaBadge
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorMrrFlowDeltaBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-foreground">MRR Net Flow</span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
          <span>↑</span>
          <span>+18.4%</span>
        </span>
      </div>
    </div>
  );
}
export default TremorMrrFlowDeltaBadge;
