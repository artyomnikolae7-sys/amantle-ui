/**
 * @source https://reactbits.dev/components/shimmer-button / Magic UI / AMANTLE UI
 * @author AMANTLE UI
 * @license MIT
 * @modified Premium shimmer CTA button with rotating border beam and luminous surface sweep
 */

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const shimmerButtonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:shadow-primary/25",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90",
        outline: "border border-input bg-background/80 backdrop-blur-sm text-foreground hover:bg-accent",
        dark: "bg-background text-zinc-100 border border-border shadow-xl hover:border-border",
        glass: "bg-background/60 backdrop-blur-md border border-border/80 text-foreground shadow-sm hover:border-primary/50",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "default",
    },
  }
);

export interface ButtonShimmerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof shimmerButtonVariants> {
  shimmerColor?: string;
  shimmerDuration?: string;
  effect?: "beam" | "sweep" | "both";
}

export const ButtonShimmer = React.forwardRef<HTMLButtonElement, ButtonShimmerProps>(
  (
    {
      className,
      variant,
      size,
      shimmerColor = "hsl(var(--primary))",
      shimmerDuration = "3s",
      effect = "both",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(shimmerButtonVariants({ variant, size, className }))}
        {...props}
      >
        <style>{`
          @keyframes amantle-beam-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes amantle-shimmer-sweep {
            0% { transform: translateX(-150%) skewX(-20deg); }
            100% { transform: translateX(250%) skewX(-20deg); }
          }
        `}</style>

        {/* 1. Border Beam Effect (rotating conic gradient background) */}
        {(effect === "beam" || effect === "both") && (
          <span
            aria-hidden="true"
            className="absolute inset-[-150%] pointer-events-none motion-reduce:hidden"
            style={{
              animation: `amantle-beam-spin ${shimmerDuration} linear infinite`,
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 320deg, ${shimmerColor} 340deg, transparent 360deg)`,
            }}
          />
        )}

        {/* Button inner container masking the border */}
        <span
          className={cn(
            "relative z-10 inline-flex h-[calc(100%-2px)] w-[calc(100%-2px)] items-center justify-center gap-2 rounded-[inherit] px-[inherit] py-[inherit] pointer-events-none",
            variant === "dark" && "bg-background/95",
            variant === "default" && "bg-primary/95",
            variant === "secondary" && "bg-secondary/95",
            variant === "outline" && "bg-background/95",
            variant === "glass" && "bg-background/70 backdrop-blur-md"
          )}
        >
          {children}

          {/* 2. Linear Surface Shimmer Sweep */}
          {(effect === "sweep" || effect === "both") && (
            <span
              aria-hidden="true"
              className="absolute inset-0 -top-full -bottom-full w-1/2 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity motion-reduce:hidden"
              style={{
                animation: `amantle-shimmer-sweep calc(${shimmerDuration} * 1.2) cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)`,
              }}
            />
          )}
        </span>
      </button>
    );
  }
);

ButtonShimmer.displayName = "ButtonShimmer";
