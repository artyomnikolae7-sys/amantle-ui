/**
 * @source https://tremor.so/docs/visualizations/spark-chart
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Interactive SaaS KPI card with embedded SVG sparkline, trend pills, and timeframe filtering
 */

"use client";

import * as React from "react";
import { TrendingUp, ArrowUpRight, DollarSign, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatsCardSparklineProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  value?: string;
  delta?: string;
  data?: number[];
}

const defaultSparkline = [32, 45, 38, 52, 48, 65, 59, 74, 68, 85, 92, 110];

export function StatsCardSparkline({
  title = "Чистая выручка (Net ARR)",
  value = "$128,450",
  delta = "+18.2%",
  data = defaultSparkline,
  className,
  ...props
}: StatsCardSparklineProps) {
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);
  const [timeframe, setTimeframe] = React.useState<"7d" | "30d" | "90d">("30d");

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const width = 280;
  const height = 60;
  const paddingY = 8;

  const points = data.map((val, idx) => {
    const x = (idx / (data.length - 1)) * width;
    const y = height - paddingY - ((val - min) / range) * (height - paddingY * 2);
    return { x, y, val };
  });

  const pathD = points.reduce((acc, pt, i) => {
    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, "");

  const areaD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-sm transition-[color,background-color,border-color,box-shadow,transform] hover:shadow-md hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Wallet className="h-4 w-4" />
        </div>
      </div>

      {/* Metric & Delta */}
      <div className="mt-3 flex items-baseline justify-between">
        <h3 className="text-2xl font-bold tracking-tight text-foreground font-mono">
          {value}
        </h3>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-500 font-mono">
          <ArrowUpRight className="h-3 w-3" />
          {delta}
        </span>
      </div>

      {/* Sparkline Canvas */}
      <div
        className="relative mt-4 h-16 w-full cursor-crosshair overflow-hidden"
        onMouseLeave={() => setHoverIndex(null)}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-full w-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Fill Area */}
          <path d={areaD} fill="url(#sparklineGrad)" />

          {/* Stroke Line */}
          <path
            d={pathD}
            fill="none"
            className="stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Hover tracking point */}
          {hoverIndex !== null && (
            <circle
              cx={points[hoverIndex].x}
              cy={points[hoverIndex].y}
              r="4.5"
              className="fill-primary stroke-background stroke-2"
            />
          )}

          {/* Interactive touch targets */}
          {points.map((pt, i) => (
            <rect
              key={i}
              x={pt.x - 10}
              y={0}
              width={20}
              height={height}
              fill="transparent"
              onMouseEnter={() => setHoverIndex(i)}
            />
          ))}
        </svg>

        {/* Live Hover tooltip badge */}
        {hoverIndex !== null && (
          <div
            className="pointer-events-none absolute -top-1 rounded bg-popover px-1.5 py-0.5 text-[10px] font-mono text-popover-foreground shadow border border-border"
            style={{
              left: `${(points[hoverIndex].x / width) * 100}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            ${points[hoverIndex].val}k
          </div>
        )}
      </div>

      {/* Timeframe selector footer */}
      <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
        <span>Динамика за период</span>
        <div className="flex gap-1">
          {(["7d", "30d", "90d"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTimeframe(t)}
              className={cn(
                "rounded px-1.5 py-0.5 uppercase transition-colors tap-active",
                timeframe === t
                  ? "bg-muted font-bold text-foreground"
                  : "hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
