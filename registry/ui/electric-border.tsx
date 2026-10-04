"use client";

import React from "react";

/**
 * @component ElectricBorder
 * @source https://reactbits.dev/components/electric-border
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface ElectricBorderProps {
  children?: React.ReactNode;
  className?: string;
}

export function ElectricBorder({
  children,
  className = "",
}: ElectricBorderProps) {
  return (
    <div className={`relative inline-flex p-[2px] overflow-hidden rounded-2xl ${className}`}>
      <div
        className="absolute inset-0 animate-spin"
        style={{
          background: "conic-gradient(from 0deg, transparent 0deg, #06b6d4 120deg, #a855f7 240deg, transparent 360deg)",
          animationDuration: "3s",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center rounded-[14px] bg-card px-6 py-4 text-card-foreground shadow-lg">
        {children || (
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase">Electric Border</span>
            <span className="text-xs text-muted-foreground">High-Voltage Animated Kinetic Rim</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ElectricBorder;
