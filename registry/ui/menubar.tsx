/**
 * @source https://ui.shadcn.com/docs/components/menubar
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MenubarProps {
  className?: string;
}

export function Menubar({ className }: MenubarProps) {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const menus = [
    {
      name: "File",
      items: ["New Window (⌘N)", "Open File (⌘O)", "Save (⌘S)", "Exit"],
    },
    {
      name: "Edit",
      items: ["Undo (⌘Z)", "Redo (⇧⌘Z)", "Cut (⌘X)", "Copy (⌘C)", "Paste (⌘V)"],
    },
    {
      name: "View",
      items: ["Zoom In (⌘+)", "Zoom Out (⌘-)", "Toggle Sidebar (⌘B)", "Full Screen"],
    },
    {
      name: "Help",
      items: ["Documentation", "Release Notes", "About AMANTLE UI"],
    },
  ];

  return (
    <div className={cn("inline-flex rounded-lg border border-border bg-card p-1 text-sm font-medium shadow-sm", className)}>
      {menus.map((m) => (
        <div key={m.name} className="relative">
          <button
            onClick={() => setActiveMenu(activeMenu === m.name ? null : m.name)}
            className={cn(
              "px-3 py-1.5 rounded-md hover:bg-muted text-foreground transition-colors cursor-pointer",
              activeMenu === m.name && "bg-muted"
            )}
          >
            {m.name}
          </button>
          {activeMenu === m.name && (
            <div className="absolute top-full left-0 mt-1 w-48 rounded-lg border border-border bg-popover p-1 shadow-xl z-50 animate-in motion-reduce:animate-none fade-in-50">
              {m.items.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveMenu(null)}
                  className="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-xs text-foreground hover:bg-accent hover:text-accent-foreground text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
