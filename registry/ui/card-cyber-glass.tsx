/**
 * @source https://amantle.dev/components/card-cyber-glass
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Cyber-Glass frosted glassmorphic card with ambient glow
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardCyberGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function CardCyberGlass({ children, className, ...props }: CardCyberGlassProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6",
        "bg-background/30 hover:bg-background/45 backdrop-blur-2xl border border-white/20 dark:border-white/10",
        "shadow-[0_12px_40px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(var(--primary),0.25)]",
        "transition-all duration-300 group",
        className
      )}
      {...props}
    >
      {/* Specular Edge Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Cyber Ambient Corner Halo */}
      <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-primary/15 blur-2xl pointer-events-none group-hover:bg-primary/25 transition-all" />

      <div className="relative z-10">
        {children || (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-primary">
                Cyber-Glass Surface
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            </div>
            <h4 className="text-lg font-bold text-foreground tracking-tight">
              Квантовая Прозрачность
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Многослойный оптический эффект с микро-блюром 40px и адаптивным рассеиванием света.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default CardCyberGlass;
