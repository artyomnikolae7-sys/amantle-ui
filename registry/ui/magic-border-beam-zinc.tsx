"use client";
import React, { useState } from "react";
/**
 * @component MagicBorderBeamZinc
 * @source https://magicui.design
 * @author Dillion Verma
 * @license MIT
 */
export function MagicBorderBeamZinc({
  className = "",
}: {
  className?: string;
}) {
  const [shining, setShining] = useState(false);

  return (
    <div
      onMouseEnter={() => setShining(true)}
      onMouseLeave={() => setShining(false)}
      className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${"text-zinc-300 border-zinc-700/40 bg-zinc-800/10"} ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-lg">✨</span>
        <span className="text-xs font-bold text-foreground">Traveling Perimeter Beam</span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-2">
        <span>Raw Zinc</span>
        <span className="font-mono text-[10px]">{shining ? "Shining ✨" : "Idle"}</span>
      </div>
    </div>
  );
}
export default MagicBorderBeamZinc;
