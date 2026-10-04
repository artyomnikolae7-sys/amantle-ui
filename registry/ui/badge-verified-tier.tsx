/**
 * @source AMANTLE UI Motion Engine
 * @author Open Source
 * @license MIT
 * @modified Tokenized for AMANTLE UI with Tailwind v4 semantic variables and spring motion
 */

import * as React from "react";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BadgeVerifiedTierProps extends React.HTMLAttributes<HTMLDivElement> {
  tier?: "basic" | "verified" | "enterprise";
  verified?: boolean;
}

export function BadgeVerifiedTier({
  tier = "verified",
  verified = true,
  className,
  children,
  ...props
}: BadgeVerifiedTierProps) {
  const tierConfig = {
    basic: {
      label: "Basic",
      icon: Check,
      colors: "bg-muted text-muted-foreground border-border",
    },
    verified: {
      label: "Verified Pro",
      icon: ShieldCheck,
      colors: "bg-primary/10 text-primary border-primary/20",
    },
    enterprise: {
      label: "Enterprise",
      icon: Sparkles,
      colors: "bg-primary text-primary-foreground border-primary shadow-sm",
    },
  };

  const config = tierConfig[tier];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",
        "transition-[color,background-color,border-color,box-shadow] duration-150 ease-out",
        config.colors,
        className
      )}
      {...props}
    >
      {verified && <Icon className="w-3.5 h-3.5" />}
      <span>{children || config.label}</span>
    </div>
  );
}