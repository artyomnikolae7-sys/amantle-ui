/**
 * @source https://magicui.design/docs/components/terminal
 * @author AMANTLE UI Design Engineering
 * @license MIT
 * @modified Interactive multi-tab Developer Terminal with command copy and syntax styling
 */

"use client";

import * as React from "react";
import { Copy, Check, Terminal as TerminalIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TerminalTab {
  id: string;
  label: string;
  command: string;
  output?: string[];
}

const defaultTabs: TerminalTab[] = [
  {
    id: "pnpm",
    label: "pnpm",
    command: "pnpm dlx shadcn@latest add http://localhost:3000/r/button.json",
    output: [
      "✔ Component found: button",
      "✔ Installing dependencies: @radix-ui/react-slot, lucide-react",
      "✔ Created: components/ui/button.tsx",
      "✨ Done in 0.42s.",
    ],
  },
  {
    id: "npm",
    label: "npm",
    command: "npx shadcn@latest add http://localhost:3000/r/button.json",
    output: [
      "✔ Component found: button",
      "✔ Installing dependencies: @radix-ui/react-slot, lucide-react",
      "✔ Created: components/ui/button.tsx",
      "✨ Done in 1.15s.",
    ],
  },
  {
    id: "bun",
    label: "bun",
    command: "bunx --bun shadcn@latest add http://localhost:3000/r/button.json",
    output: [
      "✔ Component found: button",
      "✔ Resolved dependencies",
      "✔ Created: components/ui/button.tsx",
      "✨ Done in 0.18s.",
    ],
  },
];

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs?: TerminalTab[];
}

export function Terminal({
  tabs = defaultTabs,
  className,
  ...props
}: TerminalProps) {
  const [activeTabId, setActiveTabId] = React.useState(tabs[0]?.id || "pnpm");
  const [copied, setCopied] = React.useState(false);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  const handleCopy = () => {
    if (!activeTab) return;
    navigator.clipboard.writeText(activeTab.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card shadow-xl overflow-hidden font-mono text-xs",
        className
      )}
      {...props}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-4 py-2.5">
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1 rounded-md bg-background/50 border border-border/60 p-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={cn(
                "rounded px-2.5 py-1 text-[11px] font-medium transition-colors tap-active",
                activeTabId === tab.id
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted"
          title="Скопировать команду"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 space-y-3 bg-background text-zinc-100 overflow-x-auto min-h-[140px]">
        {/* Prompt Line */}
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 select-none">$</span>
          <span className="text-zinc-100 select-all font-semibold">
            {activeTab.command}
          </span>
          <span className="inline-block w-2 h-4 bg-primary animate-pulse select-none motion-reduce:animate-none" />
        </div>

        {/* Output lines */}
        {activeTab.output && activeTab.output.length > 0 && (
          <div className="space-y-1 text-muted-foreground text-[11px] border-t border-border/80 pt-2.5">
            {activeTab.output.map((line, idx) => (
              <div
                key={idx}
                className={cn(
                  "leading-relaxed",
                  line.startsWith("✔") && "text-emerald-400",
                  line.startsWith("✨") && "text-violet-400 font-semibold"
                )}
              >
                {line}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
