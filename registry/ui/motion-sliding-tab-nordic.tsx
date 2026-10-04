"use client";
import React, { useState } from "react";
/**
 * @component MotionSlidingTabNordic
 * @source https://reactbits.dev
 * @author David Hckh
 * @license MIT
 */
export function MotionSlidingTabNordic({
  className = "",
}: {
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-4 rounded-2xl border ${"border-cyan-500/20"} bg-gradient-to-br ${"from-cyan-900/20 to-slate-800/30"} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xl">💊</span>
        <span className={`text-xs font-bold ${"text-cyan-400"}`}>Gliding Active Pill</span>
      </div>
      <div className="text-[11px] text-muted-foreground mt-2 flex items-center justify-between">
        <span>Nordic Glacier Scheme</span>
        <span className="font-mono text-[10px]">{hovered ? "Active Motion ⚡" : "Damped Idle"}</span>
      </div>
    </div>
  );
}
export default MotionSlidingTabNordic;
