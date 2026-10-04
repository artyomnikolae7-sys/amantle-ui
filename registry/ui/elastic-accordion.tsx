"use client";
import React, { useState } from "react";
/**
 * @component ElasticAccordion
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function ElasticAccordion({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`w-full max-w-sm rounded-2xl border border-border/60 bg-card p-4 shadow-sm ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-xs font-bold text-foreground cursor-pointer"
      >
        <span>What makes AMANTLE UI special?</span>
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <p className="mt-3 text-xs text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
          Pure zero-dependency spring animations, Tailwind v4 native CSS variables, and full provenance tracking.
        </p>
      )}
    </div>
  );
}
export default ElasticAccordion;
