/**
 * @source https://amantle.dev/components/button-elastic-bounce
 * @author AMANTLE UI / Emil Kowalski
 * @license MIT
 * @modified Physics-based elastic spring release curve
 */
"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

export function ButtonElasticBounce({
  children = "Нажми меня",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-90 hover:scale-105 hover:-translate-y-0.5 ${className}`}
      {...props}
    >
      <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
      <span>{children}</span>
    </button>
  );
}
export default ButtonElasticBounce;
