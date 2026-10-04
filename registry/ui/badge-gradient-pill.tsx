/**
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
