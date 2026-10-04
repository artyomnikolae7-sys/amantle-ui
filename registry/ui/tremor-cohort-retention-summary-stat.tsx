"use client";
import React from "react";
/**
 * @component TremorCohortRetentionSummaryStat
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorCohortRetentionSummaryStat({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="text-center p-2">
        <div className="text-2xl font-black tracking-tight text-foreground">%76.4</div>
        <div className="text-[11px] font-medium text-muted-foreground mt-0.5">Cohort D30 Retention</div>
      </div>
    </div>
  );
}
export default TremorCohortRetentionSummaryStat;
