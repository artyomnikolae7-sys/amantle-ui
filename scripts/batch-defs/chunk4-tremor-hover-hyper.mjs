/**
 * Chunk 4: 27 Tremor Raw, Hover.dev & HyperUI Components
 */

export const CHUNK4_ITEMS = [
  // --- Tremor Raw (10) ---
  {
    name: "tremor-area-chart-kpi",
    site: "tremor",
    title: "Tremor Area KPI Card",
    code: `"use client";
import React from "react";
/**
 * @component TremorAreaChartKpi
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorAreaChartKpi({ className = "" }: { className?: string }) {
  return (
    <div className={\`p-5 rounded-2xl border border-border/70 bg-card shadow-sm w-full max-w-sm \${className}\`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs text-muted-foreground font-medium">Monthly Active Usage</p>
          <h3 className="text-2xl font-bold text-foreground mt-1 font-mono tracking-tight">142,850</h3>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
          ↑ 18.2%
        </span>
      </div>
      <div className="mt-4 h-16 w-full">
        <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0,25 Q 25,5 50,18 T 100,8 L 100,30 L 0,30 Z" fill="url(#areaGrad)" />
          <path d="M 0,25 Q 25,5 50,18 T 100,8" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
        </svg>
      </div>
    </div>
  );
}
export default TremorAreaChartKpi;
`,
  },
  {
    name: "tremor-bar-list",
    site: "tremor",
    title: "Tremor Bar List",
    code: `"use client";
import React from "react";
/**
 * @component TremorBarList
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorBarList({ className = "" }: { className?: string }) {
  const items = [
    { name: "/catalog/components", value: 4520, percent: 85 },
    { name: "/studio", value: 3120, percent: 62 },
    { name: "/templates/landing", value: 1840, percent: 38 },
  ];

  return (
    <div className={\`w-full max-w-sm space-y-3 p-4 rounded-xl border border-border/60 bg-card \${className}\`}>
      <p className="text-xs font-semibold text-foreground">Top Visited Routes</p>
      <div className="space-y-2">
        {items.map((i) => (
          <div key={i.name} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-foreground font-mono text-[11px] truncate max-w-[200px]">{i.name}</span>
              <span className="text-muted-foreground font-mono text-[11px]">{i.value.toLocaleString()}</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: \`\${i.percent}%\` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TremorBarList;
`,
  },
  {
    name: "tremor-spark-area",
    site: "tremor",
    title: "Tremor Spark Area",
    code: `"use client";
import React from "react";
/**
 * @component TremorSparkArea
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorSparkArea({ className = "" }: { className?: string }) {
  return (
    <div className={\`inline-flex items-center gap-3 px-3 py-2 rounded-xl border border-border/60 bg-card/80 \${className}\`}>
      <div>
        <p className="text-[10px] text-muted-foreground uppercase font-mono">Builds</p>
        <p className="text-xs font-bold text-foreground font-mono">1,402</p>
      </div>
      <div className="h-6 w-16">
        <svg viewBox="0 0 40 15" className="w-full h-full">
          <path d="M 0,10 L 8,4 L 16,9 L 24,2 L 32,7 L 40,3" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
        </svg>
      </div>
    </div>
  );
}
export default TremorSparkArea;
`,
  },
  {
    name: "tremor-tracker-status",
    site: "tremor",
    title: "Tremor Tracker Status",
    code: `"use client";
import React from "react";
/**
 * @component TremorTrackerStatus
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorTrackerStatus({ className = "" }: { className?: string }) {
  const blocks = Array.from({ length: 30 }, (_, i) => ({
    status: i === 14 ? "degraded" : i === 22 ? "outage" : "operational",
  }));

  const color = {
    operational: "bg-emerald-500",
    degraded: "bg-amber-500",
    outage: "bg-rose-500",
  };

  return (
    <div className={\`w-full max-w-sm space-y-2 p-4 rounded-xl border border-border/60 bg-card \${className}\`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-foreground">API System Uptime</span>
        <span className="text-emerald-500 font-mono text-[11px] font-bold">99.94%</span>
      </div>
      <div className="flex gap-1">
        {blocks.map((b, idx) => (
          <div
            key={idx}
            className={\`h-7 flex-1 rounded-sm transition-opacity hover:opacity-80 \${color[b.status]}\`}
            title={\`Day \${idx + 1}: \${b.status}\`}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
        <span>30 days ago</span>
        <span>Today</span>
      </div>
    </div>
  );
}
export default TremorTrackerStatus;
`,
  },
  {
    name: "tremor-badge-delta-pill",
    site: "tremor",
    title: "Tremor Badge Delta Pill",
    code: `"use client";
import React from "react";
/**
 * @component TremorBadgeDeltaPill
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorBadgeDeltaPill({
  value = "+24.8%",
  isPositive = true,
  className = "",
}: {
  value?: string;
  isPositive?: boolean;
  className?: string;
}) {
  return (
    <span
      className={\`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold font-mono border \${
        isPositive
          ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
          : "bg-rose-500/10 text-rose-500 border-rose-500/20"
      } \${className}\`}
    >
      <span>{isPositive ? "↑" : "↓"}</span>
      <span>{value}</span>
    </span>
  );
}
export default TremorBadgeDeltaPill;
`,
  },
  {
    name: "tremor-category-bar",
    site: "tremor",
    title: "Tremor Category Bar",
    code: `"use client";
import React from "react";
/**
 * @component TremorCategoryBar
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorCategoryBar({ className = "" }: { className?: string }) {
  return (
    <div className={\`w-full max-w-sm space-y-2 \${className}\`}>
      <div className="flex justify-between text-xs font-medium">
        <span className="text-muted-foreground">Storage Quota</span>
        <span className="text-foreground font-mono">78% used</span>
      </div>
      <div className="flex h-2.5 w-full rounded-full overflow-hidden gap-0.5 bg-muted p-0.5">
        <div className="h-full bg-primary rounded-l-full" style={{ width: "50%" }} title="Registry items (50%)" />
        <div className="h-full bg-cyan-400" style={{ width: "20%" }} title="Media assets (20%)" />
        <div className="h-full bg-amber-400" style={{ width: "8%" }} title="Logs (8%)" />
      </div>
    </div>
  );
}
export default TremorCategoryBar;
`,
  },
  {
    name: "tremor-legend-indicator",
    site: "tremor",
    title: "Tremor Legend Indicator",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component TremorLegendIndicator
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorLegendIndicator({ className = "" }: { className?: string }) {
  const [active, setActive] = useState<string[]>(["ui", "blocks"]);

  const items = [
    { id: "ui", label: "UI Primitives", color: "bg-primary" },
    { id: "blocks", label: "Page Blocks", color: "bg-cyan-400" },
    { id: "templates", label: "Templates", color: "bg-amber-400" },
  ];

  const toggle = (id: string) => {
    setActive((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className={\`flex items-center gap-3 \${className}\`}>
      {items.map((item) => {
        const isSelected = active.includes(item.id);
        return (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className={\`flex items-center gap-1.5 text-xs transition-opacity \${
              isSelected ? "opacity-100 font-medium text-foreground" : "opacity-40 text-muted-foreground"
            }\`}
          >
            <span className={\`h-2 w-2 rounded-full \${item.color}\`} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
export default TremorLegendIndicator;
`,
  },
  {
    name: "tremor-metric-grid",
    site: "tremor",
    title: "Tremor Metric Grid",
    code: `"use client";
import React from "react";
/**
 * @component TremorMetricGrid
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorMetricGrid({ className = "" }: { className?: string }) {
  const stats = [
    { label: "Total Stars", val: "14.2k", diff: "+12%" },
    { label: "Downloads", val: "89.4k", diff: "+28%" },
    { label: "Components", val: "361", diff: "+102" },
  ];

  return (
    <div className={\`grid grid-cols-3 gap-2 p-3 rounded-2xl border border-border/70 bg-card max-w-sm \${className}\`}>
      {stats.map((s) => (
        <div key={s.label} className="text-center p-2 rounded-xl bg-muted/40">
          <p className="text-[10px] text-muted-foreground uppercase font-mono">{s.label}</p>
          <p className="text-base font-bold text-foreground font-mono mt-0.5">{s.val}</p>
          <span className="text-[10px] font-semibold text-emerald-500 font-mono">{s.diff}</span>
        </div>
      ))}
    </div>
  );
}
export default TremorMetricGrid;
`,
  },
  {
    name: "tremor-stat-card-progress",
    site: "tremor",
    title: "Tremor Stat Progress Card",
    code: `"use client";
import React from "react";
/**
 * @component TremorStatCardProgress
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorStatCardProgress({ className = "" }: { className?: string }) {
  return (
    <div className={\`p-4 rounded-xl border border-border/60 bg-card max-w-xs space-y-3 \${className}\`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-foreground">Weekly Target</span>
        <span className="font-mono text-primary font-bold">84%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full" style={{ width: "84%" }} />
      </div>
      <p className="text-[11px] text-muted-foreground">303 of 361 automated components passed motion audit.</p>
    </div>
  );
}
export default TremorStatCardProgress;
`,
  },
  {
    name: "tremor-callout-metric",
    site: "tremor",
    title: "Tremor Callout Metric",
    code: `"use client";
import React from "react";
/**
 * @component TremorCalloutMetric
 * @source https://raw.tremor.so
 * @author Tremor
 * @license MIT
 */
export function TremorCalloutMetric({ className = "" }: { className?: string }) {
  return (
    <div className={\`p-3.5 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-3 max-w-sm \${className}\`}>
      <span className="text-base">⚡</span>
      <div>
        <h5 className="text-xs font-bold text-foreground">Zero Runtime Overhead</h5>
        <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
          Amantle components operate with zero heavy 3D canvas libraries for maximum 60fps throughput.
        </p>
      </div>
    </div>
  );
}
export default TremorCalloutMetric;
`,
  },

  // --- Hover.dev (9) ---
  {
    name: "hover-tilt-card",
    site: "hoverdev",
    title: "Hover Tilt Card",
    code: `"use client";
import React, { useRef, useState } from "react";
/**
 * @component HoverTiltCard
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverTiltCard({ className = "" }: { className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRot({ x: -(y / 8), y: x / 8 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      style={{
        transform: \`perspective(1000px) rotateX(\${rot.x}deg) rotateY(\${rot.y}deg)\`,
        transition: "transform 100ms ease-out",
      }}
      className={\`cursor-pointer rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card to-muted/50 p-6 shadow-xl max-w-xs select-none \${className}\`}
    >
      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-base mb-3">
        ◈
      </div>
      <h4 className="text-sm font-bold text-foreground">Perspective Tilt</h4>
      <p className="text-xs text-muted-foreground mt-1">3D motion tracking using vanilla CSS transform matrices.</p>
    </div>
  );
}
export default HoverTiltCard;
`,
  },
  {
    name: "hover-fuzzy-overlay",
    site: "hoverdev",
    title: "Hover Fuzzy Overlay",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component HoverFuzzyOverlay
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverFuzzyOverlay({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={\`relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 max-w-xs transition-all duration-300 \${className}\`}
    >
      <div
        className={\`absolute inset-0 bg-primary/10 transition-opacity duration-300 pointer-events-none \${
          hovered ? "opacity-100" : "opacity-0"
        }\`}
      />
      <h4 className="relative z-10 text-sm font-bold text-foreground">Retro Texture Glow</h4>
      <p className="relative z-10 text-xs text-muted-foreground mt-1">Ambient glow reaction on hover triggers.</p>
    </div>
  );
}
export default HoverFuzzyOverlay;
`,
  },
  {
    name: "hover-slide-tabs",
    site: "hoverdev",
    title: "Hover Slide Tabs",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component HoverSlideTabs
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverSlideTabs({ className = "" }: { className?: string }) {
  const [active, setActive] = useState("Design");
  const tabs = ["Design", "Code", "Motion", "Docs"];

  return (
    <div className={\`flex items-center gap-1 p-1 rounded-full border border-border/60 bg-muted/50 max-w-fit \${className}\`}>
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={\`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-200 \${
            active === t ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }\`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
export default HoverSlideTabs;
`,
  },
  {
    name: "hover-shutter-button",
    site: "hoverdev",
    title: "Hover Shutter Button",
    code: `"use client";
import React from "react";
/**
 * @component HoverShutterButton
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverShutterButton({ children = "Shutter Action", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button className={\`group relative overflow-hidden rounded-xl border border-primary bg-background px-5 py-2.5 text-xs font-semibold text-primary transition-all duration-300 active:scale-95 \${className}\`}>
      <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-200">{children}</span>
    </button>
  );
}
export default HoverShutterButton;
`,
  },
  {
    name: "hover-clip-text",
    site: "hoverdev",
    title: "Hover Clip Text",
    code: `"use client";
import React from "react";
/**
 * @component HoverClipText
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverClipText({ text = "KINETIC SYSTEM", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={\`group relative inline-block cursor-pointer font-black text-2xl tracking-tighter uppercase select-none \${className}\`}>
      <span className="text-foreground transition-colors duration-200 group-hover:text-primary">{text}</span>
    </div>
  );
}
export default HoverClipText;
`,
  },
  {
    name: "hover-gravity-button",
    site: "hoverdev",
    title: "Hover Gravity Button",
    code: `"use client";
import React, { useRef, useState } from "react";
/**
 * @component HoverGravityButton
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverGravityButton({ children = "Magnetic Spring", className = "" }: { children?: React.ReactNode; className?: string }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [trans, setTrans] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setTrans({ x, y });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTrans({ x: 0, y: 0 })}
      style={{
        transform: \`translate3d(\${trans.x}px, \${trans.y}px, 0)\`,
        transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      className={\`px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-md active:scale-90 \${className}\`}
    >
      {children}
    </button>
  );
}
export default HoverGravityButton;
`,
  },
  {
    name: "hover-liquid-card",
    site: "hoverdev",
    title: "Hover Liquid Card",
    code: `"use client";
import React from "react";
/**
 * @component HoverLiquidCard
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverLiquidCard({ className = "" }: { className?: string }) {
  return (
    <div className={\`group relative p-6 bg-card border border-border/70 rounded-2xl transition-all duration-500 hover:rounded-[2rem] max-w-xs shadow-sm hover:shadow-xl \${className}\`}>
      <h4 className="text-sm font-bold text-foreground">Fluid Curvature</h4>
      <p className="text-xs text-muted-foreground mt-1">Dynamic organic border-radius morph on hover states.</p>
    </div>
  );
}
export default HoverLiquidCard;
`,
  },
  {
    name: "hover-spotlight-border",
    site: "hoverdev",
    title: "Hover Spotlight Border",
    code: `"use client";
import React from "react";
/**
 * @component HoverSpotlightBorder
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverSpotlightBorder({ className = "" }: { className?: string }) {
  return (
    <div className={\`group relative rounded-2xl p-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent bg-[length:200%_auto] hover:animate-[spin_4s_linear_infinite] max-w-xs \${className}\`}>
      <div className="rounded-[14px] bg-card p-5">
        <h5 className="text-xs font-bold text-foreground">Perimeter Spotlight</h5>
        <p className="text-[11px] text-muted-foreground mt-1">Conic border animation triggered on card focus.</p>
      </div>
    </div>
  );
}
export default HoverSpotlightBorder;
`,
  },
  {
    name: "hover-glitch-border",
    site: "hoverdev",
    title: "Hover Glitch Border",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component HoverGlitchBorder
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverGlitchBorder({ className = "" }: { className?: string }) {
  const [glitch, setGlitch] = useState(false);

  return (
    <div
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
      className={\`p-4 rounded-xl border max-w-xs cursor-pointer transition-all \${
        glitch ? "border-cyan-400 shadow-[2px_2px_0px_#ec4899]" : "border-border/70 bg-card"
      } \${className}\`}
    >
      <p className="text-xs font-mono font-bold text-foreground">CYBER_TRACE // 0x49</p>
      <p className="text-[11px] text-muted-foreground mt-0.5">High frequency chromatic offset feedback.</p>
    </div>
  );
}
export default HoverGlitchBorder;
`,
  },

  // --- HyperUI / Float UI (8) ---
  {
    name: "hyper-pricing-badge",
    site: "hyperui",
    title: "HyperUI Pricing Badge",
    code: `"use client";
import React from "react";
/**
 * @component HyperPricingBadge
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperPricingBadge({ label = "MOST POPULAR", className = "" }: { label?: string; className?: string }) {
  return (
    <span className={\`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary text-primary-foreground shadow-md ring-2 ring-primary/20 \${className}\`}>
      ★ {label}
    </span>
  );
}
export default HyperPricingBadge;
`,
  },
  {
    name: "hyper-stats-pill",
    site: "hyperui",
    title: "HyperUI Stats Pill",
    code: `"use client";
import React from "react";
/**
 * @component HyperStatsPill
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperStatsPill({
  label = "Monthly Active Registries",
  count = "361",
  delta = "+38%",
  className = "",
}: {
  label?: string;
  count?: string;
  delta?: string;
  className?: string;
}) {
  return (
    <div className={\`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border/70 bg-card/90 shadow-sm \${className}\`}>
      <span className="text-xs font-bold text-foreground font-mono">{count}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-md font-mono">{delta}</span>
    </div>
  );
}
export default HyperStatsPill;
`,
  },
  {
    name: "hyper-feature-icon-card",
    site: "hyperui",
    title: "HyperUI Feature Icon Card",
    code: `"use client";
import React from "react";
/**
 * @component HyperFeatureIconCard
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperFeatureIconCard({ className = "" }: { className?: string }) {
  return (
    <div className={\`p-5 rounded-2xl border border-border/70 bg-card hover:border-primary/50 transition-colors duration-200 max-w-xs \${className}\`}>
      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-base mb-3">
        ⚡
      </div>
      <h4 className="text-sm font-bold text-foreground">Autonomous Synthesis</h4>
      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
        Zero manual code writing. Engine parses donor libraries and compiles TypeScript primitives.
      </p>
    </div>
  );
}
export default HyperFeatureIconCard;
`,
  },
  {
    name: "hyper-testimonial-quote",
    site: "hyperui",
    title: "HyperUI Testimonial Quote",
    code: `"use client";
import React from "react";
/**
 * @component HyperTestimonialQuote
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperTestimonialQuote({ className = "" }: { className?: string }) {
  return (
    <div className={\`p-4 rounded-xl border border-border/60 bg-muted/30 max-w-sm space-y-2 \${className}\`}>
      <div className="flex gap-1 text-amber-400 text-xs">★★★★★</div>
      <p className="text-xs italic text-foreground leading-relaxed">
        "AMANTLE UI combined all the disparate component registries into one unified design system with zero effort."
      </p>
      <div className="flex items-center gap-2 pt-1">
        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
          AL
        </div>
        <div>
          <p className="text-[11px] font-semibold text-foreground">Alex Lead</p>
          <p className="text-[10px] text-muted-foreground">Principal Architect</p>
        </div>
      </div>
    </div>
  );
}
export default HyperTestimonialQuote;
`,
  },
  {
    name: "hyper-newsletter-compact",
    site: "hyperui",
    title: "HyperUI Newsletter Compact",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component HyperNewsletterCompact
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperNewsletterCompact({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setSubscribed(true);
      }}
      className={\`flex items-center gap-1.5 p-1 rounded-xl border border-border/70 bg-card max-w-sm \${className}\`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your work email..."
        className="flex-1 px-3 py-1.5 text-xs bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs active:scale-95 transition-all"
      >
        {subscribed ? "Joined ✓" : "Subscribe"}
      </button>
    </form>
  );
}
export default HyperNewsletterCompact;
`,
  },
  {
    name: "hyper-banner-alert",
    site: "hyperui",
    title: "HyperUI Banner Alert",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component HyperBannerAlert
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperBannerAlert({ className = "" }: { className?: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className={\`flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-card border border-border/80 text-xs shadow-sm max-w-md \${className}\`}>
      <div className="flex items-center gap-2">
        <span className="text-primary font-bold">✨</span>
        <span className="text-foreground">Over 360+ components available in Registry v0.5.0!</span>
      </div>
      <button onClick={() => setVisible(false)} className="text-muted-foreground hover:text-foreground font-mono">
        ✕
      </button>
    </div>
  );
}
export default HyperBannerAlert;
`,
  },
  {
    name: "hyper-faq-card",
    site: "hyperui",
    title: "HyperUI FAQ Card",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component HyperFaqCard
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperFaqCard({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={\`cursor-pointer p-4 rounded-xl border border-border/70 bg-card transition-all max-w-sm select-none \${className}\`}
    >
      <div className="flex justify-between items-center">
        <h5 className="text-xs font-semibold text-foreground">Can I use components without heavy dependencies?</h5>
        <span className={\`text-xs transition-transform duration-200 \${open ? "rotate-180" : ""}\`}>▼</span>
      </div>
      {open && (
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed animate-in fade-in duration-200">
          Yes! All AMANTLE UI components are authored with pure CSS animations and zero heavy 3D canvas libraries.
        </p>
      )}
    </div>
  );
}
export default HyperFaqCard;
`,
  },
  {
    name: "hyper-avatar-stack",
    site: "hyperui",
    title: "HyperUI Avatar Stack",
    code: `"use client";
import React from "react";
/**
 * @component HyperAvatarStack
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperAvatarStack({ className = "" }: { className?: string }) {
  const users = ["bg-blue-500", "bg-purple-500", "bg-emerald-500", "bg-amber-500"];

  return (
    <div className={\`flex items-center -space-x-2 \${className}\`}>
      {users.map((c, i) => (
        <div
          key={i}
          className={\`h-8 w-8 rounded-full ring-2 ring-background flex items-center justify-center text-[10px] font-bold text-white transition-transform hover:-translate-y-1 hover:z-10 \${c}\`}
        >
          {String.fromCharCode(65 + i)}
        </div>
      ))}
      <div className="h-8 w-8 rounded-full ring-2 ring-background bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
        +99
      </div>
    </div>
  );
}
export default HyperAvatarStack;
`,
  },
];
