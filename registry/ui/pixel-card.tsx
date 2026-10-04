/**
 * @source https://reactbits.dev/components/pixel-card
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  pixelColor?: string;
  className?: string;
}

export function PixelCard({
  children,
  pixelColor = "hsl(var(--primary))",
  className,
  ...props
}: PixelCardProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const pixelSize = 6;
    const gap = 2;
    let alpha = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isHovered && alpha < 0.8) {
        alpha += 0.05;
      } else if (!isHovered && alpha > 0) {
        alpha -= 0.04;
      }

      if (alpha > 0) {
        const cols = Math.floor(canvas.width / (pixelSize + gap));
        const rows = Math.floor(canvas.height / (pixelSize + gap));

        ctx.fillStyle = pixelColor;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            // Random scatter probability
            if (Math.random() > 0.85) {
              ctx.globalAlpha = Math.random() * alpha;
              ctx.fillRect(
                c * (pixelSize + gap),
                r * (pixelSize + gap),
                pixelSize,
                pixelSize
              );
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    const updateSize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    updateSize();

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, pixelColor]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg",
        className
      )}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />
      <div className="relative z-10">{children || (
        <div className="space-y-2">
          <h4 className="text-base font-bold text-foreground">Pixel Matrix Card</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Наведите курсор для генерации интерактивной пиксельной матрицы с переливающимся шлейфом.
          </p>
        </div>
      )}</div>
    </div>
  );
}
export default PixelCard;
