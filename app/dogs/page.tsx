import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site, IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dog of the Month",
  description:
    "Our Haymarket patio is always dog-friendly. Meet our Dog of the Month and submit your pup for the spotlight.",
};

const STEPS = [
  {
    n: "01",
    title: "Snap a photo",
    copy: "Grab your best shot of your dog — bonus points if it's on our patio.",
  },
  {
    n: "02",
    title: "Send it over",
    copy: "Share it with us on Instagram or Facebook, or hand it to your server on your next visit.",
  },
  {
    n: "03",
    title: "Watch for the spotlight",
    copy: "Each month we feature one very good boy or girl here and around the tavern.",
  },
];

export default function DogsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Bring the Pup"
        title="Dog of the Month"
        subtitle="The patio's always open to four-legged regulars — and every month, one of them gets the spotlight."
        image={IMG.dogs}
      />

      {/* how it works */}
      <section className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24">
        <Reveal className="mb-14 text-center">
          <div className="rule mb-8">
            <span />
          </div>
          <h2 className="font-display text-[clamp(28px,4.5vw,48px)] font-light text-parchment">
            How to get your dog featured
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="h-full border border-line bg-char2 p-8">
                <div className="font-display text-[40px] font-light text-brass">
                  {s.n}
                </div>
                <h3 className="mt-3 font-display text-[24px] font-medium text-parchment">
                  {s.title}
                </h3>
                <p className="mt-2 font-sans text-[15px] font-light leading-relaxed text-parchdim">
                  {s.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Submit on Instagram
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Submit on Facebook
            </a>
          </div>
        </Reveal>
      </section>

      {/* recent pups — placeholder tiles */}
      <section className="border-t border-line bg-char">
        <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-8 md:py-24">
          <Reveal className="mb-10">
            <span className="label">Recent Regulars</span>
            <h2 className="mt-4 font-display text-[clamp(26px,4vw,40px)] font-light text-parchment">
              The wall of fame
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center border border-line bg-char2"
              >
                <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-parchmute">
                  Pup photo
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-sans text-[13px] text-parchmute">
            Replace these tiles with real photos from{" "}
            <code className="text-parchdim">/public</code>.
          </p>
        </div>
      </section>
    </main>
  );
}
