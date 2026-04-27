import type { CSSProperties } from "react";

import { getProjectCards, type Locale, translations } from "./i18n";

function buildStyle(delay: string, accent?: string): CSSProperties {
  return {
    "--delay": delay,
    ...(accent ? { "--card-accent": accent } : {}),
  } as CSSProperties;
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const projectCards = getProjectCards(locale);

  return (
    <main id="content" className="site-shell">
      <div className="site-background" aria-hidden="true">
        <span className="bg-grid" />
        <span className="bg-beam" />
        <span className="bg-orb orb-one" />
        <span className="bg-orb orb-two" />
        <span className="bg-orb orb-three" />
      </div>

      <div className="page-frame">
        <section
          aria-labelledby="home-title"
          className="hero-panel panel reveal"
          style={buildStyle("0.08s")}
        >
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">taotao.au</p>
              <div className="hero-badges">
                {t.hero.badges.map((badge, index) => (
                  <span
                    key={badge}
                    className={index === 0 ? "badge" : "badge badge-subtle"}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <h1 id="home-title" className="hero-title">
                {t.hero.title}
              </h1>

              <p className="hero-lead">{t.hero.lead}</p>

              <p className="hero-body">{t.hero.body}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  {t.hero.projectsCta}
                </a>
                <a className="button button-secondary" href="#contact">
                  {t.hero.contactCta}
                </a>
              </div>

              <div
                className="motion-rail reveal"
                style={buildStyle("0.24s")}
                role="group"
                aria-label={t.hero.signalsLabel}
              >
                <span className="motion-rail-track" aria-hidden="true" />
                {t.motionSignals.map((signal, index) => (
                  <div
                    key={signal.label}
                    className="motion-chip"
                    style={buildStyle(`${0.3 + index * 0.08}s`)}
                  >
                    <span className="motion-chip-label">{signal.label}</span>
                    <span className="motion-chip-value">{signal.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="spotlight-card reveal" style={buildStyle("0.2s")}>
              <div className="spotlight-sheen" aria-hidden="true" />
              <p className="section-label">{t.spotlight.label}</p>
              <p className="spotlight-title">{t.spotlight.title}</p>
              <p className="spotlight-copy">{t.spotlight.copy}</p>

              <dl className="spotlight-grid">
                {t.spotlightStats.map((item) => (
                  <div key={item.label} className="spotlight-stat">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <div className="hero-metrics">
            {t.heroMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className="metric-card reveal"
                style={buildStyle(`${0.28 + index * 0.08}s`)}
              >
                <p className="metric-label">{metric.label}</p>
                <p className="metric-value">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-title"
          className="panel section-panel reveal"
          style={buildStyle("0.18s")}
        >
          <div className="section-header">
            <div>
              <p className="section-label">{t.projects.label}</p>
              <h2 id="projects-title" className="section-title">
                {t.projects.title}
              </h2>
            </div>
            <p className="section-intro">{t.projects.intro}</p>
          </div>

          <div className="project-grid">
            {projectCards.map((project, index) => (
              <article
                key={project.name}
                className="project-card reveal"
                style={buildStyle(`${0.24 + index * 0.08}s`, project.accent)}
              >
                <span className="project-glow-ring" aria-hidden="true" />
                <div className="project-meta">
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-status">{project.status}</span>
                </div>

                <h3 className="project-title">
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </h3>

                <p className="project-description">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="detail-grid">
          <section
            id="about"
            aria-labelledby="about-title"
            className="panel detail-card reveal"
            style={buildStyle("0.24s")}
          >
            <p className="section-label">{t.about.label}</p>
            <h2 id="about-title" className="section-title">
              {t.about.title}
            </h2>

            {t.about.copy.map((copy) => (
              <p key={copy} className="detail-copy">
                {copy}
              </p>
            ))}

            <div className="tag-row" aria-label={t.about.focusLabel}>
              {t.focusAreas.map((area) => (
                <span key={area} className="tag">
                  {area}
                </span>
              ))}
            </div>
          </section>

          <section
            id="now"
            aria-labelledby="now-title"
            className="panel detail-card reveal"
            style={buildStyle("0.3s")}
          >
            <p className="section-label">{t.now.label}</p>
            <h2 id="now-title" className="section-title">
              {t.now.title}
            </h2>

            <ul className="now-list">
              {t.nowItems.map((item, index) => (
                <li
                  key={item}
                  className="now-item reveal"
                  style={buildStyle(`${0.36 + index * 0.06}s`)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="panel contact-panel reveal"
          style={buildStyle("0.36s")}
        >
          <div className="section-header contact-header">
            <div>
              <p className="section-label">{t.contact.label}</p>
              <h2 id="contact-title" className="section-title">
                {t.contact.title}
              </h2>
            </div>

            <p className="section-intro">{t.contact.intro}</p>
          </div>

          <div className="contact-actions">
            {t.contactLinks.map((link, index) => {
              const isExternal = link.href.startsWith("http");

              return (
                <a
                  key={link.name}
                  className="contact-link reveal"
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  style={buildStyle(`${0.42 + index * 0.06}s`)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
