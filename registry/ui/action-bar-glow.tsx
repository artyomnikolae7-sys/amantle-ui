"use client";

import React, { useState } from "react";

/**
 * @component ActionBarGlow
 * @source https://21st.dev/community/action-bar
 * @author 21st.dev
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface ActionBarGlowProps {
  className?: string;
}

export function ActionBarGlow({
  className = "",
}: ActionBarGlowProps) {
  const [activeTab, setActiveTab] = useState(0);

  const actions = [
    { label: "Search", icon: "🔍" },
    { label: "AI Assist", icon: "✨" },
    { label: "Bookmarks", icon: "🔖" },
    { label: "Settings", icon: "⚙️" },
  ];

  return (
    <div
      className={`relative inline-flex items-center gap-1 rounded-2xl border border-border/60 bg-card/80 p-1.5 shadow-[0_0_24px_rgba(59,130,246,0.15)] backdrop-blur-md ${className}`}
    >
      {actions.map((act, i) => (
        <button
          key={i}
          onClick={() => setActiveTab(i)}
          className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-150 active:scale-[0.95] ${
            activeTab === i
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          }`}
        >
          <span>{act.icon}</span>
          <span>{act.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ActionBarGlow;
