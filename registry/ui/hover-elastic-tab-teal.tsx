"use client";
import React, { useState } from "react";
/**
 * @component HoverElasticTabTeal
 * @source https://hover.dev
 * @author Tom Is Loading
 * @license MIT
 */
export function HoverElasticTabTeal({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${"border-teal-500/40 bg-teal-500/5 text-teal-400"} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">🪃</span>
        <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Pacific Teal</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-2">Elastic Resistance Tab</div>
      <div className="text-xs text-muted-foreground mt-1 flex justify-between">
        <span>Hover.dev Physics</span>
        <span className="font-mono text-[10px]">{active ? "Engaged ⚡" : "Damped"}</span>
      </div>
    </div>
  );
}
export default HoverElasticTabTeal;
