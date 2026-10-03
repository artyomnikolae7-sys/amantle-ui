"use client";

import * as React from "react";
import {
  Monitor,
  Tablet,
  Smartphone,
  Sparkles,
  MousePointerClick,
  SlidersHorizontal,
  Layers,
  MessageSquare,
  CreditCard,
  Check,
  Copy,
  Terminal,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Sun,
  Moon,
  TrendingUp,
  Download,
  Trash2,
  Mail,
  HelpCircle,
  Settings,
  Bell,
  CheckCircle2,
  Shield,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";
import { Input } from "@/registry/ui/input";
import { Textarea } from "@/registry/ui/textarea";
import { Switch } from "@/registry/ui/switch";
import { Checkbox } from "@/registry/ui/checkbox";
import { Slider } from "@/registry/ui/slider";
import { Progress } from "@/registry/ui/progress";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/registry/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Separator } from "@/registry/ui/separator";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/registry/ui/dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/registry/ui/sheet";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/ui/popover";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/registry/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/registry/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/registry/ui/select";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/ui/accordion";
import { useTheme } from "@/components/theme-provider";

type ShowcaseCategory = "buttons" | "forms" | "overlays" | "cards" | "blocks";

export function InteractiveShowcase() {
  const [activeTab, setActiveTab] = React.useState<ShowcaseCategory>("buttons");
  const [viewport, setViewport] = React.useState<"desktop" | "tablet" | "mobile">("desktop");
  const [copiedCode, setCopiedCode] = React.useState(false);

  // Interactive local states for "все потыкать"
  const [clickCount, setClickCount] = React.useState(0);
  const [switchState, setSwitchState] = React.useState(true);
  const [checkboxState, setCheckboxState] = React.useState(true);
  const [sliderVal, setSliderVal] = React.useState(68);
  const [inputValue, setInputValue] = React.useState("john.doe@example.com");
  const [selectedPlan, setSelectedPlan] = React.useState("pro");
  const [isAnnual, setIsAnnual] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const { palette, setPalette, theme, setTheme } = useTheme();

  const handleCopySample = (code: string, label: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    toast.success(`${label} скопирован в буфер обмена!`);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const viewportWidthClass =
    viewport === "mobile"
      ? "max-w-[375px]"
      : viewport === "tablet"
      ? "max-w-[768px]"
      : "w-full";

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3 shadow-xs">
              <MousePointerClick className="w-3.5 h-3.5 animate-bounce" />
              <span>Интерактивная песочница</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Попробуйте компоненты прямо здесь
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Кликайте, открывайте модальные окна, переключайте темы и тестируйте микроанимации
            </p>
          </div>

          {/* Palette Switcher inside header */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">Тема:</span>
            {(["zinc", "slate", "violet", "emerald", "rose"] as const).map((p) => {
              const bgColors: Record<string, string> = {
                zinc: "bg-zinc-900 dark:bg-zinc-100",
                slate: "bg-slate-700 dark:bg-slate-300",
                violet: "bg-violet-600",
                emerald: "bg-emerald-600",
                rose: "bg-rose-600",
              };
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setPalette(p);
                    toast.info(`Палитра переключена на ${p.toUpperCase()}`);
                  }}
                  className={`h-7 px-2.5 rounded-full text-[11px] font-medium transition-all flex items-center gap-1.5 border ${
                    palette === p
                      ? "border-primary bg-primary/15 text-foreground ring-2 ring-primary/30 font-semibold"
                      : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${bgColors[p]}`} />
                  <span className="capitalize">{p}</span>
                </button>
              );
            })}

            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 ml-1"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Переключить Dark/Light"
            >
              {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            </Button>
          </div>
        </div>

        {/* Sandbox Window Frame */}
        <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden transition-all">
          {/* Top Window Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/60 px-4 py-3">
            {/* Window Dots & Navigation Tabs */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-xs" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-xs" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-xs" />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1 bg-background/70 p-1 rounded-lg border border-border/60">
                <button
                  type="button"
                  onClick={() => setActiveTab("buttons")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "buttons"
                      ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Кнопки</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("forms")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "forms"
                      ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Формы и ввод</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("overlays")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "overlays"
                      ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Модалки и меню</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("cards")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "cards"
                      ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Карточки & KPI</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("blocks")}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                    activeTab === "blocks"
                      ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Секции & Тарифы</span>
                </button>
              </div>
            </div>

            {/* Viewport Width Control */}
            <div className="flex items-center gap-1 rounded-lg border border-border bg-background/80 p-0.5">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  viewport === "desktop"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="100% Ширина"
              >
                <Monitor className="h-3.5 w-3.5" /> 100%
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  viewport === "tablet"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Планшет (768px)"
              >
                <Tablet className="h-3.5 w-3.5" /> 768px
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  viewport === "mobile"
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Мобильный (375px)"
              >
                <Smartphone className="h-3.5 w-3.5" /> 375px
              </button>
            </div>
          </div>

          {/* Interactive Canvas */}
          <div className="flex justify-center bg-muted/20 p-6 md:p-10 min-h-[460px] overflow-x-auto">
            <div
              className={`w-full transition-all duration-300 ease-in-out rounded-xl border border-border/80 bg-background p-6 md:p-8 shadow-sm flex flex-col justify-center ${viewportWidthClass}`}
            >
              {/* TAB 1: BUTTONS & BADGES */}
              {activeTab === "buttons" && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="border-b border-border pb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-foreground">Варианты кнопок и клики</h3>
                      <p className="text-xs text-muted-foreground">
                        Все кнопки кликабельны с тактильным откликом. Счётчик кликов:{" "}
                        <span className="font-bold text-primary">{clickCount}</span>
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setClickCount(0)}
                      className="h-7 text-xs gap-1"
                    >
                      <RotateCcw className="w-3 h-3" /> Сброс
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="default"
                      onClick={() => {
                        setClickCount((c) => c + 1);
                        toast.success("Нажата Default Primary кнопка!");
                      }}
                    >
                      Default Primary
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setClickCount((c) => c + 1);
                        toast.info("Нажата Secondary кнопка!");
                      }}
                    >
                      Secondary
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setClickCount((c) => c + 1);
                        toast.info("Нажата Outline кнопка!");
                      }}
                    >
                      Outline
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        setClickCount((c) => c + 1);
                        toast.error("Внимание: Нажата Destructive кнопка!");
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Destructive
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setClickCount((c) => c + 1);
                        toast("Ghost кнопка активирована");
                      }}
                    >
                      Ghost
                    </Button>
                    <Button
                      variant="link"
                      onClick={() => {
                        setClickCount((c) => c + 1);
                        toast("Link клик");
                      }}
                    >
                      Link Button
                    </Button>
                  </div>

                  <Separator />

                  {/* Sizes and Icons */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Размеры и иконки
                    </h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm" onClick={() => setClickCount((c) => c + 1)}>
                        Маленькая (sm)
                      </Button>
                      <Button size="default" onClick={() => setClickCount((c) => c + 1)}>
                        <Sparkles className="w-4 h-4 mr-1 text-primary-foreground" />
                        Стандартная (default)
                      </Button>
                      <Button size="lg" onClick={() => setClickCount((c) => c + 1)}>
                        Большая (lg) <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                      <Button size="icon" variant="outline" onClick={() => setClickCount((c) => c + 1)}>
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" onClick={() => setClickCount((c) => c + 1)}>
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Badges */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Бейджи и статусы
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="default">Primary Badge</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Error Status</Badge>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Online Live
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: FORMS & INPUTS */}
              {activeTab === "forms" && (
                <div className="space-y-6 max-w-xl mx-auto w-full animate-in fade-in duration-200">
                  <div className="border-b border-border pb-3">
                    <h3 className="text-base font-bold text-foreground">Поля ввода, переключатели и слайдеры</h3>
                    <p className="text-xs text-muted-foreground">
                      Вводите текст, двигайте слайдер, переключайте чекбоксы и свитчи
                    </p>
                  </div>

                  {/* Text Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Email адрес</label>
                    <Input
                      type="email"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="name@domain.com"
                    />
                    <p className="text-[11px] text-muted-foreground">
                      Текущее значение: <span className="font-mono text-primary font-medium">{inputValue}</span>
                    </p>
                  </div>

                  {/* Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Роль в проекте</label>
                    <Select defaultValue="designer">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите роль" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="designer">🎨 UI/UX Дизайнер</SelectItem>
                        <SelectItem value="frontend">💻 Frontend Разработчик</SelectItem>
                        <SelectItem value="architect">🏛️ Системный Архитектор</SelectItem>
                        <SelectItem value="pm">🚀 Product Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Slider with dynamic state */}
                  <div className="space-y-2 rounded-lg border border-border/80 bg-muted/20 p-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">Масштаб / Значение:</span>
                      <span className="font-mono font-bold text-primary">{sliderVal}%</span>
                    </div>
                    <Slider
                      value={[sliderVal]}
                      onValueChange={(vals) => setSliderVal(vals[0])}
                      max={100}
                      step={1}
                    />
                    <Progress value={sliderVal} className="h-1.5 mt-2" />
                  </div>

                  {/* Switches and Checkboxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center justify-between rounded-lg border border-border p-3">
                      <div className="space-y-0.5">
                        <span className="text-xs font-medium text-foreground">Уведомления</span>
                        <p className="text-[10px] text-muted-foreground">В реальном времени</p>
                      </div>
                      <Switch
                        checked={switchState}
                        onCheckedChange={(c) => {
                          setSwitchState(c);
                          toast(c ? "Уведомления включены" : "Уведомления отключены");
                        }}
                      />
                    </div>

                    <div className="flex items-center space-x-2 rounded-lg border border-border p-3">
                      <Checkbox
                        id="terms"
                        checked={checkboxState}
                        onCheckedChange={(c) => setCheckboxState(!!c)}
                      />
                      <label htmlFor="terms" className="text-xs font-medium text-foreground cursor-pointer">
                        Автосохранение изменений
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: OVERLAYS & MODALS */}
              {activeTab === "overlays" && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="border-b border-border pb-3">
                    <h3 className="text-base font-bold text-foreground">Модальные окна, дропдауны и тултипы</h3>
                    <p className="text-xs text-muted-foreground">
                      Нажмите на любую кнопку для открытия реального диалога, боковой панели или всплывающего меню
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 justify-center py-6">
                    {/* Dialog */}
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="gap-2">
                          <MessageSquare className="w-4 h-4" />
                          <span>Открыть Dialog</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Редактировать профиль</DialogTitle>
                          <DialogDescription>
                            Внесите изменения в информацию вашего профиля и сохраните результат.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-3">
                          <div className="space-y-1">
                            <label className="text-xs font-medium">Имя</label>
                            <Input defaultValue="Александр Смирнов" />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-medium">Username</label>
                            <Input defaultValue="@alex_design" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setDialogOpen(false)}>
                            Отмена
                          </Button>
                          <Button
                            onClick={() => {
                              setDialogOpen(false);
                              toast.success("Профиль успешно сохранён!");
                            }}
                          >
                            Сохранить
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    {/* Sheet Drawer */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          <SlidersHorizontal className="w-4 h-4" />
                          <span>Открыть Sheet Drawer</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right">
                        <SheetHeader>
                          <SheetTitle>Настройки проекта</SheetTitle>
                          <SheetDescription>
                            Управляйте конфигурацией темы, API-ключами и экспортом кода.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="py-6 space-y-4">
                          <div className="flex items-center justify-between border-b pb-3">
                            <span className="text-xs font-medium">Тёмная тема</span>
                            <Switch checked={theme === "dark"} onCheckedChange={(c) => setTheme(c ? "dark" : "light")} />
                          </div>
                          <div className="space-y-1">
                            <span className="text-xs font-medium">URL Реестра</span>
                            <Input readOnly value="https://amantle.dev/r/index.json" className="font-mono text-xs" />
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>

                    {/* Dropdown Menu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="secondary" className="gap-2">
                          <span>Дропдаун Меню</span>
                          <Settings className="w-3.5 h-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => toast("Выбран Профиль")}>
                          Профиль
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toast("Выбран Биллинг")}>
                          Биллинг & Тарифы
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toast("Выбраны Настройки")}>
                          Настройки
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => toast.error("Выход выполнен")} className="text-destructive">
                          Выйти
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Popover */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="gap-2">
                          <Bell className="w-4 h-4" />
                          <span>Popover</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-72 p-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-xs text-foreground">Центр уведомлений</h4>
                          <p className="text-[11px] text-muted-foreground">
                            Все компоненты успешно синхронизированы с реестром v2.
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>

                    {/* Tooltip */}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="rounded-full">
                            <HelpCircle className="w-5 h-5 text-muted-foreground" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Наведите курсор для быстрого тултипа!</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              )}

              {/* TAB 4: CARDS & KPI */}
              {activeTab === "cards" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
                  {/* KPI Card */}
                  <Card className="border border-border/80 shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardDescription className="text-xs font-medium">Общий доход (MRR)</CardDescription>
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          <TrendingUp className="w-3 h-3" /> +14.2%
                        </span>
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">$48,290.00</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-xs text-muted-foreground">
                        Целевой показатель $50,000 почти достигнут (96.5%)
                      </p>
                      <Progress value={96.5} className="h-2" />
                    </CardContent>
                    <CardFooter className="pt-0 text-[11px] text-muted-foreground border-t border-border/40 py-2.5">
                      Обновлено 2 минуты назад
                    </CardFooter>
                  </Card>

                  {/* Profile / Action Card */}
                  <Card className="border border-border/80 shadow-md">
                    <CardHeader className="pb-3 flex flex-row items-center gap-4 space-y-0">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop" />
                        <AvatarFallback>АС</AvatarFallback>
                      </Avatar>
                      <div className="space-y-0.5">
                        <CardTitle className="text-base">Анна Соколова</CardTitle>
                        <CardDescription className="text-xs">Lead Product Designer</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground space-y-2">
                      <p>
                        Ответственная за консистентность дизайн-токенов и компонентов в команде AMANTLE UI.
                      </p>
                      <div className="flex gap-1.5 pt-1">
                        <Badge variant="secondary" className="text-[10px]">Figma</Badge>
                        <Badge variant="secondary" className="text-[10px]">Tailwind v4</Badge>
                        <Badge variant="secondary" className="text-[10px]">TypeScript</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-border/40 py-2.5 flex justify-end gap-2">
                      <Button size="sm" variant="outline" onClick={() => toast("Сообщение отправлено")}>
                        Написать
                      </Button>
                      <Button size="sm" onClick={() => toast.success("Приглашение отправлено")}>
                        Связаться
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {/* TAB 5: BLOCKS & PRICING */}
              {activeTab === "blocks" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <h3 className="text-base font-bold text-foreground">Интерактивный тарифный план</h3>
                      <p className="text-xs text-muted-foreground">
                        Переключайте период оплаты и сравнивайте тарифы
                      </p>
                    </div>

                    {/* Monthly / Annual Toggle */}
                    <div className="flex items-center gap-2 rounded-full border border-border bg-muted/40 p-1">
                      <button
                        type="button"
                        onClick={() => setIsAnnual(false)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                          !isAnnual
                            ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Ежемесячно
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAnnual(true)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-all flex items-center gap-1 ${
                          isAnnual
                            ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span>Ежегодно</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.2 rounded-full font-bold">
                          -20%
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Pricing Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Starter Tier */}
                    <Card className="border border-border/80 shadow-md">
                      <CardHeader>
                        <CardTitle className="text-lg">Starter</CardTitle>
                        <CardDescription className="text-xs">Для индивидуальных пет-проектов</CardDescription>
                        <div className="pt-2">
                          <span className="text-3xl font-extrabold text-foreground">
                            {isAnnual ? "$0" : "$0"}
                          </span>
                          <span className="text-xs text-muted-foreground"> / навсегда</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span>55 базовых компонентов</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span>Tailwind v4 и CSS-токены</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span>MIT Лицензия (Code Ownership)</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => toast("Тариф Starter уже подключен бесплатно!")}
                        >
                          Начать бесплатно
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Pro Tier (Featured) */}
                    <Card className="border-2 border-primary shadow-xl relative bg-primary/[0.02]">
                      <div className="absolute -top-3 right-4">
                        <Badge className="bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider">
                          Популярный
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">Pro Enterprise</CardTitle>
                        <CardDescription className="text-xs">Для командных коммерческих проектов</CardDescription>
                        <div className="pt-2">
                          <span className="text-3xl font-extrabold text-foreground">
                            {isAnnual ? "$19" : "$24"}
                          </span>
                          <span className="text-xs text-muted-foreground"> / в месяц</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Check className="w-4 h-4 text-primary" />
                          <span>Все 55+ компонентов и шаблонов</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Check className="w-4 h-4 text-primary" />
                          <span>Нативный MCP-сервер для AI</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground font-medium">
                          <Check className="w-4 h-4 text-primary" />
                          <span>5 адаптивных цветовых палитр</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full shadow-md"
                          onClick={() => toast.success("Выбран тариф Pro! Добро пожаловать.")}
                        >
                          Подключить Pro
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sandbox Footer Info */}
          <div className="flex flex-wrap items-center justify-between border-t border-border bg-muted/40 px-4 py-2.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Interactive Sandbox Canvas</span>
              <span>•</span>
              <span className="capitalize">{activeTab} Demo</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#catalog"
                className="text-primary hover:underline flex items-center gap-1 font-medium"
              >
                <span>Смотреть все 55 компонентов в каталоге</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
