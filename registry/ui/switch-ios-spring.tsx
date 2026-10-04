/**
 * @source https://amantle.dev/components/switch-ios-spring
 * @author AMANTLE UI
 * @license MIT
 * @modified iOS style spring toggle physics
 */
"use client";

import * as React from "react";

export function SwitchIosSpring({
  defaultChecked = true,
  onChange,
}: {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const [checked, setChecked] = React.useState(defaultChecked);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={toggle}
      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${
        checked ? "bg-emerald-500" : "bg-muted"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:w-7 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
export default SwitchIosSpring;
