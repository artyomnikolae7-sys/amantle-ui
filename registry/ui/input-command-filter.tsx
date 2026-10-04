/**
 * @source https://amantle.dev/components/input-command-filter
 * @author AMANTLE UI
 * @license MIT
 * @modified Filter tag pills embedded inside input container
 */
"use client";

import * as React from "react";
import { Search, X } from "lucide-react";

export function InputCommandFilter() {
  const [filter, setFilter] = React.useState("Все");
  const [query, setQuery] = React.useState("");

  const tags = ["Все", "Компоненты", "Хуки", "Блоки"];

  return (
    <div className="max-w-md w-full rounded-xl border border-border bg-card p-1.5 shadow-sm space-y-2">
      <div className="flex items-center gap-2 px-2">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по тегам..."
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {query && (
          <button onClick={() => setQuery("")}>
            <X className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>
      <div className="flex items-center gap-1.5 pt-1 border-t border-border/50">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
              filter === t
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
export default InputCommandFilter;
