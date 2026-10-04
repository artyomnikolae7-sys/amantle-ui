"use client";
import React, { useState } from "react";
/**
 * @component AiStreamTelemetryMinimal
 * @source https://21st.dev
 * @author 21st.dev / Kokonut
 * @license MIT
 */
export function AiStreamTelemetryMinimal({
  className = "",
}: {
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className={`p-2.5 rounded-xl border border-border bg-card shadow-xs ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base">⏱️</span>
          <div>
            <div className="text-xs font-bold text-foreground">TTFT Stream Monitor</div>
            <div className="text-[10px] text-muted-foreground">Real-time output velocity and token/sec badge</div>
          </div>
        </div>
        <button
          onClick={() => setActive(!active)}
          className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all active:scale-95 ${
            active
              ? "bg-violet-600 text-white shadow-xs"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {active ? "Active ✓" : "Enable"}
        </button>
      </div>
    </div>
  );
}
export default AiStreamTelemetryMinimal;
