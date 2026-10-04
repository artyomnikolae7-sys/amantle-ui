/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { GitCommit, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AiCodeDiffProps {
  className?: string;
  filename?: string;
}

export function AiCodeDiff({ className, filename = "registry/ui/button.tsx" }: AiCodeDiffProps) {
  const diffLines = [
    { type: "normal", line: "import * as React from 'react';" },
    { type: "removed", line: "- const variant = 'default';" },
    { type: "added", line: "+ const variant = props.variant || 'default';" },
    { type: "added", line: "+ const isMagnetic = props.magnetic ?? false;" },
    { type: "normal", line: "return <button className={cn(styles)}>{children}</button>;" },
  ];

  return (
    <div className={cn("w-full max-w-xl mx-auto rounded-xl border border-border bg-card overflow-hidden shadow-lg font-mono text-xs", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted/40 border-b border-border">
        <div className="flex items-center gap-2 text-foreground font-semibold">
          <GitCommit className="h-4 w-4 text-primary" />
          <span>{filename}</span>
        </div>
        <span className="text-[11px] text-muted-foreground">+2 / -1</span>
      </div>

      <div className="p-2 space-y-0.5">
        {diffLines.map((l, i) => (
          <div
            key={i}
            className={cn(
              "px-3 py-1 rounded",
              l.type === "added" && "bg-emerald-500/10 text-emerald-400 font-medium",
              l.type === "removed" && "bg-destructive/10 text-destructive line-through opacity-80",
              l.type === "normal" && "text-muted-foreground"
            )}
          >
            {l.line}
          </div>
        ))}
      </div>
    </div>
  );
}
