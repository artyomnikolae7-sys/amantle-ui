/**
 * @source https://ui.shadcn.com/charts
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Pure lightweight SVG Area Gradient Chart with mouse-tracking crosshair, cubic bezier spline, and zero external dependencies
 */

"use client";

import * as React from "react";
import { AreaChart, Activity, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AreaDataPoint {
  month: string;
  revenue: number;
}

const defaultData: AreaDataPoint[] = [
  { month: "Янв", revenue: 12400 },
  { month: "Фев", revenue: 16800 },
  { month: "Мар", revenue: 14200 },
  { month: "Апр", revenue: 21500 },
  { month: "Май", revenue: 19800 },
  { month: "Июн", revenue: 27900 },
  { month: "Июл", revenue: 32400 },
  { month: "Авг", revenue: 29800 },
  { month: "Сен", revenue: 36500 },
  { month: "Окт", revenue: 41200 },
  { month: "Ноя", revenue: 38900 },
  { month: "Дек", revenue: 47600 },
];

export interface ChartAreaGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: AreaDataPoint[];
  title?: string;
  description?: string;
}

export function ChartAreaGradient({
  data = defaultData,
  title = "Динамика выручки (MRR)",
  description = "Помесячный рост регулярной выручки за текущий год",
  className,
  ...props
}: ChartAreaGradientProps) {
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  const maxVal = React.useMemo(() => Math.max(...data.map((d) => d.revenue), 10000), [data]);
  const minVal = React.useMemo(() => Math.min(...data.map((d) => d.revenue), 0), [data]);

  // SVG dimensions
  const width = 800;
  const height = 260;
  const paddingX = 40;
  const paddingY = 30;

  const points = React.useMemo(() => {
    return data.map((d, i) => {
      const x = paddingX + (i / (data.length - 1)) * (width - paddingX * 2);
      const y = height - paddingY - ((d.revenue - minVal) / (maxVal - minVal)) * (height - paddingY * 2);
      return { x, y, data: d };
    });
  }, [data, maxVal, minVal]);

  // Construct smooth cubic bezier path
  const pathD = React.useMemo(() => {
    if (points.length === 0) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i === 0 ? 0 : i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  }, [points]);

  const areaD = React.useMemo(() => {
    if (points.length === 0) return "";
    const last = points[points.length - 1];
    const first = points[0];
    return `${pathD} L ${last.x} ${height - paddingY} L ${first.x} ${height - paddingY} Z`;
  }, [pathD, points]);

  const activePoint = hoverIndex !== null ? points[hoverIndex] : points[points.length - 1];

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-sm transition-[color,background-color,border-color,box-shadow,transform]",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <AreaChart className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground tracking-tight">{title}</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>

        {/* Live Active Value Highlight */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-foreground tracking-tight font-mono">
            ${activePoint.data.revenue.toLocaleString()}
          </span>
          <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-500">
            <ArrowUpRight className="h-3.5 w-3.5" />
            +28.4%
          </span>
        </div>
      </div>

      {/* Interactive SVG Chart */}
      <div
        className="relative mt-6 h-64 w-full cursor-crosshair"
        onMouseLeave={() => setHoverIndex(null)}
      >
        <svg
          className="h-full w-full overflow-visible"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.33, 0.66, 1].map((ratio) => {
            const y = height - paddingY - ratio * (height - paddingY * 2);
            return (
              <line
                key={ratio}
                x1={paddingX}
                y1={y}
                x2={width - paddingX}
                y2={y}
                className="stroke-border/50"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
            );
          })}

          {/* Area Fill */}
          <path d={areaD} fill="url(#areaGradient)" className="transition-[color,background-color,border-color,box-shadow,transform] duration-300" />

          {/* Spline Line */}
          <path
            d={pathD}
            fill="none"
            className="stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Interactive Crosshair & Points */}
          {points.map((pt, i) => {
            const isHovered = hoverIndex === i;
            return (
              <g
                key={pt.data.month}
                onMouseEnter={() => setHoverIndex(i)}
                className="group cursor-pointer"
              >
                {/* Transparent catch area for easy hovering */}
                <rect
                  x={pt.x - 20}
                  y={paddingY}
                  width="40"
                  height={height - paddingY * 2}
                  fill="transparent"
                />

                {/* Point dot */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 6 : 3}
                  className={cn(
                    "transition-[color,background-color,border-color,box-shadow,transform] duration-150",
                    isHovered
                      ? "fill-primary stroke-background stroke-2"
                      : "fill-primary/60 group-hover:fill-primary"
                  )}
                />
              </g>
            );
          })}

          {/* Active Crosshair Vertical Line */}
          {activePoint && (
            <line
              x1={activePoint.x}
              y1={paddingY}
              x2={activePoint.x}
              y2={height - paddingY}
              className="stroke-primary/50"
              strokeDasharray="3 3"
              strokeWidth="1.5"
            />
          )}

          {/* X Axis Labels */}
          {points.map((pt, i) => (
            <text
              key={pt.data.month}
              x={pt.x}
              y={height - 8}
              textAnchor="middle"
              className={cn(
                "text-[11px] font-medium transition-colors",
                hoverIndex === i ? "fill-foreground font-bold" : "fill-muted-foreground"
              )}
            >
              {pt.data.month}
            </text>
          ))}
        </svg>

        {/* Live Hover Tooltip */}
        {hoverIndex !== null && (
          <div
            className="pointer-events-none absolute -top-3 rounded-lg border border-border bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-md backdrop-blur-xs font-mono"
            style={{
              left: `${(activePoint.x / width) * 100}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="font-semibold text-primary">{activePoint.data.month}</div>
            <div className="font-bold">${activePoint.data.revenue.toLocaleString()}</div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <span>Пиковая выручка зафиксирована в декабре ($47,600)</span>
        </div>
        <div className="font-mono text-[11px]">12 месяцев агрегации</div>
      </div>
    </div>
  );
}
