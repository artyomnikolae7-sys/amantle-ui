"use client";
import React from "react";
/**
 * @component ButtonRevertCyberGlass
 * @source https://magicui.design
 * @author Magic UI Team
 * @license MIT
 */
export function ButtonRevertCyberGlass({
  children = "Rollback Changes",
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
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground shadow-sm hover:opacity-95 bg-card/70 backdrop-blur-md border border-border/80 shadow-sm ${className}`}
    >
      <span>↩️</span>
      <span>{children}</span>
    </button>
  );
}
export default ButtonRevertCyberGlass;
