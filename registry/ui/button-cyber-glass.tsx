/**
 * @source https://amantle.dev/components/button-cyber-glass
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Cyber-Glass frosted glassmorphic glow button
 */

"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonCyberGlassProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glowColor?: string;
}

export function ButtonCyberGlass({
  children = "Кибер-Стекло Кнопка",
  className,
  glowColor = "hsl(var(--primary))",
  ...props
}: ButtonCyberGlassProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-medium text-sm text-foreground",
        "bg-background/40 hover:bg-background/60 backdrop-blur-xl border border-white/20 dark:border-white/10",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] hover:shadow-[0_0_25px_rgba(var(--primary),0.4)]",
        "transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] cursor-pointer group",
        className
      )}
      {...props}
    >
      {/* Specular Edge Highlight */}
      <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 dark:via-white/30 to-transparent rounded-t-xl" />

      {/* Cyber Dot Indicator */}
      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_currentColor] animate-pulse" />

      <span>{children}</span>

      <Sparkles className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
export default ButtonCyberGlass;
