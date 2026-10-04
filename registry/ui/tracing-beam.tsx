"use client";

import React from "react";

/**
 * @component TracingBeam
 * @source https://ui.aceternity.com/components/tracing-beam
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface TracingBeamProps {
  children?: React.ReactNode;
  className?: string;
}

export function TracingBeam({
  children,
  className = "",
}: TracingBeamProps) {
  return (
    <div className={`relative mx-auto flex w-full max-w-2xl gap-6 ${className}`}>
      <div className="relative flex flex-col items-center">
        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_12px_rgba(59,130,246,0.6)]">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        </div>
        <div className="w-[2px] flex-1 bg-gradient-to-b from-primary via-primary/30 to-transparent" />
      </div>
      <div className="flex-1 pb-8">
        {children || (
          <div className="flex flex-col gap-2 rounded-xl border border-border/50 bg-card p-5">
            <h4 className="text-sm font-bold text-foreground">Kinetic Tracing Path</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Illuminating reactive trace light tracking document progression.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TracingBeam;
