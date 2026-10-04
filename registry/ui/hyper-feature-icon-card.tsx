"use client";
import React from "react";
/**
 * @component HyperFeatureIconCard
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperFeatureIconCard({ className = "" }: { className?: string }) {
  return (
    <div className={`p-5 rounded-2xl border border-border/70 bg-card hover:border-primary/50 transition-colors duration-200 max-w-xs ${className}`}>
      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-base mb-3">
        ⚡
      </div>
      <h4 className="text-sm font-bold text-foreground">Autonomous Synthesis</h4>
      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
        Zero manual code writing. Engine parses donor libraries and compiles TypeScript primitives.
      </p>
    </div>
  );
}
export default HyperFeatureIconCard;
