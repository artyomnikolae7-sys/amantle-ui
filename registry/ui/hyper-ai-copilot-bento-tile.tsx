"use client";
import React from "react";
/**
 * @component HyperAiCopilotBentoTile
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperAiCopilotBentoTile({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="group relative p-5 rounded-2xl border border-border bg-card/50 overflow-hidden hover:bg-card/80 transition-all">
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl group-hover:scale-125 transition-transform" />
        <span className="text-xs font-bold text-teal-500 uppercase tracking-widest">Sub-second</span>
        <div className="text-base font-bold text-foreground mt-1">Contextual Code Agent</div>
      </div>
    </div>
  );
}
export default HyperAiCopilotBentoTile;
