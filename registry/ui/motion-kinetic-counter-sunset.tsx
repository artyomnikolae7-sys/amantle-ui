"use client";
import React, { useState } from "react";
/**
 * @component MotionKineticCounterSunset
 * @source https://reactbits.dev
 * @author David Hckh
 * @license MIT
 */
export function MotionKineticCounterSunset({
  className = "",
}: {
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-4 rounded-2xl border ${"border-orange-500/30"} bg-gradient-to-br ${"from-orange-500/20 to-rose-500/20"} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xl">🔢</span>
        <span className={`text-xs font-bold ${"text-orange-400"}`}>Kinetic Velocity Counter</span>
      </div>
      <div className="text-[11px] text-muted-foreground mt-2 flex items-center justify-between">
        <span>Sunset Flare Scheme</span>
        <span className="font-mono text-[10px]">{hovered ? "Active Motion ⚡" : "Damped Idle"}</span>
      </div>
    </div>
  );
}
export default MotionKineticCounterSunset;
