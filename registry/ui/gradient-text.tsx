/**
 * @source https://reactbits.dev/text-animations/gradient-text
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface GradientTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  colors?: string[];
  animationSpeed?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export function GradientText({
  children = "Следующее поколение веб-интерфейсов",
  colors = ["#7c3aed", "#3b82f6", "#06b6d4", "#10b981", "#7c3aed"],
  animationSpeed = 6,
  className,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  const gradientString = colors.join(", ");

  return (
    <Component
      className={cn(
        "inline-block font-extrabold tracking-tight bg-clip-text text-transparent select-none animate-gradient-flow",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientString})`,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: `${animationSpeed}s`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
export default GradientText;
