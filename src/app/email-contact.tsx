"use client";

import { useId, useState } from "react";
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

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="email-contact">
      <button className="email-trigger" type="button" aria-expanded={expanded} aria-controls={id}
        onClick={() => { setExpanded(!expanded); setStatus("idle"); }}>
        Email
      </button>
      {expanded && <div id={id} className="email-panel">
        <span className="email-address">{contactEmail}</span>
        <button type="button" className="email-copy" onClick={copyAddress}>{t.copy}</button>
        <span role="status" className="email-status">{status === "idle" ? "" : t[status]}</span>
      </div>}
    </div>
  );
}
