/**
 * @source AMANTLE UI Motion Engine
 * @author Open Source
 * @license MIT
 * @modified Tokenized for AMANTLE UI with Tailwind v4 semantic variables and spring motion
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonGradientFlowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glow?: boolean;
}

export const ButtonGradientFlow = React.forwardRef<
  HTMLButtonElement,
  ButtonGradientFlowProps
>(({ className, children, glow = true, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-primary-foreground",
        "rounded-lg overflow-hidden group cursor-pointer",
        "bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient",
        "active:scale-[0.97] duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "motion-reduce:animate-none motion-reduce:active:scale-100",
        glow && "shadow-[0_0_20px_-5px_var(--color-primary)]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
});

ButtonGradientFlow.displayName = "ButtonGradientFlow";