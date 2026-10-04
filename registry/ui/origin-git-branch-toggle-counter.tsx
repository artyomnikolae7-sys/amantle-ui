"use client";
import React from "react";
/**
 * @component OriginGitBranchToggleCounter
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function OriginGitBranchToggleCounter({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary text-xs font-bold">
        <span>VCS Branch</span>
        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center">3</span>
      </div>
    </div>
  );
}
export default OriginGitBranchToggleCounter;
