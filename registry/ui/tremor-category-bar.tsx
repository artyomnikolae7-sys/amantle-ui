"use client";
import React from "react";
/**
 * @component TremorCategoryBar
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorCategoryBar({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-sm space-y-2 ${className}`}>
      <div className="flex justify-between text-xs font-medium">
        <span className="text-muted-foreground">Storage Quota</span>
        <span className="text-foreground font-mono">78% used</span>
      </div>
      <div className="flex h-2.5 w-full rounded-full overflow-hidden gap-0.5 bg-muted p-0.5">
        <div className="h-full bg-primary rounded-l-full" style={{ width: "50%" }} title="Registry items (50%)" />
        <div className="h-full bg-cyan-400" style={{ width: "20%" }} title="Media assets (20%)" />
        <div className="h-full bg-amber-400" style={{ width: "8%" }} title="Logs (8%)" />
      </div>
    </div>
  );
}
export default TremorCategoryBar;
