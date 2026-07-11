import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookEventForm from "@/components/BookEventForm";
import { site, IMG, EVENT_TYPES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Large Parties & Events",
  description:
    "Host your next celebration at Olde Dominion Tavern in Haymarket, VA. Private party room for birthdays, corporate dinners, showers, and holiday parties.",
};

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gather"
        title={
          <>
            Large Parties
            <br />& Events
          </>
        }
        subtitle="A private room, a scratch kitchen, and a team that handles the details — so you can enjoy your own party."
        image={IMG.events}
      />

      <section className="mx-auto grid max-w-[1240px] gap-16 px-6 py-20 md:grid-cols-2 md:px-8 md:py-24">
        <Reveal>
          <span className="label">The Space</span>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,44px)] font-light leading-tight text-parchment">
            Room for the whole table — and then some.
          </h2>
          <p className="mt-6 font-sans text-[16px] font-light leading-relaxed text-parchdim">
            Whether it&apos;s a milestone birthday, a team dinner, or a holiday
            get-together, our private party room and semi-private options flex to
            fit your group. We&apos;ll help with menus, timing, and everything in
            between.
          </p>
          <p className="mt-4 font-sans text-[16px] font-light leading-relaxed text-parchdim">
            Tell us what you&apos;re celebrating and we&apos;ll build the night
            around it.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href={site.phoneHref} className="btn btn-solid">
              Call to Book
            </a>
            <a
              href={site.ext.ezcater}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Off-Site Catering
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-line bg-char2 p-8 md:p-10">
            <span className="label">We Host</span>
            <ul className="mt-6 space-y-4">
              {EVENT_TYPES.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" />
                  <span className="font-sans text-[16px] font-light text-parchment">
                    {t}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-6">
              <p className="font-sans text-[14px] text-parchmute">
                Questions about availability or group size?
              </p>
              <a
                href={site.phoneHref}
                className="mt-1 inline-block font-display text-[26px] text-brass transition-colors hover:text-brasslt"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* BOOK YOUR EVENT — Web3Forms-wired request form */}
      <section className="border-t border-line bg-char">
        <div className="mx-auto max-w-[820px] px-6 py-20 md:px-8 md:py-24">
          <Reveal>
            <div className="text-center">
              <span className="label">Book Your Event</span>
              <h2 className="mt-4 font-display text-[clamp(24px,4vw,38px)] font-light leading-tight text-parchment">
                Request to Book a Large Party or Event
              </h2>
            </div>

            <div className="mt-10">
              <BookEventForm />
            </div>

            <div className="mt-10 text-center">
              <p className="font-sans text-[14px] text-parchmute">
                Prefer to talk it through? Give us a call.
              </p>
              <a
                href={site.phoneHref}
                className="mt-1 inline-block font-display text-[26px] text-brass transition-colors hover:text-brasslt"
              >
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
