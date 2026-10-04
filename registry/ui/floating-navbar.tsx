"use client";

import React, { useState } from "react";

/**
 * @component FloatingNavbar
 * @source https://ui.aceternity.com/components/floating-navbar
 * @author Aceternity UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface FloatingNavbarItem {
  name: string;
  link: string;
}

export interface FloatingNavbarProps {
  navItems?: FloatingNavbarItem[];
  className?: string;
}

export function FloatingNavbar({
  navItems = [
    { name: "Главная", link: "/" },
    { name: "Компоненты", link: "/components" },
    { name: "Блоки", link: "/blocks" },
    { name: "Кастомизатор", link: "#customizer" },
  ],
  className = "",
}: FloatingNavbarProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <nav
      className={`fixed top-6 inset-x-0 mx-auto z-50 flex max-w-fit items-center justify-center gap-1 rounded-full border border-border/60 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md transition-all duration-300 ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {navItems.map((item, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIdx(idx)}
          className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-150 active:scale-[0.96] ${
            activeIdx === idx
              ? "text-primary-foreground bg-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}

export default FloatingNavbar;
