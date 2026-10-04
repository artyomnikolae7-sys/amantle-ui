"use client";
import React from "react";
/**
 * @component OriginLicenseTypeChipDismiss
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function OriginLicenseTypeChipDismiss({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        <span>License Scope</span>
        <button className="hover:opacity-75 text-sm font-bold">×</button>
      </div>
    </div>
  );
}
export default OriginLicenseTypeChipDismiss;
