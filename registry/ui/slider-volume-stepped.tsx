/**
 * @source https://amantle.dev/components/slider-volume-stepped
 * @author AMANTLE UI
 * @license MIT
 * @modified Discrete tick slider with audio volume feedback
 */
"use client";

import * as React from "react";
import { Volume2, VolumeX } from "lucide-react";

export function SliderVolumeStepped() {
  const [vol, setVol] = React.useState(60);

  return (
    <div className="max-w-xs w-full flex items-center gap-3">
      <button onClick={() => setVol(vol === 0 ? 50 : 0)} className="text-muted-foreground hover:text-foreground">
        {vol === 0 ? <VolumeX className="w-4 h-4 text-destructive" /> : <Volume2 className="w-4 h-4 text-primary" />}
      </button>
      <input
        type="range"
        min={0}
        max={100}
        step={20}
        value={vol}
        onChange={(e) => setVol(Number(e.target.value))}
        className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
      />
      <span className="text-xs font-mono font-medium text-muted-foreground w-8 text-right">{vol}%</span>
    </div>
  );
}
export default SliderVolumeStepped;
