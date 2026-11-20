import Link from "next/link";
import { getHubProjects, hubCopy } from "../hub-data";
import type { Locale } from "../i18n";
import { LabProjects } from "../lab-projects";
import { SiteShell } from "../site-shell";

export function ArchivePage({ locale }: { locale: Locale }) {
  const t = hubCopy[locale];
  const { archive } = getHubProjects(locale);
  return (
    <SiteShell locale={locale} page="archive">
      <main id="content" className="archive-page">
        <Link className="back-link" href={`/?lang=${locale}#lab`}><span aria-hidden="true">&larr;</span> {t.backToLab}</Link>
        <section className="lab-section" aria-labelledby="archive-title">
          <div className="lab-heading">
            <h1 id="archive-title">{t.archiveTitle}</h1>
          </div>
          <p className="archive-intro">{t.archiveIntro}</p>
          <LabProjects projects={archive} locale={locale} />
        </section>
      </main>
    </SiteShell>
  );
}
