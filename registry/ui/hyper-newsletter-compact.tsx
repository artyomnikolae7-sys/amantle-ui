"use client";
import React, { useState } from "react";
/**
 * @component HyperNewsletterCompact
 * @source https://hyperui.dev
 * @author HyperUI
 * @license MIT
 */
export function HyperNewsletterCompact({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setSubscribed(true);
      }}
      className={`flex items-center gap-1.5 p-1 rounded-xl border border-border/70 bg-card max-w-sm ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your work email..."
        className="flex-1 px-3 py-1.5 text-xs bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs active:scale-95 transition-all"
      >
        {subscribed ? "Joined ✓" : "Subscribe"}
      </button>
    </form>
  );
}
export default HyperNewsletterCompact;
