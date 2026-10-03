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

export interface CatalogItem {
  name: string;
  type: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

export function CatalogGrid({ items }: { items: CatalogItem[] }) {
  const [search, setSearch] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [copiedSlug, setCopiedSlug] = React.useState<string | null>(null);

  // Quick View Dialog State
  const [quickViewItem, setQuickViewItem] = React.useState<CatalogItem | null>(null);
  const [quickViewport, setQuickViewport] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [copiedQuickCli, setCopiedQuickCli] = React.useState(false);

  const filtered = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCat =
      activeCategory === "all" ? true : item.category === activeCategory;

    return matchesSearch && matchesCat;
  });

  const categories = [
    { id: "all", label: "Все", count: items.length },
    { id: "ui", label: "UI Примитивы", count: items.filter((i) => i.category === "ui").length },
    { id: "blocks", label: "Блоки", count: items.filter((i) => i.category === "blocks").length },
    { id: "templates", label: "Шаблоны", count: items.filter((i) => i.category === "templates").length },
  ];

  const handleCopyCli = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();
    const cmd = `npx shadcn add http://localhost:3000/r/${slug}.json`;
    navigator.clipboard.writeText(cmd);
    setCopiedSlug(slug);
    toast.success(`Команда установки ${slug} скопирована!`);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const handleCopyQuickCli = (slug: string) => {
    const cmd = `npx shadcn add http://localhost:3000/r/${slug}.json`;
    navigator.clipboard.writeText(cmd);
    setCopiedQuickCli(true);
    toast.success("Команда установки скопирована!");
    setTimeout(() => setCopiedQuickCli(false), 2000);
  };

  // Helper to render live mini-previews inside cards
  const renderCardPreview = (item: CatalogItem) => {
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
            <Badge variant="outline">v1.0</Badge>
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
              <AvatarFallback className="bg-primary text-primary-foreground text-[10px]">АМ</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarFallback className="bg-violet-500 text-white text-[10px]">UI</AvatarFallback>
            </Avatar>
            <Avatar className="h-8 w-8 border-2 border-background">
              <AvatarFallback className="bg-emerald-500 text-white text-[10px]">+3</AvatarFallback>
            </Avatar>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
            <Eye className="w-4 h-4" />
            <span className="text-[11px] font-medium">Нажмите для интерактивного теста</span>
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
            <Badge variant="outline" className="mb-2">Каталог компонентов</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Золотой фонд AMANTLE UI
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Все 55 эталонных компонентов с интерактивным тестированием прямо в каталоге
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск по названию или тегам..."
              className="pl-9 h-10"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <span>{cat.label}</span>
              <span className="rounded-full bg-background/20 px-1.5 py-0.2 text-[10px]">
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Components Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="group block"
            >
              <Card className="h-full flex flex-col justify-between transition-all duration-200 hover:border-primary/50 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden">
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
                    <button
                      type="button"
                      onClick={(e) => handleCopyCli(e, item.name)}
                      className="flex items-center gap-1 rounded-sm p-1 text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted"
                      title="Скопировать команду npx shadcn add"
                    >
                      {copiedSlug === item.name ? (
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                      ) : (
                        <Terminal className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                  <Link href={`/${item.category}/${item.name}`}>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors cursor-pointer">
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
                  className="mx-6 mb-4 p-4 rounded-lg border border-border/60 bg-muted/30 hover:bg-muted/60 transition-colors flex items-center justify-center min-h-[72px] cursor-pointer"
                  title="Нажмите для быстрого тестирования"
                >
                  {renderCardPreview(item)}
                </div>

                <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 py-3">
                  <button
                    type="button"
                    onClick={() => setQuickViewItem(item)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary font-medium transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Быстрый тест</span>
                  </button>

                  <Link
                    href={`/${item.category}/${item.name}`}
                    className="flex items-center gap-1 text-primary text-xs font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Песочница <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            Ни одного компонента не найдено по запросу &ldquo;{search}&rdquo;.
          </div>
        )}
      </div>

      {/* QUICK VIEW INTERACTIVE MODAL */}
      <Dialog open={!!quickViewItem} onOpenChange={(open) => !open && setQuickViewItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {quickViewItem && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <DialogTitle className="text-2xl font-bold">{quickViewItem.title}</DialogTitle>
                      <Badge variant="secondary" className="capitalize">{quickViewItem.category}</Badge>
                    </div>
                    <DialogDescription className="text-xs">{quickViewItem.description}</DialogDescription>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 text-xs font-mono"
                      onClick={() => handleCopyQuickCli(quickViewItem.name)}
                    >
                      {copiedQuickCli ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Terminal className="w-3.5 h-3.5" />}
                      <span>npx shadcn add</span>
                    </Button>
                    <Button size="sm" asChild className="gap-1.5 text-xs">
                      <Link href={`/${quickViewItem.category}/${quickViewItem.name}`}>
                        <span>Открыть страницу</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </DialogHeader>

              {/* Viewport switch in modal */}
              <div className="flex items-center justify-between border-b pb-3 text-xs">
                <span className="text-muted-foreground">Интерактивный холст:</span>
                <div className="flex items-center gap-1 bg-muted p-0.5 rounded-md">
                  <button
                    type="button"
                    onClick={() => setQuickViewport("desktop")}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium ${quickViewport === "desktop" ? "bg-background shadow-xs text-foreground" : "text-muted-foreground"}`}
                  >
                    100%
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuickViewport("tablet")}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium ${quickViewport === "tablet" ? "bg-background shadow-xs text-foreground" : "text-muted-foreground"}`}
                  >
                    768px
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuickViewport("mobile")}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium ${quickViewport === "mobile" ? "bg-background shadow-xs text-foreground" : "text-muted-foreground"}`}
                  >
                    375px
                  </button>
                </div>
              </div>

              {/* Component Render inside Modal Canvas */}
              <div className="flex justify-center rounded-xl border border-border/80 bg-muted/20 p-6 min-h-[300px] overflow-x-auto">
                <div
                  className={`w-full transition-all duration-300 rounded-lg border border-border bg-background p-6 shadow-sm flex flex-col justify-center ${
                    quickViewport === "mobile"
                      ? "max-w-[375px]"
                      : quickViewport === "tablet"
                      ? "max-w-[768px]"
                      : "w-full"
                  }`}
                >
                  {QuickComponent ? (
                    <QuickComponent />
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      Загрузка компонента...
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
