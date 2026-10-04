/**
 * @source https://ui.aceternity.com/components/compare
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComparisonSliderImageProps {
  className?: string;
  defaultPosition?: number;
}

export function ComparisonSliderImage({ className, defaultPosition = 50 }: ComparisonSliderImageProps) {
  const [position, setPosition] = React.useState(defaultPosition);

  return (
    <div className={cn("relative w-full max-w-lg h-64 rounded-2xl overflow-hidden border border-border bg-card select-none", className)}>
      {/* Before */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center">
        <span className="font-bold text-xl text-white/50">ДО ОПТИМИЗАЦИИ</span>
      </div>

      {/* After with clip path */}
      <div
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center"
      >
        <span className="font-black text-xl text-white">AMANTLE UI ПОСЛЕ</span>
      </div>

      {/* Slider handle */}
      <div
        style={{ left: `${position}%` }}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
      >
        <div className="h-8 w-8 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-900">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
      />
    </div>
  );
}
