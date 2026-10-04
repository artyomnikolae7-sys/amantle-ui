"use client";
import React from "react";
/**
 * @component HyperSaasLaunchBannerInline
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperSaasLaunchBannerInline({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 border border-border gap-4">
        <div className="flex items-center gap-2">
          <span>🚀</span>
          <span className="text-xs font-semibold">Instant Cloud Deploy</span>
        </div>
        <button className="text-[11px] font-bold text-teal-600 hover:underline">Explore →</button>
      </div>
    </div>
  );
}
export default HyperSaasLaunchBannerInline;
