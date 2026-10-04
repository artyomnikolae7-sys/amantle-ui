"use client";
import React, { useState } from "react";
/**
 * @component AceternityBentoSlotSolaris
 * @source https://ui.aceternity.com
 * @author Manu Arora
 * @license MIT
 */
export function AceternityBentoSlotSolaris({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-[0.98] ${"bg-amber-950/20 border-amber-500/30 text-amber-400"} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">🍱</span>
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Solaris Flare</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-3">Glowing Bento Slot</div>
      <div className="text-xs text-muted-foreground mt-1">High-fidelity ambient UI component.</div>
    </div>
  );
}
export default AceternityBentoSlotSolaris;
