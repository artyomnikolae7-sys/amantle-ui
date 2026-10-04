/**
 * @source https://reactbits.dev/text-animations/shiny-text
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ShinyTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text?: string;
  speed?: number; // duration in seconds
  className?: string;
  disabled?: boolean;
}

export function ShinyText({
  text = "Премиальное сияние AMANTLE UI",
  speed = 4,
  className,
  disabled = false,
  ...props
}: ShinyTextProps) {
  return (
    <span
      className={cn(
        "inline-block font-semibold bg-clip-text text-transparent select-none",
        disabled ? "text-foreground" : "animate-shiny-sweep",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: `${speed}s`,
      }}
      {...props}
    >
      <span className="text-foreground/90">{text}</span>
    </span>
  );
}
export default ShinyText;
