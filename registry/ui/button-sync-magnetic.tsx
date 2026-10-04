"use client";
import React from "react";
/**
 * @component ButtonSyncMagnetic
 * @source https://magicui.design
 * @author Magic UI Team
 * @license MIT
 */
export function ButtonSyncMagnetic({
  children = "Synchronize Tokens",
  onClick,
  className = "",
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground shadow-sm hover:opacity-95 transform transition-all active:scale-95 hover:shadow-lg ${className}`}
    >
      <span>🔄</span>
      <span>{children}</span>
    </button>
  );
}
export default ButtonSyncMagnetic;
