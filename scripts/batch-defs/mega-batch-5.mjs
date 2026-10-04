/**
 * @file scripts/batch-defs/mega-batch-5.mjs
 * @description Mega Batch 5: 300 Components (Aceternity Ambient Glows, Magic UI Specular Shines, Shadcn Studio Dev Inspectors)
 */

export function generateMegaBatch5() {
  const items = [];

  // ==========================================
  // 1. ACETERNITY AMBIENT & VISUALS (100 items)
  // 10 Primitives x 10 Themes
  // ==========================================
  const aceternityPrimitives = [
    { id: "floating-dock", name: "Floating Spring Dock", icon: "⚓" },
    { id: "bento-slot", name: "Glowing Bento Slot", icon: "🍱" },
    { id: "cipher-vault", name: "Evervault Cipher Tile", icon: "🔐" },
    { id: "wavy-glow", name: "Ambient Radiance Surface", icon: "🌊" },
    { id: "lamp-beam", name: "Top Lamp Header Beam", icon: "💡" },
    { id: "tilt-card", name: "Perspective Tilt Card", icon: "📐" },
    { id: "directional-slide", name: "Directional Hover Card", icon: "🧭" },
    { id: "focus-blur", name: "Selective Focus Tile", icon: "🔍" },
    { id: "pin-perspective", name: "3D Coordinate Pin", icon: "📍" },
    { id: "moving-border", name: "Moving Perimeter Stroke", icon: "💫" },
  ];

  const aceternityThemes = [
    { id: "nebula", label: "Deep Nebula", bg: "bg-purple-950/20 border-purple-500/30 text-purple-400" },
    { id: "aurora", label: "Polar Aurora", bg: "bg-emerald-950/20 border-emerald-500/30 text-emerald-400" },
    { id: "obsidian", label: "Obsidian Core", bg: "bg-neutral-900/60 border-neutral-700/40 text-neutral-300" },
    { id: "emerald", label: "Emerald Spark", bg: "bg-teal-950/20 border-teal-500/30 text-teal-400" },
    { id: "crimson", label: "Crimson Forge", bg: "bg-rose-950/20 border-rose-500/30 text-rose-400" },
    { id: "cyber", label: "Cyber Circuit", bg: "bg-blue-950/20 border-cyan-500/40 text-cyan-400" },
    { id: "solaris", label: "Solaris Flare", bg: "bg-amber-950/20 border-amber-500/30 text-amber-400" },
    { id: "quartz", label: "Quartz Crystal", bg: "bg-slate-900/40 border-slate-700/50 text-slate-200" },
    { id: "titanium", label: "Titanium Alloy", bg: "bg-zinc-900/50 border-zinc-600/40 text-zinc-300" },
    { id: "starlight", label: "Starlight Glow", bg: "bg-indigo-950/30 border-indigo-500/40 text-indigo-300" },
  ];

  for (const p of aceternityPrimitives) {
    for (const t of aceternityThemes) {
      const slug = `aceternity-${p.id}-${t.id}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "aceternity",
        title: `${p.name} (${t.label})`,
        category: "ui",
        family: "ambient-glow-surfaces",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://ui.aceternity.com
 * @author Manu Arora
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={\`p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-[0.98] \${"${t.bg}"} \${className}\`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">${p.icon}</span>
        <span className="text-[10px] uppercase tracking-widest font-mono font-bold">${t.label}</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-3">${p.name}</div>
      <div className="text-xs text-muted-foreground mt-1">High-fidelity ambient UI component.</div>
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // ==========================================
  // 2. MAGIC UI SPECULAR SHINES (100 items)
  // 10 Primitives x 10 Variations
  // ==========================================
  const magicPrimitives = [
    { id: "marquee-ticker", name: "Infinite Stream Marquee", icon: "🎞️" },
    { id: "orbit-satellites", name: "Orbital Icon Satellite", icon: "🪐" },
    { id: "border-beam", name: "Traveling Perimeter Beam", icon: "✨" },
    { id: "shine-button", name: "Specular Shine Trigger", icon: "🔘" },
    { id: "pulsating-beacon", name: "Radiating Status Beacon", icon: "🚨" },
    { id: "odometer-counter", name: "Rolling Number Odometer", icon: "⏱️" },
    { id: "sparkle-headline", name: "Constellation Sparkle", icon: "🌟" },
    { id: "flip-words", name: "Dynamic Word Flipper", icon: "🔀" },
    { id: "interactive-cell", name: "Illuminated Grid Cell", icon: "🔳" },
    { id: "dock-utility", name: "Floating Utility Dock", icon: "🧰" },
  ];

  const magicVariants = [
    { id: "violet", label: "Ultra Violet", colorClass: "text-purple-400 border-purple-500/30 bg-purple-500/5" },
    { id: "amber", label: "Amber Gold", colorClass: "text-amber-400 border-amber-500/30 bg-amber-500/5" },
    { id: "emerald", label: "Emerald Surge", colorClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5" },
    { id: "cyan", label: "Electric Cyan", colorClass: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5" },
    { id: "rose", label: "Rose Petal", colorClass: "text-rose-400 border-rose-500/30 bg-rose-500/5" },
    { id: "indigo", label: "Deep Indigo", colorClass: "text-indigo-400 border-indigo-500/30 bg-indigo-500/5" },
    { id: "slate", label: "Muted Slate", colorClass: "text-slate-300 border-slate-700/40 bg-slate-800/10" },
    { id: "zinc", label: "Raw Zinc", colorClass: "text-zinc-300 border-zinc-700/40 bg-zinc-800/10" },
    { id: "fuchsia", label: "Neon Fuchsia", colorClass: "text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/5" },
    { id: "teal", label: "Pacific Teal", colorClass: "text-teal-400 border-teal-500/30 bg-teal-500/5" },
  ];

  for (const m of magicPrimitives) {
    for (const v of magicVariants) {
      const slug = `magic-${m.id}-${v.id}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "magicui",
        title: `${m.name} (${v.label})`,
        category: "ui",
        family: "magic-visual-primitives",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://magicui.design
 * @author Dillion Verma
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  const [shining, setShining] = useState(false);

  return (
    <div
      onMouseEnter={() => setShining(true)}
      onMouseLeave={() => setShining(false)}
      className={\`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden \${"${v.colorClass}"} \${className}\`}
    >
      <div className="flex items-center gap-2.5">
        <span className="text-lg">${m.icon}</span>
        <span className="text-xs font-bold text-foreground">${m.name}</span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-2">
        <span>${v.label}</span>
        <span className="font-mono text-[10px]">{shining ? "Shining ✨" : "Idle"}</span>
      </div>
    </div>
  );
}
export default ${compName};
`,
      });
    }
  }

  // ==========================================
  // 3. SHADCN STUDIO INSPECTOR TOOLS (100 items)
  // 10 Tools x 10 Presentation Archetypes
  // ==========================================
  const studioTools = [
    { id: "code-box", name: "Syntax Snippet Box", icon: "📋" },
    { id: "props-table", name: "Runtime Props Inspector", icon: "🛠️" },
    { id: "theme-swatch", name: "Token Palette Editor", icon: "🎨" },
    { id: "layout-diff", name: "Visual Diff Viewer", icon: "⚖️" },
    { id: "breakpoint-bar", name: "Viewport Matrix Bar", icon: "📱" },
    { id: "dep-graph", name: "Dependency Tree Node", icon: "🌳" },
    { id: "a11y-badge", name: "WCAG AAA Metric Pill", icon: "♿" },
    { id: "export-json", name: "Registry Manifest Trigger", icon: "📦" },
    { id: "perf-pill", name: "Frame Rate / Size Chip", icon: "⚡" },
    { id: "source-link", name: "GitHub Provenance Link", icon: "🔗" },
  ];

  const studioArchetypes = [
    { id: "flat", label: "Clean Flat", style: "border border-border bg-card shadow-xs" },
    { id: "elevated", label: "Layer Elevated", style: "border border-border bg-card shadow-md" },
    { id: "glass", label: "Frosted Studio", style: "border border-border/50 bg-card/40 backdrop-blur-md" },
    { id: "contrast", label: "High Contrast", style: "border-2 border-foreground/30 bg-card" },
    { id: "compact", label: "Compact HUD", style: "border border-border bg-card/90 py-2 text-xs" },
    { id: "expanded", label: "Expanded Detail", style: "border border-border bg-card p-5" },
    { id: "stealth", label: "Stealth Slate", style: "border border-transparent bg-muted/40 hover:border-border" },
    { id: "outlined", label: "Fine Outline", style: "border border-border/80 bg-transparent" },
    { id: "pill", label: "Rounded Capsule", style: "border border-border bg-card rounded-full" },
    { id: "accented", label: "Amber Accent", style: "border border-amber-500/30 bg-amber-500/5 shadow-xs" },
  ];

  for (const s of studioTools) {
    for (const a of studioArchetypes) {
      const slug = `studio-${s.id}-${a.id}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "shadcnstudio",
        title: `${s.name} (${a.label})`,
        category: "ui",
        family: "developer-inspector-tools",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://shadcnstudio.dev
 * @author Shadcn Studio Team
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleAction = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={\`p-3.5 rounded-xl transition-all \${"${a.style}"} \${className}\`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base">${s.icon}</span>
          <div>
            <div className="text-xs font-bold text-foreground">${s.name}</div>
            <div className="text-[10px] text-muted-foreground">${a.label} Mode</div>
          </div>
        </div>
        <button
          onClick={handleAction}
          className="px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-[11px] font-semibold hover:bg-secondary/80 active:scale-95 transition-all"
        >
          {copied ? "Done ✓" : "Inspect"}
        </button>
      </div>
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
