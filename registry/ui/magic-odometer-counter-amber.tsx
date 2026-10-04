"use client";
import React, { useState } from "react";
/**
 * @component MagicOdometerCounterAmber
 * @source https://magicui.design
 * @author Dillion Verma
 * @license MIT
 */
export function MagicOdometerCounterAmber({
  className = "",
}: {
  className?: string;
}) {
  const [shining, setShining] = useState(false);

  return (
    <div
      onMouseEnter={() => setShining(true)}
      onMouseLeave={() => setShining(false)}
      className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${"text-amber-400 border-amber-500/30 bg-amber-500/5"} ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-lg">⏱️</span>
        <span className="text-xs font-bold text-foreground">Rolling Number Odometer</span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-2">
        <span>Amber Gold</span>
        <span className="font-mono text-[10px]">{shining ? "Shining ✨" : "Idle"}</span>
      </div>
    </div>
  );
}
export default MagicOdometerCounterAmber;
