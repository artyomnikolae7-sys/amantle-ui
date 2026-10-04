/**
 * @source https://magicui.design/docs/components/shine-border
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ShineBorderProps {
  className?: string;
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string[];
  children?: React.ReactNode;
}

export function ShineBorder({
  className,
  borderRadius = 16,
  borderWidth = 1,
  duration = 8,
  color = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  children,
}: ShineBorderProps) {
  return (
    <div
      style={{
        ["--border-radius" as any]: `${borderRadius}px`,
      }}
      className={cn("relative rounded-[--border-radius] p-[1px] overflow-hidden", className)}
    >
      <div
        style={{
          background: `conic-gradient(from 0deg, ${color.join(", ")}, ${color[0]})`,
          animation: `spin ${duration}s linear infinite`,
        }}
        className="absolute -inset-[100%] pointer-events-none"
      />
      <div className="relative rounded-[calc(var(--border-radius)-1px)] bg-card p-6">
        {children || (
          <div className="space-y-2">
            <h4 className="text-base font-bold text-foreground">Shine Border Card</h4>
            <p className="text-xs text-muted-foreground">Вращающийся конический градиент на границе элемента.</p>
          </div>
        )}
      </div>
    </div>
  );
}
