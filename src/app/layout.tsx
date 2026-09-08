import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { resolvedLocaleHeader, resolveLocale } from "./i18n";

export const metadata: Metadata = {
  title: "taotao.au | Useful tools. Playful experiments.",
  description:
    "Explore useful tools and playful experiments by Tao. Find your next favourite app, from voice input to learning and everyday life.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = resolveLocale({
    languageParam: headersList.get(resolvedLocaleHeader),
    acceptLanguage: headersList.get("accept-language"),
  });

  return (
    <html data-scroll-behavior="smooth" lang={locale === "zh" ? "zh" : "en"} className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
