/**
 * @source https://amantle.dev/components/button-neubrutalist
 * @author AMANTLE UI
 * @license MIT
 * @modified Neubrutalist hard offset shadow translation
 */
"use client";

import * as React from "react";
import { SquareTerminal } from "lucide-react";

export function ButtonNeubrutalist({
  children = "Компиляция",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-amber-300 text-black border-2 border-black font-mono font-bold text-sm rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-[color,background-color,border-color,box-shadow,transform] ${className}`}
      {...props}
    >
      <SquareTerminal className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
}
export default ButtonNeubrutalist;
