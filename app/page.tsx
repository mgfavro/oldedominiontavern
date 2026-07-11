import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site, IMG, MARQUEE, FOOD_CATEGORIES } from "@/lib/site";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG.hero}
            alt="The dining room and bar at Olde Dominion Tavern"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/30 via-void/10 to-void" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/55 via-void/10 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-6 pb-28 pt-28 md:px-8 md:pb-32 md:pt-36">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-11 bg-brass" />
              <span className="label">Dominion Valley · Haymarket, Virginia</span>
            </div>

            <h1 className="font-display text-[clamp(52px,9vw,112px)] font-light leading-[0.95] text-parchment">
              The neighborhood table,
              <br />
              set a touch{" "}
              <em className="font-medium not-italic text-brass">higher</em>.
            </h1>

            <p className="mt-7 max-w-xl font-sans text-[clamp(17px,2.2vw,21px)] font-light leading-relaxed text-parchment/90">
              A made-from-scratch American kitchen for every occasion — steak and
              wine by night, burgers with the family, brunch between the games,
              and a patio where the dog is always welcome.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={site.ext.resy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                Reserve a Table
              </a>
              <a
                href={site.ext.toast}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-line bg-char py-4">
        <div className="flex w-max animate-marquee">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className="mx-6 font-display text-[22px] tracking-[0.06em] text-parchdim"
            >
              {m}
              <span className="mx-4 text-brass">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="rule mb-8">
            <span />
          </div>
          <h2 className="font-display text-[clamp(30px,4.5vw,48px)] font-light leading-tight text-parchment">
            A little more polish, none of the pretense.
          </h2>
          <p className="mt-6 font-sans text-[16px] font-light leading-relaxed text-parchdim">
            We&apos;re Haymarket&apos;s neighborhood tavern — the kind of place
            you&apos;ll come back to. Scratch cooking, an easy bar, and a room
            that works just as well for a quiet dinner as it does for the whole
            table on game night.
          </p>
        </Reveal>
      </section>

      {/* FOOD CATEGORIES */}
      <section className="border-t border-line bg-char">
        <div className="mx-auto max-w-[1240px] px-6 py-24 md:px-8 md:py-28">
          <Reveal className="mb-14 flex items-end justify-between gap-6">
            <div>
              <span className="label">From the Kitchen</span>
              <h2 className="mt-4 font-display text-[clamp(30px,4.5vw,52px)] font-light leading-tight text-parchment">
                What&apos;s on the table
              </h2>
            </div>
            <Link
              href="/menus"
              className="hidden font-sans text-[13px] uppercase tracking-[0.14em] text-brass transition-colors hover:text-brasslt sm:inline"
            >
              See the menus →
            </Link>
          </Reveal>

          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {FOOD_CATEGORIES.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div className="h-full bg-char2 p-8 transition-colors hover:bg-[#eef2ee] md:p-10">
                  <h3 className="font-display text-[26px] font-medium text-parchment">
                    {c.name}
                  </h3>
                  <p className="mt-3 font-sans text-[15px] font-light leading-relaxed text-parchdim">
                    {c.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link
              href="/menus"
              className="font-sans text-[13px] uppercase tracking-[0.14em] text-brass"
            >
              See the menus →
            </Link>
          </div>
        </div>
      </section>

      {/* TWO-UP: EVENTS + DOGS */}
      <section className="mx-auto grid max-w-[1240px] gap-px overflow-hidden px-0 md:grid-cols-2">
        <Reveal>
          <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden p-8 md:p-12">
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG.events}
                alt="Private party room"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/35 to-transparent" />
            </div>
            <div className="relative">
              <span className="label">Gather</span>
              <h3 className="mt-3 font-display text-[34px] font-light text-parchment">
                Private parties & events
              </h3>
              <p className="mt-3 max-w-md font-sans text-[15px] font-light leading-relaxed text-parchdim">
                A private room and a team that handles the details — birthdays,
                corporate dinners, showers, and celebrations of every size.
              </p>
              <Link
                href="/events"
                className="mt-6 inline-block font-sans text-[13px] uppercase tracking-[0.14em] text-brass transition-colors hover:text-brasslt"
              >
                Plan your event →
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative flex min-h-[380px] flex-col justify-end overflow-hidden p-8 md:p-12">
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMG.dogs}
                alt="Dog-friendly patio"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/35 to-transparent" />
            </div>
            <div className="relative">
              <span className="label">Bring the Pup</span>
              <h3 className="mt-3 font-display text-[34px] font-light text-parchment">
                Dog of the Month
              </h3>
              <p className="mt-3 max-w-md font-sans text-[15px] font-light leading-relaxed text-parchdim">
                Our patio is always dog-friendly — and every month one very good
                boy or girl gets the spotlight. Submit yours.
              </p>
              <Link
                href="/dogs"
                className="mt-6 inline-block font-sans text-[13px] uppercase tracking-[0.14em] text-brass transition-colors hover:text-brasslt"
              >
                Meet the dogs →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-line bg-char">
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center md:px-8 md:py-28">
          <Reveal>
            <div className="rule mb-8">
              <span />
            </div>
            <h2 className="font-display text-[clamp(32px,5vw,60px)] font-light leading-tight text-parchment">
              Your table is waiting.
            </h2>
            <p className="mx-auto mt-5 max-w-lg font-sans text-[16px] font-light text-parchdim">
              Walk-ins welcome, reservations encouraged. We&apos;ll save you a
              seat at the bar.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={site.ext.resy}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                Reserve a Table
              </a>
              <Link href="/visit" className="btn btn-ghost">
                Find Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
