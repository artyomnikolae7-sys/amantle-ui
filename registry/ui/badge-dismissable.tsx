/**
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
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border transition-[color,background-color,border-color,box-shadow,transform]">
      <span>{label}</span>
      <button onClick={() => setVisible(false)} className="hover:text-destructive transition-colors">
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}
export default BadgeDismissable;
