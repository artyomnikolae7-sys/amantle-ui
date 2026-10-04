/**
 * @source https://ui.shadcn.com/docs/components/hover-card
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HoverCardProps {
  className?: string;
  triggerText?: string;
  title?: string;
  handle?: string;
  bio?: string;
}

export function HoverCard({
  className,
  triggerText = "@amantledesign",
  title = "AMANTLE Design System",
  handle = "@amantledesign",
  bio = "Интеллектуальный реестр UI компонентов уровня shadcn с живым Playground и AI Composer.",
}: HoverCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative inline-block" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <span className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 cursor-pointer">
        {triggerText}
      </span>

      {isOpen && (
        <div className={cn("absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-border bg-popover p-4 shadow-2xl z-50 animate-in motion-reduce:animate-none fade-in-50 zoom-in-95", className)}>
          <div className="flex gap-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
              AM
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground leading-none">{title}</h4>
              <p className="text-xs text-muted-foreground">{handle}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{bio}</p>
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground mt-3 pt-2 border-t border-border">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Global</span>
            <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> Присоединился в 2026</span>
          </div>
        </div>
      )}
    </div>
  );
}
