/**
 * @source https://amantle.dev/components/button-slide-reveal
 * @author AMANTLE UI
 * @license MIT
 * @modified Dual-layer vertical translation hover reveal
 */
"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

export function ButtonSlideReveal({
  primaryText = "Начать бесплатно",
  revealText = "14 дней триала",
  className = "",
  ...props
}: {
  primaryText?: string;
  revealText?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm group transition-transform active:scale-95 ${className}`}
      {...props}
    >
      <span className="flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[150%]">
        <span>{primaryText}</span>
        <ArrowRight className="w-4 h-4" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-[150%] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0 text-primary-foreground font-semibold">
        <span>{revealText}</span>
        <ArrowRight className="w-4 h-4 text-accent" />
      </span>
    </button>
  );
}
export default ButtonSlideReveal;
