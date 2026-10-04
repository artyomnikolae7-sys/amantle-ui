"use client";
import React, { useState } from "react";
/**
 * @component MotionGradientShimmerMonochrome
 * @source https://reactbits.dev
 * @author David Hckh
 * @license MIT
 */
export function MotionGradientShimmerMonochrome({
  className = "",
}: {
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-4 rounded-2xl border ${"border-border"} bg-gradient-to-br ${"from-muted/40 to-muted/20"} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xl">✨</span>
        <span className={`text-xs font-bold ${"text-foreground"}`}>Linear Shimmer Sweep</span>
      </div>
      <div className="text-[11px] text-muted-foreground mt-2 flex items-center justify-between">
        <span>Clean Monochrome Scheme</span>
        <span className="font-mono text-[10px]">{hovered ? "Active Motion ⚡" : "Damped Idle"}</span>
      </div>
    </div>
  );
}
export default MotionGradientShimmerMonochrome;
