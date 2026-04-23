import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tao Wang | taotao.au",
  description:
    "Personal site of Tao Wang — practical AI products, tools, experiments, and current projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
