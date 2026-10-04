"use client";
import React from "react";
/**
 * @component TremorQueueDepthTargetTracker
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorQueueDepthTargetTracker({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="space-y-1 w-full">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-muted-foreground">Kafka Event Backlog</span>
          <span className="text-emerald-500 font-bold">92% Target</span>
        </div>
        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full w-[92%] rounded-full" />
        </div>
      </div>
    </div>
  );
}
export default TremorQueueDepthTargetTracker;
