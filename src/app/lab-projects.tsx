"use client";

import { Fragment, useRef, useState, type CSSProperties } from "react";
import type { HubProject } from "./hub-data";
import type { Locale } from "./i18n";
import { ProductIcon } from "./product-icon";

const copy = {
  en: { more: "Learn more", close: "Close details", website: "Visit product website", store: "Install from Chrome Web Store", destination: "Opens in a new tab" },
  zh: { more: "\u4e86\u89e3\u66f4\u591a", close: "\u6536\u8d77\u8be6\u60c5", website: "\u524d\u5f80\u4ea7\u54c1\u7f51\u7ad9", store: "\u524d\u5f80 Chrome \u5546\u5e97\u5b89\u88c5", destination: "\u5728\u65b0\u6807\u7b7e\u9875\u6253\u5f00" },
};

export function LabProjects({ projects, locale }: { projects: HubProject[]; locale: Locale }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const triggers = useRef<Record<string, HTMLButtonElement | null>>({});
  const t = copy[locale];
  function close(id: string) {
    setExpanded(null);
    triggers.current[id]?.focus();
  }
  return (
    <div className="lab-grid">
      {projects.map((project, index) => {
        const open = expanded === project.id;
        const panelId = `lab-details-${project.id}`;
        const titleId = `lab-title-${project.id}`;
        const host = new URL(project.href).hostname;
        return (
          <Fragment key={project.id}>
            <article className={`lab-card tone-${project.tone}`} style={{ order: index * 2 }}>
              <button type="button" className="lab-link" aria-expanded={open} aria-controls={panelId}
                aria-label={`${project.name}: ${open ? t.close : t.more}`}
                ref={(node) => { triggers.current[project.id] = node; }}
                onKeyDown={(event) => { if (event.key === "Escape") close(project.id); }}
                onClick={() => setExpanded(open ? null : project.id)}>
                <span className="lab-icon" aria-hidden="true"><ProductIcon id={project.id} /></span>
                <span className="lab-name">{project.name}</span>
                <span className="lab-summary">{project.shortDescription}</span>
                <span className="project-status">{project.status}</span>
                <span className="lab-disclosure">{open ? t.close : t.more}<span aria-hidden="true">{open ? "\u2212" : "+"}</span></span>
              </button>
            </article>
            <div id={panelId} role="region" aria-labelledby={titleId} hidden={!open}
              className={`lab-details tone-${project.tone}`}
              style={{ "--desktop-order": Math.floor(index / 5) * 10 + 9, "--mobile-order": index * 2 + 1 } as CSSProperties}
              onKeyDown={(event) => { if (event.key === "Escape") { event.stopPropagation(); close(project.id); } }}>
              {open && <div className="lab-details-inner">
                <span className="lab-detail-art" aria-hidden="true"><ProductIcon id={project.id} /></span>
                <div className="lab-detail-copy">
                  <span className="lab-detail-platform">{project.platform && `${project.platform} \u00b7 `}{project.status}</span>
                  <h3 id={titleId}>{project.name}</h3>
                  <p>{project.description}</p>
                  <a className="product-button" href={project.href} target="_blank" rel="noreferrer" aria-describedby={`${panelId}-destination`}>
                    {host === "chromewebstore.google.com" ? t.store : t.website}<span aria-hidden="true">{"\u2197"}</span>
                  </a>
                  <small id={`${panelId}-destination`}>{host} &middot; {t.destination}</small>
                </div>
                <button type="button" className="lab-close" onClick={() => close(project.id)} aria-label={t.close}>{"\u00d7"}</button>
              </div>}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
