/**
 * @source https://amantle.dev/components/badge-status-dot
 * @author AMANTLE UI
 * @license MIT
 * @modified Pulsing radar beacon dot
 */
"use client";

import * as React from "react";

export function BadgeStatusDot({
  status = "online",
  label = "Сервер активен",
}: {
  status?: "online" | "idle" | "error";
  label?: string;
}) {
  const styles = {
    online: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 beacon-bg-emerald-500",
    idle: "bg-amber-500/10 text-amber-500 border-amber-500/20 beacon-bg-amber-500",
    error: "bg-rose-500/10 text-rose-500 border-rose-500/20 beacon-bg-rose-500",
  };

  const dotColor = {
    online: "bg-emerald-500",
    idle: "bg-amber-500",
    error: "bg-rose-500",
  }[status];

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
      </span>
      <span>{label}</span>
    </span>
  );
}
export default BadgeStatusDot;
