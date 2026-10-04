/**
 * @source https://amantle.dev/components/input-neubrutalist
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Neubrutalist hard-bordered input with solid shadow offset
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputNeubrutalistProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function InputNeubrutalist({
  className,
  label = "Команда CLI",
  placeholder = "amantle-ui build --turbo",
  ...props
}: InputNeubrutalistProps) {
  return (
    <div className="w-full max-w-md space-y-1.5 font-mono">
      {label && (
        <label className="text-xs font-bold text-foreground uppercase tracking-wider block">
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        className={cn(
          "w-full h-11 px-4 text-xs sm:text-sm font-bold text-foreground bg-card",
          "border-2 border-foreground dark:border-white rounded-lg",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]",
          "focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
          "focus:outline-none transition-all duration-150",
          className
        )}
        {...props}
      />
    </div>
  );
}
export default InputNeubrutalist;
