/**
 * @source https://magicui.design/docs/components/file-upload
 * @author AMANTLE UI
 * @license MIT
 * @modified Adapted for AMANTLE UI with Tailwind v4 semantic tokens
 */

"use client";

import * as React from "react";
import { UploadCloud, File, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileUploadDropzoneProps {
  className?: string;
  accept?: string;
  maxSizeMb?: number;
}

export function FileUploadDropzone({ className, accept = "PNG, JPG, PDF", maxSizeMb = 10 }: FileUploadDropzoneProps) {
  const [isDragOver, setIsDragOver] = React.useState(false);
  const [fileName, setFileName] = React.useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files?.[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
      className={cn(
        "flex flex-col items-center justify-center w-full max-w-md p-8 rounded-2xl border-2 border-dashed transition-[color,background-color,border-color,box-shadow,transform] cursor-pointer",
        isDragOver ? "border-primary bg-primary/5 scale-[1.01]" : "border-border bg-card/60 hover:bg-muted/30",
        className
      )}
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
        <UploadCloud className="h-6 w-6" />
      </div>
      <h4 className="text-sm font-bold text-foreground">Перетащите файлы сюда</h4>
      <p className="text-xs text-muted-foreground mt-1">Поддерживаются {accept} до {maxSizeMb} МБ</p>

      {fileName && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5 text-xs text-foreground font-mono">
          <File className="h-3.5 w-3.5 text-primary" />
          <span>{fileName}</span>
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
        </div>
      )}
    </div>
  );
}
