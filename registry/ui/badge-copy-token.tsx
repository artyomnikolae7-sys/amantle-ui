/**
 * @source https://amantle.dev/components/badge-copy-token
 * @author AMANTLE UI
 * @license MIT
 * @modified Instant token copy with check feedback
 */
"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

export function BadgeCopyToken({
  token = "sk_amantle_9a87f6b",
}: {
  token?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-muted border border-border font-mono text-xs text-foreground hover:bg-muted/80 transition-colors"
    >
      <span>{token}</span>
      {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3 text-muted-foreground" />}
    </button>
  );
}
export default BadgeCopyToken;
