"use client";

import React from "react";

/**
 * @component GradientHeading
 * @source https://cult-ui.com/docs/components/gradient-heading
 * @author Cult UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface GradientHeadingProps {
  children?: React.ReactNode;
  gradient?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function GradientHeading({
  children = "Kinetic Intelligence Interface",
  gradient = "from-cyan-400 via-violet-500 to-fuchsia-500",
  size = "lg",
  className = "",
}: GradientHeadingProps) {
  const sizeClasses = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-5xl",
    xl: "text-4xl md:text-6xl",
  };

  return (
    <h2
      className={`font-black tracking-tight bg-gradient-to-r bg-clip-text text-transparent select-none ${gradient} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </h2>
  );
}

export default GradientHeading;
