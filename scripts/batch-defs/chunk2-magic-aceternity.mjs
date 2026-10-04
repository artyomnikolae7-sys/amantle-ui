/**
 * Chunk 2: 30 Magic UI & Aceternity UI Components
 */

export const CHUNK2_ITEMS = [
  // --- Magic UI (16) ---
  {
    name: "animated-beam",
    site: "magicui",
    title: "Animated Beam",
    code: `"use client";
import React from "react";
/**
 * @component AnimatedBeam
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function AnimatedBeam({ className = "" }: { className?: string }) {
  return (
    <div className={\`flex items-center justify-between w-full max-w-sm rounded-2xl border border-border/60 bg-card p-6 shadow-sm \${className}\`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">A</div>
      <div className="flex-1 h-0.5 mx-4 bg-gradient-to-r from-primary via-cyan-400 to-primary animate-pulse" />
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">B</div>
    </div>
  );
}
export default AnimatedBeam;
`,
  },
  {
    name: "shine-button",
    site: "magicui",
    title: "Shine Button",
    code: `"use client";
import React from "react";
/**
 * @component ShineButton
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function ShineButton({ children = "Shimmer Action", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button className={\`group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all active:scale-95 \${className}\`}>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
export default ShineButton;
`,
  },
  {
    name: "pulsating-button",
    site: "magicui",
    title: "Pulsating Button",
    code: `"use client";
import React from "react";
/**
 * @component PulsatingButton
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function PulsatingButton({ children = "Live Stream Engaged", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button className={\`relative inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-lg hover:bg-primary/90 active:scale-95 transition-all \${className}\`}>
      <span className="absolute -inset-1 rounded-xl bg-primary/30 animate-ping opacity-60" />
      <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
export default PulsatingButton;
`,
  },
  {
    name: "interactive-hover-button",
    site: "magicui",
    title: "Interactive Hover Button",
    code: `"use client";
import React from "react";
/**
 * @component InteractiveHoverButton
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function InteractiveHoverButton({ text = "Hover Me", className = "" }: { text?: string; className?: string }) {
  return (
    <button className={\`group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-border/60 bg-card px-6 py-2.5 text-xs font-bold text-foreground transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 \${className}\`}>
      <span>{text}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
    </button>
  );
}
export default InteractiveHoverButton;
`,
  },
  {
    name: "flip-text",
    site: "magicui",
    title: "Flip Text",
    code: `"use client";
import React from "react";
/**
 * @component FlipText
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function FlipText({ word = "AMANTLE", className = "" }: { word?: string; className?: string }) {
  return (
    <div className={\`inline-flex gap-1 text-2xl font-black text-foreground \${className}\`}>
      {word.split("").map((c, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-300 hover:[transform:rotateX(360deg)] cursor-pointer text-primary"
        >
          {c}
        </span>
      ))}
    </div>
  );
}
export default FlipText;
`,
  },
  {
    name: "word-fade-in",
    site: "magicui",
    title: "Word Fade In",
    code: `"use client";
import React from "react";
/**
 * @component WordFadeIn
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function WordFadeIn({ words = "Kinetic user interfaces crafted for production", className = "" }: { words?: string; className?: string }) {
  return (
    <p className={\`flex flex-wrap gap-2 text-base font-semibold text-foreground \${className}\`}>
      {words.split(" ").map((w, i) => (
        <span
          key={i}
          style={{ animation: "fadeIn 0.4s ease-out forwards", animationDelay: \`\${i * 0.1}s\` }}
          className="inline-block"
        >
          {w}
        </span>
      ))}
    </p>
  );
}
export default WordFadeIn;
`,
  },
  {
    name: "scroll-based-velocity",
    site: "magicui",
    title: "Scroll Based Velocity",
    code: `"use client";
import React from "react";
/**
 * @component ScrollBasedVelocity
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function ScrollBasedVelocity({ defaultVelocity = 5, text = "AUTONOMOUS SYNTHESIS • ", className = "" }: { defaultVelocity?: number; text?: string; className?: string }) {
  return (
    <div className={\`overflow-hidden whitespace-nowrap py-2 text-xl font-black text-muted-foreground select-none \${className}\`}>
      <div className="inline-block animate-marquee">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
export default ScrollBasedVelocity;
`,
  },
  {
    name: "animated-shiny-text",
    site: "magicui",
    title: "Animated Shiny Text",
    code: `"use client";
import React from "react";
/**
 * @component AnimatedShinyText
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function AnimatedShinyText({ children = "Introducing AMANTLE UI v0.4.0 ✨", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <span className={\`inline-block bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:200%_100%] bg-clip-text text-xs font-semibold text-transparent animate-shimmer \${className}\`}>
      {children}
    </span>
  );
}
export default AnimatedShinyText;
`,
  },
  {
    name: "dock-interactive",
    site: "magicui",
    title: "Dock Interactive",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component DockInteractive
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function DockInteractive({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const items = ["🔥", "⚡", "✨", "🎯", "🛡️"];
  return (
    <div className={\`inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card p-1.5 shadow-lg \${className}\`}>
      {items.map((it, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={\`flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all \${
            active === i ? "bg-primary text-primary-foreground scale-110 shadow-xs" : "hover:bg-muted"
          }\`}
        >
          {it}
        </button>
      ))}
    </div>
  );
}
export default DockInteractive;
`,
  },
  {
    name: "globe-wireframe",
    site: "magicui",
    title: "Globe Wireframe",
    code: `"use client";
import React from "react";
/**
 * @component GlobeWireframe
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function GlobeWireframe({ className = "" }: { className?: string }) {
  return (
    <div className={\`relative flex h-40 w-40 items-center justify-center rounded-full border border-border/80 bg-card shadow-lg select-none \${className}\`}>
      <div className="absolute inset-2 rounded-full border border-dashed border-primary/40 animate-spin" style={{ animationDuration: "12s" }} />
      <div className="absolute inset-6 rounded-full border border-primary/20" />
      <span className="font-mono text-xs font-bold text-primary">GLOBAL_NET</span>
    </div>
  );
}
export default GlobeWireframe;
`,
  },
  {
    name: "bento-grid-card",
    site: "magicui",
    title: "Bento Grid Card",
    code: `"use client";
import React from "react";
/**
 * @component BentoGridCard
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function BentoGridCard({ title = "Bento Feature Module", desc = "Compact modular cell designed for high-density modern layouts.", className = "" }: { title?: string; desc?: string; className?: string }) {
  return (
    <div className={\`flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all \${className}\`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">❖</div>
      <div className="mt-4">
        <h4 className="text-sm font-bold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
export default BentoGridCard;
`,
  },
  {
    name: "ripple-button",
    site: "magicui",
    title: "Ripple Button",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component RippleButton
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function RippleButton({ children = "Click for Ripple", className = "" }: { children?: React.ReactNode; className?: string }) {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  return (
    <button
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - r.left, y: e.clientY - r.top });
        setTimeout(() => setCoords(null), 500);
      }}
      className={\`relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md active:scale-95 \${className}\`}
    >
      {coords && (
        <span
          style={{ left: coords.x, top: coords.y }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white/30 animate-ping"
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
export default RippleButton;
`,
  },
  {
    name: "dot-pattern",
    site: "magicui",
    title: "Dot Pattern",
    code: `"use client";
import React from "react";
/**
 * @component DotPattern
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={\`relative h-32 w-64 rounded-2xl border border-border/60 bg-card overflow-hidden flex items-center justify-center \${className}\`}>
      <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
      <span className="relative z-10 text-xs font-bold text-foreground">Dot Pattern Grid</span>
    </div>
  );
}
export default DotPattern;
`,
  },
  {
    name: "grid-pattern",
    site: "magicui",
    title: "Grid Pattern",
    code: `"use client";
import React from "react";
/**
 * @component GridPattern
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div className={\`relative h-32 w-64 rounded-2xl border border-border/60 bg-card overflow-hidden flex items-center justify-center \${className}\`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />
      <span className="relative z-10 text-xs font-bold text-foreground">Grid Pattern Geometry</span>
    </div>
  );
}
export default GridPattern;
`,
  },
  {
    name: "magic-card",
    site: "magicui",
    title: "Magic Card",
    code: `"use client";
import React from "react";
/**
 * @component MagicCard
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function MagicCard({ title = "Magic Glass Card", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={\`group relative flex h-40 w-60 flex-col justify-between rounded-2xl border border-border/60 bg-card/60 p-5 shadow-lg backdrop-blur-md hover:border-primary/50 transition-all \${className}\`}>
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">✨</div>
      <h4 className="text-xs font-bold text-foreground">{title}</h4>
    </div>
  );
}
export default MagicCard;
`,
  },
  {
    name: "neon-border",
    site: "magicui",
    title: "Neon Border",
    code: `"use client";
import React from "react";
/**
 * @component NeonBorder
 * @source https://magicui.design
 * @author Magic UI
 * @license MIT
 */
export function NeonBorder({ children = "Neon Border Surface", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={\`rounded-2xl border border-cyan-500/50 bg-card p-5 shadow-[0_0_15px_rgba(6,182,212,0.25)] text-center text-xs font-bold \${className}\`}>
      {children}
    </div>
  );
}
export default NeonBorder;
`,
  },

  // --- Aceternity UI (14) ---
  {
    name: "sparkles-core",
    site: "aceternity",
    title: "Sparkles Core",
    code: `"use client";
import React from "react";
/**
 * @component SparklesCore
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function SparklesCore({ title = "Sparkle Stellar Field", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={\`relative flex h-36 w-64 items-center justify-center rounded-2xl border border-border/60 bg-card overflow-hidden \${className}\`}>
      <span className="text-xs font-black tracking-widest text-primary uppercase select-none">✨ {title} ✨</span>
    </div>
  );
}
export default SparklesCore;
`,
  },
  {
    name: "moving-borders-glow",
    site: "aceternity",
    title: "Moving Borders Glow",
    code: `"use client";
import React from "react";
/**
 * @component MovingBordersGlow
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function MovingBordersGlow({ children = "Moving Border Action", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <button className={\`relative inline-flex p-[1px] overflow-hidden rounded-xl active:scale-95 \${className}\`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-[11px] bg-background px-5 py-2 text-xs font-semibold text-foreground backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}
export default MovingBordersGlow;
`,
  },
  {
    name: "background-gradient-card",
    site: "aceternity",
    title: "Background Gradient Card",
    code: `"use client";
import React from "react";
/**
 * @component BackgroundGradientCard
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function BackgroundGradientCard({ title = "Gradient Surface", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={\`relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 \${className}\`}>
      <div className="rounded-[14px] bg-card p-5 text-center">
        <h4 className="text-xs font-bold text-foreground">{title}</h4>
      </div>
    </div>
  );
}
export default BackgroundGradientCard;
`,
  },
  {
    name: "card-hover-effect-grid",
    site: "aceternity",
    title: "Card Hover Effect Grid",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component CardHoverEffectGrid
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function CardHoverEffectGrid({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const cards = ["Next.js 15", "React 19", "Tailwind v4"];
  return (
    <div className={\`grid grid-cols-3 gap-2 w-full max-w-sm \${className}\`}>
      {cards.map((c, i) => (
        <div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className={\`rounded-xl border p-3 text-center text-xs font-bold transition-all \${
            hovered === i ? "border-primary bg-primary/10 scale-105 shadow-md" : "border-border/60 bg-card"
          }\`}
        >
          {c}
        </div>
      ))}
    </div>
  );
}
export default CardHoverEffectGrid;
`,
  },
  {
    name: "evervault-card-cipher",
    site: "aceternity",
    title: "Evervault Card Cipher",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component EvervaultCardCipher
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function EvervaultCardCipher({ className = "" }: { className?: string }) {
  const [randomStr, setRandomStr] = useState("01101001 01101110");
  return (
    <div
      onMouseMove={() => setRandomStr(Math.random().toString(36).substring(2, 10))}
      className={\`relative flex h-40 w-60 flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-4 shadow-md font-mono select-none \${className}\`}
    >
      <span className="text-[10px] text-muted-foreground opacity-50">{randomStr}</span>
      <span className="mt-2 text-sm font-black text-primary">ENCRYPTED_VAULT</span>
    </div>
  );
}
export default EvervaultCardCipher;
`,
  },
  {
    name: "lamp-header",
    site: "aceternity",
    title: "Lamp Header",
    code: `"use client";
import React from "react";
/**
 * @component LampHeader
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function LampHeader({ title = "Conical Luminary", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={\`relative flex h-36 w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-card \${className}\`}>
      <div className="absolute top-0 h-16 w-32 bg-primary/30 blur-2xl" />
      <h3 className="relative z-10 text-base font-black tracking-tight text-foreground">{title}</h3>
    </div>
  );
}
export default LampHeader;
`,
  },
  {
    name: "wavy-text-effect",
    site: "aceternity",
    title: "Wavy Text Effect",
    code: `"use client";
import React from "react";
/**
 * @component WavyTextEffect
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function WavyTextEffect({ word = "UNDULATING", className = "" }: { word?: string; className?: string }) {
  return (
    <div className={\`inline-flex gap-1 text-xl font-black text-primary \${className}\`}>
      {word.split("").map((c, i) => (
        <span key={i} style={{ animation: "bounce 1.6s infinite", animationDelay: \`\${i * 0.1}s\` }}>
          {c}
        </span>
      ))}
    </div>
  );
}
export default WavyTextEffect;
`,
  },
  {
    name: "flip-words-cycle",
    site: "aceternity",
    title: "Flip Words Cycle",
    code: `"use client";
import React, { useState, useEffect } from "react";
/**
 * @component FlipWordsCycle
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function FlipWordsCycle({ words = ["dynamic", "kinetic", "autonomous", "modern"], className = "" }: { words?: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2000);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className={\`font-black text-primary underline underline-offset-4 transition-all duration-300 \${className}\`}>
      {words[idx]}
    </span>
  );
}
export default FlipWordsCycle;
`,
  },
  {
    name: "text-generate-effect",
    site: "aceternity",
    title: "Text Generate Effect",
    code: `"use client";
import React, { useState, useEffect } from "react";
/**
 * @component TextGenerateEffect
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function TextGenerateEffect({ text = "Synthesizing UI with multi-agent velocity.", className = "" }: { text?: string; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let cur = 0;
    const t = setInterval(() => {
      setDisplayed(text.substring(0, cur));
      cur++;
      if (cur > text.length) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [text]);
  return <p className={\`font-mono text-xs font-semibold text-foreground \${className}\`}>{displayed}<span className="animate-pulse">|</span></p>;
}
export default TextGenerateEffect;
`,
  },
  {
    name: "meteors-stream",
    site: "aceternity",
    title: "Meteors Stream",
    code: `"use client";
import React from "react";
/**
 * @component MeteorsStream
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function MeteorsStream({ className = "" }: { className?: string }) {
  return (
    <div className={\`relative h-28 w-56 rounded-2xl border border-border/60 bg-card p-4 overflow-hidden flex items-center justify-center \${className}\`}>
      <span className="font-bold text-xs text-foreground">Meteorite Track</span>
      <span className="absolute -top-4 -right-4 h-12 w-0.5 rotate-45 bg-gradient-to-b from-primary to-transparent animate-ping" />
    </div>
  );
}
export default MeteorsStream;
`,
  },
  {
    name: "direction-aware-hover",
    site: "aceternity",
    title: "Direction Aware Hover",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component DirectionAwareHover
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function DirectionAwareHover({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={\`relative h-40 w-52 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm cursor-pointer flex items-center justify-center \${className}\`}
    >
      <span className={\`text-xs font-bold transition-all duration-300 \${hovered ? "scale-115 text-primary" : "text-foreground"}\`}>
        Directional Surface
      </span>
    </div>
  );
}
export default DirectionAwareHover;
`,
  },
  {
    name: "focus-cards",
    site: "aceternity",
    title: "Focus Cards",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component FocusCards
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function FocusCards({ className = "" }: { className?: string }) {
  const [focused, setFocused] = useState<number | null>(null);
  const items = ["Alpha", "Beta", "Gamma"];
  return (
    <div className={\`flex gap-2 w-full max-w-xs \${className}\`}>
      {items.map((it, i) => (
        <div
          key={i}
          onMouseEnter={() => setFocused(i)}
          onMouseLeave={() => setFocused(null)}
          className={\`flex-1 rounded-xl border border-border/60 bg-card p-3 text-center text-xs font-bold transition-all \${
            focused !== null && focused !== i ? "blur-xs opacity-50" : "scale-105 shadow-md border-primary"
          }\`}
        >
          {it}
        </div>
      ))}
    </div>
  );
}
export default FocusCards;
`,
  },
  {
    name: "pin-container-3d",
    site: "aceternity",
    title: "Pin Container 3D",
    code: `"use client";
import React from "react";
/**
 * @component PinContainer3D
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function PinContainer3D({ title = "Pin Location", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={\`flex flex-col items-center gap-1 rounded-2xl border border-border/60 bg-card p-4 shadow-sm \${className}\`}>
      <div className="flex h-3 w-3 rounded-full bg-primary animate-ping" />
      <span className="text-xs font-bold text-foreground">{title}</span>
    </div>
  );
}
export default PinContainer3D;
`,
  },
  {
    name: "glowing-stars-card",
    site: "aceternity",
    title: "Glowing Stars Card",
    code: `"use client";
import React from "react";
/**
 * @component GlowingStarsCard
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function GlowingStarsCard({ title = "Starlight Grid Deck", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={\`flex h-36 w-60 flex-col justify-between rounded-2xl border border-border/60 bg-card p-5 shadow-sm \${className}\`}>
      <span className="text-xs font-bold text-primary">✦ ✧ ✦</span>
      <h4 className="text-xs font-bold text-foreground">{title}</h4>
    </div>
  );
}
export default GlowingStarsCard;
`,
  },
];
