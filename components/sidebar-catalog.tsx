"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Layers,
  Sparkles,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Compass,
  ChevronsUpDown,
  ChevronsDownUp,
} from "lucide-react";
import { Input } from "@/registry/ui/input";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";

export interface CatalogItemMeta {
  name: string;
  type: string;
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
}

interface SidebarCatalogProps {
  items: CatalogItemMeta[];
}

const CATEGORY_CONFIG: Record<
  string,
  { label: string; icon: React.ComponentType<{ className?: string }> }
> = {
  ui: { label: "UI Примитивы", icon: Layers },
  blocks: { label: "Блоки", icon: Sparkles },
  templates: { label: "Шаблоны", icon: BookOpen },
};

export function SidebarCatalog({ items }: SidebarCatalogProps) {
  const pathname = usePathname();
  const [search, setSearch] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState<"all" | "ui" | "blocks" | "templates">("all");

  const activeItemRef = React.useRef<HTMLAnchorElement>(null);

  // Identify current category from URL (e.g. /ui/button -> "ui")
  const currentCategory = React.useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return parts[0] || "ui";
  }, [pathname]);

  // Collapsed categories state: by default, ONLY the current category is open
  const [collapsedCategories, setCollapsedCategories] = React.useState<Record<string, boolean>>(() => {
    return {
      ui: currentCategory !== "ui",
      blocks: currentCategory !== "blocks",
      templates: currentCategory !== "templates",
    };
  });

  // Whenever pathname changes, ensure current category is opened
  React.useEffect(() => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [currentCategory]: false,
    }));
  }, [currentCategory]);

  // Auto-scroll active component into view
  React.useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [pathname]);

  // Group items by category
  const grouped = React.useMemo(() => {
    const map: Record<string, CatalogItemMeta[]> = {
      ui: [],
      blocks: [],
      templates: [],
    };

    for (const item of items) {
      const cat = item.category || "ui";
      if (!map[cat]) map[cat] = [];
      map[cat].push(item);
    }

    // Sort alphabetically by title or name
    for (const key of Object.keys(map)) {
      map[key].sort((a, b) => (a.title || a.name).localeCompare(b.title || b.name));
    }

    return map;
  }, [items]);

  const toggleCategory = (cat: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const collapseAll = () => {
    setCollapsedCategories({ ui: true, blocks: true, templates: true });
  };

  const expandAll = () => {
    setCollapsedCategories({ ui: false, blocks: false, templates: false });
  };

  // Filtered grouped items based on search and selected category tab
  const filteredGrouped = React.useMemo(() => {
    const result: Record<string, CatalogItemMeta[]> = {};
    const q = search.trim().toLowerCase();

    for (const [cat, list] of Object.entries(grouped)) {
      // Filter by selected tab
      if (selectedTab !== "all" && selectedTab !== cat) continue;

      let filteredList = list;
      if (q) {
        filteredList = list.filter(
          (i) =>
            i.name.toLowerCase().includes(q) ||
            (i.title && i.title.toLowerCase().includes(q)) ||
            (i.tags && i.tags.some((t) => t.toLowerCase().includes(q)))
        );
      }

      if (filteredList.length > 0) {
        result[cat] = filteredList;
      }
    }

    return result;
  }, [grouped, search, selectedTab]);

  const tabs: Array<{ id: "all" | "ui" | "blocks" | "templates"; label: string; count: number }> = [
    { id: "all", label: "Все", count: items.length },
    { id: "ui", label: "UI", count: grouped.ui.length },
    { id: "blocks", label: "Блоки", count: grouped.blocks.length },
    { id: "templates", label: "Шаблоны", count: grouped.templates.length },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full min-h-0">
      {/* Header and Quick Stats */}
      <div className="shrink-0 space-y-2.5 pb-2.5 border-b border-border/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">
              Каталог системы
            </span>
          </div>
          <Badge variant="secondary" className="text-[10px] font-mono px-1.5 py-0 h-4">
            {items.length} items
          </Badge>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Фильтр компонентов..."
            className="h-8 pl-8 pr-14 text-xs bg-muted/30 border-border focus-visible:ring-primary/30"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Сброс
            </button>
          )}
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-muted/40 border border-border/50 text-[11px]">
          {tabs.map((tab) => {
            const isActive = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedTab(tab.id);
                  if (tab.id !== "all") {
                    setCollapsedCategories((prev) => ({ ...prev, [tab.id]: false }));
                  }
                }}
                className={`flex-1 py-1 rounded-md font-medium transition-all text-center cursor-pointer ${
                  isActive
                    ? "bg-card text-foreground font-bold shadow-xs border border-border/40"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>{" "}
                <span className="text-[9px] opacity-70 font-mono">({tab.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Categories & Items Scrollable List */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-1.5 py-2.5 space-y-3 custom-scrollbar text-xs">
        {Object.entries(filteredGrouped).length === 0 ? (
          <div className="text-center py-8 text-muted-foreground text-xs">
            Ничего не найдено
          </div>
        ) : (
          Object.entries(filteredGrouped).map(([category, list]) => {
            const config = CATEGORY_CONFIG[category] || {
              label: category,
              icon: Layers,
            };
            const Icon = config.icon;
            // Always expand when searching or when specifically filtered
            const isCollapsed = !search && selectedTab === "all" && !!collapsedCategories[category];

            return (
              <div key={category} className="space-y-1">
                {/* Category Group Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between py-1.5 px-2 rounded-lg font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors text-left select-none group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                    <span>{config.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-muted-foreground/70">
                      {list.length}
                    </span>
                    {isCollapsed ? (
                      <ChevronRight className="h-3 w-3 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-3 w-3 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Sub-items */}
                {!isCollapsed && (
                  <div className="pl-3.5 space-y-0.5 border-l border-border/50 ml-3">
                    {list.map((item) => {
                      const itemUrl = `/${item.category || "ui"}/${item.name}`;
                      const isActive = pathname === itemUrl;

                      return (
                        <Link
                          key={item.name}
                          href={itemUrl}
                          ref={isActive ? activeItemRef : undefined}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg transition-all text-xs ${
                            isActive
                              ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <span className="truncate">{item.title || item.name}</span>
                          {item.name === "button" && (
                            <span className={`text-[9px] px-1 rounded uppercase font-mono ${isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                              Updated
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Footer Info & Quick Actions */}
      <div className="shrink-0 pt-2 border-t border-border/60 text-[11px] text-muted-foreground flex items-center justify-between">
        <Link href="/" className="hover:text-primary transition-colors font-medium">
          ← На главную
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            title="Развернуть все категории"
            className="hover:text-foreground transition-colors p-1 rounded hover:bg-muted"
          >
            <ChevronsUpDown className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={collapseAll}
            title="Свернуть все категории"
            className="hover:text-foreground transition-colors p-1 rounded hover:bg-muted"
          >
            <ChevronsDownUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <Button
          size="sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-full shadow-lg gap-2 h-10 px-4 bg-primary text-primary-foreground"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          <span>Компоненты ({items.length})</span>
        </Button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar Slider */}
      <aside
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border p-4 shadow-2xl transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop Sticky Sidebar with Guaranteed Scroll */}
      <aside className="hidden md:flex flex-col w-72 shrink-0 self-start sticky top-20 h-[calc(100vh-6rem)] rounded-xl border border-border bg-card/60 backdrop-blur-md p-3.5 shadow-xs overflow-hidden">
        {sidebarContent}
      </aside>
    </>
  );
}
