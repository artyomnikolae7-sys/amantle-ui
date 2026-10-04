/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Glassmorphism preset with Tailwind v4 backdrop-blur
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export function CardGlass({ className, children, glow = true, ...props }: CardGlassProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/20 dark:border-white/10 bg-background/40 dark:bg-card/40 backdrop-blur-xl p-6 shadow-xl text-foreground",
        glow && "before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-b before:from-primary/20 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
