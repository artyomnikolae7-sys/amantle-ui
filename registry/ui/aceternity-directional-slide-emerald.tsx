"use client";
import React, { useState } from "react";
/**
 * @component AceternityDirectionalSlideEmerald
 * @source https://ui.aceternity.com
 * @author Manu Arora
 * @license MIT
 */
export function AceternityDirectionalSlideEmerald({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-[0.98] ${"bg-teal-950/20 border-teal-500/30 text-teal-400"} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">🧭</span>
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Emerald Spark</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-3">Directional Hover Card</div>
      <div className="text-xs text-muted-foreground mt-1">High-fidelity ambient UI component.</div>
    </div>
  );
}
export default AceternityDirectionalSlideEmerald;
