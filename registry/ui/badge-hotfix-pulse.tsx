"use client";
import React from "react";
/**
 * @component BadgeHotfixPulse
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function BadgeHotfixPulse({
  text = "Critical Hotfix",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-card/80 backdrop-blur-sm ${className} text-orange-500 border-orange-500/30`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-500 animate-pulse`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 bg-orange-500`} />
      </span>
      <span className="font-mono text-[11px] font-semibold">{text}</span>
    </span>
  );
}
export default BadgeHotfixPulse;
