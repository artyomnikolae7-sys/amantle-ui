import * as React from "react";
import { Navbar } from "@/components/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-6 md:py-0">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 sm:px-6 text-xs text-muted-foreground">
          <p>
            Построено на принципах Code Ownership, Tailwind CSS v4 и Model Context Protocol.
          </p>
          <p className="flex items-center gap-1">
            AMANTLE UI Design System &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
