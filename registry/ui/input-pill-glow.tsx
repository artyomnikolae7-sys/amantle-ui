/**
 * @source https://amantle.dev/components/input-pill-glow
 * @author AMANTLE UI
 * @license MIT
 * @modified Pill shaped input with glowing ring focus
 */
"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

export function InputPillGlow({
  placeholder = "Введите ваш email...",
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative group max-w-sm w-full">
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
      <div className="relative flex items-center bg-card rounded-full border border-border px-4 py-2 shadow-sm">
        <Sparkles className="w-4 h-4 text-muted-foreground mr-2 group-focus-within:text-violet-500 transition-colors" />
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
export default InputPillGlow;
