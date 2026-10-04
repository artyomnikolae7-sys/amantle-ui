/**
 * @source https://ui.shadcn.com/docs/components/context-menu
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Copy, Scissors, Trash, Share2, Sparkles, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ContextMenuProps {
  className?: string;
  triggerText?: string;
}

export function ContextMenu({ className, triggerText = "Правый клик в этой области" }: ContextMenuProps) {
  const [visible, setVisible] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 40, y: 40 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setVisible(true);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={() => setVisible(false)}
      className={cn(
        "relative flex h-52 w-full max-w-md items-center justify-center rounded-xl border border-dashed border-border bg-card/60 p-6 text-center select-none cursor-context-menu",
        className
      )}
    >
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">{triggerText}</p>
        <p className="text-xs text-muted-foreground">Или нажмите в любом месте для вызова меню</p>
      </div>

      {visible && (
        <div
          style={{ top: pos.y, left: pos.x }}
          className="absolute z-50 w-48 rounded-lg border border-border bg-popover p-1 shadow-xl animate-in motion-reduce:animate-none fade-in-80 text-left"
        >
          <button className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-xs text-foreground hover:bg-accent transition-colors">
            <Eye className="h-3.5 w-3.5 text-muted-foreground" /> Просмотр
          </button>
          <button className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-xs text-foreground hover:bg-accent transition-colors">
            <Copy className="h-3.5 w-3.5 text-muted-foreground" /> Копировать
          </button>
          <button className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-xs text-foreground hover:bg-accent transition-colors">
            <Share2 className="h-3.5 w-3.5 text-muted-foreground" /> Поделиться
          </button>
          <div className="my-1 h-px bg-border" />
          <button className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-xs text-destructive hover:bg-destructive/10 transition-colors">
            <Trash className="h-3.5 w-3.5" /> Удалить
          </button>
        </div>
      )}
    </div>
  );
}
