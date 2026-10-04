"use client";
import React from "react";
/**
 * @component TremorBurnRateBarDistribution
 * @source https://raw.tremor.so
 * @author Tremor Raw
 * @license MIT
 */
export function TremorBurnRateBarDistribution({ className = "" }: { className?: string }) {
  return (
    <div className={`p-4 rounded-2xl border border-border/70 bg-card shadow-sm w-full max-w-xs space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
          <span>☁️</span>
          <span>Cloud Compute Cost</span>
        </span>
        <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono">
          -3.5%
        </span>
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-bold font-mono tracking-tight text-foreground">$1,840</h3>
        <span className="text-[10px] text-muted-foreground uppercase font-mono">Segmented Bar</span>
      </div>
      <div className="pt-2 border-t border-border/40">
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: "72%" }} />
        </div>
      </div>
    </div>
  );
}
export default TremorBurnRateBarDistribution;
