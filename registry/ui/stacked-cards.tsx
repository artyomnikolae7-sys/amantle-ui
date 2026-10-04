"use client";
import React, { useState } from "react";
/**
 * @component StackedCards
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function StackedCards({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative h-48 w-56 cursor-pointer select-none ${className}`}
    >
      <div
        style={{
          transform: hovered ? "translate(-12px, -8px) rotate(-6deg)" : "rotate(-3deg)",
          transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="absolute inset-0 rounded-2xl border border-border/40 bg-muted/60 p-4 shadow-sm"
      />
      <div
        style={{
          transform: hovered ? "translate(12px, -4px) rotate(6deg)" : "rotate(3deg)",
          transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="absolute inset-0 rounded-2xl border border-border/50 bg-card/80 p-4 shadow-md"
      />
      <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-xl">
        <span className="text-xs font-bold text-primary">Deck Layer 01</span>
        <span className="text-xs font-medium text-foreground">Interactive Card Fan-out</span>
      </div>
    </div>
  );
}
export default StackedCards;
