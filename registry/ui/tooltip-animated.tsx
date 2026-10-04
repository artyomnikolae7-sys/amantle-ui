/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Animated tooltip with trigger
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TooltipAnimatedProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

export function TooltipAnimated({ content, children, className }: TooltipAnimatedProps) {
  const [visible, setVisible] = React.useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-2.5 py-1 rounded-md bg-foreground text-background text-[11px] font-medium shadow-md whitespace-nowrap animate-in motion-reduce:animate-none fade-in zoom-in-95 duration-150",
            className
          )}
        >
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
        </div>
      )}
    </div>
  );
}
