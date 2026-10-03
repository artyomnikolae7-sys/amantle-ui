"use client";

import * as React from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Terminal,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/ui/tabs";
import { componentMap } from "@/lib/components-map";

interface ShowcaseViewerProps {
  item: {
    name: string;
    type: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    dependencies: string[];
    devDependencies: string[];
    registryDependencies: string[];
    files: Array<{
      path: string;
      content: string;
      type: string;
      target: string;
    }>;
    meta?: {
      source: string;
      author: string;
      license: string;
      modified?: string;
    };
  };
}

export function ShowcaseViewer({ item }: ShowcaseViewerProps) {
  const [viewport, setViewport] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [renderMode, setRenderMode] = React.useState<"live" | "iframe">("live");
  const [copiedCli, setCopiedCli] = React.useState(false);
  const [copiedCode, setCopiedCode] = React.useState(false);

  const previewUrl = `/preview/${item.category}/${item.name}`;
  const cliCommand = `npx shadcn add http://localhost:3000/r/${item.name}.json`;
  const codeContent = item.files[0]?.content || "";

  const LiveComponent = componentMap[item.name];

  const handleCopyCli = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    toast.success("Команда CLI скопирована в буфер обмена!");
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeContent);
    setCopiedCode(true);
    toast.success("Исходный код компонента скопирован!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const viewportWidth =
    viewport === "mobile"
      ? "max-w-[375px]"
      : viewport === "tablet"
      ? "max-w-[768px]"
      : "w-full";

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 space-y-8">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Каталог
        </Link>
        <span>/</span>
        <span className="capitalize">{item.category}</span>
        <span>/</span>
        <span className="text-foreground font-medium">{item.title}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {item.title}
            </h1>
            <Badge variant="secondary" className="capitalize">
              {item.category}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px] font-mono">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Quick CLI Bar */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyCli}
            className="gap-2 font-mono text-xs"
          >
            {copiedCli ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Terminal className="h-3.5 w-3.5 text-primary" />}
            <span>npx shadcn add</span>
          </Button>
          <Button
            size="sm"
            onClick={handleCopyCode}
            className="gap-2 text-xs"
          >
            {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span>Copy Code</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9"
          >
            <a href={previewUrl} target="_blank" rel="noopener noreferrer" title="Открыть превью в отдельной вкладке">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Interactive Tabs */}
      <Tabs defaultValue="preview" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <TabsList>
            <TabsTrigger value="preview" className="gap-1.5">
              <Eye className="h-4 w-4" /> Интерактивное превью
            </TabsTrigger>
            <TabsTrigger value="code" className="gap-1.5">
              <Code2 className="h-4 w-4" /> Исходный код
            </TabsTrigger>
            <TabsTrigger value="installation" className="gap-1.5">
              <Package className="h-4 w-4" /> Установка
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-wrap items-center gap-2">
            {/* Render Mode Toggle: Live vs Iframe */}
            <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-1">
              <button
                type="button"
                onClick={() => setRenderMode("live")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  renderMode === "live"
                    ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" /> Прямой тест
              </button>
              <button
                type="button"
                onClick={() => setRenderMode("iframe")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  renderMode === "iframe"
                    ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" /> Iframe Sandbox
              </button>
            </div>

            {/* Viewport Control */}
            <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-1">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  viewport === "desktop"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" /> 100%
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  viewport === "tablet"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Tablet className="h-3.5 w-3.5" /> 768px
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  viewport === "mobile"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" /> 375px
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Preview */}
        <TabsContent value="preview" className="m-0">
          <div className="flex justify-center rounded-xl border border-border bg-muted/30 p-4 sm:p-8 min-h-[450px]">
            <div
              className={`w-full transition-all duration-300 ease-in-out rounded-lg border border-border/80 bg-background shadow-xl overflow-hidden ${viewportWidth}`}
            >
              <div className="flex items-center justify-between border-b border-border bg-muted/40 px-3 py-2 text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span>{renderMode === "live" ? `Live Canvas: ${item.name}` : previewUrl}</span>
                <span className="text-[10px]">{viewportWidth.replace("max-w-[", "").replace("]", "")}</span>
              </div>

              {renderMode === "live" ? (
                <div className="w-full min-h-[500px] p-6 sm:p-10 flex flex-col justify-center items-center overflow-x-auto">
                  {LiveComponent ? (
                    <div className="w-full max-w-full">
                      <LiveComponent />
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      Компонент загружается...
                    </div>
                  )}
                </div>
              ) : (
                <iframe
                  src={previewUrl}
                  title={`${item.title} Sandbox`}
                  className="w-full min-h-[500px] border-none"
                />
              )}
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Code */}
        <TabsContent value="code" className="m-0">
          <div className="relative rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2 text-xs font-mono text-muted-foreground">
              <span>{item.files[0]?.path}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyCode}
                className="h-7 gap-1 text-xs"
              >
                {copiedCode ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                <span>{copiedCode ? "Скопировано" : "Копировать"}</span>
              </Button>
            </div>
            <pre className="p-4 text-xs font-mono overflow-x-auto max-h-[600px] leading-relaxed text-foreground bg-background/50">
              <code>{codeContent}</code>
            </pre>
          </div>
        </TabsContent>

        {/* Tab 3: Installation */}
        <TabsContent value="installation" className="m-0 space-y-6">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground">1. Установка через shadcn CLI</h3>
            <div className="relative rounded-lg border border-border bg-muted/40 p-4 font-mono text-xs flex items-center justify-between">
              <span className="text-foreground">{cliCommand}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopyCli}
                className="h-7 text-xs gap-1"
              >
                {copiedCli ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                <span>{copiedCli ? "Скопировано" : "Копировать"}</span>
              </Button>
            </div>
          </div>

          {item.dependencies.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-foreground">2. NPM-зависимости</h3>
              <div className="flex flex-wrap gap-2">
                {item.dependencies.map((dep) => (
                  <Badge key={dep} variant="secondary" className="font-mono text-xs py-1 px-2.5">
                    {dep}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {item.registryDependencies.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-foreground">3. Зависимости реестра AMANTLE UI</h3>
              <div className="flex flex-wrap gap-2">
                {item.registryDependencies.map((rdep) => (
                  <Link key={rdep} href={`/ui/${rdep}`}>
                    <Badge variant="outline" className="font-mono text-xs py-1 px-2.5 hover:border-primary transition-colors cursor-pointer">
                      {rdep}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Provenance Card */}
      {item.meta && (
        <Card className="border border-border/80 bg-muted/10 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <CardTitle className="text-sm font-semibold">Provenance & License</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Информация об авторе, лицензии и модификациях компонента в рамках политики прозрачности AMANTLE UI.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono pt-0">
            <div>
              <span className="text-muted-foreground block text-[11px]">Автор:</span>
              <span className="font-medium text-foreground">{item.meta.author || "AMANTLE UI"}</span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[11px]">Лицензия:</span>
              <span className="font-medium text-emerald-600 dark:text-emerald-400">{item.meta.license || "MIT"}</span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[11px]">Источник:</span>
              <a
                href={item.meta.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline truncate block"
              >
                {item.meta.source}
              </a>
            </div>
            <div>
              <span className="text-muted-foreground block text-[11px]">Модификация:</span>
              <span className="text-muted-foreground block truncate">{item.meta.modified || "Tailwind v4 tokens"}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
