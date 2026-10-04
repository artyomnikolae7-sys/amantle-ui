/**
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
      <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-md animate-pulse motion-reduce:animate-none">
        {count}
      </span>
    </div>
  );
}
export default BadgeCounterNotification;
