import Image from "next/image";
import { getHubProjects, hubCopy, type HubProject } from "./hub-data";
import type { Locale } from "./i18n";
import { ProductIcon, SparkIcon } from "./product-icon";
import { SiteShell } from "./site-shell";

function FeaturedProduct({ project }: { project: HubProject }) {
  return (
    <article className={`featured-card featured-${project.id} tone-${project.tone}`}>
      <div className="illustration-slot" aria-hidden="true">
      <Image
        className="product-illustration"
        src={`/illustrations/${project.id}.png`}
        alt=""
        loading="eager"
        fill
        sizes={project.id === "saytype" ? "(max-width: 700px) 100vw, (max-width: 1050px) 90vw, 48vw" : "(max-width: 700px) 100vw, (max-width: 1050px) 45vw, 24vw"}
      />
      </div>
      <span className="featured-status">{project.status}</span>
      <div className="featured-copy">
        <div className="featured-icon" aria-hidden="true"><ProductIcon id={project.id} /></div>
        <h3>{project.name}</h3>
        <p className="featured-description">{project.shortDescription}</p>
        <p className="platform">{project.platform}</p>
        <a className="product-button" href={project.href} target="_blank" rel="noreferrer">
          {project.cta}<span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </article>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = hubCopy[locale];
  const { featured, lab } = getHubProjects(locale);
  return (
    <SiteShell locale={locale}>
      <main id="content">
        <div className="home-intro">
          <span className="intro-spark" aria-hidden="true"><SparkIcon /></span>
          <h1>{t.tagline}</h1>
        </div>
        <section id="products" aria-labelledby="products-title" className="featured-section">
          <h2 id="products-title">{t.featuredTitle}</h2>
          <div className="featured-grid">
            {featured.map((project) => <FeaturedProduct key={project.id} project={project} />)}
          </div>
        </section>
        <section id="lab" aria-labelledby="lab-title" className="lab-section">
          <div className="lab-heading">
            <h2 id="lab-title">{t.labTitle}</h2>
            <p>{t.labIntro}</p>
          </div>
          <div className="lab-grid">
            {lab.map((project) => (
              <article className={`lab-card tone-${project.tone}`} key={project.id}>
                <a href={project.href} target="_blank" rel="noreferrer" className="lab-link">
                  <span className="lab-icon" aria-hidden="true"><ProductIcon id={project.id} /></span>
                  <h3>{project.name}</h3>
                  <p>{project.shortDescription}</p>
                  <span className="project-status">{project.status}</span>
                  <span className="lab-arrow" aria-hidden="true">{"\u2197"}</span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
