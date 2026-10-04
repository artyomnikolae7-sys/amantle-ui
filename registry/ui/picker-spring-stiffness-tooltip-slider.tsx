"use client";
import React, { useState } from "react";
/**
 * @component PickerSpringStiffnessTooltipSlider
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function PickerSpringStiffnessTooltipSlider({ className = "" }: { className?: string }) {
  const [val, setVal] = useState(200);

  return (
    <div className={`p-3 rounded-xl border border-border/60 bg-card/60 w-full max-w-xs space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-foreground">Spring Stiffness</span>
        <span className="font-mono text-primary font-bold">{val}k</span>
      </div>
      <input
        type="range"
        min="50"
        max="500"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
        <span>50k</span>
        <span>500k</span>
      </div>
    </div>
  );
}
export default PickerSpringStiffnessTooltipSlider;
