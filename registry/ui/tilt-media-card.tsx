"use client";
import React from "react";
/**
 * @component TiltMediaCard
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function TiltMediaCard({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative w-full max-w-xs rounded-2xl border border-border/60 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}>
      <div className="h-32 w-full rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-cyan-500/20 flex items-center justify-center border border-border/30">
        <div className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground font-bold shadow-md group-hover:scale-110 transition-transform">
          ▶
        </div>
      </div>
      <h5 className="mt-3 text-xs font-semibold text-foreground">Next-Gen Motion Design</h5>
      <p className="text-[11px] text-muted-foreground">Zero-dependency fluid interfaces</p>
    </div>
  );
}
export default TiltMediaCard;
