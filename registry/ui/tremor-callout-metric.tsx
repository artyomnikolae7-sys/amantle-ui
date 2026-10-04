"use client";
import React from "react";
/**
 * @component TremorCalloutMetric
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorCalloutMetric({ className = "" }: { className?: string }) {
  return (
    <div className={`p-3.5 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-3 max-w-sm ${className}`}>
      <span className="text-base">⚡</span>
      <div>
        <h5 className="text-xs font-bold text-foreground">Zero Runtime Overhead</h5>
        <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
          Amantle components operate with zero heavy 3D canvas libraries for maximum 60fps throughput.
        </p>
      </div>
    </div>
  );
}
export default TremorCalloutMetric;
