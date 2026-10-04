"use client";
import React, { useState } from "react";
/**
 * @component OriginSwitchIcon
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginSwitchIcon({ className = "" }: { className?: string }) {
  const [checked, setChecked] = useState(true);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        checked ? "bg-primary" : "bg-muted"
      } ${className}`}
    >
      <span
        className={`pointer-events-none flex h-6 w-6 transform items-center justify-center rounded-full bg-background shadow-md transition duration-200 ease-in-out text-[11px] ${
          checked ? "translate-x-5 text-primary" : "translate-x-0 text-muted-foreground"
        }`}
      >
        {checked ? "✓" : "✕"}
      </span>
    </button>
  );
}
export default OriginSwitchIcon;
