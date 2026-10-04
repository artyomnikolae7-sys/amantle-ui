/**
 * @source https://reactbits.dev/text-animations/rotating-text
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface RotatingTextProps extends React.HTMLAttributes<HTMLDivElement> {
  texts?: string[];
  rotationInterval?: number;
  className?: string;
  staggerDuration?: number;
}

export function RotatingText({
  texts = ["Интеллект", "Эстетика", "Скорость", "Доступность", "Магия"],
  rotationInterval = 2400,
  className,
  staggerDuration = 0.025,
  ...props
}: RotatingTextProps) {
  const [index, setIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setIsTransitioning(false);
      }, 300);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[index];

  return (
    <div
      className={cn("inline-flex items-center overflow-hidden py-1 font-extrabold text-primary", className)}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <span
        className="inline-block transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isTransitioning
            ? "translateY(-100%) rotateX(60deg) scale(0.9)"
            : "translateY(0) rotateX(0) scale(1)",
          opacity: isTransitioning ? 0 : 1,
        }}
      >
        {currentText}
      </span>
    </div>
  );
}
export default RotatingText;
