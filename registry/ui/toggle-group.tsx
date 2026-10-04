/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Connected toggle button group
 */

"use client";

import * as React from "react";
import { Bold, Italic, Underline } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToggleGroupProps {
  className?: string;
}

export function ToggleGroup({ className }: ToggleGroupProps) {
  const [active, setActive] = React.useState<Record<string, boolean>>({ bold: true });

  const toggle = (key: string) => {
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={cn("inline-flex rounded-lg border border-border bg-card p-1 shadow-2xs", className)}>
      <button
        type="button"
        onClick={() => toggle("bold")}
        className={cn(
          "h-8 w-8 rounded flex items-center justify-center text-xs transition-colors",
          active.bold ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Bold className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => toggle("italic")}
        className={cn(
          "h-8 w-8 rounded flex items-center justify-center text-xs transition-colors",
          active.italic ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Italic className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => toggle("underline")}
        className={cn(
          "h-8 w-8 rounded flex items-center justify-center text-xs transition-colors",
          active.underline ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Underline className="h-4 w-4" />
      </button>
    </div>
  );
}
