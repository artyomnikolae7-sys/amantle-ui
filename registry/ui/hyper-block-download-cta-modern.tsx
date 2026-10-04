"use client";
import React from "react";
/**
 * @component HyperBlockDownloadCtaModern
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperBlockDownloadCtaModern({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl transition-all ${"border border-teal-500/30 bg-teal-500/5 shadow-xs"} ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="text-xl">📥</span>
        <div>
          <div className="text-sm font-bold text-foreground">Binary Release Downloader</div>
          <div className="text-xs text-muted-foreground">Modern Gradient Style Block</div>
        </div>
      </div>
    </div>
  );
}
export default HyperBlockDownloadCtaModern;
