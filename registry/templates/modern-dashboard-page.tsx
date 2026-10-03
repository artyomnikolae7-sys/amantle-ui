/**
 * @source https://amantle.dev/registry/templates/modern-dashboard-page
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { LayoutDashboard, Users, CreditCard, Settings, Bell, Search } from "lucide-react";
import { DashboardStatsKpi } from "@/registry/blocks/dashboard-stats-kpi";
import { DashboardRecentTransactions } from "@/registry/blocks/dashboard-recent-transactions";
import { MetricsGraphCard } from "@/registry/blocks/metrics-graph-card";
import { UserProfileHeader } from "@/registry/blocks/user-profile-header";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";

export function ModernDashboardPage() {
  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card p-4 space-y-6">
        <div className="flex items-center gap-2 font-bold tracking-tight text-foreground px-2">
          <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-mono text-xs font-black">
            A
          </div>
          <span>AMANTLE Console</span>
        </div>
        <nav className="space-y-1">
          <Button variant="secondary" className="w-full justify-start gap-2">
            <LayoutDashboard className="h-4 w-4" /> Главная
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <Users className="h-4 w-4" /> Пользователи
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <CreditCard className="h-4 w-4" /> Платежи
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <Settings className="h-4 w-4" /> Настройки
          </Button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-14 border-b border-border bg-background px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 w-72">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Быстрый поиск..." className="h-8 border-none bg-muted/40" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <main className="p-6 space-y-6 max-w-7xl mx-auto w-full">
          <UserProfileHeader />
          <DashboardStatsKpi />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DashboardRecentTransactions />
            </div>
            <div>
              <MetricsGraphCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ModernDashboardPage;
