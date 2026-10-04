/**
 * @source https://reactbits.dev/components/pill-nav
 * @author React Bits / DavidHDev
 * @license MIT
 * @modified Adapted for AMANTLE UI with TypeScript, Tailwind v4 and Emil Kowalski motion tokens
 */

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PillNavItem {
  id: string;
  label: string;
}

export interface PillNavProps {
  items?: PillNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function PillNav({
  items = [
    { id: "overview", label: "Обзор" },
    { id: "analytics", label: "Метрики" },
    { id: "components", label: "Компоненты" },
    { id: "motion", label: "Анимации" },
    { id: "settings", label: "Настройки" },
  ],
  activeId,
  onSelect,
  className,
}: PillNavProps) {
  const [selected, setSelected] = React.useState(activeId || items[0]?.id);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const [pillStyle, setPillStyle] = React.useState({ left: 0, width: 0 });

  const active = activeId !== undefined ? activeId : selected;

  React.useEffect(() => {
    const el = itemRefs.current[active];
    const container = containerRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
      });
    }
  }, [active, items]);

  const handleItemClick = (id: string) => {
    if (activeId === undefined) {
      setSelected(id);
    }
    onSelect?.(id);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative inline-flex items-center gap-1 p-1 rounded-full bg-muted/50 border border-border/80 backdrop-blur-md shadow-xs select-none",
        className
      )}
    >
      {/* Magnetic Sliding Pill Highlight */}
      <div
        className="absolute top-1 bottom-1 rounded-full bg-primary shadow-xs transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: `translateX(${pillStyle.left}px)`,
          width: `${pillStyle.width}px`,
          opacity: pillStyle.width > 0 ? 1 : 0,
        }}
      />

      {items.map((item) => {
        const isCurrent = active === item.id;
        return (
          <button
            key={item.id}
            ref={(el) => {
              itemRefs.current[item.id] = el;
            }}
            onClick={() => handleItemClick(item.id)}
            className={cn(
              "relative z-10 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer",
              isCurrent
                ? "text-primary-foreground font-bold"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
export default PillNav;
