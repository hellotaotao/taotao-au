import Image from "next/image";
import { LabProjects } from "./lab-projects";
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
          {project.cta}<span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </article>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = hubCopy[locale];
  const { featured, more, lab } = getHubProjects(locale);
  return (
    <SiteShell locale={locale}>
      <main id="content">
        <div className="home-intro">
          <span className="intro-spark" aria-hidden="true"><SparkIcon /></span>
          <h1>{locale === "zh" ? t.tagline.split("\uff0c").map((phrase, index) => <span className="tagline-phrase" key={phrase}>{phrase}{index === 0 ? "\uff0c" : ""}</span>) : t.tagline}</h1>
        </div>
        <section id="products" aria-labelledby="products-title" className="featured-section">
          <h2 id="products-title">{t.featuredTitle}</h2>
          <div className="featured-grid">
            {featured.map((project) => <FeaturedProduct key={project.id} project={project} />)}
          </div>
          <section aria-labelledby="more-products-title" className="more-products-section">
            <h2 id="more-products-title">{t.moreTitle}</h2>
            <div className="more-products-grid">
              {more.map((project) => (
                <article key={project.id} className={`more-product-card tone-${project.tone}`}>
                  <span className="lab-icon" aria-hidden="true"><ProductIcon id={project.id} /></span>
                  <div className="more-product-copy">
                    <h3>{project.name}</h3>
                    <p>{project.shortDescription}</p>
                    <a className="product-button" href={project.href} target="_blank" rel="noreferrer">
                      {new URL(project.href).hostname === "chromewebstore.google.com" ? t.installProduct : t.visitProduct}
                      <span aria-hidden="true">&#8599;</span>
                    </a>
                  </div>
                  <div className="more-product-art" aria-hidden="true">
                    <Image src={`/illustrations/${project.id}.png`} alt="" fill sizes="(max-width: 700px) 86px, (max-width: 1050px) 30vw, 20vw" />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
        <section id="lab" aria-labelledby="lab-title" className="lab-section">
          <div className="lab-heading">
            <h2 id="lab-title">{t.labTitle}</h2>
            <p>{t.labIntro}</p>
          </div>
          <LabProjects projects={lab} locale={locale} />
        </section>
      </main>
    </SiteShell>
  );
}
