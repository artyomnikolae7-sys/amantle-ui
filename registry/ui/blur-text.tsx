/**
 * @source https://reactbits.dev/text-animations/blur-text
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BlurTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "chars";
  direction?: "top" | "bottom";
}

export function BlurText({
  text = "Кинематографичный текст с прогрессивным фокусом",
  delay = 50,
  className,
  animateBy = "words",
  direction = "top",
  ...props
}: BlurTextProps) {
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef<HTMLParagraphElement>(null);

  const elements = React.useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={cn("inline-flex flex-wrap items-center font-medium text-foreground", className)}
      {...props}
    >
      {elements.map((segment, index) => {
        const itemDelay = `${index * delay}ms`;
        const initialY = direction === "top" ? "-20px" : "20px";

        return (
          <span
            key={index}
            className="inline-block transition-all will-change-[transform,filter,opacity]"
            style={{
              transitionDuration: "600ms",
              transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", // Emil smooth spring
              transitionDelay: itemDelay,
              opacity: inView ? 1 : 0,
              filter: inView ? "blur(0px)" : "blur(10px)",
              transform: inView ? "translateY(0)" : `translateY(${initialY})`,
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
export default BlurText;
