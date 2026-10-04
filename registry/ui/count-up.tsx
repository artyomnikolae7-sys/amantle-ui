/**
 * @source https://reactbits.dev/text-animations/count-up
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CountUpProps extends React.HTMLAttributes<HTMLSpanElement> {
  to?: number;
  from?: number;
  duration?: number;
  separator?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  to = 1000000,
  from = 0,
  duration = 2000,
  separator = " ",
  decimals = 0,
  prefix = "",
  suffix = "+",
  className,
  ...props
}: CountUpProps) {
  const [value, setValue] = React.useState(from);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Emil smooth easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = from + (to - from) * ease;
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    };

    requestAnimationFrame(step);
  }, [started, from, to, duration]);

  const formattedValue = React.useMemo(() => {
    const fixed = value.toFixed(decimals);
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  }, [value, decimals, separator]);

  return (
    <span
      ref={ref}
      className={cn("font-mono font-bold tracking-tight text-foreground select-none inline-flex items-center", className)}
      {...props}
    >
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
export default CountUp;
