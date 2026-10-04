/**
 * @source https://amantle.dev/components/switch-segmented-slider
 * @author AMANTLE UI
 * @license MIT
 * @modified 3-position sliding segment pill
 */
"use client";

import * as React from "react";

export function SwitchSegmentedSlider() {
  const [active, setActive] = React.useState(0);
  const options = ["День", "Неделя", "Месяц"];

  return (
    <div className="relative inline-flex rounded-xl bg-muted p-1 border border-border">
      <div
        className="absolute top-1 bottom-1 rounded-lg bg-card shadow-sm transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          width: `calc(${100 / options.length}% - 4px)`,
          left: `calc(${(active * 100) / options.length}% + 2px)`,
        }}
      />
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => setActive(i)}
          className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
export default SwitchSegmentedSlider;
