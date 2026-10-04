"use client";
import React from "react";
/**
 * @component ListGitMergeStatusIndicator
 * @source https://raw.tremor.so
 * @author Tremor Raw
 * @license MIT
 */
export function ListGitMergeStatusIndicator({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl border border-border/60 bg-card hover:bg-muted/30 transition-colors w-full max-w-sm ${className}`}>
      <div className="flex items-center gap-3">
        <span className="text-base">🔀</span>
        <div>
          <p className="text-xs font-semibold text-foreground">Pull Request #412 Merged</p>
          <p className="text-[10px] text-muted-foreground font-mono">artyomnikolae7</p>
        </div>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted font-mono text-muted-foreground">
        Status Indicator Card
      </span>
    </div>
  );
}
export default ListGitMergeStatusIndicator;
