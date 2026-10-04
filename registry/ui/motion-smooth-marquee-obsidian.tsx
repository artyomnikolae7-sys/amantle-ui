"use client";
import React, { useState } from "react";
/**
 * @component MotionSmoothMarqueeObsidian
 * @source https://reactbits.dev
 * @author David Hckh
 * @license MIT
 */
export function MotionSmoothMarqueeObsidian({
  className = "",
}: {
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-4 rounded-2xl border ${"border-neutral-700/40"} bg-gradient-to-br ${"from-neutral-800/40 to-neutral-900/60"} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xl">🔄</span>
        <span className={`text-xs font-bold ${"text-neutral-300"}`}>Continuous CSS Marquee</span>
      </div>
      <div className="text-[11px] text-muted-foreground mt-2 flex items-center justify-between">
        <span>Deep Obsidian Scheme</span>
        <span className="font-mono text-[10px]">{hovered ? "Active Motion ⚡" : "Damped Idle"}</span>
      </div>
    </div>
  );
}
export default MotionSmoothMarqueeObsidian;
