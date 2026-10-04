/**
 * @source https://ui.shadcn.com/docs/components/drawer
 * @author Emil Kowalski / shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DrawerBottomProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function DrawerBottom({
  className,
  isOpen = true,
  onClose,
  title = "Быстрые действия",
  description = "Выберите необходимую операцию или подтвердите выбор",
  children,
}: DrawerBottomProps) {
  return (
    <div className={cn("relative w-full max-w-md mx-auto rounded-t-2xl border-t border-x border-border bg-card p-6 shadow-2xl", className)}>
      <div className="mx-auto w-12 h-1.5 rounded-full bg-muted-foreground/30 mb-5" />
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {children || (
        <div className="space-y-3 py-2">
          <div className="rounded-lg border border-border bg-muted/40 p-3 text-sm flex items-center justify-between">
            <span>Синхронизация данных</span>
            <Check className="h-4 w-4 text-primary" />
          </div>
          <button className="w-full h-10 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
            Подтвердить
          </button>
        </div>
      )}
    </div>
  );
}
