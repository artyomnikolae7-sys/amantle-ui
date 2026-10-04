"use client";
import React, { useState } from "react";
/**
 * @component PickerFontWeightStepperButtons
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function PickerFontWeightStepperButtons({ className = "" }: { className?: string }) {
  const [val, setVal] = useState(600);

  return (
    <div className={`p-3 rounded-xl border border-border/60 bg-card/60 w-full max-w-xs space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-foreground">Typography Weight</span>
        <span className="font-mono text-primary font-bold">{val}w</span>
      </div>
      <input
        type="range"
        min="100"
        max="900"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
        <span>100w</span>
        <span>900w</span>
      </div>
    </div>
  );
}
export default PickerFontWeightStepperButtons;
