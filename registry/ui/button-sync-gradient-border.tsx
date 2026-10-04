"use client";
import React from "react";
/**
 * @component ButtonSyncGradientBorder
 * @source https://magicui.design
 * @author Magic UI Team
 * @license MIT
 */
export function ButtonSyncGradientBorder({
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
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground shadow-sm hover:opacity-95 p-[1px] bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-xl ${className}`}
    >
      <span>🔄</span>
      <span>{children}</span>
    </button>
  );
}
export default ButtonSyncGradientBorder;
