"use client";
import React, { useState } from "react";
/**
 * @component TargetCursor
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function TargetCursor({ className = "" }: { className?: string }) {
  const [locked, setLocked] = useState(false);
  return (
    <div
      onClick={() => setLocked(!locked)}
      className={`inline-flex items-center gap-2 rounded-xl border border-border/60 bg-card px-4 py-2 text-xs font-semibold shadow-sm hover:border-primary cursor-pointer active:scale-95 transition-all ${className}`}
    >
      <span className={`h-3 w-3 rounded-full border-2 border-primary flex items-center justify-center transition-transform ${locked ? "scale-125 bg-primary/20" : ""}`}>
        <span className="h-1 w-1 rounded-full bg-primary" />
      </span>
      <span>{locked ? "TARGET LOCKED" : "TARGET ACQUIRE"}</span>
    </div>
  );
}
export default TargetCursor;
