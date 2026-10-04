/**
 * @source https://amantle.dev/registry/blocks/metrics-graph-card
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/ui/card";
import { Badge } from "@/registry/ui/badge";

export function MetricsGraphCard() {
  const bars = [40, 65, 30, 85, 95, 75, 60, 90, 100, 80, 70, 85];

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-base font-semibold">Использование реестра</CardTitle>
          <CardDescription>Количество загрузок за последние 12 часов</CardDescription>
        </div>
        <Badge variant="secondary" className="gap-1 text-emerald-600 bg-emerald-500/10">
          <ArrowUpRight className="h-3 w-3" />
          <span>+24.5%</span>
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-mono">14,289 req</div>
        <div className="mt-4 flex items-end gap-2 h-24 pt-4 border-b border-border">
          {bars.map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-primary/20 hover:bg-primary transition-[color,background-color,border-color,box-shadow,transform] rounded-t-xs"
              style={{ height: `${height}%` }}
              title={`Интервал ${i + 1}: ${height}%`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground mt-2 font-mono">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default MetricsGraphCard;
