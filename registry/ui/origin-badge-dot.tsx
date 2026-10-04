"use client";
import React from "react";
/**
 * @component OriginBadgeDot
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginBadgeDot({
  label = "Operational",
  variant = "emerald",
  className = "",
}: {
  label?: string;
  variant?: "emerald" | "amber" | "rose" | "blue";
  className?: string;
}) {
  const colorMap = {
    emerald: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    rose: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  };

  const dotMap = {
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
    blue: "bg-blue-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${colorMap[variant]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotMap[variant]}`} />
      {label}
    </span>
  );
}
export default OriginBadgeDot;
