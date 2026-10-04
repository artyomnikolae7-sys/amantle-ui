"use client";
import React from "react";
/**
 * @component HyperSaasLaunchStatCard
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperSaasLaunchStatCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="p-4 rounded-xl border border-border bg-card hover:border-teal-500/40 transition-colors">
        <div className="text-2xl">🚀</div>
        <div className="text-sm font-bold text-foreground mt-2">Instant Cloud Deploy</div>
        <div className="text-xs text-muted-foreground mt-0.5">Engineered with Zero Config precision.</div>
      </div>
    </div>
  );
}
export default HyperSaasLaunchStatCard;
