"use client";
import React from "react";
/**
 * @component CurvedLoop
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function CurvedLoop({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center p-4 ${className}`}>
      <svg className="w-56 h-20 overflow-visible" viewBox="0 0 200 60">
        <path id="curvePath" d="M 10 50 Q 100 0 190 50" fill="transparent" />
        <text className="text-[11px] font-bold uppercase tracking-widest fill-primary">
          <textPath href="#curvePath" startOffset="10%">
            Kinetic Curved Typography Flow
          </textPath>
        </text>
      </svg>
    </div>
  );
}
export default CurvedLoop;
