"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "./i18n";

export const contactEmail = "hellotaotao@gmail.com";

const copy = {
  en: { copy: "Copy", copied: "Copied", failed: "Copy unavailable. Select the address to copy it." },
  zh: { copy: "\u590d\u5236", copied: "\u5df2\u590d\u5236", failed: "\u590d\u5236\u5931\u8d25\uff0c\u8bf7\u9009\u4e2d\u90ae\u7bb1\u5730\u5740\u624b\u52a8\u590d\u5236\u3002" },
};

export function EmailContact({ locale }: { locale: Locale }) {
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const t = copy[locale];
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!expanded) return;
    function outside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) setExpanded(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setExpanded(false); trigger.current?.focus(); }
    }
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [expanded]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="email-contact" data-expanded={expanded} ref={root}>
      <button ref={trigger} className="email-trigger" type="button" aria-expanded={expanded}
        onClick={() => {
          if (window.getSelection()?.toString() === contactEmail) return;
          setExpanded(!expanded); setStatus("idle");
        }}>
        <span className={expanded ? "email-address" : undefined}>{expanded ? contactEmail : "Email"}</span>
      </button>
      {expanded && <button type="button" className="email-copy" aria-label={status === "copied" ? t.copied : t.copy}
        title={status === "idle" ? t.copy : t[status]} onClick={copyAddress}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          {status === "copied" ? <path d="m5 12 4 4L19 6" /> : <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>}
        </svg>
      </button>}
      <span role="status" className="email-status">{status === "idle" ? "" : t[status]}</span>
    </div>
  );
}
