/**
 * @source https://amantle.dev/components/card-flip-3d
 * @author AMANTLE UI
 * @license MIT
 * @modified 3D perspective flip on click
 */
"use client";

import * as React from "react";
import { RotateCw, Sparkles, Code2 } from "lucide-react";

export function CardFlip3D() {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div className="w-72 h-44 [perspective:1000px] cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div
        className={`relative w-full h-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] shadow-xl ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 rounded-2xl p-5 bg-card border border-border [backface-visibility:hidden] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Sparkles className="w-5 h-5 text-primary" />
            <RotateCw className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <h4 className="font-bold text-foreground">Лицевая сторона</h4>
            <p className="text-xs text-muted-foreground mt-1">Нажмите, чтобы перевернуть карту</p>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl p-5 bg-primary text-primary-foreground [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <Code2 className="w-5 h-5" />
          <div>
            <h4 className="font-bold">Оборотная сторона</h4>
            <p className="text-xs opacity-80 mt-1">Интерактивный 3D flip поворот</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardFlip3D;
