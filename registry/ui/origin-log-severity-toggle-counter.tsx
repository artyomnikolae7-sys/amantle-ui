"use client";
import React from "react";
/**
 * @component OriginLogSeverityToggleCounter
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function OriginLogSeverityToggleCounter({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary text-xs font-bold">
        <span>Log Severity</span>
        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center">3</span>
      </div>
    </div>
  );
}
export default OriginLogSeverityToggleCounter;
