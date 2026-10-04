"use client";
import React, { useState } from "react";
/**
 * @component DecayCard
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function DecayCard({ text = "Dissipating Particle Structure", className = "" }: { text?: string; className?: string }) {
  const [decay, setDecay] = useState(false);
  return (
    <div
      onMouseEnter={() => setDecay(true)}
      onMouseLeave={() => setDecay(false)}
      className={`relative flex h-48 w-64 flex-col justify-center items-center overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-md transition-all ${className}`}
    >
      <span
        style={{
          transform: decay ? "translateY(-6px) scale(0.96)" : "translateY(0) scale(1)",
          opacity: decay ? 0.6 : 1,
          filter: decay ? "blur(1px)" : "blur(0px)",
          transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        className="text-center text-sm font-bold text-foreground select-none"
      >
        {text}
      </span>
      <span className="mt-2 text-[10px] font-mono text-muted-foreground">Hover to induce particle decay</span>
    </div>
  );
}
export default DecayCard;
