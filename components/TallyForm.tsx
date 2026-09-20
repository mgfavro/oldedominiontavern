"use client";

import { useEffect } from "react";

const TALLY_SCRIPT = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

type TallyFormProps = {
  /** Full Tally embed URL (include dynamicHeight=1 for auto-resize). */
  src: string;
  /** Accessible iframe title. */
  title: string;
};

/**
 * Embeds a Tally form. Loads Tally's embed script once so the iframe can
 * auto-resize (dynamicHeight) instead of scrolling.
 */
export default function TallyForm({ src, title }: TallyFormProps) {
  useEffect(() => {
    const load = () => window.Tally?.loadEmbeds();

    // Script already present (e.g. client-side navigation) — just re-run embeds.
    if (window.Tally) {
      load();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${TALLY_SCRIPT}"]`,
    );
    if (existing) {
      existing.addEventListener("load", load);
      return () => existing.removeEventListener("load", load);
    }

    const script = document.createElement("script");
    script.src = TALLY_SCRIPT;
    script.async = true;
    script.onload = load;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      data-tally-src={src}
      loading="lazy"
      width="100%"
      height="500"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title={title}
      className="w-full"
    />
  );
}
