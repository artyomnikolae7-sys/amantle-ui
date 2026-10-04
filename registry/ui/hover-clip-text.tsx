"use client";
import React from "react";
/**
 * @component HoverClipText
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverClipText({ text = "KINETIC SYSTEM", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={`group relative inline-block cursor-pointer font-black text-2xl tracking-tighter uppercase select-none ${className}`}>
      <span className="text-foreground transition-colors duration-200 group-hover:text-primary">{text}</span>
    </div>
  );
}
export default HoverClipText;
