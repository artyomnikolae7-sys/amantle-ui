/**
 * @source https://reactbits.dev / Emil Kowalski / AMANTLE UI
 * @author AMANTLE UI
 * @license MIT
 * @modified Smooth expandable icon button with hardware-accelerated slide and width transitions
 */

"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const expandableButtonVariants = cva(
  "group relative inline-flex items-center justify-center gap-0 overflow-hidden whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
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
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonExpandableProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof expandableButtonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  mode?: "reveal-icon" | "reveal-text";
}

export const ButtonExpandable = React.forwardRef<HTMLButtonElement, ButtonExpandableProps>(
  (
    {
      className,
      variant,
      size,
      icon = <ArrowRight className="h-4 w-4" />,
      iconPosition = "right",
      mode = "reveal-icon",
      children,
      ...props
    },
    ref
  ) => {
    if (mode === "reveal-text") {
      return (
        <button
          ref={ref}
          className={cn(
            expandableButtonVariants({ variant, size, className }),
            "px-3 group-hover:px-4 transition-[padding,transform] duration-200 ease-out"
          )}
          {...props}
        >
          <span className="flex items-center justify-center shrink-0">
            {icon}
          </span>
          <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 group-focus-visible:max-w-xs group-focus-visible:opacity-100 group-focus-visible:ml-2 transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out motion-reduce:transition-none">
            {children}
          </span>
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(expandableButtonVariants({ variant, size, className }))}
        {...props}
      >
        {iconPosition === "left" && (
          <span className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr] transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out motion-reduce:transition-none">
            <span className="overflow-hidden flex items-center pr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out">
              {icon}
            </span>
          </span>
        )}

        <span className="transition-transform duration-200 ease-out">
          {children}
        </span>

        {iconPosition === "right" && (
          <span className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] group-focus-visible:grid-cols-[1fr] transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out motion-reduce:transition-none">
            <span className="overflow-hidden flex items-center pl-2 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out">
              {icon}
            </span>
          </span>
        )}
      </button>
    );
  }
);

ButtonExpandable.displayName = "ButtonExpandable";
