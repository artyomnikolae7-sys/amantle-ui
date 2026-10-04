"use client";
import React from "react";
/**
 * @component PulsatingButton
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function PulsatingButton({ children = "Live Stream Engaged", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button className={`relative inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-lg hover:bg-primary/90 active:scale-95 transition-all ${className}`}>
      <span className="absolute -inset-1 rounded-xl bg-primary/30 animate-ping opacity-60" />
      <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
export default PulsatingButton;
