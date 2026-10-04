"use client";
import React from "react";
/**
 * @component ListDnsSyncTimelineNode
 * @source https://raw.tremor.so
 * @author Tremor Raw
 * @license MIT
 */
export function ListDnsSyncTimelineNode({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl border border-border/60 bg-card hover:bg-muted/30 transition-colors w-full max-w-sm ${className}`}>
      <div className="flex items-center gap-3">
        <span className="text-base">🌐</span>
        <div>
          <p className="text-xs font-semibold text-foreground">Custom Domain Propagated</p>
          <p className="text-[10px] text-muted-foreground font-mono">amantle.dev</p>
        </div>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted font-mono text-muted-foreground">
        Timeline Node
      </span>
    </div>
  );
}
export default ListDnsSyncTimelineNode;
