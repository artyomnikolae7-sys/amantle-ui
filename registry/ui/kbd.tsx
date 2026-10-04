/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Semantic tokenized kbd component
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded border border-border bg-muted/60 px-2 py-0.5 font-mono text-xs font-semibold text-muted-foreground shadow-2xs select-none",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
