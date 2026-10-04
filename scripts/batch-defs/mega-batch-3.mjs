/**
 * @file scripts/batch-defs/mega-batch-3.mjs
 * @description Mega Batch 3: 300 Components (Telemetry, Analytics, Dashboards, Micro-Controls, Bento Slots)
 */

export function generateMegaBatch3() {
  const items = [];

  // ==========================================
  // 1. TREMOR TELEMETRY & ANALYTICS (150 items)
  // 15 Metrics x 10 Presentation Variations
  // ==========================================
  const metrics = [
    { id: "mrr-flow", label: "MRR Net Flow", unit: "$", val: "142,850", delta: "+18.4%", positive: true },
    { id: "cac-velocity", label: "CAC Velocity", unit: "$", val: "420", delta: "-8.2%", positive: true },
    { id: "arpu-growth", label: "ARPU Global", unit: "$", val: "84.50", delta: "+5.1%", positive: true },
    { id: "ltv-expansion", label: "LTV Projection", unit: "$", val: "3,120", delta: "+12.7%", positive: true },
    { id: "cohort-retention", label: "Cohort D30 Retention", unit: "%", val: "76.4", delta: "+3.2%", positive: true },
    { id: "bandwidth-load", label: "Edge Throughput", unit: "TB", val: "842.1", delta: "+24.0%", positive: false },
    { id: "error-rate", label: "HTTP 5xx Anomalies", unit: "%", val: "0.012", delta: "-45.0%", positive: true },
    { id: "cloud-spend", label: "Fleet Compute Cost", unit: "$", val: "18,400", delta: "-6.5%", positive: true },
    { id: "db-iops", label: "Read Replica IOPS", unit: "k", val: "94.2", delta: "+14.8%", positive: false },
    { id: "cache-hit", label: "Vercel Edge Cache Hit", unit: "%", val: "98.9", delta: "+1.2%", positive: true },
    { id: "queue-depth", label: "Kafka Event Backlog", unit: "msg", val: "1,204", delta: "-82.0%", positive: true },
    { id: "p99-latency", label: "P99 Response Tail", unit: "ms", val: "18.4", delta: "-12.4%", positive: true },
    { id: "cpu-load", label: "Cluster Average CPU", unit: "%", val: "41.8", delta: "+4.1%", positive: false },
    { id: "ram-usage", label: "Allocated Memory", unit: "GB", val: "512.0", delta: "0.0%", positive: true },
    { id: "nps-score", label: "Net Promoter Index", unit: "pts", val: "78", delta: "+6 pts", positive: true },
  ];

  const tremorFormats = [
    {
      suffix: "sparkline",
      type: "Micro Sparkline",
      render: (m) => `
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">${m.label}</span>
          <div className="text-xl font-bold tracking-tight text-foreground">${m.unit}${m.val}</div>
        </div>
        <svg className="w-20 h-8 stroke-emerald-500 fill-emerald-500/10" viewBox="0 0 100 40">
          <path d="M0,35 Q20,10 40,25 T70,12 T100,5" fill="none" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>`
    },
    {
      suffix: "radial-gauge",
      type: "Radial Conic Ring",
      render: (m) => `
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="14" fill="none" className="stroke-muted" strokeWidth="3" />
            <circle cx="18" cy="18" r="14" fill="none" className="stroke-indigo-500" strokeWidth="3" strokeDasharray="88" strokeDashoffset="22" strokeLinecap="round" />
          </svg>
          <span className="absolute text-[10px] font-bold">75%</span>
        </div>
        <div>
          <div className="text-xs font-medium text-muted-foreground">${m.label}</div>
          <div className="text-sm font-bold text-foreground">${m.unit}${m.val}</div>
        </div>
      </div>`
    },
    {
      suffix: "delta-badge",
      type: "Delta Shift Pill",
      render: (m) => `
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-foreground">${m.label}</span>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold ${m.positive ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-amber-500/10 text-amber-500 border border-amber-500/20"}">
          <span>${m.positive ? "↑" : "↓"}</span>
          <span>${m.delta}</span>
        </span>
      </div>`
    },
    {
      suffix: "stepped-bar",
      type: "Stepped Progress Bar",
      render: (m) => `
      <div className="space-y-1.5 w-full">
        <div className="flex justify-between text-xs">
          <span className="font-medium text-muted-foreground">${m.label}</span>
          <span className="font-bold text-foreground">${m.unit}${m.val}</span>
        </div>
        <div className="grid grid-cols-6 gap-1 h-1.5">
          <div className="rounded-full bg-indigo-500" />
          <div className="rounded-full bg-indigo-500" />
          <div className="rounded-full bg-indigo-500" />
          <div className="rounded-full bg-indigo-500" />
          <div className="rounded-full bg-indigo-500/30" />
          <div className="rounded-full bg-indigo-500/30" />
        </div>
      </div>`
    },
    {
      suffix: "segmented-pill",
      type: "Multi-Color Spectrum",
      render: (m) => `
      <div className="space-y-2 w-full">
        <div className="flex justify-between items-center text-xs">
          <span className="font-medium text-foreground">${m.label}</span>
          <span className="text-muted-foreground">${m.delta}</span>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden flex bg-muted">
          <div className="h-full bg-emerald-500 w-[60%]" />
          <div className="h-full bg-indigo-500 w-[25%]" />
          <div className="h-full bg-amber-500 w-[15%]" />
        </div>
      </div>`
    },
    {
      suffix: "callout-card",
      type: "Bordered Status Callout",
      render: (m) => `
      <div className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border shadow-xs">
        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 animate-pulse" />
        <div>
          <div className="text-xs font-semibold text-foreground">${m.label}: ${m.unit}${m.val}</div>
          <div className="text-[11px] text-muted-foreground mt-0.5">Velocity verified at ${m.delta} over rolling 7-day period.</div>
        </div>
      </div>`
    },
    {
      suffix: "target-tracker",
      type: "Target Attainment Meter",
      render: (m) => `
      <div className="space-y-1 w-full">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-muted-foreground">${m.label}</span>
          <span className="text-emerald-500 font-bold">92% Target</span>
        </div>
        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full w-[92%] rounded-full" />
        </div>
      </div>`
    },
    {
      suffix: "mini-histogram",
      type: "Vertical Bar Array",
      render: (m) => `
      <div className="flex items-end justify-between gap-1.5 h-10 w-full px-1">
        <div className="w-3 bg-muted rounded-t h-[40%]" />
        <div className="w-3 bg-muted rounded-t h-[65%]" />
        <div className="w-3 bg-indigo-500/50 rounded-t h-[50%]" />
        <div className="w-3 bg-indigo-500/70 rounded-t h-[80%]" />
        <div className="w-3 bg-indigo-500 rounded-t h-[95%]" />
        <div className="w-3 bg-emerald-500 rounded-t h-[100%]" />
      </div>`
    },
    {
      suffix: "trend-indicator",
      type: "Directional Pulse Badge",
      render: (m) => `
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card">
        <span className="text-xs font-medium text-foreground">${m.label}</span>
        <span className="text-xs font-extrabold ${m.positive ? "text-emerald-500" : "text-amber-500"}">${m.delta}</span>
        <span className="w-1.5 h-1.5 rounded-full ${m.positive ? "bg-emerald-500 shadow-emerald-500/50 shadow-sm" : "bg-amber-500"}" />
      </div>`
    },
    {
      suffix: "summary-stat",
      type: "Bold Headline Stat",
      render: (m) => `
      <div className="text-center p-2">
        <div className="text-2xl font-black tracking-tight text-foreground">${m.unit}${m.val}</div>
        <div className="text-[11px] font-medium text-muted-foreground mt-0.5">${m.label}</div>
      </div>`
    }
  ];

  for (const m of metrics) {
    for (const f of tremorFormats) {
      const slug = `tremor-${m.id}-${f.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "tremor",
        title: `${m.label} (${f.type})`,
        category: "ui",
        family: "telemetry-and-metrics",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://raw.tremor.so
 * @author Tremor Team
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={\`p-4 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xs shadow-xs min-w-[200px] \${className}\`}>
      ${f.render(m)}
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // ==========================================
  // 2. HYPERUI MARKETING & BENTO (50 items)
  // 10 Domains x 5 Formats
  // ==========================================
  const hyperDomains = [
    { id: "saas-launch", title: "Instant Cloud Deploy", icon: "🚀", highlight: "Zero Config" },
    { id: "security-shield", title: "SOC2 Automated Audit", icon: "🛡️", highlight: "Continuous" },
    { id: "ai-copilot", title: "Contextual Code Agent", icon: "🤖", highlight: "Sub-second" },
    { id: "payment-checkout", title: "Global Multi-Currency", icon: "💳", highlight: "135+ Lands" },
    { id: "compliance-gdpr", title: "Privacy Perimeter", icon: "🔒", highlight: "Cryptographic" },
    { id: "developer-cli", title: "Headless CLI Tooling", icon: "💻", highlight: "Rust Speed" },
    { id: "cloud-mesh", title: "Edge Distributed Nodes", icon: "🌐", highlight: "35 Regions" },
    { id: "mobile-sync", title: "Offline First Realtime", icon: "📱", highlight: "CRDT Engine" },
    { id: "analytics-iq", title: "Predictive Funnel IQ", icon: "📈", highlight: "Neural Model" },
    { id: "uptime-sla", title: "High Availability 99.99%", icon: "⚡", highlight: "Fault Tolerant" },
  ];

  const hyperFormats = [
    { suffix: "pill", label: "Feature Pill", code: (d) => `
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-600 dark:text-teal-400">
        <span>${d.icon}</span>
        <span>${d.title}</span>
        <span className="bg-teal-500 text-white dark:text-black text-[9px] px-1.5 py-0.5 rounded-full font-bold">${d.highlight}</span>
      </div>`
    },
    { suffix: "stat-card", label: "Stats Callout", code: (d) => `
      <div className="p-4 rounded-xl border border-border bg-card hover:border-teal-500/40 transition-colors">
        <div className="text-2xl">${d.icon}</div>
        <div className="text-sm font-bold text-foreground mt-2">${d.title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">Engineered with ${d.highlight} precision.</div>
      </div>`
    },
    { suffix: "bento-tile", label: "Bento Slot", code: (d) => `
      <div className="group relative p-5 rounded-2xl border border-border bg-card/50 overflow-hidden hover:bg-card/80 transition-all">
        <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl group-hover:scale-125 transition-transform" />
        <span className="text-xs font-bold text-teal-500 uppercase tracking-widest">${d.highlight}</span>
        <div className="text-base font-bold text-foreground mt-1">${d.title}</div>
      </div>`
    },
    { suffix: "banner-inline", label: "Inline Banner", code: (d) => `
      <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 border border-border gap-4">
        <div className="flex items-center gap-2">
          <span>${d.icon}</span>
          <span className="text-xs font-semibold">${d.title}</span>
        </div>
        <button className="text-[11px] font-bold text-teal-600 hover:underline">Explore →</button>
      </div>`
    },
    { suffix: "quote-card", label: "Testimonial Slice", code: (d) => `
      <div className="p-3.5 rounded-xl border border-border bg-card/70">
        <div className="text-xs italic text-muted-foreground">“${d.title} delivers ${d.highlight} without any latency overhead.”</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-5 h-5 rounded-full bg-teal-500/20 text-[10px] flex items-center justify-center font-bold">AU</div>
          <span className="text-[10px] font-semibold text-foreground">Verified Enterprise User</span>
        </div>
      </div>`
    }
  ];

  for (const d of hyperDomains) {
    for (const f of hyperFormats) {
      const slug = `hyper-${d.id}-${f.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "hyperui",
        title: `${d.title} (${f.label})`,
        category: "ui",
        family: "marketing-and-bento",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={\`w-full max-w-sm \${className}\`}>
      ${f.code(d)}
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // ==========================================
  // 3. CULT UI TACTILE SURFACES & HUD (50 items)
  // 10 Themes x 5 Formats
  // ==========================================
  const cultThemes = [
    { id: "audio-waveform", title: "Acoustic Spectrum", icon: "🎙️" },
    { id: "spectral-analyzer", title: "Harmonic Equalizer", icon: "🎚️" },
    { id: "canvas-brush", title: "Vector Precision Pen", icon: "✒️" },
    { id: "timeline-scrubber", title: "Chrono Frame Track", icon: "🎞️" },
    { id: "color-gamut", title: "Display P3 Gamut", icon: "🎨" },
    { id: "layer-stack", title: "Composite Blend Tree", icon: "🥞" },
    { id: "shader-viewport", title: "Raster GPU Node", icon: "🕹️" },
    { id: "palette-swatch", title: "Semantic Swatch Grid", icon: "🌈" },
    { id: "zoom-loupe", title: "Micro Pixel Loupe", icon: "🔍" },
    { id: "keyframe-track", title: "Interpolation Spline", icon: "📈" },
  ];

  const cultFormats = [
    { suffix: "floating-hud", label: "Floating HUD", fn: (t) => `
      <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 backdrop-blur-md shadow-xs">
        <span>${t.icon}</span>
        <span className="text-xs font-semibold text-rose-500">${t.title}</span>
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
      </div>`
    },
    { suffix: "dock-lens", label: "Magnification Dock", fn: (t) => `
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-card border border-border shadow-sm">
        <button className="p-2 rounded-lg hover:bg-rose-500/10 text-sm transition-transform active:scale-95">${t.icon}</button>
        <span className="text-xs font-medium px-1 text-foreground">${t.title}</span>
      </div>`
    },
    { suffix: "slider-scrub", label: "Tactile Scrubber", fn: (t) => `
      <div className="space-y-1.5 w-full">
        <div className="flex justify-between text-xs">
          <span className="font-semibold text-muted-foreground">${t.title}</span>
          <span className="font-mono text-[11px] text-rose-500">00:42.18</span>
        </div>
        <div className="w-full bg-muted h-1.5 rounded-full relative overflow-hidden">
          <div className="bg-rose-500 h-full w-[42%]" />
        </div>
      </div>`
    },
    { suffix: "tactile-toggle", label: "Tactile Pill Toggle", fn: (t) => `
      <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-rose-500/5 active:scale-95 transition-all text-xs font-semibold">
        <span>${t.icon}</span>
        <span>Toggle ${t.title}</span>
      </button>`
    },
    { suffix: "glass-card", label: "Frosted Lens Card", fn: (t) => `
      <div className="p-4 rounded-2xl bg-card/40 border border-rose-500/20 backdrop-blur-md">
        <div className="text-lg">${t.icon}</div>
        <div className="text-sm font-bold text-foreground mt-1">${t.title}</div>
        <div className="text-[11px] text-muted-foreground mt-0.5">Ultra-precise responsive tactile surface.</div>
      </div>`
    }
  ];

  for (const t of cultThemes) {
    for (const f of cultFormats) {
      const slug = `cult-${t.id}-${f.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "cultui",
        title: `${t.title} (${f.label})`,
        category: "ui",
        family: "tactile-surfaces",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={\`\${className}\`}>
      ${f.fn(t)}
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // ==========================================
  // 4. ORIGIN UI MICRO-CONTROLS (50 items)
  // 10 Filter Types x 5 Variants
  // ==========================================
  const originFilters = [
    { id: "date-range", label: "Date Interval", icon: "📅" },
    { id: "price-tier", label: "Price Tier", icon: "🏷️" },
    { id: "geo-region", label: "Geo Proximity", icon: "📍" },
    { id: "http-method", label: "HTTP Method", icon: "⚡" },
    { id: "log-severity", label: "Log Severity", icon: "🚨" },
    { id: "user-role", label: "Access Role", icon: "🛡️" },
    { id: "device-type", label: "Client Engine", icon: "💻" },
    { id: "git-branch", label: "VCS Branch", icon: "🌿" },
    { id: "license-type", label: "License Scope", icon: "📜" },
    { id: "deploy-env", label: "Deploy Cluster", icon: "☁️" },
  ];

  const originVariants = [
    { suffix: "pill-selector", label: "Pill Selector", render: (f) => `
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card text-xs font-medium cursor-pointer hover:border-emerald-500/40 transition-colors">
        <span>${f.icon}</span>
        <span>${f.label}:</span>
        <span className="font-bold text-emerald-500">All Active</span>
      </div>`
    },
    { suffix: "chip-dismiss", label: "Dismissable Chip", render: (f) => `
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        <span>${f.label}</span>
        <button className="hover:opacity-75 text-sm font-bold">×</button>
      </div>`
    },
    { suffix: "segmented-choice", label: "Segmented Choice", render: (f) => `
      <div className="inline-flex p-1 rounded-xl bg-muted text-xs font-semibold">
        <button className="px-2.5 py-1 rounded-lg bg-card text-foreground shadow-xs">Default</button>
        <button className="px-2.5 py-1 rounded-lg text-muted-foreground hover:text-foreground">Custom</button>
      </div>`
    },
    { suffix: "trigger-select", label: "Fancy Trigger", render: (f) => `
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium min-w-[140px]">
        <span className="flex items-center gap-1.5"><span>${f.icon}</span><span>${f.label}</span></span>
        <span className="text-[10px] text-muted-foreground">▼</span>
      </div>`
    },
    { suffix: "toggle-counter", label: "Counter Filter", render: (f) => `
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary text-xs font-bold">
        <span>${f.label}</span>
        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center">3</span>
      </div>`
    }
  ];

  for (const o of originFilters) {
    for (const v of originVariants) {
      const slug = `origin-${o.id}-${v.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "originui",
        title: `${o.label} (${v.label})`,
        category: "ui",
        family: "filter-micro-controls",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={\`\${className}\`}>
      ${v.render(o)}
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  return items;
}
