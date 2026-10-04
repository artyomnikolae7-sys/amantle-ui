"use client";
import React from "react";
/**
 * @component HoverShutterButton
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverShutterButton({ children = "Shutter Action", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button className={`group relative overflow-hidden rounded-xl border border-primary bg-background px-5 py-2.5 text-xs font-semibold text-primary transition-all duration-300 active:scale-95 ${className}`}>
      <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-200">{children}</span>
    </button>
  );
}
export default HoverShutterButton;
