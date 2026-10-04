/**
 * @source https://amantle.dev/components/button-pulse-ring
 * @author AMANTLE UI
 * @license MIT
 * @modified Radar beacon expanding rings
 */
"use client";

import * as React from "react";
import { Radio } from "lucide-react";

export function ButtonPulseRing() {
  return (
    <div className="relative inline-flex items-center justify-center">
      <span className="absolute inline-flex h-full w-full rounded-xl bg-primary opacity-30 animate-ping motion-reduce:animate-none" />
      <button className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg">
        <Radio className="w-4 h-4" />
        <span>Подключить радар</span>
      </button>
    </div>
  );
}
export default ButtonPulseRing;
