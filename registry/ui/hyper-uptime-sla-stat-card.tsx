"use client";
import React from "react";
/**
 * @component HyperUptimeSlaStatCard
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperUptimeSlaStatCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="p-4 rounded-xl border border-border bg-card hover:border-teal-500/40 transition-colors">
        <div className="text-2xl">⚡</div>
        <div className="text-sm font-bold text-foreground mt-2">High Availability 99.99%</div>
        <div className="text-xs text-muted-foreground mt-0.5">Engineered with Fault Tolerant precision.</div>
      </div>
    </div>
  );
}
export default HyperUptimeSlaStatCard;
