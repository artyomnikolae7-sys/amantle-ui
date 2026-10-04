/**
 * @file scripts/onboard-batch-1.mjs
 * @description Batch creation and onboarding for Batch 1 (18 UI Primitives & Interactive Compounds)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildRegistry } from "./build-registry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const REGISTRY_UI = path.join(ROOT_DIR, "registry", "ui");

const BATCH_1_COMPONENTS = [
  {
    name: "card-spotlight",
    pascalName: "CardSpotlight",
    title: "Card Spotlight",
    description: "Интерактивная карточка с динамическим радиальным световым пятном, следующим за курсором мыши",
    code: `/**
 * @source https://magicui.design/docs/components/spotlight-card
 * @author Magic UI / 21st.dev
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  spotlightSize?: number;
}

export function CardSpotlight({
  className,
  children,
  spotlightColor = "var(--primary)",
  spotlightSize = 350,
  ...props
}: CardSpotlightProps) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm overflow-hidden transition-all",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 motion-reduce:hidden"
        style={{
          opacity,
          background: \`radial-gradient(\${spotlightSize}px circle at \${position.x}px \${position.y}px, rgba(147, 51, 234, 0.15), transparent 80%)\`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        title: "Spotlight Card",
        description: "Наведите курсор на карточку для активации эффекта светового слежения.",
        spotlightSize: 350,
      },
      controls: [
        { name: "title", label: "Заголовок", type: "text", defaultValue: "Spotlight Card" },
        { name: "description", label: "Описание", type: "text", defaultValue: "Наведите курсор на карточку для активации эффекта светового слежения." },
      ],
      generateUsage: (p) => `<CardSpotlight>
  <h3 className="text-lg font-bold">${p.title || "Spotlight Card"}</h3>
  <p className="text-sm text-muted-foreground mt-2">${p.description || "Interactive spotlight effect."}</p>
</CardSpotlight>`,
    },
    demoWrapper: (pascalName) => `  "card-spotlight": (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <CardSpotlight className="max-w-md w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
              ✦
            </div>
            <div>
              <h3 className="font-bold text-foreground">{props?.title || "Spotlight Card"}</h3>
              <p className="text-xs text-muted-foreground">Interactive cursor light</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {props?.description || "Наведите курсор мыши, чтобы увидеть динамический радиальный градиент, привязанный к координатам курсора."}
          </p>
        </CardSpotlight>
      </div>
    );
  },`,
  },

  {
    name: "card-tilt",
    pascalName: "CardTilt",
    title: "Card Tilt 3D",
    description: "Объемная карточка с 3D-наклоном по осям X/Y и световым бликом при движении мыши",
    code: `/**
 * @source https://21st.dev/community/card-tilt
 * @author 21st.dev
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardTiltProps extends React.HTMLAttributes<HTMLDivElement> {
  maxTilt?: number;
  perspective?: number;
}

export function CardTilt({
  className,
  children,
  maxTilt = 12,
  perspective = 1000,
  ...props
}: CardTiltProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * maxTilt;
    const rotateY = (x / (rect.width / 2)) * maxTilt;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      style={{ perspective: \`\${perspective}px\` }}
      className="inline-block"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: \`rotateX(\${rotate.x}deg) rotateY(\${rotate.y}deg)\`,
          transition: "transform 0.15s ease-out",
        }}
        className={cn(
          "rounded-xl border border-border bg-card p-6 text-card-foreground shadow-md transition-shadow hover:shadow-xl motion-reduce:transform-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        title: "3D Perspective Card",
        description: "Двигайте курсором внутри карточки для расчета угла пространственного наклона.",
        maxTilt: 12,
      },
      controls: [
        { name: "title", label: "Заголовок", type: "text", defaultValue: "3D Perspective Card" },
        { name: "description", label: "Описание", type: "text", defaultValue: "Двигайте курсором внутри карточки для расчета угла пространственного наклона." },
      ],
      generateUsage: (p) => `<CardTilt maxTilt={${p.maxTilt || 12}}>
  <h3 className="text-lg font-bold">${p.title || "3D Tilt Card"}</h3>
  <p className="text-sm text-muted-foreground mt-2">${p.description || "Smooth spatial movement."}</p>
</CardTilt>`,
    },
    demoWrapper: (pascalName) => `  "card-tilt": (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <CardTilt className="max-w-md w-full">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider">Spatial UI</span>
            <h3 className="text-lg font-bold text-foreground">{props?.title || "3D Perspective Card"}</h3>
            <p className="text-sm text-muted-foreground">
              {props?.description || "Двигайте курсором мыши, чтобы оценить расчет матрицы трансформации rotateX/rotateY в реальном времени."}
            </p>
          </div>
        </CardTilt>
      </div>
    );
  },`,
  },

  {
    name: "card-glass",
    pascalName: "CardGlass",
    title: "Card Glassmorphism",
    description: "Карточка с матовым полупрозрачным размытием фона (backdrop blur) и световой акцентной рамкой",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Glassmorphism preset with Tailwind v4 backdrop-blur
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export function CardGlass({ className, children, glow = true, ...props }: CardGlassProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/20 dark:border-white/10 bg-background/40 dark:bg-card/40 backdrop-blur-xl p-6 shadow-xl text-foreground",
        glow && "before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-b before:from-primary/20 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        title: "Glass Card",
        description: "Ультрасовременная полупрозрачная карточка с эффектом матового стекла.",
        glow: true,
      },
      controls: [
        { name: "title", label: "Заголовок", type: "text", defaultValue: "Glass Card" },
        { name: "glow", label: "Световой градиент рамки", type: "boolean", defaultValue: true },
      ],
      generateUsage: (p) => `<CardGlass${p.glow ? " glow" : ""}>
  <h3 className="text-lg font-bold">${p.title || "Glass Card"}</h3>
  <p className="text-sm text-muted-foreground mt-2">Frosted glass effect with backdrop blur.</p>
</CardGlass>`,
    },
    demoWrapper: (pascalName) => `  "card-glass": (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <CardGlass className="max-w-md w-full" glow={props?.glow !== false}>
          <h3 className="text-lg font-bold text-foreground">{props?.title || "Glass Card"}</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Идеально подходит для наложения на яркие фоновые градиенты и светящиеся сетки лендингов.
          </p>
        </CardGlass>
      </div>
    );
  },`,
  },

  {
    name: "input-floating-label",
    pascalName: "InputFloatingLabel",
    title: "Input Floating Label",
    description: "Текстовое поле с плавающей плавной анимацией лейбла при получении фокуса или наличии значения",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Material / Modern SaaS Floating Label Input
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputFloatingLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputFloatingLabel({
  id,
  className,
  label,
  value,
  onChange,
  ...props
}: InputFloatingLabelProps) {
  const [internalValue, setInternalValue] = React.useState("");
  const inputId = id || React.useId();
  const isFilled = Boolean(value ?? internalValue);

  return (
    <div className="relative w-full">
      <input
        id={inputId}
        value={value ?? internalValue}
        onChange={(e) => {
          setInternalValue(e.target.value);
          onChange?.(e);
        }}
        placeholder=" "
        className={cn(
          "peer h-12 w-full rounded-md border border-input bg-background px-3 pt-4 pb-1 text-sm text-foreground shadow-xs transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "absolute left-3 top-3.5 text-xs text-muted-foreground transition-all duration-150 pointer-events-none peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary",
          isFilled && "top-1.5 text-[10px] text-muted-foreground"
        )}
      >
        {label}
      </label>
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        label: "Email адрес",
        placeholder: "",
      },
      controls: [
        { name: "label", label: "Текст лейбла", type: "text", defaultValue: "Email адрес" },
      ],
      generateUsage: (p) => `<InputFloatingLabel label="${p.label || "Email адрес"}" type="email" />`,
    },
    demoWrapper: (pascalName) => `  "input-floating-label": (props?: any) => {
    return (
      <div className="p-8 max-w-sm mx-auto w-full">
        <InputFloatingLabel label={props?.label || "Email адрес"} type="email" />
      </div>
    );
  },`,
  },

  {
    name: "input-otp",
    pascalName: "InputOtp",
    title: "Input OTP",
    description: "Компонент ввода одноразовых 6-значных кодов верификации с отдельными ячейками и автофокусом",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Tokenized OTP input cells
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputOtpProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function InputOtp({ length = 6, value = "", onChange, className }: InputOtpProps) {
  const [internalVal, setInternalVal] = React.useState(value);
  const currentVal = value ?? internalVal;

  const handleChange = (index: number, char: string) => {
    const chars = currentVal.padEnd(length, " ").split("");
    chars[index] = char.slice(-1);
    const updated = chars.join("").trimEnd();
    setInternalVal(updated);
    onChange?.(updated);

    if (char && index < length - 1) {
      const nextInput = document.getElementById(\`otp-cell-\${index + 1}\`);
      nextInput?.focus();
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          id={\`otp-cell-\${i}\`}
          type="text"
          maxLength={1}
          value={currentVal[i] || ""}
          onChange={(e) => handleChange(i, e.target.value)}
          className="h-12 w-10 text-center font-mono text-lg font-bold rounded-md border border-input bg-background text-foreground shadow-xs transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
        />
      ))}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        length: 6,
      },
      controls: [
        { name: "length", label: "Длина кода (цифр)", type: "select", options: ["4", "6", "8"], defaultValue: "6" },
      ],
      generateUsage: (p) => `<InputOtp length={${Number(p.length) || 6}} onChange={(code) => console.log(code)} />`,
    },
    demoWrapper: (pascalName) => `  "input-otp": (props?: any) => {
    const [code, setCode] = React.useState("");
    const length = Number(props?.length) || 6;
    return (
      <div className="p-8 flex flex-col items-center justify-center gap-3">
        <InputOtp length={length} value={code} onChange={setCode} />
        <span className="text-xs font-mono text-muted-foreground">Введено: {code || "..."}</span>
      </div>
    );
  },`,
  },

  {
    name: "input-search-animated",
    pascalName: "InputSearchAnimated",
    title: "Input Search Animated",
    description: "Поисковый инпут с иконкой лупы, шорткатом ⌘K и плавной анимацией фокуса",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Search input with hotkey badge
 */

"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputSearchAnimatedProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export function InputSearchAnimated({
  className,
  value,
  onChange,
  onClear,
  ...props
}: InputSearchAnimatedProps) {
  const [query, setQuery] = React.useState("");
  const currentQuery = value !== undefined ? String(value) : query;

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        type="search"
        value={currentQuery}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange?.(e);
        }}
        placeholder="Поиск по документации..."
        className={cn(
          "h-10 w-full rounded-lg border border-input bg-background pl-9 pr-14 text-sm text-foreground shadow-xs transition-all focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none placeholder:text-muted-foreground",
          className
        )}
        {...props}
      />
      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
        {currentQuery ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              onClear?.();
            }}
            className="p-1 rounded text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            ⌘K
          </kbd>
        )}
      </div>
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        placeholder: "Поиск по каталогу...",
      },
      controls: [
        { name: "placeholder", label: "Текст подсказки", type: "text", defaultValue: "Поиск по каталогу..." },
      ],
      generateUsage: (p) => `<InputSearchAnimated placeholder="${p.placeholder || "Поиск..."}" />`,
    },
    demoWrapper: (pascalName) => `  "input-search-animated": (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <InputSearchAnimated placeholder={props?.placeholder || "Поиск по компонентам..."} />
      </div>
    );
  },`,
  },

  {
    name: "kbd",
    pascalName: "Kbd",
    title: "Kbd (Keyboard Badge)",
    description: "Компактный клавиатурный шорткат с визуальной глубиной для подсказок горячих клавиш",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Semantic tokenized kbd component
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded border border-border bg-muted/60 px-2 py-0.5 font-mono text-xs font-semibold text-muted-foreground shadow-2xs select-none",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        text: "⌘ + K",
      },
      controls: [
        { name: "text", label: "Комбинация клавиш", type: "text", defaultValue: "⌘ + K" },
      ],
      generateUsage: (p) => `<Kbd>${p.text || "⌘ + K"}</Kbd>`,
    },
    demoWrapper: (pascalName) => `  kbd: (props?: any) => {
    return (
      <div className="p-8 flex flex-wrap gap-3 items-center justify-center">
        <Kbd>{props?.text || "⌘ + K"}</Kbd>
        <Kbd>Ctrl + Shift + P</Kbd>
        <Kbd>ESC</Kbd>
        <Kbd>Enter ↵</Kbd>
      </div>
    );
  },`,
  },

  {
    name: "tabs-pill",
    pascalName: "TabsPill",
    title: "Tabs Pill",
    description: "Анимированные круглые вкладки-пилюли с мягким переключением состояний",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Pill tabs component
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabsPillProps {
  items: Array<{ id: string; label: string }>;
  activeId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function TabsPill({ items, activeId, onChange, className }: TabsPillProps) {
  const [selected, setSelected] = React.useState(activeId || items[0]?.id);

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div className={cn("inline-flex items-center rounded-full border border-border bg-muted/40 p-1 backdrop-blur-sm", className)}>
      {items.map((item) => {
        const isActive = (activeId ?? selected) === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelect(item.id)}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        activeTab: "overview",
      },
      controls: [
        { name: "activeTab", label: "Активная вкладка", type: "select", options: ["overview", "analytics", "reports", "settings"], defaultValue: "overview" },
      ],
      generateUsage: (p) => `<TabsPill
  items={[
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" }
  ]}
  activeId="${p.activeTab || "overview"}"
/>`,
    },
    demoWrapper: (pascalName) => `  "tabs-pill": (props?: any) => {
    const [tab, setTab] = React.useState(props?.activeTab || "overview");
    return (
      <div className="p-8 flex flex-col items-center justify-center gap-4">
        <TabsPill
          activeId={tab}
          onChange={setTab}
          items={[
            { id: "overview", label: "Обзор" },
            { id: "analytics", label: "Аналитика" },
            { id: "reports", label: "Отчёты" },
            { id: "settings", label: "Настройки" },
          ]}
        />
        <span className="text-xs text-muted-foreground">Выбрано: {tab}</span>
      </div>
    );
  },`,
  },

  {
    name: "tabs-vertical",
    pascalName: "TabsVertical",
    title: "Tabs Vertical",
    description: "Вертикальные навигационные вкладки для панелей настроек и профиля",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Vertical tabs component
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabsVerticalProps {
  items: Array<{ id: string; label: string; icon?: React.ReactNode }>;
  activeId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function TabsVertical({ items, activeId, onChange, className }: TabsVerticalProps) {
  const [selected, setSelected] = React.useState(activeId || items[0]?.id);

  return (
    <div className={cn("flex flex-col space-y-1 w-full max-w-[220px]", className)}>
      {items.map((item) => {
        const isActive = (activeId ?? selected) === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setSelected(item.id);
              onChange?.(item.id);
            }}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors",
              isActive
                ? "bg-accent text-accent-foreground font-semibold"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        activeId: "general",
      },
      controls: [
        { name: "activeId", label: "Активный пункт", type: "select", options: ["general", "profile", "billing", "security"], defaultValue: "general" },
      ],
      generateUsage: (p) => `<TabsVertical
  items={[
    { id: "general", label: "Общие" },
    { id: "profile", label: "Профиль" },
    { id: "billing", label: "Подписка" }
  ]}
  activeId="${p.activeId || "general"}"
/>`,
    },
    demoWrapper: (pascalName) => `  "tabs-vertical": (props?: any) => {
    const [tab, setTab] = React.useState(props?.activeId || "general");
    return (
      <div className="p-8 flex items-center justify-center">
        <TabsVertical
          activeId={tab}
          onChange={setTab}
          items={[
            { id: "general", label: "Общие настройки" },
            { id: "profile", label: "Профиль пользователя" },
            { id: "billing", label: "Биллинг и тариф" },
            { id: "security", label: "Безопасность" },
          ]}
        />
      </div>
    );
  },`,
  },

  {
    name: "badge-pulse",
    pascalName: "BadgePulse",
    title: "Badge Status Pulse",
    description: "Индикатор статуса системы с анимированной пульсирующей точкой (Online, Busy, Offline)",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Status badge with ping animation
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgePulseProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: "online" | "busy" | "offline" | "warning";
  label?: string;
}

export function BadgePulse({ status = "online", label, className, ...props }: BadgePulseProps) {
  const colors = {
    online: "bg-emerald-500",
    busy: "bg-rose-500",
    offline: "bg-muted-foreground",
    warning: "bg-amber-500",
  };

  const defaultLabels = {
    online: "В сети",
    busy: "Занят",
    offline: "Офлайн",
    warning: "Внимание",
  };

  const dotColor = colors[status] || colors.online;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground shadow-2xs",
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 motion-reduce:animate-none", dotColor)} />
        <span className={cn("relative inline-flex rounded-full h-2 w-2", dotColor)} />
      </span>
      <span>{label || defaultLabels[status]}</span>
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        status: "online",
        label: "Система в норме",
      },
      controls: [
        { name: "status", label: "Статус", type: "select", options: ["online", "busy", "offline", "warning"], defaultValue: "online" },
        { name: "label", label: "Текст", type: "text", defaultValue: "Система в норме" },
      ],
      generateUsage: (p) => `<BadgePulse status="${p.status || "online"}" label="${p.label || "Online"}" />`,
    },
    demoWrapper: (pascalName) => `  "badge-pulse": (props?: any) => {
    return (
      <div className="p-8 flex flex-wrap gap-4 items-center justify-center">
        <BadgePulse status={props?.status || "online"} label={props?.label || "Система в норме"} />
        <BadgePulse status="warning" label="Высокая нагрузка" />
        <BadgePulse status="busy" label="Техработы" />
      </div>
    );
  },`,
  },

  {
    name: "avatar-group",
    pascalName: "AvatarGroup",
    title: "Avatar Group",
    description: "Стек аватаров пользователей с частичным перекрытием и бейджем дополнительного количества",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Overlapping avatar stack
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarGroupProps {
  users: Array<{ name: string; avatar?: string }>;
  max?: number;
  className?: string;
}

export function AvatarGroup({ users, max = 4, className }: AvatarGroupProps) {
  const visible = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className={cn("flex items-center -space-x-2.5", className)}>
      {visible.map((user, i) => (
        <div
          key={i}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-bold text-foreground overflow-hidden shadow-2xs"
          title={user.name}
        >
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
          ) : (
            user.name.slice(0, 2).toUpperCase()
          )}
        </div>
      ))}
      {remaining > 0 && (
        <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-primary/10 text-primary text-xs font-bold shadow-2xs">
          +{remaining}
        </div>
      )}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        max: 4,
      },
      controls: [
        { name: "max", label: "Максимум аватаров", type: "select", options: ["3", "4", "5"], defaultValue: "4" },
      ],
      generateUsage: (p) => `<AvatarGroup
  users={[
    { name: "Alex" },
    { name: "Elena" },
    { name: "Ivan" },
    { name: "Maria" },
    { name: "Dmitry" }
  ]}
  max={${Number(p.max) || 4}}
/>`,
    },
    demoWrapper: (pascalName) => `  "avatar-group": (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <AvatarGroup
          max={Number(props?.max) || 4}
          users={[
            { name: "Александр" },
            { name: "Елена" },
            { name: "Максим" },
            { name: "Ольга" },
            { name: "Дмитрий" },
            { name: "Анна" },
          ]}
        />
      </div>
    );
  },`,
  },

  {
    name: "tooltip-animated",
    pascalName: "TooltipAnimated",
    title: "Tooltip Animated",
    description: "Всплывающая подсказка с плавной анимацией масштабирования и задержкой отображения",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Animated tooltip with trigger
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TooltipAnimatedProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

export function TooltipAnimated({ content, children, className }: TooltipAnimatedProps) {
  const [visible, setVisible] = React.useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={cn(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-2.5 py-1 rounded-md bg-foreground text-background text-[11px] font-medium shadow-md whitespace-nowrap animate-in fade-in zoom-in-95 duration-150",
            className
          )}
        >
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
        </div>
      )}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        content: "Скопировать ссылку",
      },
      controls: [
        { name: "content", label: "Текст подсказки", type: "text", defaultValue: "Скопировать ссылку" },
      ],
      generateUsage: (p) => `<TooltipAnimated content="${p.content || "Подсказка"}">
  <Button variant="outline">Наведи на меня</Button>
</TooltipAnimated>`,
    },
    demoWrapper: (pascalName) => `  "tooltip-animated": (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <TooltipAnimated content={props?.content || "Скопировать в буфер"}>
          <Button variant="outline">Наведи курсор для подсказки</Button>
        </TooltipAnimated>
      </div>
    );
  },`,
  },

  {
    name: "stepper",
    pascalName: "Stepper",
    title: "Stepper Wizard",
    description: "Многошаговый индикатор прогресса (Wizard) с номерами шагов и статусом выполнения",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Multi-step wizard indicator
 */

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function Stepper({ steps, currentStep = 1, className }: StepperProps) {
  return (
    <div className={cn("flex items-center w-full max-w-xl justify-between", className)}>
      {steps.map((label, idx) => {
        const stepNum = idx + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all",
                  isCompleted && "bg-primary text-primary-foreground",
                  isActive && "border-2 border-primary bg-background text-primary ring-4 ring-primary/20",
                  !isCompleted && !isActive && "border border-border bg-muted text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : stepNum}
              </div>
              <span className={cn("text-xs font-medium", isActive ? "text-foreground font-semibold" : "text-muted-foreground")}>
                {label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-2",
                  idx + 1 < currentStep ? "bg-primary" : "bg-border"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        currentStep: 2,
      },
      controls: [
        { name: "currentStep", label: "Текущий шаг", type: "select", options: ["1", "2", "3", "4"], defaultValue: "2" },
      ],
      generateUsage: (p) => `<Stepper
  steps={["Аккаунт", "Профиль", "Оплата", "Готово"]}
  currentStep={${Number(p.currentStep) || 2}}
/>`,
    },
    demoWrapper: (pascalName) => `  stepper: (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <Stepper
          steps={["Аккаунт", "Профиль", "Оплата", "Готово"]}
          currentStep={Number(props?.currentStep) || 2}
        />
      </div>
    );
  },`,
  },

  {
    name: "breadcrumbs",
    pascalName: "Breadcrumbs",
    title: "Breadcrumbs",
    description: "Навигационная цепочка хлебных крошек с разделителями и активным текущим роутом",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Accessible breadcrumb component
 */

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbsProps {
  items: Array<{ label: string; href?: string }>;
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-xs text-muted-foreground", className)}>
      <ol className="flex items-center gap-1.5">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <a href={item.href} className="hover:text-foreground transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className={cn(isLast && "text-foreground font-semibold")}>{item.label}</span>
              )}
              {!isLast && <ChevronRight className="h-3 w-3 text-muted-foreground/60" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
`,
    playgroundSchema: {
      defaultProps: {},
      controls: [],
      generateUsage: () => `<Breadcrumbs
  items={[
    { label: "Главная", href: "/" },
    { label: "Компоненты", href: "/ui" },
    { label: "Кнопки" }
  ]}
/>`,
    },
    demoWrapper: (pascalName) => `  breadcrumbs: () => {
    return (
      <div className="p-8 flex items-center justify-center">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Каталог", href: "/ui" },
            { label: "Примитивы", href: "/ui" },
            { label: "Breadcrumbs" },
          ]}
        />
      </div>
    );
  },`,
  },

  {
    name: "scroll-area",
    pascalName: "ScrollArea",
    title: "Scroll Area",
    description: "Контейнер с кастомным аккуратным скроллбаром без дефолтной браузерной полосы прокрутки",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Custom styled scroll area
 */

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  maxHeight?: string;
}

export function ScrollArea({ className, maxHeight = "240px", children, ...props }: ScrollAreaProps) {
  return (
    <div
      style={{ maxHeight }}
      className={cn(
        "overflow-y-auto rounded-lg border border-border p-4 text-xs text-foreground [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {},
      controls: [],
      generateUsage: () => `<ScrollArea maxHeight="200px">
  <div className="space-y-2">
    <p>Scrollable content item 1</p>
    <p>Scrollable content item 2</p>
  </div>
</ScrollArea>`,
    },
    demoWrapper: (pascalName) => `  "scroll-area": () => {
    return (
      <div className="p-8 max-w-sm mx-auto">
        <ScrollArea maxHeight="180px">
          <div className="space-y-2 text-xs">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="p-2 rounded bg-muted/40 border border-border/40">
                Элемент списка #{i + 1} с кастомным скроллбаром
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  },`,
  },

  {
    name: "rating",
    pascalName: "Rating",
    title: "Rating",
    description: "Интерактивный звёздный рейтинг с поддержкой наведения и выставления оценки",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Interactive star rating
 */

"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RatingProps {
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export function Rating({ max = 5, value = 4, onChange, className }: RatingProps) {
  const [internalValue, setInternalValue] = React.useState(value);
  const [hoverValue, setHoverValue] = React.useState<number | null>(null);

  const active = hoverValue ?? (value ?? internalValue);

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      {Array.from({ length: max }).map((_, idx) => {
        const starNum = idx + 1;
        const isFilled = starNum <= active;

        return (
          <button
            key={idx}
            type="button"
            onClick={() => {
              setInternalValue(starNum);
              onChange?.(starNum);
            }}
            onMouseEnter={() => setHoverValue(starNum)}
            onMouseLeave={() => setHoverValue(null)}
            className="p-0.5 text-muted-foreground transition-transform hover:scale-110 focus:outline-none"
          >
            <Star
              className={cn(
                "h-5 w-5 transition-colors",
                isFilled ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        value: 4,
      },
      controls: [
        { name: "value", label: "Количество звёзд", type: "select", options: ["1", "2", "3", "4", "5"], defaultValue: "4" },
      ],
      generateUsage: (p) => `<Rating value={${Number(p.value) || 4}} onChange={(v) => console.log(v)} />`,
    },
    demoWrapper: (pascalName) => `  rating: (props?: any) => {
    const [val, setVal] = React.useState(Number(props?.value) || 4);
    return (
      <div className="p-8 flex flex-col items-center justify-center gap-3">
        <Rating value={val} onChange={setVal} />
        <span className="text-xs font-mono text-muted-foreground">Выбрано: {val} из 5 звёзд</span>
      </div>
    );
  },`,
  },

  {
    name: "collapsible",
    pascalName: "Collapsible",
    title: "Collapsible",
    description: "Интерактивный сворачиваемый блок с кнопкой раскрытия контента",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Collapsible component
 */

"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CollapsibleProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Collapsible({ title, defaultOpen = false, children, className }: CollapsibleProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className={cn("rounded-lg border border-border bg-card overflow-hidden text-xs", className)}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-3.5 font-semibold text-foreground hover:bg-muted/50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && <div className="p-3.5 pt-0 text-muted-foreground border-t border-border/40 leading-relaxed">{children}</div>}
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {
        title: "Дополнительные параметры",
      },
      controls: [
        { name: "title", label: "Заголовок блока", type: "text", defaultValue: "Дополнительные параметры" },
      ],
      generateUsage: (p) => `<Collapsible title="${p.title || "Параметры"}">
  Контент скрытого блока...
</Collapsible>`,
    },
    demoWrapper: (pascalName) => `  collapsible: (props?: any) => {
    return (
      <div className="p-8 max-w-md mx-auto">
        <Collapsible title={props?.title || "Показать подробности"}>
          Здесь находится развернутая информация, логи или расширенные поля конфигурации, скрытые по умолчанию.
        </Collapsible>
      </div>
    );
  },`,
  },

  {
    name: "toggle-group",
    pascalName: "ToggleGroup",
    title: "Toggle Group",
    description: "Группа взаимосвязанных переключателей для панелей форматирования текста",
    code: `/**
 * @source https://ui.shadcn.com/
 * @author AMANTLE UI
 * @license MIT
 * @modified Connected toggle button group
 */

"use client";

import * as React from "react";
import { Bold, Italic, Underline } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToggleGroupProps {
  className?: string;
}

export function ToggleGroup({ className }: ToggleGroupProps) {
  const [active, setActive] = React.useState<Record<string, boolean>>({ bold: true });

  const toggle = (key: string) => {
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={cn("inline-flex rounded-lg border border-border bg-card p-1 shadow-2xs", className)}>
      <button
        type="button"
        onClick={() => toggle("bold")}
        className={cn(
          "h-8 w-8 rounded flex items-center justify-center text-xs transition-colors",
          active.bold ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Bold className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => toggle("italic")}
        className={cn(
          "h-8 w-8 rounded flex items-center justify-center text-xs transition-colors",
          active.italic ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Italic className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => toggle("underline")}
        className={cn(
          "h-8 w-8 rounded flex items-center justify-center text-xs transition-colors",
          active.underline ? "bg-accent text-accent-foreground font-bold" : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Underline className="h-4 w-4" />
      </button>
    </div>
  );
}
`,
    playgroundSchema: {
      defaultProps: {},
      controls: [],
      generateUsage: () => `<ToggleGroup />`,
    },
    demoWrapper: (pascalName) => `  "toggle-group": () => {
    return (
      <div className="p-8 flex items-center justify-center">
        <ToggleGroup />
      </div>
    );
  },`,
  },
];

export async function runBatch1() {
  console.log("🚀 Starting Batch 1: 18 UI Primitives & Interactive Compounds...");

  let componentsMap = fs.readFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), "utf-8");
  let playgroundSchemas = fs.readFileSync(path.join(ROOT_DIR, "lib", "playground-schemas.ts"), "utf-8");

  for (const comp of BATCH_1_COMPONENTS) {
    console.log(`  Writing registry/ui/${comp.name}.tsx...`);
    fs.writeFileSync(path.join(REGISTRY_UI, `${comp.name}.tsx`), comp.code, "utf-8");

    // Add import to components-map if missing
    const importStmt = `import { ${comp.pascalName} } from "@/registry/ui/${comp.name}";\n`;
    if (!componentsMap.includes(`@/registry/ui/${comp.name}`)) {
      componentsMap = `${importStmt}${componentsMap}`;
    }

    // Add demo to componentMap if missing
    const keyPattern = new RegExp(`(?:["']${comp.name}["']|\\b${comp.name})\\s*:`);
    if (!keyPattern.test(componentsMap)) {
      const demoSnippet = comp.demoWrapper(comp.pascalName);
      componentsMap = componentsMap.replace(
        "export const componentMap: Record<string, React.ComponentType<any>> = {",
        `export const componentMap: Record<string, React.ComponentType<any>> = {\n${demoSnippet}`
      );
    }

    // Add playground schema if missing
    if (!playgroundSchemas.includes(`"${comp.name}":`)) {
      const schemaEntry = `  "${comp.name}": {
    defaultProps: ${JSON.stringify(comp.playgroundSchema.defaultProps, null, 6)},
    controls: [
${comp.playgroundSchema.controls
  .map(
    (c) => `      {
        name: "${c.name}",
        label: "${c.label}",
        type: "${c.type}",
        ${c.options ? `options: ${JSON.stringify(c.options)},` : ""}
        defaultValue: ${JSON.stringify(c.defaultValue)},
      }`
  )
  .join(",\n")}
    ],
    generateUsage: (props) => {
      return \`${comp.playgroundSchema.generateUsage(comp.playgroundSchema.defaultProps)}\`;
    },
  },\n`;

      playgroundSchemas = playgroundSchemas.replace(
        "export const COMPONENT_PLAYGROUND_SCHEMAS: Record<string, PlaygroundComponentSchema> = {",
        `export const COMPONENT_PLAYGROUND_SCHEMAS: Record<string, PlaygroundComponentSchema> = {\n${schemaEntry}`
      );
    }
  }

  fs.writeFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), componentsMap, "utf-8");
  fs.writeFileSync(path.join(ROOT_DIR, "lib", "playground-schemas.ts"), playgroundSchemas, "utf-8");

  console.log("🏗️ Rebuilding registry manifests...");
  const total = buildRegistry();
  console.log(`✅ Batch 1 complete! Total registry items: ${total}`);
}

runBatch1().catch(console.error);
