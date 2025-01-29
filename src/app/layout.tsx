import { Metadata } from "next";
import { useLocale, useTimeZone } from "next-intl";

import ThemeProvider from "@/_theme/ThemeProvider";
import { Header } from "@/_pages/header";
import { Footer } from "@/_pages/footer";
import IntlProvider from "@/i18n/IntlProvider";
import FontIconLinks from "@/_icons/FontIconLinks";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TranHoangDat - Portfolio Website",
    template: "%s | TranHoangDat - Portfolio Website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  const timeZone = useTimeZone();

  return (
    <html lang={locale}>
      <head>
        <FontIconLinks />
      </head>
      <body>
        <IntlProvider locale={locale} timeZone={timeZone}>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
