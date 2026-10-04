/**
 * @source https://amantle.dev/components/button-gradient-border
 * @author AMANTLE UI
 * @license MIT
 * @modified Conic gradient continuous rotating border
 */
"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

export function ButtonGradientBorder({
  children = "Документация",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-xl font-medium transition-transform duration-200 active:scale-95 group ${className}`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#38bdf8_50%,#c084fc_100%)] opacity-80 group-hover:opacity-100" />
      <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-[11px] bg-background/90 backdrop-blur-md text-sm text-foreground font-medium transition-colors group-hover:bg-background/80">
        <span>{children}</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}
export default ButtonGradientBorder;
