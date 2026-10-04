"use client";
import React, { useState } from "react";
/**
 * @component HoverGravityButtonTactile
 * @source https://hover.dev
 * @author Tom Is Loading
 * @license MIT
 */
export function HoverGravityButtonTactile({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${"border-border bg-secondary/80 text-foreground"} ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">🪐</span>
        <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Tactile Press</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-2">Gravity Attraction Trigger</div>
      <div className="text-xs text-muted-foreground mt-1 flex justify-between">
        <span>Hover.dev Physics</span>
        <span className="font-mono text-[10px]">{active ? "Engaged ⚡" : "Damped"}</span>
      </div>
    </div>
  );
}
export default HoverGravityButtonTactile;
