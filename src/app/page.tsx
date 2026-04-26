import type { CSSProperties } from "react";

const projectCards = [
  {
    name: "Mentii",
    href: "https://menti.taotao.au/",
    status: "Live website",
    accent: "rgba(120, 189, 255, 0.5)",
    description:
      "A lightweight audience interaction tool for live sessions, voting, and host-controlled experiences.",
  },
  {
    name: "BetterSchool.au",
    href: "https://betterschool.au/",
    status: "Live website",
    accent: "rgba(255, 190, 126, 0.48)",
    description:
      "A school discovery product focused on helping families compare options with map-led exploration.",
  },
  {
    name: "Voicely",
    href: "https://voicely.taotao.au/",
    status: "Live website",
    accent: "rgba(230, 171, 255, 0.42)",
    description:
      "A privacy-first iOS voice notes and transcription product with a dedicated public website.",
  },
  {
    name: "Energy Plan Lens",
    href: "https://energy.taotao.au/",
    status: "Live website",
    accent: "rgba(160, 255, 214, 0.42)",
    description:
      "A practical energy comparison lens for making electricity plan details easier to inspect and understand.",
  },
  {
    name: "WhispLine / SayType",
    href: "https://github.com/hellotaotao/WhispLine",
    status: "Active build",
    accent: "rgba(255, 223, 132, 0.42)",
    description:
      "Voice-first productivity tooling still in active development before a deployed public website.",
  },
];

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/hellotaotao",
  },
  {
    name: "Email",
    href: "mailto:hellotaotao@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
  },
];

const spotlightStats = [
  {
    label: "Base",
    value: "Adelaide, Australia",
  },
  {
    label: "Priority",
    value: "Useful workflows and sharp UX",
  },
  {
    label: "Mode",
    value: "Small products, fast iteration",
  },
];

const heroMetrics = [
  {
    label: "Current home",
    value: "taotao.au is the main hub for live products, active builds, and updates.",
  },
  {
    label: "Build style",
    value: "Simple interfaces, quick feedback loops, and steady practical refinement.",
  },
  {
    label: "Focus areas",
    value: "AI, productivity, education, and voice-first software with real utility.",
  },
];

const motionSignals = [
  {
    label: "Pulse",
    value: "Useful AI",
  },
  {
    label: "Priority",
    value: "Fast trial",
  },
  {
    label: "Bias",
    value: "Clean UX",
  },
];

const focusAreas = [
  "Practical AI products",
  "Education",
  "Productivity tools",
  "Voice-first software",
];

const nowItems = [
  "Keeping taotao.au current with live public project websites.",
  "Improving live products like Mentii, BetterSchool.au, Voicely, and Energy Plan Lens.",
  "Building WhispLine / SayType before it has a deployed public website.",
];

function buildStyle(delay: string, accent?: string): CSSProperties {
  return {
    "--delay": delay,
    ...(accent ? { "--card-accent": accent } : {}),
  } as CSSProperties;
}

export default function Home() {
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
                <span className="badge">Adelaide-based builder</span>
                <span className="badge badge-subtle">
                  Useful AI over AI spectacle
                </span>
              </div>

              <h1 id="home-title" className="hero-title">
                Tao Wang
              </h1>

              <p className="hero-lead">
                I build practical AI products, tools, and experiments.
              </p>

              <p className="hero-body">
                Based in Adelaide, I work on useful software that is simple,
                fast to try, and grounded in real-world problems. This site is
                the main hub for my current products, ideas, and ongoing work.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View current projects
                </a>
                <a className="button button-secondary" href="#contact">
                  Get in touch
                </a>
              </div>

              <div
                className="motion-rail reveal"
                style={buildStyle("0.24s")}
                role="group"
                aria-label="Current build signals"
              >
                <span className="motion-rail-track" aria-hidden="true" />
                {motionSignals.map((signal, index) => (
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
              <p className="section-label">Right now</p>
              <p className="spotlight-title">
                Shipping small, useful products with AI where it actually helps.
              </p>
              <p className="spotlight-copy">
                The work is biased toward fast time-to-value, clean interfaces,
                and real workflows instead of novelty for its own sake.
              </p>

              <dl className="spotlight-grid">
                {spotlightStats.map((item) => (
                  <div key={item.label} className="spotlight-stat">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <div className="hero-metrics">
            {heroMetrics.map((metric, index) => (
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
              <p className="section-label">Selected work</p>
              <h2 id="projects-title" className="section-title">
                Current projects
              </h2>
            </div>
            <p className="section-intro">
              Live project websites first, followed by active builds that are
              still moving toward a public launch.
            </p>
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
            <p className="section-label">Profile</p>
            <h2 id="about-title" className="section-title">
              About
            </h2>

            <p className="detail-copy">
              I like building software that feels immediately useful: products
              with a clear purpose, simple interfaces, and enough technical
              depth to keep getting better over time.
            </p>

            <p className="detail-copy">
              My work often sits at the intersection of AI, productivity,
              education, and practical web products.
            </p>

            <div className="tag-row" aria-label="Focus areas">
              {focusAreas.map((area) => (
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
            <p className="section-label">In motion</p>
            <h2 id="now-title" className="section-title">
              Now
            </h2>

            <ul className="now-list">
              {nowItems.map((item, index) => (
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
              <p className="section-label">Open line</p>
              <h2 id="contact-title" className="section-title">
                Contact
              </h2>
            </div>

            <p className="section-intro">
              The easiest way to find me is through GitHub or email. If we are
              discussing products, prototypes, or practical AI ideas, feel free
              to reach out.
            </p>
          </div>

          <div className="contact-actions">
            {contactLinks.map((link, index) => {
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
