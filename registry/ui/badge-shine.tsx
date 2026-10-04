/**
 * @source https://magicui.design/docs/components/animated-shiny-text
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BadgeShineProps {
  className?: string;
  label?: string;
}

export function BadgeShine({ className, label = "✨ Новый релиз v2.4" }: BadgeShineProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-semibold overflow-hidden shadow-sm backdrop-blur-md",
        className
      )}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      <span className="text-foreground">{label}</span>
    </div>
  );
}
