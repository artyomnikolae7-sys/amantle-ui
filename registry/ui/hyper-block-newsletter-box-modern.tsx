"use client";
import React from "react";
/**
 * @component HyperBlockNewsletterBoxModern
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperBlockNewsletterBoxModern({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-2xl transition-all ${"border border-teal-500/30 bg-teal-500/5 shadow-xs"} ${className}`}>
      <div className="flex items-center gap-2.5">
        <span className="text-xl">📬</span>
        <div>
          <div className="text-sm font-bold text-foreground">Newsletter Ingestion Box</div>
          <div className="text-xs text-muted-foreground">Modern Gradient Style Block</div>
        </div>
      </div>
    </div>
  );
}
export default HyperBlockNewsletterBoxModern;
