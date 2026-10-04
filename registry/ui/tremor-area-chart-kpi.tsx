"use client";
import React from "react";
/**
 * @component TremorAreaChartKpi
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorAreaChartKpi({ className = "" }: { className?: string }) {
  return (
    <div className={`p-5 rounded-2xl border border-border/70 bg-card shadow-sm w-full max-w-sm ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs text-muted-foreground font-medium">Monthly Active Usage</p>
          <h3 className="text-2xl font-bold text-foreground mt-1 font-mono tracking-tight">142,850</h3>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
          ↑ 18.2%
        </span>
      </div>
      <div className="mt-4 h-16 w-full">
        <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0,25 Q 25,5 50,18 T 100,8 L 100,30 L 0,30 Z" fill="url(#areaGrad)" />
          <path d="M 0,25 Q 25,5 50,18 T 100,8" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
        </svg>
      </div>
    </div>
  );
}
export default TremorAreaChartKpi;
