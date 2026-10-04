"use client";
import React, { useRef, useState } from "react";
/**
 * @component HoverGravityButton
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverGravityButton({ children = "Magnetic Spring", className = "" }: { children?: React.ReactNode; className?: string }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [trans, setTrans] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setTrans({ x, y });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTrans({ x: 0, y: 0 })}
      style={{
        transform: `translate3d(${trans.x}px, ${trans.y}px, 0)`,
        transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      className={`px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs shadow-md active:scale-90 ${className}`}
    >
      {children}
    </button>
  );
}
export default HoverGravityButton;
