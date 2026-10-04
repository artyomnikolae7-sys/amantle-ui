/**
 * @source https://magicui.design/docs/components/interactive-grid-pattern
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Interactive SVG grid pattern that reacts to cursor position with illuminated squares
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = React.useState<number | null>(null);

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={cn(
        "absolute inset-0 h-full w-full stroke-border/40 pointer-events-auto [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={-1}
          y={-1}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray="0"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      <svg x={-1} y={-1} className="overflow-visible">
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * width;
          const y = Math.floor(index / horizontal) * height;
          const isHovered = hoveredSquare === index;

          return (
            <rect
              key={index}
              x={x + 1}
              y={y + 1}
              width={width - 1}
              height={height - 1}
              className={cn(
                "cursor-pointer fill-transparent stroke-transparent transition-[fill,opacity] duration-300",
                isHovered && "fill-primary/20 stroke-primary/40 opacity-100",
                squaresClassName
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
      </svg>
    </svg>
  );
}
