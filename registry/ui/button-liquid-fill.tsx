/**
 * @source https://amantle.dev/components/button-liquid-fill
 * @author AMANTLE UI
 * @license MIT
 * @modified Wave liquid fill from bottom translateY
 */
"use client";

import * as React from "react";
import { Droplets } from "lucide-react";

export function ButtonLiquidFill({
  children = "Подписка Pro",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-primary/50 text-foreground font-medium text-sm group transition-[color,background-color,border-color,box-shadow,transform] active:scale-95 ${className}`}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full bg-primary translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
      <Droplets className="relative z-10 w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300 font-semibold">
        {children}
      </span>
    </button>
  );
}
export default ButtonLiquidFill;
