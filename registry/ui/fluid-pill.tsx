"use client";
import React, { useState } from "react";
/**
 * @component FluidPill
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function FluidPill({ className = "" }: { className?: string }) {
  const [tab, setTab] = useState(0);
  const tabs = ["Overview", "Telemetry", "Audit"];
  return (
    <div className={`inline-flex rounded-full border border-border/60 bg-muted/40 p-1 text-xs font-semibold ${className}`}>
      {tabs.map((t, i) => (
        <button
          key={i}
          onClick={() => setTab(i)}
          className={`rounded-full px-3 py-1 transition-all ${
            tab === i ? "bg-primary text-primary-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
export default FluidPill;
