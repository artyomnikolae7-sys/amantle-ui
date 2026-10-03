/**
 * @source https://amantle.dev/registry/blocks/hero-video-dialog
 * @author AMANTLE UI Design System
 * @license MIT
 * @modified Adapted for Tailwind v4 and AMANTLE Design Tokens
 */

import * as React from "react";
import { Play } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/registry/ui/dialog";

export function HeroVideoDialog() {
  return (
    <div className="relative mx-auto max-w-4xl p-2 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden group">
      <div className="relative aspect-video w-full rounded-xl bg-muted overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10" />
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform group-hover:scale-110 hover:brightness-110"
            >
              <Play className="h-6 w-6 fill-current ml-1" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black aspect-video flex items-center justify-center text-white">
            <div className="text-center p-8">
              <p className="text-lg font-semibold">Демонстрационное видео AMANTLE UI</p>
              <p className="text-xs text-muted-foreground mt-2">Визуальный обзор возможностей экосистемы и MCP-сервера</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default HeroVideoDialog;
