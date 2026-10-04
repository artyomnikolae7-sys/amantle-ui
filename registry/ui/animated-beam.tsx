"use client";
import React from "react";
/**
 * @component AnimatedBeam
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function AnimatedBeam({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between w-full max-w-sm rounded-2xl border border-border/60 bg-card p-6 shadow-sm ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">A</div>
      <div className="flex-1 h-0.5 mx-4 bg-gradient-to-r from-primary via-cyan-400 to-primary animate-pulse" />
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">B</div>
    </div>
  );
}
export default AnimatedBeam;
