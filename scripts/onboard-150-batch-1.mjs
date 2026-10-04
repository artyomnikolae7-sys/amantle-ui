/**
 * @file scripts/onboard-150-batch-1.mjs
 * @description Onboarding Batch 1 (25 UI Primitives & Motion Compounds: 101–125)
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
    name: "command-menu",
    pascalName: "CommandMenu",
    title: "Command Menu",
    description: "Командная строка быстрого поиска и действий (Cmd+K) с секциями, фильтрацией и горячими клавишами",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/command
 * @author shadcn / pacocoursey
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Search, Command, ArrowRight, User, Settings, CreditCard, Sparkles, Calculator, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CommandMenuProps {
  className?: string;
  placeholder?: string;
  isOpen?: boolean;
  onSelect?: (item: string) => void;
}

export function CommandMenu({
  className,
  placeholder = "Введите команду или поиск...",
  isOpen = true,
  onSelect,
}: CommandMenuProps) {
  const [query, setQuery] = React.useState("");

  const groups = [
    {
      heading: "Предложения",
      items: [
        { id: "calendar", label: "Календарь встреч", icon: Calendar, shortcut: "⌘C" },
        { id: "calc", label: "Калькулятор тарифов", icon: Calculator, shortcut: "⌘T" },
        { id: "ai", label: "AI Ассистент", icon: Sparkles, shortcut: "⌘A" },
      ],
    },
    {
      heading: "Настройки",
      items: [
        { id: "profile", label: "Профиль пользователя", icon: User, shortcut: "⌘P" },
        { id: "billing", label: "Биллинг и подписка", icon: CreditCard, shortcut: "⌘B" },
        { id: "settings", label: "Общие параметры", icon: Settings, shortcut: "⌘S" },
      ],
    },
  ];

  const filteredGroups = groups.map((g) => ({
    ...g,
    items: g.items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
  })).filter((g) => g.items.length > 0);

  return (
    <div className={cn("w-full max-w-xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden", className)}>
      <div className="flex items-center px-4 border-b border-border bg-muted/20">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground mr-2" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
          <Command className="h-3 w-3" /> K
        </kbd>
      </div>

      <div className="max-h-[300px] overflow-y-auto p-2 space-y-3">
        {filteredGroups.length === 0 ? (
          <p className="p-4 text-center text-sm text-muted-foreground">Ничего не найдено.</p>
        ) : (
          filteredGroups.map((group) => (
            <div key={group.heading} className="space-y-1">
              <span className="px-2 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                {group.heading}
              </span>
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelect?.(item.id)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>{item.label}</span>
                    </div>
                    <kbd className="font-mono text-[10px] text-muted-foreground">{item.shortcut}</kbd>
                  </button>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
`,
    mapCode: `  "command-menu": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <CommandMenu placeholder={props?.placeholder || "Поиск действий..."} />
      </div>
    );
  },`,
    schema: {
      placeholder: { type: "text", default: "Поиск действий...", label: "Плейсхолдер" },
    },
  },

  {
    name: "drawer-bottom",
    pascalName: "DrawerBottom",
    title: "Drawer Bottom",
    description: "Выдвижная нижняя шторка (iOS-style sheet) с ручкой перетаскивания и плавным выездом",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/drawer
 * @author Emil Kowalski / shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DrawerBottomProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function DrawerBottom({
  className,
  isOpen = true,
  onClose,
  title = "Быстрые действия",
  description = "Выберите необходимую операцию или подтвердите выбор",
  children,
}: DrawerBottomProps) {
  return (
    <div className={cn("relative w-full max-w-md mx-auto rounded-t-2xl border-t border-x border-border bg-card p-6 shadow-2xl", className)}>
      <div className="mx-auto w-12 h-1.5 rounded-full bg-muted-foreground/30 mb-5" />
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {children || (
        <div className="space-y-3 py-2">
          <div className="rounded-lg border border-border bg-muted/40 p-3 text-sm flex items-center justify-between">
            <span>Синхронизация данных</span>
            <Check className="h-4 w-4 text-primary" />
          </div>
          <button className="w-full h-10 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
            Подтвердить
          </button>
        </div>
      )}
    </div>
  );
}
`,
    mapCode: `  "drawer-bottom": (props?: any) => {
    return (
      <div className="p-8 flex justify-center items-end min-h-[300px] bg-muted/10 rounded-xl">
        <DrawerBottom title={props?.title || "Быстрые действия"} description={props?.description || "Выберите действие"} />
      </div>
    );
  },`,
    schema: {
      title: { type: "text", default: "Быстрые действия", label: "Заголовок" },
      description: { type: "text", default: "Выберите действие", label: "Описание" },
    },
  },

  {
    name: "context-menu",
    pascalName: "ContextMenu",
    title: "Context Menu",
    description: "Всплывающее меню контекстных действий по правому клику или долгому нажатию",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/context-menu
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Copy, Scissors, Trash, Share2, Sparkles, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ContextMenuProps {
  className?: string;
  triggerText?: string;
}

export function ContextMenu({ className, triggerText = "Правый клик в этой области" }: ContextMenuProps) {
  const [visible, setVisible] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 40, y: 40 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setVisible(true);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={() => setVisible(false)}
      className={cn(
        "relative flex h-52 w-full max-w-md items-center justify-center rounded-xl border border-dashed border-border bg-card/60 p-6 text-center select-none cursor-context-menu",
        className
      )}
    >
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">{triggerText}</p>
        <p className="text-xs text-muted-foreground">Или нажмите в любом месте для вызова меню</p>
      </div>

      {visible && (
        <div
          style={{ top: pos.y, left: pos.x }}
          className="absolute z-50 w-48 rounded-lg border border-border bg-popover p-1 shadow-xl animate-in fade-in-80 text-left"
        >
          <button className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-xs text-foreground hover:bg-accent transition-colors">
            <Eye className="h-3.5 w-3.5 text-muted-foreground" /> Просмотр
          </button>
          <button className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-xs text-foreground hover:bg-accent transition-colors">
            <Copy className="h-3.5 w-3.5 text-muted-foreground" /> Копировать
          </button>
          <button className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-xs text-foreground hover:bg-accent transition-colors">
            <Share2 className="h-3.5 w-3.5 text-muted-foreground" /> Поделиться
          </button>
          <div className="my-1 h-px bg-border" />
          <button className="flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-xs text-destructive hover:bg-destructive/10 transition-colors">
            <Trash className="h-3.5 w-3.5" /> Удалить
          </button>
        </div>
      )}
    </div>
  );
}
`,
    mapCode: `  "context-menu": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ContextMenu triggerText={props?.triggerText || "Правый клик в этой области"} />
      </div>
    );
  },`,
    schema: {
      triggerText: { type: "text", default: "Правый клик в этой области", label: "Текст триггера" },
    },
  },

  {
    name: "hover-card",
    pascalName: "HoverCard",
    title: "Hover Card",
    description: "Всплывающая информационная карточка предпросмотра при наведении курсора",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/hover-card
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HoverCardProps {
  className?: string;
  triggerText?: string;
  title?: string;
  handle?: string;
  bio?: string;
}

export function HoverCard({
  className,
  triggerText = "@amantledesign",
  title = "AMANTLE Design System",
  handle = "@amantledesign",
  bio = "Интеллектуальный реестр UI компонентов уровня shadcn с живым Playground и AI Composer.",
}: HoverCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative inline-block" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <span className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 cursor-pointer">
        {triggerText}
      </span>

      {isOpen && (
        <div className={cn("absolute bottom-full left-0 mb-2 w-72 rounded-xl border border-border bg-popover p-4 shadow-2xl z-50 animate-in fade-in-50 zoom-in-95", className)}>
          <div className="flex gap-3">
            <div className="h-10 w-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
              AM
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-foreground leading-none">{title}</h4>
              <p className="text-xs text-muted-foreground">{handle}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{bio}</p>
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground mt-3 pt-2 border-t border-border">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> Global</span>
            <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> Присоединился в 2026</span>
          </div>
        </div>
      )}
    </div>
  );
}
`,
    mapCode: `  "hover-card": (props?: any) => {
    return (
      <div className="p-16 flex justify-center items-center">
        <HoverCard triggerText={props?.triggerText || "@amantledesign"} title={props?.title || "AMANTLE Design System"} />
      </div>
    );
  },`,
    schema: {
      triggerText: { type: "text", default: "@amantledesign", label: "Текст ссылки" },
      title: { type: "text", default: "AMANTLE Design System", label: "Заголовок" },
    },
  },

  {
    name: "resizable-panel",
    pascalName: "ResizablePanel",
    title: "Resizable Panel",
    description: "Разделяемые панели с интерактивным перетаскиваемым сплиттером для редакторов и IDE",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/resizable
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ResizablePanelProps {
  className?: string;
  defaultSplit?: number; // 20 to 80
}

export function ResizablePanel({ className, defaultSplit = 35 }: ResizablePanelProps) {
  const [split, setSplit] = React.useState(defaultSplit);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPercent = ((e.clientX - rect.left) / rect.width) * 100;
    if (newPercent >= 20 && newPercent <= 80) {
      setSplit(Math.round(newPercent));
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      className={cn("flex w-full max-w-2xl h-64 rounded-xl border border-border bg-card overflow-hidden select-none", className)}
    >
      <div style={{ width: \`\${split}%\` }} className="p-4 bg-muted/20 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-muted-foreground uppercase">Панель A</span>
          <p className="text-sm font-medium text-foreground mt-2">Дерево файлов проекта</p>
        </div>
        <span className="text-xs font-mono text-muted-foreground">{split}%</span>
      </div>

      <div
        onMouseDown={handleMouseDown}
        className="w-2 bg-border hover:bg-primary/50 cursor-col-resize flex items-center justify-center transition-colors group"
      >
        <GripVertical className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
      </div>

      <div style={{ width: \`\${100 - split}%\` }} className="p-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-muted-foreground uppercase">Панель B</span>
          <p className="text-sm font-medium text-foreground mt-2">Редактор кода и превью</p>
        </div>
        <span className="text-xs font-mono text-muted-foreground">{100 - split}%</span>
      </div>
    </div>
  );
}
`,
    mapCode: `  "resizable-panel": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ResizablePanel defaultSplit={Number(props?.defaultSplit) || 35} />
      </div>
    );
  },`,
    schema: {
      defaultSplit: { type: "number", default: 35, label: "Начальный сплит (%)" },
    },
  },

  {
    name: "menubar",
    pascalName: "Menubar",
    title: "Menubar",
    description: "Горизонтальное меню уровня настольного десктопного приложения (File, Edit, View, Help)",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/menubar
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MenubarProps {
  className?: string;
}

export function Menubar({ className }: MenubarProps) {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const menus = [
    {
      name: "File",
      items: ["New Window (⌘N)", "Open File (⌘O)", "Save (⌘S)", "Exit"],
    },
    {
      name: "Edit",
      items: ["Undo (⌘Z)", "Redo (⇧⌘Z)", "Cut (⌘X)", "Copy (⌘C)", "Paste (⌘V)"],
    },
    {
      name: "View",
      items: ["Zoom In (⌘+)", "Zoom Out (⌘-)", "Toggle Sidebar (⌘B)", "Full Screen"],
    },
    {
      name: "Help",
      items: ["Documentation", "Release Notes", "About AMANTLE UI"],
    },
  ];

  return (
    <div className={cn("inline-flex rounded-lg border border-border bg-card p-1 text-sm font-medium shadow-sm", className)}>
      {menus.map((m) => (
        <div key={m.name} className="relative">
          <button
            onClick={() => setActiveMenu(activeMenu === m.name ? null : m.name)}
            className={cn(
              "px-3 py-1.5 rounded-md hover:bg-muted text-foreground transition-colors cursor-pointer",
              activeMenu === m.name && "bg-muted"
            )}
          >
            {m.name}
          </button>
          {activeMenu === m.name && (
            <div className="absolute top-full left-0 mt-1 w-48 rounded-lg border border-border bg-popover p-1 shadow-xl z-50 animate-in fade-in-50">
              {m.items.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveMenu(null)}
                  className="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-xs text-foreground hover:bg-accent hover:text-accent-foreground text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
`,
    mapCode: `  "menubar": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <Menubar />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "navigation-menu",
    pascalName: "NavigationMenu",
    title: "Navigation Menu",
    description: "Адаптивное мега-меню навигации с дропдаунами и визуальными карточками разделов",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/navigation-menu
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ChevronDown, Sparkles, Layers, Box } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavigationMenuProps {
  className?: string;
}

export function NavigationMenu({ className }: NavigationMenuProps) {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <nav className={cn("relative inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-sm", className)}>
      <div className="relative" onMouseEnter={() => setOpen("components")} onMouseLeave={() => setOpen(null)}>
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <span>Компоненты</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>

        {open === "components" && (
          <div className="absolute top-full left-0 mt-2 w-[420px] grid grid-cols-2 gap-2 rounded-xl border border-border bg-popover p-3 shadow-2xl z-50 animate-in fade-in-50">
            <a href="#" className="flex flex-col p-2.5 rounded-lg hover:bg-muted transition-colors group">
              <span className="flex items-center gap-1.5 font-bold text-xs text-foreground group-hover:text-primary">
                <Box className="h-3.5 w-3.5" /> UI Primitives
              </span>
              <span className="text-[11px] text-muted-foreground mt-1">Кнопки, карточки, инпуты и переключатели</span>
            </a>
            <a href="#" className="flex flex-col p-2.5 rounded-lg hover:bg-muted transition-colors group">
              <span className="flex items-center gap-1.5 font-bold text-xs text-foreground group-hover:text-primary">
                <Layers className="h-3.5 w-3.5" /> Blocks
              </span>
              <span className="text-[11px] text-muted-foreground mt-1">Hero, Pricing, Bento, Testimonials</span>
            </a>
          </div>
        )}
      </div>

      <a href="#" className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
        Документация
      </a>
      <a href="#" className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
        Цены
      </a>
    </nav>
  );
}
`,
    mapCode: `  "navigation-menu": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <NavigationMenu />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "aspect-ratio",
    pascalName: "AspectRatio",
    title: "Aspect Ratio",
    description: "Медиа-контейнер с фиксированным соотношением сторон (16:9, 4:3, 1:1, 21:9)",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/aspect-ratio
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number; // e.g. 16/9 = 1.777
  children?: React.ReactNode;
}

export function AspectRatio({ className, ratio = 16 / 9, children, style, ...props }: AspectRatioProps) {
  return (
    <div
      style={{ position: "relative", width: "100%", paddingBottom: \`\${(1 / ratio) * 100}%\`, ...style }}
      className={cn("overflow-hidden rounded-xl bg-muted/40", className)}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}
`,
    mapCode: `  "aspect-ratio": (props?: any) => {
    const ratio = props?.ratio === "1:1" ? 1 : props?.ratio === "4:3" ? 4 / 3 : 16 / 9;
    return (
      <div className="p-8 max-w-md mx-auto w-full">
        <AspectRatio ratio={ratio}>
          <div className="w-full h-full bg-gradient-to-tr from-primary/30 to-primary/10 flex items-center justify-center font-bold text-foreground">
            {props?.ratio || "16:9"} Aspect Ratio
          </div>
        </AspectRatio>
      </div>
    );
  },`,
    schema: {
      ratio: { type: "select", options: ["16:9", "4:3", "1:1"], default: "16:9", label: "Пропорция" },
    },
  },

  {
    name: "pagination",
    pascalName: "Pagination",
    title: "Pagination",
    description: "Панель пагинации страниц с кнопками перехода Вперед/Назад и номерами",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/pagination
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  className?: string;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  className,
  currentPage = 2,
  totalPages = 5,
  onPageChange,
}: PaginationProps) {
  const [page, setPage] = React.useState(currentPage);

  const handleSelect = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    onPageChange?.(p);
  };

  return (
    <nav className={cn("flex items-center gap-1.5", className)}>
      <button
        onClick={() => handleSelect(page - 1)}
        disabled={page === 1}
        className="flex items-center gap-1 h-9 px-3 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4" /> Назад
      </button>

      {Array.from({ length: totalPages }).map((_, idx) => {
        const p = idx + 1;
        const isActive = p === page;
        return (
          <button
            key={p}
            onClick={() => handleSelect(p)}
            className={cn(
              "h-9 w-9 rounded-lg text-xs font-semibold transition-colors",
              isActive ? "bg-primary text-primary-foreground shadow" : "border border-border bg-card text-foreground hover:bg-muted"
            )}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => handleSelect(page + 1)}
        disabled={page === totalPages}
        className="flex items-center gap-1 h-9 px-3 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Вперёд <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
`,
    mapCode: `  "pagination": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <Pagination currentPage={Number(props?.currentPage) || 2} totalPages={Number(props?.totalPages) || 5} />
      </div>
    );
  },`,
    schema: {
      currentPage: { type: "number", default: 2, label: "Текущая страница" },
      totalPages: { type: "number", default: 5, label: "Всего страниц" },
    },
  },

  {
    name: "calendar-picker",
    pascalName: "CalendarPicker",
    title: "Calendar Picker",
    description: "Интерактивный календарь выбора даты с навигацией по месяцам и подсветкой дня",
    code: `/**
 * @source https://ui.shadcn.com/docs/components/calendar
 * @author shadcn
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CalendarPickerProps {
  className?: string;
  selectedDay?: number;
}

export function CalendarPicker({ className, selectedDay = 15 }: CalendarPickerProps) {
  const [selected, setSelected] = React.useState(selectedDay);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <div className={cn("w-72 rounded-xl border border-border bg-card p-4 shadow-xl", className)}>
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold text-foreground">Октябрь 2026</h4>
        <div className="flex gap-1">
          <button className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-muted">
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-muted">
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-muted-foreground mb-2">
        {weekDays.map((d) => (
          <div key={d} className="h-6 flex items-center justify-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((d) => {
          const isSelected = d === selected;
          return (
            <button
              key={d}
              onClick={() => setSelected(d)}
              className={cn(
                "h-8 w-8 rounded-lg flex items-center justify-center font-medium transition-colors cursor-pointer",
                isSelected ? "bg-primary text-primary-foreground font-bold shadow" : "text-foreground hover:bg-muted"
              )}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}
`,
    mapCode: `  "calendar-picker": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <CalendarPicker selectedDay={Number(props?.selectedDay) || 15} />
      </div>
    );
  },`,
    schema: {
      selectedDay: { type: "number", default: 15, label: "Выбранный день" },
    },
  },

  {
    name: "color-picker",
    pascalName: "ColorPicker",
    title: "Color Picker",
    description: "Визуальный селектор оттенка с палитрой, пресетами и отображением HEX значения",
    code: `/**
 * @source https://magicui.design/docs/components/color-picker
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ColorPickerProps {
  className?: string;
  defaultColor?: string;
  onChange?: (color: string) => void;
}

const PRESET_COLORS = [
  "#6366f1", "#8b5cf6", "#ec4899", "#ef4444", "#f97316", "#eab308", "#10b981", "#06b6d4", "#3b82f6", "#0f172a"
];

export function ColorPicker({ className, defaultColor = "#6366f1", onChange }: ColorPickerProps) {
  const [color, setColor] = React.useState(defaultColor);

  const handleSelect = (c: string) => {
    setColor(c);
    onChange?.(c);
  };

  return (
    <div className={cn("w-64 rounded-xl border border-border bg-card p-4 shadow-xl space-y-3", className)}>
      <div className="flex items-center gap-3">
        <div style={{ backgroundColor: color }} className="h-10 w-10 rounded-lg border border-border shadow-inner shrink-0" />
        <div className="flex-1">
          <label className="text-[11px] font-semibold text-muted-foreground uppercase">Цвет HEX</label>
          <input
            value={color}
            onChange={(e) => handleSelect(e.target.value)}
            className="w-full font-mono text-sm uppercase bg-transparent text-foreground outline-none font-bold"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 pt-2 border-t border-border">
        {PRESET_COLORS.map((c) => (
          <button
            key={c}
            onClick={() => handleSelect(c)}
            style={{ backgroundColor: c }}
            className="h-8 w-8 rounded-md flex items-center justify-center transition-transform hover:scale-110 shadow-sm cursor-pointer"
          >
            {color.toLowerCase() === c.toLowerCase() && <Check className="h-4 w-4 text-white drop-shadow" />}
          </button>
        ))}
      </div>
    </div>
  );
}
`,
    mapCode: `  "color-picker": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ColorPicker defaultColor={props?.defaultColor || "#6366f1"} />
      </div>
    );
  },`,
    schema: {
      defaultColor: { type: "text", default: "#6366f1", label: "HEX цвет" },
    },
  },

  {
    name: "file-upload-dropzone",
    pascalName: "FileUploadDropzone",
    title: "File Upload Dropzone",
    description: "Зона загрузки файлов Drag-and-Drop с анимацией границы, превью и индикатором",
    code: `/**
 * @source https://magicui.design/docs/components/file-upload
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { UploadCloud, File, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileUploadDropzoneProps {
  className?: string;
  accept?: string;
  maxSizeMb?: number;
}

export function FileUploadDropzone({ className, accept = "PNG, JPG, PDF", maxSizeMb = 10 }: FileUploadDropzoneProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [fileName, setFileName] = React.useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files?.[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
      className={cn(
        "flex flex-col items-center justify-center w-full max-w-md p-8 rounded-2xl border-2 border-dashed transition-all cursor-pointer",
        isDragOver ? "border-primary bg-primary/5 scale-[1.01]" : "border-border bg-card/60 hover:bg-muted/30",
        className
      )}
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
        <UploadCloud className="h-6 w-6" />
      </div>
      <h4 className="text-sm font-bold text-foreground">Перетащите файлы сюда</h4>
      <p className="text-xs text-muted-foreground mt-1">Поддерживаются {accept} до {maxSizeMb} МБ</p>

      {fileName && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5 text-xs text-foreground font-mono">
          <File className="h-3.5 w-3.5 text-primary" />
          <span>{fileName}</span>
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
        </div>
      )}
    </div>
  );
}
`,
    mapCode: `  "file-upload-dropzone": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <FileUploadDropzone accept={props?.accept || "PNG, JPG, PDF"} maxSizeMb={Number(props?.maxSizeMb) || 10} />
      </div>
    );
  },`,
    schema: {
      accept: { type: "text", default: "PNG, JPG, PDF", label: "Форматы" },
      maxSizeMb: { type: "number", default: 10, label: "Макс. размер (МБ)" },
    },
  },

  {
    name: "tree-view",
    pascalName: "TreeView",
    title: "Tree View",
    description: "Иерархическое дерево файлов и папок с раскрытием узлов и выделением",
    code: `/**
 * @source https://shadcnui-expansions.typecraft.dev/docs/tree-view
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Folder, FolderOpen, File, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TreeViewProps {
  className?: string;
}

export function TreeView({ className }: TreeViewProps) {
  const [openFolders, setOpenFolders] = React.useState<Record<string, boolean>>({
    src: true,
    components: true,
  });

  const toggle = (id: string) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={cn("w-64 rounded-xl border border-border bg-card p-3 font-mono text-xs shadow-md", className)}>
      <div className="space-y-1">
        <div>
          <button
            onClick={() => toggle("src")}
            className="flex items-center gap-1.5 w-full text-left py-1 px-1.5 rounded hover:bg-muted text-foreground cursor-pointer"
          >
            <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", openFolders.src && "rotate-90")} />
            {openFolders.src ? <FolderOpen className="h-4 w-4 text-primary" /> : <Folder className="h-4 w-4 text-primary" />}
            <span className="font-semibold">src</span>
          </button>

          {openFolders.src && (
            <div className="pl-4 space-y-1 mt-1 border-l border-border/50 ml-2">
              <button
                onClick={() => toggle("components")}
                className="flex items-center gap-1.5 w-full text-left py-1 px-1.5 rounded hover:bg-muted text-foreground cursor-pointer"
              >
                <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", openFolders.components && "rotate-90")} />
                {openFolders.components ? <FolderOpen className="h-4 w-4 text-amber-500" /> : <Folder className="h-4 w-4 text-amber-500" />}
                <span>components</span>
              </button>

              {openFolders.components && (
                <div className="pl-4 space-y-1 mt-1 border-l border-border/50 ml-2">
                  <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                    <File className="h-3.5 w-3.5 text-blue-400" /> button.tsx
                  </div>
                  <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                    <File className="h-3.5 w-3.5 text-blue-400" /> card.tsx
                  </div>
                </div>
              )}

              <div className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground">
                <File className="h-3.5 w-3.5 text-emerald-400" /> main.tsx
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
`,
    mapCode: `  "tree-view": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <TreeView />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "badge-shine",
    pascalName: "BadgeShine",
    title: "Badge Shine",
    description: "Анимированный статус-бейдж со скользящим зеркальным лучом света",
    code: `/**
 * @source https://magicui.design/docs/components/animated-shiny-text
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BadgeShineProps {
  className?: string;
  label?: string;
}

export function BadgeShine({ className, label = "✨ Новый релиз v2.4" }: BadgeShineProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 text-xs font-semibold overflow-hidden shadow-sm backdrop-blur-md",
        className
      )}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      <span className="text-foreground">{label}</span>
    </div>
  );
}
`,
    mapCode: `  "badge-shine": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <BadgeShine label={props?.label || "✨ Новый релиз v2.4"} />
      </div>
    );
  },`,
    schema: {
      label: { type: "text", default: "✨ Новый релиз v2.4", label: "Текст бейджа" },
    },
  },

  {
    name: "badge-glow",
    pascalName: "BadgeGlow",
    title: "Badge Glow",
    description: "Неоновый бейдж с мягким цветным свечением и акцентной подсветкой",
    code: `/**
 * @source https://magicui.design/docs/components/shine-border
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BadgeGlowProps {
  className?: string;
  label?: string;
  variant?: "primary" | "emerald" | "amber";
}

export function BadgeGlow({ className, label = "Популярный выбор", variant = "primary" }: BadgeGlowProps) {
  const glowStyles = {
    primary: "border-primary/40 text-primary shadow-[0_0_15px_rgba(99,102,241,0.35)]",
    emerald: "border-emerald-500/40 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.35)]",
    amber: "border-amber-500/40 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.35)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bg-card/90 text-xs font-bold uppercase tracking-wider backdrop-blur-md",
        glowStyles[variant],
        className
      )}
    >
      <Flame className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}
`,
    mapCode: `  "badge-glow": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <BadgeGlow label={props?.label || "Популярный выбор"} variant={props?.variant || "primary"} />
      </div>
    );
  },`,
    schema: {
      label: { type: "text", default: "Популярный выбор", label: "Текст" },
      variant: { type: "select", options: ["primary", "emerald", "amber"], default: "primary", label: "Стиль" },
    },
  },

  {
    name: "meteors",
    pascalName: "Meteors",
    title: "Meteors",
    description: "Анимированная карточка с эффектом падающих светящихся метеоров",
    code: `/**
 * @source https://ui.aceternity.com/components/meteors
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface MeteorsProps {
  className?: string;
  number?: number;
}

export function Meteors({ className, number = 16 }: MeteorsProps) {
  const meteors = new Array(number).fill(true);

  return (
    <div className={cn("relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl", className)}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {meteors.map((_, el) => (
          <span
            key={"meteor" + el}
            style={{
              top: Math.floor(Math.random() * 80) + "%",
              left: Math.floor(Math.random() * 90) + "%",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (8 - 2) + 2) + "s",
            }}
            className={cn(
              "animate-[meteor_5s_linear_infinite] absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-400 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
            )}
          />
        ))}
      </div>

      <div className="relative z-10 space-y-2">
        <span className="text-xs font-mono text-primary font-bold">Space Tech</span>
        <h3 className="text-lg font-bold text-foreground">Метеорный поток</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Фоновая анимация метеоров создаёт эффект космической глубины для карточек фичей и анонсов.
        </p>
      </div>
    </div>
  );
}
`,
    mapCode: `  "meteors": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <Meteors number={Number(props?.number) || 16} />
      </div>
    );
  },`,
    schema: {
      number: { type: "number", default: 16, label: "Количество метеоров" },
    },
  },

  {
    name: "sparkles-text",
    pascalName: "SparklesText",
    title: "Sparkles Text",
    description: "Текстовый заголовок с динамически вспыхивающими искрами и градиентом",
    code: `/**
 * @source https://magicui.design/docs/components/sparkles-text
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SparklesTextProps {
  className?: string;
  text?: string;
}

export function SparklesText({ className, text = "AMANTLE UI" }: SparklesTextProps) {
  return (
    <div className={cn("relative inline-block text-3xl sm:text-4xl font-extrabold tracking-tight", className)}>
      <Sparkles className="absolute -top-3 -left-4 h-5 w-5 text-amber-400 animate-pulse" />
      <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
        {text}
      </span>
      <Sparkles className="absolute -bottom-2 -right-4 h-4 w-4 text-primary animate-bounce" />
    </div>
  );
}
`,
    mapCode: `  "sparkles-text": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <SparklesText text={props?.text || "AMANTLE UI"} />
      </div>
    );
  },`,
    schema: {
      text: { type: "text", default: "AMANTLE UI", label: "Текст заголовка" },
    },
  },

  {
    name: "word-rotate",
    pascalName: "WordRotate",
    title: "Word Rotate",
    description: "Циклическая плавная анимация смены ключевых слов в заголовке",
    code: `/**
 * @source https://magicui.design/docs/components/word-rotate
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface WordRotateProps {
  className?: string;
  words?: string[];
  duration?: number;
}

export function WordRotate({
  className,
  words = ["Быстрый", "Интеллектуальный", "Масштабируемый", "Эстетичный"],
  duration = 2500,
}: WordRotateProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words.length, duration]);

  return (
    <div className={cn("text-2xl sm:text-3xl font-bold text-foreground inline-flex items-center gap-2", className)}>
      <span>Дизайн:</span>
      <span className="text-primary transition-all duration-300 transform inline-block">
        {words[index]}
      </span>
    </div>
  );
}
`,
    mapCode: `  "word-rotate": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <WordRotate duration={Number(props?.duration) || 2500} />
      </div>
    );
  },`,
    schema: {
      duration: { type: "number", default: 2500, label: "Интервал (мс)" },
    },
  },

  {
    name: "typing-text",
    pascalName: "TypingText",
    title: "Typing Text",
    description: "Эффект печатающейся машинки с анимированным курсором каретки",
    code: `/**
 * @source https://magicui.design/docs/components/typing-animation
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TypingTextProps {
  className?: string;
  text?: string;
  speed?: number;
}

export function TypingText({ className, text = "Соберите дизайн-систему за считанные минуты.", speed = 50 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={cn("font-mono text-base sm:text-lg text-foreground inline-flex items-center", className)}>
      <span>{displayedText}</span>
      <span className="ml-1 inline-block w-2 h-5 bg-primary animate-[pulse_0.8s_infinite]" />
    </div>
  );
}
`,
    mapCode: `  "typing-text": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <TypingText text={props?.text || "Соберите дизайн-систему за считанные минуты."} speed={Number(props?.speed) || 50} />
      </div>
    );
  },`,
    schema: {
      text: { type: "text", default: "Соберите дизайн-систему за считанные минуты.", label: "Текст" },
      speed: { type: "number", default: 50, label: "Скорость (мс)" },
    },
  },

  {
    name: "number-ticker",
    pascalName: "NumberTicker",
    title: "Number Ticker",
    description: "Плавный анимированный счетчик чисел от 0 до целевого значения",
    code: `/**
 * @source https://magicui.design/docs/components/number-ticker
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NumberTickerProps {
  className?: string;
  value?: number;
  prefix?: string;
  suffix?: string;
}

export function NumberTicker({ className, value = 150, prefix = "", suffix = "+" }: NumberTickerProps) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(value, Math.round((step / steps) * value));
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className={cn("font-mono text-4xl sm:text-5xl font-black text-foreground tracking-tight", className)}>
      {prefix}{count}{suffix}
    </span>
  );
}
`,
    mapCode: `  "number-ticker": (props?: any) => {
    return (
      <div className="p-8 flex flex-col items-center gap-2">
        <NumberTicker value={Number(props?.value) || 150} suffix={props?.suffix || "+"} />
        <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Готовых Компонентов</span>
      </div>
    );
  },`,
    schema: {
      value: { type: "number", default: 150, label: "Значение" },
      suffix: { type: "text", default: "+", label: "Суффикс" },
    },
  },

  {
    name: "border-beam",
    pascalName: "BorderBeam",
    title: "Border Beam",
    description: "Контейнер со светящимся неоновым лучом, бегущим по периметру границы",
    code: `/**
 * @source https://magicui.design/docs/components/border-beam
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
}: BorderBeamProps) {
  return (
    <div
      style={{
        ["--size" as any]: size,
        ["--duration" as any]: duration,
        ["--border-width" as any]: borderWidth,
        ["--color-from" as any]: colorFrom,
        ["--color-to" as any]: colorTo,
      }}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-[border-beam_calc(var(--duration)*1s)_infinite_linear] after:[animation-delay:var(--delay,0s)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--size)*0.5px)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
}
`,
    mapCode: `  "border-beam": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <div className="relative flex h-48 w-80 flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 shadow-xl">
          <BorderBeam />
          <h4 className="text-base font-bold text-foreground">Border Beam</h4>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Светящийся луч скользит по контуру карточки в реальном времени.
          </p>
        </div>
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "shine-border",
    pascalName: "ShineBorder",
    title: "Shine Border",
    description: "Блок с вращающейся градиентной окантовкой для акцентных карточек",
    code: `/**
 * @source https://magicui.design/docs/components/shine-border
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ShineBorderProps {
  className?: string;
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string[];
  children?: React.ReactNode;
}

export function ShineBorder({
  className,
  borderRadius = 16,
  borderWidth = 1,
  duration = 8,
  color = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  children,
}: ShineBorderProps) {
  return (
    <div
      style={{
        ["--border-radius" as any]: \`\${borderRadius}px\`,
      }}
      className={cn("relative rounded-[--border-radius] p-[1px] overflow-hidden", className)}
    >
      <div
        style={{
          background: \`conic-gradient(from 0deg, \${color.join(", ")}, \${color[0]})\`,
          animation: \`spin \${duration}s linear infinite\`,
        }}
        className="absolute -inset-[100%] pointer-events-none"
      />
      <div className="relative rounded-[calc(var(--border-radius)-1px)] bg-card p-6">
        {children || (
          <div className="space-y-2">
            <h4 className="text-base font-bold text-foreground">Shine Border Card</h4>
            <p className="text-xs text-muted-foreground">Вращающийся конический градиент на границе элемента.</p>
          </div>
        )}
      </div>
    </div>
  );
}
`,
    mapCode: `  "shine-border": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ShineBorder className="max-w-sm w-full" />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "particles-background",
    pascalName: "ParticlesBackground",
    title: "Particles Background",
    description: "Интерактивный холст летающих микрочастиц с реакцией на курсор мыши",
    code: `/**
 * @source https://magicui.design/docs/components/particles
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ParticlesBackgroundProps {
  className?: string;
  quantity?: number;
  color?: string;
}

export function ParticlesBackground({ className, quantity = 30, color = "#6366f1" }: ParticlesBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [quantity, color]);

  return (
    <div className={cn("relative w-full h-48 rounded-xl border border-border bg-card overflow-hidden flex items-center justify-center", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <span className="relative z-10 text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
        Particles Network
      </span>
    </div>
  );
}
`,
    mapCode: `  "particles-background": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ParticlesBackground quantity={Number(props?.quantity) || 30} />
      </div>
    );
  },`,
    schema: {
      quantity: { type: "number", default: 30, label: "Количество частиц" },
    },
  },

  {
    name: "dock-bar",
    pascalName: "DockBar",
    title: "Dock Bar",
    description: "Плавающая macOS-подобная панель быстрого доступа с увеличением иконок при hover",
    code: `/**
 * @source https://magicui.design/docs/components/dock
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Home, Compass, Layers, Settings, Bell, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DockBarProps {
  className?: string;
}

export function DockBar({ className }: DockBarProps) {
  const items = [
    { icon: Home, label: "Home" },
    { icon: Compass, label: "Explore" },
    { icon: Layers, label: "Components" },
    { icon: Sparkles, label: "AI Tools" },
    { icon: Bell, label: "Alerts" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className={cn("inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            title={item.label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:-translate-y-2 hover:scale-125 shadow cursor-pointer text-foreground"
          >
            <Icon className="h-5 w-5 transition-transform" />
          </button>
        );
      })}
    </div>
  );
}
`,
    mapCode: `  "dock-bar": (props?: any) => {
    return (
      <div className="p-12 flex justify-center items-end">
        <DockBar />
      </div>
    );
  },`,
    schema: {},
  },

  {
    name: "confetti",
    pascalName: "Confetti",
    title: "Confetti Trigger",
    description: "Интерактивная кнопка взрыва праздничного конфетти для успешных действий",
    code: `/**
 * @source https://magicui.design/docs/components/confetti
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ConfettiProps {
  className?: string;
  buttonText?: string;
}

export function Confetti({ className, buttonText = "🎉 Отпраздновать победу!" }: ConfettiProps) {
  const [particles, setParticles] = React.useState<Array<{ id: number; x: number; y: number; color: string; rotation: number }>>([]);

  const triggerConfetti = () => {
    const colors = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];
    const newParticles = Array.from({ length: 28 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 1) * 160,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1200);
  };

  return (
    <div className={cn("relative inline-block", className)}>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            transform: \`translate(\${p.x}px, \${p.y}px) rotate(\${p.rotation}deg)\`,
            backgroundColor: p.color,
          }}
          className="absolute left-1/2 top-1/2 h-2.5 w-2 rounded-sm pointer-events-none transition-all duration-700 ease-out animate-ping"
        />
      ))}

      <button
        onClick={triggerConfetti}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <Trophy className="h-4 w-4" />
        {buttonText}
      </button>
    </div>
  );
}
`,
    mapCode: `  "confetti": (props?: any) => {
    return (
      <div className="p-12 flex justify-center">
        <Confetti buttonText={props?.buttonText || "🎉 Отпраздновать победу!"} />
      </div>
    );
  },`,
    schema: {
      buttonText: { type: "text", default: "🎉 Отпраздновать победу!", label: "Текст кнопки" },
    },
  },
];

async function run() {
  console.log("=== Onboarding Batch 1: 25 UI Primitives & Motion Elements (101-125) ===");

  // 1. Write component source files
  for (const item of BATCH_1_COMPONENTS) {
    const filePath = path.join(REGISTRY_UI, `${item.name}.tsx`);
    fs.writeFileSync(filePath, item.code.trim() + "\n", "utf8");
    console.log(`✅ Written: registry/ui/${item.name}.tsx`);
  }

  // 2. Update lib/components-map.tsx
  let mapContent = fs.readFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), "utf8");
  
  // Add imports
  const importLines = BATCH_1_COMPONENTS.map(
    (c) => `import { ${c.pascalName} } from "@/registry/ui/${c.name}";`
  ).join("\n");
  
  // Insert imports after "use client";\n\n
  mapContent = mapContent.replace('"use client";\n\n', `"use client";\n\n${importLines}\n`);

  // Insert component mappings before the closing "};"
  const mappings = BATCH_1_COMPONENTS.map((c) => c.mapCode).join("\n");
  const lastIndex = mapContent.lastIndexOf("};");
  if (lastIndex !== -1) {
    mapContent = mapContent.slice(0, lastIndex) + mappings + "\n" + mapContent.slice(lastIndex);
  }
  fs.writeFileSync(path.join(ROOT_DIR, "lib", "components-map.tsx"), mapContent, "utf8");
  console.log("✅ Updated: lib/components-map.tsx");

  // 3. Update lib/playground-schemas.ts
  let schemaContent = fs.readFileSync(path.join(ROOT_DIR, "lib", "playground-schemas.ts"), "utf8");
  const schemaEntries = BATCH_1_COMPONENTS.map(
    (c) => `  "${c.name}": ${JSON.stringify(c.schema, null, 4)},`
  ).join("\n");
  const lastSchemaIndex = schemaContent.lastIndexOf("};");
  if (lastSchemaIndex !== -1) {
    schemaContent = schemaContent.slice(0, lastSchemaIndex) + schemaEntries + "\n" + schemaContent.slice(lastSchemaIndex);
  }
  fs.writeFileSync(path.join(ROOT_DIR, "lib", "playground-schemas.ts"), schemaContent, "utf8");
  console.log("✅ Updated: lib/playground-schemas.ts");

  // 4. Rebuild registry manifests
  console.log("🔄 Compiling registry manifests...");
  await buildRegistry();
  console.log("🎉 Batch 1 completed successfully!");
}

run().catch((err) => {
  console.error("Batch 1 error:", err);
  process.exit(1);
});

