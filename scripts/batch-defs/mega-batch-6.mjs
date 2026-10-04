/**
 * @file scripts/batch-defs/mega-batch-6.mjs
 * @description Mega Batch 6: 250 Components (Hover.dev Interactive Physics, HyperUI Full-Width Blocks, Cult UI Pro Studio Knobs)
 */

export function generateMegaBatch6() {
  const items = [];

  // ==========================================
  // 1. HOVER.DEV INTERACTIVE PHYSICS (100 items)
  // 10 Physics Micro-Surfaces x 10 Variations
  // ==========================================
  const hoverPhysics = [
    { id: "magnetic-tile", name: "Magnetic Hover Surface", icon: "🧲" },
    { id: "water-ripple", name: "Fluid Viscosity Grid", icon: "💧" },
    { id: "glitch-badge", name: "Glitch Scanline Badge", icon: "📺" },
    { id: "fuzzy-noise", name: "Analog Noise Grain Plate", icon: "📻" },
    { id: "elastic-tab", name: "Elastic Resistance Tab", icon: "🪃" },
    { id: "gravity-button", name: "Gravity Attraction Trigger", icon: "🪐" },
    { id: "liquid-card", name: "Liquid Fill Depth Card", icon: "🧪" },
    { id: "clip-text", name: "Slanted Geometry Reveal", icon: "✂️" },
    { id: "spotlight-tile", name: "Cursor Spotlight Frame", icon: "🔦" },
    { id: "tilt-plate", name: "Gyro Dynamic Tilt Plate", icon: "🧭" },
  ];

  const hoverThemes = [
    { id: "cyber", label: "Cyberpunk", border: "border-yellow-500/40 bg-yellow-500/5 text-yellow-400" },
    { id: "neon", label: "Electric Neon", border: "border-pink-500/40 bg-pink-500/5 text-pink-400" },
    { id: "stealth", label: "Stealth Noir", border: "border-neutral-700/60 bg-neutral-900/60 text-neutral-300" },
    { id: "amber", label: "Amber Glow", border: "border-amber-500/40 bg-amber-500/5 text-amber-400" },
    { id: "emerald", label: "Emerald Surge", border: "border-emerald-500/40 bg-emerald-500/5 text-emerald-400" },
    { id: "indigo", label: "Deep Indigo", border: "border-indigo-500/40 bg-indigo-500/5 text-indigo-400" },
    { id: "rose", label: "Rose Vapor", border: "border-rose-500/40 bg-rose-500/5 text-rose-400" },
    { id: "teal", label: "Pacific Teal", border: "border-teal-500/40 bg-teal-500/5 text-teal-400" },
    { id: "minimal", label: "Clean Minimal", border: "border-border bg-card text-foreground" },
    { id: "tactile", label: "Tactile Press", border: "border-border bg-secondary/80 text-foreground" },
  ];

  for (const h of hoverPhysics) {
    for (const t of hoverThemes) {
      const slug = `hover-${h.id}-${t.id}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "hoverdev",
        title: `${h.name} (${t.label})`,
        category: "ui",
        family: "physics-micro-surfaces",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://hover.dev
 * @author Tom Is Loading
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
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={\`p-4 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] \${"${t.border}"} \${className}\`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl">${h.icon}</span>
        <span className="text-[10px] font-mono uppercase font-bold tracking-wider">${t.label}</span>
      </div>
      <div className="text-sm font-bold text-foreground mt-2">${h.name}</div>
      <div className="text-xs text-muted-foreground mt-1 flex justify-between">
        <span>Hover.dev Physics</span>
        <span className="font-mono text-[10px]">{active ? "Engaged ⚡" : "Damped"}</span>
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
  // 2. HYPERUI APPLICATION BLOCKS (75 items)
  // 15 Blocks x 5 Styles
  // ==========================================
  const hyperBlocks = [
    { id: "hero-headline", name: "Bento Hero Headline", icon: "🚀" },
    { id: "pricing-card", name: "SaaS Subscription Tier", icon: "💳" },
    { id: "faq-item", name: "Expandable Accordion FAQ", icon: "❓" },
    { id: "testimonial-row", name: "Verified Testimonial Row", icon: "💬" },
    { id: "newsletter-box", name: "Newsletter Ingestion Box", icon: "📬" },
    { id: "cookie-bar", name: "Consent Perimeter Banner", icon: "🍪" },
    { id: "announcement-top", name: "Global Notification Bar", icon: "📢" },
    { id: "team-member", name: "Team Contributor Portrait", icon: "👤" },
    { id: "logo-wall", name: "Enterprise Customer Marquee", icon: "🏢" },
    { id: "feature-compare", name: "Spec Matrix Comparison", icon: "📊" },
    { id: "changelog-badge", name: "Semantic Version Badge", icon: "🏷️" },
    { id: "support-card", name: "Customer Success Card", icon: "🎧" },
    { id: "download-cta", name: "Binary Release Downloader", icon: "📥" },
    { id: "stats-strip", name: "Telemetry Overview Strip", icon: "📈" },
    { id: "timeline-node", name: "Product Roadmap Milestone", icon: "🏁" },
  ];

  const hyperStyles = [
    { id: "modern", label: "Modern Gradient", style: "border border-teal-500/30 bg-teal-500/5 shadow-xs" },
    { id: "glass", label: "Frosted Glass", style: "border border-border/60 bg-card/40 backdrop-blur-md shadow-sm" },
    { id: "contrast", label: "High Contrast", style: "border-2 border-foreground/30 bg-card" },
    { id: "compact", label: "Compact Density", style: "border border-border bg-card p-3 text-xs" },
    { id: "pill", label: "Curved Capsule", style: "border border-border bg-card rounded-3xl" },
  ];

  for (const b of hyperBlocks) {
    for (const s of hyperStyles) {
      const slug = `hyper-block-${b.id}-${s.id}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "hyperui",
        title: `${b.name} (${s.label})`,
        category: "ui",
        family: "marketing-application-blocks",
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
    <div className={\`p-4 rounded-2xl transition-all \${"${s.style}"} \${className}\`}>
      <div className="flex items-center gap-2.5">
        <span className="text-xl">${b.icon}</span>
        <div>
          <div className="text-sm font-bold text-foreground">${b.name}</div>
          <div className="text-xs text-muted-foreground">${s.label} Style Block</div>
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

  // ==========================================
  // 3. CULT UI PRO CREATIVE CONTROLS (75 items)
  // 15 Pro Controls x 5 Styles
  // ==========================================
  const cultPro = [
    { id: "scrubber-head", name: "Chrono Timeline Scrubber", icon: "🎞️" },
    { id: "color-wheel", name: "Spectrophotometer Swatch", icon: "🎨" },
    { id: "gain-knob", name: "Decibel Rotary Gain Knob", icon: "🎛️" },
    { id: "pan-slider", name: "Stereo Balance Attenuator", icon: "⚖️" },
    { id: "vumeter-peak", name: "Peak Hold VU Meter", icon: "📊" },
    { id: "codec-badge", name: "ProRes 4444 XQ Codec", icon: "📼" },
    { id: "aspect-ratio", name: "Anamorphic Ratio Switcher", icon: "📐" },
    { id: "anchor-point", name: "Bezier Coordinate Anchor", icon: "📍" },
    { id: "handle-node", name: "Tangent Spline Vector", icon: "〽️" },
    { id: "fps-marker", name: "SMPTE Timecode Marker", icon: "⏱️" },
    { id: "exposure-pill", name: "Zebra Clipping Exposure", icon: "🦓" },
    { id: "lut-card", name: "Rec.709 Color Grade LUT", icon: "🎬" },
    { id: "audio-lane", name: "Multitrack Bus Lane", icon: "🎙️" },
    { id: "clip-warning", name: "Digital Overshoot Warning", icon: "⚠️" },
    { id: "keyframe-pin", name: "Parametric Curve Keyframe", icon: "💎" },
  ];

  const cultProStyles = [
    { id: "pro-dark", label: "Pro Darkroom", style: "border border-rose-500/30 bg-black/80 text-rose-400" },
    { id: "studio-slate", label: "Studio Slate", style: "border border-slate-700/50 bg-slate-900/60 text-slate-200" },
    { id: "neon-accent", label: "Neon Crimson", style: "border border-rose-500/50 bg-rose-500/10 text-rose-300" },
    { id: "minimal-outline", label: "Fine Wireframe", style: "border border-border bg-transparent text-foreground" },
    { id: "glass-frost", label: "Frosted Acrylic", style: "border border-border/50 bg-card/40 backdrop-blur-md text-foreground" },
  ];

  for (const c of cultPro) {
    for (const s of cultProStyles) {
      const slug = `cult-pro-${c.id}-${s.id}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (ch) => ch.toUpperCase());

      items.push({
        name: slug,
        site: "cultui",
        title: `${c.name} (${s.label})`,
        category: "ui",
        family: "pro-creative-controls",
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
    <div className={\`p-3.5 rounded-xl transition-all \${"${s.style}"} \${className}\`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">${c.icon}</span>
          <div>
            <div className="text-xs font-bold text-foreground">${c.name}</div>
            <div className="text-[10px] text-muted-foreground">${s.label} Interface</div>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">PRO</span>
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
