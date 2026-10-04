"use client";
import React, { useState } from "react";
/**
 * @component StepperSlider
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function StepperSlider({ steps = 5, className = "" }: { steps?: number; className?: string }) {
  const [step, setStep] = useState(2);
  return (
    <div className={`flex w-full max-w-xs flex-col gap-2 ${className}`}>
      <div className="flex justify-between text-xs font-semibold text-muted-foreground">
        <span>Step Progress</span>
        <span className="font-mono text-foreground font-bold">{step + 1}/{steps}</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: steps }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`h-2 flex-1 rounded-full transition-all duration-200 active:scale-95 ${
              i <= step ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default StepperSlider;
