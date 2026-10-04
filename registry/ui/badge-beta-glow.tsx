"use client";
import React from "react";
/**
 * @component BadgeBetaGlow
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function BadgeBetaGlow({
  text = "Public Beta",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-card/80 backdrop-blur-sm ${className} text-amber-500 border-amber-500/30`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-500 shadow-[0_0_12px_rgba(var(--primary),0.3)]`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 bg-amber-500`} />
      </span>
      <span className="font-mono text-[11px] font-semibold">{text}</span>
    </span>
  );
}
export default BadgeBetaGlow;
