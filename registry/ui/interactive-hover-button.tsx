"use client";
import React from "react";
/**
 * @component InteractiveHoverButton
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function InteractiveHoverButton({ text = "Hover Me", className = "" }: { text?: string; className?: string }) {
  return (
    <button className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-border/60 bg-card px-6 py-2.5 text-xs font-bold text-foreground transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 ${className}`}>
      <span>{text}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </button>
  );
}
export default InteractiveHoverButton;
