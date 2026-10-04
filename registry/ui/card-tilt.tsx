/**
 * @source https://21st.dev/community/card-tilt
 * @author 21st.dev
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardTiltProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTilt?: number;
  perspective?: number;
}

export function CardTilt({
  className,
  children,
  maxTilt = 12,
  perspective = 1000,
  ...props
}: CardTiltProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * maxTilt;
    const rotateY = (x / (rect.width / 2)) * maxTilt;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className="inline-block"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className={cn(
          "rounded-xl border border-border bg-card p-6 text-card-foreground shadow-md transition-shadow hover:shadow-xl motion-reduce:transform-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
