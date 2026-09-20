"use client";

import { useEffect } from "react";

const TALLY_SRC =
  "https://tally.so/embed/lbp5KV?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_SCRIPT = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

/**
 * Renders the Olde Dominion Tavern "Join Our Team" application form (Tally).
 * Loads Tally's embed script once so the iframe can auto-resize (dynamicHeight).
 */
export default function TallyForm() {
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
      data-tally-src={TALLY_SRC}
      loading="lazy"
      width="100%"
      height="500"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="Join Our Team — Application"
      className="w-full"
    />
  );
}
