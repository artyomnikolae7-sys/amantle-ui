/**
 * @source https://amantle.dev/components/button-retro-3d
 * @author AMANTLE UI
 * @license MIT
 * @modified Arcade skeuomorphic mechanical displacement
 */
"use client";

import * as React from "react";
import { Gamepad2 } from "lucide-react";

export function ButtonRetro3D({
  children = "START GAME",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`relative inline-flex items-center gap-2 px-6 py-3 font-extrabold text-xs tracking-widest text-white uppercase rounded-xl bg-rose-600 border-b-4 border-rose-800 shadow-[0_6px_0_0_#9f1239,0_10px_15px_-3px_rgba(0,0,0,0.4)] active:top-[4px] active:shadow-[0_2px_0_0_#9f1239] transition-[color,background-color,border-color,box-shadow,transform] ${className}`}
      {...props}
    >
      <Gamepad2 className="w-4 h-4" />
      <span>{children}</span>
    </button>
  );
}
export default ButtonRetro3D;
