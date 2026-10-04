"use client";
import React from "react";
/**
 * @component OriginPriceTierTriggerSelect
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function OriginPriceTierTriggerSelect({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="flex items-center justify-between px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium min-w-[140px]">
        <span className="flex items-center gap-1.5"><span>🏷️</span><span>Price Tier</span></span>
        <span className="text-[10px] text-muted-foreground">▼</span>
      </div>
    </div>
  );
}
export default OriginPriceTierTriggerSelect;
