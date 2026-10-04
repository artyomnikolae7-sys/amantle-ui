"use client";
import React from "react";
/**
 * @component TremorTrackerStatus
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorTrackerStatus({ className = "" }: { className?: string }) {
  const blocks = Array.from({ length: 30 }, (_, i) => ({
    status: i === 14 ? "degraded" : i === 22 ? "outage" : "operational",
  }));

  const color: Record<string, string> = {
    operational: "bg-emerald-500",
    degraded: "bg-amber-500",
    outage: "bg-rose-500",
  };

  return (
    <div className={`w-full max-w-sm space-y-2 p-4 rounded-xl border border-border/60 bg-card ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-foreground">API System Uptime</span>
        <span className="text-emerald-500 font-mono text-[11px] font-bold">99.94%</span>
      </div>
      <div className="flex gap-1">
        {blocks.map((b, idx) => (
          <div
            key={idx}
            className={`h-7 flex-1 rounded-sm transition-opacity hover:opacity-80 ${color[b.status]}`}
            title={`Day ${idx + 1}: ${b.status}`}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
        <span>30 days ago</span>
        <span>Today</span>
      </div>
    </div>
  );
}
export default TremorTrackerStatus;
