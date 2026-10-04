/**
 * Chunk 1: 25 React Bits Components
 */

export const CHUNK1_ITEMS = [
  {
    name: "fuzzy-text",
    site: "reactbits",
    title: "Fuzzy Text",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component FuzzyText
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function FuzzyText({ text = "AMANTLE KINETIC", className = "" }: { text?: string; className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={\`relative inline-block font-black tracking-tight text-3xl select-none cursor-pointer transition-all duration-300 \${className}\`}
      style={{
        filter: hovered ? "blur(3px)" : "blur(0px)",
        transition: "filter 200ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
}
export default FuzzyText;
`,
  },
  {
    name: "pixel-transition",
    site: "reactbits",
    title: "Pixel Transition",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component PixelTransition
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function PixelTransition({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={\`relative h-44 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-lg cursor-pointer flex flex-col justify-between \${className}\`}
    >
      <div className="grid grid-cols-8 gap-1 opacity-75">
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className={\`h-3 rounded-xs transition-colors duration-200 \${
              active ? (i % 2 === 0 ? "bg-primary" : "bg-primary/40") : "bg-muted"
            }\`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-xs font-semibold">
        <span>Pixel Grid Matrix</span>
        <span className="font-mono text-primary">{active ? "ENGAGED" : "IDLE"}</span>
      </div>
    </div>
  );
}
export default PixelTransition;
`,
  },
  {
    name: "dither-card",
    site: "reactbits",
    title: "Dither Card",
    code: `"use client";
import React from "react";
/**
 * @component DitherCard
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function DitherCard({ title = "Dither Matrix Surface", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={\`group relative flex h-48 w-72 flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-md hover:shadow-xl transition-all active:scale-[0.98] \${className}\`}>
      <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:8px_8px] opacity-25 group-hover:opacity-40 transition-opacity" />
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-xs">
        ░
      </div>
      <div className="relative z-10">
        <h4 className="text-sm font-bold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">High-frequency dither halftone shader</p>
      </div>
    </div>
  );
}
export default DitherCard;
`,
  },
  {
    name: "decay-card",
    site: "reactbits",
    title: "Decay Card",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component DecayCard
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function DecayCard({ text = "Dissipating Particle Structure", className = "" }: { text?: string; className?: string }) {
  const [decay, setDecay] = useState(false);
  return (
    <div
      onMouseEnter={() => setDecay(true)}
      onMouseLeave={() => setDecay(false)}
      className={\`relative flex h-48 w-64 flex-col justify-center items-center overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-md transition-all \${className}\`}
    >
      <span
        style={{
          transform: decay ? "translateY(-6px) scale(0.96)" : "translateY(0) scale(1)",
          opacity: decay ? 0.6 : 1,
          filter: decay ? "blur(1px)" : "blur(0px)",
          transition: "all 300ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        className="text-center text-sm font-bold text-foreground select-none"
      >
        {text}
      </span>
      <span className="mt-2 text-[10px] font-mono text-muted-foreground">Hover to induce particle decay</span>
    </div>
  );
}
export default DecayCard;
`,
  },
  {
    name: "stacked-cards",
    site: "reactbits",
    title: "Stacked Cards",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component StackedCards
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function StackedCards({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={\`relative h-48 w-56 cursor-pointer select-none \${className}\`}
    >
      <div
        style={{
          transform: hovered ? "translate(-12px, -8px) rotate(-6deg)" : "rotate(-3deg)",
          transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="absolute inset-0 rounded-2xl border border-border/40 bg-muted/60 p-4 shadow-sm"
      />
      <div
        style={{
          transform: hovered ? "translate(12px, -4px) rotate(6deg)" : "rotate(3deg)",
          transition: "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="absolute inset-0 rounded-2xl border border-border/50 bg-card/80 p-4 shadow-md"
      />
      <div className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-4 shadow-xl">
        <span className="text-xs font-bold text-primary">Deck Layer 01</span>
        <span className="text-xs font-medium text-foreground">Interactive Card Fan-out</span>
      </div>
    </div>
  );
}
export default StackedCards;
`,
  },
  {
    name: "circular-gallery",
    site: "reactbits",
    title: "Circular Gallery",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component CircularGallery
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function CircularGallery({ className = "" }: { className?: string }) {
  const [deg, setDeg] = useState(0);
  return (
    <div className={\`flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-md \${className}\`}>
      <div
        style={{ transform: \`rotate(\${deg}deg)\`, transition: "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)" }}
        className="relative h-32 w-32 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center"
      >
        <span className="absolute -top-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">01</span>
        <span className="absolute -bottom-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">03</span>
        <span className="absolute -left-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">04</span>
        <span className="absolute -right-3 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-foreground">02</span>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">⚙️</div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => setDeg(d => d - 90)} className="rounded-lg border border-border px-2.5 py-1 text-xs hover:bg-muted active:scale-95">⟲ 90°</button>
        <button onClick={() => setDeg(d => d + 90)} className="rounded-lg border border-border px-2.5 py-1 text-xs hover:bg-muted active:scale-95">⟳ 90°</button>
      </div>
    </div>
  );
}
export default CircularGallery;
`,
  },
  {
    name: "counter-spring",
    site: "reactbits",
    title: "Counter Spring",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component CounterSpring
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function CounterSpring({ initial = 128, className = "" }: { initial?: number; className?: string }) {
  const [val, setVal] = useState(initial);
  return (
    <div className={\`inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-2 shadow-sm \${className}\`}>
      <button onClick={() => setVal(v => v - 1)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-border hover:bg-muted active:scale-90 font-bold">-</button>
      <span className="font-mono text-xl font-black text-foreground min-w-[3rem] text-center">{val}</span>
      <button onClick={() => setVal(v => v + 1)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-border hover:bg-muted active:scale-90 font-bold">+</button>
    </div>
  );
}
export default CounterSpring;
`,
  },
  {
    name: "stepper-slider",
    site: "reactbits",
    title: "Stepper Slider",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component StepperSlider
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function StepperSlider({ steps = 5, className = "" }: { steps?: number; className?: string }) {
  const [step, setStep] = useState(2);
  return (
    <div className={\`flex w-full max-w-xs flex-col gap-2 \${className}\`}>
      <div className="flex justify-between text-xs font-semibold text-muted-foreground">
        <span>Step Progress</span>
        <span className="font-mono text-foreground font-bold">{step + 1}/{steps}</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: steps }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={\`h-2 flex-1 rounded-full transition-all duration-200 active:scale-95 \${
              i <= step ? "bg-primary" : "bg-muted"
            }\`}
          />
        ))}
      </div>
    </div>
  );
}
export default StepperSlider;
`,
  },
  {
    name: "blob-cursor",
    site: "reactbits",
    title: "Blob Cursor",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component BlobCursor
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function BlobCursor({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className={\`relative h-44 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm select-none \${className}\`}
    >
      <div
        style={{
          transform: \`translate3d(\${pos.x - 24}px, \${pos.y - 24}px, 0)\`,
          transition: "transform 140ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="pointer-events-none absolute h-12 w-12 rounded-full bg-primary/25 blur-md"
      />
      <div className="relative z-10 flex h-full flex-col justify-center items-center text-center">
        <span className="text-xs font-bold text-foreground">Blob Tracking Area</span>
        <span className="text-[10px] text-muted-foreground">Move mouse inside frame</span>
      </div>
    </div>
  );
}
export default BlobCursor;
`,
  },
  {
    name: "target-cursor",
    site: "reactbits",
    title: "Target Cursor",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component TargetCursor
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function TargetCursor({ className = "" }: { className?: string }) {
  const [locked, setLocked] = useState(false);
  return (
    <div
      onClick={() => setLocked(!locked)}
      className={\`inline-flex items-center gap-2 rounded-xl border border-border/60 bg-card px-4 py-2 text-xs font-semibold shadow-sm hover:border-primary cursor-pointer active:scale-95 transition-all \${className}\`}
    >
      <span className={\`h-3 w-3 rounded-full border-2 border-primary flex items-center justify-center transition-transform \${locked ? "scale-125 bg-primary/20" : ""}\`}>
        <span className="h-1 w-1 rounded-full bg-primary" />
      </span>
      <span>{locked ? "TARGET LOCKED" : "TARGET ACQUIRE"}</span>
    </div>
  );
}
export default TargetCursor;
`,
  },
  {
    name: "splash-cursor",
    site: "reactbits",
    title: "Splash Cursor",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component SplashCursor
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function SplashCursor({ className = "" }: { className?: string }) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newRipple = { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top };
    setRipples(r => [...r.slice(-4), newRipple]);
  };
  return (
    <div
      onClick={handleClick}
      className={\`relative h-40 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm cursor-crosshair select-none flex items-center justify-center \${className}\`}
    >
      {ripples.map(r => (
        <span
          key={r.id}
          style={{ left: r.x - 20, top: r.y - 20 }}
          className="pointer-events-none absolute h-10 w-10 rounded-full border-2 border-primary animate-ping opacity-75"
        />
      ))}
      <span className="text-xs font-medium text-muted-foreground">Click anywhere for kinetic ripple splash</span>
    </div>
  );
}
export default SplashCursor;
`,
  },
  {
    name: "pixel-cursor",
    site: "reactbits",
    title: "Pixel Cursor",
    code: `"use client";
import React from "react";
/**
 * @component PixelCursor
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function PixelCursor({ className = "" }: { className?: string }) {
  return (
    <div className={\`inline-flex items-center gap-2 rounded-xl border border-dashed border-border/80 bg-muted/20 px-4 py-2 font-mono text-xs font-bold \${className}\`}>
      <span className="h-3 w-3 bg-foreground inline-block shadow-[2px_2px_0px_#888]" />
      <span>RETRO_PIXEL_TRACKER</span>
    </div>
  );
}
export default PixelCursor;
`,
  },
  {
    name: "scroll-velocity",
    site: "reactbits",
    title: "Scroll Velocity",
    code: `"use client";
import React from "react";
/**
 * @component ScrollVelocity
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function ScrollVelocity({ text = "KINETIC • VELOCITY • DYNAMICS • ", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={\`flex w-full overflow-hidden select-none py-2 text-xl font-black tracking-tight text-foreground \${className}\`}>
      <div className="flex shrink-0 animate-marquee gap-4">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
export default ScrollVelocity;
`,
  },
  {
    name: "curved-loop",
    site: "reactbits",
    title: "Curved Loop",
    code: `"use client";
import React from "react";
/**
 * @component CurvedLoop
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function CurvedLoop({ className = "" }: { className?: string }) {
  return (
    <div className={\`relative flex items-center justify-center p-4 \${className}\`}>
      <svg className="w-56 h-20 overflow-visible" viewBox="0 0 200 60">
        <path id="curvePath" d="M 10 50 Q 100 0 190 50" fill="transparent" />
        <text className="text-[11px] font-bold uppercase tracking-widest fill-primary">
          <textPath href="#curvePath" startOffset="10%">
            Kinetic Curved Typography Flow
          </textPath>
        </text>
      </svg>
    </div>
  );
}
export default CurvedLoop;
`,
  },
  {
    name: "elastic-accordion",
    site: "reactbits",
    title: "Elastic Accordion",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component ElasticAccordion
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function ElasticAccordion({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={\`w-full max-w-sm rounded-2xl border border-border/60 bg-card p-4 shadow-sm \${className}\`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-xs font-bold text-foreground cursor-pointer"
      >
        <span>What makes AMANTLE UI special?</span>
        <span className={\`transition-transform duration-200 \${open ? "rotate-180" : ""}\`}>▾</span>
      </button>
      {open && (
        <p className="mt-3 text-xs text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
          Pure zero-dependency spring animations, Tailwind v4 native CSS variables, and full provenance tracking.
        </p>
      )}
    </div>
  );
}
export default ElasticAccordion;
`,
  },
  {
    name: "morphing-dialog",
    site: "reactbits",
    title: "Morphing Dialog",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component MorphingDialog
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function MorphingDialog({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={\`inline-block \${className}\`}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-95 transition-all"
        >
          Open Morphing Modal
        </button>
      ) : (
        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-5 shadow-2xl animate-in zoom-in-95 duration-200 max-w-xs">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xs">Morphing Surface</span>
            <button onClick={() => setOpen(false)} className="text-xs text-muted-foreground hover:text-foreground">✕</button>
          </div>
          <p className="text-xs text-muted-foreground">Smoothly expanded from the trigger element using spring physics.</p>
        </div>
      )}
    </div>
  );
}
export default MorphingDialog;
`,
  },
  {
    name: "bubble-text",
    site: "reactbits",
    title: "Bubble Text",
    code: `"use client";
import React from "react";
/**
 * @component BubbleText
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function BubbleText({ text = "BUBBLE", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={\`inline-flex gap-1 text-2xl font-black text-foreground \${className}\`}>
      {text.split("").map((c, i) => (
        <span
          key={i}
          className="inline-block transition-transform duration-200 hover:-translate-y-2 hover:scale-125 cursor-pointer text-primary"
        >
          {c}
        </span>
      ))}
    </div>
  );
}
export default BubbleText;
`,
  },
  {
    name: "glitch-card",
    site: "reactbits",
    title: "Glitch Card",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component GlitchCard
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function GlitchCard({ title = "Cyber Glitch Surface", className = "" }: { title?: string; className?: string }) {
  const [glitch, setGlitch] = useState(false);
  return (
    <div
      onMouseEnter={() => setGlitch(true)}
      onMouseLeave={() => setGlitch(false)}
      className={\`relative h-44 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-md cursor-pointer flex flex-col justify-between \${className}\`}
    >
      <div className={\`text-xs font-mono font-bold \${glitch ? "text-rose-500 animate-pulse" : "text-primary"}\`}>
        {glitch ? "ERR_OVERCLOCK_0x9" : "SYS_STABLE"}
      </div>
      <div>
        <h4 className="text-sm font-bold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground">Hover to trigger chromatic slice</p>
      </div>
    </div>
  );
}
export default GlitchCard;
`,
  },
  {
    name: "magnetic-dock",
    site: "reactbits",
    title: "Magnetic Dock",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component MagneticDock
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function MagneticDock({ className = "" }: { className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const icons = ["🏠", "🔍", "⚡", "📁", "⚙️"];
  return (
    <div className={\`inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-card/80 p-2 shadow-lg backdrop-blur-md \${className}\`}>
      {icons.map((ic, i) => {
        const isHovered = hovered === i;
        const isNeighbor = hovered !== null && Math.abs(hovered - i) === 1;
        return (
          <button
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transform: isHovered ? "scale(1.3) translateY(-4px)" : isNeighbor ? "scale(1.15) translateY(-2px)" : "scale(1)",
              transition: "transform 180ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60 text-sm shadow-xs"
          >
            {ic}
          </button>
        );
      })}
    </div>
  );
}
export default MagneticDock;
`,
  },
  {
    name: "follow-pointer",
    site: "reactbits",
    title: "Follow Pointer",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component FollowPointer
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function FollowPointer({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      className={\`relative h-40 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm select-none flex items-center justify-center \${className}\`}
    >
      <div
        style={{
          background: \`radial-gradient(120px circle at \${pos.x}px \${pos.y}px, rgba(139,92,246,0.2), transparent 70%)\`,
        }}
        className="pointer-events-none absolute inset-0"
      />
      <span className="relative z-10 text-xs font-semibold text-foreground">Follow Pointer Glow</span>
    </div>
  );
}
export default FollowPointer;
`,
  },
  {
    name: "bounce-text",
    site: "reactbits",
    title: "Bounce Text",
    code: `"use client";
import React from "react";
/**
 * @component BounceText
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function BounceText({ text = "KINETIC", className = "" }: { text?: string; className?: string }) {
  return (
    <div className={\`inline-flex gap-1 text-2xl font-black \${className}\`}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          style={{ animation: "bounce 1.5s infinite", animationDelay: \`\${i * 0.1}s\` }}
          className="inline-block text-primary"
        >
          {ch}
        </span>
      ))}
    </div>
  );
}
export default BounceText;
`,
  },
  {
    name: "staggered-list",
    site: "reactbits",
    title: "Staggered List",
    code: `"use client";
import React from "react";
/**
 * @component StaggeredList
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function StaggeredList({ className = "" }: { className?: string }) {
  const items = ["Next.js 15 Integration", "React 19 Server Components", "Tailwind v4 Native Engine", "Emil Kowalski Springs"];
  return (
    <div className={\`flex flex-col gap-2 w-full max-w-xs \${className}\`}>
      {items.map((it, i) => (
        <div
          key={i}
          style={{ animation: "fadeIn 0.3s ease-out forwards", animationDelay: \`\${i * 0.08}s\` }}
          className="flex items-center gap-2 rounded-xl border border-border/50 bg-card p-2.5 text-xs font-semibold shadow-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>{it}</span>
        </div>
      ))}
    </div>
  );
}
export default StaggeredList;
`,
  },
  {
    name: "magnetic-button",
    site: "reactbits",
    title: "Magnetic Button",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component MagneticButton
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function MagneticButton({ children = "Magnetic Pull", className = "" }: { children?: React.ReactNode; className?: string }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <button
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setOffset({ x: (e.clientX - (r.left + r.width / 2)) * 0.3, y: (e.clientY - (r.top + r.height / 2)) * 0.3 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{
        transform: \`translate3d(\${offset.x}px, \${offset.y}px, 0)\`,
        transition: "transform 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={\`rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-md active:scale-95 \${className}\`}
    >
      {children}
    </button>
  );
}
export default MagneticButton;
`,
  },
  {
    name: "elastic-toggle",
    site: "reactbits",
    title: "Elastic Toggle",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component ElasticToggle
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function ElasticToggle({ className = "" }: { className?: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className={\`relative h-7 w-12 rounded-full p-1 transition-colors duration-200 \${
        on ? "bg-primary" : "bg-muted"
      } \${className}\`}
    >
      <div
        style={{
          transform: on ? "translateX(20px)" : "translateX(0px)",
          transition: "transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        className="h-5 w-5 rounded-full bg-background shadow-md"
      />
    </button>
  );
}
export default ElasticToggle;
`,
  },
  {
    name: "fluid-pill",
    site: "reactbits",
    title: "Fluid Pill",
    code: `"use client";
import React, { useState } from "react";
/**
 * @component FluidPill
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function FluidPill({ className = "" }: { className?: string }) {
  const [tab, setTab] = useState(0);
  const tabs = ["Overview", "Telemetry", "Audit"];
  return (
    <div className={\`inline-flex rounded-full border border-border/60 bg-muted/40 p-1 text-xs font-semibold \${className}\`}>
      {tabs.map((t, i) => (
        <button
          key={i}
          onClick={() => setTab(i)}
          className={\`rounded-full px-3 py-1 transition-all \${
            tab === i ? "bg-primary text-primary-foreground shadow-xs font-bold" : "text-muted-foreground hover:text-foreground"
          }\`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
export default FluidPill;
`,
  },
];
