"use client";
import React from "react";
/**
 * @component TremorCacheHitSummaryStat
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorCacheHitSummaryStat({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="text-center p-2">
        <div className="text-2xl font-black tracking-tight text-foreground">%98.9</div>
        <div className="text-[11px] font-medium text-muted-foreground mt-0.5">Vercel Edge Cache Hit</div>
      </div>
    </div>
  );
}
export default TremorCacheHitSummaryStat;
