"use client";
import React, { useState } from "react";
/**
 * @component MagneticButton
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function MagneticButton({ children = "Magnetic Pull", className = "" }: { children?: React.ReactNode; className?: string }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <button
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setOffset({ x: (e.clientX - (r.left + r.width / 2)) * 0.3, y: (e.clientY - (r.top + r.height / 2)) * 0.3 });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: "transform 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-md active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
export default MagneticButton;
