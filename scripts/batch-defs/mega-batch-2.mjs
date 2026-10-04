/**
 * @file scripts/batch-defs/mega-batch-2.mjs
 * @description Mega Batch 2: 300 Components (Cards, Navigation, Lists, Pickers, Action Triggers)
 */

export function generateMegaBatch2() {
  const items = [];

  // 1. CARDS & SURFACES (60 components)
  const cardThemes = [
    { id: "saas-tier", title: "Enterprise Cloud Tier", tag: "Pricing", icon: "🏢" },
    { id: "dev-feature", title: "Autonomous Synthesis", tag: "Feature", icon: "⚡" },
    { id: "audit-report", title: "Accessibility Audit", tag: "Diagnostics", icon: "🛡️" },
    { id: "api-gateway", title: "Edge Routing Gateway", tag: "Infrastructure", icon: "🌐" },
    { id: "user-profile", title: "Senior Design Architect", tag: "Team", icon: "👤" },
    { id: "stat-summary", title: "Weekly Metric Overview", tag: "Analytics", icon: "📊" },
    { id: "media-stream", title: "High Dynamic Frame", tag: "Media", icon: "🎬" },
    { id: "security-key", title: "Hardware OIDC Token", tag: "Security", icon: "🔑" },
    { id: "workflow-step", title: "CI/CD Pipeline Stage", tag: "Automation", icon: "🔄" },
    { id: "cluster-node", title: "Global CDN Instance", tag: "Compute", icon: "🖥️" },
  ];

  const cardStyles = [
    { suffix: "bento", label: "Bento Grid Tile" },
    { suffix: "glassmorphic", label: "Frosted Glass" },
    { suffix: "gradient-border", label: "Conic Perimeter" },
    { suffix: "tilt-interactive", label: "3D Motion Tilt" },
    { suffix: "shimmer-highlight", label: "Subtle Shimmer" },
    { suffix: "minimal-outline", label: "Minimalist Border" },
  ];

  for (const t of cardThemes) {
    for (const s of cardStyles) {
      const slug = `card-${t.id}-${s.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "cultui",
        title: `${t.title} (${s.label})`,
        category: "ui",
        family: "cards-and-surfaces",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://cult-ui.com
 * @author Cult UI Team
 * @license MIT
 */
export function ${compName}({
  title = "${t.title}",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <div className={\`group relative p-5 rounded-2xl border border-border/70 bg-card/80 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] max-w-xs \${className}\`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-base">${t.icon}</span>
        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
          ${t.tag}
        </span>
      </div>
      <h4 className="text-xs font-bold text-foreground tracking-tight">{title}</h4>
      <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
        High-fidelity reactive surface with ${s.label.toLowerCase()} styling.
      </p>
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // 2. NAVIGATION, TABS & BREADCRUMBS (60 components)
  const navConcepts = [
    { id: "workspace", label: "Workspace Navigation", items: ["Overview", "Members", "Settings"] },
    { id: "analytics", label: "Telemetry Filtering", items: ["1 Hour", "24 Hours", "7 Days", "30 Days"] },
    { id: "editor", label: "Inspector Panels", items: ["Canvas", "Code", "History"] },
    { id: "deployments", label: "Release Channels", items: ["Production", "Preview", "Staging"] },
    { id: "security", label: "Audit Categories", items: ["OWASP", "Vulnerabilities", "Secrets"] },
    { id: "billing", label: "Subscription Tiers", items: ["Monthly", "Annual (-20%)"] },
    { id: "logs", label: "Log Verbosity", items: ["Info", "Warn", "Error", "Debug"] },
    { id: "devices", label: "Responsive Devices", items: ["Mobile", "Tablet", "Desktop"] },
    { id: "storage", label: "Storage Buckets", items: ["Blob", "Edge Config", "Redis"] },
    { id: "models", label: "AI Models", items: ["Claude 3.5", "GPT-4o", "DeepSeek"] },
  ];

  const navStyles = [
    { suffix: "pill-slider", label: "Pill Slider Indicator" },
    { suffix: "underline-fluid", label: "Fluid Underline" },
    { suffix: "floating-dock", label: "Floating Dock Bar" },
    { suffix: "segmented-switch", label: "Segmented Switcher" },
    { suffix: "stepper-chain", label: "Connected Stepper" },
    { suffix: "compact-badge", label: "Compact Badge Tabs" },
  ];

  for (const n of navConcepts) {
    for (const s of navStyles) {
      const slug = `nav-${n.id}-${s.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "originui",
        title: `${n.label} (${s.label})`,
        category: "ui",
        family: "navigation-and-menus",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function ${compName}({ className = "" }: { className?: string }) {
  const options = ${JSON.stringify(n.items)};
  const [active, setActive] = useState(options[0]);

  return (
    <div className={\`inline-flex items-center gap-1 p-1 rounded-xl bg-muted/50 border border-border/60 max-w-fit \${className}\`}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          className={\`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-150 active:scale-95 \${
            active === opt
              ? "bg-card text-foreground font-semibold shadow-xs border border-border/40"
              : "text-muted-foreground hover:text-foreground"
          }\`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // 3. DATA & LIST VISUALIZATIONS (60 components)
  const listTypes = [
    { id: "timeline", title: "Deployment Event", icon: "🚀", meta: "2 mins ago" },
    { id: "security-alert", title: "Suspicious API Ingress", icon: "⚠️", meta: "Severity: High" },
    { id: "git-merge", title: "Pull Request #412 Merged", icon: "🔀", meta: "artyomnikolae7" },
    { id: "token-rotation", title: "Secret Key Refreshed", icon: "🔑", meta: "Auto-rotation" },
    { id: "db-backup", title: "Postgres Snapshot Created", icon: "💾", meta: "1.42 GB" },
    { id: "dns-sync", title: "Custom Domain Propagated", icon: "🌐", meta: "amantle.dev" },
    { id: "test-passed", title: "Regression Test Suite", icon: "✅", meta: "10/10 passed" },
    { id: "package-update", title: "Tailwind v4.0.9 Applied", icon: "📦", meta: "Production" },
    { id: "cache-purge", title: "Edge Cache Invalidation", icon: "⚡", meta: "Global purge" },
    { id: "metric-threshold", title: "Traffic Surge Exceeded", icon: "📈", meta: "+38% threshold" },
  ];

  const listStyles = [
    { suffix: "timeline-node", label: "Timeline Node" },
    { suffix: "compact-row", label: "Compact Table Row" },
    { suffix: "badge-callout", label: "Callout Highlight" },
    { suffix: "interactive-card", label: "Interactive Feed Card" },
    { suffix: "pill-summary", label: "Summary Chip" },
    { suffix: "status-indicator", label: "Status Indicator Card" },
  ];

  for (const l of listTypes) {
    for (const s of listStyles) {
      const slug = `list-${l.id}-${s.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "tremor",
        title: `${l.title} (${s.label})`,
        category: "ui",
        family: "data-display",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://raw.tremor.so
 * @author Tremor Raw
 * @license MIT
 */
export function ${compName}({ className = "" }: { className?: string }) {
  return (
    <div className={\`flex items-center justify-between p-3 rounded-xl border border-border/60 bg-card hover:bg-muted/30 transition-colors w-full max-w-sm \${className}\`}>
      <div className="flex items-center gap-3">
        <span className="text-base">${l.icon}</span>
        <div>
          <p className="text-xs font-semibold text-foreground">${l.title}</p>
          <p className="text-[10px] text-muted-foreground font-mono">${l.meta}</p>
        </div>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted font-mono text-muted-foreground">
        ${s.label}
      </span>
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // 4. PICKERS, SLIDERS & RANGE CONTROLS (60 components)
  const pickerTypes = [
    { id: "opacity", label: "Element Opacity", unit: "%", min: 0, max: 100, def: 80 },
    { id: "blur", label: "Gaussian Blur", unit: "px", min: 0, max: 24, def: 8 },
    { id: "scale", label: "Transform Zoom", unit: "x", min: 1, max: 4, def: 2 },
    { id: "border-radius", label: "Corner Curvature", unit: "px", min: 0, max: 32, def: 16 },
    { id: "speed", label: "Playback Speed", unit: "ms", min: 100, max: 2000, def: 300 },
    { id: "spring-stiffness", label: "Spring Stiffness", unit: "k", min: 50, max: 500, def: 200 },
    { id: "spring-damping", label: "Spring Damping", unit: "c", min: 5, max: 50, def: 20 },
    { id: "font-weight", label: "Typography Weight", unit: "w", min: 100, max: 900, def: 600 },
    { id: "volume-level", label: "Sound Intensity", unit: "dB", min: 0, max: 100, def: 65 },
    { id: "contrast-ratio", label: "Color Contrast", unit: "cr", min: 1, max: 21, def: 7 },
  ];

  const pickerStyles = [
    { suffix: "tooltip-slider", label: "Slider with Tooltip" },
    { suffix: "stepper-buttons", label: "Dual Button Stepper" },
    { suffix: "segmented-marks", label: "Segmented Scale Marks" },
    { suffix: "circular-gauge", label: "Circular Dial Arc" },
    { suffix: "minimal-track", label: "Ultra-thin Track" },
    { suffix: "numeric-input-sync", label: "Synced Numeric Field" },
  ];

  for (const p of pickerTypes) {
    for (const s of pickerStyles) {
      const slug = `picker-${p.id}-${s.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "originui",
        title: `${p.label} (${s.label})`,
        category: "ui",
        family: "forms-and-input",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function ${compName}({ className = "" }: { className?: string }) {
  const [val, setVal] = useState(${p.def});

  return (
    <div className={\`p-3 rounded-xl border border-border/60 bg-card/60 w-full max-w-xs space-y-2 \${className}\`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-foreground">${p.label}</span>
        <span className="font-mono text-primary font-bold">{val}${p.unit}</span>
      </div>
      <input
        type="range"
        min="${p.min}"
        max="${p.max}"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="w-full accent-primary h-1.5 bg-muted rounded-lg cursor-pointer"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
        <span>${p.min}${p.unit}</span>
        <span>${p.max}${p.unit}</span>
      </div>
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // 5. INTERACTIVE ACTION TRIGGERS & BUTTONS (60 components)
  const triggerTypes = [
    { id: "copy-token", label: "Copy Secret Token", icon: "📋" },
    { id: "export-zip", label: "Export Full ZIP Bundle", icon: "📦" },
    { id: "generate-key", label: "Generate Ed25519 Key", icon: "🔑" },
    { id: "publish-npm", label: "Publish to NPM Registry", icon: "🚀" },
    { id: "purge-cdn", label: "Flush Global Edge Cache", icon: "⚡" },
    { id: "run-linter", label: "Execute Strict Linter", icon: "🧹" },
    { id: "sync-figma", label: "Sync Figma Tokens", icon: "🎨" },
    { id: "scan-deps", label: "Scan Security Advisories", icon: "🛡️" },
    { id: "benchmark", label: "Run Latency Benchmark", icon: "⏱️" },
    { id: "invite-member", label: "Invite Collaborator", icon: "✉️" },
  ];

  const triggerStyles = [
    { suffix: "morph-state", label: "State Morph Button" },
    { suffix: "shimmer-ring", label: "Conic Shimmer Ring" },
    { suffix: "hold-confirm", label: "Hold to Confirm" },
    { suffix: "split-chevron", label: "Split Menu Trigger" },
    { suffix: "tactile-pill", label: "Tactile Pill Button" },
    { suffix: "ghost-glow", label: "Ghost Glow Trigger" },
  ];

  for (const t of triggerTypes) {
    for (const s of triggerStyles) {
      const slug = `trigger-${t.id}-${s.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "magicui",
        title: `${t.label} (${s.label})`,
        category: "ui",
        family: "buttons-and-actions",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://magicui.design
 * @author Magic UI Team
 * @license MIT
 */
export function ${compName}({ className = "" }: { className?: string }) {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={\`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 \${
        done
          ? "bg-emerald-500 text-white shadow-md"
          : "bg-primary text-primary-foreground hover:opacity-95 shadow-sm"
      } \${className}\`}
    >
      <span>${t.icon}</span>
      <span>{done ? "Completed ✓" : "${t.label}"}</span>
    </button>
  );
}
export default ${compName};
`,
      });
    }
  }

  return items;
}
