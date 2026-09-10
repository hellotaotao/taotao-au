import Link from "next/link";
import { EmailContact } from "../email-contact";
import { hubCopy } from "../hub-data";
import { type Locale, translations } from "../i18n";
import { SiteShell } from "../site-shell";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const copy = hubCopy[locale];
  return (
    <SiteShell locale={locale} page="about">
      <main id="content" className="about-page">
        <Link className="back-link" href={`/?lang=${locale}#products`}><span aria-hidden="true">&larr;</span> {copy.backToProducts}</Link>
        <section className="about-intro" aria-labelledby="about-title">
          <p className="eyebrow">{copy.about}</p>
          <h1 id="about-title">{copy.hello}</h1>
          <p className="about-lead">{t.hero.lead}</p>
          <p>{t.hero.body}</p>
        </section>
        <div className="about-grid">
          <section className="about-block" aria-labelledby="story-title">
            <h2 id="story-title">{t.about.title}</h2>
            {t.about.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="focus-tags" aria-label={t.about.focusLabel}>{t.focusAreas.map((area) => <span key={area}>{area}</span>)}</div>
          </section>
          <section className="about-block now-block" aria-labelledby="now-title">
            <h2 id="now-title">{t.now.title}</h2>
            <ul>{t.nowItems.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
        <section className="contact-block" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{t.contact.title}</h2>
          <p>{t.contact.intro}</p>
          <div className="contact-links"><EmailContact locale={locale} />{t.contactLinks.map((link) => <a key={link.name} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>{link.name}<span aria-hidden="true">{"\u2197"}</span></a>)}</div>
        </section>
      </main>
    </SiteShell>
  );
}
