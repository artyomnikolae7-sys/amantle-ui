/**
 * @source https://amantle.dev/registry/blocks/search-command-palette
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Search, FileCode, Layers, Palette, Terminal } from "lucide-react";
import { Input } from "@/registry/ui/input";
import { Badge } from "@/registry/ui/badge";

export function SearchCommandPalette() {
  const [query, setQuery] = React.useState("");

  const items = [
    { name: "Button", category: "UI Примитив", icon: FileCode },
    { name: "Hero Gradient Glow", category: "Блок", icon: Layers },
    { name: "Violet Theme", category: "Палитра", icon: Palette },
    { name: "CLI Generator", category: "Инструмент", icon: Terminal },
    { name: "SaaS Landing Page", category: "Шаблон", icon: Layers },
  ];

  const filtered = items.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-lg mx-auto rounded-xl border border-border bg-card p-2 shadow-2xl">
      <div className="flex items-center gap-2 border-b border-border px-3 pb-2 pt-1">
        <Search className="h-4 w-4 text-muted-foreground shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по реестру (компоненты, блоки, токены)..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        <Badge variant="secondary" className="text-[10px] font-mono">
          ESC
        </Badge>
      </div>
      <div className="p-1 space-y-1 mt-1 max-h-60 overflow-y-auto">
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg p-2 text-sm hover:bg-muted cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-foreground">{item.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.category}</span>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="p-4 text-center text-xs text-muted-foreground">
            Ничего не найдено по запросу &ldquo;{query}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchCommandPalette;
