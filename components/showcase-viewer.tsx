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
  RotateCcw,
  Bookmark,
  ChevronDown,
  FileText,
  SlidersHorizontal,
  ArrowRight,
  Loader2,
  RefreshCw,
  Scale,
  ArrowLeftRight,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";
import { Input } from "@/registry/ui/input";
import { Switch } from "@/registry/ui/switch";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/registry/ui/dropdown-menu";
import { componentMap } from "@/lib/components-map";
import { getComponentSchema } from "@/lib/playground-schemas";

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
  const [canvasKey, setCanvasKey] = React.useState(0);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [renderMode, setRenderMode] = React.useState<"live" | "iframe">("live");
  const [activeTab, setActiveTab] = React.useState("preview");
  const [codeMode, setCodeMode] = React.useState<"usage" | "source">("usage");
  const [copiedCode, setCopiedCode] = React.useState(false);
  const [copiedSlug, setCopiedSlug] = React.useState(false);
  const [abViewMode, setAbViewMode] = React.useState<"split" | "tabs">("split");
  const [abActiveTab, setAbActiveTab] = React.useState<"a" | "b">("b");

  // Per-component dynamic schema
  const currentSchema = React.useMemo(() => {
    return getComponentSchema(item.name, item.title, item.category);
  }, [item.name, item.title, item.category]);

  const [playgroundProps, setPlaygroundProps] = React.useState(currentSchema.defaultProps);

  // Sync playground props when the active component changes
  React.useEffect(() => {
    setPlaygroundProps(currentSchema.defaultProps);
  }, [currentSchema]);

  const previewUrl = `/preview/${item.category}/${item.name}`;
  const cliCommand = `npx shadcn add http://localhost:3000/r/${item.name}.json`;
  const codeContent = item.files[0]?.content || "";

  const LiveComponent = componentMap[item.name];

  // Initialize bookmark state from localStorage
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("amantle_bookmarks");
      if (stored) {
        const bookmarks: string[] = JSON.parse(stored);
        setIsBookmarked(bookmarks.includes(item.name));
      }
    } catch {
      // ignore
    }
  }, [item.name]);

  const toggleBookmark = () => {
    try {
      const stored = localStorage.getItem("amantle_bookmarks");
      let bookmarks: string[] = stored ? JSON.parse(stored) : [];
      if (bookmarks.includes(item.name)) {
        bookmarks = bookmarks.filter((b) => b !== item.name);
        setIsBookmarked(false);
        toast.info(`«${item.title}» удалён из закладок`);
      } else {
        bookmarks.push(item.name);
        setIsBookmarked(true);
        toast.success(`«${item.title}» добавлен в закладки!`);
      }
      localStorage.setItem("amantle_bookmarks", JSON.stringify(bookmarks));
    } catch {
      setIsBookmarked(!isBookmarked);
    }
  };

  const handleResetCanvas = () => {
    setViewport("desktop");
    setPlaygroundProps(currentSchema.defaultProps);
    setCanvasKey((prev) => prev + 1);
    toast.success("Холст и параметры сброшены к начальным значениям");
  };

  // Generate dynamic usage snippet via component schema
  const generatedUsageSnippet = React.useMemo(() => {
    return currentSchema.generateUsage(playgroundProps, item);
  }, [currentSchema, playgroundProps, item]);

  const activeCodeDisplay = codeMode === "usage" ? generatedUsageSnippet : codeContent;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeCodeDisplay);
    setCopiedCode(true);
    toast.success(codeMode === "usage" ? "Сниппет использования скопирован!" : "Исходный код компонента скопирован!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopySlug = () => {
    navigator.clipboard.writeText(item.name);
    setCopiedSlug(true);
    toast.success(`Название «${item.name}» скопировано!`);
    setTimeout(() => setCopiedSlug(false), 2000);
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText(cliCommand);
    toast.success("Команда установки скопирована!");
  };

  const handleCopyConfig = () => {
    const configData = {
      name: item.name,
      type: item.type,
      dependencies: item.dependencies,
      devDependencies: item.devDependencies,
      registryDependencies: item.registryDependencies,
      meta: item.meta,
    };
    navigator.clipboard.writeText(JSON.stringify(configData, null, 2));
    toast.success("Конфигурация JSON скопирована!");
  };

  const handleCopyMarkdown = () => {
    const md = `### ${item.title}\n\n${item.description}\n\n\`\`\`tsx\n${generatedUsageSnippet}\n\`\`\`\n\n**Install:**\n\`\`\`bash\n${cliCommand}\n\`\`\``;
    navigator.clipboard.writeText(md);
    toast.success("Markdown-сниппет скопирован!");
  };

  const handleCopyPrompt = () => {
    const aiPrompt = `You are integrating the "${item.title}" component from AMANTLE UI Design System into a Next.js / React application.

### Design System Tokens & Environment:
- Framework: Next.js 15+ (App Router)
- CSS: Tailwind CSS v4 with CSS Variables:
  --background, --foreground, --card, --primary, --secondary, --muted, --accent, --destructive, --radius.
- Icons: lucide-react
- Helpers: clsx, tailwind-merge (cn() utility)

### Component Name: ${item.name} (${item.category})
### Dependencies:
${item.dependencies.length > 0 ? item.dependencies.map((d) => `- ${d}`).join("\n") : "None"}
${item.registryDependencies.length > 0 ? item.registryDependencies.map((rd) => `- Registry: ${rd}`).join("\n") : ""}

### Usage Code:
\`\`\`tsx
${generatedUsageSnippet}
\`\`\`

### Component Source Code:
\`\`\`tsx
${codeContent}
\`\`\`

### Instructions:
1. Place this component in your project components folder.
2. Use Tailwind v4 design tokens for consistent colors and responsive layout.
3. Ensure accessibility and motion-reduction attributes remain intact.`;

    navigator.clipboard.writeText(aiPrompt);
    toast.success("Промпт для AI (с токенами Tailwind v4) скопирован!");
  };

  const viewportWidth =
    viewport === "mobile"
      ? "max-w-[375px]"
      : viewport === "tablet"
      ? "max-w-[768px]"
      : "w-full";

  return (
    <div className="w-full space-y-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Каталог
        </Link>
        <span>/</span>
        <Link href={`/${item.category}`} className="capitalize hover:text-foreground transition-colors">
          {item.category}
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{item.title}</span>
      </div>

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {item.title}
            </h1>
            <Badge variant="secondary" className="capitalize text-xs font-medium">
              {item.category}
            </Badge>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-2xl leading-relaxed">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1 pt-0.5">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[10px] font-mono py-0 h-4">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Button: Open in separate window */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <a href={previewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Открыть Sandbox</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Main Interactive Showcase Card */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        {/* Top Control Bar matching Screenshots 1 & 2 */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card/60 p-2 backdrop-blur-md shadow-xs">
          {/* Left: Tab Switcher (Preview / Code / Playground) + Slug Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-lg border border-border/80 bg-muted/50 p-0.5">
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
                  activeTab === "preview"
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Preview</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("playground")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
                  activeTab === "playground"
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
                <span>Playground</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
                  activeTab === "code"
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Code2 className="h-3.5 w-3.5" />
                <span>Code</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("ab-compare")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-all ${
                  activeTab === "ab-compare"
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Scale className="h-3.5 w-3.5 text-amber-500" />
                <span>A/B Compare</span>
              </button>
            </div>

            {/* Component Slug with Quick Copy */}
            <div className="hidden sm:flex items-center gap-1.5 pl-2 text-xs font-mono text-muted-foreground border-l border-border/60">
              <span className="text-foreground/90 font-medium">{item.name}</span>
              <button
                type="button"
                onClick={handleCopySlug}
                title="Скопировать название компонента"
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-muted"
              >
                {copiedSlug ? (
                  <Check className="h-3 w-3 text-emerald-500" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </button>
            </div>
          </div>

          {/* Right: Copy for AI Dropdown, Bookmark, Devices, Reset */}
          <div className="flex items-center gap-1.5">
            {/* Copy for AI Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors shadow-xs"
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span>Copy for AI</span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                <DropdownMenuItem onClick={handleCopyConfig} className="gap-2.5 text-xs py-2">
                  <span className="font-mono text-xs text-primary font-bold">{"{ }"}</span>
                  <span>Copy configuration</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopyCli} className="gap-2.5 text-xs py-2">
                  <span className="font-mono text-xs text-primary font-bold">{">_"}</span>
                  <span>Copy install command</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopyMarkdown} className="gap-2.5 text-xs py-2">
                  <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Copy as markdown</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-border/60" />
                <DropdownMenuItem onClick={handleCopyPrompt} className="gap-2.5 text-xs py-2 text-primary font-medium">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Copy prompt (Tailwind v4)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Bookmark Button */}
            <button
              type="button"
              onClick={toggleBookmark}
              title={isBookmarked ? "Удалить из закладок" : "Добавить в закладки"}
              className={`p-1.5 rounded-lg border transition-all ${
                isBookmarked
                  ? "border-primary bg-primary/10 text-primary shadow-xs"
                  : "border-border/80 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary" : ""}`} />
            </button>

            {/* Device Switcher (Desktop / Tablet / Mobile) */}
            <div className="flex items-center gap-0.5 rounded-lg border border-border/80 bg-muted/40 p-0.5">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                title="Десктоп (100%)"
                className={`p-1.5 rounded-md transition-all ${
                  viewport === "desktop"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Monitor className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                title="Планшет (768px)"
                className={`p-1.5 rounded-md transition-all ${
                  viewport === "tablet"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Tablet className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                title="Мобильный (375px)"
                className={`p-1.5 rounded-md transition-all ${
                  viewport === "mobile"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Smartphone className="h-4 w-4" />
              </button>
            </div>

            {/* Reset Canvas & Playground Button */}
            <button
              type="button"
              onClick={handleResetCanvas}
              title="Сбросить холст и параметры"
              className="p-1.5 rounded-lg border border-border/80 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tab 1: Preview Canvas */}
        <TabsContent value="preview" className="m-0">
          <div className="flex justify-center rounded-xl border border-border bg-muted/20 p-4 sm:p-6 min-h-[460px] overflow-hidden">
            <div
              className={`w-full transition-all duration-300 ease-in-out rounded-lg border border-border/80 bg-background shadow-xl overflow-hidden ${viewportWidth}`}
            >
              {/* Window dots & canvas info header */}
              <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-3 py-2 text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground/80 font-medium">Canvas: {item.name}</span>
                  <span className="text-[10px] text-muted-foreground">
                    ({viewport === "mobile" ? "375px" : viewport === "tablet" ? "768px" : "100%"})
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px]">
                  <button
                    type="button"
                    onClick={() => setRenderMode(renderMode === "live" ? "iframe" : "live")}
                    className="hover:text-foreground transition-colors underline"
                  >
                    {renderMode === "live" ? "Switch to Iframe" : "Switch to Live"}
                  </button>
                </div>
              </div>

              {/* Render Area */}
              <div key={canvasKey} className="w-full min-h-[480px] p-6 sm:p-10 flex flex-col justify-center items-center overflow-x-auto">
                {renderMode === "live" ? (
                  LiveComponent ? (
                    <div className="w-full max-w-full flex justify-center">
                      <LiveComponent />
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground text-sm">
                      Компонент загружается...
                    </div>
                  )
                ) : (
                  <iframe
                    src={previewUrl}
                    title={`${item.title} Sandbox`}
                    className="w-full min-h-[480px] border-none"
                  />
                )}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Playground Interactive Configurator */}
        <TabsContent value="playground" className="m-0 space-y-4">
          {/* Interactive Canvas above controls */}
          <div className="flex justify-center rounded-xl border border-border bg-muted/20 p-4 sm:p-6 min-h-[300px] overflow-hidden">
            <div
              className={`w-full transition-all duration-300 ease-in-out rounded-lg border border-border/80 bg-background shadow-xl overflow-hidden ${viewportWidth}`}
            >
              <div className="flex items-center justify-between border-b border-border/80 bg-muted/40 px-3 py-2 text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-foreground/80 font-medium">Live Playground Canvas</span>
                <span className="text-[10px] text-primary font-semibold">Active</span>
              </div>
              <div key={canvasKey} className="w-full min-h-[260px] p-6 sm:p-10 flex flex-col justify-center items-center">
                {LiveComponent ? (
                  <LiveComponent {...playgroundProps} isPlayground />
                ) : (
                  <div className="text-muted-foreground text-xs">Загрузка...</div>
                )}
              </div>
            </div>
          </div>

          {/* Interactive Controls Grid */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-6 shadow-xs">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-bold text-foreground">Панель управления пропсами</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleResetCanvas}
                className="h-7 text-xs gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Сброс настроек</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
              {Object.entries(currentSchema.controls).map(([key, field]) => {
                const ctrl = field.control;
                const value = playgroundProps[key];

                if (ctrl.type === "select") {
                  return (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="font-semibold text-foreground block">{field.label}:</label>
                      </div>
                      {field.description && (
                        <p className="text-[11px] text-muted-foreground">{field.description}</p>
                      )}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {ctrl.options.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setPlaygroundProps((p) => ({ ...p, [key]: opt.value }))}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                              value === opt.value
                                ? "bg-primary text-primary-foreground font-bold shadow-xs"
                                : "bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (ctrl.type === "slider") {
                  return (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="font-semibold text-foreground block">{field.label}:</label>
                        <span className="font-mono text-[11px] font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                          {value ?? ctrl.min}
                          {ctrl.unit || ""}
                        </span>
                      </div>
                      {field.description && (
                        <p className="text-[11px] text-muted-foreground">{field.description}</p>
                      )}
                      <input
                        type="range"
                        min={ctrl.min}
                        max={ctrl.max}
                        step={ctrl.step}
                        value={value ?? ctrl.min}
                        onChange={(e) =>
                          setPlaygroundProps((p) => ({ ...p, [key]: Number(e.target.value) }))
                        }
                        className="w-full accent-primary cursor-pointer h-2 bg-muted rounded-lg"
                      />
                    </div>
                  );
                }

                if (ctrl.type === "color") {
                  return (
                    <div key={key} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="font-semibold text-foreground block">{field.label}:</label>
                        <span className="font-mono text-[11px] text-muted-foreground">{value}</span>
                      </div>
                      {field.description && (
                        <p className="text-[11px] text-muted-foreground">{field.description}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {ctrl.presets.map((color) => {
                          const isSpecial = color === "currentColor";
                          const isSelected = value === color;
                          return (
                            <button
                              key={color}
                              type="button"
                              onClick={() => setPlaygroundProps((p) => ({ ...p, [key]: color }))}
                              title={color}
                              className={`h-6 w-6 rounded-full border transition-all flex items-center justify-center ${
                                isSelected
                                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110 border-white/60"
                                  : "border-border/80 hover:scale-105 opacity-80 hover:opacity-100"
                              }`}
                              style={{
                                backgroundColor: isSpecial ? "var(--primary)" : color,
                              }}
                            >
                              {isSelected && <Check className="h-3 w-3 text-white drop-shadow-sm" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                if (ctrl.type === "boolean") {
                  return (
                    <div key={key} className="space-y-2">
                      <label className="font-semibold text-foreground block">{field.label}:</label>
                      {field.description && (
                        <p className="text-[11px] text-muted-foreground">{field.description}</p>
                      )}
                      <label className="flex items-center gap-2.5 cursor-pointer pt-1">
                        <input
                          type="checkbox"
                          checked={Boolean(value)}
                          onChange={(e) =>
                            setPlaygroundProps((p) => ({ ...p, [key]: e.target.checked }))
                          }
                          className="rounded border-border text-primary focus:ring-primary h-4 w-4"
                        />
                        <span className="text-foreground">{ctrl.label}</span>
                      </label>
                    </div>
                  );
                }

                if (ctrl.type === "text") {
                  return (
                    <div key={key} className="space-y-2">
                      <label className="font-semibold text-foreground block">{field.label}:</label>
                      <Input
                        value={value ?? ""}
                        onChange={(e) =>
                          setPlaygroundProps((p) => ({ ...p, [key]: e.target.value }))
                        }
                        placeholder={ctrl.placeholder || "Введите значение..."}
                        className="h-8 text-xs bg-muted/30"
                      />
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </TabsContent>

        {/* Tab 3: Code with Dynamic Usage Snippet & Source */}
        <TabsContent value="code" className="m-0 space-y-3">
          <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-xs">
            {/* Header: Mode selector (Usage vs Source) and Copy Button */}
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-md border border-border bg-background/80 p-0.5 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setCodeMode("usage")}
                    className={`px-2.5 py-0.5 rounded transition-colors ${
                      codeMode === "usage"
                        ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Сниппет вызова (Usage)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCodeMode("source")}
                    className={`px-2.5 py-0.5 rounded transition-colors ${
                      codeMode === "source"
                        ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Исходный файл (Source)
                  </button>
                </div>
                <span className="text-[10px] text-muted-foreground/80 hidden sm:inline">
                  {codeMode === "usage" ? "Синхронизирован с Playground" : item.files[0]?.path}
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyCode}
                className="h-7 gap-1.5 text-xs text-foreground hover:bg-muted"
              >
                {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedCode ? "Скопировано!" : "Копировать"}</span>
              </Button>
            </div>

            {/* Code Block */}
            <pre className="p-4 text-xs font-mono overflow-x-auto max-h-[620px] leading-relaxed text-foreground bg-background/60">
              <code>{activeCodeDisplay}</code>
            </pre>
          </div>
        </TabsContent>

        {/* Tab 4: A/B Compare Mode (Original Reference vs AMANTLE UI Tokenized) */}
        <TabsContent value="ab-compare" className="m-0 space-y-4">
          {/* Header & Controls for A/B Test */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-xs">
            <div className="flex items-center gap-2.5">
              <Scale className="h-5 w-5 text-amber-500" />
              <div>
                <h3 className="text-sm font-bold text-foreground">A/B Сравнение & Токенизация</h3>
                <p className="text-xs text-muted-foreground">
                  Сравнение исходного внешнего компонента (A) и адаптированной версии AMANTLE UI (B).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs gap-1 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                <Check className="h-3 w-3" />
                <span>100% Tokenized</span>
              </Badge>

              <div className="flex items-center rounded-lg border border-border bg-muted/50 p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setAbViewMode("split")}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    abViewMode === "split"
                      ? "bg-background text-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Side-by-Side
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAbViewMode("tabs");
                    setAbActiveTab("a");
                  }}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    abViewMode === "tabs" && abActiveTab === "a"
                      ? "bg-background text-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Оригинал (A)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAbViewMode("tabs");
                    setAbActiveTab("b");
                  }}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    abViewMode === "tabs" && abActiveTab === "b"
                      ? "bg-background text-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  AMANTLE UI (B)
                </button>
              </div>
            </div>
          </div>

          {/* Comparison Grid */}
          <div
            className={`grid gap-4 ${
              abViewMode === "split" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {/* Variant A: Reference / Original */}
            {(abViewMode === "split" || (abViewMode === "tabs" && abActiveTab === "a")) && (
              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs flex flex-col">
                <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                      A
                    </span>
                    <span className="text-xs font-bold text-foreground">Вариант A: Исходный Референс</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-mono text-muted-foreground">
                    {item.meta?.source ? "Open Source" : "Reference"}
                  </Badge>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-muted-foreground border-b border-border/40 pb-1.5">
                      <span>Источник:</span>
                      <span className="font-mono text-foreground truncate max-w-[200px]">
                        {item.meta?.source || "shadcn-compatible"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground border-b border-border/40 pb-1.5">
                      <span>Лицензия:</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400">
                        {item.meta?.license || "MIT"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Стилизация:</span>
                      <span className="font-mono text-amber-600 dark:text-amber-400">
                        Хардкодные Tailwind-классы
                      </span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border/80 bg-background/80 p-3 space-y-2">
                    <span className="text-[11px] font-semibold text-muted-foreground block">
                      Пример исходных классов до нормализации:
                    </span>
                    <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 line-through">
                        bg-zinc-950
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 line-through">
                        bg-blue-600
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 line-through">
                        border-zinc-800
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 line-through">
                        text-zinc-400
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Variant B: AMANTLE UI Tokenized & Live */}
            {(abViewMode === "split" || (abViewMode === "tabs" && abActiveTab === "b")) && (
              <div className="rounded-xl border border-primary/30 bg-card overflow-hidden shadow-xs flex flex-col">
                <div className="flex items-center justify-between border-b border-primary/20 bg-primary/5 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                      B
                    </span>
                    <span className="text-xs font-bold text-foreground">Вариант B: AMANTLE UI Адаптация</span>
                  </div>
                  <Badge variant="default" className="text-[10px] font-mono">
                    Живой Рендер
                  </Badge>
                </div>

                <div className="p-4 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="min-h-[160px] rounded-lg border border-border/80 bg-background/90 p-6 flex items-center justify-center">
                    {LiveComponent ? (
                      <LiveComponent {...playgroundProps} />
                    ) : (
                      <div className="text-muted-foreground text-xs">Загрузка...</div>
                    )}
                  </div>

                  <div className="rounded-lg border border-border/80 bg-background/80 p-3 space-y-2">
                    <span className="text-[11px] font-semibold text-primary block">
                      Семантические токены AMANTLE UI:
                    </span>
                    <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                      <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                        bg-background
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                        bg-primary
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                        border-border
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                        text-muted-foreground
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                        --radius
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Token Transformation Audit Matrix */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-bold text-foreground">Таблица трансформации токенов (Token Diff)</h4>
              </div>
              <span className="text-xs font-mono text-muted-foreground">Tailwind v4 Semantic Variables</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-border/60 text-muted-foreground">
                    <th className="pb-2 font-semibold">Исходный класс (Variant A)</th>
                    <th className="pb-2 font-semibold">Токен AMANTLE UI (Variant B)</th>
                    <th className="pb-2 font-semibold">Семантическое назначение</th>
                    <th className="pb-2 font-semibold">Статус</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-foreground">
                  <tr>
                    <td className="py-2 text-rose-500">bg-zinc-950</td>
                    <td className="py-2 text-primary font-bold">bg-background</td>
                    <td className="py-2 text-muted-foreground">Системная подложка темы</td>
                    <td className="py-2 text-emerald-500 font-bold">✓ Применено</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-rose-500">bg-zinc-900 / neutral-900</td>
                    <td className="py-2 text-primary font-bold">bg-card</td>
                    <td className="py-2 text-muted-foreground">Фон карточек и модулей</td>
                    <td className="py-2 text-emerald-500 font-bold">✓ Применено</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-rose-500">border-zinc-800 / gray-200</td>
                    <td className="py-2 text-primary font-bold">border-border</td>
                    <td className="py-2 text-muted-foreground">Семантический разделитель</td>
                    <td className="py-2 text-emerald-500 font-bold">✓ Применено</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-rose-500">text-zinc-400 / gray-500</td>
                    <td className="py-2 text-primary font-bold">text-muted-foreground</td>
                    <td className="py-2 text-muted-foreground">Вторичный описательный текст</td>
                    <td className="py-2 text-emerald-500 font-bold">✓ Применено</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-rose-500">bg-blue-600 / indigo-600</td>
                    <td className="py-2 text-primary font-bold">bg-primary</td>
                    <td className="py-2 text-muted-foreground">Акцент бренда (фиолетовый)</td>
                    <td className="py-2 text-emerald-500 font-bold">✓ Применено</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Provenance & License Card */}
      {item.meta && (
        <Card className="border border-border/80 bg-muted/15 shadow-xs">
          <CardHeader className="pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <CardTitle className="text-sm font-semibold">Provenance & License</CardTitle>
            </div>
            <CardDescription className="text-xs">
              Атрибуция автора, исходный репозиторий и лицензия в рамках политики прозрачности AMANTLE UI.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono pt-1">
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
