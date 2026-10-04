"use client";
import React from "react";
/**
 * @component CultAudioWaveformDockLens
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function CultAudioWaveformDockLens({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-card border border-border shadow-sm">
        <button className="p-2 rounded-lg hover:bg-rose-500/10 text-sm transition-transform active:scale-95">🎙️</button>
        <span className="text-xs font-medium px-1 text-foreground">Acoustic Spectrum</span>
      </div>
    </div>
  );
}
export default CultAudioWaveformDockLens;
