import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "AMANTLE UI — Экосистема компонентов и блоков нового поколения",
  description:
    "Открытый реестр компонентов, блоков и шаблонов уровня shadcn/ui с нативной AI/MCP-интеграцией и поддержкой тем на Tailwind v4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
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
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
