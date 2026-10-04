"use client";
import React from "react";
/**
 * @component CultSpectralAnalyzerFloatingHud
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function CultSpectralAnalyzerFloatingHud({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 backdrop-blur-md shadow-xs">
        <span>🎚️</span>
        <span className="text-xs font-semibold text-rose-500">Harmonic Equalizer</span>
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
      </div>
    </div>
  );
}
export default CultSpectralAnalyzerFloatingHud;
