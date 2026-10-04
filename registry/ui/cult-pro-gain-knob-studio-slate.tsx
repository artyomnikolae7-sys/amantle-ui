"use client";
import React from "react";
/**
 * @component CultProGainKnobStudioSlate
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function CultProGainKnobStudioSlate({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-3.5 rounded-xl transition-all ${"border border-slate-700/50 bg-slate-900/60 text-slate-200"} ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎛️</span>
          <div>
            <div className="text-xs font-bold text-foreground">Decibel Rotary Gain Knob</div>
            <div className="text-[10px] text-muted-foreground">Studio Slate Interface</div>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">PRO</span>
      </div>
    </div>
  );
}
export default CultProGainKnobStudioSlate;
