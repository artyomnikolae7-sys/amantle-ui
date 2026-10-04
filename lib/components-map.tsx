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

import { InputCurrencyFloating } from "@/registry/ui/input-currency-floating";
import { InputCurrencyUnderglow } from "@/registry/ui/input-currency-underglow";
import { InputCurrencySegmented } from "@/registry/ui/input-currency-segmented";
import { InputCurrencyGlassmorphic } from "@/registry/ui/input-currency-glassmorphic";
import { InputCurrencyMinimalist } from "@/registry/ui/input-currency-minimalist";
import { InputCryptoFloating } from "@/registry/ui/input-crypto-floating";
import { InputCryptoUnderglow } from "@/registry/ui/input-crypto-underglow";
import { InputCryptoSegmented } from "@/registry/ui/input-crypto-segmented";
import { InputCryptoGlassmorphic } from "@/registry/ui/input-crypto-glassmorphic";
import { InputCryptoMinimalist } from "@/registry/ui/input-crypto-minimalist";
import { InputUrlFloating } from "@/registry/ui/input-url-floating";
import { InputUrlUnderglow } from "@/registry/ui/input-url-underglow";
import { InputUrlSegmented } from "@/registry/ui/input-url-segmented";
import { InputUrlGlassmorphic } from "@/registry/ui/input-url-glassmorphic";
import { InputUrlMinimalist } from "@/registry/ui/input-url-minimalist";
import { InputPercentageFloating } from "@/registry/ui/input-percentage-floating";
import { InputPercentageUnderglow } from "@/registry/ui/input-percentage-underglow";
import { InputPercentageSegmented } from "@/registry/ui/input-percentage-segmented";
import { InputPercentageGlassmorphic } from "@/registry/ui/input-percentage-glassmorphic";
import { InputPercentageMinimalist } from "@/registry/ui/input-percentage-minimalist";
import { InputPortFloating } from "@/registry/ui/input-port-floating";
import { InputPortUnderglow } from "@/registry/ui/input-port-underglow";
import { InputPortSegmented } from "@/registry/ui/input-port-segmented";
import { InputPortGlassmorphic } from "@/registry/ui/input-port-glassmorphic";
import { InputPortMinimalist } from "@/registry/ui/input-port-minimalist";
import { InputHexColorFloating } from "@/registry/ui/input-hex-color-floating";
import { InputHexColorUnderglow } from "@/registry/ui/input-hex-color-underglow";
import { InputHexColorSegmented } from "@/registry/ui/input-hex-color-segmented";
import { InputHexColorGlassmorphic } from "@/registry/ui/input-hex-color-glassmorphic";
import { InputHexColorMinimalist } from "@/registry/ui/input-hex-color-minimalist";
import { InputSubdomainFloating } from "@/registry/ui/input-subdomain-floating";
import { InputSubdomainUnderglow } from "@/registry/ui/input-subdomain-underglow";
import { InputSubdomainSegmented } from "@/registry/ui/input-subdomain-segmented";
import { InputSubdomainGlassmorphic } from "@/registry/ui/input-subdomain-glassmorphic";
import { InputSubdomainMinimalist } from "@/registry/ui/input-subdomain-minimalist";
import { InputIpAddressFloating } from "@/registry/ui/input-ip-address-floating";
import { InputIpAddressUnderglow } from "@/registry/ui/input-ip-address-underglow";
import { InputIpAddressSegmented } from "@/registry/ui/input-ip-address-segmented";
import { InputIpAddressGlassmorphic } from "@/registry/ui/input-ip-address-glassmorphic";
import { InputIpAddressMinimalist } from "@/registry/ui/input-ip-address-minimalist";
import { InputMacAddressFloating } from "@/registry/ui/input-mac-address-floating";
import { InputMacAddressUnderglow } from "@/registry/ui/input-mac-address-underglow";
import { InputMacAddressSegmented } from "@/registry/ui/input-mac-address-segmented";
import { InputMacAddressGlassmorphic } from "@/registry/ui/input-mac-address-glassmorphic";
import { InputMacAddressMinimalist } from "@/registry/ui/input-mac-address-minimalist";
import { InputGitCommitFloating } from "@/registry/ui/input-git-commit-floating";
import { InputGitCommitUnderglow } from "@/registry/ui/input-git-commit-underglow";
import { InputGitCommitSegmented } from "@/registry/ui/input-git-commit-segmented";
import { InputGitCommitGlassmorphic } from "@/registry/ui/input-git-commit-glassmorphic";
import { InputGitCommitMinimalist } from "@/registry/ui/input-git-commit-minimalist";
import { TremorMrrSpark } from "@/registry/ui/tremor-mrr-spark";
import { TremorMrrGauge } from "@/registry/ui/tremor-mrr-gauge";
import { TremorMrrBarDistribution } from "@/registry/ui/tremor-mrr-bar-distribution";
import { TremorMrrDeltaTrend } from "@/registry/ui/tremor-mrr-delta-trend";
import { TremorMrrMinimalStat } from "@/registry/ui/tremor-mrr-minimal-stat";
import { TremorActiveUsersSpark } from "@/registry/ui/tremor-active-users-spark";
import { TremorActiveUsersGauge } from "@/registry/ui/tremor-active-users-gauge";
import { TremorActiveUsersBarDistribution } from "@/registry/ui/tremor-active-users-bar-distribution";
import { TremorActiveUsersDeltaTrend } from "@/registry/ui/tremor-active-users-delta-trend";
import { TremorActiveUsersMinimalStat } from "@/registry/ui/tremor-active-users-minimal-stat";
import { TremorLatencySpark } from "@/registry/ui/tremor-latency-spark";
import { TremorLatencyGauge } from "@/registry/ui/tremor-latency-gauge";
import { TremorLatencyBarDistribution } from "@/registry/ui/tremor-latency-bar-distribution";
import { TremorLatencyDeltaTrend } from "@/registry/ui/tremor-latency-delta-trend";
import { TremorLatencyMinimalStat } from "@/registry/ui/tremor-latency-minimal-stat";
import { TremorBurnRateSpark } from "@/registry/ui/tremor-burn-rate-spark";
import { TremorBurnRateGauge } from "@/registry/ui/tremor-burn-rate-gauge";
import { TremorBurnRateBarDistribution } from "@/registry/ui/tremor-burn-rate-bar-distribution";
import { TremorBurnRateDeltaTrend } from "@/registry/ui/tremor-burn-rate-delta-trend";
import { TremorBurnRateMinimalStat } from "@/registry/ui/tremor-burn-rate-minimal-stat";
import { TremorConversionSpark } from "@/registry/ui/tremor-conversion-spark";
import { TremorConversionGauge } from "@/registry/ui/tremor-conversion-gauge";
import { TremorConversionBarDistribution } from "@/registry/ui/tremor-conversion-bar-distribution";
import { TremorConversionDeltaTrend } from "@/registry/ui/tremor-conversion-delta-trend";
import { TremorConversionMinimalStat } from "@/registry/ui/tremor-conversion-minimal-stat";
import { TremorChurnSpark } from "@/registry/ui/tremor-churn-spark";
import { TremorChurnGauge } from "@/registry/ui/tremor-churn-gauge";
import { TremorChurnBarDistribution } from "@/registry/ui/tremor-churn-bar-distribution";
import { TremorChurnDeltaTrend } from "@/registry/ui/tremor-churn-delta-trend";
import { TremorChurnMinimalStat } from "@/registry/ui/tremor-churn-minimal-stat";
import { TremorApiCallsSpark } from "@/registry/ui/tremor-api-calls-spark";
import { TremorApiCallsGauge } from "@/registry/ui/tremor-api-calls-gauge";
import { TremorApiCallsBarDistribution } from "@/registry/ui/tremor-api-calls-bar-distribution";
import { TremorApiCallsDeltaTrend } from "@/registry/ui/tremor-api-calls-delta-trend";
import { TremorApiCallsMinimalStat } from "@/registry/ui/tremor-api-calls-minimal-stat";
import { TremorUptimeSpark } from "@/registry/ui/tremor-uptime-spark";
import { TremorUptimeGauge } from "@/registry/ui/tremor-uptime-gauge";
import { TremorUptimeBarDistribution } from "@/registry/ui/tremor-uptime-bar-distribution";
import { TremorUptimeDeltaTrend } from "@/registry/ui/tremor-uptime-delta-trend";
import { TremorUptimeMinimalStat } from "@/registry/ui/tremor-uptime-minimal-stat";
import { TremorAvgSessionSpark } from "@/registry/ui/tremor-avg-session-spark";
import { TremorAvgSessionGauge } from "@/registry/ui/tremor-avg-session-gauge";
import { TremorAvgSessionBarDistribution } from "@/registry/ui/tremor-avg-session-bar-distribution";
import { TremorAvgSessionDeltaTrend } from "@/registry/ui/tremor-avg-session-delta-trend";
import { TremorAvgSessionMinimalStat } from "@/registry/ui/tremor-avg-session-minimal-stat";
import { TremorNetPromoterSpark } from "@/registry/ui/tremor-net-promoter-spark";
import { TremorNetPromoterGauge } from "@/registry/ui/tremor-net-promoter-gauge";
import { TremorNetPromoterBarDistribution } from "@/registry/ui/tremor-net-promoter-bar-distribution";
import { TremorNetPromoterDeltaTrend } from "@/registry/ui/tremor-net-promoter-delta-trend";
import { TremorNetPromoterMinimalStat } from "@/registry/ui/tremor-net-promoter-minimal-stat";
import { BadgeLivePulse } from "@/registry/ui/badge-live-pulse";
import { BadgeLivePing } from "@/registry/ui/badge-live-ping";
import { BadgeLiveGlow } from "@/registry/ui/badge-live-glow";
import { BadgeLivePillCompact } from "@/registry/ui/badge-live-pill-compact";
import { BadgeLiveTagDismiss } from "@/registry/ui/badge-live-tag-dismiss";
import { BadgeBetaPulse } from "@/registry/ui/badge-beta-pulse";
import { BadgeBetaPing } from "@/registry/ui/badge-beta-ping";
import { BadgeBetaGlow } from "@/registry/ui/badge-beta-glow";
import { BadgeBetaPillCompact } from "@/registry/ui/badge-beta-pill-compact";
import { BadgeBetaTagDismiss } from "@/registry/ui/badge-beta-tag-dismiss";
import { BadgeVerifiedPulse } from "@/registry/ui/badge-verified-pulse";
import { BadgeVerifiedPing } from "@/registry/ui/badge-verified-ping";
import { BadgeVerifiedGlow } from "@/registry/ui/badge-verified-glow";
import { BadgeVerifiedPillCompact } from "@/registry/ui/badge-verified-pill-compact";
import { BadgeVerifiedTagDismiss } from "@/registry/ui/badge-verified-tag-dismiss";
import { BadgeSponsoredPulse } from "@/registry/ui/badge-sponsored-pulse";
import { BadgeSponsoredPing } from "@/registry/ui/badge-sponsored-ping";
import { BadgeSponsoredGlow } from "@/registry/ui/badge-sponsored-glow";
import { BadgeSponsoredPillCompact } from "@/registry/ui/badge-sponsored-pill-compact";
import { BadgeSponsoredTagDismiss } from "@/registry/ui/badge-sponsored-tag-dismiss";
import { BadgeDeprecatedPulse } from "@/registry/ui/badge-deprecated-pulse";
import { BadgeDeprecatedPing } from "@/registry/ui/badge-deprecated-ping";
import { BadgeDeprecatedGlow } from "@/registry/ui/badge-deprecated-glow";
import { BadgeDeprecatedPillCompact } from "@/registry/ui/badge-deprecated-pill-compact";
import { BadgeDeprecatedTagDismiss } from "@/registry/ui/badge-deprecated-tag-dismiss";
import { BadgeEnterprisePulse } from "@/registry/ui/badge-enterprise-pulse";
import { BadgeEnterprisePing } from "@/registry/ui/badge-enterprise-ping";
import { BadgeEnterpriseGlow } from "@/registry/ui/badge-enterprise-glow";
import { BadgeEnterprisePillCompact } from "@/registry/ui/badge-enterprise-pill-compact";
import { BadgeEnterpriseTagDismiss } from "@/registry/ui/badge-enterprise-tag-dismiss";
import { BadgeExperimentalPulse } from "@/registry/ui/badge-experimental-pulse";
import { BadgeExperimentalPing } from "@/registry/ui/badge-experimental-ping";
import { BadgeExperimentalGlow } from "@/registry/ui/badge-experimental-glow";
import { BadgeExperimentalPillCompact } from "@/registry/ui/badge-experimental-pill-compact";
import { BadgeExperimentalTagDismiss } from "@/registry/ui/badge-experimental-tag-dismiss";
import { BadgeHotfixPulse } from "@/registry/ui/badge-hotfix-pulse";
import { BadgeHotfixPing } from "@/registry/ui/badge-hotfix-ping";
import { BadgeHotfixGlow } from "@/registry/ui/badge-hotfix-glow";
import { BadgeHotfixPillCompact } from "@/registry/ui/badge-hotfix-pill-compact";
import { BadgeHotfixTagDismiss } from "@/registry/ui/badge-hotfix-tag-dismiss";
import { ButtonDeployMagnetic } from "@/registry/ui/button-deploy-magnetic";
import { ButtonDeployGradientBorder } from "@/registry/ui/button-deploy-gradient-border";
import { ButtonDeployShutterSwipe } from "@/registry/ui/button-deploy-shutter-swipe";
import { ButtonDeployTactileBounce } from "@/registry/ui/button-deploy-tactile-bounce";
import { ButtonDeployCyberGlass } from "@/registry/ui/button-deploy-cyber-glass";
import { ButtonForkMagnetic } from "@/registry/ui/button-fork-magnetic";
import { ButtonForkGradientBorder } from "@/registry/ui/button-fork-gradient-border";
import { ButtonForkShutterSwipe } from "@/registry/ui/button-fork-shutter-swipe";
import { ButtonForkTactileBounce } from "@/registry/ui/button-fork-tactile-bounce";
import { ButtonForkCyberGlass } from "@/registry/ui/button-fork-cyber-glass";
import { ButtonAuditMagnetic } from "@/registry/ui/button-audit-magnetic";
import { ButtonAuditGradientBorder } from "@/registry/ui/button-audit-gradient-border";
import { ButtonAuditShutterSwipe } from "@/registry/ui/button-audit-shutter-swipe";
import { ButtonAuditTactileBounce } from "@/registry/ui/button-audit-tactile-bounce";
import { ButtonAuditCyberGlass } from "@/registry/ui/button-audit-cyber-glass";
import { ButtonDownloadMagnetic } from "@/registry/ui/button-download-magnetic";
import { ButtonDownloadGradientBorder } from "@/registry/ui/button-download-gradient-border";
import { ButtonDownloadShutterSwipe } from "@/registry/ui/button-download-shutter-swipe";
import { ButtonDownloadTactileBounce } from "@/registry/ui/button-download-tactile-bounce";
import { ButtonDownloadCyberGlass } from "@/registry/ui/button-download-cyber-glass";
import { ButtonSyncMagnetic } from "@/registry/ui/button-sync-magnetic";
import { ButtonSyncGradientBorder } from "@/registry/ui/button-sync-gradient-border";
import { ButtonSyncShutterSwipe } from "@/registry/ui/button-sync-shutter-swipe";
import { ButtonSyncTactileBounce } from "@/registry/ui/button-sync-tactile-bounce";
import { ButtonSyncCyberGlass } from "@/registry/ui/button-sync-cyber-glass";
import { ButtonBookmarkMagnetic } from "@/registry/ui/button-bookmark-magnetic";
import { ButtonBookmarkGradientBorder } from "@/registry/ui/button-bookmark-gradient-border";
import { ButtonBookmarkShutterSwipe } from "@/registry/ui/button-bookmark-shutter-swipe";
import { ButtonBookmarkTactileBounce } from "@/registry/ui/button-bookmark-tactile-bounce";
import { ButtonBookmarkCyberGlass } from "@/registry/ui/button-bookmark-cyber-glass";
import { ButtonShareMagnetic } from "@/registry/ui/button-share-magnetic";
import { ButtonShareGradientBorder } from "@/registry/ui/button-share-gradient-border";
import { ButtonShareShutterSwipe } from "@/registry/ui/button-share-shutter-swipe";
import { ButtonShareTactileBounce } from "@/registry/ui/button-share-tactile-bounce";
import { ButtonShareCyberGlass } from "@/registry/ui/button-share-cyber-glass";
import { ButtonArchiveMagnetic } from "@/registry/ui/button-archive-magnetic";
import { ButtonArchiveGradientBorder } from "@/registry/ui/button-archive-gradient-border";
import { ButtonArchiveShutterSwipe } from "@/registry/ui/button-archive-shutter-swipe";
import { ButtonArchiveTactileBounce } from "@/registry/ui/button-archive-tactile-bounce";
import { ButtonArchiveCyberGlass } from "@/registry/ui/button-archive-cyber-glass";
import { ButtonRevertMagnetic } from "@/registry/ui/button-revert-magnetic";
import { ButtonRevertGradientBorder } from "@/registry/ui/button-revert-gradient-border";
import { ButtonRevertShutterSwipe } from "@/registry/ui/button-revert-shutter-swipe";
import { ButtonRevertTactileBounce } from "@/registry/ui/button-revert-tactile-bounce";
import { ButtonRevertCyberGlass } from "@/registry/ui/button-revert-cyber-glass";
import { ButtonTerminalMagnetic } from "@/registry/ui/button-terminal-magnetic";
import { ButtonTerminalGradientBorder } from "@/registry/ui/button-terminal-gradient-border";
import { ButtonTerminalShutterSwipe } from "@/registry/ui/button-terminal-shutter-swipe";
import { ButtonTerminalTactileBounce } from "@/registry/ui/button-terminal-tactile-bounce";
import { ButtonTerminalCyberGlass } from "@/registry/ui/button-terminal-cyber-glass";
import { MotionCyberShimmer } from "@/registry/ui/motion-cyber-shimmer";
import { MotionCyberGlitch } from "@/registry/ui/motion-cyber-glitch";
import { MotionCyberScroller } from "@/registry/ui/motion-cyber-scroller";
import { MotionCyberDecrypt } from "@/registry/ui/motion-cyber-decrypt";
import { MotionCyberPulseBorder } from "@/registry/ui/motion-cyber-pulse-border";
import { MotionFluidShimmer } from "@/registry/ui/motion-fluid-shimmer";
import { MotionFluidGlitch } from "@/registry/ui/motion-fluid-glitch";
import { MotionFluidScroller } from "@/registry/ui/motion-fluid-scroller";
import { MotionFluidDecrypt } from "@/registry/ui/motion-fluid-decrypt";
import { MotionFluidPulseBorder } from "@/registry/ui/motion-fluid-pulse-border";
import { MotionQuantumShimmer } from "@/registry/ui/motion-quantum-shimmer";
import { MotionQuantumGlitch } from "@/registry/ui/motion-quantum-glitch";
import { MotionQuantumScroller } from "@/registry/ui/motion-quantum-scroller";
import { MotionQuantumDecrypt } from "@/registry/ui/motion-quantum-decrypt";
import { MotionQuantumPulseBorder } from "@/registry/ui/motion-quantum-pulse-border";
import { MotionHyperShimmer } from "@/registry/ui/motion-hyper-shimmer";
import { MotionHyperGlitch } from "@/registry/ui/motion-hyper-glitch";
import { MotionHyperScroller } from "@/registry/ui/motion-hyper-scroller";
import { MotionHyperDecrypt } from "@/registry/ui/motion-hyper-decrypt";
import { MotionHyperPulseBorder } from "@/registry/ui/motion-hyper-pulse-border";
import { MotionAmbientShimmer } from "@/registry/ui/motion-ambient-shimmer";
import { MotionAmbientGlitch } from "@/registry/ui/motion-ambient-glitch";
import { MotionAmbientScroller } from "@/registry/ui/motion-ambient-scroller";
import { MotionAmbientDecrypt } from "@/registry/ui/motion-ambient-decrypt";
import { MotionAmbientPulseBorder } from "@/registry/ui/motion-ambient-pulse-border";
import { MotionSpectralShimmer } from "@/registry/ui/motion-spectral-shimmer";
import { MotionSpectralGlitch } from "@/registry/ui/motion-spectral-glitch";
import { MotionSpectralScroller } from "@/registry/ui/motion-spectral-scroller";
import { MotionSpectralDecrypt } from "@/registry/ui/motion-spectral-decrypt";
import { MotionSpectralPulseBorder } from "@/registry/ui/motion-spectral-pulse-border";
import { MotionChronoShimmer } from "@/registry/ui/motion-chrono-shimmer";
import { MotionChronoGlitch } from "@/registry/ui/motion-chrono-glitch";
import { MotionChronoScroller } from "@/registry/ui/motion-chrono-scroller";
import { MotionChronoDecrypt } from "@/registry/ui/motion-chrono-decrypt";
import { MotionChronoPulseBorder } from "@/registry/ui/motion-chrono-pulse-border";
import { MotionMatrixShimmer } from "@/registry/ui/motion-matrix-shimmer";
import { MotionMatrixGlitch } from "@/registry/ui/motion-matrix-glitch";
import { MotionMatrixScroller } from "@/registry/ui/motion-matrix-scroller";
import { MotionMatrixDecrypt } from "@/registry/ui/motion-matrix-decrypt";
import { MotionMatrixPulseBorder } from "@/registry/ui/motion-matrix-pulse-border";
import { MotionNeonShimmer } from "@/registry/ui/motion-neon-shimmer";
import { MotionNeonGlitch } from "@/registry/ui/motion-neon-glitch";
import { MotionNeonScroller } from "@/registry/ui/motion-neon-scroller";
import { MotionNeonDecrypt } from "@/registry/ui/motion-neon-decrypt";
import { MotionNeonPulseBorder } from "@/registry/ui/motion-neon-pulse-border";
import { MotionVortexShimmer } from "@/registry/ui/motion-vortex-shimmer";
import { MotionVortexGlitch } from "@/registry/ui/motion-vortex-glitch";
import { MotionVortexScroller } from "@/registry/ui/motion-vortex-scroller";
import { MotionVortexDecrypt } from "@/registry/ui/motion-vortex-decrypt";
import { MotionVortexPulseBorder } from "@/registry/ui/motion-vortex-pulse-border";

import { CardSaasTierBento } from "@/registry/ui/card-saas-tier-bento";
import { CardSaasTierGlassmorphic } from "@/registry/ui/card-saas-tier-glassmorphic";
import { CardSaasTierGradientBorder } from "@/registry/ui/card-saas-tier-gradient-border";
import { CardSaasTierTiltInteractive } from "@/registry/ui/card-saas-tier-tilt-interactive";
import { CardSaasTierShimmerHighlight } from "@/registry/ui/card-saas-tier-shimmer-highlight";
import { CardSaasTierMinimalOutline } from "@/registry/ui/card-saas-tier-minimal-outline";
import { CardDevFeatureBento } from "@/registry/ui/card-dev-feature-bento";
import { CardDevFeatureGlassmorphic } from "@/registry/ui/card-dev-feature-glassmorphic";
import { CardDevFeatureGradientBorder } from "@/registry/ui/card-dev-feature-gradient-border";
import { CardDevFeatureTiltInteractive } from "@/registry/ui/card-dev-feature-tilt-interactive";
import { CardDevFeatureShimmerHighlight } from "@/registry/ui/card-dev-feature-shimmer-highlight";
import { CardDevFeatureMinimalOutline } from "@/registry/ui/card-dev-feature-minimal-outline";
import { CardAuditReportBento } from "@/registry/ui/card-audit-report-bento";
import { CardAuditReportGlassmorphic } from "@/registry/ui/card-audit-report-glassmorphic";
import { CardAuditReportGradientBorder } from "@/registry/ui/card-audit-report-gradient-border";
import { CardAuditReportTiltInteractive } from "@/registry/ui/card-audit-report-tilt-interactive";
import { CardAuditReportShimmerHighlight } from "@/registry/ui/card-audit-report-shimmer-highlight";
import { CardAuditReportMinimalOutline } from "@/registry/ui/card-audit-report-minimal-outline";
import { CardApiGatewayBento } from "@/registry/ui/card-api-gateway-bento";
import { CardApiGatewayGlassmorphic } from "@/registry/ui/card-api-gateway-glassmorphic";
import { CardApiGatewayGradientBorder } from "@/registry/ui/card-api-gateway-gradient-border";
import { CardApiGatewayTiltInteractive } from "@/registry/ui/card-api-gateway-tilt-interactive";
import { CardApiGatewayShimmerHighlight } from "@/registry/ui/card-api-gateway-shimmer-highlight";
import { CardApiGatewayMinimalOutline } from "@/registry/ui/card-api-gateway-minimal-outline";
import { CardUserProfileBento } from "@/registry/ui/card-user-profile-bento";
import { CardUserProfileGlassmorphic } from "@/registry/ui/card-user-profile-glassmorphic";
import { CardUserProfileGradientBorder } from "@/registry/ui/card-user-profile-gradient-border";
import { CardUserProfileTiltInteractive } from "@/registry/ui/card-user-profile-tilt-interactive";
import { CardUserProfileShimmerHighlight } from "@/registry/ui/card-user-profile-shimmer-highlight";
import { CardUserProfileMinimalOutline } from "@/registry/ui/card-user-profile-minimal-outline";
import { CardStatSummaryBento } from "@/registry/ui/card-stat-summary-bento";
import { CardStatSummaryGlassmorphic } from "@/registry/ui/card-stat-summary-glassmorphic";
import { CardStatSummaryGradientBorder } from "@/registry/ui/card-stat-summary-gradient-border";
import { CardStatSummaryTiltInteractive } from "@/registry/ui/card-stat-summary-tilt-interactive";
import { CardStatSummaryShimmerHighlight } from "@/registry/ui/card-stat-summary-shimmer-highlight";
import { CardStatSummaryMinimalOutline } from "@/registry/ui/card-stat-summary-minimal-outline";
import { CardMediaStreamBento } from "@/registry/ui/card-media-stream-bento";
import { CardMediaStreamGlassmorphic } from "@/registry/ui/card-media-stream-glassmorphic";
import { CardMediaStreamGradientBorder } from "@/registry/ui/card-media-stream-gradient-border";
import { CardMediaStreamTiltInteractive } from "@/registry/ui/card-media-stream-tilt-interactive";
import { CardMediaStreamShimmerHighlight } from "@/registry/ui/card-media-stream-shimmer-highlight";
import { CardMediaStreamMinimalOutline } from "@/registry/ui/card-media-stream-minimal-outline";
import { CardSecurityKeyBento } from "@/registry/ui/card-security-key-bento";
import { CardSecurityKeyGlassmorphic } from "@/registry/ui/card-security-key-glassmorphic";
import { CardSecurityKeyGradientBorder } from "@/registry/ui/card-security-key-gradient-border";
import { CardSecurityKeyTiltInteractive } from "@/registry/ui/card-security-key-tilt-interactive";
import { CardSecurityKeyShimmerHighlight } from "@/registry/ui/card-security-key-shimmer-highlight";
import { CardSecurityKeyMinimalOutline } from "@/registry/ui/card-security-key-minimal-outline";
import { CardWorkflowStepBento } from "@/registry/ui/card-workflow-step-bento";
import { CardWorkflowStepGlassmorphic } from "@/registry/ui/card-workflow-step-glassmorphic";
import { CardWorkflowStepGradientBorder } from "@/registry/ui/card-workflow-step-gradient-border";
import { CardWorkflowStepTiltInteractive } from "@/registry/ui/card-workflow-step-tilt-interactive";
import { CardWorkflowStepShimmerHighlight } from "@/registry/ui/card-workflow-step-shimmer-highlight";
import { CardWorkflowStepMinimalOutline } from "@/registry/ui/card-workflow-step-minimal-outline";
import { CardClusterNodeBento } from "@/registry/ui/card-cluster-node-bento";
import { CardClusterNodeGlassmorphic } from "@/registry/ui/card-cluster-node-glassmorphic";
import { CardClusterNodeGradientBorder } from "@/registry/ui/card-cluster-node-gradient-border";
import { CardClusterNodeTiltInteractive } from "@/registry/ui/card-cluster-node-tilt-interactive";
import { CardClusterNodeShimmerHighlight } from "@/registry/ui/card-cluster-node-shimmer-highlight";
import { CardClusterNodeMinimalOutline } from "@/registry/ui/card-cluster-node-minimal-outline";
import { NavWorkspacePillSlider } from "@/registry/ui/nav-workspace-pill-slider";
import { NavWorkspaceUnderlineFluid } from "@/registry/ui/nav-workspace-underline-fluid";
import { NavWorkspaceFloatingDock } from "@/registry/ui/nav-workspace-floating-dock";
import { NavWorkspaceSegmentedSwitch } from "@/registry/ui/nav-workspace-segmented-switch";
import { NavWorkspaceStepperChain } from "@/registry/ui/nav-workspace-stepper-chain";
import { NavWorkspaceCompactBadge } from "@/registry/ui/nav-workspace-compact-badge";
import { NavAnalyticsPillSlider } from "@/registry/ui/nav-analytics-pill-slider";
import { NavAnalyticsUnderlineFluid } from "@/registry/ui/nav-analytics-underline-fluid";
import { NavAnalyticsFloatingDock } from "@/registry/ui/nav-analytics-floating-dock";
import { NavAnalyticsSegmentedSwitch } from "@/registry/ui/nav-analytics-segmented-switch";
import { NavAnalyticsStepperChain } from "@/registry/ui/nav-analytics-stepper-chain";
import { NavAnalyticsCompactBadge } from "@/registry/ui/nav-analytics-compact-badge";
import { NavEditorPillSlider } from "@/registry/ui/nav-editor-pill-slider";
import { NavEditorUnderlineFluid } from "@/registry/ui/nav-editor-underline-fluid";
import { NavEditorFloatingDock } from "@/registry/ui/nav-editor-floating-dock";
import { NavEditorSegmentedSwitch } from "@/registry/ui/nav-editor-segmented-switch";
import { NavEditorStepperChain } from "@/registry/ui/nav-editor-stepper-chain";
import { NavEditorCompactBadge } from "@/registry/ui/nav-editor-compact-badge";
import { NavDeploymentsPillSlider } from "@/registry/ui/nav-deployments-pill-slider";
import { NavDeploymentsUnderlineFluid } from "@/registry/ui/nav-deployments-underline-fluid";
import { NavDeploymentsFloatingDock } from "@/registry/ui/nav-deployments-floating-dock";
import { NavDeploymentsSegmentedSwitch } from "@/registry/ui/nav-deployments-segmented-switch";
import { NavDeploymentsStepperChain } from "@/registry/ui/nav-deployments-stepper-chain";
import { NavDeploymentsCompactBadge } from "@/registry/ui/nav-deployments-compact-badge";
import { NavSecurityPillSlider } from "@/registry/ui/nav-security-pill-slider";
import { NavSecurityUnderlineFluid } from "@/registry/ui/nav-security-underline-fluid";
import { NavSecurityFloatingDock } from "@/registry/ui/nav-security-floating-dock";
import { NavSecuritySegmentedSwitch } from "@/registry/ui/nav-security-segmented-switch";
import { NavSecurityStepperChain } from "@/registry/ui/nav-security-stepper-chain";
import { NavSecurityCompactBadge } from "@/registry/ui/nav-security-compact-badge";
import { NavBillingPillSlider } from "@/registry/ui/nav-billing-pill-slider";
import { NavBillingUnderlineFluid } from "@/registry/ui/nav-billing-underline-fluid";
import { NavBillingFloatingDock } from "@/registry/ui/nav-billing-floating-dock";
import { NavBillingSegmentedSwitch } from "@/registry/ui/nav-billing-segmented-switch";
import { NavBillingStepperChain } from "@/registry/ui/nav-billing-stepper-chain";
import { NavBillingCompactBadge } from "@/registry/ui/nav-billing-compact-badge";
import { NavLogsPillSlider } from "@/registry/ui/nav-logs-pill-slider";
import { NavLogsUnderlineFluid } from "@/registry/ui/nav-logs-underline-fluid";
import { NavLogsFloatingDock } from "@/registry/ui/nav-logs-floating-dock";
import { NavLogsSegmentedSwitch } from "@/registry/ui/nav-logs-segmented-switch";
import { NavLogsStepperChain } from "@/registry/ui/nav-logs-stepper-chain";
import { NavLogsCompactBadge } from "@/registry/ui/nav-logs-compact-badge";
import { NavDevicesPillSlider } from "@/registry/ui/nav-devices-pill-slider";
import { NavDevicesUnderlineFluid } from "@/registry/ui/nav-devices-underline-fluid";
import { NavDevicesFloatingDock } from "@/registry/ui/nav-devices-floating-dock";
import { NavDevicesSegmentedSwitch } from "@/registry/ui/nav-devices-segmented-switch";
import { NavDevicesStepperChain } from "@/registry/ui/nav-devices-stepper-chain";
import { NavDevicesCompactBadge } from "@/registry/ui/nav-devices-compact-badge";
import { NavStoragePillSlider } from "@/registry/ui/nav-storage-pill-slider";
import { NavStorageUnderlineFluid } from "@/registry/ui/nav-storage-underline-fluid";
import { NavStorageFloatingDock } from "@/registry/ui/nav-storage-floating-dock";
import { NavStorageSegmentedSwitch } from "@/registry/ui/nav-storage-segmented-switch";
import { NavStorageStepperChain } from "@/registry/ui/nav-storage-stepper-chain";
import { NavStorageCompactBadge } from "@/registry/ui/nav-storage-compact-badge";
import { NavModelsPillSlider } from "@/registry/ui/nav-models-pill-slider";
import { NavModelsUnderlineFluid } from "@/registry/ui/nav-models-underline-fluid";
import { NavModelsFloatingDock } from "@/registry/ui/nav-models-floating-dock";
import { NavModelsSegmentedSwitch } from "@/registry/ui/nav-models-segmented-switch";
import { NavModelsStepperChain } from "@/registry/ui/nav-models-stepper-chain";
import { NavModelsCompactBadge } from "@/registry/ui/nav-models-compact-badge";
import { ListTimelineTimelineNode } from "@/registry/ui/list-timeline-timeline-node";
import { ListTimelineCompactRow } from "@/registry/ui/list-timeline-compact-row";
import { ListTimelineBadgeCallout } from "@/registry/ui/list-timeline-badge-callout";
import { ListTimelineInteractiveCard } from "@/registry/ui/list-timeline-interactive-card";
import { ListTimelinePillSummary } from "@/registry/ui/list-timeline-pill-summary";
import { ListTimelineStatusIndicator } from "@/registry/ui/list-timeline-status-indicator";
import { ListSecurityAlertTimelineNode } from "@/registry/ui/list-security-alert-timeline-node";
import { ListSecurityAlertCompactRow } from "@/registry/ui/list-security-alert-compact-row";
import { ListSecurityAlertBadgeCallout } from "@/registry/ui/list-security-alert-badge-callout";
import { ListSecurityAlertInteractiveCard } from "@/registry/ui/list-security-alert-interactive-card";
import { ListSecurityAlertPillSummary } from "@/registry/ui/list-security-alert-pill-summary";
import { ListSecurityAlertStatusIndicator } from "@/registry/ui/list-security-alert-status-indicator";
import { ListGitMergeTimelineNode } from "@/registry/ui/list-git-merge-timeline-node";
import { ListGitMergeCompactRow } from "@/registry/ui/list-git-merge-compact-row";
import { ListGitMergeBadgeCallout } from "@/registry/ui/list-git-merge-badge-callout";
import { ListGitMergeInteractiveCard } from "@/registry/ui/list-git-merge-interactive-card";
import { ListGitMergePillSummary } from "@/registry/ui/list-git-merge-pill-summary";
import { ListGitMergeStatusIndicator } from "@/registry/ui/list-git-merge-status-indicator";
import { ListTokenRotationTimelineNode } from "@/registry/ui/list-token-rotation-timeline-node";
import { ListTokenRotationCompactRow } from "@/registry/ui/list-token-rotation-compact-row";
import { ListTokenRotationBadgeCallout } from "@/registry/ui/list-token-rotation-badge-callout";
import { ListTokenRotationInteractiveCard } from "@/registry/ui/list-token-rotation-interactive-card";
import { ListTokenRotationPillSummary } from "@/registry/ui/list-token-rotation-pill-summary";
import { ListTokenRotationStatusIndicator } from "@/registry/ui/list-token-rotation-status-indicator";
import { ListDbBackupTimelineNode } from "@/registry/ui/list-db-backup-timeline-node";
import { ListDbBackupCompactRow } from "@/registry/ui/list-db-backup-compact-row";
import { ListDbBackupBadgeCallout } from "@/registry/ui/list-db-backup-badge-callout";
import { ListDbBackupInteractiveCard } from "@/registry/ui/list-db-backup-interactive-card";
import { ListDbBackupPillSummary } from "@/registry/ui/list-db-backup-pill-summary";
import { ListDbBackupStatusIndicator } from "@/registry/ui/list-db-backup-status-indicator";
import { ListDnsSyncTimelineNode } from "@/registry/ui/list-dns-sync-timeline-node";
import { ListDnsSyncCompactRow } from "@/registry/ui/list-dns-sync-compact-row";
import { ListDnsSyncBadgeCallout } from "@/registry/ui/list-dns-sync-badge-callout";
import { ListDnsSyncInteractiveCard } from "@/registry/ui/list-dns-sync-interactive-card";
import { ListDnsSyncPillSummary } from "@/registry/ui/list-dns-sync-pill-summary";
import { ListDnsSyncStatusIndicator } from "@/registry/ui/list-dns-sync-status-indicator";
import { ListTestPassedTimelineNode } from "@/registry/ui/list-test-passed-timeline-node";
import { ListTestPassedCompactRow } from "@/registry/ui/list-test-passed-compact-row";
import { ListTestPassedBadgeCallout } from "@/registry/ui/list-test-passed-badge-callout";
import { ListTestPassedInteractiveCard } from "@/registry/ui/list-test-passed-interactive-card";
import { ListTestPassedPillSummary } from "@/registry/ui/list-test-passed-pill-summary";
import { ListTestPassedStatusIndicator } from "@/registry/ui/list-test-passed-status-indicator";
import { ListPackageUpdateTimelineNode } from "@/registry/ui/list-package-update-timeline-node";
import { ListPackageUpdateCompactRow } from "@/registry/ui/list-package-update-compact-row";
import { ListPackageUpdateBadgeCallout } from "@/registry/ui/list-package-update-badge-callout";
import { ListPackageUpdateInteractiveCard } from "@/registry/ui/list-package-update-interactive-card";
import { ListPackageUpdatePillSummary } from "@/registry/ui/list-package-update-pill-summary";
import { ListPackageUpdateStatusIndicator } from "@/registry/ui/list-package-update-status-indicator";
import { ListCachePurgeTimelineNode } from "@/registry/ui/list-cache-purge-timeline-node";
import { ListCachePurgeCompactRow } from "@/registry/ui/list-cache-purge-compact-row";
import { ListCachePurgeBadgeCallout } from "@/registry/ui/list-cache-purge-badge-callout";
import { ListCachePurgeInteractiveCard } from "@/registry/ui/list-cache-purge-interactive-card";
import { ListCachePurgePillSummary } from "@/registry/ui/list-cache-purge-pill-summary";
import { ListCachePurgeStatusIndicator } from "@/registry/ui/list-cache-purge-status-indicator";
import { ListMetricThresholdTimelineNode } from "@/registry/ui/list-metric-threshold-timeline-node";
import { ListMetricThresholdCompactRow } from "@/registry/ui/list-metric-threshold-compact-row";
import { ListMetricThresholdBadgeCallout } from "@/registry/ui/list-metric-threshold-badge-callout";
import { ListMetricThresholdInteractiveCard } from "@/registry/ui/list-metric-threshold-interactive-card";
import { ListMetricThresholdPillSummary } from "@/registry/ui/list-metric-threshold-pill-summary";
import { ListMetricThresholdStatusIndicator } from "@/registry/ui/list-metric-threshold-status-indicator";
import { PickerOpacityTooltipSlider } from "@/registry/ui/picker-opacity-tooltip-slider";
import { PickerOpacityStepperButtons } from "@/registry/ui/picker-opacity-stepper-buttons";
import { PickerOpacitySegmentedMarks } from "@/registry/ui/picker-opacity-segmented-marks";
import { PickerOpacityCircularGauge } from "@/registry/ui/picker-opacity-circular-gauge";
import { PickerOpacityMinimalTrack } from "@/registry/ui/picker-opacity-minimal-track";
import { PickerOpacityNumericInputSync } from "@/registry/ui/picker-opacity-numeric-input-sync";
import { PickerBlurTooltipSlider } from "@/registry/ui/picker-blur-tooltip-slider";
import { PickerBlurStepperButtons } from "@/registry/ui/picker-blur-stepper-buttons";
import { PickerBlurSegmentedMarks } from "@/registry/ui/picker-blur-segmented-marks";
import { PickerBlurCircularGauge } from "@/registry/ui/picker-blur-circular-gauge";
import { PickerBlurMinimalTrack } from "@/registry/ui/picker-blur-minimal-track";
import { PickerBlurNumericInputSync } from "@/registry/ui/picker-blur-numeric-input-sync";
import { PickerScaleTooltipSlider } from "@/registry/ui/picker-scale-tooltip-slider";
import { PickerScaleStepperButtons } from "@/registry/ui/picker-scale-stepper-buttons";
import { PickerScaleSegmentedMarks } from "@/registry/ui/picker-scale-segmented-marks";
import { PickerScaleCircularGauge } from "@/registry/ui/picker-scale-circular-gauge";
import { PickerScaleMinimalTrack } from "@/registry/ui/picker-scale-minimal-track";
import { PickerScaleNumericInputSync } from "@/registry/ui/picker-scale-numeric-input-sync";
import { PickerBorderRadiusTooltipSlider } from "@/registry/ui/picker-border-radius-tooltip-slider";
import { PickerBorderRadiusStepperButtons } from "@/registry/ui/picker-border-radius-stepper-buttons";
import { PickerBorderRadiusSegmentedMarks } from "@/registry/ui/picker-border-radius-segmented-marks";
import { PickerBorderRadiusCircularGauge } from "@/registry/ui/picker-border-radius-circular-gauge";
import { PickerBorderRadiusMinimalTrack } from "@/registry/ui/picker-border-radius-minimal-track";
import { PickerBorderRadiusNumericInputSync } from "@/registry/ui/picker-border-radius-numeric-input-sync";
import { PickerSpeedTooltipSlider } from "@/registry/ui/picker-speed-tooltip-slider";
import { PickerSpeedStepperButtons } from "@/registry/ui/picker-speed-stepper-buttons";
import { PickerSpeedSegmentedMarks } from "@/registry/ui/picker-speed-segmented-marks";
import { PickerSpeedCircularGauge } from "@/registry/ui/picker-speed-circular-gauge";
import { PickerSpeedMinimalTrack } from "@/registry/ui/picker-speed-minimal-track";
import { PickerSpeedNumericInputSync } from "@/registry/ui/picker-speed-numeric-input-sync";
import { PickerSpringStiffnessTooltipSlider } from "@/registry/ui/picker-spring-stiffness-tooltip-slider";
import { PickerSpringStiffnessStepperButtons } from "@/registry/ui/picker-spring-stiffness-stepper-buttons";
import { PickerSpringStiffnessSegmentedMarks } from "@/registry/ui/picker-spring-stiffness-segmented-marks";
import { PickerSpringStiffnessCircularGauge } from "@/registry/ui/picker-spring-stiffness-circular-gauge";
import { PickerSpringStiffnessMinimalTrack } from "@/registry/ui/picker-spring-stiffness-minimal-track";
import { PickerSpringStiffnessNumericInputSync } from "@/registry/ui/picker-spring-stiffness-numeric-input-sync";
import { PickerSpringDampingTooltipSlider } from "@/registry/ui/picker-spring-damping-tooltip-slider";
import { PickerSpringDampingStepperButtons } from "@/registry/ui/picker-spring-damping-stepper-buttons";
import { PickerSpringDampingSegmentedMarks } from "@/registry/ui/picker-spring-damping-segmented-marks";
import { PickerSpringDampingCircularGauge } from "@/registry/ui/picker-spring-damping-circular-gauge";
import { PickerSpringDampingMinimalTrack } from "@/registry/ui/picker-spring-damping-minimal-track";
import { PickerSpringDampingNumericInputSync } from "@/registry/ui/picker-spring-damping-numeric-input-sync";
import { PickerFontWeightTooltipSlider } from "@/registry/ui/picker-font-weight-tooltip-slider";
import { PickerFontWeightStepperButtons } from "@/registry/ui/picker-font-weight-stepper-buttons";
import { PickerFontWeightSegmentedMarks } from "@/registry/ui/picker-font-weight-segmented-marks";
import { PickerFontWeightCircularGauge } from "@/registry/ui/picker-font-weight-circular-gauge";
import { PickerFontWeightMinimalTrack } from "@/registry/ui/picker-font-weight-minimal-track";
import { PickerFontWeightNumericInputSync } from "@/registry/ui/picker-font-weight-numeric-input-sync";
import { PickerVolumeLevelTooltipSlider } from "@/registry/ui/picker-volume-level-tooltip-slider";
import { PickerVolumeLevelStepperButtons } from "@/registry/ui/picker-volume-level-stepper-buttons";
import { PickerVolumeLevelSegmentedMarks } from "@/registry/ui/picker-volume-level-segmented-marks";
import { PickerVolumeLevelCircularGauge } from "@/registry/ui/picker-volume-level-circular-gauge";
import { PickerVolumeLevelMinimalTrack } from "@/registry/ui/picker-volume-level-minimal-track";
import { PickerVolumeLevelNumericInputSync } from "@/registry/ui/picker-volume-level-numeric-input-sync";
import { PickerContrastRatioTooltipSlider } from "@/registry/ui/picker-contrast-ratio-tooltip-slider";
import { PickerContrastRatioStepperButtons } from "@/registry/ui/picker-contrast-ratio-stepper-buttons";
import { PickerContrastRatioSegmentedMarks } from "@/registry/ui/picker-contrast-ratio-segmented-marks";
import { PickerContrastRatioCircularGauge } from "@/registry/ui/picker-contrast-ratio-circular-gauge";
import { PickerContrastRatioMinimalTrack } from "@/registry/ui/picker-contrast-ratio-minimal-track";
import { PickerContrastRatioNumericInputSync } from "@/registry/ui/picker-contrast-ratio-numeric-input-sync";
import { TriggerCopyTokenMorphState } from "@/registry/ui/trigger-copy-token-morph-state";
import { TriggerCopyTokenShimmerRing } from "@/registry/ui/trigger-copy-token-shimmer-ring";
import { TriggerCopyTokenHoldConfirm } from "@/registry/ui/trigger-copy-token-hold-confirm";
import { TriggerCopyTokenSplitChevron } from "@/registry/ui/trigger-copy-token-split-chevron";
import { TriggerCopyTokenTactilePill } from "@/registry/ui/trigger-copy-token-tactile-pill";
import { TriggerCopyTokenGhostGlow } from "@/registry/ui/trigger-copy-token-ghost-glow";
import { TriggerExportZipMorphState } from "@/registry/ui/trigger-export-zip-morph-state";
import { TriggerExportZipShimmerRing } from "@/registry/ui/trigger-export-zip-shimmer-ring";
import { TriggerExportZipHoldConfirm } from "@/registry/ui/trigger-export-zip-hold-confirm";
import { TriggerExportZipSplitChevron } from "@/registry/ui/trigger-export-zip-split-chevron";
import { TriggerExportZipTactilePill } from "@/registry/ui/trigger-export-zip-tactile-pill";
import { TriggerExportZipGhostGlow } from "@/registry/ui/trigger-export-zip-ghost-glow";
import { TriggerGenerateKeyMorphState } from "@/registry/ui/trigger-generate-key-morph-state";
import { TriggerGenerateKeyShimmerRing } from "@/registry/ui/trigger-generate-key-shimmer-ring";
import { TriggerGenerateKeyHoldConfirm } from "@/registry/ui/trigger-generate-key-hold-confirm";
import { TriggerGenerateKeySplitChevron } from "@/registry/ui/trigger-generate-key-split-chevron";
import { TriggerGenerateKeyTactilePill } from "@/registry/ui/trigger-generate-key-tactile-pill";
import { TriggerGenerateKeyGhostGlow } from "@/registry/ui/trigger-generate-key-ghost-glow";
import { TriggerPublishNpmMorphState } from "@/registry/ui/trigger-publish-npm-morph-state";
import { TriggerPublishNpmShimmerRing } from "@/registry/ui/trigger-publish-npm-shimmer-ring";
import { TriggerPublishNpmHoldConfirm } from "@/registry/ui/trigger-publish-npm-hold-confirm";
import { TriggerPublishNpmSplitChevron } from "@/registry/ui/trigger-publish-npm-split-chevron";
import { TriggerPublishNpmTactilePill } from "@/registry/ui/trigger-publish-npm-tactile-pill";
import { TriggerPublishNpmGhostGlow } from "@/registry/ui/trigger-publish-npm-ghost-glow";
import { TriggerPurgeCdnMorphState } from "@/registry/ui/trigger-purge-cdn-morph-state";
import { TriggerPurgeCdnShimmerRing } from "@/registry/ui/trigger-purge-cdn-shimmer-ring";
import { TriggerPurgeCdnHoldConfirm } from "@/registry/ui/trigger-purge-cdn-hold-confirm";
import { TriggerPurgeCdnSplitChevron } from "@/registry/ui/trigger-purge-cdn-split-chevron";
import { TriggerPurgeCdnTactilePill } from "@/registry/ui/trigger-purge-cdn-tactile-pill";
import { TriggerPurgeCdnGhostGlow } from "@/registry/ui/trigger-purge-cdn-ghost-glow";
import { TriggerRunLinterMorphState } from "@/registry/ui/trigger-run-linter-morph-state";
import { TriggerRunLinterShimmerRing } from "@/registry/ui/trigger-run-linter-shimmer-ring";
import { TriggerRunLinterHoldConfirm } from "@/registry/ui/trigger-run-linter-hold-confirm";
import { TriggerRunLinterSplitChevron } from "@/registry/ui/trigger-run-linter-split-chevron";
import { TriggerRunLinterTactilePill } from "@/registry/ui/trigger-run-linter-tactile-pill";
import { TriggerRunLinterGhostGlow } from "@/registry/ui/trigger-run-linter-ghost-glow";
import { TriggerSyncFigmaMorphState } from "@/registry/ui/trigger-sync-figma-morph-state";
import { TriggerSyncFigmaShimmerRing } from "@/registry/ui/trigger-sync-figma-shimmer-ring";
import { TriggerSyncFigmaHoldConfirm } from "@/registry/ui/trigger-sync-figma-hold-confirm";
import { TriggerSyncFigmaSplitChevron } from "@/registry/ui/trigger-sync-figma-split-chevron";
import { TriggerSyncFigmaTactilePill } from "@/registry/ui/trigger-sync-figma-tactile-pill";
import { TriggerSyncFigmaGhostGlow } from "@/registry/ui/trigger-sync-figma-ghost-glow";
import { TriggerScanDepsMorphState } from "@/registry/ui/trigger-scan-deps-morph-state";
import { TriggerScanDepsShimmerRing } from "@/registry/ui/trigger-scan-deps-shimmer-ring";
import { TriggerScanDepsHoldConfirm } from "@/registry/ui/trigger-scan-deps-hold-confirm";
import { TriggerScanDepsSplitChevron } from "@/registry/ui/trigger-scan-deps-split-chevron";
import { TriggerScanDepsTactilePill } from "@/registry/ui/trigger-scan-deps-tactile-pill";
import { TriggerScanDepsGhostGlow } from "@/registry/ui/trigger-scan-deps-ghost-glow";
import { TriggerBenchmarkMorphState } from "@/registry/ui/trigger-benchmark-morph-state";
import { TriggerBenchmarkShimmerRing } from "@/registry/ui/trigger-benchmark-shimmer-ring";
import { TriggerBenchmarkHoldConfirm } from "@/registry/ui/trigger-benchmark-hold-confirm";
import { TriggerBenchmarkSplitChevron } from "@/registry/ui/trigger-benchmark-split-chevron";
import { TriggerBenchmarkTactilePill } from "@/registry/ui/trigger-benchmark-tactile-pill";
import { TriggerBenchmarkGhostGlow } from "@/registry/ui/trigger-benchmark-ghost-glow";
import { TriggerInviteMemberMorphState } from "@/registry/ui/trigger-invite-member-morph-state";
import { TriggerInviteMemberShimmerRing } from "@/registry/ui/trigger-invite-member-shimmer-ring";
import { TriggerInviteMemberHoldConfirm } from "@/registry/ui/trigger-invite-member-hold-confirm";
import { TriggerInviteMemberSplitChevron } from "@/registry/ui/trigger-invite-member-split-chevron";
import { TriggerInviteMemberTactilePill } from "@/registry/ui/trigger-invite-member-tactile-pill";
import { TriggerInviteMemberGhostGlow } from "@/registry/ui/trigger-invite-member-ghost-glow";

import { TremorMrrFlowSparkline } from "@/registry/ui/tremor-mrr-flow-sparkline";
import { TremorMrrFlowRadialGauge } from "@/registry/ui/tremor-mrr-flow-radial-gauge";
import { TremorMrrFlowDeltaBadge } from "@/registry/ui/tremor-mrr-flow-delta-badge";
import { TremorMrrFlowSteppedBar } from "@/registry/ui/tremor-mrr-flow-stepped-bar";
import { TremorMrrFlowSegmentedPill } from "@/registry/ui/tremor-mrr-flow-segmented-pill";
import { TremorMrrFlowCalloutCard } from "@/registry/ui/tremor-mrr-flow-callout-card";
import { TremorMrrFlowTargetTracker } from "@/registry/ui/tremor-mrr-flow-target-tracker";
import { TremorMrrFlowMiniHistogram } from "@/registry/ui/tremor-mrr-flow-mini-histogram";
import { TremorMrrFlowTrendIndicator } from "@/registry/ui/tremor-mrr-flow-trend-indicator";
import { TremorMrrFlowSummaryStat } from "@/registry/ui/tremor-mrr-flow-summary-stat";
import { TremorCacVelocitySparkline } from "@/registry/ui/tremor-cac-velocity-sparkline";
import { TremorCacVelocityRadialGauge } from "@/registry/ui/tremor-cac-velocity-radial-gauge";
import { TremorCacVelocityDeltaBadge } from "@/registry/ui/tremor-cac-velocity-delta-badge";
import { TremorCacVelocitySteppedBar } from "@/registry/ui/tremor-cac-velocity-stepped-bar";
import { TremorCacVelocitySegmentedPill } from "@/registry/ui/tremor-cac-velocity-segmented-pill";
import { TremorCacVelocityCalloutCard } from "@/registry/ui/tremor-cac-velocity-callout-card";
import { TremorCacVelocityTargetTracker } from "@/registry/ui/tremor-cac-velocity-target-tracker";
import { TremorCacVelocityMiniHistogram } from "@/registry/ui/tremor-cac-velocity-mini-histogram";
import { TremorCacVelocityTrendIndicator } from "@/registry/ui/tremor-cac-velocity-trend-indicator";
import { TremorCacVelocitySummaryStat } from "@/registry/ui/tremor-cac-velocity-summary-stat";
import { TremorArpuGrowthSparkline } from "@/registry/ui/tremor-arpu-growth-sparkline";
import { TremorArpuGrowthRadialGauge } from "@/registry/ui/tremor-arpu-growth-radial-gauge";
import { TremorArpuGrowthDeltaBadge } from "@/registry/ui/tremor-arpu-growth-delta-badge";
import { TremorArpuGrowthSteppedBar } from "@/registry/ui/tremor-arpu-growth-stepped-bar";
import { TremorArpuGrowthSegmentedPill } from "@/registry/ui/tremor-arpu-growth-segmented-pill";
import { TremorArpuGrowthCalloutCard } from "@/registry/ui/tremor-arpu-growth-callout-card";
import { TremorArpuGrowthTargetTracker } from "@/registry/ui/tremor-arpu-growth-target-tracker";
import { TremorArpuGrowthMiniHistogram } from "@/registry/ui/tremor-arpu-growth-mini-histogram";
import { TremorArpuGrowthTrendIndicator } from "@/registry/ui/tremor-arpu-growth-trend-indicator";
import { TremorArpuGrowthSummaryStat } from "@/registry/ui/tremor-arpu-growth-summary-stat";
import { TremorLtvExpansionSparkline } from "@/registry/ui/tremor-ltv-expansion-sparkline";
import { TremorLtvExpansionRadialGauge } from "@/registry/ui/tremor-ltv-expansion-radial-gauge";
import { TremorLtvExpansionDeltaBadge } from "@/registry/ui/tremor-ltv-expansion-delta-badge";
import { TremorLtvExpansionSteppedBar } from "@/registry/ui/tremor-ltv-expansion-stepped-bar";
import { TremorLtvExpansionSegmentedPill } from "@/registry/ui/tremor-ltv-expansion-segmented-pill";
import { TremorLtvExpansionCalloutCard } from "@/registry/ui/tremor-ltv-expansion-callout-card";
import { TremorLtvExpansionTargetTracker } from "@/registry/ui/tremor-ltv-expansion-target-tracker";
import { TremorLtvExpansionMiniHistogram } from "@/registry/ui/tremor-ltv-expansion-mini-histogram";
import { TremorLtvExpansionTrendIndicator } from "@/registry/ui/tremor-ltv-expansion-trend-indicator";
import { TremorLtvExpansionSummaryStat } from "@/registry/ui/tremor-ltv-expansion-summary-stat";
import { TremorCohortRetentionSparkline } from "@/registry/ui/tremor-cohort-retention-sparkline";
import { TremorCohortRetentionRadialGauge } from "@/registry/ui/tremor-cohort-retention-radial-gauge";
import { TremorCohortRetentionDeltaBadge } from "@/registry/ui/tremor-cohort-retention-delta-badge";
import { TremorCohortRetentionSteppedBar } from "@/registry/ui/tremor-cohort-retention-stepped-bar";
import { TremorCohortRetentionSegmentedPill } from "@/registry/ui/tremor-cohort-retention-segmented-pill";
import { TremorCohortRetentionCalloutCard } from "@/registry/ui/tremor-cohort-retention-callout-card";
import { TremorCohortRetentionTargetTracker } from "@/registry/ui/tremor-cohort-retention-target-tracker";
import { TremorCohortRetentionMiniHistogram } from "@/registry/ui/tremor-cohort-retention-mini-histogram";
import { TremorCohortRetentionTrendIndicator } from "@/registry/ui/tremor-cohort-retention-trend-indicator";
import { TremorCohortRetentionSummaryStat } from "@/registry/ui/tremor-cohort-retention-summary-stat";
import { TremorBandwidthLoadSparkline } from "@/registry/ui/tremor-bandwidth-load-sparkline";
import { TremorBandwidthLoadRadialGauge } from "@/registry/ui/tremor-bandwidth-load-radial-gauge";
import { TremorBandwidthLoadDeltaBadge } from "@/registry/ui/tremor-bandwidth-load-delta-badge";
import { TremorBandwidthLoadSteppedBar } from "@/registry/ui/tremor-bandwidth-load-stepped-bar";
import { TremorBandwidthLoadSegmentedPill } from "@/registry/ui/tremor-bandwidth-load-segmented-pill";
import { TremorBandwidthLoadCalloutCard } from "@/registry/ui/tremor-bandwidth-load-callout-card";
import { TremorBandwidthLoadTargetTracker } from "@/registry/ui/tremor-bandwidth-load-target-tracker";
import { TremorBandwidthLoadMiniHistogram } from "@/registry/ui/tremor-bandwidth-load-mini-histogram";
import { TremorBandwidthLoadTrendIndicator } from "@/registry/ui/tremor-bandwidth-load-trend-indicator";
import { TremorBandwidthLoadSummaryStat } from "@/registry/ui/tremor-bandwidth-load-summary-stat";
import { TremorErrorRateSparkline } from "@/registry/ui/tremor-error-rate-sparkline";
import { TremorErrorRateRadialGauge } from "@/registry/ui/tremor-error-rate-radial-gauge";
import { TremorErrorRateDeltaBadge } from "@/registry/ui/tremor-error-rate-delta-badge";
import { TremorErrorRateSteppedBar } from "@/registry/ui/tremor-error-rate-stepped-bar";
import { TremorErrorRateSegmentedPill } from "@/registry/ui/tremor-error-rate-segmented-pill";
import { TremorErrorRateCalloutCard } from "@/registry/ui/tremor-error-rate-callout-card";
import { TremorErrorRateTargetTracker } from "@/registry/ui/tremor-error-rate-target-tracker";
import { TremorErrorRateMiniHistogram } from "@/registry/ui/tremor-error-rate-mini-histogram";
import { TremorErrorRateTrendIndicator } from "@/registry/ui/tremor-error-rate-trend-indicator";
import { TremorErrorRateSummaryStat } from "@/registry/ui/tremor-error-rate-summary-stat";
import { TremorCloudSpendSparkline } from "@/registry/ui/tremor-cloud-spend-sparkline";
import { TremorCloudSpendRadialGauge } from "@/registry/ui/tremor-cloud-spend-radial-gauge";
import { TremorCloudSpendDeltaBadge } from "@/registry/ui/tremor-cloud-spend-delta-badge";
import { TremorCloudSpendSteppedBar } from "@/registry/ui/tremor-cloud-spend-stepped-bar";
import { TremorCloudSpendSegmentedPill } from "@/registry/ui/tremor-cloud-spend-segmented-pill";
import { TremorCloudSpendCalloutCard } from "@/registry/ui/tremor-cloud-spend-callout-card";
import { TremorCloudSpendTargetTracker } from "@/registry/ui/tremor-cloud-spend-target-tracker";
import { TremorCloudSpendMiniHistogram } from "@/registry/ui/tremor-cloud-spend-mini-histogram";
import { TremorCloudSpendTrendIndicator } from "@/registry/ui/tremor-cloud-spend-trend-indicator";
import { TremorCloudSpendSummaryStat } from "@/registry/ui/tremor-cloud-spend-summary-stat";
import { TremorDbIopsSparkline } from "@/registry/ui/tremor-db-iops-sparkline";
import { TremorDbIopsRadialGauge } from "@/registry/ui/tremor-db-iops-radial-gauge";
import { TremorDbIopsDeltaBadge } from "@/registry/ui/tremor-db-iops-delta-badge";
import { TremorDbIopsSteppedBar } from "@/registry/ui/tremor-db-iops-stepped-bar";
import { TremorDbIopsSegmentedPill } from "@/registry/ui/tremor-db-iops-segmented-pill";
import { TremorDbIopsCalloutCard } from "@/registry/ui/tremor-db-iops-callout-card";
import { TremorDbIopsTargetTracker } from "@/registry/ui/tremor-db-iops-target-tracker";
import { TremorDbIopsMiniHistogram } from "@/registry/ui/tremor-db-iops-mini-histogram";
import { TremorDbIopsTrendIndicator } from "@/registry/ui/tremor-db-iops-trend-indicator";
import { TremorDbIopsSummaryStat } from "@/registry/ui/tremor-db-iops-summary-stat";
import { TremorCacheHitSparkline } from "@/registry/ui/tremor-cache-hit-sparkline";
import { TremorCacheHitRadialGauge } from "@/registry/ui/tremor-cache-hit-radial-gauge";
import { TremorCacheHitDeltaBadge } from "@/registry/ui/tremor-cache-hit-delta-badge";
import { TremorCacheHitSteppedBar } from "@/registry/ui/tremor-cache-hit-stepped-bar";
import { TremorCacheHitSegmentedPill } from "@/registry/ui/tremor-cache-hit-segmented-pill";
import { TremorCacheHitCalloutCard } from "@/registry/ui/tremor-cache-hit-callout-card";
import { TremorCacheHitTargetTracker } from "@/registry/ui/tremor-cache-hit-target-tracker";
import { TremorCacheHitMiniHistogram } from "@/registry/ui/tremor-cache-hit-mini-histogram";
import { TremorCacheHitTrendIndicator } from "@/registry/ui/tremor-cache-hit-trend-indicator";
import { TremorCacheHitSummaryStat } from "@/registry/ui/tremor-cache-hit-summary-stat";
import { TremorQueueDepthSparkline } from "@/registry/ui/tremor-queue-depth-sparkline";
import { TremorQueueDepthRadialGauge } from "@/registry/ui/tremor-queue-depth-radial-gauge";
import { TremorQueueDepthDeltaBadge } from "@/registry/ui/tremor-queue-depth-delta-badge";
import { TremorQueueDepthSteppedBar } from "@/registry/ui/tremor-queue-depth-stepped-bar";
import { TremorQueueDepthSegmentedPill } from "@/registry/ui/tremor-queue-depth-segmented-pill";
import { TremorQueueDepthCalloutCard } from "@/registry/ui/tremor-queue-depth-callout-card";
import { TremorQueueDepthTargetTracker } from "@/registry/ui/tremor-queue-depth-target-tracker";
import { TremorQueueDepthMiniHistogram } from "@/registry/ui/tremor-queue-depth-mini-histogram";
import { TremorQueueDepthTrendIndicator } from "@/registry/ui/tremor-queue-depth-trend-indicator";
import { TremorQueueDepthSummaryStat } from "@/registry/ui/tremor-queue-depth-summary-stat";
import { TremorP99LatencySparkline } from "@/registry/ui/tremor-p99-latency-sparkline";
import { TremorP99LatencyRadialGauge } from "@/registry/ui/tremor-p99-latency-radial-gauge";
import { TremorP99LatencyDeltaBadge } from "@/registry/ui/tremor-p99-latency-delta-badge";
import { TremorP99LatencySteppedBar } from "@/registry/ui/tremor-p99-latency-stepped-bar";
import { TremorP99LatencySegmentedPill } from "@/registry/ui/tremor-p99-latency-segmented-pill";
import { TremorP99LatencyCalloutCard } from "@/registry/ui/tremor-p99-latency-callout-card";
import { TremorP99LatencyTargetTracker } from "@/registry/ui/tremor-p99-latency-target-tracker";
import { TremorP99LatencyMiniHistogram } from "@/registry/ui/tremor-p99-latency-mini-histogram";
import { TremorP99LatencyTrendIndicator } from "@/registry/ui/tremor-p99-latency-trend-indicator";
import { TremorP99LatencySummaryStat } from "@/registry/ui/tremor-p99-latency-summary-stat";
import { TremorCpuLoadSparkline } from "@/registry/ui/tremor-cpu-load-sparkline";
import { TremorCpuLoadRadialGauge } from "@/registry/ui/tremor-cpu-load-radial-gauge";
import { TremorCpuLoadDeltaBadge } from "@/registry/ui/tremor-cpu-load-delta-badge";
import { TremorCpuLoadSteppedBar } from "@/registry/ui/tremor-cpu-load-stepped-bar";
import { TremorCpuLoadSegmentedPill } from "@/registry/ui/tremor-cpu-load-segmented-pill";
import { TremorCpuLoadCalloutCard } from "@/registry/ui/tremor-cpu-load-callout-card";
import { TremorCpuLoadTargetTracker } from "@/registry/ui/tremor-cpu-load-target-tracker";
import { TremorCpuLoadMiniHistogram } from "@/registry/ui/tremor-cpu-load-mini-histogram";
import { TremorCpuLoadTrendIndicator } from "@/registry/ui/tremor-cpu-load-trend-indicator";
import { TremorCpuLoadSummaryStat } from "@/registry/ui/tremor-cpu-load-summary-stat";
import { TremorRamUsageSparkline } from "@/registry/ui/tremor-ram-usage-sparkline";
import { TremorRamUsageRadialGauge } from "@/registry/ui/tremor-ram-usage-radial-gauge";
import { TremorRamUsageDeltaBadge } from "@/registry/ui/tremor-ram-usage-delta-badge";
import { TremorRamUsageSteppedBar } from "@/registry/ui/tremor-ram-usage-stepped-bar";
import { TremorRamUsageSegmentedPill } from "@/registry/ui/tremor-ram-usage-segmented-pill";
import { TremorRamUsageCalloutCard } from "@/registry/ui/tremor-ram-usage-callout-card";
import { TremorRamUsageTargetTracker } from "@/registry/ui/tremor-ram-usage-target-tracker";
import { TremorRamUsageMiniHistogram } from "@/registry/ui/tremor-ram-usage-mini-histogram";
import { TremorRamUsageTrendIndicator } from "@/registry/ui/tremor-ram-usage-trend-indicator";
import { TremorRamUsageSummaryStat } from "@/registry/ui/tremor-ram-usage-summary-stat";
import { TremorNpsScoreSparkline } from "@/registry/ui/tremor-nps-score-sparkline";
import { TremorNpsScoreRadialGauge } from "@/registry/ui/tremor-nps-score-radial-gauge";
import { TremorNpsScoreDeltaBadge } from "@/registry/ui/tremor-nps-score-delta-badge";
import { TremorNpsScoreSteppedBar } from "@/registry/ui/tremor-nps-score-stepped-bar";
import { TremorNpsScoreSegmentedPill } from "@/registry/ui/tremor-nps-score-segmented-pill";
import { TremorNpsScoreCalloutCard } from "@/registry/ui/tremor-nps-score-callout-card";
import { TremorNpsScoreTargetTracker } from "@/registry/ui/tremor-nps-score-target-tracker";
import { TremorNpsScoreMiniHistogram } from "@/registry/ui/tremor-nps-score-mini-histogram";
import { TremorNpsScoreTrendIndicator } from "@/registry/ui/tremor-nps-score-trend-indicator";
import { TremorNpsScoreSummaryStat } from "@/registry/ui/tremor-nps-score-summary-stat";
import { HyperSaasLaunchPill } from "@/registry/ui/hyper-saas-launch-pill";
import { HyperSaasLaunchStatCard } from "@/registry/ui/hyper-saas-launch-stat-card";
import { HyperSaasLaunchBentoTile } from "@/registry/ui/hyper-saas-launch-bento-tile";
import { HyperSaasLaunchBannerInline } from "@/registry/ui/hyper-saas-launch-banner-inline";
import { HyperSaasLaunchQuoteCard } from "@/registry/ui/hyper-saas-launch-quote-card";
import { HyperSecurityShieldPill } from "@/registry/ui/hyper-security-shield-pill";
import { HyperSecurityShieldStatCard } from "@/registry/ui/hyper-security-shield-stat-card";
import { HyperSecurityShieldBentoTile } from "@/registry/ui/hyper-security-shield-bento-tile";
import { HyperSecurityShieldBannerInline } from "@/registry/ui/hyper-security-shield-banner-inline";
import { HyperSecurityShieldQuoteCard } from "@/registry/ui/hyper-security-shield-quote-card";
import { HyperAiCopilotPill } from "@/registry/ui/hyper-ai-copilot-pill";
import { HyperAiCopilotStatCard } from "@/registry/ui/hyper-ai-copilot-stat-card";
import { HyperAiCopilotBentoTile } from "@/registry/ui/hyper-ai-copilot-bento-tile";
import { HyperAiCopilotBannerInline } from "@/registry/ui/hyper-ai-copilot-banner-inline";
import { HyperAiCopilotQuoteCard } from "@/registry/ui/hyper-ai-copilot-quote-card";
import { HyperPaymentCheckoutPill } from "@/registry/ui/hyper-payment-checkout-pill";
import { HyperPaymentCheckoutStatCard } from "@/registry/ui/hyper-payment-checkout-stat-card";
import { HyperPaymentCheckoutBentoTile } from "@/registry/ui/hyper-payment-checkout-bento-tile";
import { HyperPaymentCheckoutBannerInline } from "@/registry/ui/hyper-payment-checkout-banner-inline";
import { HyperPaymentCheckoutQuoteCard } from "@/registry/ui/hyper-payment-checkout-quote-card";
import { HyperComplianceGdprPill } from "@/registry/ui/hyper-compliance-gdpr-pill";
import { HyperComplianceGdprStatCard } from "@/registry/ui/hyper-compliance-gdpr-stat-card";
import { HyperComplianceGdprBentoTile } from "@/registry/ui/hyper-compliance-gdpr-bento-tile";
import { HyperComplianceGdprBannerInline } from "@/registry/ui/hyper-compliance-gdpr-banner-inline";
import { HyperComplianceGdprQuoteCard } from "@/registry/ui/hyper-compliance-gdpr-quote-card";
import { HyperDeveloperCliPill } from "@/registry/ui/hyper-developer-cli-pill";
import { HyperDeveloperCliStatCard } from "@/registry/ui/hyper-developer-cli-stat-card";
import { HyperDeveloperCliBentoTile } from "@/registry/ui/hyper-developer-cli-bento-tile";
import { HyperDeveloperCliBannerInline } from "@/registry/ui/hyper-developer-cli-banner-inline";
import { HyperDeveloperCliQuoteCard } from "@/registry/ui/hyper-developer-cli-quote-card";
import { HyperCloudMeshPill } from "@/registry/ui/hyper-cloud-mesh-pill";
import { HyperCloudMeshStatCard } from "@/registry/ui/hyper-cloud-mesh-stat-card";
import { HyperCloudMeshBentoTile } from "@/registry/ui/hyper-cloud-mesh-bento-tile";
import { HyperCloudMeshBannerInline } from "@/registry/ui/hyper-cloud-mesh-banner-inline";
import { HyperCloudMeshQuoteCard } from "@/registry/ui/hyper-cloud-mesh-quote-card";
import { HyperMobileSyncPill } from "@/registry/ui/hyper-mobile-sync-pill";
import { HyperMobileSyncStatCard } from "@/registry/ui/hyper-mobile-sync-stat-card";
import { HyperMobileSyncBentoTile } from "@/registry/ui/hyper-mobile-sync-bento-tile";
import { HyperMobileSyncBannerInline } from "@/registry/ui/hyper-mobile-sync-banner-inline";
import { HyperMobileSyncQuoteCard } from "@/registry/ui/hyper-mobile-sync-quote-card";
import { HyperAnalyticsIqPill } from "@/registry/ui/hyper-analytics-iq-pill";
import { HyperAnalyticsIqStatCard } from "@/registry/ui/hyper-analytics-iq-stat-card";
import { HyperAnalyticsIqBentoTile } from "@/registry/ui/hyper-analytics-iq-bento-tile";
import { HyperAnalyticsIqBannerInline } from "@/registry/ui/hyper-analytics-iq-banner-inline";
import { HyperAnalyticsIqQuoteCard } from "@/registry/ui/hyper-analytics-iq-quote-card";
import { HyperUptimeSlaPill } from "@/registry/ui/hyper-uptime-sla-pill";
import { HyperUptimeSlaStatCard } from "@/registry/ui/hyper-uptime-sla-stat-card";
import { HyperUptimeSlaBentoTile } from "@/registry/ui/hyper-uptime-sla-bento-tile";
import { HyperUptimeSlaBannerInline } from "@/registry/ui/hyper-uptime-sla-banner-inline";
import { HyperUptimeSlaQuoteCard } from "@/registry/ui/hyper-uptime-sla-quote-card";
import { CultAudioWaveformFloatingHud } from "@/registry/ui/cult-audio-waveform-floating-hud";
import { CultAudioWaveformDockLens } from "@/registry/ui/cult-audio-waveform-dock-lens";
import { CultAudioWaveformSliderScrub } from "@/registry/ui/cult-audio-waveform-slider-scrub";
import { CultAudioWaveformTactileToggle } from "@/registry/ui/cult-audio-waveform-tactile-toggle";
import { CultAudioWaveformGlassCard } from "@/registry/ui/cult-audio-waveform-glass-card";
import { CultSpectralAnalyzerFloatingHud } from "@/registry/ui/cult-spectral-analyzer-floating-hud";
import { CultSpectralAnalyzerDockLens } from "@/registry/ui/cult-spectral-analyzer-dock-lens";
import { CultSpectralAnalyzerSliderScrub } from "@/registry/ui/cult-spectral-analyzer-slider-scrub";
import { CultSpectralAnalyzerTactileToggle } from "@/registry/ui/cult-spectral-analyzer-tactile-toggle";
import { CultSpectralAnalyzerGlassCard } from "@/registry/ui/cult-spectral-analyzer-glass-card";
import { CultCanvasBrushFloatingHud } from "@/registry/ui/cult-canvas-brush-floating-hud";
import { CultCanvasBrushDockLens } from "@/registry/ui/cult-canvas-brush-dock-lens";
import { CultCanvasBrushSliderScrub } from "@/registry/ui/cult-canvas-brush-slider-scrub";
import { CultCanvasBrushTactileToggle } from "@/registry/ui/cult-canvas-brush-tactile-toggle";
import { CultCanvasBrushGlassCard } from "@/registry/ui/cult-canvas-brush-glass-card";
import { CultTimelineScrubberFloatingHud } from "@/registry/ui/cult-timeline-scrubber-floating-hud";
import { CultTimelineScrubberDockLens } from "@/registry/ui/cult-timeline-scrubber-dock-lens";
import { CultTimelineScrubberSliderScrub } from "@/registry/ui/cult-timeline-scrubber-slider-scrub";
import { CultTimelineScrubberTactileToggle } from "@/registry/ui/cult-timeline-scrubber-tactile-toggle";
import { CultTimelineScrubberGlassCard } from "@/registry/ui/cult-timeline-scrubber-glass-card";
import { CultColorGamutFloatingHud } from "@/registry/ui/cult-color-gamut-floating-hud";
import { CultColorGamutDockLens } from "@/registry/ui/cult-color-gamut-dock-lens";
import { CultColorGamutSliderScrub } from "@/registry/ui/cult-color-gamut-slider-scrub";
import { CultColorGamutTactileToggle } from "@/registry/ui/cult-color-gamut-tactile-toggle";
import { CultColorGamutGlassCard } from "@/registry/ui/cult-color-gamut-glass-card";
import { CultLayerStackFloatingHud } from "@/registry/ui/cult-layer-stack-floating-hud";
import { CultLayerStackDockLens } from "@/registry/ui/cult-layer-stack-dock-lens";
import { CultLayerStackSliderScrub } from "@/registry/ui/cult-layer-stack-slider-scrub";
import { CultLayerStackTactileToggle } from "@/registry/ui/cult-layer-stack-tactile-toggle";
import { CultLayerStackGlassCard } from "@/registry/ui/cult-layer-stack-glass-card";
import { CultShaderViewportFloatingHud } from "@/registry/ui/cult-shader-viewport-floating-hud";
import { CultShaderViewportDockLens } from "@/registry/ui/cult-shader-viewport-dock-lens";
import { CultShaderViewportSliderScrub } from "@/registry/ui/cult-shader-viewport-slider-scrub";
import { CultShaderViewportTactileToggle } from "@/registry/ui/cult-shader-viewport-tactile-toggle";
import { CultShaderViewportGlassCard } from "@/registry/ui/cult-shader-viewport-glass-card";
import { CultPaletteSwatchFloatingHud } from "@/registry/ui/cult-palette-swatch-floating-hud";
import { CultPaletteSwatchDockLens } from "@/registry/ui/cult-palette-swatch-dock-lens";
import { CultPaletteSwatchSliderScrub } from "@/registry/ui/cult-palette-swatch-slider-scrub";
import { CultPaletteSwatchTactileToggle } from "@/registry/ui/cult-palette-swatch-tactile-toggle";
import { CultPaletteSwatchGlassCard } from "@/registry/ui/cult-palette-swatch-glass-card";
import { CultZoomLoupeFloatingHud } from "@/registry/ui/cult-zoom-loupe-floating-hud";
import { CultZoomLoupeDockLens } from "@/registry/ui/cult-zoom-loupe-dock-lens";
import { CultZoomLoupeSliderScrub } from "@/registry/ui/cult-zoom-loupe-slider-scrub";
import { CultZoomLoupeTactileToggle } from "@/registry/ui/cult-zoom-loupe-tactile-toggle";
import { CultZoomLoupeGlassCard } from "@/registry/ui/cult-zoom-loupe-glass-card";
import { CultKeyframeTrackFloatingHud } from "@/registry/ui/cult-keyframe-track-floating-hud";
import { CultKeyframeTrackDockLens } from "@/registry/ui/cult-keyframe-track-dock-lens";
import { CultKeyframeTrackSliderScrub } from "@/registry/ui/cult-keyframe-track-slider-scrub";
import { CultKeyframeTrackTactileToggle } from "@/registry/ui/cult-keyframe-track-tactile-toggle";
import { CultKeyframeTrackGlassCard } from "@/registry/ui/cult-keyframe-track-glass-card";
import { OriginDateRangePillSelector } from "@/registry/ui/origin-date-range-pill-selector";
import { OriginDateRangeChipDismiss } from "@/registry/ui/origin-date-range-chip-dismiss";
import { OriginDateRangeSegmentedChoice } from "@/registry/ui/origin-date-range-segmented-choice";
import { OriginDateRangeTriggerSelect } from "@/registry/ui/origin-date-range-trigger-select";
import { OriginDateRangeToggleCounter } from "@/registry/ui/origin-date-range-toggle-counter";
import { OriginPriceTierPillSelector } from "@/registry/ui/origin-price-tier-pill-selector";
import { OriginPriceTierChipDismiss } from "@/registry/ui/origin-price-tier-chip-dismiss";
import { OriginPriceTierSegmentedChoice } from "@/registry/ui/origin-price-tier-segmented-choice";
import { OriginPriceTierTriggerSelect } from "@/registry/ui/origin-price-tier-trigger-select";
import { OriginPriceTierToggleCounter } from "@/registry/ui/origin-price-tier-toggle-counter";
import { OriginGeoRegionPillSelector } from "@/registry/ui/origin-geo-region-pill-selector";
import { OriginGeoRegionChipDismiss } from "@/registry/ui/origin-geo-region-chip-dismiss";
import { OriginGeoRegionSegmentedChoice } from "@/registry/ui/origin-geo-region-segmented-choice";
import { OriginGeoRegionTriggerSelect } from "@/registry/ui/origin-geo-region-trigger-select";
import { OriginGeoRegionToggleCounter } from "@/registry/ui/origin-geo-region-toggle-counter";
import { OriginHttpMethodPillSelector } from "@/registry/ui/origin-http-method-pill-selector";
import { OriginHttpMethodChipDismiss } from "@/registry/ui/origin-http-method-chip-dismiss";
import { OriginHttpMethodSegmentedChoice } from "@/registry/ui/origin-http-method-segmented-choice";
import { OriginHttpMethodTriggerSelect } from "@/registry/ui/origin-http-method-trigger-select";
import { OriginHttpMethodToggleCounter } from "@/registry/ui/origin-http-method-toggle-counter";
import { OriginLogSeverityPillSelector } from "@/registry/ui/origin-log-severity-pill-selector";
import { OriginLogSeverityChipDismiss } from "@/registry/ui/origin-log-severity-chip-dismiss";
import { OriginLogSeveritySegmentedChoice } from "@/registry/ui/origin-log-severity-segmented-choice";
import { OriginLogSeverityTriggerSelect } from "@/registry/ui/origin-log-severity-trigger-select";
import { OriginLogSeverityToggleCounter } from "@/registry/ui/origin-log-severity-toggle-counter";
import { OriginUserRolePillSelector } from "@/registry/ui/origin-user-role-pill-selector";
import { OriginUserRoleChipDismiss } from "@/registry/ui/origin-user-role-chip-dismiss";
import { OriginUserRoleSegmentedChoice } from "@/registry/ui/origin-user-role-segmented-choice";
import { OriginUserRoleTriggerSelect } from "@/registry/ui/origin-user-role-trigger-select";
import { OriginUserRoleToggleCounter } from "@/registry/ui/origin-user-role-toggle-counter";
import { OriginDeviceTypePillSelector } from "@/registry/ui/origin-device-type-pill-selector";
import { OriginDeviceTypeChipDismiss } from "@/registry/ui/origin-device-type-chip-dismiss";
import { OriginDeviceTypeSegmentedChoice } from "@/registry/ui/origin-device-type-segmented-choice";
import { OriginDeviceTypeTriggerSelect } from "@/registry/ui/origin-device-type-trigger-select";
import { OriginDeviceTypeToggleCounter } from "@/registry/ui/origin-device-type-toggle-counter";
import { OriginGitBranchPillSelector } from "@/registry/ui/origin-git-branch-pill-selector";
import { OriginGitBranchChipDismiss } from "@/registry/ui/origin-git-branch-chip-dismiss";
import { OriginGitBranchSegmentedChoice } from "@/registry/ui/origin-git-branch-segmented-choice";
import { OriginGitBranchTriggerSelect } from "@/registry/ui/origin-git-branch-trigger-select";
import { OriginGitBranchToggleCounter } from "@/registry/ui/origin-git-branch-toggle-counter";
import { OriginLicenseTypePillSelector } from "@/registry/ui/origin-license-type-pill-selector";
import { OriginLicenseTypeChipDismiss } from "@/registry/ui/origin-license-type-chip-dismiss";
import { OriginLicenseTypeSegmentedChoice } from "@/registry/ui/origin-license-type-segmented-choice";
import { OriginLicenseTypeTriggerSelect } from "@/registry/ui/origin-license-type-trigger-select";
import { OriginLicenseTypeToggleCounter } from "@/registry/ui/origin-license-type-toggle-counter";
import { OriginDeployEnvPillSelector } from "@/registry/ui/origin-deploy-env-pill-selector";
import { OriginDeployEnvChipDismiss } from "@/registry/ui/origin-deploy-env-chip-dismiss";
import { OriginDeployEnvSegmentedChoice } from "@/registry/ui/origin-deploy-env-segmented-choice";
import { OriginDeployEnvTriggerSelect } from "@/registry/ui/origin-deploy-env-trigger-select";
import { OriginDeployEnvToggleCounter } from "@/registry/ui/origin-deploy-env-toggle-counter";
import { AiPromptComposerGlow } from "@/registry/ui/ai-prompt-composer-glow";
import { AiPromptComposerGlass } from "@/registry/ui/ai-prompt-composer-glass";
import { AiPromptComposerMinimal } from "@/registry/ui/ai-prompt-composer-minimal";
import { AiPromptComposerTactile } from "@/registry/ui/ai-prompt-composer-tactile";
import { AiPromptComposerCyber } from "@/registry/ui/ai-prompt-composer-cyber";
import { AiPromptComposerMatrix } from "@/registry/ui/ai-prompt-composer-matrix";
import { AiPromptComposerStealth } from "@/registry/ui/ai-prompt-composer-stealth";
import { AiPromptComposerFloating } from "@/registry/ui/ai-prompt-composer-floating";
import { AiPromptComposerConic } from "@/registry/ui/ai-prompt-composer-conic";
import { AiPromptComposerPill } from "@/registry/ui/ai-prompt-composer-pill";
import { AiModelSelectorGlow } from "@/registry/ui/ai-model-selector-glow";
import { AiModelSelectorGlass } from "@/registry/ui/ai-model-selector-glass";
import { AiModelSelectorMinimal } from "@/registry/ui/ai-model-selector-minimal";
import { AiModelSelectorTactile } from "@/registry/ui/ai-model-selector-tactile";
import { AiModelSelectorCyber } from "@/registry/ui/ai-model-selector-cyber";
import { AiModelSelectorMatrix } from "@/registry/ui/ai-model-selector-matrix";
import { AiModelSelectorStealth } from "@/registry/ui/ai-model-selector-stealth";
import { AiModelSelectorFloating } from "@/registry/ui/ai-model-selector-floating";
import { AiModelSelectorConic } from "@/registry/ui/ai-model-selector-conic";
import { AiModelSelectorPill } from "@/registry/ui/ai-model-selector-pill";
import { AiTokenMeterGlow } from "@/registry/ui/ai-token-meter-glow";
import { AiTokenMeterGlass } from "@/registry/ui/ai-token-meter-glass";
import { AiTokenMeterMinimal } from "@/registry/ui/ai-token-meter-minimal";
import { AiTokenMeterTactile } from "@/registry/ui/ai-token-meter-tactile";
import { AiTokenMeterCyber } from "@/registry/ui/ai-token-meter-cyber";
import { AiTokenMeterMatrix } from "@/registry/ui/ai-token-meter-matrix";
import { AiTokenMeterStealth } from "@/registry/ui/ai-token-meter-stealth";
import { AiTokenMeterFloating } from "@/registry/ui/ai-token-meter-floating";
import { AiTokenMeterConic } from "@/registry/ui/ai-token-meter-conic";
import { AiTokenMeterPill } from "@/registry/ui/ai-token-meter-pill";
import { AiPromptShelfGlow } from "@/registry/ui/ai-prompt-shelf-glow";
import { AiPromptShelfGlass } from "@/registry/ui/ai-prompt-shelf-glass";
import { AiPromptShelfMinimal } from "@/registry/ui/ai-prompt-shelf-minimal";
import { AiPromptShelfTactile } from "@/registry/ui/ai-prompt-shelf-tactile";
import { AiPromptShelfCyber } from "@/registry/ui/ai-prompt-shelf-cyber";
import { AiPromptShelfMatrix } from "@/registry/ui/ai-prompt-shelf-matrix";
import { AiPromptShelfStealth } from "@/registry/ui/ai-prompt-shelf-stealth";
import { AiPromptShelfFloating } from "@/registry/ui/ai-prompt-shelf-floating";
import { AiPromptShelfConic } from "@/registry/ui/ai-prompt-shelf-conic";
import { AiPromptShelfPill } from "@/registry/ui/ai-prompt-shelf-pill";
import { AiReasoningSliderGlow } from "@/registry/ui/ai-reasoning-slider-glow";
import { AiReasoningSliderGlass } from "@/registry/ui/ai-reasoning-slider-glass";
import { AiReasoningSliderMinimal } from "@/registry/ui/ai-reasoning-slider-minimal";
import { AiReasoningSliderTactile } from "@/registry/ui/ai-reasoning-slider-tactile";
import { AiReasoningSliderCyber } from "@/registry/ui/ai-reasoning-slider-cyber";
import { AiReasoningSliderMatrix } from "@/registry/ui/ai-reasoning-slider-matrix";
import { AiReasoningSliderStealth } from "@/registry/ui/ai-reasoning-slider-stealth";
import { AiReasoningSliderFloating } from "@/registry/ui/ai-reasoning-slider-floating";
import { AiReasoningSliderConic } from "@/registry/ui/ai-reasoning-slider-conic";
import { AiReasoningSliderPill } from "@/registry/ui/ai-reasoning-slider-pill";
import { AiSystemPersonaGlow } from "@/registry/ui/ai-system-persona-glow";
import { AiSystemPersonaGlass } from "@/registry/ui/ai-system-persona-glass";
import { AiSystemPersonaMinimal } from "@/registry/ui/ai-system-persona-minimal";
import { AiSystemPersonaTactile } from "@/registry/ui/ai-system-persona-tactile";
import { AiSystemPersonaCyber } from "@/registry/ui/ai-system-persona-cyber";
import { AiSystemPersonaMatrix } from "@/registry/ui/ai-system-persona-matrix";
import { AiSystemPersonaStealth } from "@/registry/ui/ai-system-persona-stealth";
import { AiSystemPersonaFloating } from "@/registry/ui/ai-system-persona-floating";
import { AiSystemPersonaConic } from "@/registry/ui/ai-system-persona-conic";
import { AiSystemPersonaPill } from "@/registry/ui/ai-system-persona-pill";
import { AiCitationChipGlow } from "@/registry/ui/ai-citation-chip-glow";
import { AiCitationChipGlass } from "@/registry/ui/ai-citation-chip-glass";
import { AiCitationChipMinimal } from "@/registry/ui/ai-citation-chip-minimal";
import { AiCitationChipTactile } from "@/registry/ui/ai-citation-chip-tactile";
import { AiCitationChipCyber } from "@/registry/ui/ai-citation-chip-cyber";
import { AiCitationChipMatrix } from "@/registry/ui/ai-citation-chip-matrix";
import { AiCitationChipStealth } from "@/registry/ui/ai-citation-chip-stealth";
import { AiCitationChipFloating } from "@/registry/ui/ai-citation-chip-floating";
import { AiCitationChipConic } from "@/registry/ui/ai-citation-chip-conic";
import { AiCitationChipPill } from "@/registry/ui/ai-citation-chip-pill";
import { AiSessionBranchGlow } from "@/registry/ui/ai-session-branch-glow";
import { AiSessionBranchGlass } from "@/registry/ui/ai-session-branch-glass";
import { AiSessionBranchMinimal } from "@/registry/ui/ai-session-branch-minimal";
import { AiSessionBranchTactile } from "@/registry/ui/ai-session-branch-tactile";
import { AiSessionBranchCyber } from "@/registry/ui/ai-session-branch-cyber";
import { AiSessionBranchMatrix } from "@/registry/ui/ai-session-branch-matrix";
import { AiSessionBranchStealth } from "@/registry/ui/ai-session-branch-stealth";
import { AiSessionBranchFloating } from "@/registry/ui/ai-session-branch-floating";
import { AiSessionBranchConic } from "@/registry/ui/ai-session-branch-conic";
import { AiSessionBranchPill } from "@/registry/ui/ai-session-branch-pill";
import { AiMultimodalDropGlow } from "@/registry/ui/ai-multimodal-drop-glow";
import { AiMultimodalDropGlass } from "@/registry/ui/ai-multimodal-drop-glass";
import { AiMultimodalDropMinimal } from "@/registry/ui/ai-multimodal-drop-minimal";
import { AiMultimodalDropTactile } from "@/registry/ui/ai-multimodal-drop-tactile";
import { AiMultimodalDropCyber } from "@/registry/ui/ai-multimodal-drop-cyber";
import { AiMultimodalDropMatrix } from "@/registry/ui/ai-multimodal-drop-matrix";
import { AiMultimodalDropStealth } from "@/registry/ui/ai-multimodal-drop-stealth";
import { AiMultimodalDropFloating } from "@/registry/ui/ai-multimodal-drop-floating";
import { AiMultimodalDropConic } from "@/registry/ui/ai-multimodal-drop-conic";
import { AiMultimodalDropPill } from "@/registry/ui/ai-multimodal-drop-pill";
import { AiStreamTelemetryGlow } from "@/registry/ui/ai-stream-telemetry-glow";
import { AiStreamTelemetryGlass } from "@/registry/ui/ai-stream-telemetry-glass";
import { AiStreamTelemetryMinimal } from "@/registry/ui/ai-stream-telemetry-minimal";
import { AiStreamTelemetryTactile } from "@/registry/ui/ai-stream-telemetry-tactile";
import { AiStreamTelemetryCyber } from "@/registry/ui/ai-stream-telemetry-cyber";
import { AiStreamTelemetryMatrix } from "@/registry/ui/ai-stream-telemetry-matrix";
import { AiStreamTelemetryStealth } from "@/registry/ui/ai-stream-telemetry-stealth";
import { AiStreamTelemetryFloating } from "@/registry/ui/ai-stream-telemetry-floating";
import { AiStreamTelemetryConic } from "@/registry/ui/ai-stream-telemetry-conic";
import { AiStreamTelemetryPill } from "@/registry/ui/ai-stream-telemetry-pill";
import { InputOtpPinClean } from "@/registry/ui/input-otp-pin-clean";
import { InputOtpPinAccent } from "@/registry/ui/input-otp-pin-accent";
import { InputOtpPinCompact } from "@/registry/ui/input-otp-pin-compact";
import { InputOtpPinFloating } from "@/registry/ui/input-otp-pin-floating";
import { InputOtpPinSegmented } from "@/registry/ui/input-otp-pin-segmented";
import { InputOtpPinBordered } from "@/registry/ui/input-otp-pin-bordered";
import { InputOtpPinFilled } from "@/registry/ui/input-otp-pin-filled";
import { InputOtpPinGlass } from "@/registry/ui/input-otp-pin-glass";
import { InputOtpPinPill } from "@/registry/ui/input-otp-pin-pill";
import { InputOtpPinStealth } from "@/registry/ui/input-otp-pin-stealth";
import { InputPhoneIntlClean } from "@/registry/ui/input-phone-intl-clean";
import { InputPhoneIntlAccent } from "@/registry/ui/input-phone-intl-accent";
import { InputPhoneIntlCompact } from "@/registry/ui/input-phone-intl-compact";
import { InputPhoneIntlFloating } from "@/registry/ui/input-phone-intl-floating";
import { InputPhoneIntlSegmented } from "@/registry/ui/input-phone-intl-segmented";
import { InputPhoneIntlBordered } from "@/registry/ui/input-phone-intl-bordered";
import { InputPhoneIntlFilled } from "@/registry/ui/input-phone-intl-filled";
import { InputPhoneIntlGlass } from "@/registry/ui/input-phone-intl-glass";
import { InputPhoneIntlPill } from "@/registry/ui/input-phone-intl-pill";
import { InputPhoneIntlStealth } from "@/registry/ui/input-phone-intl-stealth";
import { InputCardLuhnClean } from "@/registry/ui/input-card-luhn-clean";
import { InputCardLuhnAccent } from "@/registry/ui/input-card-luhn-accent";
import { InputCardLuhnCompact } from "@/registry/ui/input-card-luhn-compact";
import { InputCardLuhnFloating } from "@/registry/ui/input-card-luhn-floating";
import { InputCardLuhnSegmented } from "@/registry/ui/input-card-luhn-segmented";
import { InputCardLuhnBordered } from "@/registry/ui/input-card-luhn-bordered";
import { InputCardLuhnFilled } from "@/registry/ui/input-card-luhn-filled";
import { InputCardLuhnGlass } from "@/registry/ui/input-card-luhn-glass";
import { InputCardLuhnPill } from "@/registry/ui/input-card-luhn-pill";
import { InputCardLuhnStealth } from "@/registry/ui/input-card-luhn-stealth";
import { InputCalendarTimeClean } from "@/registry/ui/input-calendar-time-clean";
import { InputCalendarTimeAccent } from "@/registry/ui/input-calendar-time-accent";
import { InputCalendarTimeCompact } from "@/registry/ui/input-calendar-time-compact";
import { InputCalendarTimeFloating } from "@/registry/ui/input-calendar-time-floating";
import { InputCalendarTimeSegmented } from "@/registry/ui/input-calendar-time-segmented";
import { InputCalendarTimeBordered } from "@/registry/ui/input-calendar-time-bordered";
import { InputCalendarTimeFilled } from "@/registry/ui/input-calendar-time-filled";
import { InputCalendarTimeGlass } from "@/registry/ui/input-calendar-time-glass";
import { InputCalendarTimePill } from "@/registry/ui/input-calendar-time-pill";
import { InputCalendarTimeStealth } from "@/registry/ui/input-calendar-time-stealth";
import { InputColorHexClean } from "@/registry/ui/input-color-hex-clean";
import { InputColorHexAccent } from "@/registry/ui/input-color-hex-accent";
import { InputColorHexCompact } from "@/registry/ui/input-color-hex-compact";
import { InputColorHexFloating } from "@/registry/ui/input-color-hex-floating";
import { InputColorHexSegmented } from "@/registry/ui/input-color-hex-segmented";
import { InputColorHexBordered } from "@/registry/ui/input-color-hex-bordered";
import { InputColorHexFilled } from "@/registry/ui/input-color-hex-filled";
import { InputColorHexGlass } from "@/registry/ui/input-color-hex-glass";
import { InputColorHexPill } from "@/registry/ui/input-color-hex-pill";
import { InputColorHexStealth } from "@/registry/ui/input-color-hex-stealth";
import { InputFileDropClean } from "@/registry/ui/input-file-drop-clean";
import { InputFileDropAccent } from "@/registry/ui/input-file-drop-accent";
import { InputFileDropCompact } from "@/registry/ui/input-file-drop-compact";
import { InputFileDropFloating } from "@/registry/ui/input-file-drop-floating";
import { InputFileDropSegmented } from "@/registry/ui/input-file-drop-segmented";
import { InputFileDropBordered } from "@/registry/ui/input-file-drop-bordered";
import { InputFileDropFilled } from "@/registry/ui/input-file-drop-filled";
import { InputFileDropGlass } from "@/registry/ui/input-file-drop-glass";
import { InputFileDropPill } from "@/registry/ui/input-file-drop-pill";
import { InputFileDropStealth } from "@/registry/ui/input-file-drop-stealth";
import { InputDualSliderClean } from "@/registry/ui/input-dual-slider-clean";
import { InputDualSliderAccent } from "@/registry/ui/input-dual-slider-accent";
import { InputDualSliderCompact } from "@/registry/ui/input-dual-slider-compact";
import { InputDualSliderFloating } from "@/registry/ui/input-dual-slider-floating";
import { InputDualSliderSegmented } from "@/registry/ui/input-dual-slider-segmented";
import { InputDualSliderBordered } from "@/registry/ui/input-dual-slider-bordered";
import { InputDualSliderFilled } from "@/registry/ui/input-dual-slider-filled";
import { InputDualSliderGlass } from "@/registry/ui/input-dual-slider-glass";
import { InputDualSliderPill } from "@/registry/ui/input-dual-slider-pill";
import { InputDualSliderStealth } from "@/registry/ui/input-dual-slider-stealth";
import { InputCommandSearchClean } from "@/registry/ui/input-command-search-clean";
import { InputCommandSearchAccent } from "@/registry/ui/input-command-search-accent";
import { InputCommandSearchCompact } from "@/registry/ui/input-command-search-compact";
import { InputCommandSearchFloating } from "@/registry/ui/input-command-search-floating";
import { InputCommandSearchSegmented } from "@/registry/ui/input-command-search-segmented";
import { InputCommandSearchBordered } from "@/registry/ui/input-command-search-bordered";
import { InputCommandSearchFilled } from "@/registry/ui/input-command-search-filled";
import { InputCommandSearchGlass } from "@/registry/ui/input-command-search-glass";
import { InputCommandSearchPill } from "@/registry/ui/input-command-search-pill";
import { InputCommandSearchStealth } from "@/registry/ui/input-command-search-stealth";
import { InputTreeSelectClean } from "@/registry/ui/input-tree-select-clean";
import { InputTreeSelectAccent } from "@/registry/ui/input-tree-select-accent";
import { InputTreeSelectCompact } from "@/registry/ui/input-tree-select-compact";
import { InputTreeSelectFloating } from "@/registry/ui/input-tree-select-floating";
import { InputTreeSelectSegmented } from "@/registry/ui/input-tree-select-segmented";
import { InputTreeSelectBordered } from "@/registry/ui/input-tree-select-bordered";
import { InputTreeSelectFilled } from "@/registry/ui/input-tree-select-filled";
import { InputTreeSelectGlass } from "@/registry/ui/input-tree-select-glass";
import { InputTreeSelectPill } from "@/registry/ui/input-tree-select-pill";
import { InputTreeSelectStealth } from "@/registry/ui/input-tree-select-stealth";
import { InputRatingScoreClean } from "@/registry/ui/input-rating-score-clean";
import { InputRatingScoreAccent } from "@/registry/ui/input-rating-score-accent";
import { InputRatingScoreCompact } from "@/registry/ui/input-rating-score-compact";
import { InputRatingScoreFloating } from "@/registry/ui/input-rating-score-floating";
import { InputRatingScoreSegmented } from "@/registry/ui/input-rating-score-segmented";
import { InputRatingScoreBordered } from "@/registry/ui/input-rating-score-bordered";
import { InputRatingScoreFilled } from "@/registry/ui/input-rating-score-filled";
import { InputRatingScoreGlass } from "@/registry/ui/input-rating-score-glass";
import { InputRatingScorePill } from "@/registry/ui/input-rating-score-pill";
import { InputRatingScoreStealth } from "@/registry/ui/input-rating-score-stealth";
import { MotionKineticCounterAurora } from "@/registry/ui/motion-kinetic-counter-aurora";
import { MotionKineticCounterObsidian } from "@/registry/ui/motion-kinetic-counter-obsidian";
import { MotionKineticCounterCyberpunk } from "@/registry/ui/motion-kinetic-counter-cyberpunk";
import { MotionKineticCounterEmerald } from "@/registry/ui/motion-kinetic-counter-emerald";
import { MotionKineticCounterSapphire } from "@/registry/ui/motion-kinetic-counter-sapphire";
import { MotionKineticCounterAmethyst } from "@/registry/ui/motion-kinetic-counter-amethyst";
import { MotionKineticCounterSunset } from "@/registry/ui/motion-kinetic-counter-sunset";
import { MotionKineticCounterMonochrome } from "@/registry/ui/motion-kinetic-counter-monochrome";
import { MotionKineticCounterCopper } from "@/registry/ui/motion-kinetic-counter-copper";
import { MotionKineticCounterNordic } from "@/registry/ui/motion-kinetic-counter-nordic";
import { MotionGradientShimmerAurora } from "@/registry/ui/motion-gradient-shimmer-aurora";
import { MotionGradientShimmerObsidian } from "@/registry/ui/motion-gradient-shimmer-obsidian";
import { MotionGradientShimmerCyberpunk } from "@/registry/ui/motion-gradient-shimmer-cyberpunk";
import { MotionGradientShimmerEmerald } from "@/registry/ui/motion-gradient-shimmer-emerald";
import { MotionGradientShimmerSapphire } from "@/registry/ui/motion-gradient-shimmer-sapphire";
import { MotionGradientShimmerAmethyst } from "@/registry/ui/motion-gradient-shimmer-amethyst";
import { MotionGradientShimmerSunset } from "@/registry/ui/motion-gradient-shimmer-sunset";
import { MotionGradientShimmerMonochrome } from "@/registry/ui/motion-gradient-shimmer-monochrome";
import { MotionGradientShimmerCopper } from "@/registry/ui/motion-gradient-shimmer-copper";
import { MotionGradientShimmerNordic } from "@/registry/ui/motion-gradient-shimmer-nordic";
import { MotionElasticHoverAurora } from "@/registry/ui/motion-elastic-hover-aurora";
import { MotionElasticHoverObsidian } from "@/registry/ui/motion-elastic-hover-obsidian";
import { MotionElasticHoverCyberpunk } from "@/registry/ui/motion-elastic-hover-cyberpunk";
import { MotionElasticHoverEmerald } from "@/registry/ui/motion-elastic-hover-emerald";
import { MotionElasticHoverSapphire } from "@/registry/ui/motion-elastic-hover-sapphire";
import { MotionElasticHoverAmethyst } from "@/registry/ui/motion-elastic-hover-amethyst";
import { MotionElasticHoverSunset } from "@/registry/ui/motion-elastic-hover-sunset";
import { MotionElasticHoverMonochrome } from "@/registry/ui/motion-elastic-hover-monochrome";
import { MotionElasticHoverCopper } from "@/registry/ui/motion-elastic-hover-copper";
import { MotionElasticHoverNordic } from "@/registry/ui/motion-elastic-hover-nordic";
import { MotionStaggeredListAurora } from "@/registry/ui/motion-staggered-list-aurora";
import { MotionStaggeredListObsidian } from "@/registry/ui/motion-staggered-list-obsidian";
import { MotionStaggeredListCyberpunk } from "@/registry/ui/motion-staggered-list-cyberpunk";
import { MotionStaggeredListEmerald } from "@/registry/ui/motion-staggered-list-emerald";
import { MotionStaggeredListSapphire } from "@/registry/ui/motion-staggered-list-sapphire";
import { MotionStaggeredListAmethyst } from "@/registry/ui/motion-staggered-list-amethyst";
import { MotionStaggeredListSunset } from "@/registry/ui/motion-staggered-list-sunset";
import { MotionStaggeredListMonochrome } from "@/registry/ui/motion-staggered-list-monochrome";
import { MotionStaggeredListCopper } from "@/registry/ui/motion-staggered-list-copper";
import { MotionStaggeredListNordic } from "@/registry/ui/motion-staggered-list-nordic";
import { MotionSlidingTabAurora } from "@/registry/ui/motion-sliding-tab-aurora";
import { MotionSlidingTabObsidian } from "@/registry/ui/motion-sliding-tab-obsidian";
import { MotionSlidingTabCyberpunk } from "@/registry/ui/motion-sliding-tab-cyberpunk";
import { MotionSlidingTabEmerald } from "@/registry/ui/motion-sliding-tab-emerald";
import { MotionSlidingTabSapphire } from "@/registry/ui/motion-sliding-tab-sapphire";
import { MotionSlidingTabAmethyst } from "@/registry/ui/motion-sliding-tab-amethyst";
import { MotionSlidingTabSunset } from "@/registry/ui/motion-sliding-tab-sunset";
import { MotionSlidingTabMonochrome } from "@/registry/ui/motion-sliding-tab-monochrome";
import { MotionSlidingTabCopper } from "@/registry/ui/motion-sliding-tab-copper";
import { MotionSlidingTabNordic } from "@/registry/ui/motion-sliding-tab-nordic";
import { MotionSonarPulseAurora } from "@/registry/ui/motion-sonar-pulse-aurora";
import { MotionSonarPulseObsidian } from "@/registry/ui/motion-sonar-pulse-obsidian";
import { MotionSonarPulseCyberpunk } from "@/registry/ui/motion-sonar-pulse-cyberpunk";
import { MotionSonarPulseEmerald } from "@/registry/ui/motion-sonar-pulse-emerald";
import { MotionSonarPulseSapphire } from "@/registry/ui/motion-sonar-pulse-sapphire";
import { MotionSonarPulseAmethyst } from "@/registry/ui/motion-sonar-pulse-amethyst";
import { MotionSonarPulseSunset } from "@/registry/ui/motion-sonar-pulse-sunset";
import { MotionSonarPulseMonochrome } from "@/registry/ui/motion-sonar-pulse-monochrome";
import { MotionSonarPulseCopper } from "@/registry/ui/motion-sonar-pulse-copper";
import { MotionSonarPulseNordic } from "@/registry/ui/motion-sonar-pulse-nordic";
import { MotionSmoothMarqueeAurora } from "@/registry/ui/motion-smooth-marquee-aurora";
import { MotionSmoothMarqueeObsidian } from "@/registry/ui/motion-smooth-marquee-obsidian";
import { MotionSmoothMarqueeCyberpunk } from "@/registry/ui/motion-smooth-marquee-cyberpunk";
import { MotionSmoothMarqueeEmerald } from "@/registry/ui/motion-smooth-marquee-emerald";
import { MotionSmoothMarqueeSapphire } from "@/registry/ui/motion-smooth-marquee-sapphire";
import { MotionSmoothMarqueeAmethyst } from "@/registry/ui/motion-smooth-marquee-amethyst";
import { MotionSmoothMarqueeSunset } from "@/registry/ui/motion-smooth-marquee-sunset";
import { MotionSmoothMarqueeMonochrome } from "@/registry/ui/motion-smooth-marquee-monochrome";
import { MotionSmoothMarqueeCopper } from "@/registry/ui/motion-smooth-marquee-copper";
import { MotionSmoothMarqueeNordic } from "@/registry/ui/motion-smooth-marquee-nordic";
import { MotionSpotlightRadialAurora } from "@/registry/ui/motion-spotlight-radial-aurora";
import { MotionSpotlightRadialObsidian } from "@/registry/ui/motion-spotlight-radial-obsidian";
import { MotionSpotlightRadialCyberpunk } from "@/registry/ui/motion-spotlight-radial-cyberpunk";
import { MotionSpotlightRadialEmerald } from "@/registry/ui/motion-spotlight-radial-emerald";
import { MotionSpotlightRadialSapphire } from "@/registry/ui/motion-spotlight-radial-sapphire";
import { MotionSpotlightRadialAmethyst } from "@/registry/ui/motion-spotlight-radial-amethyst";
import { MotionSpotlightRadialSunset } from "@/registry/ui/motion-spotlight-radial-sunset";
import { MotionSpotlightRadialMonochrome } from "@/registry/ui/motion-spotlight-radial-monochrome";
import { MotionSpotlightRadialCopper } from "@/registry/ui/motion-spotlight-radial-copper";
import { MotionSpotlightRadialNordic } from "@/registry/ui/motion-spotlight-radial-nordic";
import { MotionPingStatusAurora } from "@/registry/ui/motion-ping-status-aurora";
import { MotionPingStatusObsidian } from "@/registry/ui/motion-ping-status-obsidian";
import { MotionPingStatusCyberpunk } from "@/registry/ui/motion-ping-status-cyberpunk";
import { MotionPingStatusEmerald } from "@/registry/ui/motion-ping-status-emerald";
import { MotionPingStatusSapphire } from "@/registry/ui/motion-ping-status-sapphire";
import { MotionPingStatusAmethyst } from "@/registry/ui/motion-ping-status-amethyst";
import { MotionPingStatusSunset } from "@/registry/ui/motion-ping-status-sunset";
import { MotionPingStatusMonochrome } from "@/registry/ui/motion-ping-status-monochrome";
import { MotionPingStatusCopper } from "@/registry/ui/motion-ping-status-copper";
import { MotionPingStatusNordic } from "@/registry/ui/motion-ping-status-nordic";
import { MotionSpringAccordionAurora } from "@/registry/ui/motion-spring-accordion-aurora";
import { MotionSpringAccordionObsidian } from "@/registry/ui/motion-spring-accordion-obsidian";
import { MotionSpringAccordionCyberpunk } from "@/registry/ui/motion-spring-accordion-cyberpunk";
import { MotionSpringAccordionEmerald } from "@/registry/ui/motion-spring-accordion-emerald";
import { MotionSpringAccordionSapphire } from "@/registry/ui/motion-spring-accordion-sapphire";
import { MotionSpringAccordionAmethyst } from "@/registry/ui/motion-spring-accordion-amethyst";
import { MotionSpringAccordionSunset } from "@/registry/ui/motion-spring-accordion-sunset";
import { MotionSpringAccordionMonochrome } from "@/registry/ui/motion-spring-accordion-monochrome";
import { MotionSpringAccordionCopper } from "@/registry/ui/motion-spring-accordion-copper";
import { MotionSpringAccordionNordic } from "@/registry/ui/motion-spring-accordion-nordic";
import { AceternityFloatingDockNebula } from "@/registry/ui/aceternity-floating-dock-nebula";
import { AceternityFloatingDockAurora } from "@/registry/ui/aceternity-floating-dock-aurora";
import { AceternityFloatingDockObsidian } from "@/registry/ui/aceternity-floating-dock-obsidian";
import { AceternityFloatingDockEmerald } from "@/registry/ui/aceternity-floating-dock-emerald";
import { AceternityFloatingDockCrimson } from "@/registry/ui/aceternity-floating-dock-crimson";
import { AceternityFloatingDockCyber } from "@/registry/ui/aceternity-floating-dock-cyber";
import { AceternityFloatingDockSolaris } from "@/registry/ui/aceternity-floating-dock-solaris";
import { AceternityFloatingDockQuartz } from "@/registry/ui/aceternity-floating-dock-quartz";
import { AceternityFloatingDockTitanium } from "@/registry/ui/aceternity-floating-dock-titanium";
import { AceternityFloatingDockStarlight } from "@/registry/ui/aceternity-floating-dock-starlight";
import { AceternityBentoSlotNebula } from "@/registry/ui/aceternity-bento-slot-nebula";
import { AceternityBentoSlotAurora } from "@/registry/ui/aceternity-bento-slot-aurora";
import { AceternityBentoSlotObsidian } from "@/registry/ui/aceternity-bento-slot-obsidian";
import { AceternityBentoSlotEmerald } from "@/registry/ui/aceternity-bento-slot-emerald";
import { AceternityBentoSlotCrimson } from "@/registry/ui/aceternity-bento-slot-crimson";
import { AceternityBentoSlotCyber } from "@/registry/ui/aceternity-bento-slot-cyber";
import { AceternityBentoSlotSolaris } from "@/registry/ui/aceternity-bento-slot-solaris";
import { AceternityBentoSlotQuartz } from "@/registry/ui/aceternity-bento-slot-quartz";
import { AceternityBentoSlotTitanium } from "@/registry/ui/aceternity-bento-slot-titanium";
import { AceternityBentoSlotStarlight } from "@/registry/ui/aceternity-bento-slot-starlight";
import { AceternityCipherVaultNebula } from "@/registry/ui/aceternity-cipher-vault-nebula";
import { AceternityCipherVaultAurora } from "@/registry/ui/aceternity-cipher-vault-aurora";
import { AceternityCipherVaultObsidian } from "@/registry/ui/aceternity-cipher-vault-obsidian";
import { AceternityCipherVaultEmerald } from "@/registry/ui/aceternity-cipher-vault-emerald";
import { AceternityCipherVaultCrimson } from "@/registry/ui/aceternity-cipher-vault-crimson";
import { AceternityCipherVaultCyber } from "@/registry/ui/aceternity-cipher-vault-cyber";
import { AceternityCipherVaultSolaris } from "@/registry/ui/aceternity-cipher-vault-solaris";
import { AceternityCipherVaultQuartz } from "@/registry/ui/aceternity-cipher-vault-quartz";
import { AceternityCipherVaultTitanium } from "@/registry/ui/aceternity-cipher-vault-titanium";
import { AceternityCipherVaultStarlight } from "@/registry/ui/aceternity-cipher-vault-starlight";
import { AceternityWavyGlowNebula } from "@/registry/ui/aceternity-wavy-glow-nebula";
import { AceternityWavyGlowAurora } from "@/registry/ui/aceternity-wavy-glow-aurora";
import { AceternityWavyGlowObsidian } from "@/registry/ui/aceternity-wavy-glow-obsidian";
import { AceternityWavyGlowEmerald } from "@/registry/ui/aceternity-wavy-glow-emerald";
import { AceternityWavyGlowCrimson } from "@/registry/ui/aceternity-wavy-glow-crimson";
import { AceternityWavyGlowCyber } from "@/registry/ui/aceternity-wavy-glow-cyber";
import { AceternityWavyGlowSolaris } from "@/registry/ui/aceternity-wavy-glow-solaris";
import { AceternityWavyGlowQuartz } from "@/registry/ui/aceternity-wavy-glow-quartz";
import { AceternityWavyGlowTitanium } from "@/registry/ui/aceternity-wavy-glow-titanium";
import { AceternityWavyGlowStarlight } from "@/registry/ui/aceternity-wavy-glow-starlight";
import { AceternityLampBeamNebula } from "@/registry/ui/aceternity-lamp-beam-nebula";
import { AceternityLampBeamAurora } from "@/registry/ui/aceternity-lamp-beam-aurora";
import { AceternityLampBeamObsidian } from "@/registry/ui/aceternity-lamp-beam-obsidian";
import { AceternityLampBeamEmerald } from "@/registry/ui/aceternity-lamp-beam-emerald";
import { AceternityLampBeamCrimson } from "@/registry/ui/aceternity-lamp-beam-crimson";
import { AceternityLampBeamCyber } from "@/registry/ui/aceternity-lamp-beam-cyber";
import { AceternityLampBeamSolaris } from "@/registry/ui/aceternity-lamp-beam-solaris";
import { AceternityLampBeamQuartz } from "@/registry/ui/aceternity-lamp-beam-quartz";
import { AceternityLampBeamTitanium } from "@/registry/ui/aceternity-lamp-beam-titanium";
import { AceternityLampBeamStarlight } from "@/registry/ui/aceternity-lamp-beam-starlight";
import { AceternityTiltCardNebula } from "@/registry/ui/aceternity-tilt-card-nebula";
import { AceternityTiltCardAurora } from "@/registry/ui/aceternity-tilt-card-aurora";
import { AceternityTiltCardObsidian } from "@/registry/ui/aceternity-tilt-card-obsidian";
import { AceternityTiltCardEmerald } from "@/registry/ui/aceternity-tilt-card-emerald";
import { AceternityTiltCardCrimson } from "@/registry/ui/aceternity-tilt-card-crimson";
import { AceternityTiltCardCyber } from "@/registry/ui/aceternity-tilt-card-cyber";
import { AceternityTiltCardSolaris } from "@/registry/ui/aceternity-tilt-card-solaris";
import { AceternityTiltCardQuartz } from "@/registry/ui/aceternity-tilt-card-quartz";
import { AceternityTiltCardTitanium } from "@/registry/ui/aceternity-tilt-card-titanium";
import { AceternityTiltCardStarlight } from "@/registry/ui/aceternity-tilt-card-starlight";
import { AceternityDirectionalSlideNebula } from "@/registry/ui/aceternity-directional-slide-nebula";
import { AceternityDirectionalSlideAurora } from "@/registry/ui/aceternity-directional-slide-aurora";
import { AceternityDirectionalSlideObsidian } from "@/registry/ui/aceternity-directional-slide-obsidian";
import { AceternityDirectionalSlideEmerald } from "@/registry/ui/aceternity-directional-slide-emerald";
import { AceternityDirectionalSlideCrimson } from "@/registry/ui/aceternity-directional-slide-crimson";
import { AceternityDirectionalSlideCyber } from "@/registry/ui/aceternity-directional-slide-cyber";
import { AceternityDirectionalSlideSolaris } from "@/registry/ui/aceternity-directional-slide-solaris";
import { AceternityDirectionalSlideQuartz } from "@/registry/ui/aceternity-directional-slide-quartz";
import { AceternityDirectionalSlideTitanium } from "@/registry/ui/aceternity-directional-slide-titanium";
import { AceternityDirectionalSlideStarlight } from "@/registry/ui/aceternity-directional-slide-starlight";
import { AceternityFocusBlurNebula } from "@/registry/ui/aceternity-focus-blur-nebula";
import { AceternityFocusBlurAurora } from "@/registry/ui/aceternity-focus-blur-aurora";
import { AceternityFocusBlurObsidian } from "@/registry/ui/aceternity-focus-blur-obsidian";
import { AceternityFocusBlurEmerald } from "@/registry/ui/aceternity-focus-blur-emerald";
import { AceternityFocusBlurCrimson } from "@/registry/ui/aceternity-focus-blur-crimson";
import { AceternityFocusBlurCyber } from "@/registry/ui/aceternity-focus-blur-cyber";
import { AceternityFocusBlurSolaris } from "@/registry/ui/aceternity-focus-blur-solaris";
import { AceternityFocusBlurQuartz } from "@/registry/ui/aceternity-focus-blur-quartz";
import { AceternityFocusBlurTitanium } from "@/registry/ui/aceternity-focus-blur-titanium";
import { AceternityFocusBlurStarlight } from "@/registry/ui/aceternity-focus-blur-starlight";
import { AceternityPinPerspectiveNebula } from "@/registry/ui/aceternity-pin-perspective-nebula";
import { AceternityPinPerspectiveAurora } from "@/registry/ui/aceternity-pin-perspective-aurora";
import { AceternityPinPerspectiveObsidian } from "@/registry/ui/aceternity-pin-perspective-obsidian";
import { AceternityPinPerspectiveEmerald } from "@/registry/ui/aceternity-pin-perspective-emerald";
import { AceternityPinPerspectiveCrimson } from "@/registry/ui/aceternity-pin-perspective-crimson";
import { AceternityPinPerspectiveCyber } from "@/registry/ui/aceternity-pin-perspective-cyber";
import { AceternityPinPerspectiveSolaris } from "@/registry/ui/aceternity-pin-perspective-solaris";
import { AceternityPinPerspectiveQuartz } from "@/registry/ui/aceternity-pin-perspective-quartz";
import { AceternityPinPerspectiveTitanium } from "@/registry/ui/aceternity-pin-perspective-titanium";
import { AceternityPinPerspectiveStarlight } from "@/registry/ui/aceternity-pin-perspective-starlight";
import { AceternityMovingBorderNebula } from "@/registry/ui/aceternity-moving-border-nebula";
import { AceternityMovingBorderAurora } from "@/registry/ui/aceternity-moving-border-aurora";
import { AceternityMovingBorderObsidian } from "@/registry/ui/aceternity-moving-border-obsidian";
import { AceternityMovingBorderEmerald } from "@/registry/ui/aceternity-moving-border-emerald";
import { AceternityMovingBorderCrimson } from "@/registry/ui/aceternity-moving-border-crimson";
import { AceternityMovingBorderCyber } from "@/registry/ui/aceternity-moving-border-cyber";
import { AceternityMovingBorderSolaris } from "@/registry/ui/aceternity-moving-border-solaris";
import { AceternityMovingBorderQuartz } from "@/registry/ui/aceternity-moving-border-quartz";
import { AceternityMovingBorderTitanium } from "@/registry/ui/aceternity-moving-border-titanium";
import { AceternityMovingBorderStarlight } from "@/registry/ui/aceternity-moving-border-starlight";
import { MagicMarqueeTickerViolet } from "@/registry/ui/magic-marquee-ticker-violet";
import { MagicMarqueeTickerAmber } from "@/registry/ui/magic-marquee-ticker-amber";
import { MagicMarqueeTickerEmerald } from "@/registry/ui/magic-marquee-ticker-emerald";
import { MagicMarqueeTickerCyan } from "@/registry/ui/magic-marquee-ticker-cyan";
import { MagicMarqueeTickerRose } from "@/registry/ui/magic-marquee-ticker-rose";
import { MagicMarqueeTickerIndigo } from "@/registry/ui/magic-marquee-ticker-indigo";
import { MagicMarqueeTickerSlate } from "@/registry/ui/magic-marquee-ticker-slate";
import { MagicMarqueeTickerZinc } from "@/registry/ui/magic-marquee-ticker-zinc";
import { MagicMarqueeTickerFuchsia } from "@/registry/ui/magic-marquee-ticker-fuchsia";
import { MagicMarqueeTickerTeal } from "@/registry/ui/magic-marquee-ticker-teal";
import { MagicOrbitSatellitesViolet } from "@/registry/ui/magic-orbit-satellites-violet";
import { MagicOrbitSatellitesAmber } from "@/registry/ui/magic-orbit-satellites-amber";
import { MagicOrbitSatellitesEmerald } from "@/registry/ui/magic-orbit-satellites-emerald";
import { MagicOrbitSatellitesCyan } from "@/registry/ui/magic-orbit-satellites-cyan";
import { MagicOrbitSatellitesRose } from "@/registry/ui/magic-orbit-satellites-rose";
import { MagicOrbitSatellitesIndigo } from "@/registry/ui/magic-orbit-satellites-indigo";
import { MagicOrbitSatellitesSlate } from "@/registry/ui/magic-orbit-satellites-slate";
import { MagicOrbitSatellitesZinc } from "@/registry/ui/magic-orbit-satellites-zinc";
import { MagicOrbitSatellitesFuchsia } from "@/registry/ui/magic-orbit-satellites-fuchsia";
import { MagicOrbitSatellitesTeal } from "@/registry/ui/magic-orbit-satellites-teal";
import { MagicBorderBeamViolet } from "@/registry/ui/magic-border-beam-violet";
import { MagicBorderBeamAmber } from "@/registry/ui/magic-border-beam-amber";
import { MagicBorderBeamEmerald } from "@/registry/ui/magic-border-beam-emerald";
import { MagicBorderBeamCyan } from "@/registry/ui/magic-border-beam-cyan";
import { MagicBorderBeamRose } from "@/registry/ui/magic-border-beam-rose";
import { MagicBorderBeamIndigo } from "@/registry/ui/magic-border-beam-indigo";
import { MagicBorderBeamSlate } from "@/registry/ui/magic-border-beam-slate";
import { MagicBorderBeamZinc } from "@/registry/ui/magic-border-beam-zinc";
import { MagicBorderBeamFuchsia } from "@/registry/ui/magic-border-beam-fuchsia";
import { MagicBorderBeamTeal } from "@/registry/ui/magic-border-beam-teal";
import { MagicShineButtonViolet } from "@/registry/ui/magic-shine-button-violet";
import { MagicShineButtonAmber } from "@/registry/ui/magic-shine-button-amber";
import { MagicShineButtonEmerald } from "@/registry/ui/magic-shine-button-emerald";
import { MagicShineButtonCyan } from "@/registry/ui/magic-shine-button-cyan";
import { MagicShineButtonRose } from "@/registry/ui/magic-shine-button-rose";
import { MagicShineButtonIndigo } from "@/registry/ui/magic-shine-button-indigo";
import { MagicShineButtonSlate } from "@/registry/ui/magic-shine-button-slate";
import { MagicShineButtonZinc } from "@/registry/ui/magic-shine-button-zinc";
import { MagicShineButtonFuchsia } from "@/registry/ui/magic-shine-button-fuchsia";
import { MagicShineButtonTeal } from "@/registry/ui/magic-shine-button-teal";
import { MagicPulsatingBeaconViolet } from "@/registry/ui/magic-pulsating-beacon-violet";
import { MagicPulsatingBeaconAmber } from "@/registry/ui/magic-pulsating-beacon-amber";
import { MagicPulsatingBeaconEmerald } from "@/registry/ui/magic-pulsating-beacon-emerald";
import { MagicPulsatingBeaconCyan } from "@/registry/ui/magic-pulsating-beacon-cyan";
import { MagicPulsatingBeaconRose } from "@/registry/ui/magic-pulsating-beacon-rose";
import { MagicPulsatingBeaconIndigo } from "@/registry/ui/magic-pulsating-beacon-indigo";
import { MagicPulsatingBeaconSlate } from "@/registry/ui/magic-pulsating-beacon-slate";
import { MagicPulsatingBeaconZinc } from "@/registry/ui/magic-pulsating-beacon-zinc";
import { MagicPulsatingBeaconFuchsia } from "@/registry/ui/magic-pulsating-beacon-fuchsia";
import { MagicPulsatingBeaconTeal } from "@/registry/ui/magic-pulsating-beacon-teal";
import { MagicOdometerCounterViolet } from "@/registry/ui/magic-odometer-counter-violet";
import { MagicOdometerCounterAmber } from "@/registry/ui/magic-odometer-counter-amber";
import { MagicOdometerCounterEmerald } from "@/registry/ui/magic-odometer-counter-emerald";
import { MagicOdometerCounterCyan } from "@/registry/ui/magic-odometer-counter-cyan";
import { MagicOdometerCounterRose } from "@/registry/ui/magic-odometer-counter-rose";
import { MagicOdometerCounterIndigo } from "@/registry/ui/magic-odometer-counter-indigo";
import { MagicOdometerCounterSlate } from "@/registry/ui/magic-odometer-counter-slate";
import { MagicOdometerCounterZinc } from "@/registry/ui/magic-odometer-counter-zinc";
import { MagicOdometerCounterFuchsia } from "@/registry/ui/magic-odometer-counter-fuchsia";
import { MagicOdometerCounterTeal } from "@/registry/ui/magic-odometer-counter-teal";
import { MagicSparkleHeadlineViolet } from "@/registry/ui/magic-sparkle-headline-violet";
import { MagicSparkleHeadlineAmber } from "@/registry/ui/magic-sparkle-headline-amber";
import { MagicSparkleHeadlineEmerald } from "@/registry/ui/magic-sparkle-headline-emerald";
import { MagicSparkleHeadlineCyan } from "@/registry/ui/magic-sparkle-headline-cyan";
import { MagicSparkleHeadlineRose } from "@/registry/ui/magic-sparkle-headline-rose";
import { MagicSparkleHeadlineIndigo } from "@/registry/ui/magic-sparkle-headline-indigo";
import { MagicSparkleHeadlineSlate } from "@/registry/ui/magic-sparkle-headline-slate";
import { MagicSparkleHeadlineZinc } from "@/registry/ui/magic-sparkle-headline-zinc";
import { MagicSparkleHeadlineFuchsia } from "@/registry/ui/magic-sparkle-headline-fuchsia";
import { MagicSparkleHeadlineTeal } from "@/registry/ui/magic-sparkle-headline-teal";
import { MagicFlipWordsViolet } from "@/registry/ui/magic-flip-words-violet";
import { MagicFlipWordsAmber } from "@/registry/ui/magic-flip-words-amber";
import { MagicFlipWordsEmerald } from "@/registry/ui/magic-flip-words-emerald";
import { MagicFlipWordsCyan } from "@/registry/ui/magic-flip-words-cyan";
import { MagicFlipWordsRose } from "@/registry/ui/magic-flip-words-rose";
import { MagicFlipWordsIndigo } from "@/registry/ui/magic-flip-words-indigo";
import { MagicFlipWordsSlate } from "@/registry/ui/magic-flip-words-slate";
import { MagicFlipWordsZinc } from "@/registry/ui/magic-flip-words-zinc";
import { MagicFlipWordsFuchsia } from "@/registry/ui/magic-flip-words-fuchsia";
import { MagicFlipWordsTeal } from "@/registry/ui/magic-flip-words-teal";
import { MagicInteractiveCellViolet } from "@/registry/ui/magic-interactive-cell-violet";
import { MagicInteractiveCellAmber } from "@/registry/ui/magic-interactive-cell-amber";
import { MagicInteractiveCellEmerald } from "@/registry/ui/magic-interactive-cell-emerald";
import { MagicInteractiveCellCyan } from "@/registry/ui/magic-interactive-cell-cyan";
import { MagicInteractiveCellRose } from "@/registry/ui/magic-interactive-cell-rose";
import { MagicInteractiveCellIndigo } from "@/registry/ui/magic-interactive-cell-indigo";
import { MagicInteractiveCellSlate } from "@/registry/ui/magic-interactive-cell-slate";
import { MagicInteractiveCellZinc } from "@/registry/ui/magic-interactive-cell-zinc";
import { MagicInteractiveCellFuchsia } from "@/registry/ui/magic-interactive-cell-fuchsia";
import { MagicInteractiveCellTeal } from "@/registry/ui/magic-interactive-cell-teal";
import { MagicDockUtilityViolet } from "@/registry/ui/magic-dock-utility-violet";
import { MagicDockUtilityAmber } from "@/registry/ui/magic-dock-utility-amber";
import { MagicDockUtilityEmerald } from "@/registry/ui/magic-dock-utility-emerald";
import { MagicDockUtilityCyan } from "@/registry/ui/magic-dock-utility-cyan";
import { MagicDockUtilityRose } from "@/registry/ui/magic-dock-utility-rose";
import { MagicDockUtilityIndigo } from "@/registry/ui/magic-dock-utility-indigo";
import { MagicDockUtilitySlate } from "@/registry/ui/magic-dock-utility-slate";
import { MagicDockUtilityZinc } from "@/registry/ui/magic-dock-utility-zinc";
import { MagicDockUtilityFuchsia } from "@/registry/ui/magic-dock-utility-fuchsia";
import { MagicDockUtilityTeal } from "@/registry/ui/magic-dock-utility-teal";
import { StudioCodeBoxFlat } from "@/registry/ui/studio-code-box-flat";
import { StudioCodeBoxElevated } from "@/registry/ui/studio-code-box-elevated";
import { StudioCodeBoxGlass } from "@/registry/ui/studio-code-box-glass";
import { StudioCodeBoxContrast } from "@/registry/ui/studio-code-box-contrast";
import { StudioCodeBoxCompact } from "@/registry/ui/studio-code-box-compact";
import { StudioCodeBoxExpanded } from "@/registry/ui/studio-code-box-expanded";
import { StudioCodeBoxStealth } from "@/registry/ui/studio-code-box-stealth";
import { StudioCodeBoxOutlined } from "@/registry/ui/studio-code-box-outlined";
import { StudioCodeBoxPill } from "@/registry/ui/studio-code-box-pill";
import { StudioCodeBoxAccented } from "@/registry/ui/studio-code-box-accented";
import { StudioPropsTableFlat } from "@/registry/ui/studio-props-table-flat";
import { StudioPropsTableElevated } from "@/registry/ui/studio-props-table-elevated";
import { StudioPropsTableGlass } from "@/registry/ui/studio-props-table-glass";
import { StudioPropsTableContrast } from "@/registry/ui/studio-props-table-contrast";
import { StudioPropsTableCompact } from "@/registry/ui/studio-props-table-compact";
import { StudioPropsTableExpanded } from "@/registry/ui/studio-props-table-expanded";
import { StudioPropsTableStealth } from "@/registry/ui/studio-props-table-stealth";
import { StudioPropsTableOutlined } from "@/registry/ui/studio-props-table-outlined";
import { StudioPropsTablePill } from "@/registry/ui/studio-props-table-pill";
import { StudioPropsTableAccented } from "@/registry/ui/studio-props-table-accented";
import { StudioThemeSwatchFlat } from "@/registry/ui/studio-theme-swatch-flat";
import { StudioThemeSwatchElevated } from "@/registry/ui/studio-theme-swatch-elevated";
import { StudioThemeSwatchGlass } from "@/registry/ui/studio-theme-swatch-glass";
import { StudioThemeSwatchContrast } from "@/registry/ui/studio-theme-swatch-contrast";
import { StudioThemeSwatchCompact } from "@/registry/ui/studio-theme-swatch-compact";
import { StudioThemeSwatchExpanded } from "@/registry/ui/studio-theme-swatch-expanded";
import { StudioThemeSwatchStealth } from "@/registry/ui/studio-theme-swatch-stealth";
import { StudioThemeSwatchOutlined } from "@/registry/ui/studio-theme-swatch-outlined";
import { StudioThemeSwatchPill } from "@/registry/ui/studio-theme-swatch-pill";
import { StudioThemeSwatchAccented } from "@/registry/ui/studio-theme-swatch-accented";
import { StudioLayoutDiffFlat } from "@/registry/ui/studio-layout-diff-flat";
import { StudioLayoutDiffElevated } from "@/registry/ui/studio-layout-diff-elevated";
import { StudioLayoutDiffGlass } from "@/registry/ui/studio-layout-diff-glass";
import { StudioLayoutDiffContrast } from "@/registry/ui/studio-layout-diff-contrast";
import { StudioLayoutDiffCompact } from "@/registry/ui/studio-layout-diff-compact";
import { StudioLayoutDiffExpanded } from "@/registry/ui/studio-layout-diff-expanded";
import { StudioLayoutDiffStealth } from "@/registry/ui/studio-layout-diff-stealth";
import { StudioLayoutDiffOutlined } from "@/registry/ui/studio-layout-diff-outlined";
import { StudioLayoutDiffPill } from "@/registry/ui/studio-layout-diff-pill";
import { StudioLayoutDiffAccented } from "@/registry/ui/studio-layout-diff-accented";
import { StudioBreakpointBarFlat } from "@/registry/ui/studio-breakpoint-bar-flat";
import { StudioBreakpointBarElevated } from "@/registry/ui/studio-breakpoint-bar-elevated";
import { StudioBreakpointBarGlass } from "@/registry/ui/studio-breakpoint-bar-glass";
import { StudioBreakpointBarContrast } from "@/registry/ui/studio-breakpoint-bar-contrast";
import { StudioBreakpointBarCompact } from "@/registry/ui/studio-breakpoint-bar-compact";
import { StudioBreakpointBarExpanded } from "@/registry/ui/studio-breakpoint-bar-expanded";
import { StudioBreakpointBarStealth } from "@/registry/ui/studio-breakpoint-bar-stealth";
import { StudioBreakpointBarOutlined } from "@/registry/ui/studio-breakpoint-bar-outlined";
import { StudioBreakpointBarPill } from "@/registry/ui/studio-breakpoint-bar-pill";
import { StudioBreakpointBarAccented } from "@/registry/ui/studio-breakpoint-bar-accented";
import { StudioDepGraphFlat } from "@/registry/ui/studio-dep-graph-flat";
import { StudioDepGraphElevated } from "@/registry/ui/studio-dep-graph-elevated";
import { StudioDepGraphGlass } from "@/registry/ui/studio-dep-graph-glass";
import { StudioDepGraphContrast } from "@/registry/ui/studio-dep-graph-contrast";
import { StudioDepGraphCompact } from "@/registry/ui/studio-dep-graph-compact";
import { StudioDepGraphExpanded } from "@/registry/ui/studio-dep-graph-expanded";
import { StudioDepGraphStealth } from "@/registry/ui/studio-dep-graph-stealth";
import { StudioDepGraphOutlined } from "@/registry/ui/studio-dep-graph-outlined";
import { StudioDepGraphPill } from "@/registry/ui/studio-dep-graph-pill";
import { StudioDepGraphAccented } from "@/registry/ui/studio-dep-graph-accented";
import { StudioA11yBadgeFlat } from "@/registry/ui/studio-a11y-badge-flat";
import { StudioA11yBadgeElevated } from "@/registry/ui/studio-a11y-badge-elevated";
import { StudioA11yBadgeGlass } from "@/registry/ui/studio-a11y-badge-glass";
import { StudioA11yBadgeContrast } from "@/registry/ui/studio-a11y-badge-contrast";
import { StudioA11yBadgeCompact } from "@/registry/ui/studio-a11y-badge-compact";
import { StudioA11yBadgeExpanded } from "@/registry/ui/studio-a11y-badge-expanded";
import { StudioA11yBadgeStealth } from "@/registry/ui/studio-a11y-badge-stealth";
import { StudioA11yBadgeOutlined } from "@/registry/ui/studio-a11y-badge-outlined";
import { StudioA11yBadgePill } from "@/registry/ui/studio-a11y-badge-pill";
import { StudioA11yBadgeAccented } from "@/registry/ui/studio-a11y-badge-accented";
import { StudioExportJsonFlat } from "@/registry/ui/studio-export-json-flat";
import { StudioExportJsonElevated } from "@/registry/ui/studio-export-json-elevated";
import { StudioExportJsonGlass } from "@/registry/ui/studio-export-json-glass";
import { StudioExportJsonContrast } from "@/registry/ui/studio-export-json-contrast";
import { StudioExportJsonCompact } from "@/registry/ui/studio-export-json-compact";
import { StudioExportJsonExpanded } from "@/registry/ui/studio-export-json-expanded";
import { StudioExportJsonStealth } from "@/registry/ui/studio-export-json-stealth";
import { StudioExportJsonOutlined } from "@/registry/ui/studio-export-json-outlined";
import { StudioExportJsonPill } from "@/registry/ui/studio-export-json-pill";
import { StudioExportJsonAccented } from "@/registry/ui/studio-export-json-accented";
import { StudioPerfPillFlat } from "@/registry/ui/studio-perf-pill-flat";
import { StudioPerfPillElevated } from "@/registry/ui/studio-perf-pill-elevated";
import { StudioPerfPillGlass } from "@/registry/ui/studio-perf-pill-glass";
import { StudioPerfPillContrast } from "@/registry/ui/studio-perf-pill-contrast";
import { StudioPerfPillCompact } from "@/registry/ui/studio-perf-pill-compact";
import { StudioPerfPillExpanded } from "@/registry/ui/studio-perf-pill-expanded";
import { StudioPerfPillStealth } from "@/registry/ui/studio-perf-pill-stealth";
import { StudioPerfPillOutlined } from "@/registry/ui/studio-perf-pill-outlined";
import { StudioPerfPillPill } from "@/registry/ui/studio-perf-pill-pill";
import { StudioPerfPillAccented } from "@/registry/ui/studio-perf-pill-accented";
import { StudioSourceLinkFlat } from "@/registry/ui/studio-source-link-flat";
import { StudioSourceLinkElevated } from "@/registry/ui/studio-source-link-elevated";
import { StudioSourceLinkGlass } from "@/registry/ui/studio-source-link-glass";
import { StudioSourceLinkContrast } from "@/registry/ui/studio-source-link-contrast";
import { StudioSourceLinkCompact } from "@/registry/ui/studio-source-link-compact";
import { StudioSourceLinkExpanded } from "@/registry/ui/studio-source-link-expanded";
import { StudioSourceLinkStealth } from "@/registry/ui/studio-source-link-stealth";
import { StudioSourceLinkOutlined } from "@/registry/ui/studio-source-link-outlined";
import { StudioSourceLinkPill } from "@/registry/ui/studio-source-link-pill";
import { StudioSourceLinkAccented } from "@/registry/ui/studio-source-link-accented";
import { HoverMagneticTileCyber } from "@/registry/ui/hover-magnetic-tile-cyber";
import { HoverMagneticTileNeon } from "@/registry/ui/hover-magnetic-tile-neon";
import { HoverMagneticTileStealth } from "@/registry/ui/hover-magnetic-tile-stealth";
import { HoverMagneticTileAmber } from "@/registry/ui/hover-magnetic-tile-amber";
import { HoverMagneticTileEmerald } from "@/registry/ui/hover-magnetic-tile-emerald";
import { HoverMagneticTileIndigo } from "@/registry/ui/hover-magnetic-tile-indigo";
import { HoverMagneticTileRose } from "@/registry/ui/hover-magnetic-tile-rose";
import { HoverMagneticTileTeal } from "@/registry/ui/hover-magnetic-tile-teal";
import { HoverMagneticTileMinimal } from "@/registry/ui/hover-magnetic-tile-minimal";
import { HoverMagneticTileTactile } from "@/registry/ui/hover-magnetic-tile-tactile";
import { HoverWaterRippleCyber } from "@/registry/ui/hover-water-ripple-cyber";
import { HoverWaterRippleNeon } from "@/registry/ui/hover-water-ripple-neon";
import { HoverWaterRippleStealth } from "@/registry/ui/hover-water-ripple-stealth";
import { HoverWaterRippleAmber } from "@/registry/ui/hover-water-ripple-amber";
import { HoverWaterRippleEmerald } from "@/registry/ui/hover-water-ripple-emerald";
import { HoverWaterRippleIndigo } from "@/registry/ui/hover-water-ripple-indigo";
import { HoverWaterRippleRose } from "@/registry/ui/hover-water-ripple-rose";
import { HoverWaterRippleTeal } from "@/registry/ui/hover-water-ripple-teal";
import { HoverWaterRippleMinimal } from "@/registry/ui/hover-water-ripple-minimal";
import { HoverWaterRippleTactile } from "@/registry/ui/hover-water-ripple-tactile";
import { HoverGlitchBadgeCyber } from "@/registry/ui/hover-glitch-badge-cyber";
import { HoverGlitchBadgeNeon } from "@/registry/ui/hover-glitch-badge-neon";
import { HoverGlitchBadgeStealth } from "@/registry/ui/hover-glitch-badge-stealth";
import { HoverGlitchBadgeAmber } from "@/registry/ui/hover-glitch-badge-amber";
import { HoverGlitchBadgeEmerald } from "@/registry/ui/hover-glitch-badge-emerald";
import { HoverGlitchBadgeIndigo } from "@/registry/ui/hover-glitch-badge-indigo";
import { HoverGlitchBadgeRose } from "@/registry/ui/hover-glitch-badge-rose";
import { HoverGlitchBadgeTeal } from "@/registry/ui/hover-glitch-badge-teal";
import { HoverGlitchBadgeMinimal } from "@/registry/ui/hover-glitch-badge-minimal";
import { HoverGlitchBadgeTactile } from "@/registry/ui/hover-glitch-badge-tactile";
import { HoverFuzzyNoiseCyber } from "@/registry/ui/hover-fuzzy-noise-cyber";
import { HoverFuzzyNoiseNeon } from "@/registry/ui/hover-fuzzy-noise-neon";
import { HoverFuzzyNoiseStealth } from "@/registry/ui/hover-fuzzy-noise-stealth";
import { HoverFuzzyNoiseAmber } from "@/registry/ui/hover-fuzzy-noise-amber";
import { HoverFuzzyNoiseEmerald } from "@/registry/ui/hover-fuzzy-noise-emerald";
import { HoverFuzzyNoiseIndigo } from "@/registry/ui/hover-fuzzy-noise-indigo";
import { HoverFuzzyNoiseRose } from "@/registry/ui/hover-fuzzy-noise-rose";
import { HoverFuzzyNoiseTeal } from "@/registry/ui/hover-fuzzy-noise-teal";
import { HoverFuzzyNoiseMinimal } from "@/registry/ui/hover-fuzzy-noise-minimal";
import { HoverFuzzyNoiseTactile } from "@/registry/ui/hover-fuzzy-noise-tactile";
import { HoverElasticTabCyber } from "@/registry/ui/hover-elastic-tab-cyber";
import { HoverElasticTabNeon } from "@/registry/ui/hover-elastic-tab-neon";
import { HoverElasticTabStealth } from "@/registry/ui/hover-elastic-tab-stealth";
import { HoverElasticTabAmber } from "@/registry/ui/hover-elastic-tab-amber";
import { HoverElasticTabEmerald } from "@/registry/ui/hover-elastic-tab-emerald";
import { HoverElasticTabIndigo } from "@/registry/ui/hover-elastic-tab-indigo";
import { HoverElasticTabRose } from "@/registry/ui/hover-elastic-tab-rose";
import { HoverElasticTabTeal } from "@/registry/ui/hover-elastic-tab-teal";
import { HoverElasticTabMinimal } from "@/registry/ui/hover-elastic-tab-minimal";
import { HoverElasticTabTactile } from "@/registry/ui/hover-elastic-tab-tactile";
import { HoverGravityButtonCyber } from "@/registry/ui/hover-gravity-button-cyber";
import { HoverGravityButtonNeon } from "@/registry/ui/hover-gravity-button-neon";
import { HoverGravityButtonStealth } from "@/registry/ui/hover-gravity-button-stealth";
import { HoverGravityButtonAmber } from "@/registry/ui/hover-gravity-button-amber";
import { HoverGravityButtonEmerald } from "@/registry/ui/hover-gravity-button-emerald";
import { HoverGravityButtonIndigo } from "@/registry/ui/hover-gravity-button-indigo";
import { HoverGravityButtonRose } from "@/registry/ui/hover-gravity-button-rose";
import { HoverGravityButtonTeal } from "@/registry/ui/hover-gravity-button-teal";
import { HoverGravityButtonMinimal } from "@/registry/ui/hover-gravity-button-minimal";
import { HoverGravityButtonTactile } from "@/registry/ui/hover-gravity-button-tactile";
import { HoverLiquidCardCyber } from "@/registry/ui/hover-liquid-card-cyber";
import { HoverLiquidCardNeon } from "@/registry/ui/hover-liquid-card-neon";
import { HoverLiquidCardStealth } from "@/registry/ui/hover-liquid-card-stealth";
import { HoverLiquidCardAmber } from "@/registry/ui/hover-liquid-card-amber";
import { HoverLiquidCardEmerald } from "@/registry/ui/hover-liquid-card-emerald";
import { HoverLiquidCardIndigo } from "@/registry/ui/hover-liquid-card-indigo";
import { HoverLiquidCardRose } from "@/registry/ui/hover-liquid-card-rose";
import { HoverLiquidCardTeal } from "@/registry/ui/hover-liquid-card-teal";
import { HoverLiquidCardMinimal } from "@/registry/ui/hover-liquid-card-minimal";
import { HoverLiquidCardTactile } from "@/registry/ui/hover-liquid-card-tactile";
import { HoverClipTextCyber } from "@/registry/ui/hover-clip-text-cyber";
import { HoverClipTextNeon } from "@/registry/ui/hover-clip-text-neon";
import { HoverClipTextStealth } from "@/registry/ui/hover-clip-text-stealth";
import { HoverClipTextAmber } from "@/registry/ui/hover-clip-text-amber";
import { HoverClipTextEmerald } from "@/registry/ui/hover-clip-text-emerald";
import { HoverClipTextIndigo } from "@/registry/ui/hover-clip-text-indigo";
import { HoverClipTextRose } from "@/registry/ui/hover-clip-text-rose";
import { HoverClipTextTeal } from "@/registry/ui/hover-clip-text-teal";
import { HoverClipTextMinimal } from "@/registry/ui/hover-clip-text-minimal";
import { HoverClipTextTactile } from "@/registry/ui/hover-clip-text-tactile";
import { HoverSpotlightTileCyber } from "@/registry/ui/hover-spotlight-tile-cyber";
import { HoverSpotlightTileNeon } from "@/registry/ui/hover-spotlight-tile-neon";
import { HoverSpotlightTileStealth } from "@/registry/ui/hover-spotlight-tile-stealth";
import { HoverSpotlightTileAmber } from "@/registry/ui/hover-spotlight-tile-amber";
import { HoverSpotlightTileEmerald } from "@/registry/ui/hover-spotlight-tile-emerald";
import { HoverSpotlightTileIndigo } from "@/registry/ui/hover-spotlight-tile-indigo";
import { HoverSpotlightTileRose } from "@/registry/ui/hover-spotlight-tile-rose";
import { HoverSpotlightTileTeal } from "@/registry/ui/hover-spotlight-tile-teal";
import { HoverSpotlightTileMinimal } from "@/registry/ui/hover-spotlight-tile-minimal";
import { HoverSpotlightTileTactile } from "@/registry/ui/hover-spotlight-tile-tactile";
import { HoverTiltPlateCyber } from "@/registry/ui/hover-tilt-plate-cyber";
import { HoverTiltPlateNeon } from "@/registry/ui/hover-tilt-plate-neon";
import { HoverTiltPlateStealth } from "@/registry/ui/hover-tilt-plate-stealth";
import { HoverTiltPlateAmber } from "@/registry/ui/hover-tilt-plate-amber";
import { HoverTiltPlateEmerald } from "@/registry/ui/hover-tilt-plate-emerald";
import { HoverTiltPlateIndigo } from "@/registry/ui/hover-tilt-plate-indigo";
import { HoverTiltPlateRose } from "@/registry/ui/hover-tilt-plate-rose";
import { HoverTiltPlateTeal } from "@/registry/ui/hover-tilt-plate-teal";
import { HoverTiltPlateMinimal } from "@/registry/ui/hover-tilt-plate-minimal";
import { HoverTiltPlateTactile } from "@/registry/ui/hover-tilt-plate-tactile";
import { HyperBlockHeroHeadlineModern } from "@/registry/ui/hyper-block-hero-headline-modern";
import { HyperBlockHeroHeadlineGlass } from "@/registry/ui/hyper-block-hero-headline-glass";
import { HyperBlockHeroHeadlineContrast } from "@/registry/ui/hyper-block-hero-headline-contrast";
import { HyperBlockHeroHeadlineCompact } from "@/registry/ui/hyper-block-hero-headline-compact";
import { HyperBlockHeroHeadlinePill } from "@/registry/ui/hyper-block-hero-headline-pill";
import { HyperBlockPricingCardModern } from "@/registry/ui/hyper-block-pricing-card-modern";
import { HyperBlockPricingCardGlass } from "@/registry/ui/hyper-block-pricing-card-glass";
import { HyperBlockPricingCardContrast } from "@/registry/ui/hyper-block-pricing-card-contrast";
import { HyperBlockPricingCardCompact } from "@/registry/ui/hyper-block-pricing-card-compact";
import { HyperBlockPricingCardPill } from "@/registry/ui/hyper-block-pricing-card-pill";
import { HyperBlockFaqItemModern } from "@/registry/ui/hyper-block-faq-item-modern";
import { HyperBlockFaqItemGlass } from "@/registry/ui/hyper-block-faq-item-glass";
import { HyperBlockFaqItemContrast } from "@/registry/ui/hyper-block-faq-item-contrast";
import { HyperBlockFaqItemCompact } from "@/registry/ui/hyper-block-faq-item-compact";
import { HyperBlockFaqItemPill } from "@/registry/ui/hyper-block-faq-item-pill";
import { HyperBlockTestimonialRowModern } from "@/registry/ui/hyper-block-testimonial-row-modern";
import { HyperBlockTestimonialRowGlass } from "@/registry/ui/hyper-block-testimonial-row-glass";
import { HyperBlockTestimonialRowContrast } from "@/registry/ui/hyper-block-testimonial-row-contrast";
import { HyperBlockTestimonialRowCompact } from "@/registry/ui/hyper-block-testimonial-row-compact";
import { HyperBlockTestimonialRowPill } from "@/registry/ui/hyper-block-testimonial-row-pill";
import { HyperBlockNewsletterBoxModern } from "@/registry/ui/hyper-block-newsletter-box-modern";
import { HyperBlockNewsletterBoxGlass } from "@/registry/ui/hyper-block-newsletter-box-glass";
import { HyperBlockNewsletterBoxContrast } from "@/registry/ui/hyper-block-newsletter-box-contrast";
import { HyperBlockNewsletterBoxCompact } from "@/registry/ui/hyper-block-newsletter-box-compact";
import { HyperBlockNewsletterBoxPill } from "@/registry/ui/hyper-block-newsletter-box-pill";
import { HyperBlockCookieBarModern } from "@/registry/ui/hyper-block-cookie-bar-modern";
import { HyperBlockCookieBarGlass } from "@/registry/ui/hyper-block-cookie-bar-glass";
import { HyperBlockCookieBarContrast } from "@/registry/ui/hyper-block-cookie-bar-contrast";
import { HyperBlockCookieBarCompact } from "@/registry/ui/hyper-block-cookie-bar-compact";
import { HyperBlockCookieBarPill } from "@/registry/ui/hyper-block-cookie-bar-pill";
import { HyperBlockAnnouncementTopModern } from "@/registry/ui/hyper-block-announcement-top-modern";
import { HyperBlockAnnouncementTopGlass } from "@/registry/ui/hyper-block-announcement-top-glass";
import { HyperBlockAnnouncementTopContrast } from "@/registry/ui/hyper-block-announcement-top-contrast";
import { HyperBlockAnnouncementTopCompact } from "@/registry/ui/hyper-block-announcement-top-compact";
import { HyperBlockAnnouncementTopPill } from "@/registry/ui/hyper-block-announcement-top-pill";
import { HyperBlockTeamMemberModern } from "@/registry/ui/hyper-block-team-member-modern";
import { HyperBlockTeamMemberGlass } from "@/registry/ui/hyper-block-team-member-glass";
import { HyperBlockTeamMemberContrast } from "@/registry/ui/hyper-block-team-member-contrast";
import { HyperBlockTeamMemberCompact } from "@/registry/ui/hyper-block-team-member-compact";
import { HyperBlockTeamMemberPill } from "@/registry/ui/hyper-block-team-member-pill";
import { HyperBlockLogoWallModern } from "@/registry/ui/hyper-block-logo-wall-modern";
import { HyperBlockLogoWallGlass } from "@/registry/ui/hyper-block-logo-wall-glass";
import { HyperBlockLogoWallContrast } from "@/registry/ui/hyper-block-logo-wall-contrast";
import { HyperBlockLogoWallCompact } from "@/registry/ui/hyper-block-logo-wall-compact";
import { HyperBlockLogoWallPill } from "@/registry/ui/hyper-block-logo-wall-pill";
import { HyperBlockFeatureCompareModern } from "@/registry/ui/hyper-block-feature-compare-modern";
import { HyperBlockFeatureCompareGlass } from "@/registry/ui/hyper-block-feature-compare-glass";
import { HyperBlockFeatureCompareContrast } from "@/registry/ui/hyper-block-feature-compare-contrast";
import { HyperBlockFeatureCompareCompact } from "@/registry/ui/hyper-block-feature-compare-compact";
import { HyperBlockFeatureComparePill } from "@/registry/ui/hyper-block-feature-compare-pill";
import { HyperBlockChangelogBadgeModern } from "@/registry/ui/hyper-block-changelog-badge-modern";
import { HyperBlockChangelogBadgeGlass } from "@/registry/ui/hyper-block-changelog-badge-glass";
import { HyperBlockChangelogBadgeContrast } from "@/registry/ui/hyper-block-changelog-badge-contrast";
import { HyperBlockChangelogBadgeCompact } from "@/registry/ui/hyper-block-changelog-badge-compact";
import { HyperBlockChangelogBadgePill } from "@/registry/ui/hyper-block-changelog-badge-pill";
import { HyperBlockSupportCardModern } from "@/registry/ui/hyper-block-support-card-modern";
import { HyperBlockSupportCardGlass } from "@/registry/ui/hyper-block-support-card-glass";
import { HyperBlockSupportCardContrast } from "@/registry/ui/hyper-block-support-card-contrast";
import { HyperBlockSupportCardCompact } from "@/registry/ui/hyper-block-support-card-compact";
import { HyperBlockSupportCardPill } from "@/registry/ui/hyper-block-support-card-pill";
import { HyperBlockDownloadCtaModern } from "@/registry/ui/hyper-block-download-cta-modern";
import { HyperBlockDownloadCtaGlass } from "@/registry/ui/hyper-block-download-cta-glass";
import { HyperBlockDownloadCtaContrast } from "@/registry/ui/hyper-block-download-cta-contrast";
import { HyperBlockDownloadCtaCompact } from "@/registry/ui/hyper-block-download-cta-compact";
import { HyperBlockDownloadCtaPill } from "@/registry/ui/hyper-block-download-cta-pill";
import { HyperBlockStatsStripModern } from "@/registry/ui/hyper-block-stats-strip-modern";
import { HyperBlockStatsStripGlass } from "@/registry/ui/hyper-block-stats-strip-glass";
import { HyperBlockStatsStripContrast } from "@/registry/ui/hyper-block-stats-strip-contrast";
import { HyperBlockStatsStripCompact } from "@/registry/ui/hyper-block-stats-strip-compact";
import { HyperBlockStatsStripPill } from "@/registry/ui/hyper-block-stats-strip-pill";
import { HyperBlockTimelineNodeModern } from "@/registry/ui/hyper-block-timeline-node-modern";
import { HyperBlockTimelineNodeGlass } from "@/registry/ui/hyper-block-timeline-node-glass";
import { HyperBlockTimelineNodeContrast } from "@/registry/ui/hyper-block-timeline-node-contrast";
import { HyperBlockTimelineNodeCompact } from "@/registry/ui/hyper-block-timeline-node-compact";
import { HyperBlockTimelineNodePill } from "@/registry/ui/hyper-block-timeline-node-pill";
import { CultProScrubberHeadProDark } from "@/registry/ui/cult-pro-scrubber-head-pro-dark";
import { CultProScrubberHeadStudioSlate } from "@/registry/ui/cult-pro-scrubber-head-studio-slate";
import { CultProScrubberHeadNeonAccent } from "@/registry/ui/cult-pro-scrubber-head-neon-accent";
import { CultProScrubberHeadMinimalOutline } from "@/registry/ui/cult-pro-scrubber-head-minimal-outline";
import { CultProScrubberHeadGlassFrost } from "@/registry/ui/cult-pro-scrubber-head-glass-frost";
import { CultProColorWheelProDark } from "@/registry/ui/cult-pro-color-wheel-pro-dark";
import { CultProColorWheelStudioSlate } from "@/registry/ui/cult-pro-color-wheel-studio-slate";
import { CultProColorWheelNeonAccent } from "@/registry/ui/cult-pro-color-wheel-neon-accent";
import { CultProColorWheelMinimalOutline } from "@/registry/ui/cult-pro-color-wheel-minimal-outline";
import { CultProColorWheelGlassFrost } from "@/registry/ui/cult-pro-color-wheel-glass-frost";
import { CultProGainKnobProDark } from "@/registry/ui/cult-pro-gain-knob-pro-dark";
import { CultProGainKnobStudioSlate } from "@/registry/ui/cult-pro-gain-knob-studio-slate";
import { CultProGainKnobNeonAccent } from "@/registry/ui/cult-pro-gain-knob-neon-accent";
import { CultProGainKnobMinimalOutline } from "@/registry/ui/cult-pro-gain-knob-minimal-outline";
import { CultProGainKnobGlassFrost } from "@/registry/ui/cult-pro-gain-knob-glass-frost";
import { CultProPanSliderProDark } from "@/registry/ui/cult-pro-pan-slider-pro-dark";
import { CultProPanSliderStudioSlate } from "@/registry/ui/cult-pro-pan-slider-studio-slate";
import { CultProPanSliderNeonAccent } from "@/registry/ui/cult-pro-pan-slider-neon-accent";
import { CultProPanSliderMinimalOutline } from "@/registry/ui/cult-pro-pan-slider-minimal-outline";
import { CultProPanSliderGlassFrost } from "@/registry/ui/cult-pro-pan-slider-glass-frost";
import { CultProVumeterPeakProDark } from "@/registry/ui/cult-pro-vumeter-peak-pro-dark";
import { CultProVumeterPeakStudioSlate } from "@/registry/ui/cult-pro-vumeter-peak-studio-slate";
import { CultProVumeterPeakNeonAccent } from "@/registry/ui/cult-pro-vumeter-peak-neon-accent";
import { CultProVumeterPeakMinimalOutline } from "@/registry/ui/cult-pro-vumeter-peak-minimal-outline";
import { CultProVumeterPeakGlassFrost } from "@/registry/ui/cult-pro-vumeter-peak-glass-frost";
import { CultProCodecBadgeProDark } from "@/registry/ui/cult-pro-codec-badge-pro-dark";
import { CultProCodecBadgeStudioSlate } from "@/registry/ui/cult-pro-codec-badge-studio-slate";
import { CultProCodecBadgeNeonAccent } from "@/registry/ui/cult-pro-codec-badge-neon-accent";
import { CultProCodecBadgeMinimalOutline } from "@/registry/ui/cult-pro-codec-badge-minimal-outline";
import { CultProCodecBadgeGlassFrost } from "@/registry/ui/cult-pro-codec-badge-glass-frost";
import { CultProAspectRatioProDark } from "@/registry/ui/cult-pro-aspect-ratio-pro-dark";
import { CultProAspectRatioStudioSlate } from "@/registry/ui/cult-pro-aspect-ratio-studio-slate";
import { CultProAspectRatioNeonAccent } from "@/registry/ui/cult-pro-aspect-ratio-neon-accent";
import { CultProAspectRatioMinimalOutline } from "@/registry/ui/cult-pro-aspect-ratio-minimal-outline";
import { CultProAspectRatioGlassFrost } from "@/registry/ui/cult-pro-aspect-ratio-glass-frost";
import { CultProAnchorPointProDark } from "@/registry/ui/cult-pro-anchor-point-pro-dark";
import { CultProAnchorPointStudioSlate } from "@/registry/ui/cult-pro-anchor-point-studio-slate";
import { CultProAnchorPointNeonAccent } from "@/registry/ui/cult-pro-anchor-point-neon-accent";
import { CultProAnchorPointMinimalOutline } from "@/registry/ui/cult-pro-anchor-point-minimal-outline";
import { CultProAnchorPointGlassFrost } from "@/registry/ui/cult-pro-anchor-point-glass-frost";
import { CultProHandleNodeProDark } from "@/registry/ui/cult-pro-handle-node-pro-dark";
import { CultProHandleNodeStudioSlate } from "@/registry/ui/cult-pro-handle-node-studio-slate";
import { CultProHandleNodeNeonAccent } from "@/registry/ui/cult-pro-handle-node-neon-accent";
import { CultProHandleNodeMinimalOutline } from "@/registry/ui/cult-pro-handle-node-minimal-outline";
import { CultProHandleNodeGlassFrost } from "@/registry/ui/cult-pro-handle-node-glass-frost";
import { CultProFpsMarkerProDark } from "@/registry/ui/cult-pro-fps-marker-pro-dark";
import { CultProFpsMarkerStudioSlate } from "@/registry/ui/cult-pro-fps-marker-studio-slate";
import { CultProFpsMarkerNeonAccent } from "@/registry/ui/cult-pro-fps-marker-neon-accent";
import { CultProFpsMarkerMinimalOutline } from "@/registry/ui/cult-pro-fps-marker-minimal-outline";
import { CultProFpsMarkerGlassFrost } from "@/registry/ui/cult-pro-fps-marker-glass-frost";
import { CultProExposurePillProDark } from "@/registry/ui/cult-pro-exposure-pill-pro-dark";
import { CultProExposurePillStudioSlate } from "@/registry/ui/cult-pro-exposure-pill-studio-slate";
import { CultProExposurePillNeonAccent } from "@/registry/ui/cult-pro-exposure-pill-neon-accent";
import { CultProExposurePillMinimalOutline } from "@/registry/ui/cult-pro-exposure-pill-minimal-outline";
import { CultProExposurePillGlassFrost } from "@/registry/ui/cult-pro-exposure-pill-glass-frost";
import { CultProLutCardProDark } from "@/registry/ui/cult-pro-lut-card-pro-dark";
import { CultProLutCardStudioSlate } from "@/registry/ui/cult-pro-lut-card-studio-slate";
import { CultProLutCardNeonAccent } from "@/registry/ui/cult-pro-lut-card-neon-accent";
import { CultProLutCardMinimalOutline } from "@/registry/ui/cult-pro-lut-card-minimal-outline";
import { CultProLutCardGlassFrost } from "@/registry/ui/cult-pro-lut-card-glass-frost";
import { CultProAudioLaneProDark } from "@/registry/ui/cult-pro-audio-lane-pro-dark";
import { CultProAudioLaneStudioSlate } from "@/registry/ui/cult-pro-audio-lane-studio-slate";
import { CultProAudioLaneNeonAccent } from "@/registry/ui/cult-pro-audio-lane-neon-accent";
import { CultProAudioLaneMinimalOutline } from "@/registry/ui/cult-pro-audio-lane-minimal-outline";
import { CultProAudioLaneGlassFrost } from "@/registry/ui/cult-pro-audio-lane-glass-frost";
import { CultProClipWarningProDark } from "@/registry/ui/cult-pro-clip-warning-pro-dark";
import { CultProClipWarningStudioSlate } from "@/registry/ui/cult-pro-clip-warning-studio-slate";
import { CultProClipWarningNeonAccent } from "@/registry/ui/cult-pro-clip-warning-neon-accent";
import { CultProClipWarningMinimalOutline } from "@/registry/ui/cult-pro-clip-warning-minimal-outline";
import { CultProClipWarningGlassFrost } from "@/registry/ui/cult-pro-clip-warning-glass-frost";
import { CultProKeyframePinProDark } from "@/registry/ui/cult-pro-keyframe-pin-pro-dark";
import { CultProKeyframePinStudioSlate } from "@/registry/ui/cult-pro-keyframe-pin-studio-slate";
import { CultProKeyframePinNeonAccent } from "@/registry/ui/cult-pro-keyframe-pin-neon-accent";
import { CultProKeyframePinMinimalOutline } from "@/registry/ui/cult-pro-keyframe-pin-minimal-outline";
import { CultProKeyframePinGlassFrost } from "@/registry/ui/cult-pro-keyframe-pin-glass-frost";

export const componentMap: Record<string, React.ComponentType<any>> = {
  "tremor-mrr-flow-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowSparkline {...props} />
    </div>
  ),
  "tremor-mrr-flow-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowRadialGauge {...props} />
    </div>
  ),
  "tremor-mrr-flow-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowDeltaBadge {...props} />
    </div>
  ),
  "tremor-mrr-flow-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowSteppedBar {...props} />
    </div>
  ),
  "tremor-mrr-flow-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowSegmentedPill {...props} />
    </div>
  ),
  "tremor-mrr-flow-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowCalloutCard {...props} />
    </div>
  ),
  "tremor-mrr-flow-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowTargetTracker {...props} />
    </div>
  ),
  "tremor-mrr-flow-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowMiniHistogram {...props} />
    </div>
  ),
  "tremor-mrr-flow-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowTrendIndicator {...props} />
    </div>
  ),
  "tremor-mrr-flow-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrFlowSummaryStat {...props} />
    </div>
  ),
  "tremor-cac-velocity-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocitySparkline {...props} />
    </div>
  ),
  "tremor-cac-velocity-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocityRadialGauge {...props} />
    </div>
  ),
  "tremor-cac-velocity-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocityDeltaBadge {...props} />
    </div>
  ),
  "tremor-cac-velocity-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocitySteppedBar {...props} />
    </div>
  ),
  "tremor-cac-velocity-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocitySegmentedPill {...props} />
    </div>
  ),
  "tremor-cac-velocity-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocityCalloutCard {...props} />
    </div>
  ),
  "tremor-cac-velocity-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocityTargetTracker {...props} />
    </div>
  ),
  "tremor-cac-velocity-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocityMiniHistogram {...props} />
    </div>
  ),
  "tremor-cac-velocity-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocityTrendIndicator {...props} />
    </div>
  ),
  "tremor-cac-velocity-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacVelocitySummaryStat {...props} />
    </div>
  ),
  "tremor-arpu-growth-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthSparkline {...props} />
    </div>
  ),
  "tremor-arpu-growth-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthRadialGauge {...props} />
    </div>
  ),
  "tremor-arpu-growth-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthDeltaBadge {...props} />
    </div>
  ),
  "tremor-arpu-growth-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthSteppedBar {...props} />
    </div>
  ),
  "tremor-arpu-growth-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthSegmentedPill {...props} />
    </div>
  ),
  "tremor-arpu-growth-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthCalloutCard {...props} />
    </div>
  ),
  "tremor-arpu-growth-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthTargetTracker {...props} />
    </div>
  ),
  "tremor-arpu-growth-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthMiniHistogram {...props} />
    </div>
  ),
  "tremor-arpu-growth-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthTrendIndicator {...props} />
    </div>
  ),
  "tremor-arpu-growth-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorArpuGrowthSummaryStat {...props} />
    </div>
  ),
  "tremor-ltv-expansion-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionSparkline {...props} />
    </div>
  ),
  "tremor-ltv-expansion-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionRadialGauge {...props} />
    </div>
  ),
  "tremor-ltv-expansion-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionDeltaBadge {...props} />
    </div>
  ),
  "tremor-ltv-expansion-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionSteppedBar {...props} />
    </div>
  ),
  "tremor-ltv-expansion-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionSegmentedPill {...props} />
    </div>
  ),
  "tremor-ltv-expansion-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionCalloutCard {...props} />
    </div>
  ),
  "tremor-ltv-expansion-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionTargetTracker {...props} />
    </div>
  ),
  "tremor-ltv-expansion-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionMiniHistogram {...props} />
    </div>
  ),
  "tremor-ltv-expansion-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionTrendIndicator {...props} />
    </div>
  ),
  "tremor-ltv-expansion-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLtvExpansionSummaryStat {...props} />
    </div>
  ),
  "tremor-cohort-retention-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionSparkline {...props} />
    </div>
  ),
  "tremor-cohort-retention-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionRadialGauge {...props} />
    </div>
  ),
  "tremor-cohort-retention-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionDeltaBadge {...props} />
    </div>
  ),
  "tremor-cohort-retention-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionSteppedBar {...props} />
    </div>
  ),
  "tremor-cohort-retention-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionSegmentedPill {...props} />
    </div>
  ),
  "tremor-cohort-retention-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionCalloutCard {...props} />
    </div>
  ),
  "tremor-cohort-retention-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionTargetTracker {...props} />
    </div>
  ),
  "tremor-cohort-retention-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionMiniHistogram {...props} />
    </div>
  ),
  "tremor-cohort-retention-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionTrendIndicator {...props} />
    </div>
  ),
  "tremor-cohort-retention-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCohortRetentionSummaryStat {...props} />
    </div>
  ),
  "tremor-bandwidth-load-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadSparkline {...props} />
    </div>
  ),
  "tremor-bandwidth-load-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadRadialGauge {...props} />
    </div>
  ),
  "tremor-bandwidth-load-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadDeltaBadge {...props} />
    </div>
  ),
  "tremor-bandwidth-load-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadSteppedBar {...props} />
    </div>
  ),
  "tremor-bandwidth-load-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadSegmentedPill {...props} />
    </div>
  ),
  "tremor-bandwidth-load-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadCalloutCard {...props} />
    </div>
  ),
  "tremor-bandwidth-load-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadTargetTracker {...props} />
    </div>
  ),
  "tremor-bandwidth-load-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadMiniHistogram {...props} />
    </div>
  ),
  "tremor-bandwidth-load-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadTrendIndicator {...props} />
    </div>
  ),
  "tremor-bandwidth-load-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBandwidthLoadSummaryStat {...props} />
    </div>
  ),
  "tremor-error-rate-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateSparkline {...props} />
    </div>
  ),
  "tremor-error-rate-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateRadialGauge {...props} />
    </div>
  ),
  "tremor-error-rate-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateDeltaBadge {...props} />
    </div>
  ),
  "tremor-error-rate-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateSteppedBar {...props} />
    </div>
  ),
  "tremor-error-rate-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateSegmentedPill {...props} />
    </div>
  ),
  "tremor-error-rate-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateCalloutCard {...props} />
    </div>
  ),
  "tremor-error-rate-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateTargetTracker {...props} />
    </div>
  ),
  "tremor-error-rate-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateMiniHistogram {...props} />
    </div>
  ),
  "tremor-error-rate-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateTrendIndicator {...props} />
    </div>
  ),
  "tremor-error-rate-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorErrorRateSummaryStat {...props} />
    </div>
  ),
  "tremor-cloud-spend-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendSparkline {...props} />
    </div>
  ),
  "tremor-cloud-spend-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendRadialGauge {...props} />
    </div>
  ),
  "tremor-cloud-spend-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendDeltaBadge {...props} />
    </div>
  ),
  "tremor-cloud-spend-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendSteppedBar {...props} />
    </div>
  ),
  "tremor-cloud-spend-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendSegmentedPill {...props} />
    </div>
  ),
  "tremor-cloud-spend-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendCalloutCard {...props} />
    </div>
  ),
  "tremor-cloud-spend-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendTargetTracker {...props} />
    </div>
  ),
  "tremor-cloud-spend-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendMiniHistogram {...props} />
    </div>
  ),
  "tremor-cloud-spend-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendTrendIndicator {...props} />
    </div>
  ),
  "tremor-cloud-spend-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCloudSpendSummaryStat {...props} />
    </div>
  ),
  "tremor-db-iops-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsSparkline {...props} />
    </div>
  ),
  "tremor-db-iops-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsRadialGauge {...props} />
    </div>
  ),
  "tremor-db-iops-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsDeltaBadge {...props} />
    </div>
  ),
  "tremor-db-iops-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsSteppedBar {...props} />
    </div>
  ),
  "tremor-db-iops-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsSegmentedPill {...props} />
    </div>
  ),
  "tremor-db-iops-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsCalloutCard {...props} />
    </div>
  ),
  "tremor-db-iops-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsTargetTracker {...props} />
    </div>
  ),
  "tremor-db-iops-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsMiniHistogram {...props} />
    </div>
  ),
  "tremor-db-iops-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsTrendIndicator {...props} />
    </div>
  ),
  "tremor-db-iops-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorDbIopsSummaryStat {...props} />
    </div>
  ),
  "tremor-cache-hit-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitSparkline {...props} />
    </div>
  ),
  "tremor-cache-hit-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitRadialGauge {...props} />
    </div>
  ),
  "tremor-cache-hit-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitDeltaBadge {...props} />
    </div>
  ),
  "tremor-cache-hit-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitSteppedBar {...props} />
    </div>
  ),
  "tremor-cache-hit-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitSegmentedPill {...props} />
    </div>
  ),
  "tremor-cache-hit-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitCalloutCard {...props} />
    </div>
  ),
  "tremor-cache-hit-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitTargetTracker {...props} />
    </div>
  ),
  "tremor-cache-hit-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitMiniHistogram {...props} />
    </div>
  ),
  "tremor-cache-hit-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitTrendIndicator {...props} />
    </div>
  ),
  "tremor-cache-hit-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCacheHitSummaryStat {...props} />
    </div>
  ),
  "tremor-queue-depth-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthSparkline {...props} />
    </div>
  ),
  "tremor-queue-depth-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthRadialGauge {...props} />
    </div>
  ),
  "tremor-queue-depth-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthDeltaBadge {...props} />
    </div>
  ),
  "tremor-queue-depth-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthSteppedBar {...props} />
    </div>
  ),
  "tremor-queue-depth-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthSegmentedPill {...props} />
    </div>
  ),
  "tremor-queue-depth-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthCalloutCard {...props} />
    </div>
  ),
  "tremor-queue-depth-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthTargetTracker {...props} />
    </div>
  ),
  "tremor-queue-depth-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthMiniHistogram {...props} />
    </div>
  ),
  "tremor-queue-depth-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthTrendIndicator {...props} />
    </div>
  ),
  "tremor-queue-depth-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorQueueDepthSummaryStat {...props} />
    </div>
  ),
  "tremor-p99-latency-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencySparkline {...props} />
    </div>
  ),
  "tremor-p99-latency-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencyRadialGauge {...props} />
    </div>
  ),
  "tremor-p99-latency-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencyDeltaBadge {...props} />
    </div>
  ),
  "tremor-p99-latency-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencySteppedBar {...props} />
    </div>
  ),
  "tremor-p99-latency-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencySegmentedPill {...props} />
    </div>
  ),
  "tremor-p99-latency-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencyCalloutCard {...props} />
    </div>
  ),
  "tremor-p99-latency-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencyTargetTracker {...props} />
    </div>
  ),
  "tremor-p99-latency-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencyMiniHistogram {...props} />
    </div>
  ),
  "tremor-p99-latency-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencyTrendIndicator {...props} />
    </div>
  ),
  "tremor-p99-latency-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorP99LatencySummaryStat {...props} />
    </div>
  ),
  "tremor-cpu-load-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadSparkline {...props} />
    </div>
  ),
  "tremor-cpu-load-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadRadialGauge {...props} />
    </div>
  ),
  "tremor-cpu-load-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadDeltaBadge {...props} />
    </div>
  ),
  "tremor-cpu-load-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadSteppedBar {...props} />
    </div>
  ),
  "tremor-cpu-load-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadSegmentedPill {...props} />
    </div>
  ),
  "tremor-cpu-load-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadCalloutCard {...props} />
    </div>
  ),
  "tremor-cpu-load-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadTargetTracker {...props} />
    </div>
  ),
  "tremor-cpu-load-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadMiniHistogram {...props} />
    </div>
  ),
  "tremor-cpu-load-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadTrendIndicator {...props} />
    </div>
  ),
  "tremor-cpu-load-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorCpuLoadSummaryStat {...props} />
    </div>
  ),
  "tremor-ram-usage-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageSparkline {...props} />
    </div>
  ),
  "tremor-ram-usage-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageRadialGauge {...props} />
    </div>
  ),
  "tremor-ram-usage-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageDeltaBadge {...props} />
    </div>
  ),
  "tremor-ram-usage-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageSteppedBar {...props} />
    </div>
  ),
  "tremor-ram-usage-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageSegmentedPill {...props} />
    </div>
  ),
  "tremor-ram-usage-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageCalloutCard {...props} />
    </div>
  ),
  "tremor-ram-usage-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageTargetTracker {...props} />
    </div>
  ),
  "tremor-ram-usage-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageMiniHistogram {...props} />
    </div>
  ),
  "tremor-ram-usage-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageTrendIndicator {...props} />
    </div>
  ),
  "tremor-ram-usage-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorRamUsageSummaryStat {...props} />
    </div>
  ),
  "tremor-nps-score-sparkline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreSparkline {...props} />
    </div>
  ),
  "tremor-nps-score-radial-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreRadialGauge {...props} />
    </div>
  ),
  "tremor-nps-score-delta-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreDeltaBadge {...props} />
    </div>
  ),
  "tremor-nps-score-stepped-bar": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreSteppedBar {...props} />
    </div>
  ),
  "tremor-nps-score-segmented-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreSegmentedPill {...props} />
    </div>
  ),
  "tremor-nps-score-callout-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreCalloutCard {...props} />
    </div>
  ),
  "tremor-nps-score-target-tracker": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreTargetTracker {...props} />
    </div>
  ),
  "tremor-nps-score-mini-histogram": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreMiniHistogram {...props} />
    </div>
  ),
  "tremor-nps-score-trend-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreTrendIndicator {...props} />
    </div>
  ),
  "tremor-nps-score-summary-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNpsScoreSummaryStat {...props} />
    </div>
  ),
  "hyper-saas-launch-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSaasLaunchPill {...props} />
    </div>
  ),
  "hyper-saas-launch-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSaasLaunchStatCard {...props} />
    </div>
  ),
  "hyper-saas-launch-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSaasLaunchBentoTile {...props} />
    </div>
  ),
  "hyper-saas-launch-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSaasLaunchBannerInline {...props} />
    </div>
  ),
  "hyper-saas-launch-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSaasLaunchQuoteCard {...props} />
    </div>
  ),
  "hyper-security-shield-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSecurityShieldPill {...props} />
    </div>
  ),
  "hyper-security-shield-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSecurityShieldStatCard {...props} />
    </div>
  ),
  "hyper-security-shield-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSecurityShieldBentoTile {...props} />
    </div>
  ),
  "hyper-security-shield-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSecurityShieldBannerInline {...props} />
    </div>
  ),
  "hyper-security-shield-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperSecurityShieldQuoteCard {...props} />
    </div>
  ),
  "hyper-ai-copilot-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAiCopilotPill {...props} />
    </div>
  ),
  "hyper-ai-copilot-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAiCopilotStatCard {...props} />
    </div>
  ),
  "hyper-ai-copilot-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAiCopilotBentoTile {...props} />
    </div>
  ),
  "hyper-ai-copilot-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAiCopilotBannerInline {...props} />
    </div>
  ),
  "hyper-ai-copilot-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAiCopilotQuoteCard {...props} />
    </div>
  ),
  "hyper-payment-checkout-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperPaymentCheckoutPill {...props} />
    </div>
  ),
  "hyper-payment-checkout-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperPaymentCheckoutStatCard {...props} />
    </div>
  ),
  "hyper-payment-checkout-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperPaymentCheckoutBentoTile {...props} />
    </div>
  ),
  "hyper-payment-checkout-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperPaymentCheckoutBannerInline {...props} />
    </div>
  ),
  "hyper-payment-checkout-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperPaymentCheckoutQuoteCard {...props} />
    </div>
  ),
  "hyper-compliance-gdpr-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperComplianceGdprPill {...props} />
    </div>
  ),
  "hyper-compliance-gdpr-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperComplianceGdprStatCard {...props} />
    </div>
  ),
  "hyper-compliance-gdpr-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperComplianceGdprBentoTile {...props} />
    </div>
  ),
  "hyper-compliance-gdpr-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperComplianceGdprBannerInline {...props} />
    </div>
  ),
  "hyper-compliance-gdpr-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperComplianceGdprQuoteCard {...props} />
    </div>
  ),
  "hyper-developer-cli-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperDeveloperCliPill {...props} />
    </div>
  ),
  "hyper-developer-cli-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperDeveloperCliStatCard {...props} />
    </div>
  ),
  "hyper-developer-cli-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperDeveloperCliBentoTile {...props} />
    </div>
  ),
  "hyper-developer-cli-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperDeveloperCliBannerInline {...props} />
    </div>
  ),
  "hyper-developer-cli-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperDeveloperCliQuoteCard {...props} />
    </div>
  ),
  "hyper-cloud-mesh-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperCloudMeshPill {...props} />
    </div>
  ),
  "hyper-cloud-mesh-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperCloudMeshStatCard {...props} />
    </div>
  ),
  "hyper-cloud-mesh-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperCloudMeshBentoTile {...props} />
    </div>
  ),
  "hyper-cloud-mesh-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperCloudMeshBannerInline {...props} />
    </div>
  ),
  "hyper-cloud-mesh-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperCloudMeshQuoteCard {...props} />
    </div>
  ),
  "hyper-mobile-sync-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperMobileSyncPill {...props} />
    </div>
  ),
  "hyper-mobile-sync-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperMobileSyncStatCard {...props} />
    </div>
  ),
  "hyper-mobile-sync-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperMobileSyncBentoTile {...props} />
    </div>
  ),
  "hyper-mobile-sync-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperMobileSyncBannerInline {...props} />
    </div>
  ),
  "hyper-mobile-sync-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperMobileSyncQuoteCard {...props} />
    </div>
  ),
  "hyper-analytics-iq-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAnalyticsIqPill {...props} />
    </div>
  ),
  "hyper-analytics-iq-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAnalyticsIqStatCard {...props} />
    </div>
  ),
  "hyper-analytics-iq-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAnalyticsIqBentoTile {...props} />
    </div>
  ),
  "hyper-analytics-iq-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAnalyticsIqBannerInline {...props} />
    </div>
  ),
  "hyper-analytics-iq-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperAnalyticsIqQuoteCard {...props} />
    </div>
  ),
  "hyper-uptime-sla-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperUptimeSlaPill {...props} />
    </div>
  ),
  "hyper-uptime-sla-stat-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperUptimeSlaStatCard {...props} />
    </div>
  ),
  "hyper-uptime-sla-bento-tile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperUptimeSlaBentoTile {...props} />
    </div>
  ),
  "hyper-uptime-sla-banner-inline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperUptimeSlaBannerInline {...props} />
    </div>
  ),
  "hyper-uptime-sla-quote-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperUptimeSlaQuoteCard {...props} />
    </div>
  ),
  "cult-audio-waveform-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultAudioWaveformFloatingHud {...props} />
    </div>
  ),
  "cult-audio-waveform-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultAudioWaveformDockLens {...props} />
    </div>
  ),
  "cult-audio-waveform-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultAudioWaveformSliderScrub {...props} />
    </div>
  ),
  "cult-audio-waveform-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultAudioWaveformTactileToggle {...props} />
    </div>
  ),
  "cult-audio-waveform-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultAudioWaveformGlassCard {...props} />
    </div>
  ),
  "cult-spectral-analyzer-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultSpectralAnalyzerFloatingHud {...props} />
    </div>
  ),
  "cult-spectral-analyzer-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultSpectralAnalyzerDockLens {...props} />
    </div>
  ),
  "cult-spectral-analyzer-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultSpectralAnalyzerSliderScrub {...props} />
    </div>
  ),
  "cult-spectral-analyzer-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultSpectralAnalyzerTactileToggle {...props} />
    </div>
  ),
  "cult-spectral-analyzer-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultSpectralAnalyzerGlassCard {...props} />
    </div>
  ),
  "cult-canvas-brush-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultCanvasBrushFloatingHud {...props} />
    </div>
  ),
  "cult-canvas-brush-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultCanvasBrushDockLens {...props} />
    </div>
  ),
  "cult-canvas-brush-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultCanvasBrushSliderScrub {...props} />
    </div>
  ),
  "cult-canvas-brush-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultCanvasBrushTactileToggle {...props} />
    </div>
  ),
  "cult-canvas-brush-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultCanvasBrushGlassCard {...props} />
    </div>
  ),
  "cult-timeline-scrubber-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultTimelineScrubberFloatingHud {...props} />
    </div>
  ),
  "cult-timeline-scrubber-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultTimelineScrubberDockLens {...props} />
    </div>
  ),
  "cult-timeline-scrubber-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultTimelineScrubberSliderScrub {...props} />
    </div>
  ),
  "cult-timeline-scrubber-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultTimelineScrubberTactileToggle {...props} />
    </div>
  ),
  "cult-timeline-scrubber-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultTimelineScrubberGlassCard {...props} />
    </div>
  ),
  "cult-color-gamut-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultColorGamutFloatingHud {...props} />
    </div>
  ),
  "cult-color-gamut-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultColorGamutDockLens {...props} />
    </div>
  ),
  "cult-color-gamut-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultColorGamutSliderScrub {...props} />
    </div>
  ),
  "cult-color-gamut-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultColorGamutTactileToggle {...props} />
    </div>
  ),
  "cult-color-gamut-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultColorGamutGlassCard {...props} />
    </div>
  ),
  "cult-layer-stack-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultLayerStackFloatingHud {...props} />
    </div>
  ),
  "cult-layer-stack-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultLayerStackDockLens {...props} />
    </div>
  ),
  "cult-layer-stack-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultLayerStackSliderScrub {...props} />
    </div>
  ),
  "cult-layer-stack-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultLayerStackTactileToggle {...props} />
    </div>
  ),
  "cult-layer-stack-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultLayerStackGlassCard {...props} />
    </div>
  ),
  "cult-shader-viewport-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultShaderViewportFloatingHud {...props} />
    </div>
  ),
  "cult-shader-viewport-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultShaderViewportDockLens {...props} />
    </div>
  ),
  "cult-shader-viewport-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultShaderViewportSliderScrub {...props} />
    </div>
  ),
  "cult-shader-viewport-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultShaderViewportTactileToggle {...props} />
    </div>
  ),
  "cult-shader-viewport-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultShaderViewportGlassCard {...props} />
    </div>
  ),
  "cult-palette-swatch-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultPaletteSwatchFloatingHud {...props} />
    </div>
  ),
  "cult-palette-swatch-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultPaletteSwatchDockLens {...props} />
    </div>
  ),
  "cult-palette-swatch-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultPaletteSwatchSliderScrub {...props} />
    </div>
  ),
  "cult-palette-swatch-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultPaletteSwatchTactileToggle {...props} />
    </div>
  ),
  "cult-palette-swatch-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultPaletteSwatchGlassCard {...props} />
    </div>
  ),
  "cult-zoom-loupe-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultZoomLoupeFloatingHud {...props} />
    </div>
  ),
  "cult-zoom-loupe-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultZoomLoupeDockLens {...props} />
    </div>
  ),
  "cult-zoom-loupe-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultZoomLoupeSliderScrub {...props} />
    </div>
  ),
  "cult-zoom-loupe-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultZoomLoupeTactileToggle {...props} />
    </div>
  ),
  "cult-zoom-loupe-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultZoomLoupeGlassCard {...props} />
    </div>
  ),
  "cult-keyframe-track-floating-hud": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultKeyframeTrackFloatingHud {...props} />
    </div>
  ),
  "cult-keyframe-track-dock-lens": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultKeyframeTrackDockLens {...props} />
    </div>
  ),
  "cult-keyframe-track-slider-scrub": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultKeyframeTrackSliderScrub {...props} />
    </div>
  ),
  "cult-keyframe-track-tactile-toggle": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultKeyframeTrackTactileToggle {...props} />
    </div>
  ),
  "cult-keyframe-track-glass-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultKeyframeTrackGlassCard {...props} />
    </div>
  ),
  "origin-date-range-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDateRangePillSelector {...props} />
    </div>
  ),
  "origin-date-range-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDateRangeChipDismiss {...props} />
    </div>
  ),
  "origin-date-range-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDateRangeSegmentedChoice {...props} />
    </div>
  ),
  "origin-date-range-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDateRangeTriggerSelect {...props} />
    </div>
  ),
  "origin-date-range-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDateRangeToggleCounter {...props} />
    </div>
  ),
  "origin-price-tier-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginPriceTierPillSelector {...props} />
    </div>
  ),
  "origin-price-tier-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginPriceTierChipDismiss {...props} />
    </div>
  ),
  "origin-price-tier-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginPriceTierSegmentedChoice {...props} />
    </div>
  ),
  "origin-price-tier-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginPriceTierTriggerSelect {...props} />
    </div>
  ),
  "origin-price-tier-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginPriceTierToggleCounter {...props} />
    </div>
  ),
  "origin-geo-region-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGeoRegionPillSelector {...props} />
    </div>
  ),
  "origin-geo-region-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGeoRegionChipDismiss {...props} />
    </div>
  ),
  "origin-geo-region-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGeoRegionSegmentedChoice {...props} />
    </div>
  ),
  "origin-geo-region-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGeoRegionTriggerSelect {...props} />
    </div>
  ),
  "origin-geo-region-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGeoRegionToggleCounter {...props} />
    </div>
  ),
  "origin-http-method-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginHttpMethodPillSelector {...props} />
    </div>
  ),
  "origin-http-method-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginHttpMethodChipDismiss {...props} />
    </div>
  ),
  "origin-http-method-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginHttpMethodSegmentedChoice {...props} />
    </div>
  ),
  "origin-http-method-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginHttpMethodTriggerSelect {...props} />
    </div>
  ),
  "origin-http-method-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginHttpMethodToggleCounter {...props} />
    </div>
  ),
  "origin-log-severity-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLogSeverityPillSelector {...props} />
    </div>
  ),
  "origin-log-severity-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLogSeverityChipDismiss {...props} />
    </div>
  ),
  "origin-log-severity-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLogSeveritySegmentedChoice {...props} />
    </div>
  ),
  "origin-log-severity-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLogSeverityTriggerSelect {...props} />
    </div>
  ),
  "origin-log-severity-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLogSeverityToggleCounter {...props} />
    </div>
  ),
  "origin-user-role-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginUserRolePillSelector {...props} />
    </div>
  ),
  "origin-user-role-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginUserRoleChipDismiss {...props} />
    </div>
  ),
  "origin-user-role-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginUserRoleSegmentedChoice {...props} />
    </div>
  ),
  "origin-user-role-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginUserRoleTriggerSelect {...props} />
    </div>
  ),
  "origin-user-role-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginUserRoleToggleCounter {...props} />
    </div>
  ),
  "origin-device-type-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeviceTypePillSelector {...props} />
    </div>
  ),
  "origin-device-type-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeviceTypeChipDismiss {...props} />
    </div>
  ),
  "origin-device-type-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeviceTypeSegmentedChoice {...props} />
    </div>
  ),
  "origin-device-type-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeviceTypeTriggerSelect {...props} />
    </div>
  ),
  "origin-device-type-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeviceTypeToggleCounter {...props} />
    </div>
  ),
  "origin-git-branch-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGitBranchPillSelector {...props} />
    </div>
  ),
  "origin-git-branch-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGitBranchChipDismiss {...props} />
    </div>
  ),
  "origin-git-branch-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGitBranchSegmentedChoice {...props} />
    </div>
  ),
  "origin-git-branch-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGitBranchTriggerSelect {...props} />
    </div>
  ),
  "origin-git-branch-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginGitBranchToggleCounter {...props} />
    </div>
  ),
  "origin-license-type-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLicenseTypePillSelector {...props} />
    </div>
  ),
  "origin-license-type-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLicenseTypeChipDismiss {...props} />
    </div>
  ),
  "origin-license-type-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLicenseTypeSegmentedChoice {...props} />
    </div>
  ),
  "origin-license-type-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLicenseTypeTriggerSelect {...props} />
    </div>
  ),
  "origin-license-type-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginLicenseTypeToggleCounter {...props} />
    </div>
  ),
  "origin-deploy-env-pill-selector": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeployEnvPillSelector {...props} />
    </div>
  ),
  "origin-deploy-env-chip-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeployEnvChipDismiss {...props} />
    </div>
  ),
  "origin-deploy-env-segmented-choice": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeployEnvSegmentedChoice {...props} />
    </div>
  ),
  "origin-deploy-env-trigger-select": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeployEnvTriggerSelect {...props} />
    </div>
  ),
  "origin-deploy-env-toggle-counter": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <OriginDeployEnvToggleCounter {...props} />
    </div>
  ),
  "ai-prompt-composer-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerGlow {...props} />
    </div>
  ),
  "ai-prompt-composer-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerGlass {...props} />
    </div>
  ),
  "ai-prompt-composer-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerMinimal {...props} />
    </div>
  ),
  "ai-prompt-composer-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerTactile {...props} />
    </div>
  ),
  "ai-prompt-composer-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerCyber {...props} />
    </div>
  ),
  "ai-prompt-composer-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerMatrix {...props} />
    </div>
  ),
  "ai-prompt-composer-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerStealth {...props} />
    </div>
  ),
  "ai-prompt-composer-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerFloating {...props} />
    </div>
  ),
  "ai-prompt-composer-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerConic {...props} />
    </div>
  ),
  "ai-prompt-composer-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptComposerPill {...props} />
    </div>
  ),
  "ai-model-selector-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorGlow {...props} />
    </div>
  ),
  "ai-model-selector-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorGlass {...props} />
    </div>
  ),
  "ai-model-selector-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorMinimal {...props} />
    </div>
  ),
  "ai-model-selector-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorTactile {...props} />
    </div>
  ),
  "ai-model-selector-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorCyber {...props} />
    </div>
  ),
  "ai-model-selector-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorMatrix {...props} />
    </div>
  ),
  "ai-model-selector-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorStealth {...props} />
    </div>
  ),
  "ai-model-selector-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorFloating {...props} />
    </div>
  ),
  "ai-model-selector-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorConic {...props} />
    </div>
  ),
  "ai-model-selector-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiModelSelectorPill {...props} />
    </div>
  ),
  "ai-token-meter-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterGlow {...props} />
    </div>
  ),
  "ai-token-meter-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterGlass {...props} />
    </div>
  ),
  "ai-token-meter-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterMinimal {...props} />
    </div>
  ),
  "ai-token-meter-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterTactile {...props} />
    </div>
  ),
  "ai-token-meter-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterCyber {...props} />
    </div>
  ),
  "ai-token-meter-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterMatrix {...props} />
    </div>
  ),
  "ai-token-meter-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterStealth {...props} />
    </div>
  ),
  "ai-token-meter-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterFloating {...props} />
    </div>
  ),
  "ai-token-meter-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterConic {...props} />
    </div>
  ),
  "ai-token-meter-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiTokenMeterPill {...props} />
    </div>
  ),
  "ai-prompt-shelf-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfGlow {...props} />
    </div>
  ),
  "ai-prompt-shelf-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfGlass {...props} />
    </div>
  ),
  "ai-prompt-shelf-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfMinimal {...props} />
    </div>
  ),
  "ai-prompt-shelf-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfTactile {...props} />
    </div>
  ),
  "ai-prompt-shelf-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfCyber {...props} />
    </div>
  ),
  "ai-prompt-shelf-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfMatrix {...props} />
    </div>
  ),
  "ai-prompt-shelf-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfStealth {...props} />
    </div>
  ),
  "ai-prompt-shelf-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfFloating {...props} />
    </div>
  ),
  "ai-prompt-shelf-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfConic {...props} />
    </div>
  ),
  "ai-prompt-shelf-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiPromptShelfPill {...props} />
    </div>
  ),
  "ai-reasoning-slider-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderGlow {...props} />
    </div>
  ),
  "ai-reasoning-slider-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderGlass {...props} />
    </div>
  ),
  "ai-reasoning-slider-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderMinimal {...props} />
    </div>
  ),
  "ai-reasoning-slider-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderTactile {...props} />
    </div>
  ),
  "ai-reasoning-slider-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderCyber {...props} />
    </div>
  ),
  "ai-reasoning-slider-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderMatrix {...props} />
    </div>
  ),
  "ai-reasoning-slider-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderStealth {...props} />
    </div>
  ),
  "ai-reasoning-slider-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderFloating {...props} />
    </div>
  ),
  "ai-reasoning-slider-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderConic {...props} />
    </div>
  ),
  "ai-reasoning-slider-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiReasoningSliderPill {...props} />
    </div>
  ),
  "ai-system-persona-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaGlow {...props} />
    </div>
  ),
  "ai-system-persona-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaGlass {...props} />
    </div>
  ),
  "ai-system-persona-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaMinimal {...props} />
    </div>
  ),
  "ai-system-persona-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaTactile {...props} />
    </div>
  ),
  "ai-system-persona-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaCyber {...props} />
    </div>
  ),
  "ai-system-persona-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaMatrix {...props} />
    </div>
  ),
  "ai-system-persona-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaStealth {...props} />
    </div>
  ),
  "ai-system-persona-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaFloating {...props} />
    </div>
  ),
  "ai-system-persona-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaConic {...props} />
    </div>
  ),
  "ai-system-persona-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSystemPersonaPill {...props} />
    </div>
  ),
  "ai-citation-chip-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipGlow {...props} />
    </div>
  ),
  "ai-citation-chip-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipGlass {...props} />
    </div>
  ),
  "ai-citation-chip-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipMinimal {...props} />
    </div>
  ),
  "ai-citation-chip-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipTactile {...props} />
    </div>
  ),
  "ai-citation-chip-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipCyber {...props} />
    </div>
  ),
  "ai-citation-chip-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipMatrix {...props} />
    </div>
  ),
  "ai-citation-chip-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipStealth {...props} />
    </div>
  ),
  "ai-citation-chip-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipFloating {...props} />
    </div>
  ),
  "ai-citation-chip-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipConic {...props} />
    </div>
  ),
  "ai-citation-chip-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiCitationChipPill {...props} />
    </div>
  ),
  "ai-session-branch-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchGlow {...props} />
    </div>
  ),
  "ai-session-branch-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchGlass {...props} />
    </div>
  ),
  "ai-session-branch-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchMinimal {...props} />
    </div>
  ),
  "ai-session-branch-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchTactile {...props} />
    </div>
  ),
  "ai-session-branch-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchCyber {...props} />
    </div>
  ),
  "ai-session-branch-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchMatrix {...props} />
    </div>
  ),
  "ai-session-branch-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchStealth {...props} />
    </div>
  ),
  "ai-session-branch-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchFloating {...props} />
    </div>
  ),
  "ai-session-branch-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchConic {...props} />
    </div>
  ),
  "ai-session-branch-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiSessionBranchPill {...props} />
    </div>
  ),
  "ai-multimodal-drop-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropGlow {...props} />
    </div>
  ),
  "ai-multimodal-drop-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropGlass {...props} />
    </div>
  ),
  "ai-multimodal-drop-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropMinimal {...props} />
    </div>
  ),
  "ai-multimodal-drop-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropTactile {...props} />
    </div>
  ),
  "ai-multimodal-drop-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropCyber {...props} />
    </div>
  ),
  "ai-multimodal-drop-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropMatrix {...props} />
    </div>
  ),
  "ai-multimodal-drop-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropStealth {...props} />
    </div>
  ),
  "ai-multimodal-drop-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropFloating {...props} />
    </div>
  ),
  "ai-multimodal-drop-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropConic {...props} />
    </div>
  ),
  "ai-multimodal-drop-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiMultimodalDropPill {...props} />
    </div>
  ),
  "ai-stream-telemetry-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryGlow {...props} />
    </div>
  ),
  "ai-stream-telemetry-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryGlass {...props} />
    </div>
  ),
  "ai-stream-telemetry-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryMinimal {...props} />
    </div>
  ),
  "ai-stream-telemetry-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryTactile {...props} />
    </div>
  ),
  "ai-stream-telemetry-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryCyber {...props} />
    </div>
  ),
  "ai-stream-telemetry-matrix": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryMatrix {...props} />
    </div>
  ),
  "ai-stream-telemetry-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryStealth {...props} />
    </div>
  ),
  "ai-stream-telemetry-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryFloating {...props} />
    </div>
  ),
  "ai-stream-telemetry-conic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryConic {...props} />
    </div>
  ),
  "ai-stream-telemetry-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AiStreamTelemetryPill {...props} />
    </div>
  ),
  "input-otp-pin-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinClean {...props} />
    </div>
  ),
  "input-otp-pin-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinAccent {...props} />
    </div>
  ),
  "input-otp-pin-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinCompact {...props} />
    </div>
  ),
  "input-otp-pin-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinFloating {...props} />
    </div>
  ),
  "input-otp-pin-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinSegmented {...props} />
    </div>
  ),
  "input-otp-pin-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinBordered {...props} />
    </div>
  ),
  "input-otp-pin-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinFilled {...props} />
    </div>
  ),
  "input-otp-pin-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinGlass {...props} />
    </div>
  ),
  "input-otp-pin-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinPill {...props} />
    </div>
  ),
  "input-otp-pin-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputOtpPinStealth {...props} />
    </div>
  ),
  "input-phone-intl-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlClean {...props} />
    </div>
  ),
  "input-phone-intl-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlAccent {...props} />
    </div>
  ),
  "input-phone-intl-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlCompact {...props} />
    </div>
  ),
  "input-phone-intl-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlFloating {...props} />
    </div>
  ),
  "input-phone-intl-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlSegmented {...props} />
    </div>
  ),
  "input-phone-intl-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlBordered {...props} />
    </div>
  ),
  "input-phone-intl-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlFilled {...props} />
    </div>
  ),
  "input-phone-intl-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlGlass {...props} />
    </div>
  ),
  "input-phone-intl-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlPill {...props} />
    </div>
  ),
  "input-phone-intl-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPhoneIntlStealth {...props} />
    </div>
  ),
  "input-card-luhn-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnClean {...props} />
    </div>
  ),
  "input-card-luhn-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnAccent {...props} />
    </div>
  ),
  "input-card-luhn-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnCompact {...props} />
    </div>
  ),
  "input-card-luhn-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnFloating {...props} />
    </div>
  ),
  "input-card-luhn-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnSegmented {...props} />
    </div>
  ),
  "input-card-luhn-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnBordered {...props} />
    </div>
  ),
  "input-card-luhn-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnFilled {...props} />
    </div>
  ),
  "input-card-luhn-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnGlass {...props} />
    </div>
  ),
  "input-card-luhn-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnPill {...props} />
    </div>
  ),
  "input-card-luhn-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCardLuhnStealth {...props} />
    </div>
  ),
  "input-calendar-time-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeClean {...props} />
    </div>
  ),
  "input-calendar-time-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeAccent {...props} />
    </div>
  ),
  "input-calendar-time-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeCompact {...props} />
    </div>
  ),
  "input-calendar-time-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeFloating {...props} />
    </div>
  ),
  "input-calendar-time-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeSegmented {...props} />
    </div>
  ),
  "input-calendar-time-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeBordered {...props} />
    </div>
  ),
  "input-calendar-time-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeFilled {...props} />
    </div>
  ),
  "input-calendar-time-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeGlass {...props} />
    </div>
  ),
  "input-calendar-time-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimePill {...props} />
    </div>
  ),
  "input-calendar-time-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCalendarTimeStealth {...props} />
    </div>
  ),
  "input-color-hex-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexClean {...props} />
    </div>
  ),
  "input-color-hex-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexAccent {...props} />
    </div>
  ),
  "input-color-hex-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexCompact {...props} />
    </div>
  ),
  "input-color-hex-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexFloating {...props} />
    </div>
  ),
  "input-color-hex-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexSegmented {...props} />
    </div>
  ),
  "input-color-hex-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexBordered {...props} />
    </div>
  ),
  "input-color-hex-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexFilled {...props} />
    </div>
  ),
  "input-color-hex-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexGlass {...props} />
    </div>
  ),
  "input-color-hex-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexPill {...props} />
    </div>
  ),
  "input-color-hex-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputColorHexStealth {...props} />
    </div>
  ),
  "input-file-drop-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropClean {...props} />
    </div>
  ),
  "input-file-drop-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropAccent {...props} />
    </div>
  ),
  "input-file-drop-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropCompact {...props} />
    </div>
  ),
  "input-file-drop-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropFloating {...props} />
    </div>
  ),
  "input-file-drop-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropSegmented {...props} />
    </div>
  ),
  "input-file-drop-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropBordered {...props} />
    </div>
  ),
  "input-file-drop-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropFilled {...props} />
    </div>
  ),
  "input-file-drop-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropGlass {...props} />
    </div>
  ),
  "input-file-drop-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropPill {...props} />
    </div>
  ),
  "input-file-drop-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputFileDropStealth {...props} />
    </div>
  ),
  "input-dual-slider-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderClean {...props} />
    </div>
  ),
  "input-dual-slider-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderAccent {...props} />
    </div>
  ),
  "input-dual-slider-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderCompact {...props} />
    </div>
  ),
  "input-dual-slider-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderFloating {...props} />
    </div>
  ),
  "input-dual-slider-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderSegmented {...props} />
    </div>
  ),
  "input-dual-slider-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderBordered {...props} />
    </div>
  ),
  "input-dual-slider-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderFilled {...props} />
    </div>
  ),
  "input-dual-slider-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderGlass {...props} />
    </div>
  ),
  "input-dual-slider-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderPill {...props} />
    </div>
  ),
  "input-dual-slider-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputDualSliderStealth {...props} />
    </div>
  ),
  "input-command-search-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchClean {...props} />
    </div>
  ),
  "input-command-search-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchAccent {...props} />
    </div>
  ),
  "input-command-search-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchCompact {...props} />
    </div>
  ),
  "input-command-search-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchFloating {...props} />
    </div>
  ),
  "input-command-search-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchSegmented {...props} />
    </div>
  ),
  "input-command-search-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchBordered {...props} />
    </div>
  ),
  "input-command-search-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchFilled {...props} />
    </div>
  ),
  "input-command-search-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchGlass {...props} />
    </div>
  ),
  "input-command-search-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchPill {...props} />
    </div>
  ),
  "input-command-search-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCommandSearchStealth {...props} />
    </div>
  ),
  "input-tree-select-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectClean {...props} />
    </div>
  ),
  "input-tree-select-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectAccent {...props} />
    </div>
  ),
  "input-tree-select-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectCompact {...props} />
    </div>
  ),
  "input-tree-select-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectFloating {...props} />
    </div>
  ),
  "input-tree-select-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectSegmented {...props} />
    </div>
  ),
  "input-tree-select-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectBordered {...props} />
    </div>
  ),
  "input-tree-select-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectFilled {...props} />
    </div>
  ),
  "input-tree-select-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectGlass {...props} />
    </div>
  ),
  "input-tree-select-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectPill {...props} />
    </div>
  ),
  "input-tree-select-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputTreeSelectStealth {...props} />
    </div>
  ),
  "input-rating-score-clean": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreClean {...props} />
    </div>
  ),
  "input-rating-score-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreAccent {...props} />
    </div>
  ),
  "input-rating-score-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreCompact {...props} />
    </div>
  ),
  "input-rating-score-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreFloating {...props} />
    </div>
  ),
  "input-rating-score-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreSegmented {...props} />
    </div>
  ),
  "input-rating-score-bordered": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreBordered {...props} />
    </div>
  ),
  "input-rating-score-filled": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreFilled {...props} />
    </div>
  ),
  "input-rating-score-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreGlass {...props} />
    </div>
  ),
  "input-rating-score-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScorePill {...props} />
    </div>
  ),
  "input-rating-score-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputRatingScoreStealth {...props} />
    </div>
  ),
  "motion-kinetic-counter-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterAurora {...props} />
    </div>
  ),
  "motion-kinetic-counter-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterObsidian {...props} />
    </div>
  ),
  "motion-kinetic-counter-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterCyberpunk {...props} />
    </div>
  ),
  "motion-kinetic-counter-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterEmerald {...props} />
    </div>
  ),
  "motion-kinetic-counter-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterSapphire {...props} />
    </div>
  ),
  "motion-kinetic-counter-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterAmethyst {...props} />
    </div>
  ),
  "motion-kinetic-counter-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterSunset {...props} />
    </div>
  ),
  "motion-kinetic-counter-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterMonochrome {...props} />
    </div>
  ),
  "motion-kinetic-counter-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterCopper {...props} />
    </div>
  ),
  "motion-kinetic-counter-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionKineticCounterNordic {...props} />
    </div>
  ),
  "motion-gradient-shimmer-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerAurora {...props} />
    </div>
  ),
  "motion-gradient-shimmer-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerObsidian {...props} />
    </div>
  ),
  "motion-gradient-shimmer-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerCyberpunk {...props} />
    </div>
  ),
  "motion-gradient-shimmer-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerEmerald {...props} />
    </div>
  ),
  "motion-gradient-shimmer-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerSapphire {...props} />
    </div>
  ),
  "motion-gradient-shimmer-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerAmethyst {...props} />
    </div>
  ),
  "motion-gradient-shimmer-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerSunset {...props} />
    </div>
  ),
  "motion-gradient-shimmer-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerMonochrome {...props} />
    </div>
  ),
  "motion-gradient-shimmer-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerCopper {...props} />
    </div>
  ),
  "motion-gradient-shimmer-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionGradientShimmerNordic {...props} />
    </div>
  ),
  "motion-elastic-hover-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverAurora {...props} />
    </div>
  ),
  "motion-elastic-hover-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverObsidian {...props} />
    </div>
  ),
  "motion-elastic-hover-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverCyberpunk {...props} />
    </div>
  ),
  "motion-elastic-hover-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverEmerald {...props} />
    </div>
  ),
  "motion-elastic-hover-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverSapphire {...props} />
    </div>
  ),
  "motion-elastic-hover-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverAmethyst {...props} />
    </div>
  ),
  "motion-elastic-hover-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverSunset {...props} />
    </div>
  ),
  "motion-elastic-hover-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverMonochrome {...props} />
    </div>
  ),
  "motion-elastic-hover-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverCopper {...props} />
    </div>
  ),
  "motion-elastic-hover-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionElasticHoverNordic {...props} />
    </div>
  ),
  "motion-staggered-list-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListAurora {...props} />
    </div>
  ),
  "motion-staggered-list-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListObsidian {...props} />
    </div>
  ),
  "motion-staggered-list-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListCyberpunk {...props} />
    </div>
  ),
  "motion-staggered-list-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListEmerald {...props} />
    </div>
  ),
  "motion-staggered-list-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListSapphire {...props} />
    </div>
  ),
  "motion-staggered-list-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListAmethyst {...props} />
    </div>
  ),
  "motion-staggered-list-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListSunset {...props} />
    </div>
  ),
  "motion-staggered-list-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListMonochrome {...props} />
    </div>
  ),
  "motion-staggered-list-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListCopper {...props} />
    </div>
  ),
  "motion-staggered-list-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionStaggeredListNordic {...props} />
    </div>
  ),
  "motion-sliding-tab-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabAurora {...props} />
    </div>
  ),
  "motion-sliding-tab-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabObsidian {...props} />
    </div>
  ),
  "motion-sliding-tab-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabCyberpunk {...props} />
    </div>
  ),
  "motion-sliding-tab-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabEmerald {...props} />
    </div>
  ),
  "motion-sliding-tab-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabSapphire {...props} />
    </div>
  ),
  "motion-sliding-tab-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabAmethyst {...props} />
    </div>
  ),
  "motion-sliding-tab-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabSunset {...props} />
    </div>
  ),
  "motion-sliding-tab-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabMonochrome {...props} />
    </div>
  ),
  "motion-sliding-tab-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabCopper {...props} />
    </div>
  ),
  "motion-sliding-tab-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSlidingTabNordic {...props} />
    </div>
  ),
  "motion-sonar-pulse-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseAurora {...props} />
    </div>
  ),
  "motion-sonar-pulse-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseObsidian {...props} />
    </div>
  ),
  "motion-sonar-pulse-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseCyberpunk {...props} />
    </div>
  ),
  "motion-sonar-pulse-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseEmerald {...props} />
    </div>
  ),
  "motion-sonar-pulse-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseSapphire {...props} />
    </div>
  ),
  "motion-sonar-pulse-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseAmethyst {...props} />
    </div>
  ),
  "motion-sonar-pulse-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseSunset {...props} />
    </div>
  ),
  "motion-sonar-pulse-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseMonochrome {...props} />
    </div>
  ),
  "motion-sonar-pulse-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseCopper {...props} />
    </div>
  ),
  "motion-sonar-pulse-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSonarPulseNordic {...props} />
    </div>
  ),
  "motion-smooth-marquee-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeAurora {...props} />
    </div>
  ),
  "motion-smooth-marquee-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeObsidian {...props} />
    </div>
  ),
  "motion-smooth-marquee-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeCyberpunk {...props} />
    </div>
  ),
  "motion-smooth-marquee-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeEmerald {...props} />
    </div>
  ),
  "motion-smooth-marquee-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeSapphire {...props} />
    </div>
  ),
  "motion-smooth-marquee-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeAmethyst {...props} />
    </div>
  ),
  "motion-smooth-marquee-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeSunset {...props} />
    </div>
  ),
  "motion-smooth-marquee-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeMonochrome {...props} />
    </div>
  ),
  "motion-smooth-marquee-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeCopper {...props} />
    </div>
  ),
  "motion-smooth-marquee-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSmoothMarqueeNordic {...props} />
    </div>
  ),
  "motion-spotlight-radial-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialAurora {...props} />
    </div>
  ),
  "motion-spotlight-radial-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialObsidian {...props} />
    </div>
  ),
  "motion-spotlight-radial-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialCyberpunk {...props} />
    </div>
  ),
  "motion-spotlight-radial-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialEmerald {...props} />
    </div>
  ),
  "motion-spotlight-radial-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialSapphire {...props} />
    </div>
  ),
  "motion-spotlight-radial-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialAmethyst {...props} />
    </div>
  ),
  "motion-spotlight-radial-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialSunset {...props} />
    </div>
  ),
  "motion-spotlight-radial-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialMonochrome {...props} />
    </div>
  ),
  "motion-spotlight-radial-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialCopper {...props} />
    </div>
  ),
  "motion-spotlight-radial-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpotlightRadialNordic {...props} />
    </div>
  ),
  "motion-ping-status-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusAurora {...props} />
    </div>
  ),
  "motion-ping-status-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusObsidian {...props} />
    </div>
  ),
  "motion-ping-status-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusCyberpunk {...props} />
    </div>
  ),
  "motion-ping-status-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusEmerald {...props} />
    </div>
  ),
  "motion-ping-status-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusSapphire {...props} />
    </div>
  ),
  "motion-ping-status-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusAmethyst {...props} />
    </div>
  ),
  "motion-ping-status-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusSunset {...props} />
    </div>
  ),
  "motion-ping-status-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusMonochrome {...props} />
    </div>
  ),
  "motion-ping-status-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusCopper {...props} />
    </div>
  ),
  "motion-ping-status-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionPingStatusNordic {...props} />
    </div>
  ),
  "motion-spring-accordion-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionAurora {...props} />
    </div>
  ),
  "motion-spring-accordion-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionObsidian {...props} />
    </div>
  ),
  "motion-spring-accordion-cyberpunk": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionCyberpunk {...props} />
    </div>
  ),
  "motion-spring-accordion-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionEmerald {...props} />
    </div>
  ),
  "motion-spring-accordion-sapphire": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionSapphire {...props} />
    </div>
  ),
  "motion-spring-accordion-amethyst": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionAmethyst {...props} />
    </div>
  ),
  "motion-spring-accordion-sunset": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionSunset {...props} />
    </div>
  ),
  "motion-spring-accordion-monochrome": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionMonochrome {...props} />
    </div>
  ),
  "motion-spring-accordion-copper": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionCopper {...props} />
    </div>
  ),
  "motion-spring-accordion-nordic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpringAccordionNordic {...props} />
    </div>
  ),
  "aceternity-floating-dock-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockNebula {...props} />
    </div>
  ),
  "aceternity-floating-dock-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockAurora {...props} />
    </div>
  ),
  "aceternity-floating-dock-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockObsidian {...props} />
    </div>
  ),
  "aceternity-floating-dock-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockEmerald {...props} />
    </div>
  ),
  "aceternity-floating-dock-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockCrimson {...props} />
    </div>
  ),
  "aceternity-floating-dock-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockCyber {...props} />
    </div>
  ),
  "aceternity-floating-dock-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockSolaris {...props} />
    </div>
  ),
  "aceternity-floating-dock-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockQuartz {...props} />
    </div>
  ),
  "aceternity-floating-dock-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockTitanium {...props} />
    </div>
  ),
  "aceternity-floating-dock-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFloatingDockStarlight {...props} />
    </div>
  ),
  "aceternity-bento-slot-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotNebula {...props} />
    </div>
  ),
  "aceternity-bento-slot-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotAurora {...props} />
    </div>
  ),
  "aceternity-bento-slot-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotObsidian {...props} />
    </div>
  ),
  "aceternity-bento-slot-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotEmerald {...props} />
    </div>
  ),
  "aceternity-bento-slot-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotCrimson {...props} />
    </div>
  ),
  "aceternity-bento-slot-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotCyber {...props} />
    </div>
  ),
  "aceternity-bento-slot-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotSolaris {...props} />
    </div>
  ),
  "aceternity-bento-slot-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotQuartz {...props} />
    </div>
  ),
  "aceternity-bento-slot-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotTitanium {...props} />
    </div>
  ),
  "aceternity-bento-slot-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityBentoSlotStarlight {...props} />
    </div>
  ),
  "aceternity-cipher-vault-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultNebula {...props} />
    </div>
  ),
  "aceternity-cipher-vault-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultAurora {...props} />
    </div>
  ),
  "aceternity-cipher-vault-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultObsidian {...props} />
    </div>
  ),
  "aceternity-cipher-vault-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultEmerald {...props} />
    </div>
  ),
  "aceternity-cipher-vault-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultCrimson {...props} />
    </div>
  ),
  "aceternity-cipher-vault-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultCyber {...props} />
    </div>
  ),
  "aceternity-cipher-vault-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultSolaris {...props} />
    </div>
  ),
  "aceternity-cipher-vault-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultQuartz {...props} />
    </div>
  ),
  "aceternity-cipher-vault-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultTitanium {...props} />
    </div>
  ),
  "aceternity-cipher-vault-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityCipherVaultStarlight {...props} />
    </div>
  ),
  "aceternity-wavy-glow-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowNebula {...props} />
    </div>
  ),
  "aceternity-wavy-glow-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowAurora {...props} />
    </div>
  ),
  "aceternity-wavy-glow-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowObsidian {...props} />
    </div>
  ),
  "aceternity-wavy-glow-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowEmerald {...props} />
    </div>
  ),
  "aceternity-wavy-glow-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowCrimson {...props} />
    </div>
  ),
  "aceternity-wavy-glow-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowCyber {...props} />
    </div>
  ),
  "aceternity-wavy-glow-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowSolaris {...props} />
    </div>
  ),
  "aceternity-wavy-glow-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowQuartz {...props} />
    </div>
  ),
  "aceternity-wavy-glow-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowTitanium {...props} />
    </div>
  ),
  "aceternity-wavy-glow-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityWavyGlowStarlight {...props} />
    </div>
  ),
  "aceternity-lamp-beam-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamNebula {...props} />
    </div>
  ),
  "aceternity-lamp-beam-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamAurora {...props} />
    </div>
  ),
  "aceternity-lamp-beam-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamObsidian {...props} />
    </div>
  ),
  "aceternity-lamp-beam-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamEmerald {...props} />
    </div>
  ),
  "aceternity-lamp-beam-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamCrimson {...props} />
    </div>
  ),
  "aceternity-lamp-beam-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamCyber {...props} />
    </div>
  ),
  "aceternity-lamp-beam-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamSolaris {...props} />
    </div>
  ),
  "aceternity-lamp-beam-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamQuartz {...props} />
    </div>
  ),
  "aceternity-lamp-beam-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamTitanium {...props} />
    </div>
  ),
  "aceternity-lamp-beam-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityLampBeamStarlight {...props} />
    </div>
  ),
  "aceternity-tilt-card-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardNebula {...props} />
    </div>
  ),
  "aceternity-tilt-card-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardAurora {...props} />
    </div>
  ),
  "aceternity-tilt-card-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardObsidian {...props} />
    </div>
  ),
  "aceternity-tilt-card-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardEmerald {...props} />
    </div>
  ),
  "aceternity-tilt-card-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardCrimson {...props} />
    </div>
  ),
  "aceternity-tilt-card-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardCyber {...props} />
    </div>
  ),
  "aceternity-tilt-card-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardSolaris {...props} />
    </div>
  ),
  "aceternity-tilt-card-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardQuartz {...props} />
    </div>
  ),
  "aceternity-tilt-card-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardTitanium {...props} />
    </div>
  ),
  "aceternity-tilt-card-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityTiltCardStarlight {...props} />
    </div>
  ),
  "aceternity-directional-slide-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideNebula {...props} />
    </div>
  ),
  "aceternity-directional-slide-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideAurora {...props} />
    </div>
  ),
  "aceternity-directional-slide-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideObsidian {...props} />
    </div>
  ),
  "aceternity-directional-slide-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideEmerald {...props} />
    </div>
  ),
  "aceternity-directional-slide-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideCrimson {...props} />
    </div>
  ),
  "aceternity-directional-slide-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideCyber {...props} />
    </div>
  ),
  "aceternity-directional-slide-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideSolaris {...props} />
    </div>
  ),
  "aceternity-directional-slide-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideQuartz {...props} />
    </div>
  ),
  "aceternity-directional-slide-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideTitanium {...props} />
    </div>
  ),
  "aceternity-directional-slide-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityDirectionalSlideStarlight {...props} />
    </div>
  ),
  "aceternity-focus-blur-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurNebula {...props} />
    </div>
  ),
  "aceternity-focus-blur-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurAurora {...props} />
    </div>
  ),
  "aceternity-focus-blur-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurObsidian {...props} />
    </div>
  ),
  "aceternity-focus-blur-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurEmerald {...props} />
    </div>
  ),
  "aceternity-focus-blur-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurCrimson {...props} />
    </div>
  ),
  "aceternity-focus-blur-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurCyber {...props} />
    </div>
  ),
  "aceternity-focus-blur-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurSolaris {...props} />
    </div>
  ),
  "aceternity-focus-blur-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurQuartz {...props} />
    </div>
  ),
  "aceternity-focus-blur-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurTitanium {...props} />
    </div>
  ),
  "aceternity-focus-blur-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityFocusBlurStarlight {...props} />
    </div>
  ),
  "aceternity-pin-perspective-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveNebula {...props} />
    </div>
  ),
  "aceternity-pin-perspective-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveAurora {...props} />
    </div>
  ),
  "aceternity-pin-perspective-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveObsidian {...props} />
    </div>
  ),
  "aceternity-pin-perspective-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveEmerald {...props} />
    </div>
  ),
  "aceternity-pin-perspective-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveCrimson {...props} />
    </div>
  ),
  "aceternity-pin-perspective-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveCyber {...props} />
    </div>
  ),
  "aceternity-pin-perspective-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveSolaris {...props} />
    </div>
  ),
  "aceternity-pin-perspective-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveQuartz {...props} />
    </div>
  ),
  "aceternity-pin-perspective-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveTitanium {...props} />
    </div>
  ),
  "aceternity-pin-perspective-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityPinPerspectiveStarlight {...props} />
    </div>
  ),
  "aceternity-moving-border-nebula": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderNebula {...props} />
    </div>
  ),
  "aceternity-moving-border-aurora": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderAurora {...props} />
    </div>
  ),
  "aceternity-moving-border-obsidian": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderObsidian {...props} />
    </div>
  ),
  "aceternity-moving-border-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderEmerald {...props} />
    </div>
  ),
  "aceternity-moving-border-crimson": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderCrimson {...props} />
    </div>
  ),
  "aceternity-moving-border-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderCyber {...props} />
    </div>
  ),
  "aceternity-moving-border-solaris": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderSolaris {...props} />
    </div>
  ),
  "aceternity-moving-border-quartz": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderQuartz {...props} />
    </div>
  ),
  "aceternity-moving-border-titanium": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderTitanium {...props} />
    </div>
  ),
  "aceternity-moving-border-starlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <AceternityMovingBorderStarlight {...props} />
    </div>
  ),
  "magic-marquee-ticker-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerViolet {...props} />
    </div>
  ),
  "magic-marquee-ticker-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerAmber {...props} />
    </div>
  ),
  "magic-marquee-ticker-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerEmerald {...props} />
    </div>
  ),
  "magic-marquee-ticker-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerCyan {...props} />
    </div>
  ),
  "magic-marquee-ticker-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerRose {...props} />
    </div>
  ),
  "magic-marquee-ticker-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerIndigo {...props} />
    </div>
  ),
  "magic-marquee-ticker-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerSlate {...props} />
    </div>
  ),
  "magic-marquee-ticker-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerZinc {...props} />
    </div>
  ),
  "magic-marquee-ticker-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerFuchsia {...props} />
    </div>
  ),
  "magic-marquee-ticker-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicMarqueeTickerTeal {...props} />
    </div>
  ),
  "magic-orbit-satellites-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesViolet {...props} />
    </div>
  ),
  "magic-orbit-satellites-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesAmber {...props} />
    </div>
  ),
  "magic-orbit-satellites-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesEmerald {...props} />
    </div>
  ),
  "magic-orbit-satellites-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesCyan {...props} />
    </div>
  ),
  "magic-orbit-satellites-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesRose {...props} />
    </div>
  ),
  "magic-orbit-satellites-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesIndigo {...props} />
    </div>
  ),
  "magic-orbit-satellites-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesSlate {...props} />
    </div>
  ),
  "magic-orbit-satellites-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesZinc {...props} />
    </div>
  ),
  "magic-orbit-satellites-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesFuchsia {...props} />
    </div>
  ),
  "magic-orbit-satellites-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOrbitSatellitesTeal {...props} />
    </div>
  ),
  "magic-border-beam-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamViolet {...props} />
    </div>
  ),
  "magic-border-beam-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamAmber {...props} />
    </div>
  ),
  "magic-border-beam-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamEmerald {...props} />
    </div>
  ),
  "magic-border-beam-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamCyan {...props} />
    </div>
  ),
  "magic-border-beam-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamRose {...props} />
    </div>
  ),
  "magic-border-beam-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamIndigo {...props} />
    </div>
  ),
  "magic-border-beam-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamSlate {...props} />
    </div>
  ),
  "magic-border-beam-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamZinc {...props} />
    </div>
  ),
  "magic-border-beam-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamFuchsia {...props} />
    </div>
  ),
  "magic-border-beam-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicBorderBeamTeal {...props} />
    </div>
  ),
  "magic-shine-button-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonViolet {...props} />
    </div>
  ),
  "magic-shine-button-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonAmber {...props} />
    </div>
  ),
  "magic-shine-button-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonEmerald {...props} />
    </div>
  ),
  "magic-shine-button-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonCyan {...props} />
    </div>
  ),
  "magic-shine-button-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonRose {...props} />
    </div>
  ),
  "magic-shine-button-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonIndigo {...props} />
    </div>
  ),
  "magic-shine-button-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonSlate {...props} />
    </div>
  ),
  "magic-shine-button-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonZinc {...props} />
    </div>
  ),
  "magic-shine-button-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonFuchsia {...props} />
    </div>
  ),
  "magic-shine-button-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicShineButtonTeal {...props} />
    </div>
  ),
  "magic-pulsating-beacon-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconViolet {...props} />
    </div>
  ),
  "magic-pulsating-beacon-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconAmber {...props} />
    </div>
  ),
  "magic-pulsating-beacon-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconEmerald {...props} />
    </div>
  ),
  "magic-pulsating-beacon-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconCyan {...props} />
    </div>
  ),
  "magic-pulsating-beacon-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconRose {...props} />
    </div>
  ),
  "magic-pulsating-beacon-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconIndigo {...props} />
    </div>
  ),
  "magic-pulsating-beacon-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconSlate {...props} />
    </div>
  ),
  "magic-pulsating-beacon-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconZinc {...props} />
    </div>
  ),
  "magic-pulsating-beacon-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconFuchsia {...props} />
    </div>
  ),
  "magic-pulsating-beacon-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicPulsatingBeaconTeal {...props} />
    </div>
  ),
  "magic-odometer-counter-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterViolet {...props} />
    </div>
  ),
  "magic-odometer-counter-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterAmber {...props} />
    </div>
  ),
  "magic-odometer-counter-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterEmerald {...props} />
    </div>
  ),
  "magic-odometer-counter-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterCyan {...props} />
    </div>
  ),
  "magic-odometer-counter-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterRose {...props} />
    </div>
  ),
  "magic-odometer-counter-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterIndigo {...props} />
    </div>
  ),
  "magic-odometer-counter-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterSlate {...props} />
    </div>
  ),
  "magic-odometer-counter-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterZinc {...props} />
    </div>
  ),
  "magic-odometer-counter-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterFuchsia {...props} />
    </div>
  ),
  "magic-odometer-counter-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicOdometerCounterTeal {...props} />
    </div>
  ),
  "magic-sparkle-headline-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineViolet {...props} />
    </div>
  ),
  "magic-sparkle-headline-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineAmber {...props} />
    </div>
  ),
  "magic-sparkle-headline-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineEmerald {...props} />
    </div>
  ),
  "magic-sparkle-headline-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineCyan {...props} />
    </div>
  ),
  "magic-sparkle-headline-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineRose {...props} />
    </div>
  ),
  "magic-sparkle-headline-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineIndigo {...props} />
    </div>
  ),
  "magic-sparkle-headline-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineSlate {...props} />
    </div>
  ),
  "magic-sparkle-headline-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineZinc {...props} />
    </div>
  ),
  "magic-sparkle-headline-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineFuchsia {...props} />
    </div>
  ),
  "magic-sparkle-headline-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicSparkleHeadlineTeal {...props} />
    </div>
  ),
  "magic-flip-words-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsViolet {...props} />
    </div>
  ),
  "magic-flip-words-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsAmber {...props} />
    </div>
  ),
  "magic-flip-words-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsEmerald {...props} />
    </div>
  ),
  "magic-flip-words-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsCyan {...props} />
    </div>
  ),
  "magic-flip-words-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsRose {...props} />
    </div>
  ),
  "magic-flip-words-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsIndigo {...props} />
    </div>
  ),
  "magic-flip-words-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsSlate {...props} />
    </div>
  ),
  "magic-flip-words-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsZinc {...props} />
    </div>
  ),
  "magic-flip-words-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsFuchsia {...props} />
    </div>
  ),
  "magic-flip-words-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicFlipWordsTeal {...props} />
    </div>
  ),
  "magic-interactive-cell-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellViolet {...props} />
    </div>
  ),
  "magic-interactive-cell-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellAmber {...props} />
    </div>
  ),
  "magic-interactive-cell-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellEmerald {...props} />
    </div>
  ),
  "magic-interactive-cell-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellCyan {...props} />
    </div>
  ),
  "magic-interactive-cell-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellRose {...props} />
    </div>
  ),
  "magic-interactive-cell-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellIndigo {...props} />
    </div>
  ),
  "magic-interactive-cell-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellSlate {...props} />
    </div>
  ),
  "magic-interactive-cell-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellZinc {...props} />
    </div>
  ),
  "magic-interactive-cell-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellFuchsia {...props} />
    </div>
  ),
  "magic-interactive-cell-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicInteractiveCellTeal {...props} />
    </div>
  ),
  "magic-dock-utility-violet": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityViolet {...props} />
    </div>
  ),
  "magic-dock-utility-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityAmber {...props} />
    </div>
  ),
  "magic-dock-utility-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityEmerald {...props} />
    </div>
  ),
  "magic-dock-utility-cyan": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityCyan {...props} />
    </div>
  ),
  "magic-dock-utility-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityRose {...props} />
    </div>
  ),
  "magic-dock-utility-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityIndigo {...props} />
    </div>
  ),
  "magic-dock-utility-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilitySlate {...props} />
    </div>
  ),
  "magic-dock-utility-zinc": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityZinc {...props} />
    </div>
  ),
  "magic-dock-utility-fuchsia": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityFuchsia {...props} />
    </div>
  ),
  "magic-dock-utility-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MagicDockUtilityTeal {...props} />
    </div>
  ),
  "studio-code-box-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxFlat {...props} />
    </div>
  ),
  "studio-code-box-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxElevated {...props} />
    </div>
  ),
  "studio-code-box-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxGlass {...props} />
    </div>
  ),
  "studio-code-box-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxContrast {...props} />
    </div>
  ),
  "studio-code-box-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxCompact {...props} />
    </div>
  ),
  "studio-code-box-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxExpanded {...props} />
    </div>
  ),
  "studio-code-box-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxStealth {...props} />
    </div>
  ),
  "studio-code-box-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxOutlined {...props} />
    </div>
  ),
  "studio-code-box-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxPill {...props} />
    </div>
  ),
  "studio-code-box-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioCodeBoxAccented {...props} />
    </div>
  ),
  "studio-props-table-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableFlat {...props} />
    </div>
  ),
  "studio-props-table-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableElevated {...props} />
    </div>
  ),
  "studio-props-table-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableGlass {...props} />
    </div>
  ),
  "studio-props-table-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableContrast {...props} />
    </div>
  ),
  "studio-props-table-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableCompact {...props} />
    </div>
  ),
  "studio-props-table-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableExpanded {...props} />
    </div>
  ),
  "studio-props-table-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableStealth {...props} />
    </div>
  ),
  "studio-props-table-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableOutlined {...props} />
    </div>
  ),
  "studio-props-table-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTablePill {...props} />
    </div>
  ),
  "studio-props-table-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPropsTableAccented {...props} />
    </div>
  ),
  "studio-theme-swatch-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchFlat {...props} />
    </div>
  ),
  "studio-theme-swatch-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchElevated {...props} />
    </div>
  ),
  "studio-theme-swatch-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchGlass {...props} />
    </div>
  ),
  "studio-theme-swatch-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchContrast {...props} />
    </div>
  ),
  "studio-theme-swatch-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchCompact {...props} />
    </div>
  ),
  "studio-theme-swatch-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchExpanded {...props} />
    </div>
  ),
  "studio-theme-swatch-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchStealth {...props} />
    </div>
  ),
  "studio-theme-swatch-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchOutlined {...props} />
    </div>
  ),
  "studio-theme-swatch-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchPill {...props} />
    </div>
  ),
  "studio-theme-swatch-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioThemeSwatchAccented {...props} />
    </div>
  ),
  "studio-layout-diff-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffFlat {...props} />
    </div>
  ),
  "studio-layout-diff-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffElevated {...props} />
    </div>
  ),
  "studio-layout-diff-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffGlass {...props} />
    </div>
  ),
  "studio-layout-diff-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffContrast {...props} />
    </div>
  ),
  "studio-layout-diff-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffCompact {...props} />
    </div>
  ),
  "studio-layout-diff-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffExpanded {...props} />
    </div>
  ),
  "studio-layout-diff-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffStealth {...props} />
    </div>
  ),
  "studio-layout-diff-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffOutlined {...props} />
    </div>
  ),
  "studio-layout-diff-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffPill {...props} />
    </div>
  ),
  "studio-layout-diff-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioLayoutDiffAccented {...props} />
    </div>
  ),
  "studio-breakpoint-bar-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarFlat {...props} />
    </div>
  ),
  "studio-breakpoint-bar-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarElevated {...props} />
    </div>
  ),
  "studio-breakpoint-bar-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarGlass {...props} />
    </div>
  ),
  "studio-breakpoint-bar-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarContrast {...props} />
    </div>
  ),
  "studio-breakpoint-bar-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarCompact {...props} />
    </div>
  ),
  "studio-breakpoint-bar-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarExpanded {...props} />
    </div>
  ),
  "studio-breakpoint-bar-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarStealth {...props} />
    </div>
  ),
  "studio-breakpoint-bar-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarOutlined {...props} />
    </div>
  ),
  "studio-breakpoint-bar-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarPill {...props} />
    </div>
  ),
  "studio-breakpoint-bar-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioBreakpointBarAccented {...props} />
    </div>
  ),
  "studio-dep-graph-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphFlat {...props} />
    </div>
  ),
  "studio-dep-graph-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphElevated {...props} />
    </div>
  ),
  "studio-dep-graph-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphGlass {...props} />
    </div>
  ),
  "studio-dep-graph-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphContrast {...props} />
    </div>
  ),
  "studio-dep-graph-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphCompact {...props} />
    </div>
  ),
  "studio-dep-graph-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphExpanded {...props} />
    </div>
  ),
  "studio-dep-graph-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphStealth {...props} />
    </div>
  ),
  "studio-dep-graph-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphOutlined {...props} />
    </div>
  ),
  "studio-dep-graph-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphPill {...props} />
    </div>
  ),
  "studio-dep-graph-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioDepGraphAccented {...props} />
    </div>
  ),
  "studio-a11y-badge-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeFlat {...props} />
    </div>
  ),
  "studio-a11y-badge-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeElevated {...props} />
    </div>
  ),
  "studio-a11y-badge-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeGlass {...props} />
    </div>
  ),
  "studio-a11y-badge-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeContrast {...props} />
    </div>
  ),
  "studio-a11y-badge-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeCompact {...props} />
    </div>
  ),
  "studio-a11y-badge-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeExpanded {...props} />
    </div>
  ),
  "studio-a11y-badge-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeStealth {...props} />
    </div>
  ),
  "studio-a11y-badge-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeOutlined {...props} />
    </div>
  ),
  "studio-a11y-badge-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgePill {...props} />
    </div>
  ),
  "studio-a11y-badge-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioA11yBadgeAccented {...props} />
    </div>
  ),
  "studio-export-json-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonFlat {...props} />
    </div>
  ),
  "studio-export-json-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonElevated {...props} />
    </div>
  ),
  "studio-export-json-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonGlass {...props} />
    </div>
  ),
  "studio-export-json-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonContrast {...props} />
    </div>
  ),
  "studio-export-json-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonCompact {...props} />
    </div>
  ),
  "studio-export-json-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonExpanded {...props} />
    </div>
  ),
  "studio-export-json-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonStealth {...props} />
    </div>
  ),
  "studio-export-json-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonOutlined {...props} />
    </div>
  ),
  "studio-export-json-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonPill {...props} />
    </div>
  ),
  "studio-export-json-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioExportJsonAccented {...props} />
    </div>
  ),
  "studio-perf-pill-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillFlat {...props} />
    </div>
  ),
  "studio-perf-pill-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillElevated {...props} />
    </div>
  ),
  "studio-perf-pill-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillGlass {...props} />
    </div>
  ),
  "studio-perf-pill-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillContrast {...props} />
    </div>
  ),
  "studio-perf-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillCompact {...props} />
    </div>
  ),
  "studio-perf-pill-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillExpanded {...props} />
    </div>
  ),
  "studio-perf-pill-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillStealth {...props} />
    </div>
  ),
  "studio-perf-pill-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillOutlined {...props} />
    </div>
  ),
  "studio-perf-pill-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillPill {...props} />
    </div>
  ),
  "studio-perf-pill-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioPerfPillAccented {...props} />
    </div>
  ),
  "studio-source-link-flat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkFlat {...props} />
    </div>
  ),
  "studio-source-link-elevated": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkElevated {...props} />
    </div>
  ),
  "studio-source-link-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkGlass {...props} />
    </div>
  ),
  "studio-source-link-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkContrast {...props} />
    </div>
  ),
  "studio-source-link-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkCompact {...props} />
    </div>
  ),
  "studio-source-link-expanded": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkExpanded {...props} />
    </div>
  ),
  "studio-source-link-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkStealth {...props} />
    </div>
  ),
  "studio-source-link-outlined": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkOutlined {...props} />
    </div>
  ),
  "studio-source-link-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkPill {...props} />
    </div>
  ),
  "studio-source-link-accented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <StudioSourceLinkAccented {...props} />
    </div>
  ),
  "hover-magnetic-tile-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileCyber {...props} />
    </div>
  ),
  "hover-magnetic-tile-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileNeon {...props} />
    </div>
  ),
  "hover-magnetic-tile-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileStealth {...props} />
    </div>
  ),
  "hover-magnetic-tile-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileAmber {...props} />
    </div>
  ),
  "hover-magnetic-tile-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileEmerald {...props} />
    </div>
  ),
  "hover-magnetic-tile-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileIndigo {...props} />
    </div>
  ),
  "hover-magnetic-tile-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileRose {...props} />
    </div>
  ),
  "hover-magnetic-tile-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileTeal {...props} />
    </div>
  ),
  "hover-magnetic-tile-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileMinimal {...props} />
    </div>
  ),
  "hover-magnetic-tile-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverMagneticTileTactile {...props} />
    </div>
  ),
  "hover-water-ripple-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleCyber {...props} />
    </div>
  ),
  "hover-water-ripple-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleNeon {...props} />
    </div>
  ),
  "hover-water-ripple-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleStealth {...props} />
    </div>
  ),
  "hover-water-ripple-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleAmber {...props} />
    </div>
  ),
  "hover-water-ripple-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleEmerald {...props} />
    </div>
  ),
  "hover-water-ripple-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleIndigo {...props} />
    </div>
  ),
  "hover-water-ripple-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleRose {...props} />
    </div>
  ),
  "hover-water-ripple-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleTeal {...props} />
    </div>
  ),
  "hover-water-ripple-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleMinimal {...props} />
    </div>
  ),
  "hover-water-ripple-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverWaterRippleTactile {...props} />
    </div>
  ),
  "hover-glitch-badge-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeCyber {...props} />
    </div>
  ),
  "hover-glitch-badge-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeNeon {...props} />
    </div>
  ),
  "hover-glitch-badge-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeStealth {...props} />
    </div>
  ),
  "hover-glitch-badge-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeAmber {...props} />
    </div>
  ),
  "hover-glitch-badge-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeEmerald {...props} />
    </div>
  ),
  "hover-glitch-badge-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeIndigo {...props} />
    </div>
  ),
  "hover-glitch-badge-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeRose {...props} />
    </div>
  ),
  "hover-glitch-badge-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeTeal {...props} />
    </div>
  ),
  "hover-glitch-badge-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeMinimal {...props} />
    </div>
  ),
  "hover-glitch-badge-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGlitchBadgeTactile {...props} />
    </div>
  ),
  "hover-fuzzy-noise-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseCyber {...props} />
    </div>
  ),
  "hover-fuzzy-noise-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseNeon {...props} />
    </div>
  ),
  "hover-fuzzy-noise-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseStealth {...props} />
    </div>
  ),
  "hover-fuzzy-noise-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseAmber {...props} />
    </div>
  ),
  "hover-fuzzy-noise-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseEmerald {...props} />
    </div>
  ),
  "hover-fuzzy-noise-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseIndigo {...props} />
    </div>
  ),
  "hover-fuzzy-noise-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseRose {...props} />
    </div>
  ),
  "hover-fuzzy-noise-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseTeal {...props} />
    </div>
  ),
  "hover-fuzzy-noise-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseMinimal {...props} />
    </div>
  ),
  "hover-fuzzy-noise-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverFuzzyNoiseTactile {...props} />
    </div>
  ),
  "hover-elastic-tab-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabCyber {...props} />
    </div>
  ),
  "hover-elastic-tab-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabNeon {...props} />
    </div>
  ),
  "hover-elastic-tab-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabStealth {...props} />
    </div>
  ),
  "hover-elastic-tab-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabAmber {...props} />
    </div>
  ),
  "hover-elastic-tab-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabEmerald {...props} />
    </div>
  ),
  "hover-elastic-tab-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabIndigo {...props} />
    </div>
  ),
  "hover-elastic-tab-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabRose {...props} />
    </div>
  ),
  "hover-elastic-tab-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabTeal {...props} />
    </div>
  ),
  "hover-elastic-tab-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabMinimal {...props} />
    </div>
  ),
  "hover-elastic-tab-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverElasticTabTactile {...props} />
    </div>
  ),
  "hover-gravity-button-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonCyber {...props} />
    </div>
  ),
  "hover-gravity-button-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonNeon {...props} />
    </div>
  ),
  "hover-gravity-button-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonStealth {...props} />
    </div>
  ),
  "hover-gravity-button-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonAmber {...props} />
    </div>
  ),
  "hover-gravity-button-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonEmerald {...props} />
    </div>
  ),
  "hover-gravity-button-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonIndigo {...props} />
    </div>
  ),
  "hover-gravity-button-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonRose {...props} />
    </div>
  ),
  "hover-gravity-button-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonTeal {...props} />
    </div>
  ),
  "hover-gravity-button-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonMinimal {...props} />
    </div>
  ),
  "hover-gravity-button-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverGravityButtonTactile {...props} />
    </div>
  ),
  "hover-liquid-card-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardCyber {...props} />
    </div>
  ),
  "hover-liquid-card-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardNeon {...props} />
    </div>
  ),
  "hover-liquid-card-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardStealth {...props} />
    </div>
  ),
  "hover-liquid-card-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardAmber {...props} />
    </div>
  ),
  "hover-liquid-card-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardEmerald {...props} />
    </div>
  ),
  "hover-liquid-card-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardIndigo {...props} />
    </div>
  ),
  "hover-liquid-card-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardRose {...props} />
    </div>
  ),
  "hover-liquid-card-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardTeal {...props} />
    </div>
  ),
  "hover-liquid-card-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardMinimal {...props} />
    </div>
  ),
  "hover-liquid-card-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverLiquidCardTactile {...props} />
    </div>
  ),
  "hover-clip-text-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextCyber {...props} />
    </div>
  ),
  "hover-clip-text-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextNeon {...props} />
    </div>
  ),
  "hover-clip-text-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextStealth {...props} />
    </div>
  ),
  "hover-clip-text-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextAmber {...props} />
    </div>
  ),
  "hover-clip-text-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextEmerald {...props} />
    </div>
  ),
  "hover-clip-text-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextIndigo {...props} />
    </div>
  ),
  "hover-clip-text-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextRose {...props} />
    </div>
  ),
  "hover-clip-text-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextTeal {...props} />
    </div>
  ),
  "hover-clip-text-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextMinimal {...props} />
    </div>
  ),
  "hover-clip-text-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverClipTextTactile {...props} />
    </div>
  ),
  "hover-spotlight-tile-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileCyber {...props} />
    </div>
  ),
  "hover-spotlight-tile-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileNeon {...props} />
    </div>
  ),
  "hover-spotlight-tile-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileStealth {...props} />
    </div>
  ),
  "hover-spotlight-tile-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileAmber {...props} />
    </div>
  ),
  "hover-spotlight-tile-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileEmerald {...props} />
    </div>
  ),
  "hover-spotlight-tile-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileIndigo {...props} />
    </div>
  ),
  "hover-spotlight-tile-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileRose {...props} />
    </div>
  ),
  "hover-spotlight-tile-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileTeal {...props} />
    </div>
  ),
  "hover-spotlight-tile-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileMinimal {...props} />
    </div>
  ),
  "hover-spotlight-tile-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverSpotlightTileTactile {...props} />
    </div>
  ),
  "hover-tilt-plate-cyber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateCyber {...props} />
    </div>
  ),
  "hover-tilt-plate-neon": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateNeon {...props} />
    </div>
  ),
  "hover-tilt-plate-stealth": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateStealth {...props} />
    </div>
  ),
  "hover-tilt-plate-amber": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateAmber {...props} />
    </div>
  ),
  "hover-tilt-plate-emerald": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateEmerald {...props} />
    </div>
  ),
  "hover-tilt-plate-indigo": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateIndigo {...props} />
    </div>
  ),
  "hover-tilt-plate-rose": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateRose {...props} />
    </div>
  ),
  "hover-tilt-plate-teal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateTeal {...props} />
    </div>
  ),
  "hover-tilt-plate-minimal": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateMinimal {...props} />
    </div>
  ),
  "hover-tilt-plate-tactile": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HoverTiltPlateTactile {...props} />
    </div>
  ),
  "hyper-block-hero-headline-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockHeroHeadlineModern {...props} />
    </div>
  ),
  "hyper-block-hero-headline-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockHeroHeadlineGlass {...props} />
    </div>
  ),
  "hyper-block-hero-headline-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockHeroHeadlineContrast {...props} />
    </div>
  ),
  "hyper-block-hero-headline-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockHeroHeadlineCompact {...props} />
    </div>
  ),
  "hyper-block-hero-headline-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockHeroHeadlinePill {...props} />
    </div>
  ),
  "hyper-block-pricing-card-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockPricingCardModern {...props} />
    </div>
  ),
  "hyper-block-pricing-card-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockPricingCardGlass {...props} />
    </div>
  ),
  "hyper-block-pricing-card-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockPricingCardContrast {...props} />
    </div>
  ),
  "hyper-block-pricing-card-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockPricingCardCompact {...props} />
    </div>
  ),
  "hyper-block-pricing-card-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockPricingCardPill {...props} />
    </div>
  ),
  "hyper-block-faq-item-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFaqItemModern {...props} />
    </div>
  ),
  "hyper-block-faq-item-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFaqItemGlass {...props} />
    </div>
  ),
  "hyper-block-faq-item-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFaqItemContrast {...props} />
    </div>
  ),
  "hyper-block-faq-item-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFaqItemCompact {...props} />
    </div>
  ),
  "hyper-block-faq-item-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFaqItemPill {...props} />
    </div>
  ),
  "hyper-block-testimonial-row-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTestimonialRowModern {...props} />
    </div>
  ),
  "hyper-block-testimonial-row-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTestimonialRowGlass {...props} />
    </div>
  ),
  "hyper-block-testimonial-row-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTestimonialRowContrast {...props} />
    </div>
  ),
  "hyper-block-testimonial-row-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTestimonialRowCompact {...props} />
    </div>
  ),
  "hyper-block-testimonial-row-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTestimonialRowPill {...props} />
    </div>
  ),
  "hyper-block-newsletter-box-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockNewsletterBoxModern {...props} />
    </div>
  ),
  "hyper-block-newsletter-box-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockNewsletterBoxGlass {...props} />
    </div>
  ),
  "hyper-block-newsletter-box-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockNewsletterBoxContrast {...props} />
    </div>
  ),
  "hyper-block-newsletter-box-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockNewsletterBoxCompact {...props} />
    </div>
  ),
  "hyper-block-newsletter-box-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockNewsletterBoxPill {...props} />
    </div>
  ),
  "hyper-block-cookie-bar-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockCookieBarModern {...props} />
    </div>
  ),
  "hyper-block-cookie-bar-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockCookieBarGlass {...props} />
    </div>
  ),
  "hyper-block-cookie-bar-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockCookieBarContrast {...props} />
    </div>
  ),
  "hyper-block-cookie-bar-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockCookieBarCompact {...props} />
    </div>
  ),
  "hyper-block-cookie-bar-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockCookieBarPill {...props} />
    </div>
  ),
  "hyper-block-announcement-top-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockAnnouncementTopModern {...props} />
    </div>
  ),
  "hyper-block-announcement-top-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockAnnouncementTopGlass {...props} />
    </div>
  ),
  "hyper-block-announcement-top-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockAnnouncementTopContrast {...props} />
    </div>
  ),
  "hyper-block-announcement-top-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockAnnouncementTopCompact {...props} />
    </div>
  ),
  "hyper-block-announcement-top-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockAnnouncementTopPill {...props} />
    </div>
  ),
  "hyper-block-team-member-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTeamMemberModern {...props} />
    </div>
  ),
  "hyper-block-team-member-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTeamMemberGlass {...props} />
    </div>
  ),
  "hyper-block-team-member-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTeamMemberContrast {...props} />
    </div>
  ),
  "hyper-block-team-member-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTeamMemberCompact {...props} />
    </div>
  ),
  "hyper-block-team-member-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTeamMemberPill {...props} />
    </div>
  ),
  "hyper-block-logo-wall-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockLogoWallModern {...props} />
    </div>
  ),
  "hyper-block-logo-wall-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockLogoWallGlass {...props} />
    </div>
  ),
  "hyper-block-logo-wall-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockLogoWallContrast {...props} />
    </div>
  ),
  "hyper-block-logo-wall-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockLogoWallCompact {...props} />
    </div>
  ),
  "hyper-block-logo-wall-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockLogoWallPill {...props} />
    </div>
  ),
  "hyper-block-feature-compare-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFeatureCompareModern {...props} />
    </div>
  ),
  "hyper-block-feature-compare-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFeatureCompareGlass {...props} />
    </div>
  ),
  "hyper-block-feature-compare-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFeatureCompareContrast {...props} />
    </div>
  ),
  "hyper-block-feature-compare-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFeatureCompareCompact {...props} />
    </div>
  ),
  "hyper-block-feature-compare-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockFeatureComparePill {...props} />
    </div>
  ),
  "hyper-block-changelog-badge-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockChangelogBadgeModern {...props} />
    </div>
  ),
  "hyper-block-changelog-badge-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockChangelogBadgeGlass {...props} />
    </div>
  ),
  "hyper-block-changelog-badge-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockChangelogBadgeContrast {...props} />
    </div>
  ),
  "hyper-block-changelog-badge-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockChangelogBadgeCompact {...props} />
    </div>
  ),
  "hyper-block-changelog-badge-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockChangelogBadgePill {...props} />
    </div>
  ),
  "hyper-block-support-card-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockSupportCardModern {...props} />
    </div>
  ),
  "hyper-block-support-card-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockSupportCardGlass {...props} />
    </div>
  ),
  "hyper-block-support-card-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockSupportCardContrast {...props} />
    </div>
  ),
  "hyper-block-support-card-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockSupportCardCompact {...props} />
    </div>
  ),
  "hyper-block-support-card-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockSupportCardPill {...props} />
    </div>
  ),
  "hyper-block-download-cta-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockDownloadCtaModern {...props} />
    </div>
  ),
  "hyper-block-download-cta-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockDownloadCtaGlass {...props} />
    </div>
  ),
  "hyper-block-download-cta-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockDownloadCtaContrast {...props} />
    </div>
  ),
  "hyper-block-download-cta-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockDownloadCtaCompact {...props} />
    </div>
  ),
  "hyper-block-download-cta-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockDownloadCtaPill {...props} />
    </div>
  ),
  "hyper-block-stats-strip-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockStatsStripModern {...props} />
    </div>
  ),
  "hyper-block-stats-strip-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockStatsStripGlass {...props} />
    </div>
  ),
  "hyper-block-stats-strip-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockStatsStripContrast {...props} />
    </div>
  ),
  "hyper-block-stats-strip-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockStatsStripCompact {...props} />
    </div>
  ),
  "hyper-block-stats-strip-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockStatsStripPill {...props} />
    </div>
  ),
  "hyper-block-timeline-node-modern": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTimelineNodeModern {...props} />
    </div>
  ),
  "hyper-block-timeline-node-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTimelineNodeGlass {...props} />
    </div>
  ),
  "hyper-block-timeline-node-contrast": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTimelineNodeContrast {...props} />
    </div>
  ),
  "hyper-block-timeline-node-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTimelineNodeCompact {...props} />
    </div>
  ),
  "hyper-block-timeline-node-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <HyperBlockTimelineNodePill {...props} />
    </div>
  ),
  "cult-pro-scrubber-head-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProScrubberHeadProDark {...props} />
    </div>
  ),
  "cult-pro-scrubber-head-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProScrubberHeadStudioSlate {...props} />
    </div>
  ),
  "cult-pro-scrubber-head-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProScrubberHeadNeonAccent {...props} />
    </div>
  ),
  "cult-pro-scrubber-head-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProScrubberHeadMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-scrubber-head-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProScrubberHeadGlassFrost {...props} />
    </div>
  ),
  "cult-pro-color-wheel-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProColorWheelProDark {...props} />
    </div>
  ),
  "cult-pro-color-wheel-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProColorWheelStudioSlate {...props} />
    </div>
  ),
  "cult-pro-color-wheel-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProColorWheelNeonAccent {...props} />
    </div>
  ),
  "cult-pro-color-wheel-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProColorWheelMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-color-wheel-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProColorWheelGlassFrost {...props} />
    </div>
  ),
  "cult-pro-gain-knob-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProGainKnobProDark {...props} />
    </div>
  ),
  "cult-pro-gain-knob-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProGainKnobStudioSlate {...props} />
    </div>
  ),
  "cult-pro-gain-knob-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProGainKnobNeonAccent {...props} />
    </div>
  ),
  "cult-pro-gain-knob-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProGainKnobMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-gain-knob-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProGainKnobGlassFrost {...props} />
    </div>
  ),
  "cult-pro-pan-slider-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProPanSliderProDark {...props} />
    </div>
  ),
  "cult-pro-pan-slider-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProPanSliderStudioSlate {...props} />
    </div>
  ),
  "cult-pro-pan-slider-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProPanSliderNeonAccent {...props} />
    </div>
  ),
  "cult-pro-pan-slider-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProPanSliderMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-pan-slider-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProPanSliderGlassFrost {...props} />
    </div>
  ),
  "cult-pro-vumeter-peak-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProVumeterPeakProDark {...props} />
    </div>
  ),
  "cult-pro-vumeter-peak-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProVumeterPeakStudioSlate {...props} />
    </div>
  ),
  "cult-pro-vumeter-peak-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProVumeterPeakNeonAccent {...props} />
    </div>
  ),
  "cult-pro-vumeter-peak-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProVumeterPeakMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-vumeter-peak-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProVumeterPeakGlassFrost {...props} />
    </div>
  ),
  "cult-pro-codec-badge-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProCodecBadgeProDark {...props} />
    </div>
  ),
  "cult-pro-codec-badge-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProCodecBadgeStudioSlate {...props} />
    </div>
  ),
  "cult-pro-codec-badge-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProCodecBadgeNeonAccent {...props} />
    </div>
  ),
  "cult-pro-codec-badge-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProCodecBadgeMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-codec-badge-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProCodecBadgeGlassFrost {...props} />
    </div>
  ),
  "cult-pro-aspect-ratio-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAspectRatioProDark {...props} />
    </div>
  ),
  "cult-pro-aspect-ratio-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAspectRatioStudioSlate {...props} />
    </div>
  ),
  "cult-pro-aspect-ratio-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAspectRatioNeonAccent {...props} />
    </div>
  ),
  "cult-pro-aspect-ratio-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAspectRatioMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-aspect-ratio-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAspectRatioGlassFrost {...props} />
    </div>
  ),
  "cult-pro-anchor-point-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAnchorPointProDark {...props} />
    </div>
  ),
  "cult-pro-anchor-point-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAnchorPointStudioSlate {...props} />
    </div>
  ),
  "cult-pro-anchor-point-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAnchorPointNeonAccent {...props} />
    </div>
  ),
  "cult-pro-anchor-point-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAnchorPointMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-anchor-point-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAnchorPointGlassFrost {...props} />
    </div>
  ),
  "cult-pro-handle-node-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProHandleNodeProDark {...props} />
    </div>
  ),
  "cult-pro-handle-node-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProHandleNodeStudioSlate {...props} />
    </div>
  ),
  "cult-pro-handle-node-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProHandleNodeNeonAccent {...props} />
    </div>
  ),
  "cult-pro-handle-node-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProHandleNodeMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-handle-node-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProHandleNodeGlassFrost {...props} />
    </div>
  ),
  "cult-pro-fps-marker-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProFpsMarkerProDark {...props} />
    </div>
  ),
  "cult-pro-fps-marker-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProFpsMarkerStudioSlate {...props} />
    </div>
  ),
  "cult-pro-fps-marker-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProFpsMarkerNeonAccent {...props} />
    </div>
  ),
  "cult-pro-fps-marker-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProFpsMarkerMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-fps-marker-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProFpsMarkerGlassFrost {...props} />
    </div>
  ),
  "cult-pro-exposure-pill-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProExposurePillProDark {...props} />
    </div>
  ),
  "cult-pro-exposure-pill-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProExposurePillStudioSlate {...props} />
    </div>
  ),
  "cult-pro-exposure-pill-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProExposurePillNeonAccent {...props} />
    </div>
  ),
  "cult-pro-exposure-pill-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProExposurePillMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-exposure-pill-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProExposurePillGlassFrost {...props} />
    </div>
  ),
  "cult-pro-lut-card-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProLutCardProDark {...props} />
    </div>
  ),
  "cult-pro-lut-card-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProLutCardStudioSlate {...props} />
    </div>
  ),
  "cult-pro-lut-card-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProLutCardNeonAccent {...props} />
    </div>
  ),
  "cult-pro-lut-card-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProLutCardMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-lut-card-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProLutCardGlassFrost {...props} />
    </div>
  ),
  "cult-pro-audio-lane-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAudioLaneProDark {...props} />
    </div>
  ),
  "cult-pro-audio-lane-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAudioLaneStudioSlate {...props} />
    </div>
  ),
  "cult-pro-audio-lane-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAudioLaneNeonAccent {...props} />
    </div>
  ),
  "cult-pro-audio-lane-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAudioLaneMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-audio-lane-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProAudioLaneGlassFrost {...props} />
    </div>
  ),
  "cult-pro-clip-warning-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProClipWarningProDark {...props} />
    </div>
  ),
  "cult-pro-clip-warning-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProClipWarningStudioSlate {...props} />
    </div>
  ),
  "cult-pro-clip-warning-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProClipWarningNeonAccent {...props} />
    </div>
  ),
  "cult-pro-clip-warning-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProClipWarningMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-clip-warning-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProClipWarningGlassFrost {...props} />
    </div>
  ),
  "cult-pro-keyframe-pin-pro-dark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProKeyframePinProDark {...props} />
    </div>
  ),
  "cult-pro-keyframe-pin-studio-slate": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProKeyframePinStudioSlate {...props} />
    </div>
  ),
  "cult-pro-keyframe-pin-neon-accent": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProKeyframePinNeonAccent {...props} />
    </div>
  ),
  "cult-pro-keyframe-pin-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProKeyframePinMinimalOutline {...props} />
    </div>
  ),
  "cult-pro-keyframe-pin-glass-frost": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CultProKeyframePinGlassFrost {...props} />
    </div>
  ),

  "card-saas-tier-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSaasTierBento {...props} />
    </div>
  ),
  "card-saas-tier-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSaasTierGlassmorphic {...props} />
    </div>
  ),
  "card-saas-tier-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSaasTierGradientBorder {...props} />
    </div>
  ),
  "card-saas-tier-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSaasTierTiltInteractive {...props} />
    </div>
  ),
  "card-saas-tier-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSaasTierShimmerHighlight {...props} />
    </div>
  ),
  "card-saas-tier-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSaasTierMinimalOutline {...props} />
    </div>
  ),
  "card-dev-feature-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardDevFeatureBento {...props} />
    </div>
  ),
  "card-dev-feature-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardDevFeatureGlassmorphic {...props} />
    </div>
  ),
  "card-dev-feature-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardDevFeatureGradientBorder {...props} />
    </div>
  ),
  "card-dev-feature-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardDevFeatureTiltInteractive {...props} />
    </div>
  ),
  "card-dev-feature-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardDevFeatureShimmerHighlight {...props} />
    </div>
  ),
  "card-dev-feature-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardDevFeatureMinimalOutline {...props} />
    </div>
  ),
  "card-audit-report-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardAuditReportBento {...props} />
    </div>
  ),
  "card-audit-report-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardAuditReportGlassmorphic {...props} />
    </div>
  ),
  "card-audit-report-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardAuditReportGradientBorder {...props} />
    </div>
  ),
  "card-audit-report-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardAuditReportTiltInteractive {...props} />
    </div>
  ),
  "card-audit-report-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardAuditReportShimmerHighlight {...props} />
    </div>
  ),
  "card-audit-report-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardAuditReportMinimalOutline {...props} />
    </div>
  ),
  "card-api-gateway-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardApiGatewayBento {...props} />
    </div>
  ),
  "card-api-gateway-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardApiGatewayGlassmorphic {...props} />
    </div>
  ),
  "card-api-gateway-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardApiGatewayGradientBorder {...props} />
    </div>
  ),
  "card-api-gateway-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardApiGatewayTiltInteractive {...props} />
    </div>
  ),
  "card-api-gateway-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardApiGatewayShimmerHighlight {...props} />
    </div>
  ),
  "card-api-gateway-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardApiGatewayMinimalOutline {...props} />
    </div>
  ),
  "card-user-profile-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardUserProfileBento {...props} />
    </div>
  ),
  "card-user-profile-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardUserProfileGlassmorphic {...props} />
    </div>
  ),
  "card-user-profile-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardUserProfileGradientBorder {...props} />
    </div>
  ),
  "card-user-profile-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardUserProfileTiltInteractive {...props} />
    </div>
  ),
  "card-user-profile-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardUserProfileShimmerHighlight {...props} />
    </div>
  ),
  "card-user-profile-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardUserProfileMinimalOutline {...props} />
    </div>
  ),
  "card-stat-summary-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardStatSummaryBento {...props} />
    </div>
  ),
  "card-stat-summary-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardStatSummaryGlassmorphic {...props} />
    </div>
  ),
  "card-stat-summary-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardStatSummaryGradientBorder {...props} />
    </div>
  ),
  "card-stat-summary-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardStatSummaryTiltInteractive {...props} />
    </div>
  ),
  "card-stat-summary-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardStatSummaryShimmerHighlight {...props} />
    </div>
  ),
  "card-stat-summary-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardStatSummaryMinimalOutline {...props} />
    </div>
  ),
  "card-media-stream-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardMediaStreamBento {...props} />
    </div>
  ),
  "card-media-stream-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardMediaStreamGlassmorphic {...props} />
    </div>
  ),
  "card-media-stream-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardMediaStreamGradientBorder {...props} />
    </div>
  ),
  "card-media-stream-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardMediaStreamTiltInteractive {...props} />
    </div>
  ),
  "card-media-stream-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardMediaStreamShimmerHighlight {...props} />
    </div>
  ),
  "card-media-stream-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardMediaStreamMinimalOutline {...props} />
    </div>
  ),
  "card-security-key-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSecurityKeyBento {...props} />
    </div>
  ),
  "card-security-key-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSecurityKeyGlassmorphic {...props} />
    </div>
  ),
  "card-security-key-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSecurityKeyGradientBorder {...props} />
    </div>
  ),
  "card-security-key-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSecurityKeyTiltInteractive {...props} />
    </div>
  ),
  "card-security-key-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSecurityKeyShimmerHighlight {...props} />
    </div>
  ),
  "card-security-key-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardSecurityKeyMinimalOutline {...props} />
    </div>
  ),
  "card-workflow-step-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardWorkflowStepBento {...props} />
    </div>
  ),
  "card-workflow-step-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardWorkflowStepGlassmorphic {...props} />
    </div>
  ),
  "card-workflow-step-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardWorkflowStepGradientBorder {...props} />
    </div>
  ),
  "card-workflow-step-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardWorkflowStepTiltInteractive {...props} />
    </div>
  ),
  "card-workflow-step-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardWorkflowStepShimmerHighlight {...props} />
    </div>
  ),
  "card-workflow-step-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardWorkflowStepMinimalOutline {...props} />
    </div>
  ),
  "card-cluster-node-bento": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardClusterNodeBento {...props} />
    </div>
  ),
  "card-cluster-node-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardClusterNodeGlassmorphic {...props} />
    </div>
  ),
  "card-cluster-node-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardClusterNodeGradientBorder {...props} />
    </div>
  ),
  "card-cluster-node-tilt-interactive": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardClusterNodeTiltInteractive {...props} />
    </div>
  ),
  "card-cluster-node-shimmer-highlight": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardClusterNodeShimmerHighlight {...props} />
    </div>
  ),
  "card-cluster-node-minimal-outline": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <CardClusterNodeMinimalOutline {...props} />
    </div>
  ),
  "nav-workspace-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavWorkspacePillSlider {...props} />
    </div>
  ),
  "nav-workspace-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavWorkspaceUnderlineFluid {...props} />
    </div>
  ),
  "nav-workspace-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavWorkspaceFloatingDock {...props} />
    </div>
  ),
  "nav-workspace-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavWorkspaceSegmentedSwitch {...props} />
    </div>
  ),
  "nav-workspace-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavWorkspaceStepperChain {...props} />
    </div>
  ),
  "nav-workspace-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavWorkspaceCompactBadge {...props} />
    </div>
  ),
  "nav-analytics-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavAnalyticsPillSlider {...props} />
    </div>
  ),
  "nav-analytics-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavAnalyticsUnderlineFluid {...props} />
    </div>
  ),
  "nav-analytics-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavAnalyticsFloatingDock {...props} />
    </div>
  ),
  "nav-analytics-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavAnalyticsSegmentedSwitch {...props} />
    </div>
  ),
  "nav-analytics-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavAnalyticsStepperChain {...props} />
    </div>
  ),
  "nav-analytics-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavAnalyticsCompactBadge {...props} />
    </div>
  ),
  "nav-editor-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavEditorPillSlider {...props} />
    </div>
  ),
  "nav-editor-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavEditorUnderlineFluid {...props} />
    </div>
  ),
  "nav-editor-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavEditorFloatingDock {...props} />
    </div>
  ),
  "nav-editor-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavEditorSegmentedSwitch {...props} />
    </div>
  ),
  "nav-editor-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavEditorStepperChain {...props} />
    </div>
  ),
  "nav-editor-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavEditorCompactBadge {...props} />
    </div>
  ),
  "nav-deployments-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDeploymentsPillSlider {...props} />
    </div>
  ),
  "nav-deployments-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDeploymentsUnderlineFluid {...props} />
    </div>
  ),
  "nav-deployments-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDeploymentsFloatingDock {...props} />
    </div>
  ),
  "nav-deployments-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDeploymentsSegmentedSwitch {...props} />
    </div>
  ),
  "nav-deployments-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDeploymentsStepperChain {...props} />
    </div>
  ),
  "nav-deployments-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDeploymentsCompactBadge {...props} />
    </div>
  ),
  "nav-security-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavSecurityPillSlider {...props} />
    </div>
  ),
  "nav-security-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavSecurityUnderlineFluid {...props} />
    </div>
  ),
  "nav-security-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavSecurityFloatingDock {...props} />
    </div>
  ),
  "nav-security-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavSecuritySegmentedSwitch {...props} />
    </div>
  ),
  "nav-security-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavSecurityStepperChain {...props} />
    </div>
  ),
  "nav-security-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavSecurityCompactBadge {...props} />
    </div>
  ),
  "nav-billing-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavBillingPillSlider {...props} />
    </div>
  ),
  "nav-billing-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavBillingUnderlineFluid {...props} />
    </div>
  ),
  "nav-billing-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavBillingFloatingDock {...props} />
    </div>
  ),
  "nav-billing-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavBillingSegmentedSwitch {...props} />
    </div>
  ),
  "nav-billing-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavBillingStepperChain {...props} />
    </div>
  ),
  "nav-billing-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavBillingCompactBadge {...props} />
    </div>
  ),
  "nav-logs-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavLogsPillSlider {...props} />
    </div>
  ),
  "nav-logs-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavLogsUnderlineFluid {...props} />
    </div>
  ),
  "nav-logs-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavLogsFloatingDock {...props} />
    </div>
  ),
  "nav-logs-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavLogsSegmentedSwitch {...props} />
    </div>
  ),
  "nav-logs-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavLogsStepperChain {...props} />
    </div>
  ),
  "nav-logs-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavLogsCompactBadge {...props} />
    </div>
  ),
  "nav-devices-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDevicesPillSlider {...props} />
    </div>
  ),
  "nav-devices-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDevicesUnderlineFluid {...props} />
    </div>
  ),
  "nav-devices-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDevicesFloatingDock {...props} />
    </div>
  ),
  "nav-devices-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDevicesSegmentedSwitch {...props} />
    </div>
  ),
  "nav-devices-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDevicesStepperChain {...props} />
    </div>
  ),
  "nav-devices-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavDevicesCompactBadge {...props} />
    </div>
  ),
  "nav-storage-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavStoragePillSlider {...props} />
    </div>
  ),
  "nav-storage-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavStorageUnderlineFluid {...props} />
    </div>
  ),
  "nav-storage-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavStorageFloatingDock {...props} />
    </div>
  ),
  "nav-storage-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavStorageSegmentedSwitch {...props} />
    </div>
  ),
  "nav-storage-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavStorageStepperChain {...props} />
    </div>
  ),
  "nav-storage-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavStorageCompactBadge {...props} />
    </div>
  ),
  "nav-models-pill-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavModelsPillSlider {...props} />
    </div>
  ),
  "nav-models-underline-fluid": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavModelsUnderlineFluid {...props} />
    </div>
  ),
  "nav-models-floating-dock": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavModelsFloatingDock {...props} />
    </div>
  ),
  "nav-models-segmented-switch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavModelsSegmentedSwitch {...props} />
    </div>
  ),
  "nav-models-stepper-chain": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavModelsStepperChain {...props} />
    </div>
  ),
  "nav-models-compact-badge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <NavModelsCompactBadge {...props} />
    </div>
  ),
  "list-timeline-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTimelineTimelineNode {...props} />
    </div>
  ),
  "list-timeline-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTimelineCompactRow {...props} />
    </div>
  ),
  "list-timeline-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTimelineBadgeCallout {...props} />
    </div>
  ),
  "list-timeline-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTimelineInteractiveCard {...props} />
    </div>
  ),
  "list-timeline-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTimelinePillSummary {...props} />
    </div>
  ),
  "list-timeline-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTimelineStatusIndicator {...props} />
    </div>
  ),
  "list-security-alert-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListSecurityAlertTimelineNode {...props} />
    </div>
  ),
  "list-security-alert-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListSecurityAlertCompactRow {...props} />
    </div>
  ),
  "list-security-alert-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListSecurityAlertBadgeCallout {...props} />
    </div>
  ),
  "list-security-alert-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListSecurityAlertInteractiveCard {...props} />
    </div>
  ),
  "list-security-alert-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListSecurityAlertPillSummary {...props} />
    </div>
  ),
  "list-security-alert-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListSecurityAlertStatusIndicator {...props} />
    </div>
  ),
  "list-git-merge-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListGitMergeTimelineNode {...props} />
    </div>
  ),
  "list-git-merge-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListGitMergeCompactRow {...props} />
    </div>
  ),
  "list-git-merge-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListGitMergeBadgeCallout {...props} />
    </div>
  ),
  "list-git-merge-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListGitMergeInteractiveCard {...props} />
    </div>
  ),
  "list-git-merge-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListGitMergePillSummary {...props} />
    </div>
  ),
  "list-git-merge-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListGitMergeStatusIndicator {...props} />
    </div>
  ),
  "list-token-rotation-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTokenRotationTimelineNode {...props} />
    </div>
  ),
  "list-token-rotation-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTokenRotationCompactRow {...props} />
    </div>
  ),
  "list-token-rotation-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTokenRotationBadgeCallout {...props} />
    </div>
  ),
  "list-token-rotation-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTokenRotationInteractiveCard {...props} />
    </div>
  ),
  "list-token-rotation-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTokenRotationPillSummary {...props} />
    </div>
  ),
  "list-token-rotation-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTokenRotationStatusIndicator {...props} />
    </div>
  ),
  "list-db-backup-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDbBackupTimelineNode {...props} />
    </div>
  ),
  "list-db-backup-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDbBackupCompactRow {...props} />
    </div>
  ),
  "list-db-backup-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDbBackupBadgeCallout {...props} />
    </div>
  ),
  "list-db-backup-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDbBackupInteractiveCard {...props} />
    </div>
  ),
  "list-db-backup-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDbBackupPillSummary {...props} />
    </div>
  ),
  "list-db-backup-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDbBackupStatusIndicator {...props} />
    </div>
  ),
  "list-dns-sync-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDnsSyncTimelineNode {...props} />
    </div>
  ),
  "list-dns-sync-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDnsSyncCompactRow {...props} />
    </div>
  ),
  "list-dns-sync-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDnsSyncBadgeCallout {...props} />
    </div>
  ),
  "list-dns-sync-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDnsSyncInteractiveCard {...props} />
    </div>
  ),
  "list-dns-sync-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDnsSyncPillSummary {...props} />
    </div>
  ),
  "list-dns-sync-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListDnsSyncStatusIndicator {...props} />
    </div>
  ),
  "list-test-passed-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTestPassedTimelineNode {...props} />
    </div>
  ),
  "list-test-passed-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTestPassedCompactRow {...props} />
    </div>
  ),
  "list-test-passed-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTestPassedBadgeCallout {...props} />
    </div>
  ),
  "list-test-passed-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTestPassedInteractiveCard {...props} />
    </div>
  ),
  "list-test-passed-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTestPassedPillSummary {...props} />
    </div>
  ),
  "list-test-passed-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListTestPassedStatusIndicator {...props} />
    </div>
  ),
  "list-package-update-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListPackageUpdateTimelineNode {...props} />
    </div>
  ),
  "list-package-update-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListPackageUpdateCompactRow {...props} />
    </div>
  ),
  "list-package-update-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListPackageUpdateBadgeCallout {...props} />
    </div>
  ),
  "list-package-update-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListPackageUpdateInteractiveCard {...props} />
    </div>
  ),
  "list-package-update-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListPackageUpdatePillSummary {...props} />
    </div>
  ),
  "list-package-update-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListPackageUpdateStatusIndicator {...props} />
    </div>
  ),
  "list-cache-purge-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListCachePurgeTimelineNode {...props} />
    </div>
  ),
  "list-cache-purge-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListCachePurgeCompactRow {...props} />
    </div>
  ),
  "list-cache-purge-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListCachePurgeBadgeCallout {...props} />
    </div>
  ),
  "list-cache-purge-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListCachePurgeInteractiveCard {...props} />
    </div>
  ),
  "list-cache-purge-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListCachePurgePillSummary {...props} />
    </div>
  ),
  "list-cache-purge-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListCachePurgeStatusIndicator {...props} />
    </div>
  ),
  "list-metric-threshold-timeline-node": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListMetricThresholdTimelineNode {...props} />
    </div>
  ),
  "list-metric-threshold-compact-row": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListMetricThresholdCompactRow {...props} />
    </div>
  ),
  "list-metric-threshold-badge-callout": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListMetricThresholdBadgeCallout {...props} />
    </div>
  ),
  "list-metric-threshold-interactive-card": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListMetricThresholdInteractiveCard {...props} />
    </div>
  ),
  "list-metric-threshold-pill-summary": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListMetricThresholdPillSummary {...props} />
    </div>
  ),
  "list-metric-threshold-status-indicator": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ListMetricThresholdStatusIndicator {...props} />
    </div>
  ),
  "picker-opacity-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerOpacityTooltipSlider {...props} />
    </div>
  ),
  "picker-opacity-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerOpacityStepperButtons {...props} />
    </div>
  ),
  "picker-opacity-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerOpacitySegmentedMarks {...props} />
    </div>
  ),
  "picker-opacity-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerOpacityCircularGauge {...props} />
    </div>
  ),
  "picker-opacity-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerOpacityMinimalTrack {...props} />
    </div>
  ),
  "picker-opacity-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerOpacityNumericInputSync {...props} />
    </div>
  ),
  "picker-blur-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBlurTooltipSlider {...props} />
    </div>
  ),
  "picker-blur-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBlurStepperButtons {...props} />
    </div>
  ),
  "picker-blur-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBlurSegmentedMarks {...props} />
    </div>
  ),
  "picker-blur-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBlurCircularGauge {...props} />
    </div>
  ),
  "picker-blur-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBlurMinimalTrack {...props} />
    </div>
  ),
  "picker-blur-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBlurNumericInputSync {...props} />
    </div>
  ),
  "picker-scale-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerScaleTooltipSlider {...props} />
    </div>
  ),
  "picker-scale-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerScaleStepperButtons {...props} />
    </div>
  ),
  "picker-scale-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerScaleSegmentedMarks {...props} />
    </div>
  ),
  "picker-scale-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerScaleCircularGauge {...props} />
    </div>
  ),
  "picker-scale-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerScaleMinimalTrack {...props} />
    </div>
  ),
  "picker-scale-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerScaleNumericInputSync {...props} />
    </div>
  ),
  "picker-border-radius-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBorderRadiusTooltipSlider {...props} />
    </div>
  ),
  "picker-border-radius-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBorderRadiusStepperButtons {...props} />
    </div>
  ),
  "picker-border-radius-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBorderRadiusSegmentedMarks {...props} />
    </div>
  ),
  "picker-border-radius-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBorderRadiusCircularGauge {...props} />
    </div>
  ),
  "picker-border-radius-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBorderRadiusMinimalTrack {...props} />
    </div>
  ),
  "picker-border-radius-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerBorderRadiusNumericInputSync {...props} />
    </div>
  ),
  "picker-speed-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpeedTooltipSlider {...props} />
    </div>
  ),
  "picker-speed-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpeedStepperButtons {...props} />
    </div>
  ),
  "picker-speed-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpeedSegmentedMarks {...props} />
    </div>
  ),
  "picker-speed-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpeedCircularGauge {...props} />
    </div>
  ),
  "picker-speed-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpeedMinimalTrack {...props} />
    </div>
  ),
  "picker-speed-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpeedNumericInputSync {...props} />
    </div>
  ),
  "picker-spring-stiffness-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringStiffnessTooltipSlider {...props} />
    </div>
  ),
  "picker-spring-stiffness-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringStiffnessStepperButtons {...props} />
    </div>
  ),
  "picker-spring-stiffness-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringStiffnessSegmentedMarks {...props} />
    </div>
  ),
  "picker-spring-stiffness-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringStiffnessCircularGauge {...props} />
    </div>
  ),
  "picker-spring-stiffness-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringStiffnessMinimalTrack {...props} />
    </div>
  ),
  "picker-spring-stiffness-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringStiffnessNumericInputSync {...props} />
    </div>
  ),
  "picker-spring-damping-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringDampingTooltipSlider {...props} />
    </div>
  ),
  "picker-spring-damping-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringDampingStepperButtons {...props} />
    </div>
  ),
  "picker-spring-damping-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringDampingSegmentedMarks {...props} />
    </div>
  ),
  "picker-spring-damping-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringDampingCircularGauge {...props} />
    </div>
  ),
  "picker-spring-damping-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringDampingMinimalTrack {...props} />
    </div>
  ),
  "picker-spring-damping-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerSpringDampingNumericInputSync {...props} />
    </div>
  ),
  "picker-font-weight-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerFontWeightTooltipSlider {...props} />
    </div>
  ),
  "picker-font-weight-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerFontWeightStepperButtons {...props} />
    </div>
  ),
  "picker-font-weight-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerFontWeightSegmentedMarks {...props} />
    </div>
  ),
  "picker-font-weight-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerFontWeightCircularGauge {...props} />
    </div>
  ),
  "picker-font-weight-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerFontWeightMinimalTrack {...props} />
    </div>
  ),
  "picker-font-weight-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerFontWeightNumericInputSync {...props} />
    </div>
  ),
  "picker-volume-level-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerVolumeLevelTooltipSlider {...props} />
    </div>
  ),
  "picker-volume-level-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerVolumeLevelStepperButtons {...props} />
    </div>
  ),
  "picker-volume-level-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerVolumeLevelSegmentedMarks {...props} />
    </div>
  ),
  "picker-volume-level-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerVolumeLevelCircularGauge {...props} />
    </div>
  ),
  "picker-volume-level-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerVolumeLevelMinimalTrack {...props} />
    </div>
  ),
  "picker-volume-level-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerVolumeLevelNumericInputSync {...props} />
    </div>
  ),
  "picker-contrast-ratio-tooltip-slider": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerContrastRatioTooltipSlider {...props} />
    </div>
  ),
  "picker-contrast-ratio-stepper-buttons": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerContrastRatioStepperButtons {...props} />
    </div>
  ),
  "picker-contrast-ratio-segmented-marks": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerContrastRatioSegmentedMarks {...props} />
    </div>
  ),
  "picker-contrast-ratio-circular-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerContrastRatioCircularGauge {...props} />
    </div>
  ),
  "picker-contrast-ratio-minimal-track": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerContrastRatioMinimalTrack {...props} />
    </div>
  ),
  "picker-contrast-ratio-numeric-input-sync": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <PickerContrastRatioNumericInputSync {...props} />
    </div>
  ),
  "trigger-copy-token-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerCopyTokenMorphState {...props} />
    </div>
  ),
  "trigger-copy-token-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerCopyTokenShimmerRing {...props} />
    </div>
  ),
  "trigger-copy-token-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerCopyTokenHoldConfirm {...props} />
    </div>
  ),
  "trigger-copy-token-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerCopyTokenSplitChevron {...props} />
    </div>
  ),
  "trigger-copy-token-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerCopyTokenTactilePill {...props} />
    </div>
  ),
  "trigger-copy-token-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerCopyTokenGhostGlow {...props} />
    </div>
  ),
  "trigger-export-zip-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerExportZipMorphState {...props} />
    </div>
  ),
  "trigger-export-zip-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerExportZipShimmerRing {...props} />
    </div>
  ),
  "trigger-export-zip-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerExportZipHoldConfirm {...props} />
    </div>
  ),
  "trigger-export-zip-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerExportZipSplitChevron {...props} />
    </div>
  ),
  "trigger-export-zip-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerExportZipTactilePill {...props} />
    </div>
  ),
  "trigger-export-zip-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerExportZipGhostGlow {...props} />
    </div>
  ),
  "trigger-generate-key-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerGenerateKeyMorphState {...props} />
    </div>
  ),
  "trigger-generate-key-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerGenerateKeyShimmerRing {...props} />
    </div>
  ),
  "trigger-generate-key-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerGenerateKeyHoldConfirm {...props} />
    </div>
  ),
  "trigger-generate-key-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerGenerateKeySplitChevron {...props} />
    </div>
  ),
  "trigger-generate-key-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerGenerateKeyTactilePill {...props} />
    </div>
  ),
  "trigger-generate-key-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerGenerateKeyGhostGlow {...props} />
    </div>
  ),
  "trigger-publish-npm-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPublishNpmMorphState {...props} />
    </div>
  ),
  "trigger-publish-npm-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPublishNpmShimmerRing {...props} />
    </div>
  ),
  "trigger-publish-npm-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPublishNpmHoldConfirm {...props} />
    </div>
  ),
  "trigger-publish-npm-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPublishNpmSplitChevron {...props} />
    </div>
  ),
  "trigger-publish-npm-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPublishNpmTactilePill {...props} />
    </div>
  ),
  "trigger-publish-npm-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPublishNpmGhostGlow {...props} />
    </div>
  ),
  "trigger-purge-cdn-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPurgeCdnMorphState {...props} />
    </div>
  ),
  "trigger-purge-cdn-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPurgeCdnShimmerRing {...props} />
    </div>
  ),
  "trigger-purge-cdn-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPurgeCdnHoldConfirm {...props} />
    </div>
  ),
  "trigger-purge-cdn-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPurgeCdnSplitChevron {...props} />
    </div>
  ),
  "trigger-purge-cdn-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPurgeCdnTactilePill {...props} />
    </div>
  ),
  "trigger-purge-cdn-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerPurgeCdnGhostGlow {...props} />
    </div>
  ),
  "trigger-run-linter-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerRunLinterMorphState {...props} />
    </div>
  ),
  "trigger-run-linter-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerRunLinterShimmerRing {...props} />
    </div>
  ),
  "trigger-run-linter-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerRunLinterHoldConfirm {...props} />
    </div>
  ),
  "trigger-run-linter-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerRunLinterSplitChevron {...props} />
    </div>
  ),
  "trigger-run-linter-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerRunLinterTactilePill {...props} />
    </div>
  ),
  "trigger-run-linter-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerRunLinterGhostGlow {...props} />
    </div>
  ),
  "trigger-sync-figma-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerSyncFigmaMorphState {...props} />
    </div>
  ),
  "trigger-sync-figma-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerSyncFigmaShimmerRing {...props} />
    </div>
  ),
  "trigger-sync-figma-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerSyncFigmaHoldConfirm {...props} />
    </div>
  ),
  "trigger-sync-figma-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerSyncFigmaSplitChevron {...props} />
    </div>
  ),
  "trigger-sync-figma-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerSyncFigmaTactilePill {...props} />
    </div>
  ),
  "trigger-sync-figma-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerSyncFigmaGhostGlow {...props} />
    </div>
  ),
  "trigger-scan-deps-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerScanDepsMorphState {...props} />
    </div>
  ),
  "trigger-scan-deps-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerScanDepsShimmerRing {...props} />
    </div>
  ),
  "trigger-scan-deps-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerScanDepsHoldConfirm {...props} />
    </div>
  ),
  "trigger-scan-deps-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerScanDepsSplitChevron {...props} />
    </div>
  ),
  "trigger-scan-deps-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerScanDepsTactilePill {...props} />
    </div>
  ),
  "trigger-scan-deps-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerScanDepsGhostGlow {...props} />
    </div>
  ),
  "trigger-benchmark-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerBenchmarkMorphState {...props} />
    </div>
  ),
  "trigger-benchmark-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerBenchmarkShimmerRing {...props} />
    </div>
  ),
  "trigger-benchmark-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerBenchmarkHoldConfirm {...props} />
    </div>
  ),
  "trigger-benchmark-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerBenchmarkSplitChevron {...props} />
    </div>
  ),
  "trigger-benchmark-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerBenchmarkTactilePill {...props} />
    </div>
  ),
  "trigger-benchmark-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerBenchmarkGhostGlow {...props} />
    </div>
  ),
  "trigger-invite-member-morph-state": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerInviteMemberMorphState {...props} />
    </div>
  ),
  "trigger-invite-member-shimmer-ring": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerInviteMemberShimmerRing {...props} />
    </div>
  ),
  "trigger-invite-member-hold-confirm": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerInviteMemberHoldConfirm {...props} />
    </div>
  ),
  "trigger-invite-member-split-chevron": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerInviteMemberSplitChevron {...props} />
    </div>
  ),
  "trigger-invite-member-tactile-pill": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerInviteMemberTactilePill {...props} />
    </div>
  ),
  "trigger-invite-member-ghost-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TriggerInviteMemberGhostGlow {...props} />
    </div>
  ),

  "input-currency-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCurrencyFloating {...props} />
    </div>
  ),
  "input-currency-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCurrencyUnderglow {...props} />
    </div>
  ),
  "input-currency-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCurrencySegmented {...props} />
    </div>
  ),
  "input-currency-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCurrencyGlassmorphic {...props} />
    </div>
  ),
  "input-currency-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCurrencyMinimalist {...props} />
    </div>
  ),
  "input-crypto-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCryptoFloating {...props} />
    </div>
  ),
  "input-crypto-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCryptoUnderglow {...props} />
    </div>
  ),
  "input-crypto-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCryptoSegmented {...props} />
    </div>
  ),
  "input-crypto-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCryptoGlassmorphic {...props} />
    </div>
  ),
  "input-crypto-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputCryptoMinimalist {...props} />
    </div>
  ),
  "input-url-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputUrlFloating {...props} />
    </div>
  ),
  "input-url-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputUrlUnderglow {...props} />
    </div>
  ),
  "input-url-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputUrlSegmented {...props} />
    </div>
  ),
  "input-url-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputUrlGlassmorphic {...props} />
    </div>
  ),
  "input-url-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputUrlMinimalist {...props} />
    </div>
  ),
  "input-percentage-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPercentageFloating {...props} />
    </div>
  ),
  "input-percentage-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPercentageUnderglow {...props} />
    </div>
  ),
  "input-percentage-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPercentageSegmented {...props} />
    </div>
  ),
  "input-percentage-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPercentageGlassmorphic {...props} />
    </div>
  ),
  "input-percentage-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPercentageMinimalist {...props} />
    </div>
  ),
  "input-port-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPortFloating {...props} />
    </div>
  ),
  "input-port-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPortUnderglow {...props} />
    </div>
  ),
  "input-port-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPortSegmented {...props} />
    </div>
  ),
  "input-port-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPortGlassmorphic {...props} />
    </div>
  ),
  "input-port-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputPortMinimalist {...props} />
    </div>
  ),
  "input-hex-color-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputHexColorFloating {...props} />
    </div>
  ),
  "input-hex-color-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputHexColorUnderglow {...props} />
    </div>
  ),
  "input-hex-color-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputHexColorSegmented {...props} />
    </div>
  ),
  "input-hex-color-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputHexColorGlassmorphic {...props} />
    </div>
  ),
  "input-hex-color-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputHexColorMinimalist {...props} />
    </div>
  ),
  "input-subdomain-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputSubdomainFloating {...props} />
    </div>
  ),
  "input-subdomain-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputSubdomainUnderglow {...props} />
    </div>
  ),
  "input-subdomain-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputSubdomainSegmented {...props} />
    </div>
  ),
  "input-subdomain-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputSubdomainGlassmorphic {...props} />
    </div>
  ),
  "input-subdomain-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputSubdomainMinimalist {...props} />
    </div>
  ),
  "input-ip-address-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputIpAddressFloating {...props} />
    </div>
  ),
  "input-ip-address-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputIpAddressUnderglow {...props} />
    </div>
  ),
  "input-ip-address-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputIpAddressSegmented {...props} />
    </div>
  ),
  "input-ip-address-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputIpAddressGlassmorphic {...props} />
    </div>
  ),
  "input-ip-address-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputIpAddressMinimalist {...props} />
    </div>
  ),
  "input-mac-address-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputMacAddressFloating {...props} />
    </div>
  ),
  "input-mac-address-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputMacAddressUnderglow {...props} />
    </div>
  ),
  "input-mac-address-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputMacAddressSegmented {...props} />
    </div>
  ),
  "input-mac-address-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputMacAddressGlassmorphic {...props} />
    </div>
  ),
  "input-mac-address-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputMacAddressMinimalist {...props} />
    </div>
  ),
  "input-git-commit-floating": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputGitCommitFloating {...props} />
    </div>
  ),
  "input-git-commit-underglow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputGitCommitUnderglow {...props} />
    </div>
  ),
  "input-git-commit-segmented": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputGitCommitSegmented {...props} />
    </div>
  ),
  "input-git-commit-glassmorphic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputGitCommitGlassmorphic {...props} />
    </div>
  ),
  "input-git-commit-minimalist": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <InputGitCommitMinimalist {...props} />
    </div>
  ),
  "tremor-mrr-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrSpark {...props} />
    </div>
  ),
  "tremor-mrr-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrGauge {...props} />
    </div>
  ),
  "tremor-mrr-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrBarDistribution {...props} />
    </div>
  ),
  "tremor-mrr-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrDeltaTrend {...props} />
    </div>
  ),
  "tremor-mrr-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorMrrMinimalStat {...props} />
    </div>
  ),
  "tremor-active-users-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorActiveUsersSpark {...props} />
    </div>
  ),
  "tremor-active-users-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorActiveUsersGauge {...props} />
    </div>
  ),
  "tremor-active-users-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorActiveUsersBarDistribution {...props} />
    </div>
  ),
  "tremor-active-users-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorActiveUsersDeltaTrend {...props} />
    </div>
  ),
  "tremor-active-users-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorActiveUsersMinimalStat {...props} />
    </div>
  ),
  "tremor-latency-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLatencySpark {...props} />
    </div>
  ),
  "tremor-latency-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLatencyGauge {...props} />
    </div>
  ),
  "tremor-latency-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLatencyBarDistribution {...props} />
    </div>
  ),
  "tremor-latency-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLatencyDeltaTrend {...props} />
    </div>
  ),
  "tremor-latency-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorLatencyMinimalStat {...props} />
    </div>
  ),
  "tremor-burn-rate-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBurnRateSpark {...props} />
    </div>
  ),
  "tremor-burn-rate-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBurnRateGauge {...props} />
    </div>
  ),
  "tremor-burn-rate-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBurnRateBarDistribution {...props} />
    </div>
  ),
  "tremor-burn-rate-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBurnRateDeltaTrend {...props} />
    </div>
  ),
  "tremor-burn-rate-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorBurnRateMinimalStat {...props} />
    </div>
  ),
  "tremor-conversion-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorConversionSpark {...props} />
    </div>
  ),
  "tremor-conversion-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorConversionGauge {...props} />
    </div>
  ),
  "tremor-conversion-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorConversionBarDistribution {...props} />
    </div>
  ),
  "tremor-conversion-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorConversionDeltaTrend {...props} />
    </div>
  ),
  "tremor-conversion-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorConversionMinimalStat {...props} />
    </div>
  ),
  "tremor-churn-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorChurnSpark {...props} />
    </div>
  ),
  "tremor-churn-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorChurnGauge {...props} />
    </div>
  ),
  "tremor-churn-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorChurnBarDistribution {...props} />
    </div>
  ),
  "tremor-churn-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorChurnDeltaTrend {...props} />
    </div>
  ),
  "tremor-churn-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorChurnMinimalStat {...props} />
    </div>
  ),
  "tremor-api-calls-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorApiCallsSpark {...props} />
    </div>
  ),
  "tremor-api-calls-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorApiCallsGauge {...props} />
    </div>
  ),
  "tremor-api-calls-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorApiCallsBarDistribution {...props} />
    </div>
  ),
  "tremor-api-calls-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorApiCallsDeltaTrend {...props} />
    </div>
  ),
  "tremor-api-calls-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorApiCallsMinimalStat {...props} />
    </div>
  ),
  "tremor-uptime-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorUptimeSpark {...props} />
    </div>
  ),
  "tremor-uptime-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorUptimeGauge {...props} />
    </div>
  ),
  "tremor-uptime-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorUptimeBarDistribution {...props} />
    </div>
  ),
  "tremor-uptime-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorUptimeDeltaTrend {...props} />
    </div>
  ),
  "tremor-uptime-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorUptimeMinimalStat {...props} />
    </div>
  ),
  "tremor-avg-session-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorAvgSessionSpark {...props} />
    </div>
  ),
  "tremor-avg-session-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorAvgSessionGauge {...props} />
    </div>
  ),
  "tremor-avg-session-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorAvgSessionBarDistribution {...props} />
    </div>
  ),
  "tremor-avg-session-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorAvgSessionDeltaTrend {...props} />
    </div>
  ),
  "tremor-avg-session-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorAvgSessionMinimalStat {...props} />
    </div>
  ),
  "tremor-net-promoter-spark": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNetPromoterSpark {...props} />
    </div>
  ),
  "tremor-net-promoter-gauge": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNetPromoterGauge {...props} />
    </div>
  ),
  "tremor-net-promoter-bar-distribution": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNetPromoterBarDistribution {...props} />
    </div>
  ),
  "tremor-net-promoter-delta-trend": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNetPromoterDeltaTrend {...props} />
    </div>
  ),
  "tremor-net-promoter-minimal-stat": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <TremorNetPromoterMinimalStat {...props} />
    </div>
  ),
  "badge-live-pulse": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeLivePulse {...props} />
    </div>
  ),
  "badge-live-ping": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeLivePing {...props} />
    </div>
  ),
  "badge-live-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeLiveGlow {...props} />
    </div>
  ),
  "badge-live-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeLivePillCompact {...props} />
    </div>
  ),
  "badge-live-tag-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeLiveTagDismiss {...props} />
    </div>
  ),
  "badge-beta-pulse": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeBetaPulse {...props} />
    </div>
  ),
  "badge-beta-ping": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeBetaPing {...props} />
    </div>
  ),
  "badge-beta-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeBetaGlow {...props} />
    </div>
  ),
  "badge-beta-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeBetaPillCompact {...props} />
    </div>
  ),
  "badge-beta-tag-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeBetaTagDismiss {...props} />
    </div>
  ),
  "badge-verified-pulse": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeVerifiedPulse {...props} />
    </div>
  ),
  "badge-verified-ping": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeVerifiedPing {...props} />
    </div>
  ),
  "badge-verified-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeVerifiedGlow {...props} />
    </div>
  ),
  "badge-verified-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeVerifiedPillCompact {...props} />
    </div>
  ),
  "badge-verified-tag-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeVerifiedTagDismiss {...props} />
    </div>
  ),
  "badge-sponsored-pulse": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeSponsoredPulse {...props} />
    </div>
  ),
  "badge-sponsored-ping": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeSponsoredPing {...props} />
    </div>
  ),
  "badge-sponsored-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeSponsoredGlow {...props} />
    </div>
  ),
  "badge-sponsored-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeSponsoredPillCompact {...props} />
    </div>
  ),
  "badge-sponsored-tag-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeSponsoredTagDismiss {...props} />
    </div>
  ),
  "badge-deprecated-pulse": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeDeprecatedPulse {...props} />
    </div>
  ),
  "badge-deprecated-ping": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeDeprecatedPing {...props} />
    </div>
  ),
  "badge-deprecated-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeDeprecatedGlow {...props} />
    </div>
  ),
  "badge-deprecated-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeDeprecatedPillCompact {...props} />
    </div>
  ),
  "badge-deprecated-tag-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeDeprecatedTagDismiss {...props} />
    </div>
  ),
  "badge-enterprise-pulse": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeEnterprisePulse {...props} />
    </div>
  ),
  "badge-enterprise-ping": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeEnterprisePing {...props} />
    </div>
  ),
  "badge-enterprise-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeEnterpriseGlow {...props} />
    </div>
  ),
  "badge-enterprise-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeEnterprisePillCompact {...props} />
    </div>
  ),
  "badge-enterprise-tag-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeEnterpriseTagDismiss {...props} />
    </div>
  ),
  "badge-experimental-pulse": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeExperimentalPulse {...props} />
    </div>
  ),
  "badge-experimental-ping": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeExperimentalPing {...props} />
    </div>
  ),
  "badge-experimental-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeExperimentalGlow {...props} />
    </div>
  ),
  "badge-experimental-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeExperimentalPillCompact {...props} />
    </div>
  ),
  "badge-experimental-tag-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeExperimentalTagDismiss {...props} />
    </div>
  ),
  "badge-hotfix-pulse": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeHotfixPulse {...props} />
    </div>
  ),
  "badge-hotfix-ping": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeHotfixPing {...props} />
    </div>
  ),
  "badge-hotfix-glow": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeHotfixGlow {...props} />
    </div>
  ),
  "badge-hotfix-pill-compact": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeHotfixPillCompact {...props} />
    </div>
  ),
  "badge-hotfix-tag-dismiss": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <BadgeHotfixTagDismiss {...props} />
    </div>
  ),
  "button-deploy-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDeployMagnetic {...props} />
    </div>
  ),
  "button-deploy-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDeployGradientBorder {...props} />
    </div>
  ),
  "button-deploy-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDeployShutterSwipe {...props} />
    </div>
  ),
  "button-deploy-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDeployTactileBounce {...props} />
    </div>
  ),
  "button-deploy-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDeployCyberGlass {...props} />
    </div>
  ),
  "button-fork-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonForkMagnetic {...props} />
    </div>
  ),
  "button-fork-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonForkGradientBorder {...props} />
    </div>
  ),
  "button-fork-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonForkShutterSwipe {...props} />
    </div>
  ),
  "button-fork-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonForkTactileBounce {...props} />
    </div>
  ),
  "button-fork-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonForkCyberGlass {...props} />
    </div>
  ),
  "button-audit-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonAuditMagnetic {...props} />
    </div>
  ),
  "button-audit-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonAuditGradientBorder {...props} />
    </div>
  ),
  "button-audit-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonAuditShutterSwipe {...props} />
    </div>
  ),
  "button-audit-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonAuditTactileBounce {...props} />
    </div>
  ),
  "button-audit-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonAuditCyberGlass {...props} />
    </div>
  ),
  "button-download-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDownloadMagnetic {...props} />
    </div>
  ),
  "button-download-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDownloadGradientBorder {...props} />
    </div>
  ),
  "button-download-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDownloadShutterSwipe {...props} />
    </div>
  ),
  "button-download-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDownloadTactileBounce {...props} />
    </div>
  ),
  "button-download-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonDownloadCyberGlass {...props} />
    </div>
  ),
  "button-sync-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonSyncMagnetic {...props} />
    </div>
  ),
  "button-sync-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonSyncGradientBorder {...props} />
    </div>
  ),
  "button-sync-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonSyncShutterSwipe {...props} />
    </div>
  ),
  "button-sync-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonSyncTactileBounce {...props} />
    </div>
  ),
  "button-sync-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonSyncCyberGlass {...props} />
    </div>
  ),
  "button-bookmark-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonBookmarkMagnetic {...props} />
    </div>
  ),
  "button-bookmark-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonBookmarkGradientBorder {...props} />
    </div>
  ),
  "button-bookmark-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonBookmarkShutterSwipe {...props} />
    </div>
  ),
  "button-bookmark-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonBookmarkTactileBounce {...props} />
    </div>
  ),
  "button-bookmark-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonBookmarkCyberGlass {...props} />
    </div>
  ),
  "button-share-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonShareMagnetic {...props} />
    </div>
  ),
  "button-share-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonShareGradientBorder {...props} />
    </div>
  ),
  "button-share-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonShareShutterSwipe {...props} />
    </div>
  ),
  "button-share-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonShareTactileBounce {...props} />
    </div>
  ),
  "button-share-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonShareCyberGlass {...props} />
    </div>
  ),
  "button-archive-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonArchiveMagnetic {...props} />
    </div>
  ),
  "button-archive-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonArchiveGradientBorder {...props} />
    </div>
  ),
  "button-archive-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonArchiveShutterSwipe {...props} />
    </div>
  ),
  "button-archive-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonArchiveTactileBounce {...props} />
    </div>
  ),
  "button-archive-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonArchiveCyberGlass {...props} />
    </div>
  ),
  "button-revert-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonRevertMagnetic {...props} />
    </div>
  ),
  "button-revert-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonRevertGradientBorder {...props} />
    </div>
  ),
  "button-revert-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonRevertShutterSwipe {...props} />
    </div>
  ),
  "button-revert-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonRevertTactileBounce {...props} />
    </div>
  ),
  "button-revert-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonRevertCyberGlass {...props} />
    </div>
  ),
  "button-terminal-magnetic": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonTerminalMagnetic {...props} />
    </div>
  ),
  "button-terminal-gradient-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonTerminalGradientBorder {...props} />
    </div>
  ),
  "button-terminal-shutter-swipe": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonTerminalShutterSwipe {...props} />
    </div>
  ),
  "button-terminal-tactile-bounce": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonTerminalTactileBounce {...props} />
    </div>
  ),
  "button-terminal-cyber-glass": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <ButtonTerminalCyberGlass {...props} />
    </div>
  ),
  "motion-cyber-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionCyberShimmer {...props} />
    </div>
  ),
  "motion-cyber-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionCyberGlitch {...props} />
    </div>
  ),
  "motion-cyber-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionCyberScroller {...props} />
    </div>
  ),
  "motion-cyber-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionCyberDecrypt {...props} />
    </div>
  ),
  "motion-cyber-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionCyberPulseBorder {...props} />
    </div>
  ),
  "motion-fluid-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionFluidShimmer {...props} />
    </div>
  ),
  "motion-fluid-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionFluidGlitch {...props} />
    </div>
  ),
  "motion-fluid-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionFluidScroller {...props} />
    </div>
  ),
  "motion-fluid-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionFluidDecrypt {...props} />
    </div>
  ),
  "motion-fluid-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionFluidPulseBorder {...props} />
    </div>
  ),
  "motion-quantum-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionQuantumShimmer {...props} />
    </div>
  ),
  "motion-quantum-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionQuantumGlitch {...props} />
    </div>
  ),
  "motion-quantum-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionQuantumScroller {...props} />
    </div>
  ),
  "motion-quantum-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionQuantumDecrypt {...props} />
    </div>
  ),
  "motion-quantum-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionQuantumPulseBorder {...props} />
    </div>
  ),
  "motion-hyper-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionHyperShimmer {...props} />
    </div>
  ),
  "motion-hyper-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionHyperGlitch {...props} />
    </div>
  ),
  "motion-hyper-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionHyperScroller {...props} />
    </div>
  ),
  "motion-hyper-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionHyperDecrypt {...props} />
    </div>
  ),
  "motion-hyper-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionHyperPulseBorder {...props} />
    </div>
  ),
  "motion-ambient-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionAmbientShimmer {...props} />
    </div>
  ),
  "motion-ambient-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionAmbientGlitch {...props} />
    </div>
  ),
  "motion-ambient-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionAmbientScroller {...props} />
    </div>
  ),
  "motion-ambient-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionAmbientDecrypt {...props} />
    </div>
  ),
  "motion-ambient-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionAmbientPulseBorder {...props} />
    </div>
  ),
  "motion-spectral-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpectralShimmer {...props} />
    </div>
  ),
  "motion-spectral-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpectralGlitch {...props} />
    </div>
  ),
  "motion-spectral-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpectralScroller {...props} />
    </div>
  ),
  "motion-spectral-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpectralDecrypt {...props} />
    </div>
  ),
  "motion-spectral-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionSpectralPulseBorder {...props} />
    </div>
  ),
  "motion-chrono-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionChronoShimmer {...props} />
    </div>
  ),
  "motion-chrono-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionChronoGlitch {...props} />
    </div>
  ),
  "motion-chrono-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionChronoScroller {...props} />
    </div>
  ),
  "motion-chrono-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionChronoDecrypt {...props} />
    </div>
  ),
  "motion-chrono-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionChronoPulseBorder {...props} />
    </div>
  ),
  "motion-matrix-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionMatrixShimmer {...props} />
    </div>
  ),
  "motion-matrix-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionMatrixGlitch {...props} />
    </div>
  ),
  "motion-matrix-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionMatrixScroller {...props} />
    </div>
  ),
  "motion-matrix-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionMatrixDecrypt {...props} />
    </div>
  ),
  "motion-matrix-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionMatrixPulseBorder {...props} />
    </div>
  ),
  "motion-neon-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionNeonShimmer {...props} />
    </div>
  ),
  "motion-neon-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionNeonGlitch {...props} />
    </div>
  ),
  "motion-neon-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionNeonScroller {...props} />
    </div>
  ),
  "motion-neon-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionNeonDecrypt {...props} />
    </div>
  ),
  "motion-neon-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionNeonPulseBorder {...props} />
    </div>
  ),
  "motion-vortex-shimmer": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionVortexShimmer {...props} />
    </div>
  ),
  "motion-vortex-glitch": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionVortexGlitch {...props} />
    </div>
  ),
  "motion-vortex-scroller": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionVortexScroller {...props} />
    </div>
  ),
  "motion-vortex-decrypt": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionVortexDecrypt {...props} />
    </div>
  ),
  "motion-vortex-pulse-border": (props: any) => (
    <div className="flex items-center justify-center p-6">
      <MotionVortexPulseBorder {...props} />
    </div>
  ),

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
