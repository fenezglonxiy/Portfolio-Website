"use client";

import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/_theme/ThemeProvider";
import createTheme from "@/_theme/createTheme";

const interTight = localFont({
  src: "./fonts/Inter-Tight.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
});

const theme = createTheme();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(theme);

  return (
    <html lang="en">
      <body className={`${interTight.variable}`}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
