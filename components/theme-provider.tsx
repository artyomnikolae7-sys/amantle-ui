"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";

export type Palette = "zinc" | "slate" | "violet" | "emerald" | "rose";

interface ThemeContextType {
  palette: Palette;
  setPalette: (palette: Palette) => void;
  theme?: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
  palette: "zinc",
  setPalette: () => null,
  theme: "system",
  setTheme: () => null,
});

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  const [palette, setPaletteState] = React.useState<Palette>("zinc");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const savedPalette = localStorage.getItem("amantle-palette") as Palette | null;
    if (savedPalette && ["zinc", "slate", "violet", "emerald", "rose"].includes(savedPalette)) {
      setPaletteState(savedPalette);
      document.documentElement.setAttribute("data-theme", savedPalette);
    } else {
      document.documentElement.setAttribute("data-theme", "zinc");
    }
  }, []);

  const setPalette = (newPalette: Palette) => {
    setPaletteState(newPalette);
    localStorage.setItem("amantle-palette", newPalette);
    document.documentElement.setAttribute("data-theme", newPalette);
  };

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeContextWrapper palette={palette} setPalette={setPalette}>
        {children}
      </ThemeContextWrapper>
    </NextThemesProvider>
  );
}

function ThemeContextWrapper({
  palette,
  setPalette,
  children,
}: {
  palette: Palette;
  setPalette: (p: Palette) => void;
  children: React.ReactNode;
}) {
  const { theme, setTheme } = useNextTheme();

  return (
    <ThemeContext.Provider value={{ palette, setPalette, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return React.useContext(ThemeContext);
}

export const useTheme = useAppTheme;

