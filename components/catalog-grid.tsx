"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Terminal,
  ArrowRight,
  Layers,
  Layout,
  FileCode,
  Check,
  Eye,
  Sparkles,
  ExternalLink,
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  ChevronDown,
} from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/registry/ui/input";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";
import { Switch } from "@/registry/ui/switch";
import { Checkbox } from "@/registry/ui/checkbox";
import { Slider } from "@/registry/ui/slider";
import { Progress } from "@/registry/ui/progress";
import { Avatar, AvatarFallback } from "@/registry/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/registry/ui/dialog";
import { componentMap } from "@/lib/components-map";
import { ECOSYSTEMS_CONFIG, getComponentEcosystem } from "@/lib/ecosystems";

export interface CatalogItem {
  name: string;
  type: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

const ITEMS_PER_BATCH = 24;

export function CatalogGrid({ items }: { items: CatalogItem[] }) {
  const [search, setSearch] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [activeEcosystem, setActiveEcosystem] = React.useState<string>("all");
  const [visibleCount, setVisibleCount] = React.useState<number>(ITEMS_PER_BATCH);
  const [copiedSlug, setCopiedSlug] = React.useState<string | null>(null);

  // Quick View Dialog State
  const [quickViewItem, setQuickViewItem] = React.useState<CatalogItem | null>(null);
  const [quickViewport, setQuickViewport] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [copiedQuickCli, setCopiedQuickCli] = React.useState(false);

  // Filter items by search, category, and ecosystem
  const filtered = React.useMemo(() => {
    let result = items;

    if (activeCategory !== "all") {
      result = result.filter((i) => i.category === activeCategory);
    }

    if (activeEcosystem !== "all") {
      const eco = ECOSYSTEMS_CONFIG[activeEcosystem];
      if (eco) {
        result = result.filter((i) => eco.components.includes(i.name));
      }
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.name.toLowerCase().includes(q) ||
          (i.tags && i.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    return result;
  }, [items, activeCategory, activeEcosystem, search]);

  // Reset pagination count when filters change
  React.useEffect(() => {
    setVisibleCount(ITEMS_PER_BATCH);
  }, [activeCategory, activeEcosystem, search]);

  const displayedItems = React.useMemo(() => {
    return filtered.slice(0, visibleCount);
  }, [filtered, visibleCount]);

  const categories = [
    { id: "all", label: "Все", count: items.length },
    { id: "ui", label: "UI Примитивы", count: items.filter((i) => i.category === "ui").length },
    { id: "blocks", label: "Блоки", count: items.filter((i) => i.category === "blocks").length },
    { id: "templates", label: "Шаблоны", count: items.filter((i) => i.category === "templates").length },
  ];

  const handleCopyCli = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();
    const cmd = `npx amantle-ui add ${slug}`;
    navigator.clipboard.writeText(cmd);
    setCopiedSlug(slug);
    toast.success(`Команда установки ${slug} скопирована!`);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const handleCopyQuickCli = (slug: string) => {
    const cmd = `npx amantle-ui add ${slug}`;
    navigator.clipboard.writeText(cmd);
    setCopiedQuickCli(true);
    toast.success("Команда установки скопирована!");
    setTimeout(() => setCopiedQuickCli(false), 2000);
  };

  // Helper to render live mini-previews inside cards
  const renderCardPreview = (item: CatalogItem) => {
    // If component is in componentMap, try rendering it if safe, or standard fallback
    switch (item.name) {
      case "button":
        return (
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={(e) => { e.preventDefault(); e.stopPropagation(); toast.success("Клик!"); }}>
              Primary
            </Button>
            <Button size="sm" variant="outline" onClick={(e) => { e.preventDefault(); e.stopPropagation(); toast("Outline клик"); }}>
              Outline
            </Button>
          </div>
        );
      case "input":
        return (
          <div className="w-full max-w-[190px]">
            <Input
              placeholder="Введите текст..."
              className="h-8 text-xs bg-background/80"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
              readOnly
            />
          </div>
        );
      case "badge":
        return (
          <div className="flex items-center gap-1.5">
            <Badge variant="default">Primary</Badge>
            <Badge variant="secondary">New</Badge>
            <Badge variant="outline">v2.0</Badge>
          </div>
        );
      case "switch":
        return (
          <div className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <Switch defaultChecked />
            <span className="text-[11px] text-muted-foreground">Включено</span>
          </div>
        );
      case "checkbox":
        return (
          <div className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <Checkbox defaultChecked id={`chk-${item.name}`} />
            <label htmlFor={`chk-${item.name}`} className="text-xs text-muted-foreground">Выбрано</label>
          </div>
        );
      case "slider":
        return (
          <div className="w-36" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
            <Slider defaultValue={[75]} max={100} />
          </div>
        );
      case "progress":
        return (
          <div className="w-36 space-y-1">
            <Progress value={70} className="h-2" />
          </div>
        );
      case "avatar":
        return (
          <div className="flex items-center -space-x-2">
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarFallback className="bg-primary text-primary-foreground text-[10px]">AM</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarFallback className="bg-violet-500 text-white text-[10px]">UI</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarFallback className="bg-emerald-500 text-white text-[10px]">+2k</AvatarFallback>
            </Avatar>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-medium">Интерактивный тест</span>
          </div>
        );
    }
  };

  const QuickComponent = quickViewItem ? componentMap[quickViewItem.name] : null;

  return (
    <section id="catalog" className="py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2,051 компонент из 10 экосистем</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Каталог дизайн-системы AMANTLE UI
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Все {items.length} эталонных компонентов с интерактивным тестированием, provenance-атрибуцией и 1-клик установкой через CLI
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Поиск среди ${items.length} компонентов...`}
              className="pl-9 h-10 text-xs bg-card/60"
            />
          </div>
        </div>

        {/* Ecosystem Filter Chips */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Фильтр по экосистемам
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
            <button
              onClick={() => setActiveEcosystem("all")}
              className={`shrink-0 rounded-full px-3 py-1 font-medium transition-all cursor-pointer ${
                activeEcosystem === "all"
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              Все источники ({items.length})
            </button>
            {Object.values(ECOSYSTEMS_CONFIG).map((eco) => (
              <button
                key={eco.id}
                onClick={() => setActiveEcosystem(eco.id)}
                className={`shrink-0 flex items-center gap-1 rounded-full px-3 py-1 font-medium transition-all cursor-pointer ${
                  activeEcosystem === eco.id
                    ? "bg-primary text-primary-foreground shadow-xs font-bold"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                <span>{eco.name}</span>
                <span className="text-[10px] opacity-75 font-mono">({eco.components.length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <span>{cat.label}</span>
              <span className="rounded-full bg-background/20 px-1.5 py-0.2 text-[10px] font-mono">
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Components Grid */}
        {displayedItems.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground text-sm">
            По вашему запросу ничего не найдено. Попробуйте изменить фильтры.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedItems.map((item) => {
              const eco = getComponentEcosystem(item.name);
              return (
                <div key={item.name} className="group block">
                  <Card className="h-full flex flex-col justify-between transition-all duration-200 hover:border-primary/50 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden bg-card/60 backdrop-blur-xs">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                          {item.category === "ui" ? (
                            <FileCode className="h-3.5 w-3.5 text-primary" />
                          ) : item.category === "blocks" ? (
                            <Layers className="h-3.5 w-3.5 text-primary" />
                          ) : (
                            <Layout className="h-3.5 w-3.5 text-primary" />
                          )}
                          {item.category}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {eco && (
                            <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono border ${eco.badgeColor}`}>
                              {eco.name}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={(e) => handleCopyCli(e, item.name)}
                            className="flex items-center gap-1 rounded-sm p-1 text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer transition-colors"
                            title="Скопировать команду npx amantle-ui add"
                          >
                            {copiedSlug === item.name ? (
                              <Check className="h-3.5 w-3.5 text-emerald-500" />
                            ) : (
                              <Terminal className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <Link href={`/${item.category}/${item.name}`}>
                        <CardTitle className="text-base group-hover:text-primary transition-colors cursor-pointer truncate">
                          {item.title}
                        </CardTitle>
                      </Link>
                      <CardDescription className="line-clamp-2 text-xs">
                        {item.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Visual Live Preview Area Inside Card */}
                    <div
                      onClick={() => setQuickViewItem(item)}
                      className="mx-6 mb-4 p-4 rounded-lg border border-border/60 bg-muted/20 hover:bg-muted/50 transition-colors flex items-center justify-center min-h-[72px] cursor-pointer"
                      title="Нажмите для быстрого тестирования"
                    >
                      {renderCardPreview(item)}
                    </div>

                    <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 py-3">
                      <button
                        type="button"
                        onClick={() => setQuickViewItem(item)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary font-medium transition-colors cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Быстрый тест</span>
                      </button>

                      <Link
                        href={`/${item.category}/${item.name}`}
                        className="flex items-center gap-1 text-primary text-xs font-semibold group-hover:translate-x-1 transition-transform"
                      >
                        Песочница <ArrowRight className="h-3 w-3" />
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button for 2,051 components */}
        {filtered.length > visibleCount && (
          <div className="flex flex-col items-center justify-center gap-2 pt-6">
            <Button
              onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_BATCH)}
              variant="outline"
              size="lg"
              className="gap-2 px-8 cursor-pointer rounded-xl font-semibold shadow-xs hover:border-primary/50"
            >
              <ChevronDown className="h-4 w-4" />
              <span>Показать ещё 24 компонента (осталось {filtered.length - visibleCount})</span>
            </Button>
            <span className="text-xs text-muted-foreground font-mono">
              Отображено {Math.min(visibleCount, filtered.length)} из {filtered.length} компонентов
            </span>
          </div>
        )}
      </div>

      {/* Quick View Dialog */}
      <Dialog open={!!quickViewItem} onOpenChange={(open) => !open && setQuickViewItem(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex items-center justify-between gap-4">
              <div>
                <DialogTitle className="text-xl font-bold flex items-center gap-2">
                  <span>{quickViewItem?.title}</span>
                  {quickViewItem && (
                    <Badge variant="outline" className="font-mono text-xs">
                      {quickViewItem.name}
                    </Badge>
                  )}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  {quickViewItem?.description}
                </DialogDescription>
              </div>

              {/* Viewport Width Switches */}
              <div className="hidden sm:flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-1">
                <button
                  type="button"
                  onClick={() => setQuickViewport("desktop")}
                  className={`p-1.5 rounded transition-colors ${
                    quickViewport === "desktop" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                  }`}
                  title="Desktop (100%)"
                >
                  <Monitor className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setQuickViewport("tablet")}
                  className={`p-1.5 rounded transition-colors ${
                    quickViewport === "tablet" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                  }`}
                  title="Tablet (768px)"
                >
                  <Tablet className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setQuickViewport("mobile")}
                  className={`p-1.5 rounded transition-colors ${
                    quickViewport === "mobile" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                  }`}
                  title="Mobile (375px)"
                >
                  <Smartphone className="h-4 w-4" />
                </button>
              </div>
            </div>
          </DialogHeader>

          {/* Interactive Component Area */}
          <div className="my-4 flex min-h-[280px] items-center justify-center rounded-xl border border-border/60 bg-muted/20 p-6 overflow-hidden">
            <div
              className={`w-full transition-all duration-300 flex items-center justify-center ${
                quickViewport === "mobile"
                  ? "max-w-[375px] rounded-2xl border border-border p-4 shadow-xl bg-card"
                  : quickViewport === "tablet"
                  ? "max-w-[640px] rounded-xl border border-border p-4 shadow-md bg-card"
                  : "max-w-full"
              }`}
            >
              {QuickComponent ? (
                <QuickComponent />
              ) : (
                <div className="text-center text-xs text-muted-foreground">
                  Интерактивный превью доступен на полной странице компонента
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border">
            {quickViewItem && (
              <button
                type="button"
                onClick={() => handleCopyQuickCli(quickViewItem.name)}
                className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-mono font-medium shadow-xs hover:bg-muted cursor-pointer transition-all active:scale-95"
              >
                {copiedQuickCli ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Terminal className="h-3.5 w-3.5 text-primary" />}
                <span>{copiedQuickCli ? "Скопировано!" : `npx amantle-ui add ${quickViewItem.name}`}</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              {quickViewItem && (
                <Link
                  href={`/${quickViewItem.category}/${quickViewItem.name}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary/90"
                >
                  <span>Открыть песочницу</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
