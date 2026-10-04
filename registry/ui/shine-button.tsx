"use client";
import React from "react";
/**
 * @component ShineButton
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function ShineButton({ children = "Shimmer Action", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all active:scale-95 ${className}`}>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
export default ShineButton;
