/**
 * @source https://ui.shadcn.com/charts
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Pure lightweight SVG interactive Bar Chart with series toggle, hover tooltips, and zero heavy dependencies
 */

"use client";

import * as React from "react";
import { BarChart3, TrendingUp, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DataPoint {
  date: string;
  desktop: number;
  mobile: number;
}

const defaultData: DataPoint[] = [
  { date: "Пн", desktop: 186, mobile: 80 },
  { date: "Вт", desktop: 305, mobile: 200 },
  { date: "Ср", desktop: 237, mobile: 120 },
  { date: "Чт", desktop: 273, mobile: 190 },
  { date: "Пт", desktop: 309, mobile: 230 },
  { date: "Сб", desktop: 214, mobile: 140 },
  { date: "Вс", desktop: 284, mobile: 210 },
];

export interface ChartBarInteractiveProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: DataPoint[];
  title?: string;
  description?: string;
}

export function ChartBarInteractive({
  data = defaultData,
  title = "Интерактивный Bar Chart",
  description = "Показатели конверсий за последние 7 дней",
  className,
  ...props
}: ChartBarInteractiveProps) {
  const [activeSeries, setActiveSeries] = React.useState<"all" | "desktop" | "mobile">("all");
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const maxValue = React.useMemo(() => {
    return Math.max(
      ...data.map((d) => {
        if (activeSeries === "desktop") return d.desktop;
        if (activeSeries === "mobile") return d.mobile;
        return Math.max(d.desktop, d.mobile);
      }),
      100
    );
  }, [data, activeSeries]);

  const totalDesktop = React.useMemo(
    () => data.reduce((acc, curr) => acc + curr.desktop, 0),
    [data]
  );
  const totalMobile = React.useMemo(
    () => data.reduce((acc, curr) => acc + curr.mobile, 0),
    [data]
  );

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 shadow-sm transition-[color,background-color,border-color,box-shadow,transform]",
        className
      )}
      {...props}
    >
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground tracking-tight">{title}</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>

        {/* Series Switcher Pill Tabs */}
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-1">
          <button
            type="button"
            onClick={() => setActiveSeries("all")}
            className={cn(
              "rounded-md px-3 py-1 text-xs font-medium transition-[color,background-color,border-color,box-shadow,transform] tap-active",
              activeSeries === "all"
                ? "bg-background text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Все
          </button>
          <button
            type="button"
            onClick={() => setActiveSeries("desktop")}
            className={cn(
              "rounded-md px-3 py-1 text-xs font-medium transition-[color,background-color,border-color,box-shadow,transform] tap-active",
              activeSeries === "desktop"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Desktop ({totalDesktop.toLocaleString()})
          </button>
          <button
            type="button"
            onClick={() => setActiveSeries("mobile")}
            className={cn(
              "rounded-md px-3 py-1 text-xs font-medium transition-[color,background-color,border-color,box-shadow,transform] tap-active",
              activeSeries === "mobile"
                ? "bg-violet-500 text-white shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Mobile ({totalMobile.toLocaleString()})
          </button>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="relative mt-6 h-64 w-full">
        <svg
          className="h-full w-full overflow-visible"
          viewBox="0 0 700 240"
          preserveAspectRatio="none"
        >
          {/* Horizontal Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = 200 - ratio * 180;
            return (
              <g key={ratio}>
                <line
                  x1="30"
                  y1={y}
                  x2="690"
                  y2={y}
                  className="stroke-border/50"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <text
                  x="20"
                  y={y + 3}
                  textAnchor="end"
                  className="fill-muted-foreground text-[10px] font-mono"
                >
                  {Math.round(ratio * maxValue)}
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {data.map((item, index) => {
            const barWidth = 24;
            const slotWidth = (660 - 30) / data.length;
            const groupCenterX = 40 + index * slotWidth + slotWidth / 2;

            const isHovered = hoveredIndex === index;

            // Height calculations
            const dHeight = (item.desktop / maxValue) * 180;
            const mHeight = (item.mobile / maxValue) * 180;

            const dY = 200 - dHeight;
            const mY = 200 - mHeight;

            const showDesktop = activeSeries === "all" || activeSeries === "desktop";
            const showMobile = activeSeries === "all" || activeSeries === "mobile";

            return (
              <g
                key={item.date}
                className="cursor-pointer transition-opacity"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Column Highlight */}
                {isHovered && (
                  <rect
                    x={groupCenterX - slotWidth / 2 + 4}
                    y="10"
                    width={slotWidth - 8}
                    height="195"
                    className="fill-muted/30"
                    rx="6"
                  />
                )}

                {/* Desktop Bar */}
                {showDesktop && (
                  <rect
                    x={activeSeries === "all" ? groupCenterX - barWidth - 2 : groupCenterX - barWidth / 2}
                    y={dY}
                    width={barWidth}
                    height={dHeight}
                    rx="4"
                    className={cn(
                      "fill-primary transition-[color,background-color,border-color,box-shadow,transform] duration-300",
                      isHovered && "opacity-90 fill-primary/90"
                    )}
                  />
                )}

                {/* Mobile Bar */}
                {showMobile && (
                  <rect
                    x={activeSeries === "all" ? groupCenterX + 2 : groupCenterX - barWidth / 2}
                    y={mY}
                    width={barWidth}
                    height={mHeight}
                    rx="4"
                    className={cn(
                      "fill-violet-500 transition-[color,background-color,border-color,box-shadow,transform] duration-300",
                      isHovered && "opacity-90 fill-violet-400"
                    )}
                  />
                )}

                {/* X Axis Label */}
                <text
                  x={groupCenterX}
                  y="222"
                  textAnchor="middle"
                  className={cn(
                    "text-xs font-medium transition-colors",
                    isHovered ? "fill-foreground font-bold" : "fill-muted-foreground"
                  )}
                >
                  {item.date}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Live Floating Tooltip */}
        {hoveredIndex !== null && data[hoveredIndex] && (
          <div
            className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 rounded-lg border border-border bg-popover px-3 py-2 text-popover-foreground shadow-lg backdrop-blur-xs transition-transform"
            style={{
              left: `${((hoveredIndex + 0.5) / data.length) * 90 + 5}%`,
            }}
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              <span>{data[hoveredIndex].date}</span>
            </div>
            <div className="mt-1 space-y-0.5 text-[11px] font-mono">
              {(activeSeries === "all" || activeSeries === "desktop") && (
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                    Desktop:
                  </span>
                  <span className="font-bold text-foreground">{data[hoveredIndex].desktop}</span>
                </div>
              )}
              {(activeSeries === "all" || activeSeries === "mobile") && (
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-violet-500 inline-block" />
                    Mobile:
                  </span>
                  <span className="font-bold text-foreground">{data[hoveredIndex].mobile}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Metrics */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-emerald-500" />
          <span>
            Рост на <strong className="text-foreground">+14.2%</strong> по сравнению с прошлой неделей
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-xs bg-primary" />
            <span>Desktop</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-xs bg-violet-500" />
            <span>Mobile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
