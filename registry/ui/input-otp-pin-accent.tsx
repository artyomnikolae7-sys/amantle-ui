"use client";
import React, { useState } from "react";
/**
 * @component InputOtpPinAccent
 * @source https://originui.com
 * @author Origin UI Team
 * @license MIT
 */
export function InputOtpPinAccent({
  className = "",
}: {
  className?: string;
}) {
  const [val, setVal] = useState("");

  return (
    <div className={`w-full max-w-sm space-y-1.5 ${className}`}>
      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
        <span>🔢</span>
        <span>Secure OTP 6-Slot</span>
      </label>
      <div className={`flex items-center px-3 py-2 rounded-xl border bg-card transition-all ${"border-emerald-500/50 shadow-sm"}`}>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="• • • • • •"
          className="w-full bg-transparent text-xs font-medium focus:outline-hidden placeholder:text-muted-foreground/60"
        />
        <span className="text-[10px] font-bold text-muted-foreground ml-2 uppercase">accent</span>
      </div>
    </div>
  );
}
export default InputOtpPinAccent;
