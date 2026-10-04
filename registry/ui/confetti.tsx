/**
 * @source https://magicui.design/docs/components/confetti
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ConfettiProps {
  className?: string;
  buttonText?: string;
}

export function Confetti({ className, buttonText = "🎉 Отпраздновать победу!" }: ConfettiProps) {
  const [particles, setParticles] = React.useState<Array<{ id: number; x: number; y: number; color: string; rotation: number }>>([]);

  const triggerConfetti = () => {
    const colors = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"];
    const newParticles = Array.from({ length: 28 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 1) * 160,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1200);
  };

  return (
    <div className={cn("relative inline-block", className)}>
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            transform: `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`,
            backgroundColor: p.color,
          }}
          className="absolute left-1/2 top-1/2 h-2.5 w-2 rounded-sm pointer-events-none transition-[color,background-color,border-color,box-shadow,transform] duration-700 ease-out animate-ping motion-reduce:animate-none"
        />
      ))}

      <button
        onClick={triggerConfetti}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-[color,background-color,border-color,box-shadow,transform] cursor-pointer"
      >
        <Trophy className="h-4 w-4" />
        {buttonText}
      </button>
    </div>
  );
}
