/**
 * @source https://reactbits.dev/components/ripple / Material Design
 * @author AMANTLE UI
 * @license MIT
 * @modified Interactive ripple button with dynamic coordinate calculation and automatic cleanup
 */

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const rippleButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-medium select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] transition-[color,background-color,border-color,box-shadow,transform]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        glass: "bg-background/50 backdrop-blur-md border border-border/80 text-foreground shadow-sm hover:bg-background/80",
        glow: "bg-gradient-to-r from-primary via-violet-500 to-rose-500 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

export interface ButtonRippleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof rippleButtonVariants> {
  rippleColor?: string;
  duration?: number;
}

export const ButtonRipple = React.forwardRef<HTMLButtonElement, ButtonRippleProps>(
  (
    {
      className,
      variant,
      size,
      rippleColor,
      duration = 600,
      children,
      onClick,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = React.useRef<HTMLButtonElement>(null);
    const buttonRef = (forwardedRef as React.RefObject<HTMLButtonElement>) || internalRef;
    const [ripples, setRipples] = React.useState<Ripple[]>([]);

    const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height) * 2;
      
      const isKeyboardTrigger = e.clientX === 0 && e.clientY === 0;
      const x = isKeyboardTrigger ? rect.width / 2 : e.clientX - rect.left;
      const y = isKeyboardTrigger ? rect.height / 2 : e.clientY - rect.top;

      const newRipple: Ripple = {
        x: x - diameter / 2,
        y: y - diameter / 2,
        size: diameter,
        id: Date.now() + Math.random(),
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, duration);

      onClick?.(e);
    };

    return (
      <button
        ref={buttonRef}
        className={cn(rippleButtonVariants({ variant, size, className }))}
        onClick={createRipple}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2 pointer-events-none">
          {children}
        </span>

        {/* Ripple container */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] motion-reduce:hidden">
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute rounded-full animate-ripple pointer-events-none"
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                backgroundColor: rippleColor || "currentColor",
                opacity: 0.28,
                animationDuration: `${duration}ms`,
              }}
            />
          ))}
        </span>
      </button>
    );
  }
);

ButtonRipple.displayName = "ButtonRipple";
