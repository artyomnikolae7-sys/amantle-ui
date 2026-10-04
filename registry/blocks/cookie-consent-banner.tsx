/**
 * @source https://ui.shadcn.com/docs/components
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Cookie, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CookieConsentBannerProps {
  className?: string;
}

export function CookieConsentBanner({ className }: CookieConsentBannerProps) {
  const [closed, setClosed] = React.useState(false);

  if (closed) return null;

  return (
    <div className={cn("fixed bottom-4 right-4 max-w-sm rounded-2xl border border-border bg-card p-5 shadow-2xl z-50 space-y-3", className)}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Cookie className="h-4 w-4" />
          </div>
          <h4 className="text-sm font-bold text-foreground">Мы используем cookies</h4>
        </div>
        <button onClick={() => setClosed(true)} className="text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        Для персонализации тем оформления и аналитики витрины компонентов мы сохраняем cookies.
      </p>

      <div className="flex gap-2 pt-1">
        <button
          onClick={() => setClosed(true)}
          className="flex-1 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90"
        >
          Принять все
        </button>
        <button
          onClick={() => setClosed(true)}
          className="px-3 py-2 rounded-xl border border-border bg-muted/30 text-xs font-semibold text-foreground hover:bg-muted"
        >
          Только нужные
        </button>
      </div>
    </div>
  );
}
