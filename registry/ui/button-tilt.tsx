/**
 * @source https://reactbits.dev / Vanilla Tilt / AMANTLE UI
 * @author AMANTLE UI
 * @license MIT
 * @modified 3D perspective spatial tilt button with cursor reflection glare and translateZ depth
 */

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tiltButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lg hover:shadow-xl",
        secondary: "bg-secondary text-secondary-foreground shadow-md hover:shadow-lg",
        outline: "border border-input bg-background shadow-md hover:bg-accent hover:text-accent-foreground",
        glass: "bg-background/60 backdrop-blur-md border border-border/80 text-foreground shadow-lg hover:border-primary/40",
        glow: "bg-gradient-to-r from-primary via-violet-500 to-rose-500 text-white shadow-xl shadow-primary/25 hover:shadow-primary/40",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonTiltProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tiltButtonVariants> {
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
  depth?: number;
}

export const ButtonTilt = React.forwardRef<HTMLButtonElement, ButtonTiltProps>(
  (
    {
      className,
      variant,
      size,
      maxTilt = 14,
      perspective = 600,
      glare = true,
      depth = 20,
      children,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = React.useRef<HTMLButtonElement>(null);
    const buttonRef = (forwardedRef as React.RefObject<HTMLButtonElement>) || internalRef;

    const [tilt, setTilt] = React.useState({ rotateX: 0, rotateY: 0 });
    const [glarePosition, setGlarePosition] = React.useState({ x: 50, y: 50, opacity: 0 });
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTilt({ rotateX, rotateY });
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.35,
      });
      setIsHovered(true);
      onMouseMove?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setTilt({ rotateX: 0, rotateY: 0 });
      setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    return (
      <button
        ref={buttonRef}
        className={cn(
          tiltButtonVariants({ variant, size, className }),
          "motion-reduce:transform-none overflow-hidden"
        )}
        style={{
          transform: isHovered
            ? `perspective(${perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.03, 1.03, 1.03)`
            : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
          transition: isHovered
            ? "transform 80ms ease-out, box-shadow 80ms ease-out"
            : "transform 400ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 400ms cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Dynamic cursor glare highlight */}
        {glare && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 motion-reduce:hidden"
            style={{
              opacity: glarePosition.opacity,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 65%)`,
            }}
          />
        )}

        {/* 3D floating content layer with translateZ */}
        <span
          className="relative z-10 inline-flex items-center justify-center gap-2 pointer-events-none"
          style={{
            transform: isHovered ? `translateZ(${depth}px)` : "translateZ(0px)",
            transition: isHovered ? "transform 80ms ease-out" : "transform 400ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          {children}
        </span>
      </button>
    );
  }
);

ButtonTilt.displayName = "ButtonTilt";
