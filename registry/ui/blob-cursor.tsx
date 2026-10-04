"use client";
import React, { useState } from "react";
/**
 * @component BlobCursor
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function BlobCursor({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative h-44 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm select-none ${className}`}
    >
      <div
        style={{
          transform: `translate3d(${pos.x - 24}px, ${pos.y - 24}px, 0)`,
          transition: "transform 140ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="pointer-events-none absolute h-12 w-12 rounded-full bg-primary/25 blur-md"
      />
      <div className="relative z-10 flex h-full flex-col justify-center items-center text-center">
        <span className="text-xs font-bold text-foreground">Blob Tracking Area</span>
        <span className="text-[10px] text-muted-foreground">Move mouse inside frame</span>
      </div>
    </div>
  );
}
export default BlobCursor;
