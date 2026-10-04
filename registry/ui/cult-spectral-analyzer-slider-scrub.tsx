"use client";
import React from "react";
/**
 * @component CultSpectralAnalyzerSliderScrub
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function CultSpectralAnalyzerSliderScrub({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="space-y-1.5 w-full">
        <div className="flex justify-between text-xs">
          <span className="font-semibold text-muted-foreground">Harmonic Equalizer</span>
          <span className="font-mono text-[11px] text-rose-500">00:42.18</span>
        </div>
        <div className="w-full bg-muted h-1.5 rounded-full relative overflow-hidden">
          <div className="bg-rose-500 h-full w-[42%]" />
        </div>
      </div>
    </div>
  );
}
export default CultSpectralAnalyzerSliderScrub;
