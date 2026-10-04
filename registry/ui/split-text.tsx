/**
 * @source https://reactbits.dev/text-animations/split-text
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SplitTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  delay?: number;
  animateBy?: "words" | "chars";
  className?: string;
}

export function SplitText({
  text = "AMANTLE UI Design System",
  delay = 40,
  animateBy = "words",
  className,
  ...props
}: SplitTextProps) {
  const [mounted, setMounted] = React.useState(false);
  const elements = React.useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <p
      className={cn("inline-flex flex-wrap items-center font-bold tracking-tight text-foreground", className)}
      {...props}
    >
      {elements.map((segment, index) => {
        const itemDelay = `${index * delay}ms`;
        return (
          <span
            key={index}
            className="inline-block transition-all will-change-[transform,opacity]"
            style={{
              transitionDuration: "500ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Emil snappy spring
              transitionDelay: itemDelay,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
            }}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </p>
  );
}
export default SplitText;
