/**
 * @source https://amantle.dev/components/input-voice-dictation
 * @author AMANTLE UI
 * @license MIT
 * @modified Voice listening waveform simulation
 */
"use client";

import * as React from "react";
import { Mic, MicOff, Send } from "lucide-react";

export function InputVoiceDictation() {
  const [isRecording, setIsRecording] = React.useState(false);
  const [text, setText] = React.useState("");

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setText("Создай адаптивный hero-блок с градиентом");
        setIsRecording(false);
      }, 2500);
    } else {
      setIsRecording(false);
    }
  };

  return (
    <div className="max-w-md w-full rounded-2xl border border-border bg-card p-2 shadow-sm">
      <div className="flex items-center gap-2">
        <button
          onClick={toggleRecording}
          className={`p-2 rounded-xl transition-[color,background-color,border-color,box-shadow,transform] ${
            isRecording
              ? "bg-rose-500 text-white animate-pulse motion-reduce:animate-none"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>

        {isRecording ? (
          <div className="flex-1 flex items-center gap-1 h-8 px-2">
            {[40, 70, 100, 50, 85, 30, 95, 60].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-rose-500 rounded-full animate-bounce motion-reduce:animate-none"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
            <span className="text-xs text-rose-500 font-medium ml-2">Слушаю...</span>
          </div>
        ) : (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Нажмите на микрофон или введите промпт..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none px-2"
          />
        )}

        <button className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
export default InputVoiceDictation;
