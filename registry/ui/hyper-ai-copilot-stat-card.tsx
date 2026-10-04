"use client";
import React from "react";
/**
 * @component HyperAiCopilotStatCard
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperAiCopilotStatCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="p-4 rounded-xl border border-border bg-card hover:border-teal-500/40 transition-colors">
        <div className="text-2xl">🤖</div>
        <div className="text-sm font-bold text-foreground mt-2">Contextual Code Agent</div>
        <div className="text-xs text-muted-foreground mt-0.5">Engineered with Sub-second precision.</div>
      </div>
    </div>
  );
}
export default HyperAiCopilotStatCard;
