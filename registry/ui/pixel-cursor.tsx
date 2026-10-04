"use client";
import React from "react";
/**
 * @component PixelCursor
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function PixelCursor({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-xl border border-dashed border-border/80 bg-muted/20 px-4 py-2 font-mono text-xs font-bold ${className}`}>
      <span className="h-3 w-3 bg-foreground inline-block shadow-[2px_2px_0px_#888]" />
      <span>RETRO_PIXEL_TRACKER</span>
    </div>
  );
}
export default PixelCursor;
