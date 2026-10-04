/**
 * @source https://reactbits.dev/animations/star-border
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StarBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  color?: string;
  speed?: string;
  className?: string;
  innerClassName?: string;
}

export function StarBorder({
  children = "Интерактивная кнопка Star Border",
  color = "hsl(var(--primary))",
  speed = "5s",
  className,
  innerClassName,
  ...props
}: StarBorderProps) {
  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden rounded-xl p-[1px] transition-transform duration-150 active:scale-[0.98] select-none cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Top Orbiting Star Beam */}
      <div
        className="absolute -top-[50%] -left-[100%] w-[300%] h-[100%] rounded-full pointer-events-none opacity-80 blur-[2px]"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
          animation: `star-orbit-top ${speed} linear infinite alternate`,
        }}
      />

      {/* Bottom Orbiting Star Beam */}
      <div
        className="absolute -bottom-[50%] -right-[100%] w-[300%] h-[100%] rounded-full pointer-events-none opacity-80 blur-[2px]"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
          animation: `star-orbit-bottom ${speed} linear infinite alternate`,
        }}
      />

      {/* Inner Surface */}
      <div
        className={cn(
          "relative z-10 px-5 py-2.5 rounded-[11px] bg-card text-card-foreground border border-border/80 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 backdrop-blur-md shadow-xs",
          innerClassName
        )}
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes star-orbit-top {
          0% {
            transform: translate(0%, 0%);
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(60%, 0%);
            opacity: 0.2;
          }
        }
        @keyframes star-orbit-bottom {
          0% {
            transform: translate(0%, 0%);
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-60%, 0%);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
export default StarBorder;
