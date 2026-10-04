"use client";

import React from "react";

/**
 * @component MarketingFeaturePill
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface MarketingFeaturePillProps {
  label?: string;
  badge?: string;
  className?: string;
}

export function MarketingFeaturePill({
  label = "AMANTLE v0.4.0 is now live with 10 ecosystems",
  badge = "New Release",
  className = "",
}: MarketingFeaturePillProps) {
  return (
    <div
      className={`group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 p-1 pr-3 text-xs shadow-sm backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-md active:scale-[0.98] ${className}`}
    >
      <span className="rounded-full bg-primary px-2.5 py-0.5 font-bold text-[10px] text-primary-foreground uppercase tracking-wide">
        {badge}
      </span>
      <span className="font-medium text-foreground">{label}</span>
      <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </div>
  );
}

export default MarketingFeaturePill;
