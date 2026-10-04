"use client";

import React from "react";

/**
 * @component KpiMetricCard
 * @source https://raw.tremor.so
 * @author Tremor
 * @license Apache-2.0
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface KpiMetricCardProps {
  title?: string;
  metric?: string;
  delta?: string;
  deltaType?: "positive" | "negative";
  className?: string;
}

export function KpiMetricCard({
  title = "Monthly Active Pipeline",
  metric = "247 Components",
  delta = "+28.4%",
  deltaType = "positive",
  className = "",
}: KpiMetricCardProps) {
  return (
    <div className={`flex w-full max-w-xs flex-col gap-2 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md ${className}`}>
      <span className="text-xs font-medium text-muted-foreground">{title}</span>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-bold tracking-tight text-foreground font-mono">{metric}</span>
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
            deltaType === "positive" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
          }`}
        >
          {delta}
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full w-3/4 rounded-full bg-primary" />
      </div>
    </div>
  );
}

export default KpiMetricCard;
