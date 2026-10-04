"use client";
import React, { useState } from "react";
/**
 * @component PickerSpringDampingNumericInputSync
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function PickerSpringDampingNumericInputSync({ className = "" }: { className?: string }) {
  const [val, setVal] = useState(20);

  return (
    <div className={`p-3 rounded-xl border border-border/60 bg-card/60 w-full max-w-xs space-y-2 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-foreground">Spring Damping</span>
        <span className="font-mono text-primary font-bold">{val}c</span>
      </div>
      <input
        type="range"
        min="5"
        max="50"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
        <span>5c</span>
        <span>50c</span>
      </div>
    </div>
  );
}
export default PickerSpringDampingNumericInputSync;
