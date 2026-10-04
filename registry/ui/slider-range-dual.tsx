/**
 * @source https://amantle.dev/components/slider-range-dual
 * @author AMANTLE UI
 * @license MIT
 * @modified Dual-thumb range slider with interactive track
 */
"use client";

import * as React from "react";

export function SliderRangeDual() {
  const [min, setMin] = React.useState(25);
  const [max, setMax] = React.useState(75);

  return (
    <div className="max-w-xs w-full space-y-3">
      <div className="flex justify-between text-xs font-medium text-foreground">
        <span>От {min} $</span>
        <span>До {max} $</span>
      </div>
      <div className="relative h-2 bg-muted rounded-full flex items-center">
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{ left: `${min}%`, width: `${max - min}%` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 5))}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto h-2 cursor-pointer"
        />
        <input
          type="range"
          min={0}
          max={100}
          value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 5))}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto h-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
export default SliderRangeDual;
