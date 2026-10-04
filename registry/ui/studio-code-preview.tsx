"use client";

import React, { useState } from "react";

/**
 * @component StudioCodePreview
 * @source https://shadcnstudio.dev
 * @author Shadcn Studio
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface StudioCodePreviewProps {
  componentName?: string;
  codeSnippet?: string;
  className?: string;
}

export function StudioCodePreview({
  componentName = "button-gradient-flow",
  codeSnippet = "import { Button } from '@/components/ui/button';",
  className = "",
}: StudioCodePreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const copyCli = () => {
    navigator.clipboard?.writeText(`npx amantle add ${componentName}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-lg ${className}`}>
      <div className="flex items-center justify-between border-b border-border/40 bg-muted/30 px-4 py-2.5">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("preview")}
            className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors ${tab === "preview" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`}
          >
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={`rounded-md px-3 py-1 text-xs font-semibold transition-colors ${tab === "code" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`}
          >
            Code (TSX)
          </button>
        </div>
        <button
          onClick={copyCli}
          className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-background px-2.5 py-1 text-[11px] font-mono text-foreground hover:bg-muted active:scale-95"
        >
          <span>{copied ? "✅ Copied!" : "📋 Copy CLI"}</span>
        </button>
      </div>

      <div className="p-6">
        {tab === "preview" ? (
          <div className="flex min-h-[140px] items-center justify-center rounded-xl border border-border/40 bg-muted/10 p-6">
            <button className="rounded-xl bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105 active:scale-95">
              Active Studio Element
            </button>
          </div>
        ) : (
          <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 font-mono text-xs text-zinc-100">
            <code>{`// Terminal Install:
npx amantle add ${componentName}

// Usage in Next.js 15:
${codeSnippet}`}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

export default StudioCodePreview;
