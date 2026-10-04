"use client";
import React from "react";
/**
 * @component BackgroundGradientCard
 * @source https://ui.aceternity.com
 * @author Aceternity UI
 * @license MIT
 */
export function BackgroundGradientCard({ title = "Gradient Surface", className = "" }: { title?: string; className?: string }) {
  return (
    <div className={`relative p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 ${className}`}>
      <div className="rounded-[14px] bg-card p-5 text-center">
        <h4 className="text-xs font-bold text-foreground">{title}</h4>
      </div>
    </div>
  );
}
export default BackgroundGradientCard;
