/**
 * @source https://magicui.design/docs/components/shine-border
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BadgeGlowProps {
  className?: string;
  label?: string;
  variant?: "primary" | "emerald" | "amber";
}

export function BadgeGlow({ className, label = "Популярный выбор", variant = "primary" }: BadgeGlowProps) {
  const glowStyles = {
    primary: "border-primary/40 text-primary shadow-[0_0_15px_rgba(99,102,241,0.35)]",
    emerald: "border-emerald-500/40 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.35)]",
    amber: "border-amber-500/40 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.35)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-card/90 text-xs font-bold uppercase tracking-wider backdrop-blur-md",
        glowStyles[variant],
        className
      )}
    >
      <Flame className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}
