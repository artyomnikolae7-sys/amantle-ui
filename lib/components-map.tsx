"use client";

import { ButtonElasticBounce } from "@/registry/ui/button-elastic-bounce";
import { ButtonGlowNeon } from "@/registry/ui/button-glow-neon";
import { ButtonGradientBorder } from "@/registry/ui/button-gradient-border";
import { ButtonNeubrutalist } from "@/registry/ui/button-neubrutalist";
import { ButtonRetro3D } from "@/registry/ui/button-retro-3d";
import { ButtonHoldConfirm } from "@/registry/ui/button-hold-confirm";
import { ButtonCopyMorph } from "@/registry/ui/button-copy-morph";
import { ButtonSlideReveal } from "@/registry/ui/button-slide-reveal";
import { ButtonLiquidFill } from "@/registry/ui/button-liquid-fill";
import { ButtonSplitDropdown } from "@/registry/ui/button-split-dropdown";
import { InputPillGlow } from "@/registry/ui/input-pill-glow";
import { InputUnderlinedMinimal } from "@/registry/ui/input-underlined-minimal";
import { InputPasswordStrength } from "@/registry/ui/input-password-strength";
import { InputCreditCard } from "@/registry/ui/input-credit-card";
import { InputVerificationCode } from "@/registry/ui/input-verification-code";
import { InputCommandFilter } from "@/registry/ui/input-command-filter";
import { InputVoiceDictation } from "@/registry/ui/input-voice-dictation";
import { InputTagChips } from "@/registry/ui/input-tag-chips";
import { InputAutoGrowTextarea } from "@/registry/ui/input-auto-grow-textarea";
import { InputFileUploaderCompact } from "@/registry/ui/input-file-uploader-compact";
import { SwitchIosSpring } from "@/registry/ui/switch-ios-spring";
import { SwitchLabeledIcon } from "@/registry/ui/switch-labeled-icon";
import { SwitchSegmentedSlider } from "@/registry/ui/switch-segmented-slider";
import { SliderRangeDual } from "@/registry/ui/slider-range-dual";
import { SliderVolumeStepped } from "@/registry/ui/slider-volume-stepped";
import { SliderCircularDial } from "@/registry/ui/slider-circular-dial";
import { CheckboxAnimatedCheck } from "@/registry/ui/checkbox-animated-check";
import { RadioCardGroup } from "@/registry/ui/radio-card-group";
import { CheckboxTreeHierarchical } from "@/registry/ui/checkbox-tree-hierarchical";
import { BadgeStatusDot } from "@/registry/ui/badge-status-dot";
import { BadgeLiveStream } from "@/registry/ui/badge-live-stream";
import { BadgeGradientPill } from "@/registry/ui/badge-gradient-pill";
import { BadgeCounterNotification } from "@/registry/ui/badge-counter-notification";
import { BadgeDismissable } from "@/registry/ui/badge-dismissable";
import { BadgeCopyToken } from "@/registry/ui/badge-copy-token";
import { BadgeVerifiedTier } from "@/registry/ui/badge-verified-tier";
import { CardInnerGlow } from "@/registry/ui/card-inner-glow";
import { CardGradientMesh } from "@/registry/ui/card-gradient-mesh";
import { CardFlip3D } from "@/registry/ui/card-flip-3d";
import { CardMetricTrend } from "@/registry/ui/card-metric-trend";
import { CardProfileHeader } from "@/registry/ui/card-profile-header";
import { CardNeubrutalistShadow } from "@/registry/ui/card-neubrutalist-shadow";
import { ButtonPulseRing } from "@/registry/ui/button-pulse-ring";
import { ButtonGradientFlow } from "@/registry/ui/button-gradient-flow";
import { InputStepperNumber } from "@/registry/ui/input-stepper-number";


import { InteractiveGridPattern } from "@/registry/ui/interactive-grid-pattern";
import { Terminal as TerminalComponent } from "@/registry/ui/terminal";
import { GaugeChart } from "@/registry/ui/gauge-chart";
import { StatsCardSparkline } from "@/registry/blocks/stats-card-sparkline";
import { ChangelogFeed } from "@/registry/blocks/changelog-feed";
import { ChartBarInteractive } from "@/registry/ui/chart-bar-interactive";
import { ChartAreaGradient } from "@/registry/ui/chart-area-gradient";
import { DataTableAdvanced } from "@/registry/ui/data-table-advanced";
import { AnimatedBeamNetwork } from "@/registry/blocks/animated-beam-network";
import { FormSystemAccessible } from "@/registry/blocks/form-system-accessible";
import AiWorkspaceTemplate from "@/registry/templates/ai-workspace-template";
import DeveloperDocsTemplate from "@/registry/templates/developer-docs-template";
import AnalyticsDashboardTemplate from "@/registry/templates/analytics-dashboard-template";
import OnboardingWizardTemplate from "@/registry/templates/onboarding-wizard-template";
import ComingSoonWaitlistTemplate from "@/registry/templates/coming-soon-waitlist-template";
import { HeroLamp } from "@/registry/blocks/hero-lamp";
import { HeroRetroGrid } from "@/registry/blocks/hero-retro-grid";
import { HeroCanvasReveal } from "@/registry/blocks/hero-canvas-reveal";
import { AiChatPrompt } from "@/registry/blocks/ai-chat-prompt";
import { AiGenerationCard } from "@/registry/blocks/ai-generation-card";
import { AiCodeDiff } from "@/registry/blocks/ai-code-diff";
import { BentoGridInteractive } from "@/registry/blocks/bento-grid-interactive";
import { StickyScrollReveal } from "@/registry/blocks/sticky-scroll-reveal";
import { PricingTierMatrix } from "@/registry/blocks/pricing-tier-matrix";
import { TestimonialsInfiniteSlider } from "@/registry/blocks/testimonials-infinite-slider";
import { StatsGlassGrid } from "@/registry/blocks/stats-glass-grid";
import { CtaLampGlow } from "@/registry/blocks/cta-lamp-glow";
import { NavbarFloatingDock } from "@/registry/blocks/navbar-floating-dock";
import { FooterColumnsNewsletter } from "@/registry/blocks/footer-columns-newsletter";
import { DashboardServerMonitoring } from "@/registry/blocks/dashboard-server-monitoring";
import { DashboardKanbanBoard } from "@/registry/blocks/dashboard-kanban-board";
import { DashboardTablePagination } from "@/registry/blocks/dashboard-table-pagination";
import { IntegrationEcosystemGrid } from "@/registry/blocks/integration-ecosystem-grid";
import { ComparisonSliderImage } from "@/registry/blocks/comparison-slider-image";
import { CookieConsentBanner } from "@/registry/blocks/cookie-consent-banner";
import { CommandMenu } from "@/registry/ui/command-menu";
import { DrawerBottom } from "@/registry/ui/drawer-bottom";
import { ContextMenu } from "@/registry/ui/context-menu";
import { HoverCard } from "@/registry/ui/hover-card";
import { ResizablePanel } from "@/registry/ui/resizable-panel";
import { Menubar } from "@/registry/ui/menubar";
import { NavigationMenu } from "@/registry/ui/navigation-menu";
import { AspectRatio } from "@/registry/ui/aspect-ratio";
import { Pagination } from "@/registry/ui/pagination";
import { CalendarPicker } from "@/registry/ui/calendar-picker";
import { ColorPicker } from "@/registry/ui/color-picker";
import { FileUploadDropzone } from "@/registry/ui/file-upload-dropzone";
import { TreeView } from "@/registry/ui/tree-view";
import { BadgeShine } from "@/registry/ui/badge-shine";
import { BadgeGlow } from "@/registry/ui/badge-glow";
import { Meteors } from "@/registry/ui/meteors";
import { SparklesText } from "@/registry/ui/sparkles-text";
import { WordRotate } from "@/registry/ui/word-rotate";
import { TypingText } from "@/registry/ui/typing-text";
import { NumberTicker } from "@/registry/ui/number-ticker";
import { BorderBeam } from "@/registry/ui/border-beam";
import { ShineBorder } from "@/registry/ui/shine-border";
import { ParticlesBackground } from "@/registry/ui/particles-background";
import { DockBar } from "@/registry/ui/dock-bar";
import { Confetti } from "@/registry/ui/confetti";
import BlogPostTemplate from "@/registry/templates/blog-post-template";
import Error404Page from "@/registry/templates/error-404-page";
import SettingsAccountPage from "@/registry/templates/settings-account-page";
import PricingPageFull from "@/registry/templates/pricing-page-full";
import ChangelogPage from "@/registry/templates/changelog-page";
import DashboardQuickActions from "@/registry/blocks/dashboard-quick-actions";
import DashboardActivityFeed from "@/registry/blocks/dashboard-activity-feed";
import NavbarFloatingGlass from "@/registry/blocks/navbar-floating-glass";
import FooterMinimalCentered from "@/registry/blocks/footer-minimal-centered";
import CtaSplitCard from "@/registry/blocks/cta-split-card";
import FaqSearchable from "@/registry/blocks/faq-searchable";
import TestimonialsGridMasonry from "@/registry/blocks/testimonials-grid-masonry";
import TestimonialsMarquee from "@/registry/blocks/testimonials-marquee";
import FeatureComparisonMatrix from "@/registry/blocks/feature-comparison-matrix";
import FeatureBentoSpotlight from "@/registry/blocks/feature-bento-spotlight";
import FeatureTimeline from "@/registry/blocks/feature-timeline";
import PricingSlider from "@/registry/blocks/pricing-slider";
import PricingToggleAnnual from "@/registry/blocks/pricing-toggle-annual";
import HeroFloatingMockup from "@/registry/blocks/hero-floating-mockup";
import HeroSplitImage from "@/registry/blocks/hero-split-image";
import { ToggleGroup } from "@/registry/ui/toggle-group";
import { Collapsible } from "@/registry/ui/collapsible";
import { Rating } from "@/registry/ui/rating";
import { ScrollArea } from "@/registry/ui/scroll-area";
import { Breadcrumbs } from "@/registry/ui/breadcrumbs";
import { Stepper } from "@/registry/ui/stepper";
import { TooltipAnimated } from "@/registry/ui/tooltip-animated";
import { AvatarGroup } from "@/registry/ui/avatar-group";
import { BadgePulse } from "@/registry/ui/badge-pulse";
import { TabsVertical } from "@/registry/ui/tabs-vertical";
import { TabsPill } from "@/registry/ui/tabs-pill";
import { Kbd } from "@/registry/ui/kbd";
import { InputSearchAnimated } from "@/registry/ui/input-search-animated";
import { InputOtp } from "@/registry/ui/input-otp";
import { InputFloatingLabel } from "@/registry/ui/input-floating-label";
import { CardGlass } from "@/registry/ui/card-glass";
import { CardTilt } from "@/registry/ui/card-tilt";
import { CardSpotlight } from "@/registry/ui/card-spotlight";

import * as React from "react";
import { Sparkles, ArrowRight, Terminal, Check } from "lucide-react";

// UI Primitives
import { Button } from "@/registry/ui/button";
import { ButtonMagnetic } from "@/registry/ui/button-magnetic";
import { ButtonRipple } from "@/registry/ui/button-ripple";
import { ButtonShimmer } from "@/registry/ui/button-shimmer";
import { ButtonExpandable } from "@/registry/ui/button-expandable";
import { ButtonTilt } from "@/registry/ui/button-tilt";
import { ButtonGroup, SplitButton, SegmentedControl } from "@/registry/ui/button-group";
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

import { BadgeShimmer } from "@/registry/ui/badge-shimmer";

// React Bits Synthesized Components
import { SplitText } from "@/registry/ui/split-text";
import { BlurText } from "@/registry/ui/blur-text";
import { DecryptedText } from "@/registry/ui/decrypted-text";
import { TrueFocus } from "@/registry/ui/true-focus";
import { ShinyText } from "@/registry/ui/shiny-text";
import { CountUp } from "@/registry/ui/count-up";
import { GradientText } from "@/registry/ui/gradient-text";
import { RotatingText } from "@/registry/ui/rotating-text";
import { StarBorder } from "@/registry/ui/star-border";
import { ClickSpark } from "@/registry/ui/click-spark";
import { PixelCard } from "@/registry/ui/pixel-card";
import { SpringCheck } from "@/registry/ui/spring-check";
import { JellyRadio } from "@/registry/ui/jelly-radio";
import { PillNav } from "@/registry/ui/pill-nav";

// Design Variants (Neo-Brutalist & Cyber-Glass)
import { ButtonCyberGlass } from "@/registry/ui/button-cyber-glass";
import { CardCyberGlass } from "@/registry/ui/card-cyber-glass";
import { InputCyberGlass } from "@/registry/ui/input-cyber-glass";
import { InputNeubrutalist } from "@/registry/ui/input-neubrutalist";
import { TextPressure } from "@/registry/ui/text-pressure";
import { GlitchText } from "@/registry/ui/glitch-text";
import { VariableProximity } from "@/registry/ui/variable-proximity";
import { CircularText } from "@/registry/ui/circular-text";
import { WaveText } from "@/registry/ui/wave-text";
// Page Templates
import SaasLandingPage from "@/registry/templates/saas-landing-page";
import ModernDashboardPage from "@/registry/templates/modern-dashboard-page";
import AuthSplitScreenPage from "@/registry/templates/auth-split-screen-page";

import { RollingGallery } from "@/registry/ui/rolling-gallery";

import { ElasticSlider } from "@/registry/ui/elastic-slider";

import { FlowingMenu } from "@/registry/ui/flowing-menu";

import { TiltedCard } from "@/registry/ui/tilted-card";

import { SpotlightCard } from "@/registry/ui/spotlight-card";

import { InfiniteScroll } from "@/registry/ui/infinite-scroll";

import { Magnet } from "@/registry/ui/magnet";

import { MagnetLines } from "@/registry/ui/magnet-lines";

import { Crosshair } from "@/registry/ui/crosshair";

import { ElectricBorder } from "@/registry/ui/electric-border";

import { Marquee } from "@/registry/ui/marquee";

import { RainbowButton } from "@/registry/ui/rainbow-button";

import { OrbitingCircles } from "@/registry/ui/orbiting-circles";

import { AvatarCircles } from "@/registry/ui/avatar-circles";

import { TracingBeam } from "@/registry/ui/tracing-beam";

import { FloatingNavbar } from "@/registry/ui/floating-navbar";

import { HoverBorderGradient } from "@/registry/ui/hover-border-gradient";

import { ActionBarGlow } from "@/registry/ui/action-bar-glow";

import { AiPromptInput } from "@/registry/ui/ai-prompt-input";

import { StudioComponentInspector } from "@/registry/ui/studio-component-inspector";

import { StudioCodePreview } from "@/registry/ui/studio-code-preview";

import { GradientHeading } from "@/registry/ui/gradient-heading";

import { MinimalCard } from "@/registry/ui/minimal-card";

import { OriginInputTag } from "@/registry/ui/origin-input-tag";

import { OriginSelectFancy } from "@/registry/ui/origin-select-fancy";

import { KpiMetricCard } from "@/registry/ui/kpi-metric-card";

import { ProgressBarStepped } from "@/registry/ui/progress-bar-stepped";

import { HoverExpandCard } from "@/registry/ui/hover-expand-card";

import { WaterDropGrid } from "@/registry/ui/water-drop-grid";

import { MarketingFeaturePill } from "@/registry/ui/marketing-feature-pill";

import { StatsCardAccent } from "@/registry/ui/stats-card-accent";

import { FuzzyText } from "@/registry/ui/fuzzy-text";
import { PixelTransition } from "@/registry/ui/pixel-transition";
import { DitherCard } from "@/registry/ui/dither-card";
import { DecayCard } from "@/registry/ui/decay-card";
import { StackedCards } from "@/registry/ui/stacked-cards";
import { CircularGallery } from "@/registry/ui/circular-gallery";
import { CounterSpring } from "@/registry/ui/counter-spring";
import { StepperSlider } from "@/registry/ui/stepper-slider";
import { BlobCursor } from "@/registry/ui/blob-cursor";
import { TargetCursor } from "@/registry/ui/target-cursor";
import { SplashCursor } from "@/registry/ui/splash-cursor";
import { PixelCursor } from "@/registry/ui/pixel-cursor";
import { ScrollVelocity } from "@/registry/ui/scroll-velocity";
import { CurvedLoop } from "@/registry/ui/curved-loop";
import { ElasticAccordion } from "@/registry/ui/elastic-accordion";
import { MorphingDialog } from "@/registry/ui/morphing-dialog";
import { BubbleText } from "@/registry/ui/bubble-text";
import { GlitchCard } from "@/registry/ui/glitch-card";
import { MagneticDock } from "@/registry/ui/magnetic-dock";
import { FollowPointer } from "@/registry/ui/follow-pointer";
import { BounceText } from "@/registry/ui/bounce-text";
import { StaggeredList } from "@/registry/ui/staggered-list";
import { MagneticButton } from "@/registry/ui/magnetic-button";
import { ElasticToggle } from "@/registry/ui/elastic-toggle";
import { FluidPill } from "@/registry/ui/fluid-pill";

import { AnimatedBeam } from "@/registry/ui/animated-beam";
import { ShineButton } from "@/registry/ui/shine-button";
import { PulsatingButton } from "@/registry/ui/pulsating-button";
import { InteractiveHoverButton } from "@/registry/ui/interactive-hover-button";
import { FlipText } from "@/registry/ui/flip-text";
import { WordFadeIn } from "@/registry/ui/word-fade-in";
import { ScrollBasedVelocity } from "@/registry/ui/scroll-based-velocity";
import { AnimatedShinyText } from "@/registry/ui/animated-shiny-text";
import { DockInteractive } from "@/registry/ui/dock-interactive";
import { GlobeWireframe } from "@/registry/ui/globe-wireframe";
import { BentoGridCard } from "@/registry/ui/bento-grid-card";
import { RippleButton } from "@/registry/ui/ripple-button";
import { DotPattern } from "@/registry/ui/dot-pattern";
import { GridPattern } from "@/registry/ui/grid-pattern";
import { MagicCard } from "@/registry/ui/magic-card";
import { NeonBorder } from "@/registry/ui/neon-border";
import { SparklesCore } from "@/registry/ui/sparkles-core";
import { MovingBordersGlow } from "@/registry/ui/moving-borders-glow";
import { BackgroundGradientCard } from "@/registry/ui/background-gradient-card";
import { CardHoverEffectGrid } from "@/registry/ui/card-hover-effect-grid";
import { EvervaultCardCipher } from "@/registry/ui/evervault-card-cipher";
import { LampHeader } from "@/registry/ui/lamp-header";
import { WavyTextEffect } from "@/registry/ui/wavy-text-effect";
import { FlipWordsCycle } from "@/registry/ui/flip-words-cycle";
import { TextGenerateEffect } from "@/registry/ui/text-generate-effect";
import { MeteorsStream } from "@/registry/ui/meteors-stream";
import { DirectionAwareHover } from "@/registry/ui/direction-aware-hover";
import { FocusCards } from "@/registry/ui/focus-cards";
import { PinContainer3D } from "@/registry/ui/pin-container-3d";
import { GlowingStarsCard } from "@/registry/ui/glowing-stars-card";

import { DockLens } from "@/registry/ui/dock-lens";
import { ShimmerText } from "@/registry/ui/shimmer-text";
import { GlowBorderCard } from "@/registry/ui/glow-border-card";
import { SpotlightButton } from "@/registry/ui/spotlight-button";
import { FluidTabs } from "@/registry/ui/fluid-tabs";
import { InteractiveAvatar } from "@/registry/ui/interactive-avatar";
import { StackedModal } from "@/registry/ui/stacked-modal";
import { RevealCard } from "@/registry/ui/reveal-card";
import { TiltMediaCard } from "@/registry/ui/tilt-media-card";
import { ParticleBanner } from "@/registry/ui/particle-banner";
import { OriginSliderStepped } from "@/registry/ui/origin-slider-stepped";
import { OriginSwitchIcon } from "@/registry/ui/origin-switch-icon";
import { OriginCheckboxTree } from "@/registry/ui/origin-checkbox-tree";
import { OriginPhoneInput } from "@/registry/ui/origin-phone-input";
import { OriginPasswordMeter } from "@/registry/ui/origin-password-meter";
import { OriginBadgeDot } from "@/registry/ui/origin-badge-dot";
import { OriginRadioCards } from "@/registry/ui/origin-radio-cards";
import { OriginFileDrop } from "@/registry/ui/origin-file-drop";
import { OriginNumberStepper } from "@/registry/ui/origin-number-stepper";
import { OriginColorPalettePicker } from "@/registry/ui/origin-color-palette-picker";

import { TremorAreaChartKpi } from "@/registry/ui/tremor-area-chart-kpi";
import { TremorBarList } from "@/registry/ui/tremor-bar-list";
import { TremorSparkArea } from "@/registry/ui/tremor-spark-area";
import { TremorTrackerStatus } from "@/registry/ui/tremor-tracker-status";
import { TremorBadgeDeltaPill } from "@/registry/ui/tremor-badge-delta-pill";
import { TremorCategoryBar } from "@/registry/ui/tremor-category-bar";
import { TremorLegendIndicator } from "@/registry/ui/tremor-legend-indicator";
import { TremorMetricGrid } from "@/registry/ui/tremor-metric-grid";
import { TremorStatCardProgress } from "@/registry/ui/tremor-stat-card-progress";
import { TremorCalloutMetric } from "@/registry/ui/tremor-callout-metric";
import { HoverTiltCard } from "@/registry/ui/hover-tilt-card";
import { HoverFuzzyOverlay } from "@/registry/ui/hover-fuzzy-overlay";
import { HoverSlideTabs } from "@/registry/ui/hover-slide-tabs";
import { HoverShutterButton } from "@/registry/ui/hover-shutter-button";
import { HoverClipText } from "@/registry/ui/hover-clip-text";
import { HoverGravityButton } from "@/registry/ui/hover-gravity-button";
import { HoverLiquidCard } from "@/registry/ui/hover-liquid-card";
import { HoverSpotlightBorder } from "@/registry/ui/hover-spotlight-border";
import { HoverGlitchBorder } from "@/registry/ui/hover-glitch-border";
import { HyperPricingBadge } from "@/registry/ui/hyper-pricing-badge";
import { HyperStatsPill } from "@/registry/ui/hyper-stats-pill";
import { HyperFeatureIconCard } from "@/registry/ui/hyper-feature-icon-card";
import { HyperTestimonialQuote } from "@/registry/ui/hyper-testimonial-quote";
import { HyperNewsletterCompact } from "@/registry/ui/hyper-newsletter-compact";
import { HyperBannerAlert } from "@/registry/ui/hyper-banner-alert";
import { HyperFaqCard } from "@/registry/ui/hyper-faq-card";
import { HyperAvatarStack } from "@/registry/ui/hyper-avatar-stack";

export const componentMap: Record<string, React.ComponentType<any>> = {
  "tremor-area-chart-kpi": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorAreaChartKpi {...props} />
    </div>
  ),
  "tremor-bar-list": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBarList {...props} />
    </div>
  ),
  "tremor-spark-area": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorSparkArea {...props} />
    </div>
  ),
  "tremor-tracker-status": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorTrackerStatus {...props} />
    </div>
  ),
  "tremor-badge-delta-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBadgeDeltaPill {...props} />
    </div>
  ),
  "tremor-category-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCategoryBar {...props} />
    </div>
  ),
  "tremor-legend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLegendIndicator {...props} />
    </div>
  ),
  "tremor-metric-grid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMetricGrid {...props} />
    </div>
  ),
  "tremor-stat-card-progress": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorStatCardProgress {...props} />
    </div>
  ),
  "tremor-callout-metric": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCalloutMetric {...props} />
    </div>
  ),
  "hover-tilt-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltCard {...props} />
    </div>
  ),
  "hover-fuzzy-overlay": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyOverlay {...props} />
    </div>
  ),
  "hover-slide-tabs": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSlideTabs {...props} />
    </div>
  ),
  "hover-shutter-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverShutterButton {...props} />
    </div>
  ),
  "hover-clip-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipText {...props} />
    </div>
  ),
  "hover-gravity-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButton {...props} />
    </div>
  ),
  "hover-liquid-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCard {...props} />
    </div>
  ),
  "hover-spotlight-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightBorder {...props} />
    </div>
  ),
  "hover-glitch-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBorder {...props} />
    </div>
  ),
  "hyper-pricing-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperPricingBadge {...props} />
    </div>
  ),
  "hyper-stats-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperStatsPill {...props} />
    </div>
  ),
  "hyper-feature-icon-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperFeatureIconCard {...props} />
    </div>
  ),
  "hyper-testimonial-quote": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperTestimonialQuote {...props} />
    </div>
  ),
  "hyper-newsletter-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperNewsletterCompact {...props} />
    </div>
  ),
  "hyper-banner-alert": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBannerAlert {...props} />
    </div>
  ),
  "hyper-faq-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperFaqCard {...props} />
    </div>
  ),
  "hyper-avatar-stack": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAvatarStack {...props} />
    </div>
  ),

  "dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <DockLens {...props} />
    </div>
  ),
  "shimmer-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ShimmerText {...props} />
    </div>
  ),
  "glow-border-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <GlowBorderCard {...props} />
    </div>
  ),
  "spotlight-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SpotlightButton {...props} />
    </div>
  ),
  "fluid-tabs": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FluidTabs {...props} />
    </div>
  ),
  "interactive-avatar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InteractiveAvatar {...props} />
    </div>
  ),
  "stacked-modal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StackedModal {...props} />
    </div>
  ),
  "reveal-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <RevealCard {...props} />
    </div>
  ),
  "tilt-media-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TiltMediaCard {...props} />
    </div>
  ),
  "particle-banner": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ParticleBanner {...props} />
    </div>
  ),
  "origin-slider-stepped": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginSliderStepped {...props} />
    </div>
  ),
  "origin-switch-icon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginSwitchIcon {...props} />
    </div>
  ),
  "origin-checkbox-tree": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginCheckboxTree {...props} />
    </div>
  ),
  "origin-phone-input": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginPhoneInput {...props} />
    </div>
  ),
  "origin-password-meter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginPasswordMeter {...props} />
    </div>
  ),
  "origin-badge-dot": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginBadgeDot {...props} />
    </div>
  ),
  "origin-radio-cards": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginRadioCards {...props} />
    </div>
  ),
  "origin-file-drop": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginFileDrop {...props} />
    </div>
  ),
  "origin-number-stepper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginNumberStepper {...props} />
    </div>
  ),
  "origin-color-palette-picker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginColorPalettePicker {...props} />
    </div>
  ),

  "animated-beam": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AnimatedBeam {...props} />
    </div>
  ),
  "shine-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ShineButton {...props} />
    </div>
  ),
  "pulsating-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PulsatingButton {...props} />
    </div>
  ),
  "interactive-hover-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InteractiveHoverButton {...props} />
    </div>
  ),
  "flip-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FlipText {...props} />
    </div>
  ),
  "word-fade-in": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <WordFadeIn {...props} />
    </div>
  ),
  "scroll-based-velocity": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ScrollBasedVelocity {...props} />
    </div>
  ),
  "animated-shiny-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AnimatedShinyText {...props} />
    </div>
  ),
  "dock-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <DockInteractive {...props} />
    </div>
  ),
  "globe-wireframe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <GlobeWireframe {...props} />
    </div>
  ),
  "bento-grid-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BentoGridCard {...props} />
    </div>
  ),
  "ripple-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <RippleButton {...props} />
    </div>
  ),
  "dot-pattern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <DotPattern {...props} />
    </div>
  ),
  "grid-pattern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <GridPattern {...props} />
    </div>
  ),
  "magic-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicCard {...props} />
    </div>
  ),
  "neon-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NeonBorder {...props} />
    </div>
  ),
  "sparkles-core": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SparklesCore {...props} />
    </div>
  ),
  "moving-borders-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MovingBordersGlow {...props} />
    </div>
  ),
  "background-gradient-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BackgroundGradientCard {...props} />
    </div>
  ),
  "card-hover-effect-grid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardHoverEffectGrid {...props} />
    </div>
  ),
  "evervault-card-cipher": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <EvervaultCardCipher {...props} />
    </div>
  ),
  "lamp-header": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <LampHeader {...props} />
    </div>
  ),
  "wavy-text-effect": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <WavyTextEffect {...props} />
    </div>
  ),
  "flip-words-cycle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FlipWordsCycle {...props} />
    </div>
  ),
  "text-generate-effect": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TextGenerateEffect {...props} />
    </div>
  ),
  "meteors-stream": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MeteorsStream {...props} />
    </div>
  ),
  "direction-aware-hover": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <DirectionAwareHover {...props} />
    </div>
  ),
  "focus-cards": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FocusCards {...props} />
    </div>
  ),
  "pin-container-3d": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PinContainer3D {...props} />
    </div>
  ),
  "glowing-stars-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <GlowingStarsCard {...props} />
    </div>
  ),

  "fuzzy-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FuzzyText {...props} />
    </div>
  ),
  "pixel-transition": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PixelTransition {...props} />
    </div>
  ),
  "dither-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <DitherCard {...props} />
    </div>
  ),
  "decay-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <DecayCard {...props} />
    </div>
  ),
  "stacked-cards": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StackedCards {...props} />
    </div>
  ),
  "circular-gallery": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CircularGallery {...props} />
    </div>
  ),
  "counter-spring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CounterSpring {...props} />
    </div>
  ),
  "stepper-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StepperSlider {...props} />
    </div>
  ),
  "blob-cursor": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BlobCursor {...props} />
    </div>
  ),
  "target-cursor": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TargetCursor {...props} />
    </div>
  ),
  "splash-cursor": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SplashCursor {...props} />
    </div>
  ),
  "pixel-cursor": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PixelCursor {...props} />
    </div>
  ),
  "scroll-velocity": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ScrollVelocity {...props} />
    </div>
  ),
  "curved-loop": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CurvedLoop {...props} />
    </div>
  ),
  "elastic-accordion": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ElasticAccordion {...props} />
    </div>
  ),
  "morphing-dialog": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MorphingDialog {...props} />
    </div>
  ),
  "bubble-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BubbleText {...props} />
    </div>
  ),
  "glitch-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <GlitchCard {...props} />
    </div>
  ),
  "magnetic-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagneticDock {...props} />
    </div>
  ),
  "follow-pointer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FollowPointer {...props} />
    </div>
  ),
  "bounce-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BounceText {...props} />
    </div>
  ),
  "staggered-list": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StaggeredList {...props} />
    </div>
  ),
  "magnetic-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagneticButton {...props} />
    </div>
  ),
  "elastic-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ElasticToggle {...props} />
    </div>
  ),
  "fluid-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FluidPill {...props} />
    </div>
  ),

  "stats-card-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StatsCardAccent {...props} />
    </div>
  ),

  "marketing-feature-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MarketingFeaturePill {...props} />
    </div>
  ),

  "water-drop-grid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <WaterDropGrid {...props} />
    </div>
  ),

  "hover-expand-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverExpandCard {...props} />
    </div>
  ),

  "progress-bar-stepped": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ProgressBarStepped {...props} />
    </div>
  ),

  "kpi-metric-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <KpiMetricCard {...props} />
    </div>
  ),

  "origin-select-fancy": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginSelectFancy {...props} />
    </div>
  ),

  "origin-input-tag": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginInputTag {...props} />
    </div>
  ),

  "minimal-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MinimalCard {...props} />
    </div>
  ),

  "gradient-heading": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <GradientHeading {...props} />
    </div>
  ),

  "studio-code-preview": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodePreview {...props} />
    </div>
  ),

  "studio-component-inspector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioComponentInspector {...props} />
    </div>
  ),

  "ai-prompt-input": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptInput {...props} />
    </div>
  ),

  "action-bar-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ActionBarGlow {...props} />
    </div>
  ),

  "hover-border-gradient": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverBorderGradient {...props} />
    </div>
  ),

  "floating-navbar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FloatingNavbar {...props} />
    </div>
  ),

  "tracing-beam": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TracingBeam {...props} />
    </div>
  ),

  "avatar-circles": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AvatarCircles {...props} />
    </div>
  ),

  "orbiting-circles": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OrbitingCircles {...props} />
    </div>
  ),

  "rainbow-button": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <RainbowButton {...props} />
    </div>
  ),

  "marquee": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <Marquee {...props} />
    </div>
  ),

  "electric-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ElectricBorder {...props} />
    </div>
  ),

  "crosshair": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <Crosshair {...props} />
    </div>
  ),

  "magnet-lines": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagnetLines {...props} />
    </div>
  ),

  "magnet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <Magnet {...props} />
    </div>
  ),

  "infinite-scroll": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InfiniteScroll {...props} />
    </div>
  ),

  "spotlight-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SpotlightCard {...props} />
    </div>
  ),

  "tilted-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TiltedCard {...props} />
    </div>
  ),

  "flowing-menu": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <FlowingMenu {...props} />
    </div>
  ),

  "elastic-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ElasticSlider {...props} />
    </div>
  ),

  "rolling-gallery": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <RollingGallery {...props} />
    </div>
  ),

  "text-pressure": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TextPressure {...props} />
    </div>
  ),
  "glitch-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <GlitchText {...props} />
    </div>
  ),
  "variable-proximity": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <VariableProximity {...props} />
    </div>
  ),
  "circular-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CircularText {...props} />
    </div>
  ),
  "wave-text": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <WaveText {...props} />
    </div>
  ),

  "button-elastic-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonElasticBounce {...props} />
    </div>
  ),
  "button-glow-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonGlowNeon {...props} />
    </div>
  ),
  "button-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonGradientBorder {...props} />
    </div>
  ),
  "button-neubrutalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonNeubrutalist {...props} />
    </div>
  ),
  "button-retro-3d": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonRetro3D {...props} />
    </div>
  ),
  "button-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonHoldConfirm {...props} />
    </div>
  ),
  "button-copy-morph": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonCopyMorph {...props} />
    </div>
  ),
  "button-slide-reveal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonSlideReveal {...props} />
    </div>
  ),
  "button-liquid-fill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonLiquidFill {...props} />
    </div>
  ),
  "button-split-dropdown": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonSplitDropdown {...props} />
    </div>
  ),
  "input-pill-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPillGlow {...props} />
    </div>
  ),
  "input-underlined-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputUnderlinedMinimal {...props} />
    </div>
  ),
  "input-password-strength": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPasswordStrength {...props} />
    </div>
  ),
  "input-credit-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCreditCard {...props} />
    </div>
  ),
  "input-verification-code": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputVerificationCode {...props} />
    </div>
  ),
  "input-command-filter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandFilter {...props} />
    </div>
  ),
  "input-voice-dictation": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputVoiceDictation {...props} />
    </div>
  ),
  "input-tag-chips": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTagChips {...props} />
    </div>
  ),
  "input-auto-grow-textarea": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputAutoGrowTextarea {...props} />
    </div>
  ),
  "input-file-uploader-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileUploaderCompact {...props} />
    </div>
  ),
  "switch-ios-spring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SwitchIosSpring {...props} />
    </div>
  ),
  "switch-labeled-icon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SwitchLabeledIcon {...props} />
    </div>
  ),
  "switch-segmented-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SwitchSegmentedSlider {...props} />
    </div>
  ),
  "slider-range-dual": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SliderRangeDual {...props} />
    </div>
  ),
  "slider-volume-stepped": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SliderVolumeStepped {...props} />
    </div>
  ),
  "slider-circular-dial": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <SliderCircularDial {...props} />
    </div>
  ),
  "checkbox-animated-check": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CheckboxAnimatedCheck {...props} />
    </div>
  ),
  "radio-card-group": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <RadioCardGroup {...props} />
    </div>
  ),
  "checkbox-tree-hierarchical": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CheckboxTreeHierarchical {...props} />
    </div>
  ),
  "badge-status-dot": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeStatusDot {...props} />
    </div>
  ),
  "badge-live-stream": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeLiveStream {...props} />
    </div>
  ),
  "badge-gradient-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeGradientPill {...props} />
    </div>
  ),
  "badge-counter-notification": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeCounterNotification {...props} />
    </div>
  ),
  "badge-dismissable": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeDismissable {...props} />
    </div>
  ),
  "badge-copy-token": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeCopyToken {...props} />
    </div>
  ),
  "badge-verified-tier": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeVerifiedTier {...props} />
    </div>
  ),
  "card-inner-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardInnerGlow {...props} />
    </div>
  ),
  "card-gradient-mesh": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardGradientMesh {...props} />
    </div>
  ),
  "card-flip-3d": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardFlip3D {...props} />
    </div>
  ),
  "card-metric-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardMetricTrend {...props} />
    </div>
  ),
  "card-profile-header": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardProfileHeader {...props} />
    </div>
  ),
  "card-neubrutalist-shadow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardNeubrutalistShadow {...props} />
    </div>
  ),
  "button-pulse-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonPulseRing {...props} />
    </div>
  ),
  "button-gradient-flow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonGradientFlow {...props} />
    </div>
  ),
  "input-stepper-number": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputStepperNumber {...props} />
    </div>
  ),
  "blog-post-template": () => <BlogPostTemplate />,

  "error-404-page": () => <Error404Page />,

  "settings-account-page": () => <SettingsAccountPage />,

  "pricing-page-full": () => <PricingPageFull />,

  "changelog-page": () => <ChangelogPage />,

  "dashboard-quick-actions": () => <DashboardQuickActions />,

  "dashboard-activity-feed": () => <DashboardActivityFeed />,

  "navbar-floating-glass": () => <NavbarFloatingGlass />,

  "footer-minimal-centered": () => <FooterMinimalCentered />,

  "cta-split-card": () => <CtaSplitCard />,

  "faq-searchable": () => <FaqSearchable />,

  "testimonials-grid-masonry": () => <TestimonialsGridMasonry />,

  "testimonials-marquee": () => <TestimonialsMarquee />,

  "feature-comparison-matrix": () => <FeatureComparisonMatrix />,

  "feature-bento-spotlight": () => <FeatureBentoSpotlight />,

  "feature-timeline": () => <FeatureTimeline />,

  "pricing-slider": () => <PricingSlider />,

  "pricing-toggle-annual": () => <PricingToggleAnnual />,

  "hero-floating-mockup": () => <HeroFloatingMockup />,

  "hero-split-image": () => <HeroSplitImage />,

  "toggle-group": () => {
    return (
      <div className="p-8 flex items-center justify-center">
        <ToggleGroup />
      </div>
    );
  },
  collapsible: (props?: any) => {
    return (
      <div className="p-8 max-w-md mx-auto">
        <Collapsible title={props?.title || "Показать подробности"}>
          Здесь находится развернутая информация, логи или расширенные поля конфигурации, скрытые по умолчанию.
        </Collapsible>
      </div>
    );
  },
  rating: (props?: any) => {
    const [val, setVal] = React.useState(Number(props?.value) || 4);
    return (
      <div className="p-8 flex flex-col items-center justify-center gap-3">
        <Rating value={val} onChange={setVal} />
        <span className="text-xs font-mono text-muted-foreground">Выбрано: {val} из 5 звёзд</span>
      </div>
    );
  },
  "scroll-area": () => {
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
  },
  breadcrumbs: () => {
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
  },
  stepper: (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <Stepper
          steps={["Аккаунт", "Профиль", "Оплата", "Готово"]}
          currentStep={Number(props?.currentStep) || 2}
        />
      </div>
    );
  },
  "tooltip-animated": (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <TooltipAnimated content={props?.content || "Скопировать в буфер"}>
          <Button variant="outline">Наведи курсор для подсказки</Button>
        </TooltipAnimated>
      </div>
    );
  },
  "avatar-group": (props?: any) => {
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
  },
  "badge-pulse": (props?: any) => {
    return (
      <div className="p-8 flex flex-wrap gap-4 items-center justify-center">
        <BadgePulse status={props?.status || "online"} label={props?.label || "Система в норме"} />
        <BadgePulse status="warning" label="Высокая нагрузка" />
        <BadgePulse status="busy" label="Техработы" />
      </div>
    );
  },
  "tabs-vertical": (props?: any) => {
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
  },
  "tabs-pill": (props?: any) => {
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
  },
  kbd: (props?: any) => {
    return (
      <div className="p-8 flex flex-wrap gap-3 items-center justify-center">
        <Kbd>{props?.text || "⌘ + K"}</Kbd>
        <Kbd>Ctrl + Shift + P</Kbd>
        <Kbd>ESC</Kbd>
        <Kbd>Enter ↵</Kbd>
      </div>
    );
  },
  "input-search-animated": (props?: any) => {
    return (
      <div className="p-8 flex items-center justify-center">
        <InputSearchAnimated placeholder={props?.placeholder || "Поиск по компонентам..."} />
      </div>
    );
  },
  "input-otp": (props?: any) => {
    const [code, setCode] = React.useState("");
    const length = Number(props?.length) || 6;
    return (
      <div className="p-8 flex flex-col items-center justify-center gap-3">
        <InputOtp length={length} value={code} onChange={setCode} />
        <span className="text-xs font-mono text-muted-foreground">Введено: {code || "..."}</span>
      </div>
    );
  },
  "input-floating-label": (props?: any) => {
    return (
      <div className="p-8 max-w-sm mx-auto w-full">
        <InputFloatingLabel label={props?.label || "Email адрес"} type="email" />
      </div>
    );
  },
  "card-glass": (props?: any) => {
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
  },
  "card-tilt": (props?: any) => {
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
  },
  "card-spotlight": (props?: any) => {
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
  },
  "badge-shimmer": (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="flex flex-col items-center justify-center p-8 gap-4">
          <BadgeShimmer
            variant={props.variant || "default"}
            size={props.size || "default"}
          >
            {props.label || "BadgeShimmer"}
          </BadgeShimmer>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-4 items-center justify-center p-8">
        <BadgeShimmer variant="default">BadgeShimmer</BadgeShimmer>
        <BadgeShimmer variant="secondary">Secondary</BadgeShimmer>
        <BadgeShimmer variant="outline">Outline</BadgeShimmer>
      </div>
    );
  },

  // UI Primitives Demo wrappers
  button: (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="flex flex-col items-center justify-center p-8 gap-4">
          <Button
            variant={props.variant || "default"}
            size={props.size || "default"}
            loading={props.loading}
            disabled={props.disabled}
          >
            {props.icon === "sparkles" && <Sparkles className="mr-2 h-4 w-4" />}
            {props.icon === "arrow" && <ArrowRight className="mr-2 h-4 w-4" />}
            {props.icon === "terminal" && <Terminal className="mr-2 h-4 w-4" />}
            {props.icon === "check" && <Check className="mr-2 h-4 w-4" />}
            <span>{props.label || "Click Me"}</span>
          </Button>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-3 items-center justify-center p-8">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="glass">Glass</Button>
        <Button variant="glow">Glow</Button>
      </div>
    );
  },
  "button-magnetic": (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="flex flex-col items-center justify-center p-12 gap-4">
          <ButtonMagnetic
            variant={props.variant || "default"}
            size={props.size || "default"}
            disabled={props.disabled}
            strength={props.strength !== undefined ? Number(props.strength) : 0.35}
            textParallax={props.textParallax !== undefined ? Boolean(props.textParallax) : true}
          >
            {props.icon === "sparkles" && <Sparkles className="h-4 w-4" />}
            {props.icon === "arrow" && <ArrowRight className="h-4 w-4" />}
            {props.icon === "terminal" && <Terminal className="h-4 w-4" />}
            {props.icon === "check" && <Check className="h-4 w-4" />}
            <span>{props.label || "Magnetic Button"}</span>
          </ButtonMagnetic>
          <span className="text-xs text-muted-foreground">
            Сила: {props.strength ?? 0.35} | Параллакс: {props.textParallax !== false ? "Да" : "Нет"}
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-4 items-center justify-center p-12">
        <ButtonMagnetic variant="default">Magnetic Default</ButtonMagnetic>
        <ButtonMagnetic variant="secondary">Magnetic Secondary</ButtonMagnetic>
        <ButtonMagnetic variant="glass">Magnetic Glass</ButtonMagnetic>
        <ButtonMagnetic variant="glow">
          <Sparkles className="h-4 w-4" />
          <span>Magnetic Glow</span>
        </ButtonMagnetic>
      </div>
    );
  },
  "button-ripple": (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="flex flex-col items-center justify-center p-12 gap-4">
          <ButtonRipple
            variant={props.variant || "default"}
            size={props.size || "default"}
            disabled={props.disabled}
            duration={props.duration !== undefined ? Number(props.duration) : 600}
            rippleColor={props.rippleColor === "default" ? undefined : props.rippleColor}
          >
            {props.icon === "sparkles" && <Sparkles className="h-4 w-4" />}
            {props.icon === "arrow" && <ArrowRight className="h-4 w-4" />}
            {props.icon === "terminal" && <Terminal className="h-4 w-4" />}
            {props.icon === "check" && <Check className="h-4 w-4" />}
            <span>{props.label || "Click for Ripple"}</span>
          </ButtonRipple>
          <span className="text-xs text-muted-foreground">
            Волна: {props.duration ?? 600}ms {props.rippleColor ? `(${props.rippleColor})` : ""}
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-4 items-center justify-center p-12">
        <ButtonRipple variant="default">Ripple Primary</ButtonRipple>
        <ButtonRipple variant="secondary">Ripple Secondary</ButtonRipple>
        <ButtonRipple variant="destructive">Ripple Destructive</ButtonRipple>
        <ButtonRipple variant="glass">Ripple Glass</ButtonRipple>
        <ButtonRipple variant="glow">
          <Sparkles className="h-4 w-4" />
          <span>Ripple Glow</span>
        </ButtonRipple>
      </div>
    );
  },
  "button-shimmer": (props?: any) => {
    if (props?.isPlayground) {
      const dur = typeof props.shimmerDuration === "number" ? `${props.shimmerDuration}s` : (props.shimmerDuration || "3s");
      return (
        <div className="flex flex-col items-center justify-center p-12 gap-4">
          <ButtonShimmer
            variant={props.variant || "dark"}
            size={props.size || "default"}
            disabled={props.disabled}
            shimmerColor={props.shimmerColor || "#a855f7"}
            shimmerDuration={dur}
            effect={props.effect || "both"}
          >
            {props.icon === "sparkles" && <Sparkles className="h-4 w-4 text-purple-400" />}
            {props.icon === "arrow" && <ArrowRight className="h-4 w-4" />}
            {props.icon === "terminal" && <Terminal className="h-4 w-4" />}
            {props.icon === "check" && <Check className="h-4 w-4 text-emerald-400" />}
            <span>{props.label || "Shimmer Button"}</span>
          </ButtonShimmer>
          <span className="text-xs text-muted-foreground">
            Эффект: {props.effect ?? "both"} | Длительность: {dur}
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-4 items-center justify-center p-12">
        <ButtonShimmer variant="dark" shimmerColor="#a855f7">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span>Border Beam CTA</span>
        </ButtonShimmer>
        <ButtonShimmer variant="default" shimmerColor="#38bdf8">
          <span>Primary Shimmer</span>
        </ButtonShimmer>
        <ButtonShimmer variant="glass" shimmerColor="#ec4899">
          <span>Glass Shimmer</span>
        </ButtonShimmer>
        <ButtonShimmer variant="secondary" effect="sweep">
          <span>Sweep Only</span>
        </ButtonShimmer>
      </div>
    );
  },
  "button-expandable": (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="flex flex-col items-center justify-center p-12 gap-4">
          <ButtonExpandable
            variant={props.variant || "default"}
            size={props.size || "default"}
            disabled={props.disabled}
            mode={props.mode || "reveal-icon"}
            iconPosition={props.iconPosition || "right"}
            icon={props.icon === "sparkles" ? <Sparkles className="h-4 w-4" /> : undefined}
          >
            <span>{props.label || "Hover to Expand"}</span>
          </ButtonExpandable>
          <span className="text-xs text-muted-foreground">
            Режим: {props.mode ?? "reveal-icon"} | Позиция: {props.iconPosition ?? "right"}
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-4 items-center justify-center p-12">
        <ButtonExpandable variant="default">
          Explore Platform
        </ButtonExpandable>
        <ButtonExpandable variant="secondary" iconPosition="left">
          Left Reveal
        </ButtonExpandable>
        <ButtonExpandable variant="glow">
          Get Started
        </ButtonExpandable>
        <ButtonExpandable variant="outline" mode="reveal-text" icon={<Sparkles className="h-4 w-4" />}>
          AI Actions
        </ButtonExpandable>
      </div>
    );
  },
  "button-tilt": (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="flex flex-col items-center justify-center p-12 gap-4">
          <ButtonTilt
            variant={props.variant || "default"}
            size={props.size || "default"}
            disabled={props.disabled}
            maxTilt={props.maxTilt !== undefined ? Number(props.maxTilt) : 14}
            depth={props.depth !== undefined ? Number(props.depth) : 20}
            perspective={props.perspective !== undefined ? Number(props.perspective) : 600}
            glare={props.glare !== undefined ? Boolean(props.glare) : true}
          >
            {props.icon === "sparkles" && <Sparkles className="h-4 w-4" />}
            {props.icon === "arrow" && <ArrowRight className="h-4 w-4" />}
            {props.icon === "terminal" && <Terminal className="h-4 w-4" />}
            {props.icon === "check" && <Check className="h-4 w-4" />}
            <span>{props.label || "3D Tilt Button"}</span>
          </ButtonTilt>
          <span className="text-xs text-muted-foreground">
            Наклон: {props.maxTilt ?? 14}° | Глубина: {props.depth ?? 20}px | Блик: {props.glare !== false ? "Вкл" : "Выкл"}
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-4 items-center justify-center p-12">
        <ButtonTilt variant="default">
          3D Perspective
        </ButtonTilt>
        <ButtonTilt variant="glass">
          Glass Perspective
        </ButtonTilt>
        <ButtonTilt variant="glow">
          <Sparkles className="h-4 w-4" />
          <span>Spatial Glow</span>
        </ButtonTilt>
      </div>
    );
  },
  "button-group": (props?: any) => {
    const [segmentedVal, setSegmentedVal] = React.useState("analytics");

    if (props?.isPlayground) {
      if (props.groupType === "segmented") {
        return (
          <div className="flex flex-col items-center justify-center p-12 gap-4">
            <SegmentedControl
              value={segmentedVal}
              onChange={setSegmentedVal}
              size={props.size || "default"}
              options={[
                { value: "overview", label: "Overview" },
                { value: "analytics", label: "Analytics" },
                { value: "reports", label: "Reports" },
                { value: "settings", label: "Settings" },
              ]}
            />
            <span className="text-xs text-muted-foreground">Выбрано: {segmentedVal}</span>
          </div>
        );
      }

      if (props.groupType === "split") {
        return (
          <div className="flex flex-col items-center justify-center p-12 gap-4">
            <SplitButton
              variant={props.variant || "default"}
              size={props.size || "default"}
              disabled={props.disabled}
              onClick={() => alert("Основное действие выполнено")}
              menuItems={[
                { label: "Сохранить и опубликовать" },
                { label: "Сохранить как черновик" },
                { label: "Дублировать" },
                { label: "Удалить", destructive: true },
              ]}
            >
              <span>{props.label || "Сохранить изменения"}</span>
            </SplitButton>
            <span className="text-xs text-muted-foreground">Сплит-кнопка с выпадающим меню</span>
          </div>
        );
      }

      return (
        <div className="flex flex-col items-center justify-center p-12 gap-4">
          <ButtonGroup
            orientation={props.orientation || "horizontal"}
            attached={props.attached !== false}
          >
            <Button variant={props.variant || "outline"} size={props.size || "default"}>
              Левая
            </Button>
            <Button variant={props.variant || "outline"} size={props.size || "default"}>
              Центральная
            </Button>
            <Button variant={props.variant || "outline"} size={props.size || "default"}>
              Правая
            </Button>
          </ButtonGroup>
          <span className="text-xs text-muted-foreground">
            Ориентация: {props.orientation || "horizontal"} | Слитные границы: {props.attached !== false ? "Да" : "Нет"}
          </span>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-8 items-center justify-center p-8 max-w-xl mx-auto">
        {/* 1. Segmented Control */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">Segmented Control</span>
          <SegmentedControl
            value={segmentedVal}
            onChange={setSegmentedVal}
            options={[
              { value: "overview", label: "Overview" },
              { value: "analytics", label: "Analytics" },
              { value: "reports", label: "Reports" },
              { value: "settings", label: "Settings" },
            ]}
          />
        </div>

        {/* 2. Split Button */}
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <SplitButton
            variant="default"
            menuItems={[
              { label: "Опубликовать сейчас" },
              { label: "Запланировать на завтра" },
              { label: "Сохранить как шаблон" },
            ]}
          >
            Опубликовать
          </SplitButton>

          <SplitButton
            variant="outline"
            menuItems={[
              { label: "Экспорт в CSV" },
              { label: "Экспорт в PDF" },
              { label: "Печать" },
            ]}
          >
            Экспорт данных
          </SplitButton>
        </div>

        {/* 3. Linked Toolbar Group */}
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <ButtonGroup attached>
            <Button variant="outline" size="sm">День</Button>
            <Button variant="outline" size="sm">Неделя</Button>
            <Button variant="outline" size="sm">Месяц</Button>
            <Button variant="outline" size="sm">Квартал</Button>
            <Button variant="outline" size="sm">Год</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
  input: (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="w-full max-w-sm space-y-2 p-8 mx-auto">
          <Input
            placeholder={props.placeholder || "Введите текст..."}
            type={props.type || "text"}
            disabled={props.disabled}
          />
        </div>
      );
    }
    return (
      <div className="w-full max-w-sm space-y-2 p-8 mx-auto">
        <Input placeholder="Введите email..." type="email" />
        <Input placeholder="Отключенное поле..." disabled />
      </div>
    );
  },
  textarea: (props?: any) => (
    <div className="w-full max-w-sm space-y-2 p-8 mx-auto">
      <Textarea placeholder={props?.placeholder || "Введите подробный отзыв..."} disabled={props?.disabled} />
    </div>
  ),
  badge: (props?: any) => {
    if (props?.isPlayground) {
      return (
        <div className="flex items-center justify-center p-8">
          <Badge variant={props.variant || "default"}>
            {props.label || "Badge Label"}
          </Badge>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-2 items-center justify-center p-8">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    );
  },
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
  "command-menu": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <CommandMenu placeholder={props?.placeholder || "Поиск действий..."} />
      </div>
    );
  },
  "drawer-bottom": (props?: any) => {
    return (
      <div className="p-8 flex justify-center items-end min-h-[300px] bg-muted/10 rounded-xl">
        <DrawerBottom title={props?.title || "Быстрые действия"} description={props?.description || "Выберите действие"} />
      </div>
    );
  },
  "context-menu": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ContextMenu triggerText={props?.triggerText || "Правый клик в этой области"} />
      </div>
    );
  },
  "hover-card": (props?: any) => {
    return (
      <div className="p-16 flex justify-center items-center">
        <HoverCard triggerText={props?.triggerText || "@amantledesign"} title={props?.title || "AMANTLE Design System"} />
      </div>
    );
  },
  "resizable-panel": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ResizablePanel defaultSplit={Number(props?.defaultSplit) || 35} />
      </div>
    );
  },
  "menubar": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <Menubar />
      </div>
    );
  },
  "navigation-menu": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <NavigationMenu />
      </div>
    );
  },
  "aspect-ratio": (props?: any) => {
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
  },
  "pagination": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <Pagination currentPage={Number(props?.currentPage) || 2} totalPages={Number(props?.totalPages) || 5} />
      </div>
    );
  },
  "calendar-picker": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <CalendarPicker selectedDay={Number(props?.selectedDay) || 15} />
      </div>
    );
  },
  "color-picker": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ColorPicker defaultColor={props?.defaultColor || "#6366f1"} />
      </div>
    );
  },
  "file-upload-dropzone": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <FileUploadDropzone accept={props?.accept || "PNG, JPG, PDF"} maxSizeMb={Number(props?.maxSizeMb) || 10} />
      </div>
    );
  },
  "tree-view": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <TreeView />
      </div>
    );
  },
  "badge-shine": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <BadgeShine label={props?.label || "✨ Новый релиз v2.4"} />
      </div>
    );
  },
  "badge-glow": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <BadgeGlow label={props?.label || "Популярный выбор"} variant={props?.variant || "primary"} />
      </div>
    );
  },
  "meteors": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <Meteors number={Number(props?.number) || 16} />
      </div>
    );
  },
  "sparkles-text": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <SparklesText text={props?.text || "AMANTLE UI"} />
      </div>
    );
  },
  "word-rotate": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <WordRotate duration={Number(props?.duration) || 2500} />
      </div>
    );
  },
  "typing-text": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <TypingText text={props?.text || "Соберите дизайн-систему за считанные минуты."} speed={Number(props?.speed) || 50} />
      </div>
    );
  },
  "number-ticker": (props?: any) => {
    return (
      <div className="p-8 flex flex-col items-center gap-2">
        <NumberTicker value={Number(props?.value) || 150} suffix={props?.suffix || "+"} />
        <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Готовых Компонентов</span>
      </div>
    );
  },
  "border-beam": (props?: any) => {
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
  },
  "shine-border": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ShineBorder className="max-w-sm w-full" />
      </div>
    );
  },
  "particles-background": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ParticlesBackground quantity={Number(props?.quantity) || 30} />
      </div>
    );
  },
  "dock-bar": (props?: any) => {
    return (
      <div className="p-12 flex justify-center items-end">
        <DockBar />
      </div>
    );
  },
  "confetti": (props?: any) => {
    return (
      <div className="p-12 flex justify-center">
        <Confetti buttonText={props?.buttonText || "🎉 Отпраздновать победу!"} />
      </div>
    );
  },
  "hero-lamp": (props?: any) => {
    return (
      <div className="p-8">
        <HeroLamp
          badge={props?.badge || "Новое поколение веб-интерфейсов"}
          title={props?.title || "Создавайте эстетику света с AMANTLE UI"}
          description={props?.description || "Готовые компоненты, кинетическая типографика и интеллектуальный composer для ваших SaaS продуктов."}
        />
      </div>
    );
  },
  "hero-retro-grid": (props?: any) => {
    return (
      <div className="p-8">
        <HeroRetroGrid heading={props?.heading} subheading={props?.subheading} />
      </div>
    );
  },
  "hero-canvas-reveal": (props?: any) => {
    return (
      <div className="p-8">
        <HeroCanvasReveal title={props?.title} />
      </div>
    );
  },
  "ai-chat-prompt": (props?: any) => {
    return (
      <div className="p-8">
        <AiChatPrompt placeholder={props?.placeholder} modelName={props?.modelName} />
      </div>
    );
  },
  "ai-generation-card": (props?: any) => {
    return (
      <div className="p-8">
        <AiGenerationCard promptTitle={props?.promptTitle} />
      </div>
    );
  },
  "ai-code-diff": (props?: any) => {
    return (
      <div className="p-8">
        <AiCodeDiff filename={props?.filename} />
      </div>
    );
  },
  "bento-grid-interactive": (props?: any) => {
    return (
      <div className="p-8">
        <BentoGridInteractive />
      </div>
    );
  },
  "sticky-scroll-reveal": (props?: any) => {
    return (
      <div className="p-8">
        <StickyScrollReveal />
      </div>
    );
  },
  "pricing-tier-matrix": (props?: any) => {
    return (
      <div className="p-8">
        <PricingTierMatrix isAnnual={props?.isAnnual !== false} />
      </div>
    );
  },
  "testimonials-infinite-slider": (props?: any) => {
    return (
      <div className="p-8">
        <TestimonialsInfiniteSlider />
      </div>
    );
  },
  "stats-glass-grid": (props?: any) => {
    return (
      <div className="p-8">
        <StatsGlassGrid />
      </div>
    );
  },
  "cta-lamp-glow": (props?: any) => {
    return (
      <div className="p-8">
        <CtaLampGlow title={props?.title} />
      </div>
    );
  },
  "navbar-floating-dock": (props?: any) => {
    return (
      <div className="relative h-24 p-8 flex justify-center">
        <NavbarFloatingDock className="relative top-0" />
      </div>
    );
  },
  "footer-columns-newsletter": (props?: any) => {
    return (
      <div className="p-8">
        <FooterColumnsNewsletter />
      </div>
    );
  },
  "dashboard-server-monitoring": (props?: any) => {
    return (
      <div className="p-8">
        <DashboardServerMonitoring />
      </div>
    );
  },
  "dashboard-kanban-board": (props?: any) => {
    return (
      <div className="p-8">
        <DashboardKanbanBoard />
      </div>
    );
  },
  "dashboard-table-pagination": (props?: any) => {
    return (
      <div className="p-8">
        <DashboardTablePagination />
      </div>
    );
  },
  "integration-ecosystem-grid": (props?: any) => {
    return (
      <div className="p-8">
        <IntegrationEcosystemGrid />
      </div>
    );
  },
  "comparison-slider-image": (props?: any) => {
    return (
      <div className="p-8 flex justify-center">
        <ComparisonSliderImage defaultPosition={Number(props?.defaultPosition) || 50} />
      </div>
    );
  },
  "cookie-consent-banner": (props?: any) => {
    return (
      <div className="relative h-48 p-8 flex items-end justify-center">
        <CookieConsentBanner className="relative bottom-0 right-0 max-w-md w-full" />
      </div>
    );
  },
  "ai-workspace-template": (props?: any) => {
    return (
      <div className="p-8">
        <AiWorkspaceTemplate />
      </div>
    );
  },
  "developer-docs-template": (props?: any) => {
    return (
      <div className="p-8">
        <DeveloperDocsTemplate />
      </div>
    );
  },
  "analytics-dashboard-template": (props?: any) => {
    return (
      <div className="p-8">
        <AnalyticsDashboardTemplate />
      </div>
    );
  },
  "onboarding-wizard-template": (props?: any) => {
    return (
      <div className="p-8">
        <OnboardingWizardTemplate />
      </div>
    );
  },
  "coming-soon-waitlist-template": (props?: any) => {
    return (
      <div className="p-8">
        <ComingSoonWaitlistTemplate />
      </div>
    );
  },
  "chart-bar-interactive": (props?: any) => {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <ChartBarInteractive />
      </div>
    );
  },
  "chart-area-gradient": (props?: any) => {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <ChartAreaGradient />
      </div>
    );
  },
  "data-table-advanced": (props?: any) => {
    return (
      <div className="p-8 max-w-5xl mx-auto">
        <DataTableAdvanced />
      </div>
    );
  },
  "animated-beam-network": (props?: any) => {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <AnimatedBeamNetwork />
      </div>
    );
  },
  "form-system-accessible": (props?: any) => {
    return (
      <div className="p-8">
        <FormSystemAccessible />
      </div>
    );
  },
  "interactive-grid-pattern": (props?: any) => {
    return (
      <div className="relative h-64 w-full rounded-xl overflow-hidden border border-border bg-card flex items-center justify-center">
        <InteractiveGridPattern />
        <span className="relative z-10 text-sm font-semibold text-foreground bg-card/80 backdrop-blur px-3 py-1.5 rounded-lg border border-border">
          Наведите курсор для подсветки сетки
        </span>
      </div>
    );
  },
  "terminal": (props?: any) => {
    return (
      <div className="p-8 max-w-2xl mx-auto">
        <TerminalComponent />
      </div>
    );
  },
  "gauge-chart": (props?: any) => {
    return (
      <div className="p-8 max-w-sm mx-auto">
        <GaugeChart />
      </div>
    );
  },
  "stats-card-sparkline": (props?: any) => {
    return (
      <div className="p-8 max-w-sm mx-auto">
        <StatsCardSparkline />
      </div>
    );
  },
  "changelog-feed": (props?: any) => {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <ChangelogFeed />
      </div>
    );
  },
  "split-text": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <SplitText text="AMANTLE UI • Кинематографичный сплит-текст" {...props} />
    </div>
  ),
  "blur-text": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <BlurText text="Проявление текста из мягкого фокуса" {...props} />
    </div>
  ),
  "decrypted-text": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <DecryptedText text="NEURAL_INTERFACE_ACTIVATED_2026" trigger="hover" {...props} />
    </div>
  ),
  "true-focus": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <TrueFocus {...props} />
    </div>
  ),
  "shiny-text": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <ShinyText text="Металлический блик AMANTLE UI" {...props} />
    </div>
  ),
  "count-up": (props?: any) => (
    <div className="p-8 flex items-center justify-center text-3xl">
      <CountUp to={2500000} prefix="$" suffix=" ARR" decimals={0} {...props} />
    </div>
  ),
  "gradient-text": (props?: any) => (
    <div className="p-8 flex items-center justify-center text-2xl">
      <GradientText {...props}>Интерфейсы следующего десятилетия</GradientText>
    </div>
  ),
  "rotating-text": (props?: any) => (
    <div className="p-8 flex items-center justify-center text-2xl font-bold">
      <span className="text-foreground mr-2">Создавай</span>
      <RotatingText {...props} />
    </div>
  ),
  "star-border": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <StarBorder {...props}>
        <span>Запустить нейро-конвейер</span>
      </StarBorder>
    </div>
  ),
  "click-spark": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <ClickSpark {...props} />
    </div>
  ),
  "pixel-card": (props?: any) => (
    <div className="p-8 max-w-sm mx-auto">
      <PixelCard {...props} />
    </div>
  ),
  "spring-check": (props?: any) => (
    <div className="p-8 flex flex-col gap-2 max-w-md mx-auto">
      <SpringCheck label="Проанализировать все компоненты React Bits" defaultChecked {...props} />
      <SpringCheck label="Внедрить кастомизатор тем (Remix)" defaultChecked {...props} />
      <SpringCheck label="Запустить A/B тестирование и аудит верстки" {...props} />
    </div>
  ),
  "jelly-radio": (props?: any) => (
    <div className="p-8 max-w-md mx-auto">
      <JellyRadio {...props} />
    </div>
  ),
  "pill-nav": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <PillNav {...props} />
    </div>
  ),
  "button-cyber-glass": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <ButtonCyberGlass {...props} />
    </div>
  ),
  "card-cyber-glass": (props?: any) => (
    <div className="p-8 max-w-sm mx-auto">
      <CardCyberGlass {...props} />
    </div>
  ),
  "input-cyber-glass": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <InputCyberGlass {...props} />
    </div>
  ),
  "input-neubrutalist": (props?: any) => (
    <div className="p-8 flex items-center justify-center">
      <InputNeubrutalist {...props} />
    </div>
  ),
};
