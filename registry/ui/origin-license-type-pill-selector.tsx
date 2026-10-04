"use client";
import React from "react";
/**
 * @component OriginLicenseTypePillSelector
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function OriginLicenseTypePillSelector({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-card text-xs font-medium cursor-pointer hover:border-emerald-500/40 transition-colors">
        <span>📜</span>
        <span>License Scope:</span>
        <span className="font-bold text-emerald-500">All Active</span>
      </div>
    </div>
  );
}
export default OriginLicenseTypePillSelector;
