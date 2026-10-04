"use client";
import React from "react";
/**
 * @component HyperPaymentCheckoutPill
 * @source https://hyperui.dev
 * @author HyperUI / Float UI
 * @license MIT
 */
export function HyperPaymentCheckoutPill({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`w-full max-w-sm ${className}`}>
      
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-600 dark:text-teal-400">
        <span>💳</span>
        <span>Global Multi-Currency</span>
        <span className="bg-teal-500 text-white dark:text-black text-[9px] px-1.5 py-0.5 rounded-full font-bold">135+ Lands</span>
      </div>
    </div>
  );
}
export default HyperPaymentCheckoutPill;
