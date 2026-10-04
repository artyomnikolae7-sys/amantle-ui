/**
 * @source https://amantle.dev/components/input-cyber-glass
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Cyber-Glass frosted input field
 */

"use client";

import * as React from "react";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputCyberGlassProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

export function InputCyberGlass({
  className,
  placeholder = "Введите сетевой адрес узла...",
  icon = true,
  ...props
}: InputCyberGlassProps) {
  return (
    <div className="relative w-full max-w-md">
      {icon && (
        <Terminal className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70" />
      )}
      <input
        placeholder={placeholder}
        className={cn(
          "w-full h-11 rounded-xl text-xs sm:text-sm font-mono text-foreground placeholder:text-muted-foreground/60",
          "bg-background/40 focus:bg-background/60 backdrop-blur-xl border border-white/20 dark:border-white/10",
          "shadow-[0_4px_20px_0_rgba(0,0,0,0.15)] focus:shadow-[0_0_20px_rgba(var(--primary),0.35)]",
          "focus:border-primary focus:outline-none transition-all duration-200",
          icon ? "pl-10 pr-4" : "px-4",
          className
        )}
        {...props}
      />
    </div>
  );
}
export default InputCyberGlass;
