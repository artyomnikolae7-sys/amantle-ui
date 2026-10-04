"use client";
import React, { useState } from "react";
/**
 * @component HoverGlitchBorder
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverGlitchBorder({ className = "" }: { className?: string }) {
  const [glitch, setGlitch] = useState(false);

  return (
    <div
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
      className={`p-4 rounded-xl border max-w-xs cursor-pointer transition-all ${
        glitch ? "border-cyan-400 shadow-[2px_2px_0px_#ec4899]" : "border-border/70 bg-card"
      } ${className}`}
    >
      <p className="text-xs font-mono font-bold text-foreground">CYBER_TRACE // 0x49</p>
      <p className="text-[11px] text-muted-foreground mt-0.5">High frequency chromatic offset feedback.</p>
    </div>
  );
}
export default HoverGlitchBorder;
