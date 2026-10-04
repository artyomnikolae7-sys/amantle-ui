/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Custom styled scroll area
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: string;
}

export function ScrollArea({ className, maxHeight = "240px", children, ...props }: ScrollAreaProps) {
  return (
    <div
      style={{ maxHeight }}
      className={cn(
        "overflow-y-auto rounded-lg border border-border p-4 text-xs text-foreground [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
