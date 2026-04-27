import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { resolvedLocaleHeader, resolveLocale } from "./i18n";

export const metadata: Metadata = {
  title: "Tao Wang | taotao.au",
  description:
    "Personal site of Tao Wang — practical AI products, tools, experiments, and current projects.",
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
    <html lang={locale === "zh" ? "zh" : "en"} className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
