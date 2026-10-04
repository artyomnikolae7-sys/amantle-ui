"use client";
import React from "react";
/**
 * @component OriginDeployEnvToggleCounter
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function OriginDeployEnvToggleCounter({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary text-xs font-bold">
        <span>Deploy Cluster</span>
        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center">3</span>
      </div>
    </div>
  );
}
export default OriginDeployEnvToggleCounter;
