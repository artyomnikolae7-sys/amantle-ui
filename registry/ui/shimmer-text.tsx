"use client";
import React from "react";
/**
 * @component ShimmerText
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function ShimmerText({ text = "CULT UI EXPERIENCE", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={`inline-block font-bold tracking-wider text-xl uppercase select-none ${className}`}>
      <span className="bg-gradient-to-r from-foreground/40 via-foreground via-50% to-foreground/40 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_infinite_linear]">
        {text}
      </span>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}
export default ShimmerText;
