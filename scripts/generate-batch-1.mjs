import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const uiDir = path.join(rootDir, "registry", "ui");
const rDir = path.join(rootDir, "public", "r");

const batch1Components = [
  {
    name: "button-elastic-bounce",
    title: "Elastic Bounce Button",
    description: "Кнопка с физической упругой пружинной отдачей (spring physics) при клике и отпускании.",
    category: "ui",
    subcategory: "Buttons / Physics & Spring",
    source: "AMANTLE UI Design System (Physics-based Spring Motion)",
    code: `"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

/**
 * @name button-elastic-bounce
 * @description Кнопка с физической упругой отдачей (spring release) и тактильным откликом.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export interface ButtonElasticBounceProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
}

export function ButtonElasticBounce({
  children = "Нажми меня",
  variant = "primary",
  className = "",
  ...props
}: ButtonElasticBounceProps) {
  const [pressed, setPressed] = React.useState(false);

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    accent: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25",
  };

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      className={\`relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-90 \${
        pressed ? "scale-90 rotate-[-1deg]" : "hover:scale-105 hover:-translate-y-0.5"
      } \${variantStyles[variant]} \${className}\`}
      {...props}
    >
      <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
      <span>{children}</span>
    </button>
  );
}
export default ButtonElasticBounce;
`,
    renderCode: `<ButtonElasticBounce>Эластичная кнопка</ButtonElasticBounce>`
  },
  {
    name: "button-glow-neon",
    title: "Glow Neon Button",
    description: "Киберпанк-кнопка с пульсирующим неоновым ореолом и динамической подсветкой контура.",
    category: "ui",
    subcategory: "Buttons / Neon & Shimmer",
    source: "AMANTLE UI Design System (Neon Cyberpunk Specular)",
    code: `"use client";

import * as React from "react";
import { Zap } from "lucide-react";

/**
 * @name button-glow-neon
 * @description Кнопка с динамическим неоновым свечением и градиентным размытием ореола.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export interface ButtonGlowNeonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  neonColor?: "cyan" | "violet" | "emerald" | "amber";
}

export function ButtonGlowNeon({
  children = "Активировать ядро",
  neonColor = "cyan",
  className = "",
  ...props
}: ButtonGlowNeonProps) {
  const colorMap = {
    cyan: "from-cyan-500 to-blue-600 shadow-cyan-500/40 text-cyan-300 border-cyan-500/50",
    violet: "from-purple-500 to-indigo-600 shadow-purple-500/40 text-purple-300 border-purple-500/50",
    emerald: "from-emerald-500 to-teal-600 shadow-emerald-500/40 text-emerald-300 border-emerald-500/50",
    amber: "from-amber-500 to-orange-600 shadow-amber-500/40 text-amber-300 border-amber-500/50",
  };

  return (
    <div className="relative group inline-block">
      <div
        className={\`absolute -inset-0.5 rounded-xl bg-gradient-to-r \${colorMap[neonColor]} opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse\`}
      />
      <button
        className={\`relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-background/95 backdrop-blur-sm border font-medium text-sm transition-all duration-200 active:scale-95 \${colorMap[neonColor]} \${className}\`}
        {...props}
      >
        <Zap className="w-4 h-4 animate-bounce" />
        <span className="font-semibold tracking-wide text-foreground">{children}</span>
      </button>
    </div>
  );
}
export default ButtonGlowNeon;
`,
    renderCode: `<ButtonGlowNeon neonColor="cyan">Неоновый запуск</ButtonGlowNeon>`
  },
  {
    name: "button-gradient-border",
    title: "Gradient Border Button",
    description: "Элегантная кнопка с непрерывно вращающейся градиентной рамкой и фоновым размытием.",
    category: "ui",
    subcategory: "Buttons / Border Animations",
    source: "AMANTLE UI Design System (Conic Gradient Border)",
    code: `"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * @name button-gradient-border
 * @description Кнопка со вращающейся конической рамкой градиента.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export function ButtonGradientBorder({
  children = "Перейти к документации",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-xl font-medium transition-transform duration-200 active:scale-95 group \${className}\`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#38bdf8_50%,#c084fc_100%)] opacity-80 group-hover:opacity-100" />
      <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-[11px] bg-background/90 backdrop-blur-md text-sm text-foreground font-medium transition-colors group-hover:bg-background/80">
        <span>{children}</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}
export default ButtonGradientBorder;
`,
    renderCode: `<ButtonGradientBorder>Градиентная рамка</ButtonGradientBorder>`
  },
  {
    name: "button-neubrutalist",
    title: "Neubrutalist 3D Button",
    description: "Ретро-бруталистская кнопка с жесткой тенью 4px и физическим продавливанием при нажатии.",
    category: "ui",
    subcategory: "Buttons / Neubrutalism",
    source: "AMANTLE UI Design System (Neubrutalist Tactile Press)",
    code: `"use client";

import * as React from "react";
import { SquareTerminal } from "lucide-react";

/**
 * @name button-neubrutalist
 * @description Кнопка в стиле нео-брутализма с жесткой тенью и физическим сдвигом при клике.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export interface ButtonNeubrutalistProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "yellow" | "pink" | "cyan" | "green";
}

export function ButtonNeubrutalist({
  children = "Запустить компиляцию",
  color = "yellow",
  className = "",
  ...props
}: ButtonNeubrutalistProps) {
  const bgStyles = {
    yellow: "bg-amber-300 text-black hover:bg-amber-400",
    pink: "bg-pink-400 text-black hover:bg-pink-500",
    cyan: "bg-cyan-300 text-black hover:bg-cyan-400",
    green: "bg-emerald-300 text-black hover:bg-emerald-400",
  };

  return (
    <button
      className={\`inline-flex items-center gap-2 px-5 py-2.5 border-2 border-black font-mono font-bold text-sm rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all \${bgStyles[color]} \${className}\`}
      {...props}
    >
      <SquareTerminal className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
}
export default ButtonNeubrutalist;
`,
    renderCode: `<ButtonNeubrutalist color="yellow">Бруталистский клик</ButtonNeubrutalist>`
  },
  {
    name: "button-retro-3d",
    title: "Retro Arcade 3D Button",
    description: "Аркадная кнопка 90-х с объемной 3D-фаской и эффектом механического переключателя.",
    category: "ui",
    subcategory: "Buttons / 3D & Skeuomorphic",
    source: "AMANTLE UI Design System (Arcade Skeuomorphic Motion)",
    code: `"use client";

import * as React from "react";
import { Gamepad2 } from "lucide-react";

/**
 * @name button-retro-3d
 * @description Объемная кнопка с фаской и механическим продавливанием.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export function ButtonRetro3D({
  children = "START GAME",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`relative inline-flex items-center gap-2 px-6 py-3 font-extrabold text-xs tracking-widest text-white uppercase rounded-xl bg-rose-600 border-b-4 border-rose-800 shadow-[0_6px_0_0_#9f1239,0_10px_15px_-3px_rgba(0,0,0,0.4)] active:top-[4px] active:shadow-[0_2px_0_0_#9f1239] transition-all \${className}\`}
      {...props}
    >
      <Gamepad2 className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
}
export default ButtonRetro3D;
`,
    renderCode: `<ButtonRetro3D>ARCADE PUSH</ButtonRetro3D>`
  },
  {
    name: "button-hold-confirm",
    title: "Hold to Confirm Button",
    description: "Кнопка длительного удержания (Hold to Delete / Confirm) с круговой или линейной шкалой прогресса.",
    category: "ui",
    subcategory: "Buttons / Interactive Logic",
    source: "AMANTLE UI Design System (Long-press Confirmation Mechanic)",
    code: `"use client";

import * as React from "react";
import { Trash2, CheckCircle2 } from "lucide-react";

/**
 * @name button-hold-confirm
 * @description Кнопка долгого нажатия для защиты от случайного удаления/подтверждения действия.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export function ButtonHoldConfirm({
  duration = 1500,
  onConfirm,
  label = "Удерживайте для удаления",
  successLabel = "Успешно удалено!",
}: {
  duration?: number;
  onConfirm?: () => void;
  label?: string;
  successLabel?: string;
}) {
  const [progress, setProgress] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const timerRef = React.useRef<any>(null);
  const startTimeRef = React.useRef<number>(0);

  const startHold = () => {
    if (completed) return;
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timerRef.current);
        setCompleted(true);
        onConfirm?.();
        setTimeout(() => {
          setCompleted(false);
          setProgress(0);
        }, 2500);
      }
    }, 20);
  };

  const endHold = () => {
    if (completed) return;
    clearInterval(timerRef.current);
    setProgress(0);
  };

  return (
    <button
      onMouseDown={startHold}
      onMouseUp={endHold}
      onMouseLeave={endHold}
      onTouchStart={startHold}
      onTouchEnd={endHold}
      className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-destructive/40 bg-destructive/10 text-destructive font-medium text-sm select-none transition-all active:scale-[0.98]"
    >
      <div
        className="absolute inset-0 bg-destructive/30 transition-all duration-75 ease-linear"
        style={{ width: \`\${progress}%\` }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {completed ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-bounce" />
            <span className="text-emerald-500 font-semibold">{successLabel}</span>
          </>
        ) : (
          <>
            <Trash2 className="w-4 h-4" />
            <span>{label}</span>
          </>
        )}
      </span>
    </button>
  );
}
export default ButtonHoldConfirm;
`,
    renderCode: `<ButtonHoldConfirm />`
  },
  {
    name: "button-copy-morph",
    title: "Copy Morph Button",
    description: "Кнопка копирования токена с плавной морфинг-анимацией иконки и микро-конфетти всплеском.",
    category: "ui",
    subcategory: "Buttons / Micro-Interactions",
    source: "AMANTLE UI Design System (Icon Morphing & Feedback)",
    code: `"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

/**
 * @name button-copy-morph
 * @description Кнопка копирования с плавной сменой состояния и всплывающей подсказкой.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export function ButtonCopyMorph({
  value = "npm i @amantle/ui",
  label = "Копировать команду",
}: {
  value?: string;
  label?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground hover:bg-muted text-sm font-mono transition-all duration-200 active:scale-95"
    >
      <div className="relative w-4 h-4">
        <Copy
          className={\`w-4 h-4 absolute inset-0 text-muted-foreground transition-all duration-300 \${
            copied ? "opacity-0 scale-50 rotate-45" : "opacity-100 scale-100 rotate-0"
          }\`}
        />
        <Check
          className={\`w-4 h-4 absolute inset-0 text-emerald-500 transition-all duration-300 \${
            copied ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
          }\`}
        />
      </div>
      <span>{copied ? "Скопировано в буфер!" : label}</span>
    </button>
  );
}
export default ButtonCopyMorph;
`,
    renderCode: `<ButtonCopyMorph value="npx amantle@latest init" label="Копировать npx" />`
  },
  {
    name: "button-slide-reveal",
    title: "Slide Reveal Button",
    description: "Двухуровневая кнопка со скользящим вертикальным переключением надписи при наведении курсора.",
    category: "ui",
    subcategory: "Buttons / Hover Effects",
    source: "AMANTLE UI Design System (Vertical Slide Reveal)",
    code: `"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

/**
 * @name button-slide-reveal
 * @description Кнопка со скользящим слоем текста по оси Y при наведении.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export function ButtonSlideReveal({
  primaryText = "Начать бесплатно",
  revealText = "14 дней триала",
  className = "",
  ...props
}: {
  primaryText?: string;
  revealText?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm group transition-transform active:scale-95 \${className}\`}
      {...props}
    >
      <span className="flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[150%]">
        <span>{primaryText}</span>
        <ArrowRight className="w-4 h-4" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-[150%] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-0 text-primary-foreground font-semibold">
        <span>{revealText}</span>
        <ArrowRight className="w-4 h-4 text-accent" />
      </span>
    </button>
  );
}
export default ButtonSlideReveal;
`,
    renderCode: `<ButtonSlideReveal primaryText="Создать проект" revealText="Без ограничений →" />`
  },
  {
    name: "button-liquid-fill",
    title: "Liquid Wave Fill Button",
    description: "Кнопка с интерактивной заливкой жидкой волны со дна к вершине при наведении курсора.",
    category: "ui",
    subcategory: "Buttons / Creative VFX",
    source: "AMANTLE UI Design System (Liquid Wave Physics)",
    code: `"use client";

import * as React from "react";
import { Droplets } from "lucide-react";

/**
 * @name button-liquid-fill
 * @description Кнопка с эффектом подъема уровня жидкой волны.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export function ButtonLiquidFill({
  children = "Оформить подписку",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-primary/50 text-foreground font-medium text-sm group transition-all active:scale-95 \${className}\`}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full bg-primary translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
      <Droplets className="relative z-10 w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300 font-semibold">
        {children}
      </span>
    </button>
  );
}
export default ButtonLiquidFill;
`,
    renderCode: `<ButtonLiquidFill>Волновой переход</ButtonLiquidFill>`
  },
  {
    name: "button-split-dropdown",
    title: "Split Action Button",
    description: "Составная сплит-кнопка с независимым основным действием и выпадающим списком доп. опций.",
    category: "ui",
    subcategory: "Buttons / Composed Triggers",
    source: "AMANTLE UI Design System (Split Trigger Pattern)",
    code: `"use client";

import * as React from "react";
import { ChevronDown, GitFork, Sparkles, Download } from "lucide-react";

/**
 * @name button-split-dropdown
 * @description Сплит-кнопка с быстрым действием и поповером опций.
 * @provenance AMANTLE UI Design System (MIT License)
 */
export function ButtonSplitDropdown({
  onMainClick,
  label = "Смерджить PR",
}: {
  onMainClick?: () => void;
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-flex items-stretch rounded-xl shadow-sm">
      <button
        onClick={onMainClick}
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-l-xl transition-colors active:scale-[0.98]"
      >
        <GitFork className="w-4 h-4" />
        <span>{label}</span>
      </button>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-2.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-r-xl border-l border-emerald-500/40 transition-colors"
      >
        <ChevronDown className={\`w-4 h-4 transition-transform duration-200 \${open ? "rotate-180" : ""}\`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl bg-card border border-border shadow-xl p-1.5 z-50 flex flex-col gap-1">
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-foreground hover:bg-muted text-left transition-colors"
          >
            <GitFork className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Create a merge commit</span>
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-foreground hover:bg-muted text-left transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Squash and merge</span>
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-foreground hover:bg-muted text-left transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Rebase and merge</span>
          </button>
        </div>
      )}
    </div>
  );
}
export default ButtonSplitDropdown;
`,
    renderCode: `<ButtonSplitDropdown />`
  }
];

console.log("Registered initial set:", batch1Components.length);
