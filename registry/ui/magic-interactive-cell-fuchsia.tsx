"use client";
import React, { useState } from "react";
/**
 * @component MagicInteractiveCellFuchsia
 * @source https://magicui.design
 * @author Dillion Verma
 * @license MIT
 */
export function MagicInteractiveCellFuchsia({
  className = "",
}: {
  className?: string;
}) {
  const [shining, setShining] = useState(false);

  return (
    <div
      onMouseEnter={() => setShining(true)}
      onMouseLeave={() => setShining(false)}
      className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${"text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/5"} ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-lg">🔳</span>
        <span className="text-xs font-bold text-foreground">Illuminated Grid Cell</span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-2">
        <span>Neon Fuchsia</span>
        <span className="font-mono text-[10px]">{shining ? "Shining ✨" : "Idle"}</span>
      </div>
    </div>
  );
}
export default MagicInteractiveCellFuchsia;
