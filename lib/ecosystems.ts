/**
 * @file lib/ecosystems.ts
 * @description Catalog of 10+ open-source ecosystems aggregated in AMANTLE UI
 */

export interface EcosystemMeta {
  id: string;
  name: string;
  url: string;
  author: string;
  badgeColor: string;
  components: string[];
}

export const ECOSYSTEMS_CONFIG: Record<string, EcosystemMeta> = {
  reactbits: {
    id: "reactbits",
    name: "React Bits",
    url: "https://reactbits.dev",
    author: "David Hckh",
    badgeColor: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    components: [
      "split-text",
      "blur-text",
      "decrypted-text",
      "true-focus",
      "shiny-text",
      "count-up",
      "gradient-text",
      "rotating-text",
      "star-border",
      "click-spark",
      "pixel-card",
      "spring-check",
      "jelly-radio",
      "pill-nav",
      "text-pressure",
      "glitch-text",
      "variable-proximity",
      "circular-text",
      "wave-text",
      "rolling-gallery",
      "elastic-slider",
      "flowing-menu",
      "tilted-card",
      "spotlight-card",
      "infinite-scroll",
      "magnet",
      "magnet-lines",
      "crosshair",
      "electric-border",
    ],
  },
  magicui: {
    id: "magicui",
    name: "Magic UI",
    url: "https://magicui.design",
    author: "Dillion Verma",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    components: [
      "marquee",
      "rainbow-button",
      "orbiting-circles",
      "avatar-circles",
      "meteors",
      "sparkles-text",
      "word-rotate",
      "typing-text",
      "number-ticker",
      "border-beam",
      "shine-border",
      "particles-background",
      "interactive-grid-pattern",
    ],
  },
  aceternity: {
    id: "aceternity",
    name: "Aceternity UI",
    url: "https://ui.aceternity.com",
    author: "Manu Arora",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    components: [
      "tracing-beam",
      "floating-navbar",
      "hover-border-gradient",
      "card-spotlight",
      "card-tilt",
      "button-shimmer",
    ],
  },
  shadcnstudio: {
    id: "shadcnstudio",
    name: "Shadcn Studio",
    url: "https://shadcnstudio.dev",
    author: "Shadcn Studio Team",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    components: ["studio-component-inspector", "studio-code-preview"],
  },
  cultui: {
    id: "cultui",
    name: "Cult UI",
    url: "https://cult-ui.com",
    author: "Cult UI Team",
    badgeColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    components: ["gradient-heading", "minimal-card"],
  },
  originui: {
    id: "originui",
    name: "Origin UI",
    url: "https://originui.com",
    author: "Origin UI Team",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    components: ["origin-input-tag", "origin-select-fancy"],
  },
  tremor: {
    id: "tremor",
    name: "Tremor Raw",
    url: "https://raw.tremor.so",
    author: "Tremor",
    badgeColor: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    components: ["kpi-metric-card", "progress-bar-stepped"],
  },
  hoverdev: {
    id: "hoverdev",
    name: "Hover.dev",
    url: "https://hover.dev",
    author: "Tom Is Loading",
    badgeColor: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    components: ["hover-expand-card", "water-drop-grid"],
  },
  hyperui: {
    id: "hyperui",
    name: "HyperUI / Float UI",
    url: "https://hyperui.dev",
    author: "Float & HyperUI",
    badgeColor: "bg-teal-500/10 text-teal-500 border-teal-500/20",
    components: ["marketing-feature-pill", "stats-card-accent"],
  },
  kokonut: {
    id: "kokonut",
    name: "21st.dev / Kokonut",
    url: "https://21st.dev",
    author: "21st.dev",
    badgeColor: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    components: ["action-bar-glow", "ai-prompt-input"],
  },
};

export function getComponentEcosystem(name: string): EcosystemMeta | null {
  for (const eco of Object.values(ECOSYSTEMS_CONFIG)) {
    if (eco.components.includes(name)) {
      return eco;
    }
  }
  return null;
}
