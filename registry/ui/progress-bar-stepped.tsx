"use client";

import React from "react";

/**
 * @component ProgressBarStepped
 * @source https://raw.tremor.so
 * @author Tremor
 * @license Apache-2.0
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface ProgressBarSteppedProps {
  currentStep?: number;
  totalSteps?: number;
  className?: string;
}

export function ProgressBarStepped({
  currentStep = 3,
  totalSteps = 5,
  className = "",
}: ProgressBarSteppedProps) {
  return (
    <div className={`flex w-full max-w-sm flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
        <span>Batch Synthesis Pipeline</span>
        <span className="font-mono text-foreground font-bold">Step {currentStep} of {totalSteps}</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i < currentStep ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProgressBarStepped;
