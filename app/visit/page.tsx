import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site, IMG, HOURS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Find Olde Dominion Tavern at ${site.address.line1}, ${site.address.line2}. Hours, directions, and contact.`,
};

export default function VisitPage() {
  return (
    <main>
      <PageHero
        eyebrow="Find Us"
        title="Visit the Tavern"
        subtitle="In the heart of Dominion Valley. Walk-ins welcome, reservations encouraged."
        image={IMG.visit}
      />

      <section className="mx-auto grid max-w-[1240px] gap-16 px-6 py-20 md:grid-cols-2 md:px-8 md:py-24">
        {/* details */}
        <Reveal>
          <span className="label">Where to Find Us</span>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,44px)] font-light leading-tight text-parchment">
            {site.address.line1}
            <br />
            {site.address.line2}
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <div className="label mb-3">Hours</div>
              <ul className="max-w-sm space-y-1.5">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-6 border-b border-line/50 pb-1.5 font-sans text-[15px] text-parchdim"
                  >
                    <span>{h.day}</span>
                    <span className="text-parchmute">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={site.ext.resy}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Reserve a Table
            </a>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Get Directions
            </a>
          </div>
        </Reveal>

        {/* map */}
        <Reveal delay={100}>
          <div className="h-full min-h-[380px] overflow-hidden border border-line">
            <iframe
              title="Map to Olde Dominion Tavern"
              src={site.mapEmbed}
              className="h-full min-h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
