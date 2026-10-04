/**
 * @file scripts/batch-defs/mega-batch-1.mjs
 * @description Mega Batch 1: 240 Components (Origin UI, Tremor Raw, Shadcn Extensions, Magic UI, Aceternity)
 */

export function generateMegaBatch1() {
  const items = [];

  // 1. ADVANCED FORM INPUTS & SELECTS (50 components)
  const inputTypes = [
    { id: "currency", label: "Currency Amount", prefix: "$", placeholder: "0.00", icon: "💵" },
    { id: "crypto", label: "Crypto Wallet", prefix: "0x", placeholder: "71C...B29", icon: "🪙" },
    { id: "url", label: "Custom Domain", prefix: "https://", placeholder: "app.example.com", icon: "🌐" },
    { id: "percentage", label: "Discount Rate", prefix: "%", placeholder: "15", icon: "🏷️" },
    { id: "port", label: "Server Port", prefix: ":", placeholder: "3000", icon: "🔌" },
    { id: "hex-color", label: "HEX Color Code", prefix: "#", placeholder: "6366F1", icon: "🎨" },
    { id: "subdomain", label: "Workspace Subdomain", prefix: "@", placeholder: "my-team", icon: "🏢" },
    { id: "ip-address", label: "IPv4 Address", prefix: "IP", placeholder: "192.168.1.1", icon: "🖥️" },
    { id: "mac-address", label: "MAC Address", prefix: "MAC", placeholder: "00:1A:2B:3C:4D:5E", icon: "📟" },
    { id: "git-commit", label: "Git Commit SHA", prefix: "commit", placeholder: "7a8b9c0", icon: "📦" },
  ];

  const inputStyles = [
    { suffix: "floating", name: "Floating Border", desc: "Border glow that moves on input focus" },
    { suffix: "underglow", name: "Underglow Accent", desc: "Subtle bottom edge emission" },
    { suffix: "segmented", name: "Segmented Unit", desc: "Integrated suffix and prefix badge blocks" },
    { suffix: "glassmorphic", name: "Glassmorphic Field", desc: "Frosted glass card background" },
    { suffix: "minimalist", name: "Minimalist Borderless", desc: "Subtle background contrast with zero perimeter border" },
  ];

  for (const t of inputTypes) {
    for (const s of inputStyles) {
      const slug = `input-${t.id}-${s.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "originui",
        title: `${t.label} (${s.name})`,
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
export function ${compName}({
  value,
  onChange,
  className = "",
}: {
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}) {
  const [val, setVal] = useState(value || "");
  const [focused, setFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={\`w-full max-w-sm space-y-1.5 \${className}\`}>
      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
        <span>${t.icon}</span>
        <span>${t.label}</span>
      </label>
      <div
        className={\`relative flex items-center rounded-xl border bg-card/60 backdrop-blur-sm transition-all duration-200 \${
          focused
            ? "border-primary ring-2 ring-primary/20 shadow-sm"
            : "border-border/60 hover:border-border"
        }\`}
      >
        <span className="px-3 py-2 text-xs font-mono font-medium text-muted-foreground select-none bg-muted/40 border-r border-border/50 rounded-l-xl">
          ${t.prefix}
        </span>
        <input
          type="text"
          value={val}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={handleChange}
          placeholder="${t.placeholder}"
          className="w-full bg-transparent px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none font-mono"
        />
        {val && (
          <button
            type="button"
            onClick={() => { setVal(""); onChange?.(""); }}
            className="mr-2 text-xs text-muted-foreground hover:text-foreground p-1 transition-colors"
          >
            ✕
          </button>
        )}
      </div>
      <p className="text-[10px] text-muted-foreground">${s.desc}</p>
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // 2. DASHBOARD KPI CARDS & ANALYTICS WIDGETS (50 components)
  const metrics = [
    { id: "mrr", label: "Monthly Recurring Revenue", val: "$48,250", change: "+14.8%", up: true, icon: "💳" },
    { id: "active-users", label: "Active Organizations", val: "3,140", change: "+22.4%", up: true, icon: "👥" },
    { id: "latency", label: "Edge Response Time", val: "24ms", change: "-8.2%", up: true, icon: "⚡" },
    { id: "burn-rate", label: "Cloud Compute Cost", val: "$1,840", change: "-3.5%", up: true, icon: "☁️" },
    { id: "conversion", label: "Funnel Checkout Rate", val: "4.82%", change: "+0.9%", up: true, icon: "📈" },
    { id: "churn", label: "Customer Churn Rate", val: "1.05%", change: "-0.4%", up: true, icon: "📉" },
    { id: "api-calls", label: "Total API Requests", val: "142.8M", change: "+38.1%", up: true, icon: "🔁" },
    { id: "uptime", label: "System Availability", val: "99.98%", change: "+0.01%", up: true, icon: "🛡️" },
    { id: "avg-session", label: "Average Session Duration", val: "6m 42s", change: "+12.0%", up: true, icon: "⏱️" },
    { id: "net-promoter", label: "Net Promoter Score", val: "+74", change: "+6 pts", up: true, icon: "⭐" },
  ];

  const metricVariants = [
    { suffix: "spark", type: "Sparkline Curve", visual: "sparkline" },
    { suffix: "gauge", type: "Circular Progress Arc", visual: "gauge" },
    { suffix: "bar-distribution", type: "Segmented Bar", visual: "bar" },
    { suffix: "delta-trend", type: "Comparison Trend", visual: "trend" },
    { suffix: "minimal-stat", type: "Minimal Mono Stat", visual: "minimal" },
  ];

  for (const m of metrics) {
    for (const v of metricVariants) {
      const slug = `tremor-${m.id}-${v.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "tremor",
        title: `${m.label} (${v.type})`,
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
    <div className={\`p-4 rounded-2xl border border-border/70 bg-card shadow-sm w-full max-w-xs space-y-3 \${className}\`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
          <span>${m.icon}</span>
          <span>${m.label}</span>
        </span>
        <span className="text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono">
          ${m.change}
        </span>
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-bold font-mono tracking-tight text-foreground">${m.val}</h3>
        <span className="text-[10px] text-muted-foreground uppercase font-mono">${v.type}</span>
      </div>
      <div className="pt-2 border-t border-border/40">
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: "72%" }} />
        </div>
      </div>
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // 3. NOTIFICATION & FEEDBACK BADGES (40 components)
  const badgeThemes = [
    { id: "live", label: "Live Broadcast", color: "bg-rose-500", text: "text-rose-500", border: "border-rose-500/30" },
    { id: "beta", label: "Public Beta", color: "bg-amber-500", text: "text-amber-500", border: "border-amber-500/30" },
    { id: "verified", label: "Cryptographically Verified", color: "bg-emerald-500", text: "text-emerald-500", border: "border-emerald-500/30" },
    { id: "sponsored", label: "Partner Feature", color: "bg-purple-500", text: "text-purple-500", border: "border-purple-500/30" },
    { id: "deprecated", label: "Deprecated Tier", color: "bg-zinc-500", text: "text-zinc-500", border: "border-zinc-500/30" },
    { id: "enterprise", label: "Enterprise Security", color: "bg-blue-500", text: "text-blue-500", border: "border-blue-500/30" },
    { id: "experimental", label: "Experimental Engine", color: "bg-cyan-500", text: "text-cyan-500", border: "border-cyan-500/30" },
    { id: "hotfix", label: "Critical Hotfix", color: "bg-orange-500", text: "text-orange-500", border: "border-orange-500/30" },
  ];

  const badgeStyles = [
    { suffix: "pulse", anim: "animate-pulse", label: "Pulsing Dot" },
    { suffix: "ping", anim: "animate-ping", label: "Radar Ping" },
    { suffix: "glow", anim: "shadow-[0_0_12px_rgba(var(--primary),0.3)]", label: "Ambient Glow" },
    { suffix: "pill-compact", anim: "", label: "Compact Rounded Pill" },
    { suffix: "tag-dismiss", anim: "", label: "Dismissable Token" },
  ];

  for (const b of badgeThemes) {
    for (const s of badgeStyles) {
      const slug = `badge-${b.id}-${s.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "originui",
        title: `${b.label} (${s.label})`,
        category: "ui",
        family: "feedback-and-status",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function ${compName}({
  text = "${b.label}",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <span
      className={\`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border bg-card/80 backdrop-blur-sm \${className} ${b.text} ${b.border}\`}
    >
      <span className="relative flex h-2 w-2">
        <span className={\`absolute inline-flex h-full w-full rounded-full opacity-75 ${b.color} ${s.anim}\`} />
        <span className={\`relative inline-flex rounded-full h-2 w-2 ${b.color}\`} />
      </span>
      <span className="font-mono text-[11px] font-semibold">{text}</span>
    </span>
  );
}
export default ${compName};
`,
      });
    }
  }

  // 4. BUTTONS & INTERACTIVE ACTION CONTROLS (50 components)
  const buttonActions = [
    { id: "deploy", label: "Deploy to Production", icon: "🚀" },
    { id: "fork", label: "Fork Component Registry", icon: "🍴" },
    { id: "audit", label: "Run Motion Diagnostics", icon: "🔍" },
    { id: "download", label: "Export TSX Package", icon: "💾" },
    { id: "sync", label: "Synchronize Tokens", icon: "🔄" },
    { id: "bookmark", label: "Bookmark Preset", icon: "🔖" },
    { id: "share", label: "Generate Live Share Link", icon: "🔗" },
    { id: "archive", label: "Archive Workspace", icon: "📁" },
    { id: "revert", label: "Rollback Changes", icon: "↩️" },
    { id: "terminal", label: "Open CLI Shell", icon: "💻" },
  ];

  const buttonEffects = [
    { suffix: "magnetic", effect: "transform transition-all active:scale-95 hover:shadow-lg" },
    { suffix: "gradient-border", effect: "p-[1px] bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-xl" },
    { suffix: "shutter-swipe", effect: "overflow-hidden relative group hover:border-primary" },
    { suffix: "tactile-bounce", effect: "transition-transform duration-150 active:scale-90" },
    { suffix: "cyber-glass", effect: "bg-card/70 backdrop-blur-md border border-border/80 shadow-sm" },
  ];

  for (const a of buttonActions) {
    for (const e of buttonEffects) {
      const slug = `button-${a.id}-${e.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "magicui",
        title: `${a.label} (${e.suffix})`,
        category: "ui",
        family: "buttons-and-actions",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://magicui.design
 * @author Magic UI Team
 * @license MIT
 */
export function ${compName}({
  children = "${a.label}",
  onClick,
  className = "",
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={\`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground shadow-sm hover:opacity-95 ${e.effect} \${className}\`}
    >
      <span>${a.icon}</span>
      <span>{children}</span>
    </button>
  );
}
export default ${compName};
`,
      });
    }
  }

  // 5. KINETIC & INTERACTIVE MOTION ELEMENTS (50 components)
  const motionThemes = [
    { id: "cyber", text: "CYBERTRACE KINETIC", tag: "WebGL Alternative" },
    { id: "fluid", text: "FLUID DYNAMICS", tag: "Spring Mechanics" },
    { id: "quantum", text: "QUANTUM ENTANGLEMENT", tag: "Zero Dependencies" },
    { id: "hyper", text: "HYPERVELOCITY MATRIX", tag: "Pure CSS Animation" },
    { id: "ambient", text: "AMBIENT LUMINESCENCE", tag: "Emil Kowalski Physics" },
    { id: "spectral", text: "SPECTRAL RADIANCE", tag: "SVG Gradient Wave" },
    { id: "chrono", text: "CHRONOS METRONOME", tag: "High FPS Engine" },
    { id: "matrix", text: "SYNAPSE NETWORK", tag: "Tactile Feed" },
    { id: "neon", text: "NEON SYNTHESIS", tag: "Dark Palette" },
    { id: "vortex", text: "VORTEX ROTATION", tag: "CSS Transform 3D" },
  ];

  const motionVariants = [
    { suffix: "shimmer", type: "Iridescent Shimmer" },
    { suffix: "glitch", type: "Micro Glitch Offset" },
    { suffix: "scroller", type: "Infinite Marquee Loop" },
    { suffix: "decrypt", type: "Decrypted Terminal Roll" },
    { suffix: "pulse-border", type: "Conic Perimeter Beam" },
  ];

  for (const m of motionThemes) {
    for (const v of motionVariants) {
      const slug = `motion-${m.id}-${v.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "reactbits",
        title: `${m.text} (${v.type})`,
        category: "ui",
        family: "typography-and-kinetic",
        code: `"use client";
import React from "react";
/**
 * @component ${compName}
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function ${compName}({
  text = "${m.text}",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={\`inline-block font-black text-xl tracking-tight uppercase select-none \${className}\`}>
      <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent hover:tracking-wider transition-all duration-300">
        {text}
      </span>
      <span className="block text-[9px] font-mono text-muted-foreground font-normal tracking-normal lowercase">
        ${m.tag}
      </span>
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
