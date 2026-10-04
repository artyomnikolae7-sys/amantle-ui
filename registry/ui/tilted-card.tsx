"use client";

import React, { useRef, useState } from "react";

/**
 * @component TiltedCard
 * @source https://reactbits.dev/components/tilted-card
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface TiltedCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  className?: string;
}

export function TiltedCard({
  title = "Cybernetic Surface",
  subtitle = "Dynamic 3D Parallax Tilt with Specular Glare",
  image = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
  className = "",
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotation({ x: rotX, y: rotY });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.25 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={`inline-block select-none ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-72 w-64 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-xl will-change-transform"
      >
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.6) 0%, transparent 60%)`,
            opacity: glare.opacity,
          }}
        />
        <div className="h-40 w-full overflow-hidden rounded-xl">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <h4 className="text-sm font-bold tracking-tight text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default TiltedCard;
