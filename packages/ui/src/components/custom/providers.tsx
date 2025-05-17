"use client";

import { QueryProvider } from "@workspace/query";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        {children}
      </NextThemesProvider>
    </QueryProvider>
  );
}
