/**
 * @source https://reactbits.dev/components/magnetic / AMANTLE UI
 * @author Emil Kowalski / AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with dual-layer parallax, Tailwind v4 tokens and reduced-motion support
 */

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const magneticButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        glass: "bg-background/50 backdrop-blur-md border border-border/80 text-foreground shadow-sm hover:bg-background/80 hover:border-primary/40",
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

export interface ButtonMagneticProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof magneticButtonVariants> {
  strength?: number;
  textParallax?: boolean;
}

export const ButtonMagnetic = React.forwardRef<HTMLButtonElement, ButtonMagneticProps>(
  (
    {
      className,
      variant,
      size,
      strength = 0.35,
      textParallax = true,
      children,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = React.useRef<HTMLButtonElement>(null);
    const buttonRef = (forwardedRef as React.RefObject<HTMLButtonElement>) || internalRef;

    const [offset, setOffset] = React.useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      setOffset({ x: deltaX, y: deltaY });
      setIsHovered(true);
      onMouseMove?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setOffset({ x: 0, y: 0 });
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    const transitionStyle = isHovered
      ? "transform 100ms cubic-bezier(0.23, 1, 0.32, 1)"
      : "transform 450ms cubic-bezier(0.23, 1, 0.32, 1)";

    return (
      <button
        ref={buttonRef}
        className={cn(
          magneticButtonVariants({ variant, size, className }),
          "motion-reduce:transform-none"
        )}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <span
          className="inline-flex items-center justify-center gap-2 pointer-events-none"
          style={{
            transform: textParallax ? `translate3d(${offset.x * 0.4}px, ${offset.y * 0.4}px, 0)` : undefined,
            transition: transitionStyle,
            willChange: "transform",
          }}
        >
          {children}
        </span>
      </button>
    );
  }
);

ButtonMagnetic.displayName = "ButtonMagnetic";
