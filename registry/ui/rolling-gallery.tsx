"use client";

import React, { useState } from "react";

/**
 * @component RollingGallery
 * @source https://reactbits.dev/components/rolling-gallery
 * @author React Bits
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars)
 */
export interface RollingGalleryProps {
  images?: string[];
  autoplay?: boolean;
}

export function RollingGallery({
  images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&q=80",
  ],
  autoplay = true,
}: RollingGalleryProps) {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = () => setRotation((r) => r - 90);
  const rotateRight = () => setRotation((r) => r + 90);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-card p-8">
      <div
        className="flex gap-4 transition-transform duration-500 ease-out"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="h-44 w-32 shrink-0 overflow-hidden rounded-xl border border-border/40 shadow-lg"
          >
            <img src={img} alt="Gallery item" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={rotateLeft}
          className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted active:scale-[0.97]"
        >
          ← Назад
        </button>
        <button
          onClick={rotateRight}
          className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium hover:bg-muted active:scale-[0.97]"
        >
          Вперёд →
        </button>
      </div>
    </div>
  );
}

export default RollingGallery;
