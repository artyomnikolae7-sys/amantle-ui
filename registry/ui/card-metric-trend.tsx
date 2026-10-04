/**
 * @source https://amantle.dev/components/card-metric-trend
 * @author AMANTLE UI
 * @license MIT
 * @modified KPI metric trend indicator
 */
"use client";

import * as React from "react";
import { TrendingUp, Users } from "lucide-react";

export function CardMetricTrend({
  title = "Активные пользователи",
  value = "48 920",
  trend = "+14.8%",
}: {
  title?: string;
  value?: string;
  trend?: string;
}) {
  return (
    <div className="p-5 rounded-2xl bg-card border border-border shadow-sm max-w-xs w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
        <Users className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="text-2xl font-extrabold text-foreground mb-2">{value}</div>
      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
        <TrendingUp className="w-3.5 h-3.5" />
        <span>{trend} за этот месяц</span>
      </div>
    </div>
  );
}
export default CardMetricTrend;
