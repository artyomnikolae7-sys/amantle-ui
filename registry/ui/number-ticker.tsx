/**
 * @source https://magicui.design/docs/components/number-ticker
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NumberTickerProps {
  className?: string;
  value?: number;
  prefix?: string;
  suffix?: string;
}

export function NumberTicker({ className, value = 150, prefix = "", suffix = "+" }: NumberTickerProps) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(value, Math.round((step / steps) * value));
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className={cn("font-mono text-4xl sm:text-5xl font-black text-foreground tracking-tight", className)}>
      {prefix}{count}{suffix}
    </span>
  );
}
