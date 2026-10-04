"use client";
import React from "react";
/**
 * @component TremorCloudSpendTrendIndicator
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorCloudSpendTrendIndicator({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card">
        <span className="text-xs font-medium text-foreground">Fleet Compute Cost</span>
        <span className="text-xs font-extrabold text-emerald-500">-6.5%</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-emerald-500/50 shadow-sm" />
      </div>
    </div>
  );
}
export default TremorCloudSpendTrendIndicator;
