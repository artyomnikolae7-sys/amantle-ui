"use client";
import React from "react";
/**
 * @component ButtonShareTactileBounce
 * @source https://magicui.design
 * @author Magic UI Team
 * @license MIT
 */
export function ButtonShareTactileBounce({
  children = "Generate Live Share Link",
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
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground shadow-sm hover:opacity-95 transition-transform duration-150 active:scale-90 ${className}`}
    >
      <span>🔗</span>
      <span>{children}</span>
    </button>
  );
}
export default ButtonShareTactileBounce;
