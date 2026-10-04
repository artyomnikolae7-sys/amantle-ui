"use client";
import React, { useState } from "react";
/**
 * @component StackedModal
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function StackedModal({ className = "" }: { className?: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`relative cursor-pointer transition-transform duration-300 active:scale-95 ${className}`}
    >
      {/* Background card */}
      <div
        className={`absolute inset-x-2 -top-2 h-full rounded-2xl bg-muted/40 border border-border/40 transition-transform duration-300 ${
          expanded ? "-translate-y-2 scale-[1.02]" : "scale-95"
        }`}
      />
      {/* Main card */}
      <div className="relative rounded-2xl bg-card p-5 border border-border/70 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Stacked Card</span>
          <span className="text-xs text-primary font-semibold">{expanded ? "Tap to fold" : "Tap to expand"}</span>
        </div>
        <p className="mt-2 text-xs font-medium text-foreground">Interactive layered visual container with spring hover shifts.</p>
      </div>
    </div>
  );
}
export default StackedModal;
