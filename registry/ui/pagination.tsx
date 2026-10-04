/**
 * @source https://ui.shadcn.com/docs/components/pagination
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  className?: string;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  className,
  currentPage = 2,
  totalPages = 5,
  onPageChange,
}: PaginationProps) {
  const [page, setPage] = React.useState(currentPage);

  const handleSelect = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    onPageChange?.(p);
  };

  return (
    <nav className={cn("flex items-center gap-1.5", className)}>
      <button
        onClick={() => handleSelect(page - 1)}
        disabled={page === 1}
        className="flex items-center gap-1 h-9 px-3 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4" /> Назад
      </button>

      {Array.from({ length: totalPages }).map((_, idx) => {
        const p = idx + 1;
        const isActive = p === page;
        return (
          <button
            key={p}
            onClick={() => handleSelect(p)}
            className={cn(
              "h-9 w-9 rounded-lg text-xs font-semibold transition-colors",
              isActive ? "bg-primary text-primary-foreground shadow" : "border border-border bg-card text-foreground hover:bg-muted"
            )}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => handleSelect(page + 1)}
        disabled={page === totalPages}
        className="flex items-center gap-1 h-9 px-3 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Вперёд <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
