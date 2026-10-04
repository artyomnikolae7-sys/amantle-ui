/**
 * @source https://magicui.design/docs/components/animated-gradient-badge
 * @author Magic UI / 21st.dev
 * @license MIT
 * @modified Original unadapted version with hardcoded zinc and hex classes
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border transition-all relative overflow-hidden backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 border-zinc-800 text-zinc-100 shadow-sm",
        secondary: "bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-100",
        outline: "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700",
        destructive: "bg-red-950 border-red-800 text-red-400",
        glow: "bg-zinc-950 border-zinc-800 text-blue-600 shadow-lg shadow-blue-500/10",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        default: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeShimmerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  shimmer?: boolean;
  pulse?: boolean;
  icon?: boolean;
  label?: string;
}

export function BadgeShimmer({
  className,
  variant,
  size,
  shimmer = true,
  pulse = false,
  icon = true,
  label,
  children,
  ...props
}: BadgeShimmerProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {shimmer && (
        <span
          className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent motion-reduce:animate-none pointer-events-none"
        />
      )}
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
        </span>
      )}
      {icon && <Sparkles className="h-3.5 w-3.5 text-blue-600 shrink-0" />}
      <span>{label || children || "New Feature"}</span>
    </div>
  );
}
