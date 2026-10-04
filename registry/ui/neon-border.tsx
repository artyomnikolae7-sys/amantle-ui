"use client";
import React from "react";
/**
 * @component NeonBorder
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function NeonBorder({ children = "Neon Border Surface", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-cyan-500/50 bg-card p-5 shadow-[0_0_15px_rgba(6,182,212,0.25)] text-center text-xs font-bold ${className}`}>
      {children}
    </div>
  );
}
export default NeonBorder;
