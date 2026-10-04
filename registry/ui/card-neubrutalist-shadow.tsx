/**
 * @source https://amantle.dev/components/card-neubrutalist-shadow
 * @author AMANTLE UI
 * @license MIT
 * @modified Neubrutalist 6px hard shadow card
 */
"use client";

import * as React from "react";
import { Terminal } from "lucide-react";

export function CardNeubrutalistShadow() {
  return (
    <div className="p-6 rounded-xl border-2 border-black bg-amber-200 text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-sm w-full">
      <Terminal className="w-6 h-6 mb-3" />
      <h4 className="font-mono font-bold text-base mb-1">Neubrutalist Карточка</h4>
      <p className="font-mono text-xs opacity-90 leading-relaxed">
        Максимальная выразительность и тактильный отклик для контентных блоков.
      </p>
    </div>
  );
}
export default CardNeubrutalistShadow;
