"use client";
import React, { useState } from "react";
/**
 * @component PickerSpeedCircularGauge
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function PickerSpeedCircularGauge({ className = "" }: { className?: string }) {
  const [val, setVal] = useState(300);

  return (
    <div className={`p-3 rounded-xl border border-border/60 bg-card/60 w-full max-w-xs space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-foreground">Playback Speed</span>
        <span className="font-mono text-primary font-bold">{val}ms</span>
      </div>
      <input
        type="range"
        min="100"
        max="2000"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
        <span>100ms</span>
        <span>2000ms</span>
      </div>
    </div>
  );
}
export default PickerSpeedCircularGauge;
