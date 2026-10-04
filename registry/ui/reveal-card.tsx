"use client";
import React, { useState } from "react";
/**
 * @component RevealCard
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function RevealCard({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative w-full max-w-sm rounded-2xl border border-border/60 bg-card p-5 overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold text-foreground">Smart Deployment Pipeline</h4>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">Active</span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Automated edge routing and continuous token verification.</p>
      <div
        className={`mt-3 pt-3 border-t border-border/50 flex items-center justify-between transition-all duration-300 ${
          hovered ? "opacity-100 max-h-16" : "opacity-0 max-h-0 pointer-events-none"
        }`}
      >
        <span className="text-[11px] text-muted-foreground font-mono">SHA: 1e38b47</span>
        <button className="text-[11px] font-semibold text-primary hover:underline">View Trace →</button>
      </div>
    </div>
  );
}
export default RevealCard;
