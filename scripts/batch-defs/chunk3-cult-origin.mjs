/**
 * Chunk 3: 20 Cult UI & Origin UI Components
 */

export const CHUNK3_ITEMS = [
  // --- Cult UI (10) ---
  {
    name: "dock-lens",
    site: "cultui",
    title: "Dock Lens",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component DockLens
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function DockLens({ className = "" }: { className?: string }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const items = [
    { label: "Home", icon: "⌂" },
    { label: "Search", icon: "🔍" },
    { label: "Analytics", icon: "📊" },
    { label: "Settings", icon: "⚙️" },
    { label: "Profile", icon: "👤" },
  ];

  return (
    <div className={\`flex items-end gap-2 p-2 rounded-2xl bg-card/80 backdrop-blur-md border border-border/60 shadow-xl \${className}\`}>
      {items.map((item, idx) => {
        const isHovered = hoveredIdx === idx;
        const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;
        const scale = isHovered ? "scale-125 -translate-y-2" : isNeighbor ? "scale-110 -translate-y-1" : "scale-100";

        return (
          <button
            key={item.label}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={\`group relative flex h-11 w-11 items-center justify-center rounded-xl bg-muted/60 hover:bg-primary/20 text-foreground transition-all duration-200 ease-out active:scale-95 \${scale}\`}
            title={item.label}
          >
            <span className="text-lg">{item.icon}</span>
            {isHovered && (
              <span className="absolute -top-8 px-2 py-0.5 text-[10px] font-medium bg-popover text-popover-foreground rounded-md shadow-sm border border-border/40 whitespace-nowrap animate-in fade-in zoom-in-90 duration-150">
                {item.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
export default DockLens;
`,
  },
  {
    name: "shimmer-text",
    site: "cultui",
    title: "Shimmer Text",
    code: `"use client";
import React from "react";
/**
 * @component ShimmerText
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function ShimmerText({ text = "CULT UI EXPERIENCE", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={\`inline-block font-bold tracking-wider text-xl uppercase select-none \${className}\`}>
      <span className="bg-gradient-to-r from-foreground/40 via-foreground via-50% to-foreground/40 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_infinite_linear]">
        {text}
      </span>
      <style jsx>{\`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      \`}</style>
    </div>
  );
}
export default ShimmerText;
`,
  },
  {
    name: "glow-border-card",
    site: "cultui",
    title: "Glow Border Card",
    code: `"use client";
import React from "react";
/**
 * @component GlowBorderCard
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function GlowBorderCard({
  title = "Ambient Card",
  description = "Fluid micro-interaction with subtle radial border illumination.",
  className = "",
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={\`group relative rounded-2xl p-[1px] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(var(--primary),0.3)] \${className}\`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-cyan-500/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative rounded-2xl bg-card p-6 border border-border/60 group-hover:border-transparent transition-colors">
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3 font-mono font-bold text-xs">
          01
        </div>
        <h4 className="font-semibold text-foreground text-sm tracking-tight">{title}</h4>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
export default GlowBorderCard;
`,
  },
  {
    name: "spotlight-button",
    site: "cultui",
    title: "Spotlight Button",
    code: `"use client";
import React, { useRef, useState } from "react";
/**
 * @component SpotlightButton
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function SpotlightButton({ children = "Explore Module", className = "" }: { children?: React.ReactNode; className?: string }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos((p) => ({ ...p, opacity: 0 }))}
      className={\`relative overflow-hidden rounded-xl border border-border/80 bg-background/80 px-5 py-2.5 text-xs font-semibold text-foreground shadow-sm transition-all duration-200 active:scale-95 hover:border-primary/50 \${className}\`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: pos.opacity,
          background: \`radial-gradient(120px circle at \${pos.x}px \${pos.y}px, rgba(var(--primary), 0.18), transparent 80%)\`,
        }}
      />
      <span className="relative z-10 flex items-center gap-1.5">{children}</span>
    </button>
  );
}
export default SpotlightButton;
`,
  },
  {
    name: "fluid-tabs",
    site: "cultui",
    title: "Fluid Tabs",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component FluidTabs
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function FluidTabs({ className = "" }: { className?: string }) {
  const tabs = ["Overview", "Integrations", "Activity", "Settings"];
  const [active, setActive] = useState("Overview");

  return (
    <div className={\`flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/50 max-w-fit \${className}\`}>
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={\`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 active:scale-95 \${
              isActive ? "bg-background text-foreground shadow-sm font-semibold" : "text-muted-foreground hover:text-foreground"
            }\`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
export default FluidTabs;
`,
  },
  {
    name: "interactive-avatar",
    site: "cultui",
    title: "Interactive Avatar",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component InteractiveAvatar
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function InteractiveAvatar({
  name = "Elena Rostova",
  role = "Staff Engineer",
  className = "",
}: {
  name?: string;
  role?: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={\`flex items-center gap-3 p-3 rounded-2xl border border-border/60 bg-card/80 transition-all duration-200 hover:shadow-md \${className}\`}
    >
      <div className="relative">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-cyan-400 flex items-center justify-center text-primary-foreground font-bold text-xs ring-2 ring-background">
          ER
        </div>
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background animate-pulse" />
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-semibold text-foreground">{name}</p>
          {active && <span className="text-[10px] text-primary font-mono">PRO</span>}
        </div>
        <p className="text-[11px] text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
export default InteractiveAvatar;
`,
  },
  {
    name: "stacked-modal",
    site: "cultui",
    title: "Stacked Modal Card",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component StackedModal
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function StackedModal({ className = "" }: { className?: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={\`relative cursor-pointer transition-transform duration-300 active:scale-95 \${className}\`}
    >
      {/* Background card */}
      <div
        className={\`absolute inset-x-2 -top-2 h-full rounded-2xl bg-muted/40 border border-border/40 transition-transform duration-300 \${
          expanded ? "-translate-y-2 scale-[1.02]" : "scale-95"
        }\`}
      />
      {/* Main card */}
      <div className="relative rounded-2xl bg-card p-5 border border-border/70 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Stacked Card</span>
          <span className="text-xs text-primary font-semibold">{expanded ? "Tap to fold" : "Tap to expand"}</span>
        </div>
        <p className="mt-2 text-xs font-medium text-foreground">Interactive layered visual container with spring hover shifts.</p>
      </div>
    </div>
  );
}
export default StackedModal;
`,
  },
  {
    name: "reveal-card",
    site: "cultui",
    title: "Reveal Card",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component RevealCard
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function RevealCard({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={\`relative w-full max-w-sm rounded-2xl border border-border/60 bg-card p-5 overflow-hidden transition-all duration-300 hover:shadow-lg \${className}\`}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold text-foreground">Smart Deployment Pipeline</h4>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">Active</span>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Automated edge routing and continuous token verification.</p>
      <div
        className={\`mt-3 pt-3 border-t border-border/50 flex items-center justify-between transition-all duration-300 \${
          hovered ? "opacity-100 max-h-16" : "opacity-0 max-h-0 pointer-events-none"
        }\`}
      >
        <span className="text-[11px] text-muted-foreground font-mono">SHA: 1e38b47</span>
        <button className="text-[11px] font-semibold text-primary hover:underline">View Trace →</button>
      </div>
    </div>
  );
}
export default RevealCard;
`,
  },
  {
    name: "tilt-media-card",
    site: "cultui",
    title: "Tilt Media Card",
    code: `"use client";
import React from "react";
/**
 * @component TiltMediaCard
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function TiltMediaCard({ className = "" }: { className?: string }) {
  return (
    <div className={\`group relative w-full max-w-xs rounded-2xl border border-border/60 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl \${className}\`}>
      <div className="h-32 w-full rounded-xl bg-gradient-to-br from-primary/20 via-primary/5 to-cyan-500/20 flex items-center justify-center border border-border/30">
        <div className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground font-bold shadow-md group-hover:scale-110 transition-transform">
          ▶
        </div>
      </div>
      <h5 className="mt-3 text-xs font-semibold text-foreground">Next-Gen Motion Design</h5>
      <p className="text-[11px] text-muted-foreground">Zero-dependency fluid interfaces</p>
    </div>
  );
}
export default TiltMediaCard;
`,
  },
  {
    name: "particle-banner",
    site: "cultui",
    title: "Particle Banner",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component ParticleBanner
 * @source https://cult-ui.com
 * @author Cult UI
 * @license MIT
 */
export function ParticleBanner({ className = "" }: { className?: string }) {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className={\`flex items-center justify-between gap-4 px-4 py-2.5 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm text-foreground \${className}\`}>
      <div className="flex items-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
        <p className="text-xs font-medium">
          New release <span className="font-semibold text-primary">v0.5.0</span> is now deployed.
        </p>
      </div>
      <button
        onClick={() => setClosed(true)}
        className="text-xs text-muted-foreground hover:text-foreground font-mono transition-colors"
      >
        ✕
      </button>
    </div>
  );
}
export default ParticleBanner;
`,
  },

  // --- Origin UI (10) ---
  {
    name: "origin-slider-stepped",
    site: "originui",
    title: "Origin Stepped Slider",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginSliderStepped
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginSliderStepped({ className = "" }: { className?: string }) {
  const [value, setValue] = useState(60);

  return (
    <div className={\`w-full max-w-xs space-y-2 \${className}\`}>
      <div className="flex justify-between text-xs font-medium">
        <span className="text-muted-foreground">Capacity Allocation</span>
        <span className="text-foreground font-semibold font-mono">{value}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="10"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-primary cursor-pointer h-1.5 bg-muted rounded-lg"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-mono px-0.5">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
}
export default OriginSliderStepped;
`,
  },
  {
    name: "origin-switch-icon",
    site: "originui",
    title: "Origin Switch Icon",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginSwitchIcon
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginSwitchIcon({ className = "" }: { className?: string }) {
  const [checked, setChecked] = useState(true);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => setChecked(!checked)}
      className={\`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none \${
        checked ? "bg-primary" : "bg-muted"
      } \${className}\`}
    >
      <span
        className={\`pointer-events-none flex h-6 w-6 transform items-center justify-center rounded-full bg-background shadow-md transition duration-200 ease-in-out text-[11px] \${
          checked ? "translate-x-5 text-primary" : "translate-x-0 text-muted-foreground"
        }\`}
      >
        {checked ? "✓" : "✕"}
      </span>
    </button>
  );
}
export default OriginSwitchIcon;
`,
  },
  {
    name: "origin-checkbox-tree",
    site: "originui",
    title: "Origin Checkbox Tree",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginCheckboxTree
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginCheckboxTree({ className = "" }: { className?: string }) {
  const [selected, setSelected] = useState<string[]>(["ui", "blocks"]);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const items = [
    { id: "ui", label: "UI Primitives (140)" },
    { id: "blocks", label: "Page Blocks (119)" },
    { id: "templates", label: "Full Templates (45)" },
  ];

  return (
    <div className={\`space-y-2 p-3 rounded-xl border border-border/60 bg-card/60 max-w-xs \${className}\`}>
      <p className="text-xs font-semibold text-foreground">Registry Categories</p>
      {items.map((item) => (
        <label key={item.id} className="flex items-center gap-2 cursor-pointer text-xs select-none">
          <input
            type="checkbox"
            checked={selected.includes(item.id)}
            onChange={() => toggle(item.id)}
            className="accent-primary h-4 w-4 rounded border-border"
          />
          <span className={selected.includes(item.id) ? "text-foreground font-medium" : "text-muted-foreground"}>
            {item.label}
          </span>
        </label>
      ))}
    </div>
  );
}
export default OriginCheckboxTree;
`,
  },
  {
    name: "origin-phone-input",
    site: "originui",
    title: "Origin Phone Input",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginPhoneInput
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginPhoneInput({ className = "" }: { className?: string }) {
  const [phone, setPhone] = useState("");

  return (
    <div className={\`flex items-center rounded-xl border border-border/70 bg-background overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary max-w-xs \${className}\`}>
      <span className="px-3 py-2 text-xs font-mono bg-muted/60 text-muted-foreground border-r border-border/60 select-none">
        +1 (US)
      </span>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="(555) 000-0000"
        className="w-full px-3 py-2 text-xs bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
    </div>
  );
}
export default OriginPhoneInput;
`,
  },
  {
    name: "origin-password-meter",
    site: "originui",
    title: "Origin Password Meter",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginPasswordMeter
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginPasswordMeter({ className = "" }: { className?: string }) {
  const [pass, setPass] = useState("");
  const score = Math.min(4, Math.floor(pass.length / 3));

  const colors = ["bg-muted", "bg-rose-500", "bg-amber-500", "bg-blue-500", "bg-emerald-500"];

  return (
    <div className={\`space-y-2 w-full max-w-xs \${className}\`}>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Enter strong password..."
        className="w-full px-3 py-2 rounded-xl text-xs border border-border/70 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <div className="flex gap-1.5 h-1">
        {[1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={\`flex-1 rounded-full transition-colors duration-300 \${
              score >= step ? colors[score] : "bg-muted"
            }\`}
          />
        ))}
      </div>
      <p className="text-[10px] text-muted-foreground font-mono">
        {score === 4 ? "Excellent security" : score >= 2 ? "Moderate" : "Weak"}
      </p>
    </div>
  );
}
export default OriginPasswordMeter;
`,
  },
  {
    name: "origin-badge-dot",
    site: "originui",
    title: "Origin Status Badge",
    code: `"use client";
import React from "react";
/**
 * @component OriginBadgeDot
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginBadgeDot({
  label = "Operational",
  variant = "emerald",
  className = "",
}: {
  label?: string;
  variant?: "emerald" | "amber" | "rose" | "blue";
  className?: string;
}) {
  const colorMap = {
    emerald: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    rose: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  };

  const dotMap = {
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
    blue: "bg-blue-500",
  };

  return (
    <span
      className={\`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border \${colorMap[variant]} \${className}\`}
    >
      <span className={\`h-1.5 w-1.5 rounded-full \${dotMap[variant]}\`} />
      {label}
    </span>
  );
}
export default OriginBadgeDot;
`,
  },
  {
    name: "origin-radio-cards",
    site: "originui",
    title: "Origin Radio Cards",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginRadioCards
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginRadioCards({ className = "" }: { className?: string }) {
  const [selected, setSelected] = useState("pro");

  const plans = [
    { id: "starter", name: "Starter", price: "$0", desc: "For hobby developers" },
    { id: "pro", name: "Pro", price: "$29", desc: "For high-scale apps" },
  ];

  return (
    <div className={\`grid grid-cols-2 gap-3 max-w-sm \${className}\`}>
      {plans.map((p) => {
        const isSel = selected === p.id;
        return (
          <div
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={\`cursor-pointer p-4 rounded-xl border text-left transition-all duration-200 active:scale-95 \${
              isSel ? "border-primary bg-primary/5 shadow-sm" : "border-border/60 hover:border-border"
            }\`}
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-foreground">{p.name}</span>
              <span className="text-xs font-bold text-primary font-mono">{p.price}</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">{p.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
export default OriginRadioCards;
`,
  },
  {
    name: "origin-file-drop",
    site: "originui",
    title: "Origin File Dropzone",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginFileDrop
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginFileDrop({ className = "" }: { className?: string }) {
  const [isDrag, setIsDrag] = useState(false);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDrag(true);
      }}
      onDragLeave={() => setIsDrag(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDrag(false);
      }}
      className={\`flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed transition-all duration-200 text-center cursor-pointer max-w-xs \${
        isDrag ? "border-primary bg-primary/10" : "border-border/70 hover:border-primary/50 bg-card/40"
      } \${className}\`}
    >
      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-foreground font-mono text-sm mb-2">
        ↑
      </div>
      <p className="text-xs font-medium text-foreground">Drop components or assets here</p>
      <p className="text-[10px] text-muted-foreground mt-0.5">Supports TSX, JSON, SVG up to 10MB</p>
    </div>
  );
}
export default OriginFileDrop;
`,
  },
  {
    name: "origin-number-stepper",
    site: "originui",
    title: "Origin Number Stepper",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginNumberStepper
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginNumberStepper({ min = 1, max = 99, className = "" }: { min?: number; max?: number; className?: string }) {
  const [count, setCount] = useState(1);

  return (
    <div className={\`inline-flex items-center rounded-xl border border-border/70 bg-card p-1 shadow-sm \${className}\`}>
      <button
        onClick={() => setCount((c) => Math.max(min, c - 1))}
        className="h-7 w-7 rounded-lg bg-muted/60 hover:bg-muted text-foreground flex items-center justify-center font-bold text-xs transition-transform active:scale-90"
      >
        −
      </button>
      <span className="w-10 text-center text-xs font-mono font-semibold text-foreground select-none">{count}</span>
      <button
        onClick={() => setCount((c) => Math.min(max, c + 1))}
        className="h-7 w-7 rounded-lg bg-muted/60 hover:bg-muted text-foreground flex items-center justify-center font-bold text-xs transition-transform active:scale-90"
      >
        +
      </button>
    </div>
  );
}
export default OriginNumberStepper;
`,
  },
  {
    name: "origin-color-palette-picker",
    site: "originui",
    title: "Origin Color Palette Picker",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component OriginColorPalettePicker
 * @source https://originui.com
 * @author Origin UI
 * @license MIT
 */
export function OriginColorPalettePicker({ className = "" }: { className?: string }) {
  const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899", "#06b6d4"];
  const [activeColor, setActiveColor] = useState(colors[0]);

  return (
    <div className={\`flex items-center gap-2 p-2 rounded-xl border border-border/60 bg-card/60 max-w-fit \${className}\`}>
      {colors.map((c) => (
        <button
          key={c}
          onClick={() => setActiveColor(c)}
          style={{ backgroundColor: c }}
          className={\`h-6 w-6 rounded-full transition-transform active:scale-90 \${
            activeColor === c ? "ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110" : "hover:scale-105"
          }\`}
        />
      ))}
    </div>
  );
}
export default OriginColorPalettePicker;
`,
  },
];
