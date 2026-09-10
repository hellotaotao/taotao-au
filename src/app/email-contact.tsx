"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import type { Locale } from "./i18n";

export const contactEmail = "hellotaotao@gmail.com";

const copy = {
  en: { copy: "Copy", copied: "Copied", failed: "Copy unavailable. Select the address to copy it." },
  zh: { copy: "\u590d\u5236", copied: "\u5df2\u590d\u5236", failed: "\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u9009\u4e2d\u90ae\u7bb1\u5730\u5740\u624b\u52a8\u590d\u5236\u3002" },
};

export function EmailContact({ locale }: { locale: Locale }) {
  const id = useId();
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const t = copy[locale];
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!expanded) return;
    function position() {
      if (!panel.current || !trigger.current) return;
      const anchor = trigger.current.getBoundingClientRect();
      const box = panel.current.getBoundingClientRect();
      const left = Math.max(12, Math.min(anchor.left, window.innerWidth - box.width - 12));
      const below = anchor.bottom + 8;
      const top = below + box.height <= window.innerHeight - 12 ? below : Math.max(12, anchor.top - box.height - 8);
      panel.current.style.left = `${left}px`;
      panel.current.style.top = `${top}px`;
    }
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setExpanded(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setExpanded(false); trigger.current?.focus(); }
    }
    position();
    window.addEventListener("resize", position);
    window.addEventListener("scroll", position, true);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      window.removeEventListener("resize", position);
      window.removeEventListener("scroll", position, true);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [expanded, status]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="email-contact" ref={root} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }}>
      <button ref={trigger} className="email-trigger" type="button" aria-expanded={expanded} aria-controls={id}
        onClick={() => { setExpanded(!expanded); setStatus("idle"); }}>
        Email
      </button>
      {expanded && <div ref={panel} id={id} className="email-panel" role="group" aria-label="Email">
        <span className="email-address">{contactEmail}</span>
        <button type="button" className="email-copy" onClick={copyAddress}>{t.copy}</button>
        <span role="status" className="email-status">{status === "idle" ? "" : t[status]}</span>
      </div>}
    </div>
  );
}
