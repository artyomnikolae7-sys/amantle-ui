"use client";
import React from "react";
/**
 * @component TremorSparkArea
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorSparkArea({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 px-3 py-2 rounded-xl border border-border/60 bg-card/80 ${className}`}>
      <div>
        <p className="text-[10px] text-muted-foreground uppercase font-mono">Builds</p>
        <p className="text-xs font-bold text-foreground font-mono">1,402</p>
      </div>
      <div className="h-6 w-16">
        <svg viewBox="0 0 40 15" className="w-full h-full">
          <path d="M 0,10 L 8,4 L 16,9 L 24,2 L 32,7 L 40,3" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
        </svg>
      </div>
    </div>
  );
}
export default TremorSparkArea;
