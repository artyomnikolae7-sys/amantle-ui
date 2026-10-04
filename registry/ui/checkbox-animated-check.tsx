/**
 * @source https://amantle.dev/components/checkbox-animated-check
 * @author AMANTLE UI
 * @license MIT
 * @modified SVG vector path-draw animation
 */
"use client";

import * as React from "react";

export function CheckboxAnimatedCheck({
  label = "Принимаю условия соглашения",
}: {
  label?: string;
}) {
  const [checked, setChecked] = React.useState(true);

  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
      <div
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-[color,background-color,border-color,box-shadow,transform] duration-200 ${
          checked ? "bg-primary border-primary shadow-sm" : "border-border bg-card"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`w-3.5 h-3.5 stroke-primary-foreground fill-none stroke-[3] transition-[color,background-color,border-color,box-shadow,transform] duration-300 ${
            checked ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </label>
  );
}
export default CheckboxAnimatedCheck;
