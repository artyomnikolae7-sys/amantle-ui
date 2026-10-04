"use client";

import React from "react";

/**
 * @component StatsCardAccent
 * @source https://floatui.com
 * @author Float UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface StatsCardAccentProps {
  label?: string;
  value?: string;
  growth?: string;
  accentColor?: string;
  className?: string;
}

export function StatsCardAccent({
  label = "Synthesized Components",
  value = "259+",
  growth = "+34 this week",
  accentColor = "bg-primary",
  className = "",
}: StatsCardAccentProps) {
  return (
    <div
      className={`relative flex w-full max-w-xs overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md ${className}`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${accentColor}`} />
      <div className="flex flex-col gap-1 pl-2">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <span className="text-3xl font-extrabold tracking-tight text-foreground font-mono">{value}</span>
        <span className="text-[11px] font-semibold text-emerald-500">{growth}</span>
      </div>
    </div>
  );
}

export default StatsCardAccent;
