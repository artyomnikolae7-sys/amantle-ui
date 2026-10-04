/**
 * @source https://tremor.so/docs/visualizations/progress-circle
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Pure lightweight SVG Radial Gauge Chart with gradient progress arc and central score metrics
 */

"use client";

import * as React from "react";
import { Gauge, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GaugeChartProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number; // 0..100
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}

export function GaugeChart({
  value = 84,
  size = 200,
  strokeWidth = 14,
  label = "Health Score",
  sublabel = "Отличная производительность",
  className,
  ...props
}: GaugeChartProps) {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  // Semi-circle gauge (180 degrees) or 240 degrees arc
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Use a 240-degree arc for a modern dashboard look
  const arcLength = circumference * (240 / 360);
  const strokeDashoffset = arcLength - (arcLength * clampedValue) / 100;

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 shadow-sm",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="rotate-[150deg] overflow-visible"
        >
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Background track arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-muted/40"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
          />

          {/* Active progress arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:duration-0"
          />
        </svg>

        {/* Central Metric Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-extrabold tracking-tight text-foreground font-mono">
            {clampedValue}%
          </span>
          <span className="text-xs font-semibold text-muted-foreground mt-0.5">
            {label}
          </span>
        </div>
      </div>

      {/* Sublabel & Indicator */}
      {sublabel && (
        <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
          <span>{sublabel}</span>
        </div>
      )}
    </div>
  );
}
