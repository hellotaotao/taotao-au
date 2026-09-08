import Link from "next/link";
import type { ReactNode } from "react";
import { hubCopy } from "./hub-data";
import { type Locale, translations } from "./i18n";

export function SiteShell({
  locale,
  page = "home",
  children,
}: {
  locale: Locale;
  page?: "home" | "about";
  children: ReactNode;
}) {
  const t = hubCopy[locale];
  const home = `/?lang=${locale}`;
  const about = `/about?lang=${locale}`;
  return (
    <div className="site-shell">
      <a href="#content" className="skip-link">{t.skipContent}</a>
      <header className="site-header">
        <Link className="wordmark" href={home} aria-label="taotao.au home">taotao.au</Link>
        <nav aria-label={t.navigation}>
          <Link href={`${home}#products`}>{t.products}</Link>
          <Link href={`${home}#lab`}>{t.lab}</Link>
          <Link href={about} aria-current={page === "about" ? "page" : undefined}>{t.about}</Link>
          <a
            className="language-link"
            href={`${page === "about" ? "/about" : "/"}?lang=${locale === "en" ? "zh" : "en"}`}
            aria-label={t.language}
            lang={locale === "en" ? "zh" : "en"}
          >
            {locale === "en" ? "\u4e2d\u6587" : "EN"}
          </a>
        </nav>
      </header>
      {children}
      <footer className="site-footer">
        <span>{t.madeBy}</span>
        <div className="footer-links">
          <Link href={about}>{t.about}</Link>
          {translations[locale].contactLinks.map((link) => (
            <a key={link.name} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.name}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
