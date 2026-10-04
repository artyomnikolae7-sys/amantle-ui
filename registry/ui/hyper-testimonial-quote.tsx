"use client";
import React from "react";
/**
 * @component HyperTestimonialQuote
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperTestimonialQuote({ className = "" }: { className?: string }) {
  return (
    <div className={`p-4 rounded-xl border border-border/60 bg-muted/30 max-w-sm space-y-2 ${className}`}>
      <div className="flex gap-1 text-amber-400 text-xs">★★★★★</div>
      <p className="text-xs italic text-foreground leading-relaxed">
        "AMANTLE UI combined all the disparate component registries into one unified design system with zero effort."
      </p>
      <div className="flex items-center gap-2 pt-1">
        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
          AL
        </div>
        <div>
          <p className="text-[11px] font-semibold text-foreground">Alex Lead</p>
          <p className="text-[10px] text-muted-foreground">Principal Architect</p>
        </div>
      </div>
    </div>
  );
}
export default HyperTestimonialQuote;
