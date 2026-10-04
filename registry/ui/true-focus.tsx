/**
 * @source https://reactbits.dev/text-animations/true-focus
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TrueFocusProps extends React.HTMLAttributes<HTMLDivElement> {
  words?: string[];
  intervalMs?: number;
  className?: string;
  glow?: boolean;
}

export function TrueFocus({
  words = ["Проектируй", "Анимируй", "Синтезируй", "Масштабируй"],
  intervalMs = 2200,
  className,
  glow = true,
  ...props
}: TrueFocusProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const wordRefs = React.useRef<(HTMLSpanElement | null)[]>([]);
  const [boxStyle, setBoxStyle] = React.useState({ left: 0, top: 0, width: 0, height: 0 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  React.useEffect(() => {
    const activeEl = wordRefs.current[activeIndex];
    const container = containerRef.current;
    if (activeEl && container) {
      const parentRect = container.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setBoxStyle({
        left: elRect.left - parentRect.left - 6,
        top: elRect.top - parentRect.top - 4,
        width: elRect.width + 12,
        height: elRect.height + 8,
      });
    }
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-flex items-center gap-3 py-3 px-4 select-none font-bold text-lg md:text-xl", className)}
      {...props}
    >
      {/* Animated Viewfinder Rect */}
      <div
        className={cn(
          "absolute pointer-events-none rounded-lg border-2 border-primary transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          glow && "shadow-[0_0_20px_rgba(var(--primary),0.5)]"
        )}
        style={{
          transform: `translate(${boxStyle.left}px, ${boxStyle.top}px)`,
          width: `${boxStyle.width}px`,
          height: `${boxStyle.height}px`,
          opacity: boxStyle.width > 0 ? 1 : 0,
        }}
      >
        {/* Corner Brackets */}
        <span className="absolute -top-1.5 -left-1.5 w-2 h-2 border-t-2 border-l-2 border-primary" />
        <span className="absolute -top-1.5 -right-1.5 w-2 h-2 border-t-2 border-r-2 border-primary" />
        <span className="absolute -bottom-1.5 -left-1.5 w-2 h-2 border-b-2 border-l-2 border-primary" />
        <span className="absolute -bottom-1.5 -right-1.5 w-2 h-2 border-b-2 border-r-2 border-primary" />
      </div>

      {words.map((word, idx) => {
        const isCurrent = idx === activeIndex;
        return (
          <span
            key={idx}
            ref={(el) => {
              wordRefs.current[idx] = el;
            }}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "cursor-pointer transition-all duration-300 z-10 px-1",
              isCurrent
                ? "text-primary scale-105"
                : "text-muted-foreground/40 filter blur-[1.5px] hover:blur-none hover:text-muted-foreground"
            )}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
export default TrueFocus;
