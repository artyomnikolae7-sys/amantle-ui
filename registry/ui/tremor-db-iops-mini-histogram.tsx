"use client";
import React from "react";
/**
 * @component TremorDbIopsMiniHistogram
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function TremorDbIopsMiniHistogram({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] ${className}`}>
      
      <div className="flex items-end justify-between gap-1.5 h-10 w-full px-1">
        <div className="w-3 bg-muted rounded-t h-[40%]" />
        <div className="w-3 bg-muted rounded-t h-[65%]" />
        <div className="w-3 bg-indigo-500/50 rounded-t h-[50%]" />
        <div className="w-3 bg-indigo-500/70 rounded-t h-[80%]" />
        <div className="w-3 bg-indigo-500 rounded-t h-[95%]" />
        <div className="w-3 bg-emerald-500 rounded-t h-[100%]" />
      </div>
    </div>
  );
}
export default TremorDbIopsMiniHistogram;
