"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  Copy,
  Check,
  Code2,
  Eye,
  Sliders,
  Compass,
  ExternalLink,
  ChevronRight,
  Layers,
  Palette,
  Download,
  FileCode,
  FileText,
  Search,
  CheckCheck,
  Terminal,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { componentMap } from "@/lib/components-map";
import { ECOSYSTEMS_CONFIG, getComponentEcosystem } from "@/lib/ecosystems";
import registriesData from "@/_harvest/shadcnstudio-directory.json";

const THEME_COLORS: Record<string, { label: string; primary: string; hex: string }> = {
  violet: { label: "Violet", primary: "oklch(0.65 0.22 290)", hex: "#8b5cf6" },
  zinc: { label: "Zinc", primary: "oklch(0.5 0.02 260)", hex: "#71717a" },
  blue: { label: "Blue", primary: "oklch(0.62 0.2 245)", hex: "#3b82f6" },
  emerald: { label: "Emerald", primary: "oklch(0.68 0.19 155)", hex: "#10b981" },
  rose: { label: "Rose", primary: "oklch(0.65 0.23 15)", hex: "#f43f5e" },
  amber: { label: "Amber", primary: "oklch(0.75 0.18 75)", hex: "#f59e0b" },
};

export default function StudioPage() {
  const componentKeys = React.useMemo(() => Object.keys(componentMap).sort(), []);
  const [selectedComp, setSelectedComp] = React.useState<string>("button");
  const [compSearch, setCompSearch] = React.useState<string>("");
  const [activeEcosystem, setActiveEcosystem] = React.useState<string>("all");
  const [viewport, setViewport] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [designStyle, setDesignStyle] = React.useState<"default" | "neobrutalist" | "cyberglass">("default");
  const [activeTheme, setActiveTheme] = React.useState<string>("violet");
  const [activeRadius, setActiveRadius] = React.useState<string>("0.5rem");
  const [activeTab, setActiveTab] = React.useState<"preview" | "export" | "directory">("preview");
  const [exportFormat, setExportFormat] = React.useState<"component" | "page" | "css" | "cli">("component");
  
  // Real manifest source code
  const [manifestCode, setManifestCode] = React.useState<string>("");
  const [loadingManifest, setLoadingManifest] = React.useState<boolean>(false);

  const [copiedCli, setCopiedCli] = React.useState(false);
  const [copiedCode, setCopiedCode] = React.useState(false);

  // Filter components by active ecosystem and search query
  const filteredComponents = React.useMemo(() => {
    let list = componentKeys;
    if (activeEcosystem !== "all") {
      const eco = ECOSYSTEMS_CONFIG[activeEcosystem];
      if (eco) {
        list = list.filter((k) => eco.components.includes(k));
      }
    }
    if (compSearch.trim()) {
      const q = compSearch.trim().toLowerCase();
      list = list.filter((k) => k.toLowerCase().includes(q));
    }
    return list;
  }, [componentKeys, activeEcosystem, compSearch]);

  // Ensure selected component is valid
  React.useEffect(() => {
    if (!filteredComponents.includes(selectedComp) && filteredComponents.length > 0) {
      setSelectedComp(filteredComponents[0]);
    }
  }, [filteredComponents, selectedComp]);

  // Fetch full component source code from JSON registry when component or export tab changes
  React.useEffect(() => {
    let isCancelled = false;
    async function fetchManifest() {
      setLoadingManifest(true);
      try {
        const res = await fetch(`/r/${selectedComp}.json`);
        if (!res.ok) throw new Error("Manifest not found");
        const data = await res.json();
        if (!isCancelled && data.files && data.files[0]?.content) {
          setManifestCode(data.files[0].content);
        }
      } catch {
        if (!isCancelled) {
          // Fallback code template
          const pascal = selectedComp
            .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
            .replace(/^[a-z]/, (s) => s.toUpperCase());
          setManifestCode(
            `import * as React from "react";\n\nexport interface ${pascal}Props extends React.HTMLAttributes<HTMLDivElement> {}\n\nexport function ${pascal}({ className, ...props }: ${pascal}Props) {\n  return (\n    <div className={className} {...props}>\n      {/* AMANTLE UI: ${selectedComp} */}\n      <span>${pascal}</span>\n    </div>\n  );\n}`
          );
        }
      } finally {
        if (!isCancelled) setLoadingManifest(false);
      }
    }
    fetchManifest();
    return () => {
      isCancelled = true;
    };
  }, [selectedComp]);

  const pascalName = React.useMemo(() => {
    return selectedComp
      .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
      .replace(/^[a-z]/, (s) => s.toUpperCase());
  }, [selectedComp]);

  // Generate complete Next.js Page Code
  const generatedPageCode = React.useMemo(() => {
    const styleWrapperClass =
      designStyle === "neobrutalist"
        ? 'className="p-8 border-3 border-foreground shadow-[6px_6px_0px_0px_currentColor] rounded-[var(--radius)] bg-card"'
        : designStyle === "cyberglass"
        ? 'className="p-8 backdrop-blur-xl border border-primary/40 shadow-[0_0_30px_rgba(139,92,246,0.2)] rounded-[var(--radius)] bg-card/60"'
        : 'className="p-8 border border-border/80 shadow-sm rounded-[var(--radius)] bg-card"';

    return `import * as React from "react";
import { ${pascalName} } from "@/components/ui/${selectedComp}";

export default function ${pascalName}Page() {
  return (
    <main
      className="min-h-screen bg-background text-foreground flex items-center justify-center p-6"
      style={{
        "--radius": "${activeRadius}",
      } as React.CSSProperties}
      data-theme="${activeTheme}"
      data-style="${designStyle}"
    >
      <div ${styleWrapperClass}>
        <${pascalName} />
      </div>
    </main>
  );
}`;
  }, [pascalName, selectedComp, activeRadius, activeTheme, designStyle]);

  // Generate CSS Variables for globals.css
  const generatedCssTokens = React.useMemo(() => {
    const theme = THEME_COLORS[activeTheme] || THEME_COLORS.violet;
    return `/* AMANTLE UI Theme Tokens (${theme.label}) */
:root {
  --radius: ${activeRadius};
  --primary: ${theme.primary};
  --primary-foreground: oklch(0.98 0 0);
  --ring: ${theme.primary};
}

.dark {
  --radius: ${activeRadius};
  --primary: ${theme.primary};
  --primary-foreground: oklch(0.15 0.02 260);
  --ring: ${theme.primary};
}`;
  }, [activeRadius, activeTheme]);

  // Apply theme tokens to container
  const containerStyle = React.useMemo(() => {
    return {
      "--radius": activeRadius,
    } as React.CSSProperties;
  }, [activeRadius]);

  const ComponentToRender = componentMap[selectedComp] || componentMap["button"];
  const currentEco = getComponentEcosystem(selectedComp);

  const copyCli = () => {
    const cmd = `npx amantle-ui@latest add ${selectedComp}`;
    navigator.clipboard?.writeText(cmd);
    setCopiedCli(true);
    toast.success("CLI команда скопирована в буфер обмена!");
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const copyCurrentExport = () => {
    let textToCopy = "";
    if (exportFormat === "component") textToCopy = manifestCode;
    else if (exportFormat === "page") textToCopy = generatedPageCode;
    else if (exportFormat === "css") textToCopy = generatedCssTokens;
    else if (exportFormat === "cli") textToCopy = `npx amantle-ui@latest add ${selectedComp}`;

    navigator.clipboard?.writeText(textToCopy);
    setCopiedCode(true);
    toast.success("Код успешно скопирован!");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`Файл ${filename} успешно скачан!`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Studio Hero Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <h1 className="text-xl font-bold tracking-tight">AMANTLE Studio Composer & Inspector</h1>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 font-semibold">
                v2.0 • 2,051 items
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Интерактивный инспектор и композер: живое переключение между 10+ экосистемами, 2,051 компонентом, темами оформления и мгновенный экспорт готовой вёрстки.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyCli}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-mono font-medium shadow-xs hover:bg-muted active:scale-95 transition-all cursor-pointer"
            >
              {copiedCli ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Terminal className="h-3.5 w-3.5 text-primary" />}
              <span>{copiedCli ? "Скопировано!" : `npx amantle-ui add ${selectedComp}`}</span>
            </button>
            <Link
              href={`/ui/${selectedComp}`}
              className="flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 active:scale-95 transition-all"
            >
              <span>В каталог</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Ecosystem Switcher Pills */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Экосистемы-доноры (10 источников)
            </span>
            <button
              onClick={() => setActiveTab(activeTab === "directory" ? "preview" : "directory")}
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>{activeTab === "directory" ? "Вернуться в студию" : "Открыть реестр библиотек"}</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveEcosystem("all")}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                activeEcosystem === "all"
                  ? "bg-primary text-primary-foreground shadow-xs font-bold"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              Все экосистемы ({componentKeys.length})
            </button>
            {Object.values(ECOSYSTEMS_CONFIG).map((eco) => (
              <button
                key={eco.id}
                onClick={() => setActiveEcosystem(eco.id)}
                className={`shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all cursor-pointer ${
                  activeEcosystem === eco.id
                    ? "bg-primary text-primary-foreground shadow-xs font-bold"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span>{eco.name}</span>
                <span className="text-[10px] opacity-75 font-mono">({eco.components.length})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Directory Tab View */}
        {activeTab === "directory" ? (
          <div className="flex flex-col gap-6 py-4">
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <h2 className="text-lg font-bold">Сборник и каталог внешних open-source реестров</h2>
              <p className="text-xs text-muted-foreground mt-1">
                Все библиотеки, агрегированные в AMANTLE UI по образцу Shadcn Studio. Каждый компонент адаптирован под чистый Next.js 15, React 19 и Tailwind v4 без внешних конфликтов.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {registriesData.registries.map((reg) => (
                  <div
                    key={reg.id}
                    className="flex flex-col justify-between rounded-xl border border-border/50 bg-background/50 p-4 hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-sm text-foreground">{reg.name}</h3>
                        <a
                          href={reg.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Автор: {reg.author} • {reg.license}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {reg.tags.map((t) => (
                          <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                      <span className="font-mono text-primary font-bold">{reg.harvestedCount} портировано</span>
                      <button
                        onClick={() => {
                          setActiveEcosystem(reg.id);
                          setActiveTab("preview");
                        }}
                        className="text-primary hover:underline font-medium cursor-pointer"
                      >
                        Смотреть компоненты →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Main Studio Workspace Grid */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Controls & Component Picker */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm flex flex-col gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Компонент ({filteredComponents.length})
                    </label>
                    {filteredComponents.length > 0 && (
                      <span className="text-[10px] font-mono text-primary">
                        {selectedComp}
                      </span>
                    )}
                  </div>

                  {/* Component Quick Filter Search */}
                  <div className="relative mb-2">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                    <input
                      type="text"
                      value={compSearch}
                      onChange={(e) => setCompSearch(e.target.value)}
                      placeholder="Поиск по списку..."
                      className="w-full rounded-lg border border-border bg-background/50 pl-8 pr-3 py-1 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <select
                    value={selectedComp}
                    onChange={(e) => setSelectedComp(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer max-h-48"
                  >
                    {filteredComponents.map((k) => (
                      <option key={k} value={k}>
                        {k}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Design Style Modifier */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Стиль оформления
                  </label>
                  <div className="mt-1.5 grid grid-cols-3 gap-1">
                    <button
                      onClick={() => setDesignStyle("default")}
                      className={`rounded-lg py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                        designStyle === "default"
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      Default
                    </button>
                    <button
                      onClick={() => setDesignStyle("neobrutalist")}
                      className={`rounded-lg py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                        designStyle === "neobrutalist"
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      Brutalist
                    </button>
                    <button
                      onClick={() => setDesignStyle("cyberglass")}
                      className={`rounded-lg py-1 text-[11px] font-semibold transition-all cursor-pointer ${
                        designStyle === "cyberglass"
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      Cyber
                    </button>
                  </div>
                </div>

                {/* Radius Token */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Радиус скругления (--radius)
                  </label>
                  <div className="mt-1.5 flex gap-1">
                    {[
                      { l: "0", v: "0rem" },
                      { l: "4px", v: "0.25rem" },
                      { l: "8px", v: "0.5rem" },
                      { l: "12px", v: "0.75rem" },
                      { l: "Pill", v: "9999px" },
                    ].map((r) => (
                      <button
                        key={r.v}
                        onClick={() => setActiveRadius(r.v)}
                        className={`flex-1 rounded-md border py-1 text-[10px] font-medium transition-colors cursor-pointer ${
                          activeRadius === r.v
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border/60 bg-muted/40 text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {r.l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Цветовая палитра
                  </label>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {Object.entries(THEME_COLORS).map(([id, p]) => (
                      <button
                        key={id}
                        onClick={() => setActiveTheme(id)}
                        title={p.label}
                        className={`h-6 w-6 rounded-full border-2 transition-transform cursor-pointer ${
                          activeTheme === id ? "scale-115 border-foreground shadow-xs" : "border-transparent opacity-75 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: p.hex }}
                      />
                    ))}
                  </div>
                </div>

                {/* Provenance Card */}
                {currentEco && (
                  <div className="rounded-xl border border-border/40 bg-muted/20 p-3 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Источник компонента
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-foreground">{currentEco.name}</span>
                      <a
                        href={currentEco.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline text-[11px] flex items-center gap-1"
                      >
                        <span>Сайт автора</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <span className="text-[11px] text-muted-foreground">Автор: {currentEco.author}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Center Viewport Preview & Export */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-2 shadow-xs">
                {/* Mode Tabs */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === "preview" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Предпросмотр</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("export")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                      activeTab === "export" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    <span>Экспорт вёрстки</span>
                  </button>
                </div>

                {/* Viewport Width Controls (Only in Preview) */}
                {activeTab === "preview" ? (
                  <div className="flex items-center gap-1 rounded-lg border border-border/50 bg-muted/40 p-1">
                    <button
                      onClick={() => setViewport("desktop")}
                      className={`p-1.5 rounded transition-colors cursor-pointer ${viewport === "desktop" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
                      title="Desktop (100%)"
                    >
                      <Monitor className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setViewport("tablet")}
                      className={`p-1.5 rounded transition-colors cursor-pointer ${viewport === "tablet" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
                      title="Tablet (768px)"
                    >
                      <Tablet className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setViewport("mobile")}
                      className={`p-1.5 rounded transition-colors cursor-pointer ${viewport === "mobile" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
                      title="Mobile (375px)"
                    >
                      <Smartphone className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={copyCurrentExport}
                      className="flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-mono hover:bg-muted cursor-pointer transition-all active:scale-95"
                    >
                      {copiedCode ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedCode ? "Скопировано!" : "Копировать"}</span>
                    </button>
                    <button
                      onClick={() => {
                        if (exportFormat === "component") {
                          downloadFile(`${selectedComp}.tsx`, manifestCode);
                        } else if (exportFormat === "page") {
                          downloadFile(`${selectedComp}-page.tsx`, generatedPageCode);
                        } else if (exportFormat === "css") {
                          downloadFile(`amantle-tokens.css`, generatedCssTokens);
                        } else {
                          copyCli();
                        }
                      }}
                      className="flex items-center gap-1 rounded-lg bg-primary text-primary-foreground px-2.5 py-1 text-xs font-semibold hover:bg-primary/90 cursor-pointer transition-all active:scale-95"
                    >
                      <Download className="h-3 w-3" />
                      <span>Скачать файл</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Viewport Frame or Export Panel */}
              {activeTab === "preview" ? (
                <div
                  style={containerStyle}
                  data-theme={activeTheme}
                  data-style={designStyle}
                  className="flex min-h-[460px] items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-muted/10 p-8 relative"
                >
                  <div
                    className={`w-full transition-all duration-300 flex items-center justify-center ${
                      viewport === "mobile"
                        ? "max-w-[375px] rounded-3xl border-4 border-foreground/20 p-6 shadow-2xl bg-card"
                        : viewport === "tablet"
                        ? "max-w-[768px] rounded-2xl border-2 border-foreground/15 p-6 shadow-xl bg-card"
                        : "max-w-full"
                    }`}
                  >
                    <div
                      className={`w-full flex items-center justify-center transition-all ${
                        designStyle === "neobrutalist"
                          ? "p-6 border-3 border-foreground shadow-[5px_5px_0px_0px_currentColor] rounded-[var(--radius)] bg-card"
                          : designStyle === "cyberglass"
                          ? "p-6 backdrop-blur-xl border border-primary/40 shadow-[0_0_25px_rgba(139,92,246,0.18)] rounded-[var(--radius)] bg-card/60"
                          : ""
                      }`}
                    >
                      <ComponentToRender />
                    </div>
                  </div>
                </div>
              ) : (
                /* Complete Export Panel */
                <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-sm min-h-[460px]">
                  {/* Export Format Selector */}
                  <div className="flex items-center gap-1.5 border-b border-border/50 pb-3">
                    <button
                      onClick={() => setExportFormat("component")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        exportFormat === "component"
                          ? "bg-primary text-primary-foreground shadow-xs font-bold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <FileCode className="h-3.5 w-3.5" />
                      <span>Исходник компонента (.tsx)</span>
                    </button>
                    <button
                      onClick={() => setExportFormat("page")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        exportFormat === "page"
                          ? "bg-primary text-primary-foreground shadow-xs font-bold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Готовая страница (Next.js)</span>
                    </button>
                    <button
                      onClick={() => setExportFormat("css")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        exportFormat === "css"
                          ? "bg-primary text-primary-foreground shadow-xs font-bold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Palette className="h-3.5 w-3.5" />
                      <span>CSS Токены</span>
                    </button>
                    <button
                      onClick={() => setExportFormat("cli")}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        exportFormat === "cli"
                          ? "bg-primary text-primary-foreground shadow-xs font-bold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Terminal className="h-3.5 w-3.5" />
                      <span>CLI установка</span>
                    </button>
                  </div>

                  {/* Code Viewer */}
                  <div className="flex-1 relative flex flex-col">
                    <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-1.5">
                      <span>
                        {exportFormat === "component"
                          ? `components/ui/${selectedComp}.tsx`
                          : exportFormat === "page"
                          ? `app/${selectedComp}/page.tsx`
                          : exportFormat === "css"
                          ? `styles/tokens.css`
                          : `Командная строка`}
                      </span>
                      <span>
                        Стиль: <strong className="text-foreground">{designStyle}</strong> | Радиус: <strong className="text-foreground">{activeRadius}</strong> | Тема: <strong className="text-foreground">{activeTheme}</strong>
                      </span>
                    </div>

                    <pre className="flex-1 overflow-x-auto rounded-xl bg-zinc-950 p-4 font-mono text-xs text-zinc-100 max-h-[380px] custom-scrollbar border border-zinc-800">
                      <code>
                        {exportFormat === "component"
                          ? loadingManifest
                            ? "// Загрузка манифеста компонента..."
                            : manifestCode
                          : exportFormat === "page"
                          ? generatedPageCode
                          : exportFormat === "css"
                          ? generatedCssTokens
                          : `# Установка компонента в ваш проект через AMANTLE CLI:
npx amantle-ui@latest add ${selectedComp}

# Или если CLI установлен глобально:
amantle add ${selectedComp}

# Установка нескольких компонентов сразу:
npx amantle-ui add ${selectedComp} button input card`}
                      </code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
