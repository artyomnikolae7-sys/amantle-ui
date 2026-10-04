"use client";
import React, { useState } from "react";
/**
 * @component MagicShineButtonEmerald
 * @source https://magicui.design
 * @author Dillion Verma
 * @license MIT
 */
export function MagicShineButtonEmerald({
  className = "",
}: {
  className?: string;
}) {
  const [shining, setShining] = useState(false);

  return (
    <div
      onMouseEnter={() => setShining(true)}
      onMouseLeave={() => setShining(false)}
      className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${"text-emerald-400 border-emerald-500/30 bg-emerald-500/5"} ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-lg">🔘</span>
        <span className="text-xs font-bold text-foreground">Specular Shine Trigger</span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-2">
        <span>Emerald Surge</span>
        <span className="font-mono text-[10px]">{shining ? "Shining ✨" : "Idle"}</span>
      </div>
    </div>
  );
}
export default MagicShineButtonEmerald;
