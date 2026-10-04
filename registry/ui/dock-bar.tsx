/**
 * @source https://magicui.design/docs/components/dock
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Home, Compass, Layers, Settings, Bell, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DockBarProps {
  className?: string;
}

export function DockBar({ className }: DockBarProps) {
  const items = [
    { icon: Home, label: "Home" },
    { icon: Compass, label: "Explore" },
    { icon: Layers, label: "Components" },
    { icon: Sparkles, label: "AI Tools" },
    { icon: Bell, label: "Alerts" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className={cn("inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            title={item.label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-[color,background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-2 hover:scale-125 shadow cursor-pointer text-foreground"
          >
            <Icon className="h-5 w-5 transition-transform" />
          </button>
        );
      })}
    </div>
  );
}
