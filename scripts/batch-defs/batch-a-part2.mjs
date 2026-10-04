export const BATCH_A_PART2 = [
  {
    name: "switch-ios-spring",
    title: "iOS Spring Switch",
    description: "Переключатель в стиле iOS с плавной физической пружиной и мягким масштабированием при клике.",
    category: "ui",
    subcategory: "Toggles / Apple Spring",
    code: `/**
 * @source https://amantle.dev/components/switch-ios-spring
 * @author AMANTLE UI
 * @license MIT
 * @modified iOS style spring toggle physics
 */
"use client";

import * as React from "react";

export function SwitchIosSpring({
  defaultChecked = true,
  onChange,
}: {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const [checked, setChecked] = React.useState(defaultChecked);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={toggle}
      className={\`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none \${
        checked ? "bg-emerald-500" : "bg-muted"
      }\`}
    >
      <span
        className={\`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:w-7 \${
          checked ? "translate-x-5" : "translate-x-0"
        }\`}
      />
    </button>
  );
}
export default SwitchIosSpring;
`,
    renderCode: `<SwitchIosSpring />`
  },
  {
    name: "switch-labeled-icon",
    title: "Day-Night Labeled Switch",
    description: "Морфинг-переключатель день/ночь с анимированными иконками солнца и полумесяца.",
    category: "ui",
    subcategory: "Toggles / Themed Switches",
    code: `/**
 * @source https://amantle.dev/components/switch-labeled-icon
 * @author AMANTLE UI
 * @license MIT
 * @modified Day-Night icon morphing switch
 */
"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";

export function SwitchLabeledIcon() {
  const [isDark, setIsDark] = React.useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={\`relative inline-flex h-8 w-16 items-center rounded-full p-1 transition-colors duration-300 \${
        isDark ? "bg-slate-900 border border-slate-700" : "bg-amber-100 border border-amber-300"
      }\`}
    >
      <div
        className={\`flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] \${
          isDark
            ? "translate-x-8 bg-slate-800 text-indigo-300"
            : "translate-x-0 bg-white text-amber-500"
        }\`}
      >
        {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
      </div>
    </button>
  );
}
export default SwitchLabeledIcon;
`,
    renderCode: `<SwitchLabeledIcon />`
  },
  {
    name: "switch-segmented-slider",
    title: "Segmented Slider Switch",
    description: "Трехпозиционный сегментированный переключатель со скользящей плашкой выбора.",
    category: "ui",
    subcategory: "Toggles / Segmented Controls",
    code: `/**
 * @source https://amantle.dev/components/switch-segmented-slider
 * @author AMANTLE UI
 * @license MIT
 * @modified 3-position sliding segment pill
 */
"use client";

import * as React from "react";

export function SwitchSegmentedSlider() {
  const [active, setActive] = React.useState(0);
  const options = ["День", "Неделя", "Месяц"];

  return (
    <div className="relative inline-flex rounded-xl bg-muted p-1 border border-border">
      <div
        className="absolute top-1 bottom-1 rounded-lg bg-card shadow-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          width: \`calc(\${100 / options.length}% - 4px)\`,
          left: \`calc(\${(active * 100) / options.length}% + 2px)\`,
        }}
      />
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => setActive(i)}
          className={\`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors \${
            active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }\`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
export default SwitchSegmentedSlider;
`,
    renderCode: `<SwitchSegmentedSlider />`
  },
  {
    name: "slider-range-dual",
    title: "Dual Range Slider",
    description: "Слайдер ценового диапазона с двумя независимыми ползунками (Min / Max) и тултипами.",
    category: "ui",
    subcategory: "Sliders / Multi-Thumb",
    code: `/**
 * @source https://amantle.dev/components/slider-range-dual
 * @author AMANTLE UI
 * @license MIT
 * @modified Dual-thumb range slider with interactive track
 */
"use client";

import * as React from "react";

export function SliderRangeDual() {
  const [min, setMin] = React.useState(25);
  const [max, setMax] = React.useState(75);

  return (
    <div className="max-w-xs w-full space-y-3">
      <div className="flex justify-between text-xs font-medium text-foreground">
        <span>От {min} $</span>
        <span>До {max} $</span>
      </div>
      <div className="relative h-2 bg-muted rounded-full flex items-center">
        <div
          className="absolute h-full bg-primary rounded-full"
          style={{ left: \`\${min}%\`, width: \`\${max - min}%\` }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 5))}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto h-2 cursor-pointer"
        />
        <input
          type="range"
          min={0}
          max={100}
          value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 5))}
          className="absolute w-full appearance-none bg-transparent pointer-events-auto h-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
export default SliderRangeDual;
`,
    renderCode: `<SliderRangeDual />`
  },
  {
    name: "slider-volume-stepped",
    title: "Stepped Volume Slider",
    description: "Дискретный слайдер уровня громкости с четкими засечками делений и иконкой состояния.",
    category: "ui",
    subcategory: "Sliders / Stepped Ticks",
    code: `/**
 * @source https://amantle.dev/components/slider-volume-stepped
 * @author AMANTLE UI
 * @license MIT
 * @modified Discrete tick slider with audio volume feedback
 */
"use client";

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";

export function SliderVolumeStepped() {
  const [vol, setVol] = React.useState(60);

  return (
    <div className="max-w-xs w-full flex items-center gap-3">
      <button onClick={() => setVol(vol === 0 ? 50 : 0)} className="text-muted-foreground hover:text-foreground">
        {vol === 0 ? <VolumeX className="w-4 h-4 text-destructive" /> : <Volume2 className="w-4 h-4 text-primary" />}
      </button>
      <input
        type="range"
        min={0}
        max={100}
        step={20}
        value={vol}
        onChange={(e) => setVol(Number(e.target.value))}
        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
      />
      <span className="text-xs font-mono font-medium text-muted-foreground w-8 text-right">{vol}%</span>
    </div>
  );
}
export default SliderVolumeStepped;
`,
    renderCode: `<SliderVolumeStepped />`
  },
  {
    name: "slider-circular-dial",
    title: "Circular Dial Knob",
    description: "Поворотный круглый регулятор (Knob dial) с круговой шкалой прогресса и значением в центре.",
    category: "ui",
    subcategory: "Sliders / Rotary Dials",
    code: `/**
 * @source https://amantle.dev/components/slider-circular-dial
 * @author AMANTLE UI
 * @license MIT
 * @modified Circular rotary SVG gauge dial
 */
"use client";

import * as React from "react";

export function SliderCircularDial() {
  const [val, setVal] = React.useState(65);

  const radius = 38;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (val / 100) * circ;

  return (
    <div className="inline-flex flex-col items-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle cx="48" cy="48" r={radius} className="stroke-muted" strokeWidth="6" fill="transparent" />
          <circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-primary transition-all duration-300"
            strokeWidth="6"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute font-bold text-sm text-foreground">{val}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
        className="mt-2 w-28 accent-primary cursor-pointer"
      />
    </div>
  );
}
export default SliderCircularDial;
`,
    renderCode: `<SliderCircularDial />`
  },
  {
    name: "checkbox-animated-check",
    title: "Animated SVG Checkbox",
    description: "Чекбокс с плавной отрисовкой SVG галочки (path stroke-dashoffset) при клике.",
    category: "ui",
    subcategory: "Checkboxes / Vector Motion",
    code: `/**
 * @source https://amantle.dev/components/checkbox-animated-check
 * @author AMANTLE UI
 * @license MIT
 * @modified SVG vector path-draw animation
 */
"use client";

import * as React from "react";

export function CheckboxAnimatedCheck({
  label = "Принимаю условия соглашения",
}: {
  label?: string;
}) {
  const [checked, setChecked] = React.useState(true);

  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer select-none">
      <div
        onClick={() => setChecked(!checked)}
        className={\`w-5 h-5 rounded-lg border flex items-center justify-center transition-all duration-200 \${
          checked ? "bg-primary border-primary shadow-sm" : "border-border bg-card"
        }\`}
      >
        <svg
          viewBox="0 0 24 24"
          className={\`w-3.5 h-3.5 stroke-primary-foreground fill-none stroke-[3] transition-all duration-300 \${
            checked ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }\`}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </label>
  );
}
export default CheckboxAnimatedCheck;
`,
    renderCode: `<CheckboxAnimatedCheck />`
  },
  {
    name: "radio-card-group",
    title: "Radio Card Group",
    description: "Группа интерактивных карточек выбора тарифа со встроенным селектором и списком фичей.",
    category: "ui",
    subcategory: "Checkboxes / Card Selectors",
    code: `/**
 * @source https://amantle.dev/components/radio-card-group
 * @author AMANTLE UI
 * @license MIT
 * @modified Rich card selection group with accent outline
 */
"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";

export function RadioCardGroup() {
  const [selected, setSelected] = React.useState("pro");

  const plans = [
    { id: "free", name: "Стартовый", price: "0 ₽", desc: "Для личных пет-проектов" },
    { id: "pro", name: "Профессиональный", price: "1 290 ₽", desc: "Для продакшн команд" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md w-full">
      {plans.map((p) => {
        const isSel = selected === p.id;
        return (
          <div
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={\`cursor-pointer rounded-2xl border p-4 transition-all duration-200 \${
              isSel
                ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-md"
                : "border-border bg-card hover:border-primary/40"
            }\`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-foreground">{p.name}</span>
              <CheckCircle2
                className={\`w-4 h-4 transition-opacity \${isSel ? "text-primary opacity-100" : "opacity-0"}\`}
              />
            </div>
            <div className="font-mono text-lg font-extrabold text-foreground">{p.price}</div>
            <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
export default RadioCardGroup;
`,
    renderCode: `<RadioCardGroup />`
  },
  {
    name: "checkbox-tree-hierarchical",
    title: "Hierarchical Checkbox Tree",
    description: "Древовидные чекбоксы с полувыделенным состоянием (indeterminate) родительских узлов.",
    category: "ui",
    subcategory: "Checkboxes / Nested Trees",
    code: `/**
 * @source https://amantle.dev/components/checkbox-tree-hierarchical
 * @author AMANTLE UI
 * @license MIT
 * @modified Indeterminate parent state propagation
 */
"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";

export function CheckboxTreeHierarchical() {
  const [items, setItems] = React.useState({
    docs: true,
    components: true,
    templates: false,
  });

  const allChecked = items.docs && items.components && items.templates;
  const isIndeterminate = !allChecked && (items.docs || items.components || items.templates);

  const toggleAll = () => {
    const next = !allChecked;
    setItems({ docs: next, components: next, templates: next });
  };

  return (
    <div className="p-3 bg-card rounded-2xl border border-border max-w-xs w-full space-y-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={allChecked}
          ref={(el) => {
            if (el) el.indeterminate = isIndeterminate;
          }}
          onChange={toggleAll}
          className="rounded border-border accent-primary cursor-pointer"
        />
        <span className="text-xs font-bold text-foreground">Выбрать все модули</span>
      </div>
      <div className="pl-5 space-y-1.5 border-l border-border/60 ml-2">
        {Object.entries(items).map(([k, v]) => (
          <label key={k} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={v}
              onChange={() => setItems({ ...items, [k]: !v })}
              className="rounded border-border accent-primary"
            />
            <span className="text-xs text-muted-foreground capitalize">{k}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
export default CheckboxTreeHierarchical;
`,
    renderCode: `<CheckboxTreeHierarchical />`
  },
  {
    name: "badge-status-dot",
    title: "Status Dot Beacon Badge",
    description: "Минималистичный бейдж статуса сервера (Online / Offline / Idle) с пульсирующим маяком.",
    category: "ui",
    subcategory: "Badges / Live Status",
    code: `/**
 * @source https://amantle.dev/components/badge-status-dot
 * @author AMANTLE UI
 * @license MIT
 * @modified Pulsing radar beacon dot
 */
"use client";

import * as React from "react";

export function BadgeStatusDot({
  status = "online",
  label = "Сервер активен",
}: {
  status?: "online" | "idle" | "error";
  label?: string;
}) {
  const styles = {
    online: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 beacon-bg-emerald-500",
    idle: "bg-amber-500/10 text-amber-500 border-amber-500/20 beacon-bg-amber-500",
    error: "bg-rose-500/10 text-rose-500 border-rose-500/20 beacon-bg-rose-500",
  };

  const dotColor = {
    online: "bg-emerald-500",
    idle: "bg-amber-500",
    error: "bg-rose-500",
  }[status];

  return (
    <span className={\`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border \${styles[status]}\`}>
      <span className="relative flex h-2 w-2">
        <span className={\`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 \${dotColor}\`} />
        <span className={\`relative inline-flex rounded-full h-2 w-2 \${dotColor}\`} />
      </span>
      <span>{label}</span>
    </span>
  );
}
export default BadgeStatusDot;
`,
    renderCode: `<BadgeStatusDot status="online" label="Кластер в работе" />`
  },
  {
    name: "badge-live-stream",
    title: "Live Stream Soundwave Badge",
    description: "Красный бейдж прямой трансляции LIVE с анимированным графическим эквалайзером.",
    category: "ui",
    subcategory: "Badges / Live Status",
    code: `/**
 * @source https://amantle.dev/components/badge-live-stream
 * @author AMANTLE UI
 * @license MIT
 * @modified Broadcast live equalizer bars
 */
"use client";

import * as React from "react";

export function BadgeLiveStream() {
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-600/15 border border-rose-600/30 text-rose-500 text-xs font-bold tracking-wider uppercase">
      <span className="flex items-end gap-0.5 h-3">
        <span className="w-0.5 h-2 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-0.5 h-3 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-0.5 h-1.5 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </span>
      <span>LIVE</span>
    </span>
  );
}
export default BadgeLiveStream;
`,
    renderCode: `<BadgeLiveStream />`
  },
  {
    name: "badge-gradient-pill",
    title: "Holographic Gradient Pill",
    description: "Голографический бейдж с мягким переливом градиента и стеклянной обводкой.",
    category: "ui",
    subcategory: "Badges / Glowing Accents",
    code: `/**
 * @source https://amantle.dev/components/badge-gradient-pill
 * @author AMANTLE UI
 * @license MIT
 * @modified Iridescent rainbow gradient glass pill
 */
"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

export function BadgeGradientPill({
  children = "Новая версия 2.4",
}: {
  children?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-amber-500/10 border border-fuchsia-500/30 text-xs font-semibold text-foreground backdrop-blur-sm shadow-sm">
      <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
      <span>{children}</span>
    </span>
  );
}
export default BadgeGradientPill;
`,
    renderCode: `<BadgeGradientPill>Анонс 2.4</BadgeGradientPill>`
  },
  {
    name: "badge-counter-notification",
    title: "Bouncing Counter Badge",
    description: "Круглый индикатор количества непрочитанных уведомлений с пружинной анимацией обновления.",
    category: "ui",
    subcategory: "Badges / Notification Counters",
    code: `/**
 * @source https://amantle.dev/components/badge-counter-notification
 * @author AMANTLE UI
 * @license MIT
 * @modified Bouncing spring counter pill
 */
"use client";

import * as React from "react";
import { Bell } from "lucide-react";

export function BadgeCounterNotification({
  count = 7,
}: {
  count?: number;
}) {
  return (
    <div className="relative inline-flex items-center p-2 rounded-xl bg-card border border-border">
      <Bell className="w-5 h-5 text-muted-foreground" />
      <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-md animate-pulse">
        {count}
      </span>
    </div>
  );
}
export default BadgeCounterNotification;
`,
    renderCode: `<BadgeCounterNotification count={12} />`
  },
  {
    name: "badge-dismissable",
    title: "Dismissable Filter Pill",
    description: "Интерактивный тег с крестиком закрытия и плавным схлопыванием при удалении.",
    category: "ui",
    subcategory: "Badges / Interactive Tags",
    code: `/**
 * @source https://amantle.dev/components/badge-dismissable
 * @author AMANTLE UI
 * @license MIT
 * @modified Collapsible tag removal animation
 */
"use client";

import * as React from "react";
import { X } from "lucide-react";

export function BadgeDismissable({
  label = "Фильтр: Активные",
}: {
  label?: string;
}) {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border transition-all">
      <span>{label}</span>
      <button onClick={() => setVisible(false)} className="hover:text-destructive transition-colors">
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}
export default BadgeDismissable;
`,
    renderCode: `<BadgeDismissable />`
  },
  {
    name: "badge-copy-token",
    title: "Copy Token Badge",
    description: "Компактная плашка токена API с мгновенным копированием в буфер обмена.",
    category: "ui",
    subcategory: "Badges / Interactive Tags",
    code: `/**
 * @source https://amantle.dev/components/badge-copy-token
 * @author AMANTLE UI
 * @license MIT
 * @modified Instant token copy with check feedback
 */
"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

export function BadgeCopyToken({
  token = "sk_amantle_9a87f6b",
}: {
  token?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-muted border border-border font-mono text-xs text-foreground hover:bg-muted/80 transition-colors"
    >
      <span>{token}</span>
      {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
    </button>
  );
}
export default BadgeCopyToken;
`,
    renderCode: `<BadgeCopyToken />`
  },
  {
    name: "badge-verified-tier",
    title: "Verified Trust Seal Badge",
    description: "Золотой бейдж верифицированного партнера со сверкающей иконкой доверия.",
    category: "ui",
    subcategory: "Badges / Verified Badges",
    code: `/**
 * @source https://amantle.dev/components/badge-verified-tier
 * @author AMANTLE UI
 * @license MIT
 * @modified Gold verified trust seal
 */
"use client";

import * as React from "react";
import { ShieldCheck } from "lucide-react";

export function BadgeVerifiedTier() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold">
      <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
      <span>Verified Partner</span>
    </span>
  );
}
export default BadgeVerifiedTier;
`,
    renderCode: `<BadgeVerifiedTier />`
  },
  {
    name: "card-inner-glow",
    title: "Inner Rim Glow Card",
    description: "Премиальная темная карточка с эффектом матового свечения внутренних граней.",
    category: "ui",
    subcategory: "Cards / Depth & Lighting",
    code: `/**
 * @source https://amantle.dev/components/card-inner-glow
 * @author AMANTLE UI
 * @license MIT
 * @modified Inner rim lighting effect
 */
"use client";

import * as React from "react";
import { Layers } from "lucide-react";

export function CardInnerGlow({
  title = "Высокоскоростное ядро",
  description = "Архитектура с нулевым оверхедом и аппаратным ускорением.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="relative rounded-3xl p-6 bg-card border border-border shadow-2xl overflow-hidden max-w-sm w-full group">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
        <Layers className="w-5 h-5" />
      </div>
      <h4 className="font-bold text-base text-foreground mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
export default CardInnerGlow;
`,
    renderCode: `<CardInnerGlow />`
  },
  {
    name: "card-gradient-mesh",
    title: "Animated Gradient Mesh Card",
    description: "Карточка с плавно колышущимся анимированным градиентным фоном.",
    category: "ui",
    subcategory: "Cards / Depth & Lighting",
    code: `/**
 * @source https://amantle.dev/components/card-gradient-mesh
 * @author AMANTLE UI
 * @license MIT
 * @modified Fluid animated mesh backdrop
 */
"use client";

import * as React from "react";
import { Cpu } from "lucide-react";

export function CardGradientMesh() {
  return (
    <div className="relative rounded-3xl p-6 bg-card border border-border/80 overflow-hidden max-w-sm w-full shadow-lg">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-pink-500/30 to-violet-600/30 rounded-full blur-2xl animate-pulse" />
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Cpu className="w-5 h-5" />
        </div>
        <h4 className="font-bold text-base text-foreground mb-1">Mesh Градиент</h4>
        <p className="text-xs text-muted-foreground">Глубокие визуальные акценты для SaaS дашбордов.</p>
      </div>
    </div>
  );
}
export default CardGradientMesh;
`,
    renderCode: `<CardGradientMesh />`
  },
  {
    name: "card-flip-3d",
    title: "3D Flip Interactive Card",
    description: "Двусторонняя карточка с плавной 3D-анимацией переворота на 180 градусов при клике.",
    category: "ui",
    subcategory: "Cards / 3D & Depth",
    code: `/**
 * @source https://amantle.dev/components/card-flip-3d
 * @author AMANTLE UI
 * @license MIT
 * @modified 3D perspective flip on click
 */
"use client";

import * as React from "react";
import { RotateCw, Sparkles, Code2 } from "lucide-react";

export function CardFlip3D() {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div className="w-72 h-44 [perspective:1000px] cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div
        className={\`relative w-full h-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] shadow-xl \${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }\`}
      >
        <div className="absolute inset-0 rounded-2xl p-5 bg-card border border-border [backface-visibility:hidden] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Sparkles className="w-5 h-5 text-primary" />
            <RotateCw className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <h4 className="font-bold text-foreground">Лицевая сторона</h4>
            <p className="text-xs text-muted-foreground mt-1">Нажмите, чтобы перевернуть карту</p>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl p-5 bg-primary text-primary-foreground [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <Code2 className="w-5 h-5" />
          <div>
            <h4 className="font-bold">Оборотная сторона</h4>
            <p className="text-xs opacity-80 mt-1">Интерактивный 3D flip поворот</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardFlip3D;
`,
    renderCode: `<CardFlip3D />`
  },
  {
    name: "card-metric-trend",
    title: "KPI Metric Trend Card",
    description: "Статистическая карточка ключевого показателя (KPI) с процентным трендом и мини-бейдж-индикатором.",
    category: "ui",
    subcategory: "Cards / Analytics",
    code: `/**
 * @source https://amantle.dev/components/card-metric-trend
 * @author AMANTLE UI
 * @license MIT
 * @modified KPI metric trend indicator
 */
"use client";

import * as React from "react";
import { TrendingUp, Users } from "lucide-react";

export function CardMetricTrend({
  title = "Активные пользователи",
  value = "48 920",
  trend = "+14.8%",
}: {
  title?: string;
  value?: string;
  trend?: string;
}) {
  return (
    <div className="p-5 rounded-2xl bg-card border border-border shadow-sm max-w-xs w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
        <Users className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="text-2xl font-extrabold text-foreground mb-2">{value}</div>
      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
        <TrendingUp className="w-3.5 h-3.5" />
        <span>{trend} за этот месяц</span>
      </div>
    </div>
  );
}
export default CardMetricTrend;
`,
    renderCode: `<CardMetricTrend />`
  },
  {
    name: "card-profile-header",
    title: "Profile Header Card",
    description: "Карточка профиля с баннером обложки, перекрывающим аватаром и кнопкой подписки.",
    category: "ui",
    subcategory: "Cards / Profile Layouts",
    code: `/**
 * @source https://amantle.dev/components/card-profile-header
 * @author AMANTLE UI
 * @license MIT
 * @modified Profile header banner with overlapping avatar
 */
"use client";

import * as React from "react";
import { UserCheck } from "lucide-react";

export function CardProfileHeader({
  name = "Александр Волков",
  role = "Lead Design Engineer",
}: {
  name?: string;
  role?: string;
}) {
  return (
    <div className="rounded-3xl overflow-hidden bg-card border border-border shadow-lg max-w-sm w-full">
      <div className="h-20 bg-gradient-to-r from-violet-600 to-indigo-600" />
      <div className="p-5 pt-0 relative">
        <div className="w-14 h-14 rounded-2xl bg-card border-4 border-card -mt-7 flex items-center justify-center text-foreground font-bold shadow-md bg-secondary">
          АВ
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-sm text-foreground">{name}</h4>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-medium">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Подписаться</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CardProfileHeader;
`,
    renderCode: `<CardProfileHeader />`
  },
  {
    name: "card-neubrutalist-shadow",
    title: "Neubrutalist Card Frame",
    description: "Карточка с черным контуром 2px и твердой диагональной тенью 6px в стиле нео-брутализма.",
    category: "ui",
    subcategory: "Cards / Neubrutalism",
    code: `/**
 * @source https://amantle.dev/components/card-neubrutalist-shadow
 * @author AMANTLE UI
 * @license MIT
 * @modified Neubrutalist 6px hard shadow card
 */
"use client";

import * as React from "react";
import { Terminal } from "lucide-react";

export function CardNeubrutalistShadow() {
  return (
    <div className="p-6 rounded-xl border-2 border-black bg-amber-200 text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full">
      <Terminal className="w-6 h-6 mb-3" />
      <h4 className="font-mono font-bold text-base mb-1">Neubrutalist Карточка</h4>
      <p className="font-mono text-xs opacity-90 leading-relaxed">
        Максимальная выразительность и тактильный отклик для контентных блоков.
      </p>
    </div>
  );
}
export default CardNeubrutalistShadow;
`,
    renderCode: `<CardNeubrutalistShadow />`
  },
  {
    name: "button-pulse-ring",
    title: "Pulse Ring Radar Button",
    description: "Кнопка с расширяющимся круговым радарным кольцом для акцентирования внимания.",
    category: "ui",
    subcategory: "Buttons / Radar Rings",
    code: `/**
 * @source https://amantle.dev/components/button-pulse-ring
 * @author AMANTLE UI
 * @license MIT
 * @modified Radar beacon expanding rings
 */
"use client";

import * as React from "react";
import { Radio } from "lucide-react";

export function ButtonPulseRing() {
  return (
    <div className="relative inline-flex items-center justify-center">
      <span className="absolute inline-flex h-full w-full rounded-xl bg-primary opacity-30 animate-ping" />
      <button className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg">
        <Radio className="w-4 h-4" />
        <span>Подключить радар</span>
      </button>
    </div>
  );
}
export default ButtonPulseRing;
`,
    renderCode: `<ButtonPulseRing />`
  },
  {
    name: "button-gradient-flow",
    title: "Gradient Flow Button",
    description: "Кнопка с плавно переливающимся градиентным фоном 200% ширины.",
    category: "ui",
    subcategory: "Buttons / Animated Flow",
    code: `/**
 * @source https://amantle.dev/components/button-gradient-flow
 * @author AMANTLE UI
 * @license MIT
 * @modified Flowing animated gradient position
 */
"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

export function ButtonGradientFlow() {
  return (
    <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-md">
      <Sparkles className="w-4 h-4" />
      <span>Градиентный поток</span>
    </button>
  );
}
export default ButtonGradientFlow;
`,
    renderCode: `<ButtonGradientFlow />`
  },
  {
    name: "input-stepper-number",
    title: "Numeric Stepper Input",
    description: "Числовой инпут с кнопками плюс/минус и плавной анимацией изменения значения.",
    category: "ui",
    subcategory: "Inputs / Stepper Controls",
    code: `/**
 * @source https://amantle.dev/components/input-stepper-number
 * @author AMANTLE UI
 * @license MIT
 * @modified Plus-minus stepper with limits
 */
"use client";

import * as React from "react";
import { Plus, Minus } from "lucide-react";

export function InputStepperNumber({
  min = 1,
  max = 20,
}: {
  min?: number;
  max?: number;
}) {
  const [val, setVal] = React.useState(3);

  return (
    <div className="inline-flex items-center rounded-xl border border-border bg-card p-1 shadow-sm">
      <button
        onClick={() => setVal(Math.max(min, val - 1))}
        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="w-10 text-center font-mono font-bold text-sm text-foreground">{val}</span>
      <button
        onClick={() => setVal(Math.min(max, val + 1))}
        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
      >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
export default InputStepperNumber;
`,
    renderCode: `<InputStepperNumber />`
  }
];

console.log("Batch A part 2 loaded:", BATCH_A_PART2.length);
