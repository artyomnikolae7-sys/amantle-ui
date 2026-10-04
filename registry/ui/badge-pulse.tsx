/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Status badge with ping animation
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgePulseProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: "online" | "busy" | "offline" | "warning";
  label?: string;
}

export function BadgePulse({ status = "online", label, className, ...props }: BadgePulseProps) {
  const colors = {
    online: "bg-emerald-500",
    busy: "bg-rose-500",
    offline: "bg-muted-foreground",
    warning: "bg-amber-500",
  };

  const defaultLabels = {
    online: "В сети",
    busy: "Занят",
    offline: "Офлайн",
    warning: "Внимание",
  };

  const dotColor = colors[status] || colors.online;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground shadow-2xs",
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 motion-reduce:animate-none", dotColor)} />
        <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColor)} />
      </span>
      <span>{label || defaultLabels[status]}</span>
    </div>
  );
}
