"use client";
import React from "react";
/**
 * @component StaggeredList
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function StaggeredList({ className = "" }: { className?: string }) {
  const items = ["Next.js 15 Integration", "React 19 Server Components", "Tailwind v4 Native Engine", "Emil Kowalski Springs"];
  return (
    <div className={`flex flex-col gap-2 w-full max-w-xs ${className}`}>
      {items.map((it, i) => (
        <div
          key={i}
          style={{ animation: "fadeIn 0.3s ease-out forwards", animationDelay: `${i * 0.08}s` }}
          className="flex items-center gap-2 rounded-xl border border-border/50 bg-card p-2.5 text-xs font-semibold shadow-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>{it}</span>
        </div>
      ))}
    </div>
  );
}
export default StaggeredList;
