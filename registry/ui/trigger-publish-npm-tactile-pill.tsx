"use client";
import React, { useState } from "react";
/**
 * @component TriggerPublishNpmTactilePill
 * @source https://magicui.design
 * @author Magic UI Team
 * @license MIT
 */
export function TriggerPublishNpmTactilePill({ className = "" }: { className?: string }) {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 ${
        done
          ? "bg-emerald-500 text-white shadow-md"
          : "bg-primary text-primary-foreground hover:opacity-95 shadow-sm"
      } ${className}`}
    >
      <span>🚀</span>
      <span>{done ? "Completed ✓" : "Publish to NPM Registry"}</span>
    </button>
  );
}
export default TriggerPublishNpmTactilePill;
