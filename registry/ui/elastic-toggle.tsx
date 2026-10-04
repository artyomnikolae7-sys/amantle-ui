"use client";
import React, { useState } from "react";
/**
 * @component ElasticToggle
 * @source https://reactbits.dev
 * @author React Bits
 * @license MIT
 */
export function ElasticToggle({ className = "" }: { className?: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative h-7 w-12 rounded-full p-1 transition-colors duration-200 ${
        on ? "bg-primary" : "bg-muted"
      } ${className}`}
    >
      <div
        style={{
          transform: on ? "translateX(20px)" : "translateX(0px)",
          transition: "transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        className="h-5 w-5 rounded-full bg-background shadow-md"
      />
    </button>
  );
}
export default ElasticToggle;
