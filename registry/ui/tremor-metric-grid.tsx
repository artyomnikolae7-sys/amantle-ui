"use client";
import React from "react";
/**
 * @component TremorMetricGrid
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorMetricGrid({ className = "" }: { className?: string }) {
  const stats = [
    { label: "Total Stars", val: "14.2k", diff: "+12%" },
    { label: "Downloads", val: "89.4k", diff: "+28%" },
    { label: "Components", val: "361", diff: "+102" },
  ];

  return (
    <div className={`grid grid-cols-3 gap-2 p-3 rounded-2xl border border-border/70 bg-card max-w-sm ${className}`}>
      {stats.map((s) => (
        <div key={s.label} className="text-center p-2 rounded-xl bg-muted/40">
          <p className="text-[10px] text-muted-foreground uppercase font-mono">{s.label}</p>
          <p className="text-base font-bold text-foreground font-mono mt-0.5">{s.val}</p>
          <span className="text-[10px] font-semibold text-emerald-500 font-mono">{s.diff}</span>
        </div>
      ))}
    </div>
  );
}
export default TremorMetricGrid;
