"use client";
import React from "react";
/**
 * @component HyperAvatarStack
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperAvatarStack({ className = "" }: { className?: string }) {
  const users = ["bg-blue-500", "bg-purple-500", "bg-emerald-500", "bg-amber-500"];

  return (
    <div className={`flex items-center -space-x-2 ${className}`}>
      {users.map((c, i) => (
        <div
          key={i}
          className={`h-8 w-8 rounded-full ring-2 ring-background flex items-center justify-center text-[10px] font-bold text-white transition-transform hover:-translate-y-1 hover:z-10 ${c}`}
        >
          {String.fromCharCode(65 + i)}
        </div>
      ))}
      <div className="h-8 w-8 rounded-full ring-2 ring-background bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground">
        +99
      </div>
    </div>
  );
}
export default HyperAvatarStack;
