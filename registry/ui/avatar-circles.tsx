"use client";

import React from "react";

/**
 * @component AvatarCircles
 * @source https://magicui.design/docs/components/avatar-circles
 * @author Magic UI
 * @license MIT
 * @modified Adapted for AMANTLE UI (React 19, Tailwind v4, CSS Vars, Emil Springs)
 */
export interface AvatarCirclesProps {
  numPeople?: number;
  avatarUrls?: string[];
  className?: string;
}

export function AvatarCircles({
  numPeople = 99,
  avatarUrls = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
  ],
  className = "",
}: AvatarCirclesProps) {
  return (
    <div className={`z-10 flex -space-x-3 rtl:space-x-reverse ${className}`}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-10 w-10 rounded-full border-2 border-background object-cover transition-transform duration-200 hover:z-20 hover:scale-110 active:scale-95"
          src={url}
          alt={`User avatar ${index + 1}`}
        />
      ))}
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-center text-xs font-semibold text-muted-foreground transition-transform hover:z-20 hover:scale-110">
        +{numPeople}
      </div>
    </div>
  );
}

export default AvatarCircles;
