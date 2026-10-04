"use client";
import React from "react";
/**
 * @component OriginPriceTierSegmentedChoice
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function OriginPriceTierSegmentedChoice({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="inline-flex p-1 rounded-xl bg-muted text-xs font-semibold">
        <button className="px-2.5 py-1 rounded-lg bg-card text-foreground shadow-xs">Default</button>
        <button className="px-2.5 py-1 rounded-lg text-muted-foreground hover:text-foreground">Custom</button>
      </div>
    </div>
  );
}
export default OriginPriceTierSegmentedChoice;
