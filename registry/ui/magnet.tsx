"use client";

import React, { useRef, useState } from "react";

/**
 * @component Magnet
 * @source https://reactbits.dev/components/magnet
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface MagnetProps {
  children?: React.ReactNode;
  padding?: number;
  disabled?: boolean;
  className?: string;
}

export function Magnet({
  children,
  padding = 80,
  disabled = false,
  className = "",
}: MagnetProps) {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !magnetRef.current) return;
    const rect = magnetRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

    if (dist < padding) {
      setOffset({
        x: (e.clientX - centerX) * 0.35,
        y: (e.clientY - centerY) * 0.35,
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={magnetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: "transform 240ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {children || (
          <button className="rounded-xl border border-primary/20 bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-md hover:bg-primary/90 active:scale-[0.97]">
            Hover Near Me 🧲
          </button>
        )}
      </div>
    </div>
  );
}

export default Magnet;
