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
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { componentMap } from "@/lib/components-map";
import { ECOSYSTEMS_CONFIG, getComponentEcosystem } from "@/lib/ecosystems";
import registriesData from "@/_harvest/shadcnstudio-directory.json";

export default function StudioPage() {
  const componentKeys = React.useMemo(() => Object.keys(componentMap).sort(), []);
  const [selectedComp, setSelectedComp] = React.useState<string>("text-pressure");
  const [activeEcosystem, setActiveEcosystem] = React.useState<string>("all");
  const [viewport, setViewport] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [designStyle, setDesignStyle] = React.useState<"default" | "neobrutalist" | "cyberglass">("default");
  const [activeTheme, setActiveTheme] = React.useState<string>("violet");
  const [activeRadius, setActiveRadius] = React.useState<string>("0.5rem");
  const [activeTab, setActiveTab] = React.useState<"preview" | "code" | "directory">("preview");
  const [copiedCli, setCopiedCli] = React.useState(false);
  const [copiedCode, setCopiedCode] = React.useState(false);

  // Filter components by active ecosystem
  const filteredComponents = React.useMemo(() => {
    if (activeEcosystem === "all") return componentKeys;
    const eco = ECOSYSTEMS_CONFIG[activeEcosystem];
    if (!eco) return componentKeys;
    return componentKeys.filter((k) => eco.components.includes(k));
  }, [componentKeys, activeEcosystem]);

  // Ensure selected component is in filtered list
  React.useEffect(() => {
    if (!filteredComponents.includes(selectedComp) && filteredComponents.length > 0) {
      setSelectedComp(filteredComponents[0]);
    }
  }, [filteredComponents, selectedComp]);

  // Apply theme tokens to container
  const containerStyle = React.useMemo(() => {
    return {
      "--radius": activeRadius,
    } as React.CSSProperties;
  }, [activeRadius]);

  const ComponentToRender = componentMap[selectedComp] || componentMap["button"];
  const currentEco = getComponentEcosystem(selectedComp);

  const copyCli = () => {
    navigator.clipboard?.writeText(`npx amantle add ${selectedComp}`);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const copyTsxCode = () => {
    navigator.clipboard?.writeText(
      `import { ${selectedComp
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (s) => s.toUpperCase())} } from "@/registry/ui/${selectedComp}";\n\nexport default function Example() {\n  return <${selectedComp
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (s) => s.toUpperCase())} />;\n}`
    );
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
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
              <h1 className="text-xl font-bold tracking-tight">AMANTLE Studio Inspector</h1>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 font-semibold">
                shadcnstudio.dev clone
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Интерактивный инспектор и композер: живое переключение между 10+ экосистемами, 259+ компонентами, стилями и радиусами с 1-клик экспортом.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyCli}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-mono font-medium shadow-xs hover:bg-muted active:scale-95 transition-all"
            >
              {copiedCli ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedCli ? "Скопировано!" : `npx amantle add ${selectedComp}`}</span>
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
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
            >
              <Compass className="h-3.5 w-3.5" />
              <span>{activeTab === "directory" ? "Вернуться в студию" : "Открыть реестр библиотек"}</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveEcosystem("all")}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-all ${
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
                className={`shrink-0 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
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
                        className="text-primary hover:underline font-medium"
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
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Выбор компонента ({filteredComponents.length})
                  </label>
                  <select
                    value={selectedComp}
                    onChange={(e) => setSelectedComp(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
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
                      className={`rounded-lg py-1 text-[11px] font-semibold transition-all ${
                        designStyle === "default"
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      Default
                    </button>
                    <button
                      onClick={() => setDesignStyle("neobrutalist")}
                      className={`rounded-lg py-1 text-[11px] font-semibold transition-all ${
                        designStyle === "neobrutalist"
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      Brutalist
                    </button>
                    <button
                      onClick={() => setDesignStyle("cyberglass")}
                      className={`rounded-lg py-1 text-[11px] font-semibold transition-all ${
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
                        className={`flex-1 rounded-md border py-1 text-[10px] font-medium transition-colors ${
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
                    {[
                      { id: "zinc", c: "#71717a" },
                      { id: "violet", c: "#8b5cf6" },
                      { id: "blue", c: "#3b82f6" },
                      { id: "emerald", c: "#10b981" },
                      { id: "rose", c: "#f43f5e" },
                      { id: "amber", c: "#f59e0b" },
                    ].map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveTheme(p.id)}
                        className={`h-6 w-6 rounded-full border-2 transition-transform ${
                          activeTheme === p.id ? "scale-115 border-foreground shadow-xs" : "border-transparent opacity-75 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: p.c }}
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

            {/* Center Viewport Preview & Code */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-2 shadow-xs">
                {/* Mode Tabs */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                      activeTab === "preview" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Предпросмотр</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                      activeTab === "code" ? "bg-primary text-primary-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    <span>Код (TSX)</span>
                  </button>
                </div>

                {/* Viewport Width Controls */}
                <div className="flex items-center gap-1 rounded-lg border border-border/50 bg-muted/40 p-1">
                  <button
                    onClick={() => setViewport("desktop")}
                    className={`p-1.5 rounded transition-colors ${viewport === "desktop" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
                    title="Desktop (100%)"
                  >
                    <Monitor className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setViewport("tablet")}
                    className={`p-1.5 rounded transition-colors ${viewport === "tablet" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
                    title="Tablet (768px)"
                  >
                    <Tablet className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setViewport("mobile")}
                    className={`p-1.5 rounded transition-colors ${viewport === "mobile" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"}`}
                    title="Mobile (375px)"
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Viewport Frame */}
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
                  {activeTab === "preview" ? (
                    <div className="w-full flex items-center justify-center">
                      <ComponentToRender />
                    </div>
                  ) : (
                    <div className="w-full flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-muted-foreground">registry/ui/{selectedComp}.tsx</span>
                        <button
                          onClick={copyTsxCode}
                          className="flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-mono hover:bg-muted"
                        >
                          {copiedCode ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                          <span>{copiedCode ? "Скопировано!" : "Копировать TSX"}</span>
                        </button>
                      </div>
                      <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 font-mono text-xs text-zinc-100 max-h-[380px]">
                        <code>{`// 1. Установка компонента в ваш проект:
npx amantle add ${selectedComp}

// 2. Использование компонента:
import { ${selectedComp
                          .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
                          .replace(/^[a-z]/, (s) => s.toUpperCase())} } from "@/registry/ui/${selectedComp}";

export default function App() {
  return (
    <div className="p-8 flex items-center justify-center">
      <${selectedComp
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (s) => s.toUpperCase())} />
    </div>
  );
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
