"use client";
import React, { useRef, useState } from "react";
/**
 * @component HoverTiltCard
 * @source https://hover.dev
 * @author Hover.dev
 * @license MIT
 */
export function HoverTiltCard({ className = "" }: { className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRot({ x: -(y / 8), y: x / 8 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
        transition: "transform 100ms ease-out",
      }}
      className={`cursor-pointer rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card to-muted/50 p-6 shadow-xl max-w-xs select-none ${className}`}
    >
      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-base mb-3">
        ◈
      </div>
      <h4 className="text-sm font-bold text-foreground">Perspective Tilt</h4>
      <p className="text-xs text-muted-foreground mt-1">3D motion tracking using vanilla CSS transform matrices.</p>
    </div>
  );
}
export default HoverTiltCard;
