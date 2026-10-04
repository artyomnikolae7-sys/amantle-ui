/**
 * @source https://amantle.dev/components/button-glow-neon
 * @author AMANTLE UI
 * @license MIT
 * @modified Neon cyberpunk specular aura with blurred bloom
 */
"use client";

import * as React from "react";
import { Zap } from "lucide-react";

export function ButtonGlowNeon({
  children = "Активировать ядро",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative group inline-block">
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse motion-reduce:animate-none" />
      <button
        className={`relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-background/95 backdrop-blur-sm border border-cyan-500/50 text-cyan-300 font-semibold text-sm transition-[color,background-color,border-color,box-shadow,transform] duration-200 active:scale-95 ${className}`}
        {...props}
      >
        <Zap className="w-4 h-4 text-cyan-400 animate-bounce motion-reduce:animate-none" />
        <span className="tracking-wide text-foreground">{children}</span>
      </button>
    </div>
  );
}
export default ButtonGlowNeon;
