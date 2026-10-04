/**
 * @source https://amantle.dev/components/input-verification-code
 * @author AMANTLE UI
 * @license MIT
 * @modified Alphanumeric token formatter with hyphen separator
 */
"use client";

import * as React from "react";
import { KeyRound } from "lucide-react";

export function InputVerificationCode() {
  const [code, setCode] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let clean = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    if (clean.length > 3) {
      clean = clean.slice(0, 3) + "-" + clean.slice(3);
    }
    setCode(clean);
  };

  return (
    <div className="max-w-xs w-full">
      <div className="relative flex items-center">
        <KeyRound className="w-4 h-4 absolute left-3 text-muted-foreground" />
        <input
          type="text"
          value={code}
          onChange={handleChange}
          placeholder="ABC-123"
          className="w-full bg-card border border-border rounded-xl pl-9 pr-4 py-2.5 text-center font-mono font-bold tracking-widest text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
}
export default InputVerificationCode;
