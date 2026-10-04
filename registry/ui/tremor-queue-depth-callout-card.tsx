"use client";
import React from "react";
/**
 * @component TremorQueueDepthCalloutCard
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorQueueDepthCalloutCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border shadow-xs">
        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 animate-pulse" />
        <div>
          <div className="text-xs font-semibold text-foreground">Kafka Event Backlog: msg1,204</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Velocity verified at -82.0% over rolling 7-day period.</div>
        </div>
      </div>
    </div>
  );
}
export default TremorQueueDepthCalloutCard;
