"use client";
import React from "react";
/**
 * @component CultKeyframeTrackTactileToggle
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function CultKeyframeTrackTactileToggle({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-rose-500/5 active:scale-95 transition-all text-xs font-semibold">
        <span>📈</span>
        <span>Toggle Interpolation Spline</span>
      </button>
    </div>
  );
}
export default CultKeyframeTrackTactileToggle;
