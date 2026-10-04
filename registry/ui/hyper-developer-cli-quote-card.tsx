"use client";
import React from "react";
/**
 * @component HyperDeveloperCliQuoteCard
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperDeveloperCliQuoteCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="p-3.5 rounded-xl border border-border bg-card/70">
        <div className="text-xs italic text-muted-foreground">“Headless CLI Tooling delivers Rust Speed without any latency overhead.”</div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-5 h-5 rounded-full bg-teal-500/20 text-[10px] flex items-center justify-center font-bold">AU</div>
          <span className="text-[10px] font-semibold text-foreground">Verified Enterprise User</span>
        </div>
      </div>
    </div>
  );
}
export default HyperDeveloperCliQuoteCard;
