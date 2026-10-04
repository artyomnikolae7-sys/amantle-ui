"use client";
import React from "react";
/**
 * @component HyperStatsPill
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperStatsPill({
  label = "Monthly Active Registries",
  count = "361",
  delta = "+38%",
  className = "",
}: {
  label?: string;
  count?: string;
  delta?: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border/70 bg-card/90 shadow-sm ${className}`}>
      <span className="text-xs font-bold text-foreground font-mono">{count}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-md font-mono">{delta}</span>
    </div>
  );
}
export default HyperStatsPill;
