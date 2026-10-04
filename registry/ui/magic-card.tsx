"use client";
import React from "react";
/**
 * @component MagicCard
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function MagicCard({ title = "Magic Glass Card", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`group relative flex h-40 w-60 flex-col justify-between rounded-2xl border border-border/60 bg-card/60 p-5 shadow-lg backdrop-blur-md hover:border-primary/50 transition-all ${className}`}>
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">✨</div>
      <h4 className="text-xs font-bold text-foreground">{title}</h4>
    </div>
  );
}
export default MagicCard;
