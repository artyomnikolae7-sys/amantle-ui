/**
 * @source https://amantle.dev/registry/blocks/dashboard-stats-kpi
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/ui/card";

export function DashboardStatsKpi() {
  const kpis = [
    {
      title: "Выручка за месяц",
      value: "$45,231.89",
      change: "+20.1% к прошлому месяцу",
      icon: DollarSign,
    },
    {
      title: "Активные пользователи",
      value: "+2,350",
      change: "+180.1% за квартал",
      icon: Users,
    },
    {
      title: "Успешные транзакции",
      value: "+12,234",
      change: "+19% с прошлой недели",
      icon: TrendingUp,
    },
    {
      title: "Аптайм сервиса",
      value: "99.98%",
      change: "+0.1% к стандарту",
      icon: Activity,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tracking-tight text-foreground">{kpi.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{kpi.change}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default DashboardStatsKpi;
