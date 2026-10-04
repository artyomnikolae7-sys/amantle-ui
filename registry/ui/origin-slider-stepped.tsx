"use client";
import React, { useState } from "react";
/**
 * @component OriginSliderStepped
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginSliderStepped({ className = "" }: { className?: string }) {
  const [value, setValue] = useState(60);

  return (
    <div className={`w-full max-w-xs space-y-2 ${className}`}>
      <div className="flex justify-between text-xs font-medium">
        <span className="text-muted-foreground">Capacity Allocation</span>
        <span className="text-foreground font-semibold font-mono">{value}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="10"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-primary cursor-pointer h-1.5 bg-muted rounded-lg"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono px-0.5">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
}
export default OriginSliderStepped;
