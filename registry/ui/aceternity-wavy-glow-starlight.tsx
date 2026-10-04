"use client";
import React, { useState } from "react";
/**
 * @component AceternityWavyGlowStarlight
 * @source https://ui.aceternity.com
 * @author Manu Arora
 * @license MIT
 */
export function AceternityWavyGlowStarlight({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-[0.98] ${"bg-indigo-950/30 border-indigo-500/40 text-indigo-300"} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">🌊</span>
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Starlight Glow</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-3">Ambient Radiance Surface</div>
      <div className="text-xs text-muted-foreground mt-1">High-fidelity ambient UI component.</div>
    </div>
  );
}
export default AceternityWavyGlowStarlight;
