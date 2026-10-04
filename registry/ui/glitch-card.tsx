"use client";
import React, { useState } from "react";
/**
 * @component GlitchCard
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function GlitchCard({ title = "Cyber Glitch Surface", className = "" }: { title?: string; className?: string }) {
  const [glitch, setGlitch] = useState(false);
  return (
    <div
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
      className={`relative h-44 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-md cursor-pointer flex flex-col justify-between ${className}`}
    >
      <div className={`text-xs font-mono font-bold ${glitch ? "text-rose-500 animate-pulse" : "text-primary"}`}>
        {glitch ? "ERR_OVERCLOCK_0x9" : "SYS_STABLE"}
      </div>
      <div>
        <h4 className="text-sm font-bold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground">Hover to trigger chromatic slice</p>
      </div>
    </div>
  );
}
export default GlitchCard;
