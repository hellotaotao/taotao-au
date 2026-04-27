import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { detectLocaleFromAcceptLanguage } from "./i18n";

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
  const locale = detectLocaleFromAcceptLanguage(
    headersList.get("accept-language"),
  );

  return (
    <html lang={locale === "zh" ? "zh" : "en"} className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
