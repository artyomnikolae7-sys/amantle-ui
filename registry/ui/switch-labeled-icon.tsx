/**
 * @source https://amantle.dev/components/switch-labeled-icon
 * @author AMANTLE UI
 * @license MIT
 * @modified Day-Night icon morphing switch
 */
"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";

export function SwitchLabeledIcon() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`relative inline-flex h-8 w-16 items-center rounded-full p-1 transition-colors duration-300 ${
        isDark ? "bg-slate-900 border border-slate-700" : "bg-amber-100 border border-amber-300"
      }`}
    >
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark
            ? "translate-x-8 bg-slate-800 text-indigo-300"
            : "translate-x-0 bg-white text-amber-500"
        }`}
      >
        {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
      </div>
    </button>
  );
}
export default SwitchLabeledIcon;
