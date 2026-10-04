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
  MousePointerClick,
  LayoutTemplate,
  Type,
  Bell,
  Table,
  Zap,
  Grid,
  CreditCard,
  Users,
  Footprints,
  FolderTree,
} from "lucide-react";
import { Input } from "@/registry/ui/input";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";
import { getComponentFamily, ComponentFamily } from "@/lib/component-families";
import { ECOSYSTEMS_CONFIG, getComponentEcosystem } from "@/lib/ecosystems";

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

const FAMILY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  MousePointerClick,
  FormInput: MousePointerClick, // fallback safe
  LayoutTemplate,
  Compass,
  Type,
  Bell,
  Table,
  Sparkles,
  Zap,
  Grid,
  CreditCard,
  Users,
  Footprints,
  BookOpen,
  Layers,
  FolderTree,
};

export function SidebarCatalog({ items }: SidebarCatalogProps) {
  const pathname = usePathname();
  const [search, setSearch] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState<"all" | "ui" | "blocks" | "templates">("all");
  const [selectedEcosystem, setSelectedEcosystem] = React.useState<string>("all");

  const activeItemRef = React.useRef<HTMLAnchorElement>(null);

  // Identify current category and item from URL
  const { currentCategory, currentItemName } = React.useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    return {
      currentCategory: parts[0] || "ui",
      currentItemName: parts[1] || "",
    };
  }, [pathname]);

  // Family of the currently active item
  const activeFamilyId = React.useMemo(() => {
    if (!currentItemName) return "";
    return getComponentFamily(currentItemName, currentCategory).id;
  }, [currentItemName, currentCategory]);

  // Collapsed categories state (top level)
  const [collapsedCategories, setCollapsedCategories] = React.useState<Record<string, boolean>>(() => ({
    ui: currentCategory !== "ui",
    blocks: currentCategory !== "blocks",
    templates: currentCategory !== "templates",
  }));

  // Collapsed families state (second level)
  const [collapsedFamilies, setCollapsedFamilies] = React.useState<Record<string, boolean>>({});

  // Ensure current category and family are opened when route changes
  React.useEffect(() => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [currentCategory]: false,
    }));
    if (activeFamilyId) {
      setCollapsedFamilies((prev) => ({
        ...prev,
        [activeFamilyId]: false,
      }));
    }
  }, [currentCategory, activeFamilyId]);

  // Auto-scroll active component into view
  React.useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [pathname]);

  // Group items by category and then by family
  const groupedData = React.useMemo(() => {
    const topLevel: Record<string, Record<string, { family: ComponentFamily; items: CatalogItemMeta[] }>> = {
      ui: {},
      blocks: {},
      templates: {},
    };

    for (const item of items) {
      const cat = item.category || "ui";
      const family = getComponentFamily(item.name, cat);

      if (!topLevel[cat]) topLevel[cat] = {};
      if (!topLevel[cat][family.id]) {
        topLevel[cat][family.id] = { family, items: [] };
      }
      topLevel[cat][family.id].items.push(item);
    }

    // Sort items inside each family alphabetically
    for (const cat of Object.keys(topLevel)) {
      for (const famId of Object.keys(topLevel[cat])) {
        topLevel[cat][famId].items.sort((a, b) =>
          (a.title || a.name).localeCompare(b.title || b.name)
        );
      }
    }

    return topLevel;
  }, [items]);

  const toggleCategory = (cat: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const toggleFamily = (famId: string) => {
    setCollapsedFamilies((prev) => ({
      ...prev,
      [famId]: !prev[famId],
    }));
  };

  const collapseAll = () => {
    setCollapsedCategories({ ui: true, blocks: true, templates: true });
    const allFamIds: Record<string, boolean> = {};
    for (const cat of Object.keys(groupedData)) {
      for (const famId of Object.keys(groupedData[cat])) {
        allFamIds[famId] = true;
      }
    }
    setCollapsedFamilies(allFamIds);
  };

  const expandAll = () => {
    setCollapsedCategories({ ui: false, blocks: false, templates: false });
    const allFamIds: Record<string, boolean> = {};
    for (const cat of Object.keys(groupedData)) {
      for (const famId of Object.keys(groupedData[cat])) {
        allFamIds[famId] = false;
      }
    }
    setCollapsedFamilies(allFamIds);
  };

  // Filter items by search query and active tab
  const filteredData = React.useMemo(() => {
    const result: Record<string, Record<string, { family: ComponentFamily; items: CatalogItemMeta[] }>> = {};
    const q = search.trim().toLowerCase();

    for (const [cat, famMap] of Object.entries(groupedData)) {
      if (selectedTab !== "all" && selectedTab !== cat) continue;

      const filteredFamMap: Record<string, { family: ComponentFamily; items: CatalogItemMeta[] }> = {};

      for (const [famId, famObj] of Object.entries(famMap)) {
        let matchingItems = famObj.items;
        if (selectedEcosystem !== "all") {
          const eco = ECOSYSTEMS_CONFIG[selectedEcosystem];
          if (eco) {
            matchingItems = matchingItems.filter((i) => eco.components.includes(i.name));
          }
        }
        if (q) {
          matchingItems = matchingItems.filter(
            (i) =>
              i.name.toLowerCase().includes(q) ||
              (i.title && i.title.toLowerCase().includes(q)) ||
              (i.tags && i.tags.some((t) => t.toLowerCase().includes(q))) ||
              famObj.family.name.toLowerCase().includes(q)
          );
        }

        if (matchingItems.length > 0) {
          filteredFamMap[famId] = {
            family: famObj.family,
            items: matchingItems,
          };
        }
      }

      if (Object.keys(filteredFamMap).length > 0) {
        result[cat] = filteredFamMap;
      }
    }

    return result;
  }, [groupedData, search, selectedTab, selectedEcosystem]);

  // Calculate counts for tabs
  const tabCounts = React.useMemo(() => {
    let ui = 0;
    let blocks = 0;
    let templates = 0;
    for (const item of items) {
      if (item.category === "blocks") blocks++;
      else if (item.category === "templates") templates++;
      else ui++;
    }
    return { all: items.length, ui, blocks, templates };
  }, [items]);

  const tabs: Array<{ id: "all" | "ui" | "blocks" | "templates"; label: string; count: number }> = [
    { id: "all", label: "Все", count: tabCounts.all },
    { id: "ui", label: "UI", count: tabCounts.ui },
    { id: "blocks", label: "Блоки", count: tabCounts.blocks },
    { id: "templates", label: "Шаблоны", count: tabCounts.templates },
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
            placeholder="Поиск по 259 компонентам..."
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

        {/* Ecosystem Filter Chips */}
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none text-[10px]">
          <button
            onClick={() => setSelectedEcosystem("all")}
            className={`shrink-0 rounded-full px-2 py-0.5 font-medium transition-colors cursor-pointer ${
              selectedEcosystem === "all"
                ? "bg-primary text-primary-foreground font-semibold"
                : "bg-muted/50 text-muted-foreground hover:bg-muted"
            }`}
          >
            Все
          </button>
          {Object.values(ECOSYSTEMS_CONFIG).map((eco) => (
            <button
              key={eco.id}
              onClick={() => setSelectedEcosystem(eco.id)}
              className={`shrink-0 flex items-center gap-1 rounded-full px-2 py-0.5 font-medium transition-colors cursor-pointer ${
                selectedEcosystem === eco.id
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              <span>{eco.name}</span>
              <span className="opacity-70 font-mono text-[9px]">({eco.components.length})</span>
            </button>
          ))}
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

      {/* Categories & Hierarchical Families Scrollable List */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-1.5 py-2.5 space-y-3 custom-scrollbar text-xs">
        {Object.entries(filteredData).length === 0 ? (
          <div className="text-center py-8 text-muted-foreground text-xs">
            Ничего не найдено
          </div>
        ) : (
          Object.entries(filteredData).map(([category, famMap]) => {
            const config = CATEGORY_CONFIG[category] || {
              label: category,
              icon: Layers,
            };
            const CatIcon = config.icon;
            const isCatCollapsed = !search && selectedTab === "all" && !!collapsedCategories[category];

            const totalCategoryItems = Object.values(famMap).reduce(
              (acc, f) => acc + f.items.length,
              0
            );

            return (
              <div key={category} className="space-y-1.5">
                {/* Level 1: Category Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between py-1.5 px-2 rounded-lg font-bold text-foreground bg-muted/20 hover:bg-muted/50 transition-colors text-left select-none group cursor-pointer border border-border/40"
                >
                  <div className="flex items-center gap-2">
                    <CatIcon className="h-3.5 w-3.5 text-primary" />
                    <span className="tracking-tight">{config.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-muted-foreground bg-muted/60 px-1 rounded">
                      {totalCategoryItems}
                    </span>
                    {isCatCollapsed ? (
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Level 2: Component Families Inside Category */}
                {!isCatCollapsed && (
                  <div className="pl-1.5 space-y-1.5">
                    {Object.entries(famMap).map(([famId, famObj]) => {
                      const isFamCollapsed =
                        !search &&
                        famId !== activeFamilyId &&
                        collapsedFamilies[famId] === true;

                      const FamIcon =
                        FAMILY_ICONS[famObj.family.iconName] || FolderTree;

                      return (
                        <div
                          key={famId}
                          className="rounded-lg border border-border/30 bg-card/40 overflow-hidden"
                        >
                          {/* Family Header */}
                          <button
                            type="button"
                            onClick={() => toggleFamily(famId)}
                            className="w-full flex items-center justify-between py-1 px-2 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors text-left select-none cursor-pointer"
                          >
                            <div className="flex items-center gap-1.5 truncate pr-1">
                              <FamIcon className="h-3 w-3 text-primary/70 shrink-0" />
                              <span className="truncate">{famObj.family.name}</span>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <span className="text-[9px] font-mono text-muted-foreground/80">
                                {famObj.items.length}
                              </span>
                              {isFamCollapsed ? (
                                <ChevronRight className="h-2.5 w-2.5 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-2.5 w-2.5 text-muted-foreground" />
                              )}
                            </div>
                          </button>

                          {/* Level 3: Components in Family */}
                          {!isFamCollapsed && (
                            <div className="p-1 space-y-0.5 border-t border-border/20 bg-background/30">
                              {famObj.items.map((item) => {
                                const itemUrl = `/${item.category || "ui"}/${item.name}`;
                                const isActive = pathname === itemUrl;

                                return (
                                  <Link
                                    key={item.name}
                                    href={itemUrl}
                                    ref={isActive ? activeItemRef : undefined}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center justify-between py-1 px-2 rounded-md transition-all text-[11px] ${
                                      isActive
                                        ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    }`}
                                  >
                                    <span className="truncate">
                                      {item.title || item.name}
                                    </span>
                                    {(() => {
                                      const eco = getComponentEcosystem(item.name);
                                      if (eco) {
                                        return (
                                          <span
                                            className={`text-[8px] px-1 py-0.2 rounded font-mono border ${
                                              isActive
                                                ? "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                                                : eco.badgeColor
                                            }`}
                                          >
                                            {eco.name}
                                          </span>
                                        );
                                      }
                                      return null;
                                    })()}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
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
        <div className="flex items-center gap-1">
          <button
            onClick={expandAll}
            title="Развернуть все категории и группы"
            className="hover:text-foreground transition-colors p-1 rounded hover:bg-muted cursor-pointer"
          >
            <ChevronsUpDown className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={collapseAll}
            title="Свернуть все"
            className="hover:text-foreground transition-colors p-1 rounded hover:bg-muted cursor-pointer"
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
          className="rounded-full shadow-lg gap-2 h-10 px-4 bg-primary text-primary-foreground cursor-pointer"
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
