"use client";
import React, { useState } from "react";
/**
 * @component MagicFlipWordsTeal
 * @source https://magicui.design
 * @author Dillion Verma
 * @license MIT
 */
export function MagicFlipWordsTeal({
  className = "",
}: {
  className?: string;
}) {
  const [shining, setShining] = useState(false);

  return (
    <div
      onMouseEnter={() => setShining(true)}
      onMouseLeave={() => setShining(false)}
      className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${"text-teal-400 border-teal-500/30 bg-teal-500/5"} ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-lg">🔀</span>
        <span className="text-xs font-bold text-foreground">Dynamic Word Flipper</span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-2">
        <span>Pacific Teal</span>
        <span className="font-mono text-[10px]">{shining ? "Shining ✨" : "Idle"}</span>
      </div>
    </div>
  );
}
export default MagicFlipWordsTeal;
