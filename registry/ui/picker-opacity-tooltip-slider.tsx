"use client";
import React, { useState } from "react";
/**
 * @component PickerOpacityTooltipSlider
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function PickerOpacityTooltipSlider({ className = "" }: { className?: string }) {
  const [val, setVal] = useState(80);

  return (
    <div className={`p-3 rounded-xl border border-border/60 bg-card/60 w-full max-w-xs space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-foreground">Element Opacity</span>
        <span className="font-mono text-primary font-bold">{val}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
export default PickerOpacityTooltipSlider;
