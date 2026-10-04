"use client";
import React from "react";
/**
 * @component BadgeExperimentalPing
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function BadgeExperimentalPing({
  text = "Experimental Engine",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-card/80 backdrop-blur-sm ${className} text-cyan-500 border-cyan-500/30`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-500 animate-ping`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 bg-cyan-500`} />
      </span>
      <span className="font-mono text-[11px] font-semibold">{text}</span>
    </span>
  );
}
export default BadgeExperimentalPing;
