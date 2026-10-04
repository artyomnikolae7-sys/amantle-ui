/**
 * @source https://ui.shadcn.com/docs/components/resizable
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ResizablePanelProps {
  className?: string;
  defaultSplit?: number; // 20 to 80
}

export function ResizablePanel({ className, defaultSplit = 35 }: ResizablePanelProps) {
  const [split, setSplit] = React.useState(defaultSplit);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPercent = ((e.clientX - rect.left) / rect.width) * 100;
    if (newPercent >= 20 && newPercent <= 80) {
      setSplit(Math.round(newPercent));
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      className={cn("flex w-full max-w-2xl h-64 rounded-xl border border-border bg-card overflow-hidden select-none", className)}
    >
      <div style={{ width: `${split}%` }} className="p-4 bg-muted/20 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-muted-foreground uppercase">Панель A</span>
          <p className="text-sm font-medium text-foreground mt-2">Дерево файлов проекта</p>
        </div>
        <span className="text-xs font-mono text-muted-foreground">{split}%</span>
      </div>

      <div
        onMouseDown={handleMouseDown}
        className="w-2 bg-border hover:bg-primary/50 cursor-col-resize flex items-center justify-center transition-colors group"
      >
        <GripVertical className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
      </div>

      <div style={{ width: `${100 - split}%` }} className="p-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-muted-foreground uppercase">Панель B</span>
          <p className="text-sm font-medium text-foreground mt-2">Редактор кода и превью</p>
        </div>
        <span className="text-xs font-mono text-muted-foreground">{100 - split}%</span>
      </div>
    </div>
  );
}
