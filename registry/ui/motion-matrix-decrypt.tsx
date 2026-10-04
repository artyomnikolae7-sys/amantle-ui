"use client";
import React from "react";
/**
 * @component MotionMatrixDecrypt
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function MotionMatrixDecrypt({
  text = "SYNAPSE NETWORK",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={`inline-block font-black text-xl tracking-tight uppercase select-none ${className}`}>
      <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent hover:tracking-wider transition-all duration-300">
        {text}
      </span>
      <span className="block text-[9px] font-mono text-muted-foreground font-normal tracking-normal lowercase">
        Tactile Feed
      </span>
    </div>
  );
}
export default MotionMatrixDecrypt;
