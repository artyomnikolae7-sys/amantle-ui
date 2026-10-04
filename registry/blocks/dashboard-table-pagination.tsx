/**
 * @source https://ui.shadcn.com/docs/components/table
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DashboardTablePaginationProps {
  className?: string;
}

export function DashboardTablePagination({ className }: DashboardTablePaginationProps) {
  const rows = [
    { id: "INV-001", client: "Acme Corp", amount: "$1,250.00", status: "Оплачено" },
    { id: "INV-002", client: "Starlight SaaS", amount: "$840.00", status: "В обработке" },
    { id: "INV-003", client: "Nexus AI", amount: "$3,100.00", status: "Оплачено" },
  ];

  return (
    <div className={cn("w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-xl", className)}>
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h4 className="text-sm font-bold text-foreground">Счета и транзакции</h4>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/30 text-xs">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <input placeholder="Поиск счета..." className="bg-transparent outline-none text-foreground w-28" />
        </div>
      </div>

      <table className="w-full text-left text-xs">
        <thead className="bg-muted/40 text-muted-foreground font-semibold border-b border-border">
          <tr>
            <th className="p-3.5">ID</th>
            <th className="p-3.5">Клиент</th>
            <th className="p-3.5">Сумма</th>
            <th className="p-3.5">Статус</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.id} className="hover:bg-muted/20 text-foreground">
              <td className="p-3.5 font-mono text-muted-foreground">{r.id}</td>
              <td className="p-3.5 font-medium">{r.client}</td>
              <td className="p-3.5 font-bold">{r.amount}</td>
              <td className="p-3.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-[10px]">
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
        <span>Показано 1-3 из 12 записей</span>
        <div className="flex gap-1">
          <button className="h-7 w-7 rounded border border-border flex items-center justify-center hover:bg-muted"><ChevronLeft className="h-3.5 w-3.5" /></button>
          <button className="h-7 w-7 rounded border border-border flex items-center justify-center hover:bg-muted"><ChevronRight className="h-3.5 w-3.5" /></button>
        </div>
      </div>
    </div>
  );
}
