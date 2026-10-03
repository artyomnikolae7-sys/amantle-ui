"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Terminal, ArrowRight, Layers, Layout, FileCode, Check } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/registry/ui/input";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/ui/card";

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

  return (
    <section id="catalog" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <Badge variant="outline" className="mb-2">Каталог компонентов</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Золотой фонд AMANTLE UI
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Исследуйте 55 эталонных компонентов с изолированным песочницей и CLI-установкой
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
            <Link
              key={item.name}
              href={`/${item.category}/${item.name}`}
              className="group block"
            >
              <Card className="h-full flex flex-col justify-between transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5">
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
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-xs">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 py-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] text-muted-foreground/70 font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-primary text-xs font-medium group-hover:translate-x-1 transition-transform">
                    Песочница <ArrowRight className="h-3 w-3" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            Ни одного компонента не найдено по запросу &ldquo;{search}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
