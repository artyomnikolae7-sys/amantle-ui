"use client";

import React, { useRef, useState } from "react";

/**
 * @component MagnetLines
 * @source https://reactbits.dev/components/magnet-lines
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export function MagnetLines({
  rows = 5,
  columns = 8,
  className = "",
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [angles, setAngles] = useState<number[]>(new Array(rows * columns).fill(0));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    const cells = containerRef.current.children;
    const newAngles: number[] = [];

    for (let i = 0; i < cells.length; i++) {
      const cellRect = (cells[i] as HTMLElement).getBoundingClientRect();
      const cellCenterX = cellRect.left + cellRect.width / 2 - rect.left;
      const cellCenterY = cellRect.top + cellRect.height / 2 - rect.top;
      const rad = Math.atan2(cursorY - cellCenterY, cursorX - cellCenterX);
      newAngles.push((rad * 180) / Math.PI);
    }
    setAngles(newAngles);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
      className={`gap-3 rounded-2xl border border-border/50 bg-card p-6 shadow-sm ${className}`}
    >
      {angles.map((angle, idx) => (
        <div key={idx} className="flex h-8 w-8 items-center justify-center">
          <div
            className="h-5 w-1 rounded-full bg-primary/70 transition-transform duration-150"
            style={{
              transform: `rotate(${angle}deg)`,
              transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default MagnetLines;
