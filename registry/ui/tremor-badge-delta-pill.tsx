"use client";
import React from "react";
/**
 * @component TremorBadgeDeltaPill
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorBadgeDeltaPill({
  value = "+24.8%",
  isPositive = true,
  className = "",
}: {
  value?: string;
  isPositive?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold font-mono border ${
        isPositive
          ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
          : "bg-rose-500/10 text-rose-500 border-rose-500/20"
      } ${className}`}
    >
      <span>{isPositive ? "↑" : "↓"}</span>
      <span>{value}</span>
    </span>
  );
}
export default TremorBadgeDeltaPill;
