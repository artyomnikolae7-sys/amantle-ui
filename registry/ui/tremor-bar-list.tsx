"use client";
import React from "react";
/**
 * @component TremorBarList
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorBarList({ className = "" }: { className?: string }) {
  const items = [
    { name: "/catalog/components", value: 4520, percent: 85 },
    { name: "/studio", value: 3120, percent: 62 },
    { name: "/templates/landing", value: 1840, percent: 38 },
  ];

  return (
    <div className={`w-full max-w-sm space-y-3 p-4 rounded-xl border border-border/60 bg-card ${className}`}>
      <p className="text-xs font-semibold text-foreground">Top Visited Routes</p>
      <div className="space-y-2">
        {items.map((i) => (
          <div key={i.name} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-foreground font-mono text-[11px] truncate max-w-[200px]">{i.name}</span>
              <span className="text-muted-foreground font-mono text-[11px]">{i.value.toLocaleString()}</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${i.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TremorBarList;
