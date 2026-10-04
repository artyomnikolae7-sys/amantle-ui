"use client";
import React, { useState } from "react";
/**
 * @component AceternityFocusBlurAurora
 * @source https://ui.aceternity.com
 * @author Manu Arora
 * @license MIT
 */
export function AceternityFocusBlurAurora({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-[0.98] ${"bg-emerald-950/20 border-emerald-500/30 text-emerald-400"} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">🔍</span>
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Polar Aurora</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-3">Selective Focus Tile</div>
      <div className="text-xs text-muted-foreground mt-1">High-fidelity ambient UI component.</div>
    </div>
  );
}
export default AceternityFocusBlurAurora;
