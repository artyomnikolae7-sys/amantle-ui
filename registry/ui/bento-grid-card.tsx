"use client";
import React from "react";
/**
 * @component BentoGridCard
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function BentoGridCard({ title = "Bento Feature Module", desc = "Compact modular cell designed for high-density modern layouts.", className = "" }: { title?: string; desc?: string; className?: string }) {
  return (
    <div className={`flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">❖</div>
      <div className="mt-4">
        <h4 className="text-sm font-bold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
export default BentoGridCard;
