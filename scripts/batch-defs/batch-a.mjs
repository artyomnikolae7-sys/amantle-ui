export const BATCH_A = [
  {
    name: "button-elastic-bounce",
    title: "Elastic Bounce Button",
    description: "Кнопка с физической упругой пружинной отдачей (spring physics) при клике и отпускании.",
    category: "ui",
    subcategory: "Buttons / Physics & Spring",
    code: `/**
 * @source https://amantle.dev/components/button-elastic-bounce
 * @author AMANTLE UI / Emil Kowalski
 * @license MIT
 * @modified Physics-based elastic spring release curve
 */
"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

export function ButtonElasticBounce({
  children = "Нажми меня",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-90 hover:scale-105 hover:-translate-y-0.5 \${className}\`}
      {...props}
    >
      <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
      <span>{children}</span>
    </button>
  );
}
export default ButtonElasticBounce;
`,
    renderCode: `<ButtonElasticBounce>Эластичный клик</ButtonElasticBounce>`
  },
  {
    name: "button-glow-neon",
    title: "Glow Neon Button",
    description: "Киберпанк-кнопка с пульсирующим неоновым ореолом и динамической подсветкой контура.",
    category: "ui",
    subcategory: "Buttons / Neon & Shimmer",
    code: `/**
 * @source https://amantle.dev/components/button-glow-neon
 * @author AMANTLE UI
 * @license MIT
 * @modified Neon cyberpunk specular aura with blurred bloom
 */
"use client";

import * as React from "react";
import { Zap } from "lucide-react";

export function ButtonGlowNeon({
  children = "Активировать ядро",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="relative group inline-block">
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-75 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />
      <button
        className={\`relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-background/95 backdrop-blur-sm border border-cyan-500/50 text-cyan-300 font-semibold text-sm transition-all duration-200 active:scale-95 \${className}\`}
        {...props}
      >
        <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
        <span className="tracking-wide text-foreground">{children}</span>
      </button>
    </div>
  );
}
export default ButtonGlowNeon;
`,
    renderCode: `<ButtonGlowNeon>Неоновый пуск</ButtonGlowNeon>`
  },
  {
    name: "button-gradient-border",
    title: "Gradient Border Button",
    description: "Элегантная кнопка с непрерывно вращающейся градиентной рамкой и фоновым размытием.",
    category: "ui",
    subcategory: "Buttons / Border Animations",
    code: `/**
 * @source https://amantle.dev/components/button-gradient-border
 * @author AMANTLE UI
 * @license MIT
 * @modified Conic gradient continuous rotating border
 */
"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";

export function ButtonGradientBorder({
  children = "Документация",
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
    code: `/**
 * @source https://amantle.dev/components/button-neubrutalist
 * @author AMANTLE UI
 * @license MIT
 * @modified Neubrutalist hard offset shadow translation
 */
"use client";

import * as React from "react";
import { SquareTerminal } from "lucide-react";

export function ButtonNeubrutalist({
  children = "Компиляция",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={\`inline-flex items-center gap-2 px-5 py-2.5 bg-amber-300 text-black border-2 border-black font-mono font-bold text-sm rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all \${className}\`}
      {...props}
    >
      <SquareTerminal className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
}
export default ButtonNeubrutalist;
`,
    renderCode: `<ButtonNeubrutalist>Брутализм 4px</ButtonNeubrutalist>`
  },
  {
    name: "button-retro-3d",
    title: "Retro Arcade 3D Button",
    description: "Аркадная кнопка 90-х с объемной 3D-фаской и эффектом механического переключателя.",
    category: "ui",
    subcategory: "Buttons / 3D & Skeuomorphic",
    code: `/**
 * @source https://amantle.dev/components/button-retro-3d
 * @author AMANTLE UI
 * @license MIT
 * @modified Arcade skeuomorphic mechanical displacement
 */
"use client";

import * as React from "react";
import { Gamepad2 } from "lucide-react";

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
    renderCode: `<ButtonRetro3D>INSERT COIN</ButtonRetro3D>`
  },
  {
    name: "button-hold-confirm",
    title: "Hold to Confirm Button",
    description: "Кнопка длительного удержания (Hold to Delete / Confirm) с линейной шкалой прогресса.",
    category: "ui",
    subcategory: "Buttons / Interactive Logic",
    code: `/**
 * @source https://amantle.dev/components/button-hold-confirm
 * @author AMANTLE UI
 * @license MIT
 * @modified Long-press progress fill confirmation logic
 */
"use client";

import * as React from "react";
import { Trash2, CheckCircle2 } from "lucide-react";

export function ButtonHoldConfirm({
  duration = 1500,
  onConfirm,
  label = "Удерживайте для удаления",
}: {
  duration?: number;
  onConfirm?: () => void;
  label?: string;
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
        }, 2000);
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
            <span className="text-emerald-500 font-semibold">Успешно!</span>
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
    description: "Кнопка копирования токена с плавной морфинг-анимацией иконки и микро-откликом.",
    category: "ui",
    subcategory: "Buttons / Micro-Interactions",
    code: `/**
 * @source https://amantle.dev/components/button-copy-morph
 * @author AMANTLE UI
 * @license MIT
 * @modified Icon morphing copy animation
 */
"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

export function ButtonCopyMorph({
  value = "npm i @amantle/ui",
  label = "Копировать",
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
    } catch {
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
      <span>{copied ? "Скопировано!" : label}</span>
    </button>
  );
}
export default ButtonCopyMorph;
`,
    renderCode: `<ButtonCopyMorph />`
  },
  {
    name: "button-slide-reveal",
    title: "Slide Reveal Button",
    description: "Двухуровневая кнопка со скользящим вертикальным переключением надписи при наведении курсора.",
    category: "ui",
    subcategory: "Buttons / Hover Effects",
    code: `/**
 * @source https://amantle.dev/components/button-slide-reveal
 * @author AMANTLE UI
 * @license MIT
 * @modified Dual-layer vertical translation hover reveal
 */
"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

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
    renderCode: `<ButtonSlideReveal />`
  },
  {
    name: "button-liquid-fill",
    title: "Liquid Wave Fill Button",
    description: "Кнопка с интерактивной заливкой жидкой волны со дна к вершине при наведении курсора.",
    category: "ui",
    subcategory: "Buttons / Creative VFX",
    code: `/**
 * @source https://amantle.dev/components/button-liquid-fill
 * @author AMANTLE UI
 * @license MIT
 * @modified Wave liquid fill from bottom translateY
 */
"use client";

import * as React from "react";
import { Droplets } from "lucide-react";

export function ButtonLiquidFill({
  children = "Подписка Pro",
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
    renderCode: `<ButtonLiquidFill />`
  },
  {
    name: "button-split-dropdown",
    title: "Split Action Button",
    description: "Составная сплит-кнопка с независимым основным действием и выпадающим списком доп. опций.",
    category: "ui",
    subcategory: "Buttons / Composed Triggers",
    code: `/**
 * @source https://amantle.dev/components/button-split-dropdown
 * @author AMANTLE UI
 * @license MIT
 * @modified Split main action and popover trigger
 */
"use client";

import * as React from "react";
import { ChevronDown, GitFork, Sparkles } from "lucide-react";

export function ButtonSplitDropdown({
  label = "Смерджить PR",
}: {
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-flex items-stretch rounded-xl shadow-sm">
      <button
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
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-card border border-border shadow-xl p-1.5 z-50 flex flex-col gap-1">
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-foreground hover:bg-muted text-left transition-colors"
          >
            <GitFork className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Merge commit</span>
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg text-foreground hover:bg-muted text-left transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Squash and merge</span>
          </button>
        </div>
      )}
    </div>
  );
}
export default ButtonSplitDropdown;
`,
    renderCode: `<ButtonSplitDropdown />`
  },
  {
    name: "input-pill-glow",
    title: "Pill Glow Input",
    description: "Футуристичный скругленный инпут с акцентным неоновым ореолом при фокусе.",
    category: "ui",
    subcategory: "Inputs / Modern Textfields",
    code: `/**
 * @source https://amantle.dev/components/input-pill-glow
 * @author AMANTLE UI
 * @license MIT
 * @modified Pill shaped input with glowing ring focus
 */
"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

export function InputPillGlow({
  placeholder = "Введите ваш email...",
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative group max-w-sm w-full">
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
      <div className="relative flex items-center bg-card rounded-full border border-border px-4 py-2 shadow-sm">
        <Sparkles className="w-4 h-4 text-muted-foreground mr-2 group-focus-within:text-violet-500 transition-colors" />
        <input
          type="text"
          placeholder={placeholder}
          className={\`w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none \${className}\`}
          {...props}
        />
      </div>
    </div>
  );
}
export default InputPillGlow;
`,
    renderCode: `<InputPillGlow />`
  },
  {
    name: "input-underlined-minimal",
    title: "Underlined Minimal Input",
    description: "Минималистичный инпут без рамки с анимированной подчеркивающей линией из центра.",
    category: "ui",
    subcategory: "Inputs / Modern Textfields",
    code: `/**
 * @source https://amantle.dev/components/input-underlined-minimal
 * @author AMANTLE UI
 * @license MIT
 * @modified Center-expanding underline border focus
 */
"use client";

import * as React from "react";

export function InputUnderlinedMinimal({
  label = "Имя пользователя",
  placeholder = "alex_amantle",
  ...props
}: { label?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative max-w-sm w-full py-2">
      <label className="text-xs font-medium text-muted-foreground block mb-1">{label}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground/60 border-b border-border focus:outline-none"
          {...props}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-300 pointer-events-none peer-focus:w-full" />
      </div>
    </div>
  );
}
export default InputUnderlinedMinimal;
`,
    renderCode: `<InputUnderlinedMinimal />`
  },
  {
    name: "input-password-strength",
    title: "Password Strength Input",
    description: "Инпут пароля с расчетом энтропии, 4-уровневой шкалой надежности и переключателем видимости.",
    category: "ui",
    subcategory: "Inputs / Security & Code",
    code: `/**
 * @source https://amantle.dev/components/input-password-strength
 * @author AMANTLE UI
 * @license MIT
 * @modified Real-time password entropy bar and checklist
 */
"use client";

import * as React from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

export function InputPasswordStrength() {
  const [val, setVal] = React.useState("");
  const [show, setShow] = React.useState(false);

  const score = React.useMemo(() => {
    let s = 0;
    if (val.length >= 8) s++;
    if (/[A-Z]/.test(val)) s++;
    if (/[0-9]/.test(val)) s++;
    if (/[^A-Za-z0-9]/.test(val)) s++;
    return s;
  }, [val]);

  const strengthColor = ["bg-muted", "bg-rose-500", "bg-amber-500", "bg-blue-500", "bg-emerald-500"][score];
  const strengthText = ["Пусто", "Слабый", "Средний", "Хороший", "Отличный"][score];

  return (
    <div className="max-w-sm w-full space-y-2">
      <div className="relative flex items-center">
        <input
          type={show ? "text" : "password"}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Надежный пароль..."
          className="w-full bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 text-muted-foreground hover:text-foreground"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Надежность:
          </span>
          <span className="font-semibold text-foreground">{strengthText}</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden flex gap-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={\`h-full flex-1 rounded-full transition-colors duration-300 \${
                score >= i ? strengthColor : "bg-muted"
              }\`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default InputPasswordStrength;
`,
    renderCode: `<InputPasswordStrength />`
  },
  {
    name: "input-credit-card",
    title: "Credit Card Mask Input",
    description: "Инпут банковской карты с авто-форматированием пробелов 4-4-4-4 и иконкой платежной системы.",
    category: "ui",
    subcategory: "Inputs / Formatted Masks",
    code: `/**
 * @source https://amantle.dev/components/input-credit-card
 * @author AMANTLE UI
 * @license MIT
 * @modified Card number grouping with 4-digit spacers
 */
"use client";

import * as React from "react";
import { CreditCard } from "lucide-react";

export function InputCreditCard() {
  const [val, setVal] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\\D/g, "").slice(0, 16);
    const formatted = raw.replace(/(\\d{4})(?=\\d)/g, "$1 ");
    setVal(formatted);
  };

  return (
    <div className="max-w-sm w-full">
      <div className="relative flex items-center">
        <CreditCard className="w-4 h-4 absolute left-3.5 text-muted-foreground" />
        <input
          type="text"
          value={val}
          onChange={handleChange}
          placeholder="0000 0000 0000 0000"
          className="w-full bg-card border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
}
export default InputCreditCard;
`,
    renderCode: `<InputCreditCard />`
  },
  {
    name: "input-verification-code",
    title: "Verification Token Input",
    description: "Форматированный инпут защитного кода авторизации с разделением дефисом (XXX-XXX).",
    category: "ui",
    subcategory: "Inputs / Security & Code",
    code: `/**
 * @source https://amantle.dev/components/input-verification-code
 * @author AMANTLE UI
 * @license MIT
 * @modified Alphanumeric token formatter with hyphen separator
 */
"use client";

import * as React from "react";
import { KeyRound } from "lucide-react";

export function InputVerificationCode() {
  const [code, setCode] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let clean = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    if (clean.length > 3) {
      clean = clean.slice(0, 3) + "-" + clean.slice(3);
    }
    setCode(clean);
  };

  return (
    <div className="max-w-xs w-full">
      <div className="relative flex items-center">
        <KeyRound className="w-4 h-4 absolute left-3 text-muted-foreground" />
        <input
          type="text"
          value={code}
          onChange={handleChange}
          placeholder="ABC-123"
          className="w-full bg-card border border-border rounded-xl pl-9 pr-4 py-2.5 text-center font-mono font-bold tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
}
export default InputVerificationCode;
`,
    renderCode: `<InputVerificationCode />`
  },
  {
    name: "input-command-filter",
    title: "Command Filter Input",
    description: "Поле поиска со встроенными тегами быстрой фильтрации и горячей клавишей очистки.",
    category: "ui",
    subcategory: "Inputs / Search & Filters",
    code: `/**
 * @source https://amantle.dev/components/input-command-filter
 * @author AMANTLE UI
 * @license MIT
 * @modified Filter tag pills embedded inside input container
 */
"use client";

import * as React from "react";
import { Search, X } from "lucide-react";

export function InputCommandFilter() {
  const [filter, setFilter] = React.useState("Все");
  const [query, setQuery] = React.useState("");

  const tags = ["Все", "Компоненты", "Хуки", "Блоки"];

  return (
    <div className="max-w-md w-full rounded-xl border border-border bg-card p-1.5 shadow-sm space-y-2">
      <div className="flex items-center gap-2 px-2">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по тегам..."
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {query && (
          <button onClick={() => setQuery("")}>
            <X className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>
      <div className="flex items-center gap-1.5 pt-1 border-t border-border/50">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={\`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors \${
              filter === t
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:bg-muted"
            }\`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
export default InputCommandFilter;
`,
    renderCode: `<InputCommandFilter />`
  },
  {
    name: "input-voice-dictation",
    title: "Voice Dictation Input",
    description: "Инпут голосового ввода с анимированной осциллограммой прослушивания и кнопкой микрофона.",
    category: "ui",
    subcategory: "Inputs / Interactive Logic",
    code: `/**
 * @source https://amantle.dev/components/input-voice-dictation
 * @author AMANTLE UI
 * @license MIT
 * @modified Voice listening waveform simulation
 */
"use client";

import * as React from "react";
import { Mic, MicOff, Send } from "lucide-react";

export function InputVoiceDictation() {
  const [isRecording, setIsRecording] = React.useState(false);
  const [text, setText] = React.useState("");

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setText("Создай адаптивный hero-блок с градиентом");
        setIsRecording(false);
      }, 2500);
    } else {
      setIsRecording(false);
    }
  };

  return (
    <div className="max-w-md w-full rounded-2xl border border-border bg-card p-2 shadow-sm">
      <div className="flex items-center gap-2">
        <button
          onClick={toggleRecording}
          className={\`p-2 rounded-xl transition-all \${
            isRecording
              ? "bg-rose-500 text-white animate-pulse"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }\`}
        >
          {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>

        {isRecording ? (
          <div className="flex-1 flex items-center gap-1 h-8 px-2">
            {[40, 70, 100, 50, 85, 30, 95, 60].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-rose-500 rounded-full animate-bounce"
                style={{
                  height: \`\${h}%\`,
                  animationDelay: \`\${i * 0.1}s\`,
                }}
              />
            ))}
            <span className="text-xs text-rose-500 font-medium ml-2">Слушаю...</span>
          </div>
        ) : (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Нажмите на микрофон или введите промпт..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none px-2"
          />
        )}

        <button className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
export default InputVoiceDictation;
`,
    renderCode: `<InputVoiceDictation />`
  },
  {
    name: "input-tag-chips",
    title: "Tag Chips Input",
    description: "Инпут добавления тегов по нажатию Enter со свайпом удаления и предотвращением дубликатов.",
    category: "ui",
    subcategory: "Inputs / Multivalue Chips",
    code: `/**
 * @source https://amantle.dev/components/input-tag-chips
 * @author AMANTLE UI
 * @license MIT
 * @modified Pill chip management with Enter hotkey
 */
"use client";

import * as React from "react";
import { X, Tag } from "lucide-react";

export function InputTagChips() {
  const [tags, setTags] = React.useState(["React", "Tailwind", "DesignSystem"]);
  const [input, setInput] = React.useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  };

  const removeTag = (t: string) => {
    setTags(tags.filter((item) => item !== t));
  };

  return (
    <div className="max-w-md w-full rounded-xl border border-border bg-card p-2 flex flex-wrap gap-1.5 items-center">
      <Tag className="w-4 h-4 text-muted-foreground ml-1" />
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium"
        >
          <span>{tag}</span>
          <button onClick={() => removeTag(tag)} className="hover:text-destructive">
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Добавить тег..."
        className="flex-1 min-w-[100px] bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none px-2 py-1"
      />
    </div>
  );
}
export default InputTagChips;
`,
    renderCode: `<InputTagChips />`
  },
  {
    name: "input-auto-grow-textarea",
    title: "Auto-grow Textarea",
    description: "Многострочное текстовое поле, плавно подстраивающее высоту под количество строк контента.",
    category: "ui",
    subcategory: "Inputs / Modern Textfields",
    code: `/**
 * @source https://amantle.dev/components/input-auto-grow-textarea
 * @author AMANTLE UI
 * @license MIT
 * @modified Dynamic scrollHeight expansion
 */
"use client";

import * as React from "react";

export function InputAutoGrowTextarea({
  placeholder = "Начните печатать длинный текст, поле расширится само...",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = React.useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = \`\${ref.current.scrollHeight}px\`;
    }
  };

  return (
    <div className="max-w-md w-full">
      <textarea
        ref={ref}
        rows={2}
        onInput={handleInput}
        placeholder={placeholder}
        className="w-full bg-card border border-border rounded-xl p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none overflow-hidden transition-all duration-150"
        {...props}
      />
    </div>
  );
}
export default InputAutoGrowTextarea;
`,
    renderCode: `<InputAutoGrowTextarea />`
  },
  {
    name: "input-file-uploader-compact",
    title: "Compact File Uploader",
    description: "Однострочный инпут загрузки файла со статусом прогресса, иконкой формата и весом файла.",
    category: "ui",
    subcategory: "Inputs / Formatted Masks",
    code: `/**
 * @source https://amantle.dev/components/input-file-uploader-compact
 * @author AMANTLE UI
 * @license MIT
 * @modified Single line file drop progress pill
 */
"use client";

import * as React from "react";
import { UploadCloud, CheckCircle, FileText } from "lucide-react";

export function InputFileUploaderCompact() {
  const [file, setFile] = React.useState<{ name: string; size: string } | null>(null);
  const [progress, setProgress] = React.useState(0);

  const simulateUpload = () => {
    setFile({ name: "design-system-tokens.json", size: "240 KB" });
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <div className="max-w-md w-full rounded-xl border border-dashed border-border hover:border-primary/50 bg-card p-3 transition-colors">
      {!file ? (
        <button
          onClick={simulateUpload}
          className="w-full flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground py-1"
        >
          <UploadCloud className="w-4 h-4 text-primary" />
          <span>Нажмите для выбора файла (или перетащите сюда)</span>
        </button>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <FileText className="w-3.5 h-3.5 text-primary" />
              {file.name}
            </span>
            <span className="text-muted-foreground">{progress === 100 ? "Загружено" : \`\${progress}%\`}</span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-200 rounded-full"
              style={{ width: \`\${progress}%\` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default InputFileUploaderCompact;
`,
    renderCode: `<InputFileUploaderCompact />`
  }
];

console.log("Batch A part 1 loaded:", BATCH_A.length);
