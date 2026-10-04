/**
 * @source https://amantle.dev/components/slider-circular-dial
 * @author AMANTLE UI
 * @license MIT
 * @modified Circular rotary SVG gauge dial
 */
"use client";

import * as React from "react";

export function SliderCircularDial() {
  const [val, setVal] = React.useState(65);

  const radius = 38;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (val / 100) * circ;

  return (
    <div className="inline-flex flex-col items-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle cx="48" cy="48" r={radius} className="stroke-muted" strokeWidth="6" fill="transparent" />
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-primary transition-[color,background-color,border-color,box-shadow,transform] duration-300"
            strokeWidth="6"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute font-bold text-sm text-foreground">{val}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="mt-2 w-28 accent-primary cursor-pointer"
      />
    </div>
  );
}
export default SliderCircularDial;
