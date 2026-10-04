/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Search input with hotkey badge
 */

"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputSearchAnimatedProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export function InputSearchAnimated({
  className,
  value,
  onChange,
  onClear,
  ...props
}: InputSearchAnimatedProps) {
  const [query, setQuery] = React.useState("");
  const currentQuery = value !== undefined ? String(value) : query;

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        type="search"
        value={currentQuery}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange?.(e);
        }}
        placeholder="Поиск по документации..."
        className={cn(
          "h-10 w-full rounded-lg border border-input bg-background pl-9 pr-14 text-sm text-foreground shadow-xs transition-[color,background-color,border-color,box-shadow,transform] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
        {currentQuery ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              onClear?.();
            }}
            className="p-1 rounded text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            ⌘K
          </kbd>
        )}
      </div>
    </div>
  );
}
