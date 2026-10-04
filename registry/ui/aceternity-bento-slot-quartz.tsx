"use client";
import React, { useState } from "react";
/**
 * @component AceternityBentoSlotQuartz
 * @source https://ui.aceternity.com
 * @author Manu Arora
 * @license MIT
 */
export function AceternityBentoSlotQuartz({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-[0.98] ${"bg-slate-900/40 border-slate-700/50 text-slate-200"} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">🍱</span>
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Quartz Crystal</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-3">Glowing Bento Slot</div>
      <div className="text-xs text-muted-foreground mt-1">High-fidelity ambient UI component.</div>
    </div>
  );
}
export default AceternityBentoSlotQuartz;
