"use client";
import React from "react";
/**
 * @component MovingBordersGlow
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function MovingBordersGlow({ children = "Moving Border Action", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button className={`relative inline-flex p-[1px] overflow-hidden rounded-xl active:scale-95 ${className}`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-[11px] bg-background px-5 py-2 text-xs font-semibold text-foreground backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}
export default MovingBordersGlow;
