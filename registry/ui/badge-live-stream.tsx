/**
 * @source https://amantle.dev/components/badge-live-stream
 * @author AMANTLE UI
 * @license MIT
 * @modified Broadcast live equalizer bars
 */
"use client";

import * as React from "react";

export function BadgeLiveStream() {
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-600/15 border border-rose-600/30 text-rose-500 text-xs font-bold tracking-wider uppercase">
      <span className="flex items-end gap-0.5 h-3">
        <span className="w-0.5 h-2 bg-rose-500 rounded-full animate-bounce motion-reduce:animate-none" style={{ animationDelay: "0ms" }} />
        <span className="w-0.5 h-3 bg-rose-500 rounded-full animate-bounce motion-reduce:animate-none" style={{ animationDelay: "150ms" }} />
        <span className="w-0.5 h-1.5 bg-rose-500 rounded-full animate-bounce motion-reduce:animate-none" style={{ animationDelay: "300ms" }} />
      </span>
      <span>LIVE</span>
    </span>
  );
}
export default BadgeLiveStream;
