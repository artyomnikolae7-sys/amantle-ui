"use client";
import React from "react";
/**
 * @component HyperAnalyticsIqPill
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperAnalyticsIqPill({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-600 dark:text-teal-400">
        <span>📈</span>
        <span>Predictive Funnel IQ</span>
        <span className="bg-teal-500 text-white dark:text-black text-[9px] px-1.5 py-0.5 rounded-full font-bold">Neural Model</span>
      </div>
    </div>
  );
}
export default HyperAnalyticsIqPill;
