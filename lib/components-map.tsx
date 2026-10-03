import * as React from "react";

// UI Primitives
import { Button } from "@/registry/ui/button";
import { Input } from "@/registry/ui/input";
import { Textarea } from "@/registry/ui/textarea";
import { Badge } from "@/registry/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/registry/ui/card";
import { Separator } from "@/registry/ui/separator";
import { Skeleton } from "@/registry/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar";
import { Switch } from "@/registry/ui/switch";
import { Checkbox } from "@/registry/ui/checkbox";
import { Slider } from "@/registry/ui/slider";
import { Progress } from "@/registry/ui/progress";
import { Toggle } from "@/registry/ui/toggle";
import { Alert, AlertTitle, AlertDescription } from "@/registry/ui/alert";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/registry/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/registry/ui/dialog";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/registry/ui/sheet";
import { Popover, PopoverTrigger, PopoverContent } from "@/registry/ui/popover";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/registry/ui/tooltip";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/registry/ui/dropdown-menu";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/registry/ui/select";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";
import { Toaster } from "@/registry/ui/sonner";

// Composite Blocks
import HeroSimple from "@/registry/blocks/hero-simple";
import HeroGradientGlow from "@/registry/blocks/hero-gradient-glow";
import HeroBadgeCta from "@/registry/blocks/hero-badge-cta";
import HeroVideoDialog from "@/registry/blocks/hero-video-dialog";
import PricingCardsTier from "@/registry/blocks/pricing-cards-tier";
import PricingComparisonTable from "@/registry/blocks/pricing-comparison-table";
import BentoGrid3x3 from "@/registry/blocks/bento-grid-3x3";
import FeatureCardsGrid from "@/registry/blocks/feature-cards-grid";
import FeatureAlternatingRows from "@/registry/blocks/feature-alternating-rows";
import TestimonialsSlider from "@/registry/blocks/testimonials-slider";
import StatsCounterStrip from "@/registry/blocks/stats-counter-strip";
import FaqAccordion from "@/registry/blocks/faq-accordion";
import NavbarStickyBlur from "@/registry/blocks/navbar-sticky-blur";
import FooterMegaColumns from "@/registry/blocks/footer-mega-columns";
import DashboardStatsKpi from "@/registry/blocks/dashboard-stats-kpi";
import DashboardRecentTransactions from "@/registry/blocks/dashboard-recent-transactions";
import CtaBannerGlow from "@/registry/blocks/cta-banner-glow";
import NewsletterCardMinimal from "@/registry/blocks/newsletter-card-minimal";
import LoginCardFloating from "@/registry/blocks/login-card-floating";
import EmptyStateCard from "@/registry/blocks/empty-state-card";
import TeamMembersGrid from "@/registry/blocks/team-members-grid";
import ContactFormSplit from "@/registry/blocks/contact-form-split";
import IntegrationLogosCloud from "@/registry/blocks/integration-logos-cloud";
import MetricsGraphCard from "@/registry/blocks/metrics-graph-card";
import UserProfileHeader from "@/registry/blocks/user-profile-header";
import NotificationFeedPopover from "@/registry/blocks/notification-feed-popover";
import SearchCommandPalette from "@/registry/blocks/search-command-palette";

// Page Templates
import SaasLandingPage from "@/registry/templates/saas-landing-page";
import ModernDashboardPage from "@/registry/templates/modern-dashboard-page";
import AuthSplitScreenPage from "@/registry/templates/auth-split-screen-page";

export const componentMap: Record<string, React.ComponentType<any>> = {
  // UI Primitives Demo wrappers
  button: () => (
    <div className="flex flex-wrap gap-4 items-center justify-center p-8">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  input: () => (
    <div className="w-full max-w-sm space-y-2 p-8 mx-auto">
      <Input placeholder="Введите email..." type="email" />
      <Input placeholder="Отключенное поле..." disabled />
    </div>
  ),
  textarea: () => (
    <div className="w-full max-w-sm space-y-2 p-8 mx-auto">
      <Textarea placeholder="Введите подробный отзыв..." />
    </div>
  ),
  badge: () => (
    <div className="flex flex-wrap gap-2 items-center justify-center p-8">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
  card: () => (
    <div className="p-8 max-w-sm mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Интерактивная карточка</CardTitle>
          <CardDescription>Пример базового примитива Card</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Содержимое карточки с токенами темы.</p>
        </CardContent>
      </Card>
    </div>
  ),
  separator: () => (
    <div className="p-8 max-w-sm mx-auto space-y-4">
      <div className="text-sm font-medium">Верхний блок</div>
      <Separator />
      <div className="text-sm font-medium">Нижний блок</div>
    </div>
  ),
  skeleton: () => (
    <div className="p-8 max-w-sm mx-auto space-y-3">
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
  avatar: () => (
    <div className="flex gap-4 items-center justify-center p-8">
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" />
        <AvatarFallback>AU</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground font-bold">JD</AvatarFallback>
      </Avatar>
    </div>
  ),
  switch: () => (
    <div className="flex gap-4 items-center justify-center p-8">
      <Switch defaultChecked />
      <Switch />
    </div>
  ),
  checkbox: () => (
    <div className="flex gap-4 items-center justify-center p-8">
      <Checkbox defaultChecked />
      <Checkbox />
    </div>
  ),
  slider: () => (
    <div className="p-8 max-w-sm mx-auto">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
  progress: () => (
    <div className="p-8 max-w-sm mx-auto space-y-4">
      <Progress value={65} />
    </div>
  ),
  toggle: () => (
    <div className="flex gap-4 items-center justify-center p-8">
      <Toggle defaultPressed>Жирный</Toggle>
      <Toggle variant="outline">Курсив</Toggle>
    </div>
  ),
  alert: () => (
    <div className="p-8 max-w-md mx-auto space-y-4">
      <Alert>
        <AlertTitle>Обратите внимание</AlertTitle>
        <AlertDescription>Компонент успешно установлен в ваш проект.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Ошибка компиляции</AlertTitle>
        <AlertDescription>Проверьте корректность импортов в коде.</AlertDescription>
      </Alert>
    </div>
  ),
  table: () => (
    <div className="p-8 max-w-lg mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Файл</TableHead>
            <TableHead>Категория</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>button.tsx</TableCell>
            <TableCell>UI Primitive</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>card.tsx</TableCell>
            <TableCell>UI Primitive</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
  tabs: () => (
    <div className="p-8 max-w-md mx-auto">
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Обзор</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p className="p-4 text-sm text-muted-foreground border rounded-lg mt-2">
            Вкладка обзора компонентов.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <p className="p-4 text-sm text-muted-foreground border rounded-lg mt-2">
            Вкладка настроек параметров.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
  accordion: () => (
    <div className="p-8 max-w-md mx-auto">
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Что такое AMANTLE UI?</AccordionTrigger>
          <AccordionContent>Открытая экосистема компонентов нового поколения.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Как настроить палитру?</AccordionTrigger>
          <AccordionContent>Используйте атрибут data-theme на теге html.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  dialog: () => (
    <div className="flex items-center justify-center p-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Открыть диалоговое окно</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Редактирование профиля</DialogTitle>
            <DialogDescription>Внесите изменения и нажмите сохранить.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input placeholder="Имя пользователя" defaultValue="Verok" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  ),
  sheet: () => (
    <div className="flex items-center justify-center p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Открыть боковую панель</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Боковая панель (Sheet)</SheetTitle>
            <SheetDescription>Изолированное меню с поддержкой темы.</SheetDescription>
          </SheetHeader>
          <div className="py-6 text-sm text-muted-foreground">
            Содержимое боковой панели на чистом Tailwind v4.
          </div>
        </SheetContent>
      </Sheet>
    </div>
  ),
  popover: () => (
    <div className="flex items-center justify-center p-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Открыть Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Параметры сетки</h4>
            <p className="text-xs text-muted-foreground">Настройте ширину колонок и отступы.</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
  tooltip: () => (
    <div className="flex items-center justify-center p-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Наведите курсор</Button>
          </TooltipTrigger>
          <TooltipContent>
            <span>Всплывающая подсказка AMANTLE</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
  "dropdown-menu": () => (
    <div className="flex items-center justify-center p-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Открыть меню</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Мой профиль</DropdownMenuItem>
          <DropdownMenuItem>Настройки темы</DropdownMenuItem>
          <DropdownMenuItem>Выйти</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
  select: () => (
    <div className="p-8 max-w-xs mx-auto">
      <Select defaultValue="violet">
        <SelectTrigger>
          <SelectValue placeholder="Выберите палитру" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="zinc">Zinc</SelectItem>
          <SelectItem value="slate">Slate</SelectItem>
          <SelectItem value="violet">Violet</SelectItem>
          <SelectItem value="emerald">Emerald</SelectItem>
          <SelectItem value="rose">Rose</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  "radio-group": () => (
    <div className="p-8 max-w-xs mx-auto">
      <RadioGroup defaultValue="default">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="default" id="r1" />
          <label htmlFor="r1" className="text-sm">По умолчанию</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="compact" id="r2" />
          <label htmlFor="r2" className="text-sm">Компактный</label>
        </div>
      </RadioGroup>
    </div>
  ),
  sonner: () => (
    <div className="p-8 flex items-center justify-center">
      <Button>Показать уведомление</Button>
    </div>
  ),

  // Composite Blocks
  "hero-simple": HeroSimple,
  "hero-gradient-glow": HeroGradientGlow,
  "hero-badge-cta": HeroBadgeCta,
  "hero-video-dialog": HeroVideoDialog,
  "pricing-cards-tier": PricingCardsTier,
  "pricing-comparison-table": PricingComparisonTable,
  "bento-grid-3x3": BentoGrid3x3,
  "feature-cards-grid": FeatureCardsGrid,
  "feature-alternating-rows": FeatureAlternatingRows,
  "testimonials-slider": TestimonialsSlider,
  "stats-counter-strip": StatsCounterStrip,
  "faq-accordion": FaqAccordion,
  "navbar-sticky-blur": NavbarStickyBlur,
  "footer-mega-columns": FooterMegaColumns,
  "dashboard-stats-kpi": DashboardStatsKpi,
  "dashboard-recent-transactions": DashboardRecentTransactions,
  "cta-banner-glow": CtaBannerGlow,
  "newsletter-card-minimal": NewsletterCardMinimal,
  "login-card-floating": LoginCardFloating,
  "empty-state-card": EmptyStateCard,
  "team-members-grid": TeamMembersGrid,
  "contact-form-split": ContactFormSplit,
  "integration-logos-cloud": IntegrationLogosCloud,
  "metrics-graph-card": MetricsGraphCard,
  "user-profile-header": UserProfileHeader,
  "notification-feed-popover": NotificationFeedPopover,
  "search-command-palette": SearchCommandPalette,

  // Templates
  "saas-landing-page": SaasLandingPage,
  "modern-dashboard-page": ModernDashboardPage,
  "auth-split-screen-page": AuthSplitScreenPage,
};
