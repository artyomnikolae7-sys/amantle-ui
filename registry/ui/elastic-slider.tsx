"use client";

import React, { useState } from "react";

/**
 * @component ElasticSlider
 * @source https://reactbits.dev/components/elastic-slider
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface ElasticSliderProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  className?: string;
}

export function ElasticSlider({
  defaultValue = 50,
  min = 0,
  max = 100,
  className = "",
}: ElasticSliderProps) {
  const [val, setVal] = useState(defaultValue);

  return (
    <div className={`flex w-full max-w-xs flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
        <span>Elastic Intensity</span>
        <span className="font-mono text-foreground font-bold">{val}%</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary transition-all duration-200 active:scale-[0.99]"
      />
    </div>
  );
}

export default ElasticSlider;
