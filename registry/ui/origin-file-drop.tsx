"use client";
import React, { useState } from "react";
/**
 * @component OriginFileDrop
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginFileDrop({ className = "" }: { className?: string }) {
  const [isDrag, setIsDrag] = useState(false);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDrag(true);
      }}
      onDragLeave={() => setIsDrag(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDrag(false);
      }}
      className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed transition-all duration-200 text-center cursor-pointer max-w-xs ${
        isDrag ? "border-primary bg-primary/10" : "border-border/70 hover:border-primary/50 bg-card/40"
      } ${className}`}
    >
      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-foreground font-mono text-sm mb-2">
        ↑
      </div>
      <p className="text-xs font-medium text-foreground">Drop components or assets here</p>
      <p className="text-[10px] text-muted-foreground mt-0.5">Supports TSX, JSON, SVG up to 10MB</p>
    </div>
  );
}
export default OriginFileDrop;
