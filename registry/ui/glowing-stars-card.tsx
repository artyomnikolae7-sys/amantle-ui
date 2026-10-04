"use client";
import React from "react";
/**
 * @component GlowingStarsCard
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function GlowingStarsCard({ title = "Starlight Grid Deck", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`flex h-36 w-60 flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 shadow-sm ${className}`}>
      <span className="text-xs font-bold text-primary">✦ ✧ ✦</span>
      <h4 className="text-xs font-bold text-foreground">{title}</h4>
    </div>
  );
}
export default GlowingStarsCard;
