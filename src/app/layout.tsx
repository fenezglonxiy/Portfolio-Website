"use client";

import ThemeProvider from "@/_theme/ThemeProvider";
import createTheme from "@/_theme/createTheme";
import { Header } from "@/_pages/header";
import { Footer } from "@/_pages/footer";

import "./globals.css";

const theme = createTheme();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
