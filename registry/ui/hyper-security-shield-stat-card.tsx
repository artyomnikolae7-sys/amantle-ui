"use client";
import React from "react";
/**
 * @component HyperSecurityShieldStatCard
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperSecurityShieldStatCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="p-4 rounded-xl border border-border bg-card hover:border-teal-500/40 transition-colors">
        <div className="text-2xl">🛡️</div>
        <div className="text-sm font-bold text-foreground mt-2">SOC2 Automated Audit</div>
        <div className="text-xs text-muted-foreground mt-0.5">Engineered with Continuous precision.</div>
      </div>
    </div>
  );
}
export default HyperSecurityShieldStatCard;
