/**
 * @source https://ui.shadcn.com/docs/components/data-table
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Rich interactive data table with column sorting, row selection, search, status filtering, and pagination
 */

"use client";

import * as React from "react";
import {
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  AlertCircle,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Badge } from "@/registry/ui/badge";

export interface Transaction {
  id: string;
  user: string;
  email: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  date: string;
}

const mockTransactions: Transaction[] = [
  { id: "TX-1001", user: "Александр Иванов", email: "alex@example.com", amount: 25000, status: "completed", date: "2026-10-01" },
  { id: "TX-1002", user: "Елена Смирнова", email: "elena@example.com", amount: 14200, status: "pending", date: "2026-10-02" },
  { id: "TX-1003", user: "Дмитрий Кузнецов", email: "dmitry@example.com", amount: 8900, status: "completed", date: "2026-10-02" },
  { id: "TX-1004", user: "Ольга Попова", email: "olga@example.com", amount: 31000, status: "completed", date: "2026-10-03" },
  { id: "TX-1005", user: "Максим Васильев", email: "maxim@example.com", amount: 5600, status: "failed", date: "2026-10-03" },
  { id: "TX-1006", user: "Анна Соколова", email: "anna@example.com", amount: 42000, status: "completed", date: "2026-10-04" },
  { id: "TX-1007", user: "Сергей Михайлов", email: "sergey@example.com", amount: 19500, status: "pending", date: "2026-10-04" },
  { id: "TX-1008", user: "Мария Новикова", email: "maria@example.com", amount: 11300, status: "completed", date: "2026-10-04" },
];

export interface DataTableAdvancedProps extends React.HTMLAttributes<HTMLDivElement> {
  initialData?: Transaction[];
}

export function DataTableAdvanced({
  initialData = mockTransactions,
  className,
  ...props
}: DataTableAdvancedProps) {
  const [data] = React.useState<Transaction[]>(initialData);
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [sortField, setSortField] = React.useState<keyof Transaction>("date");
  const [sortDir, setSortDir] = React.useState<"asc" | "desc">("desc");
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;

  const handleSort = (field: keyof Transaction) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const filteredData = React.useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.user.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [data, search, statusFilter]);

  const sortedData = React.useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      }
      return sortDir === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [filteredData, sortField, sortDir]);

  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const toggleSelectAll = () => {
    if (selectedIds.size === paginatedData.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(paginatedData.map((d) => d.id)));
    }
  };

  const toggleSelectRow = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-500 gap-1 text-[11px]">
            <CheckCircle2 className="h-3 w-3" />
            Выполнен
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-500 gap-1 text-[11px]">
            <Clock className="h-3 w-3" />
            В обработке
          </Badge>
        );
      case "failed":
        return (
          <Badge variant="outline" className="border-rose-500/30 bg-rose-500/10 text-rose-500 gap-1 text-[11px]">
            <AlertCircle className="h-3 w-3" />
            Отклонён
          </Badge>
        );
    }
  };

  return (
    <div className={cn("space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm", className)} {...props}>
      {/* Top Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по клиенту или ID..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-9 h-9 text-xs"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto rounded-lg border border-border bg-muted/40 p-1">
          {["all", "completed", "pending", "failed"].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => {
                setStatusFilter(st);
                setCurrentPage(1);
              }}
              className={cn(
                "rounded-md px-3 py-1 text-xs font-medium capitalize transition-[color,background-color,border-color,box-shadow,transform] tap-active",
                statusFilter === st
                  ? "bg-background text-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {st === "all" ? "Все" : st === "completed" ? "Успешные" : st === "pending" ? "В ожидании" : "Ошибки"}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Row Action Bar */}
      {selectedIds.size > 0 && (
        <div className="flex items-center justify-between rounded-lg bg-primary/10 border border-primary/20 px-4 py-2 text-xs text-primary">
          <span>Выбрано строк: {selectedIds.size} из {paginatedData.length}</span>
          <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" onClick={() => setSelectedIds(new Set())}>
            Снять выбор
          </Button>
        </div>
      )}

      {/* Table Container */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-border bg-muted/50 text-muted-foreground font-medium">
            <tr>
              <th className="p-3 w-10 text-center">
                <input
                  type="checkbox"
                  checked={selectedIds.size === paginatedData.length && paginatedData.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-border accent-primary cursor-pointer"
                />
              </th>
              <th className="p-3 cursor-pointer select-none hover:text-foreground" onClick={() => handleSort("id")}>
                <div className="flex items-center gap-1">
                  ID Транзакции
                  {sortField === "id" ? (
                    sortDir === "asc" ? <ArrowUp className="h-3 w-3 text-primary" /> : <ArrowDown className="h-3 w-3 text-primary" />
                  ) : (
                    <ArrowUpDown className="h-3 w-3 opacity-40" />
                  )}
                </div>
              </th>
              <th className="p-3 cursor-pointer select-none hover:text-foreground" onClick={() => handleSort("user")}>
                <div className="flex items-center gap-1">
                  Пользователь
                  {sortField === "user" ? (
                    sortDir === "asc" ? <ArrowUp className="h-3 w-3 text-primary" /> : <ArrowDown className="h-3 w-3 text-primary" />
                  ) : (
                    <ArrowUpDown className="h-3 w-3 opacity-40" />
                  )}
                </div>
              </th>
              <th className="p-3 cursor-pointer select-none hover:text-foreground" onClick={() => handleSort("amount")}>
                <div className="flex items-center gap-1">
                  Сумма
                  {sortField === "amount" ? (
                    sortDir === "asc" ? <ArrowUp className="h-3 w-3 text-primary" /> : <ArrowDown className="h-3 w-3 text-primary" />
                  ) : (
                    <ArrowUpDown className="h-3 w-3 opacity-40" />
                  )}
                </div>
              </th>
              <th className="p-3">Статус</th>
              <th className="p-3 cursor-pointer select-none hover:text-foreground" onClick={() => handleSort("date")}>
                <div className="flex items-center gap-1">
                  Дата
                  {sortField === "date" ? (
                    sortDir === "asc" ? <ArrowUp className="h-3 w-3 text-primary" /> : <ArrowDown className="h-3 w-3 text-primary" />
                  ) : (
                    <ArrowUpDown className="h-3 w-3 opacity-40" />
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-muted-foreground">
                  Записей не найдено. Попробуйте сбросить фильтры.
                </td>
              </tr>
            ) : (
              paginatedData.map((row) => {
                const isSelected = selectedIds.has(row.id);
                return (
                  <tr
                    key={row.id}
                    className={cn(
                      "transition-colors hover:bg-muted/40",
                      isSelected && "bg-primary/5"
                    )}
                  >
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelectRow(row.id)}
                        className="rounded border-border accent-primary cursor-pointer"
                      />
                    </td>
                    <td className="p-3 font-mono font-medium text-foreground">{row.id}</td>
                    <td className="p-3">
                      <div className="font-medium text-foreground">{row.user}</div>
                      <div className="text-[11px] text-muted-foreground">{row.email}</div>
                    </td>
                    <td className="p-3 font-mono font-semibold text-foreground">
                      {row.amount.toLocaleString()} ₽
                    </td>
                    <td className="p-3">{getStatusBadge(row.status)}</td>
                    <td className="p-3 font-mono text-muted-foreground">{row.date}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
        <div>
          Показано {(currentPage - 1) * pageSize + 1}–
          {Math.min(currentPage * pageSize, sortedData.length)} из {sortedData.length}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="h-8 px-2 gap-1 text-xs"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Назад
          </Button>
          <span className="font-mono px-2">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="h-8 px-2 gap-1 text-xs"
          >
            Вперёд
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
