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
  FormInput: MousePointerClick,
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

export type VirtualSidebarRow =
  | {
      type: "category";
      id: string;
      category: string;
      label: string;
      icon: React.ComponentType<{ className?: string }>;
      count: number;
      isCollapsed: boolean;
      height: number;
    }
  | {
      type: "family";
      id: string;
      category: string;
      famId: string;
      family: ComponentFamily;
      count: number;
      isCollapsed: boolean;
      height: number;
    }
  | {
      type: "item";
      id: string;
      category: string;
      item: CatalogItemMeta;
      isActive: boolean;
      height: number;
    };

function findStartIndex(offsets: Float64Array, targetScrollTop: number): number {
  let low = 0;
  let high = offsets.length - 2;
  let ans = 0;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (offsets[mid + 1] > targetScrollTop) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function findEndIndex(offsets: Float64Array, targetBottom: number): number {
  let low = 0;
  let high = offsets.length - 2;
  let ans = offsets.length - 2;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (offsets[mid] >= targetBottom) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

interface VirtualizedCatalogListProps {
  visibleRows: VirtualSidebarRow[];
  rowOffsets: Float64Array;
  totalHeight: number;
  activeItemName: string;
  onToggleCategory: (cat: string) => void;
  onToggleFamily: (famId: string) => void;
  onItemClick: () => void;
}

function VirtualizedCatalogList({
  visibleRows,
  rowOffsets,
  totalHeight,
  activeItemName,
  onToggleCategory,
  onToggleFamily,
  onItemClick,
}: VirtualizedCatalogListProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = React.useState(0);
  const [viewportHeight, setViewportHeight] = React.useState(600);

  // Measure container height
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setViewportHeight(el.clientHeight || 600);

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.height > 0) {
          setViewportHeight(entry.contentRect.height);
        }
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Handle scroll with requestAnimationFrame for 60fps smoothness
  const rafId = React.useRef<number | null>(null);
  const handleScroll = React.useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const newTop = e.currentTarget.scrollTop;
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }
    rafId.current = requestAnimationFrame(() => {
      setScrollTop(newTop);
      rafId.current = null;
    });
  }, []);

  React.useEffect(() => {
    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Bounds check when totalHeight shrinks (e.g., search/tab filter)
  React.useEffect(() => {
    if (containerRef.current && containerRef.current.scrollTop > totalHeight) {
      containerRef.current.scrollTop = 0;
      setScrollTop(0);
    }
  }, [totalHeight]);

  // Smoothly center the active item into view on page load or navigation
  const prevActiveName = React.useRef(activeItemName);
  React.useEffect(() => {
    if (!activeItemName) return;
    const isNewActive = prevActiveName.current !== activeItemName;
    prevActiveName.current = activeItemName;

    if (containerRef.current && visibleRows.length > 0) {
      const idx = visibleRows.findIndex(
        (r) => r.type === "item" && r.item.name === activeItemName
      );
      if (idx !== -1 && rowOffsets.length > idx) {
        const itemTop = rowOffsets[idx];
        const vHeight = containerRef.current.clientHeight || 600;
        const currentScroll = containerRef.current.scrollTop;
        if (
          isNewActive ||
          itemTop < currentScroll ||
          itemTop > currentScroll + vHeight - 40
        ) {
          containerRef.current.scrollTo({
            top: Math.max(0, itemTop - vHeight / 2 + 14),
            behavior: "smooth",
          });
        }
      }
    }
  }, [activeItemName, visibleRows, rowOffsets]);

  if (visibleRows.length === 0) {
    return (
      <div className="flex-1 min-h-0 flex items-center justify-center text-center py-8 text-muted-foreground text-xs">
        Ничего не найдено
      </div>
    );
  }

  const OVERSCAN = 12;
  const startIndex = Math.max(0, findStartIndex(rowOffsets, scrollTop) - OVERSCAN);
  const endIndex = Math.min(
    visibleRows.length,
    findEndIndex(rowOffsets, scrollTop + viewportHeight) + OVERSCAN
  );

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-1.5 py-2.5 custom-scrollbar text-xs relative"
    >
      <div style={{ height: totalHeight, width: "100%", position: "relative" }}>
        {visibleRows.slice(startIndex, endIndex).map((row, sliceIdx) => {
          const globalIdx = startIndex + sliceIdx;
          const top = rowOffsets[globalIdx];

          if (row.type === "category") {
            const CatIcon = row.icon;
            return (
              <div
                key={row.id}
                style={{
                  position: "absolute",
                  top,
                  left: 0,
                  right: 0,
                  height: row.height,
                }}
                className="pr-1 flex items-center"
              >
                <button
                  type="button"
                  onClick={() => onToggleCategory(row.category)}
                  className="w-full h-[34px] flex items-center justify-between py-1 px-2 rounded-lg font-bold text-foreground bg-muted/20 hover:bg-muted/50 transition-colors text-left select-none group cursor-pointer border border-border/40"
                >
                  <div className="flex items-center gap-2">
                    <CatIcon className="h-3.5 w-3.5 text-primary" />
                    <span className="tracking-tight text-xs">{row.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-muted-foreground bg-muted/60 px-1 rounded">
                      {row.count}
                    </span>
                    {row.isCollapsed ? (
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </div>
                </button>
              </div>
            );
          }

          if (row.type === "family") {
            const FamIcon = FAMILY_ICONS[row.family.iconName] || FolderTree;
            return (
              <div
                key={row.id}
                style={{
                  position: "absolute",
                  top,
                  left: 0,
                  right: 0,
                  height: row.height,
                }}
                className="pl-1.5 pr-1 flex items-center"
              >
                <button
                  type="button"
                  onClick={() => onToggleFamily(row.famId)}
                  className="w-full h-[28px] flex items-center justify-between py-0.5 px-2 text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors text-left select-none cursor-pointer rounded-md border border-border/30 bg-card/40"
                >
                  <div className="flex items-center gap-1.5 truncate pr-1">
                    <FamIcon className="h-3 w-3 text-primary/70 shrink-0" />
                    <span className="truncate">{row.family.name}</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[9px] font-mono text-muted-foreground/80">
                      {row.count}
                    </span>
                    {row.isCollapsed ? (
                      <ChevronRight className="h-2.5 w-2.5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-2.5 w-2.5 text-muted-foreground" />
                    )}
                  </div>
                </button>
              </div>
            );
          }

          // row.type === "item"
          const item = row.item;
          const itemUrl = `/${row.category}/${item.name}`;
          const eco = getComponentEcosystem(item.name);

          return (
            <div
              key={row.id}
              style={{
                position: "absolute",
                top,
                left: 0,
                right: 0,
                height: row.height,
              }}
              className="pl-3.5 pr-1 flex items-center"
            >
              <Link
                href={itemUrl}
                onClick={onItemClick}
                className={`w-full h-[26px] flex items-center justify-between px-2 rounded-md transition-all text-[11px] ${
                  row.isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span className="truncate">{item.title || item.name}</span>
                {eco && (
                  <span
                    className={`text-[8px] px-1 py-0.2 rounded font-mono border shrink-0 ml-1.5 ${
                      row.isActive
                        ? "bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                        : eco.badgeColor
                    }`}
                  >
                    {eco.name}
                  </span>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function SidebarCatalog({ items }: SidebarCatalogProps) {
  const pathname = usePathname();
  const [search, setSearch] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState<"all" | "ui" | "blocks" | "templates">("all");
  const [selectedEcosystem, setSelectedEcosystem] = React.useState<string>("all");

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

  const toggleCategory = React.useCallback((cat: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  }, []);

  const toggleFamily = React.useCallback((famId: string) => {
    setCollapsedFamilies((prev) => ({
      ...prev,
      [famId]: !prev[famId],
    }));
  }, []);

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

  // Flatten the visible tree into an array of virtual rows
  const visibleRows = React.useMemo<VirtualSidebarRow[]>(() => {
    const rows: VirtualSidebarRow[] = [];
    const entries = Object.entries(filteredData);
    if (entries.length === 0) return rows;

    for (const [category, famMap] of entries) {
      const config = CATEGORY_CONFIG[category] || {
        label: category,
        icon: Layers,
      };
      const isCatCollapsed = !search && selectedTab === "all" && !!collapsedCategories[category];
      const totalCategoryItems = Object.values(famMap).reduce(
        (acc, f) => acc + f.items.length,
        0
      );

      // Level 1: Category
      rows.push({
        type: "category",
        id: `cat:${category}`,
        category,
        label: config.label,
        icon: config.icon,
        count: totalCategoryItems,
        isCollapsed: isCatCollapsed,
        height: 38,
      });

      if (isCatCollapsed) continue;

      // Level 2: Families
      for (const [famId, famObj] of Object.entries(famMap)) {
        const isFamCollapsed =
          !search &&
          famId !== activeFamilyId &&
          collapsedFamilies[famId] === true;

        rows.push({
          type: "family",
          id: `fam:${category}:${famId}`,
          category,
          famId,
          family: famObj.family,
          count: famObj.items.length,
          isCollapsed: isFamCollapsed,
          height: 32,
        });

        if (isFamCollapsed) continue;

        // Level 3: Component items
        for (const item of famObj.items) {
          const itemUrl = `/${item.category || "ui"}/${item.name}`;
          const isActive = pathname === itemUrl;

          rows.push({
            type: "item",
            id: `item:${category}:${item.name}`,
            category: item.category || "ui",
            item,
            isActive,
            height: 28,
          });
        }
      }
    }

    return rows;
  }, [
    filteredData,
    search,
    selectedTab,
    collapsedCategories,
    collapsedFamilies,
    activeFamilyId,
    pathname,
  ]);

  // Compute exact row top offsets and total list height
  const rowOffsets = React.useMemo(() => {
    const offsets = new Float64Array(visibleRows.length + 1);
    let acc = 0;
    for (let i = 0; i < visibleRows.length; i++) {
      offsets[i] = acc;
      acc += visibleRows[i].height;
    }
    offsets[visibleRows.length] = acc;
    return offsets;
  }, [visibleRows]);

  const totalHeight = rowOffsets.length > 0 ? rowOffsets[rowOffsets.length - 1] : 0;

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

  const renderSidebarContent = (isMobile: boolean = false) => (
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
            placeholder={`Поиск по ${items.length} компонентам...`}
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

      {/* 60FPS Virtualized Catalog List */}
      <VirtualizedCatalogList
        visibleRows={visibleRows}
        rowOffsets={rowOffsets}
        totalHeight={totalHeight}
        activeItemName={currentItemName}
        onToggleCategory={toggleCategory}
        onToggleFamily={toggleFamily}
        onItemClick={() => {
          if (isMobile) setMobileOpen(false);
        }}
      />

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
        {mobileOpen && renderSidebarContent(true)}
      </aside>

      {/* Desktop Sticky Sidebar with 60FPS Virtualization */}
      <aside className="hidden md:flex flex-col w-72 shrink-0 self-start sticky top-20 h-[calc(100vh-6rem)] rounded-xl border border-border bg-card/60 backdrop-blur-md p-3.5 shadow-xs overflow-hidden">
        {renderSidebarContent(false)}
      </aside>
    </>
  );
}
