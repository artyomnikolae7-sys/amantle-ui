/**
 * @source https://reactbits.dev/animations/click-spark
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ClickSparkProps extends React.HTMLAttributes<HTMLDivElement> {
  sparkColor?: string;
  sparkCount?: number;
  sparkSize?: number;
  duration?: number;
  children?: React.ReactNode;
  className?: string;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export function ClickSpark({
  sparkColor = "hsl(var(--primary))",
  sparkCount = 8,
  sparkSize = 8,
  duration = 400,
  children,
  className,
  ...props
}: ClickSparkProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const sparksRef = React.useRef<Spark[]>([]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = performance.now();
    for (let i = 0; i < sparkCount; i++) {
      sparksRef.current.push({
        x,
        y,
        angle: (i / sparkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4,
        startTime: now,
      });
    }
  };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const updateCanvasSize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = time - spark.startTime;
        const progress = Math.min(elapsed / duration, 1);
        if (progress >= 1) return false;

        const distance = progress * 24;
        const currentX = spark.x + Math.cos(spark.angle) * distance;
        const currentY = spark.y + Math.sin(spark.angle) * distance;
        const size = sparkSize * (1 - progress);

        ctx.save();
        ctx.fillStyle = sparkColor;
        ctx.beginPath();
        ctx.arc(currentX, currentY, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [sparkColor, sparkSize, duration]);

  return (
    <div
      onPointerDown={handlePointerDown}
      className={cn("relative inline-block cursor-pointer select-none", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-20"
      />
      {children || (
        <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary font-medium text-xs">
          Кликни в любой точке для искр
        </div>
      )}
    </div>
  );
}
export default ClickSpark;
