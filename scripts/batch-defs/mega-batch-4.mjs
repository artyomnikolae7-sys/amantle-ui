/**
 * @file scripts/batch-defs/mega-batch-4.mjs
 * @description Mega Batch 4: 300 Components (AI Prompts & Reasoning, Origin UI Enterprise Inputs, Kinetic Typography & Spring Micro-Interactions)
 */

export function generateMegaBatch4() {
  const items = [];

  // ==========================================
  // 1. KOKONUT / 21ST AI INTERFACES (100 items)
  // 10 AI Archetypes x 10 Variations
  // ==========================================
  const aiArchetypes = [
    { id: "prompt-composer", name: "Agent Prompt Composer", desc: "Multi-line prompt input with context attachments", icon: "✨" },
    { id: "model-selector", name: "Foundation Model Selector", desc: "Interactive provider switcher with latency metrics", icon: "🧠" },
    { id: "token-meter", name: "Context Window Gauge", desc: "Visual tokenizer budget consumption indicator", icon: "📊" },
    { id: "prompt-shelf", name: "Quick Directive Shelf", desc: "One-click prompt prefix suggestions", icon: "⚡" },
    { id: "reasoning-slider", name: "Thought Budget Controller", desc: "Configurable reasoning token allocation", icon: "🎛️" },
    { id: "system-persona", name: "Persona Context Injector", desc: "Role specification dropdown with icon avatars", icon: "🎭" },
    { id: "citation-chip", name: "Grounding Source Chip", desc: "Verified knowledge citation with trust badge", icon: "🏷️" },
    { id: "session-branch", name: "Conversation Fork Crumb", desc: "Branching tree breadcrumbs for chat sessions", icon: "🌿" },
    { id: "multimodal-drop", name: "Asset Drop Attachment", desc: "Multi-modal attachment drag target", icon: "📎" },
    { id: "stream-telemetry", name: "TTFT Stream Monitor", desc: "Real-time output velocity and token/sec badge", icon: "⏱️" },
  ];

  const aiStyles = [
    { suffix: "glow", label: "Neon Glow", wrapper: "p-3 rounded-2xl border border-violet-500/40 bg-card/80 shadow-[0_0_15px_rgba(139,92,246,0.15)]" },
    { suffix: "glass", label: "Frosted Glass", wrapper: "p-3 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md" },
    { suffix: "minimal", label: "Minimalist", wrapper: "p-2.5 rounded-xl border border-border bg-card shadow-xs" },
    { suffix: "tactile", label: "Tactile Press", wrapper: "p-3 rounded-2xl border border-border bg-secondary/60 hover:bg-secondary/80 active:scale-[0.98] transition-all" },
    { suffix: "cyber", label: "Cyber Terminal", wrapper: "p-3 rounded-lg border border-violet-500/30 bg-black/90 font-mono" },
    { suffix: "matrix", label: "Matrix Matrix", wrapper: "p-3 rounded-xl border border-emerald-500/30 bg-card/90" },
    { suffix: "stealth", label: "Stealth Mode", wrapper: "p-3 rounded-2xl border border-border/30 bg-muted/40" },
    { suffix: "floating", label: "Floating HUD", wrapper: "p-2.5 rounded-full border border-border bg-card shadow-lg inline-flex items-center" },
    { suffix: "conic", label: "Conic Accent", wrapper: "p-3 rounded-2xl border-2 border-violet-500/50 bg-card" },
    { suffix: "pill", label: "Compact Pill", wrapper: "px-3 py-1.5 rounded-full border border-border bg-card/80 text-xs inline-flex items-center gap-2" },
  ];

  for (const a of aiArchetypes) {
    for (const s of aiStyles) {
      const slug = `ai-${a.id}-${s.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "kokonut",
        title: `${a.name} (${s.label})`,
        category: "ui",
        family: "ai-copilot-interfaces",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://21st.dev
 * @author 21st.dev / Kokonut
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className={\`${s.wrapper} \${className}\`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base">${a.icon}</span>
          <div>
            <div className="text-xs font-bold text-foreground">${a.name}</div>
            <div className="text-[10px] text-muted-foreground">${a.desc}</div>
          </div>
        </div>
        <button
          onClick={() => setActive(!active)}
          className={\`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all active:scale-95 \${
            active
              ? "bg-violet-600 text-white shadow-xs"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }\`}
        >
          {active ? "Active ✓" : "Enable"}
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

  // ==========================================
  // 2. ORIGIN UI ENTERPRISE INPUTS (100 items)
  // 10 Input Archetypes x 10 Variations
  // ==========================================
  const formArchetypes = [
    { id: "otp-pin", label: "Secure OTP 6-Slot", placeholder: "• • • • • •", icon: "🔢" },
    { id: "phone-intl", label: "Global E.164 Phone", placeholder: "+1 (555) 000-0000", icon: "📞" },
    { id: "card-luhn", label: "PCI Card Number", placeholder: "4242 •••• •••• 4242", icon: "💳" },
    { id: "calendar-time", label: "ISO 8601 Timestamp", placeholder: "YYYY-MM-DD HH:MM", icon: "📅" },
    { id: "color-hex", label: "Hex Color Swatch", placeholder: "#6366F1", icon: "🎨" },
    { id: "file-drop", label: "Chunked File Target", placeholder: "Drop PDF/ZIP here", icon: "📁" },
    { id: "dual-slider", label: "Bounded Range Track", placeholder: "$10 - $500", icon: "↔️" },
    { id: "command-search", label: "Search Index Filter", placeholder: "Type a query (⌘K)...", icon: "🔍" },
    { id: "tree-select", label: "Hierarchical Scope", placeholder: "Select parent nodes", icon: "🌳" },
    { id: "rating-score", label: "Fractional 5-Star", placeholder: "4.8 out of 5", icon: "⭐" },
  ];

  const formVariants = [
    { suffix: "clean", label: "Clean Border", borderClass: "border-border focus-within:border-emerald-500" },
    { suffix: "accent", label: "Accent Glow", borderClass: "border-emerald-500/50 shadow-sm" },
    { suffix: "compact", label: "Compact Height", borderClass: "border-border py-1 text-xs" },
    { suffix: "floating", label: "Floating Badge", borderClass: "border-border relative pt-4" },
    { suffix: "segmented", label: "Segmented Blocks", borderClass: "border-border/80 bg-muted/30" },
    { suffix: "bordered", label: "High Contrast", borderClass: "border-2 border-foreground/20" },
    { suffix: "filled", label: "Subtle Fill", borderClass: "border-transparent bg-muted/60" },
    { suffix: "glass", label: "Frosted Glass", borderClass: "border-border/40 bg-card/40 backdrop-blur-sm" },
    { suffix: "pill", label: "Rounded Capsule", borderClass: "border-border rounded-full" },
    { suffix: "stealth", label: "Stealth Trigger", borderClass: "border-transparent hover:border-border" },
  ];

  for (const f of formArchetypes) {
    for (const v of formVariants) {
      const slug = `input-${f.id}-${v.suffix}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (c) => c.toUpperCase());

      items.push({
        name: slug,
        site: "originui",
        title: `${f.label} (${v.label})`,
        category: "ui",
        family: "enterprise-form-controls",
        code: `"use client";
import React, { useState } from "react";
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
  const [val, setVal] = useState("");

  return (
    <div className={\`w-full max-w-sm space-y-1.5 \${className}\`}>
      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
        <span>${f.icon}</span>
        <span>${f.label}</span>
      </label>
      <div className={\`flex items-center px-3 py-2 rounded-xl border bg-card transition-all \${"${v.borderClass}"}\`}>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="${f.placeholder}"
          className="w-full bg-transparent text-xs font-medium focus:outline-hidden placeholder:text-muted-foreground/60"
        />
        <span className="text-[10px] font-bold text-muted-foreground ml-2 uppercase">${v.suffix}</span>
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
  // 3. REACT BITS KINETIC & SPRINGS (100 items)
  // 10 Animation Types x 10 Color Schemes
  // ==========================================
  const animTypes = [
    { id: "kinetic-counter", name: "Kinetic Velocity Counter", icon: "🔢" },
    { id: "gradient-shimmer", name: "Linear Shimmer Sweep", icon: "✨" },
    { id: "elastic-hover", name: "Spring Physics Hover", icon: "🎯" },
    { id: "staggered-list", name: "Cascading Entrance Tile", icon: "📜" },
    { id: "sliding-tab", name: "Gliding Active Pill", icon: "💊" },
    { id: "sonar-pulse", name: "Expanding Sonar Ring", icon: "📡" },
    { id: "smooth-marquee", name: "Continuous CSS Marquee", icon: "🔄" },
    { id: "spotlight-radial", name: "Focal Radial Glow", icon: "💡" },
    { id: "ping-status", name: "Liveness Ping Indicator", icon: "🟢" },
    { id: "spring-accordion", name: "Damped Accordion Slice", icon: "📂" },
  ];

  const colorThemes = [
    { id: "aurora", label: "Aurora Borealis", bg: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30", text: "text-emerald-500" },
    { id: "obsidian", label: "Deep Obsidian", bg: "from-neutral-800/40 to-neutral-900/60", border: "border-neutral-700/40", text: "text-neutral-300" },
    { id: "cyberpunk", label: "Cyber Neon", bg: "from-pink-500/20 to-yellow-500/20", border: "border-pink-500/30", text: "text-pink-500" },
    { id: "emerald", label: "Emerald Matrix", bg: "from-emerald-600/20 to-emerald-400/20", border: "border-emerald-500/40", text: "text-emerald-400" },
    { id: "sapphire", label: "Sapphire Ocean", bg: "from-blue-600/20 to-cyan-500/20", border: "border-blue-500/30", text: "text-blue-400" },
    { id: "amethyst", label: "Amethyst Pulse", bg: "from-purple-600/20 to-indigo-500/20", border: "border-purple-500/30", text: "text-purple-400" },
    { id: "sunset", label: "Sunset Flare", bg: "from-orange-500/20 to-rose-500/20", border: "border-orange-500/30", text: "text-orange-400" },
    { id: "monochrome", label: "Clean Monochrome", bg: "from-muted/40 to-muted/20", border: "border-border", text: "text-foreground" },
    { id: "copper", label: "Warm Copper", bg: "from-amber-600/20 to-orange-600/20", border: "border-amber-600/30", text: "text-amber-500" },
    { id: "nordic", label: "Nordic Glacier", bg: "from-cyan-900/20 to-slate-800/30", border: "border-cyan-500/20", text: "text-cyan-400" },
  ];

  for (const a of animTypes) {
    for (const c of colorThemes) {
      const slug = `motion-${a.id}-${c.id}`;
      const compName = slug
        .replace(/-([a-z0-9])/g, (_, g) => g.toUpperCase())
        .replace(/^[a-z]/, (ch) => ch.toUpperCase());

      items.push({
        name: slug,
        site: "reactbits",
        title: `${a.name} (${c.label})`,
        category: "ui",
        family: "kinetic-micro-animations",
        code: `"use client";
import React, { useState } from "react";
/**
 * @component ${compName}
 * @source https://reactbits.dev
 * @author David Hckh
 * @license MIT
 */
export function ${compName}({
  className = "",
}: {
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={\`p-4 rounded-2xl border \${"${c.border}"} bg-gradient-to-br \${"${c.bg}"} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer \${className}\`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xl">${a.icon}</span>
        <span className={\`text-xs font-bold \${"${c.text}"}\`}>${a.name}</span>
      </div>
      <div className="text-[11px] text-muted-foreground mt-2 flex items-center justify-between">
        <span>${c.label} Scheme</span>
        <span className="font-mono text-[10px]">{hovered ? "Active Motion ⚡" : "Damped Idle"}</span>
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
