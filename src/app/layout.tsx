"use client";

import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/_theme/ThemeProvider";
import createTheme from "@/_theme/createTheme";
import { Header } from "@/_pages/header";
import { Footer } from "@/_pages/footer";

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
  return (
    <html lang="en">
      <body className={`${interTight.variable}`}>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
