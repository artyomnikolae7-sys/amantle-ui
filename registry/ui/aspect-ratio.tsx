/**
 * @source https://ui.shadcn.com/docs/components/aspect-ratio
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number; // e.g. 16/9 = 1.777
  children?: React.ReactNode;
}

export function AspectRatio({ className, ratio = 16 / 9, children, style, ...props }: AspectRatioProps) {
  return (
    <div
      style={{ position: "relative", width: "100%", paddingBottom: `${(1 / ratio) * 100}%`, ...style }}
      className={cn("overflow-hidden rounded-xl bg-muted/40", className)}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}
