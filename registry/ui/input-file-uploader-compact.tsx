/**
 * @source https://amantle.dev/components/input-file-uploader-compact
 * @author AMANTLE UI
 * @license MIT
 * @modified Single line file drop progress pill
 */
"use client";

import * as React from "react";
import { UploadCloud, CheckCircle, FileText } from "lucide-react";

export function InputFileUploaderCompact() {
  const [file, setFile] = React.useState<{ name: string; size: string } | null>(null);
  const [progress, setProgress] = React.useState(0);

  const simulateUpload = () => {
    setFile({ name: "design-system-tokens.json", size: "240 KB" });
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <div className="max-w-md w-full rounded-xl border border-dashed border-border hover:border-primary/50 bg-card p-3 transition-colors">
      {!file ? (
        <button
          onClick={simulateUpload}
          className="w-full flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground py-1"
        >
          <UploadCloud className="w-4 h-4 text-primary" />
          <span>Нажмите для выбора файла (или перетащите сюда)</span>
        </button>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 font-medium text-foreground">
              <FileText className="w-3.5 h-3.5 text-primary" />
              {file.name}
            </span>
            <span className="text-muted-foreground">{progress === 100 ? "Загружено" : `${progress}%`}</span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-[color,background-color,border-color,box-shadow,transform] duration-200 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default InputFileUploaderCompact;
