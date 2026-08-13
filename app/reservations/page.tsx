import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site, IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Olde Dominion Tavern seats guests first come, first served. Groups of 9 or more can email for group booking.",
};

export default function ReservationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Seating"
        title="Reservations"
        subtitle="Walk-ins welcome. Here's how we seat our guests."
        image={IMG.visit}
      />

      <section className="mx-auto max-w-[720px] px-6 py-20 text-center md:px-8 md:py-24">
        <Reveal>
          <div className="rule mb-8">
            <span />
          </div>
          <h2 className="font-display text-[clamp(26px,4vw,40px)] font-light leading-tight text-parchment">
            First come, first served
          </h2>
          <p className="mt-6 font-sans text-[18px] font-light leading-relaxed text-parchdim">
            We serve our guests on a first come, first serve basis.
          </p>
          <p className="mt-5 font-sans text-[18px] font-light leading-relaxed text-parchdim">
            Groups of 9 or more please email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-brass underline decoration-brass/30 underline-offset-4 transition-colors hover:text-brasslt hover:decoration-brasslt"
            >
              {site.email}
            </a>{" "}
            for prompt group booking.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/visit" className="btn btn-solid">
              Find Us
            </Link>
            <Link href="/events" className="btn btn-ghost">
              Large Parties
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
