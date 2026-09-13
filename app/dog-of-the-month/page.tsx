import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import DogOfMonthForm from "@/components/DogOfMonthForm";
import { IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dog of the Month",
  description:
    "Nominate your pup for Dog of the Month at Olde Dominion Tavern in Haymarket, VA. Our patio is always dog-friendly — submit a photo and your dog could be our next featured good boy or girl.",
};

const STEPS: { title: string; copy: string }[] = [
  {
    title: "Snap a photo",
    copy: "A clear, well-lit picture of your pup — bonus points if it's on our patio.",
  },
  {
    title: "Tell us their story",
    copy: "Name, breed, and what makes them the best boy or girl in Haymarket.",
  },
  {
    title: "Submit the form",
    copy: "Fill out the nomination below. We announce a new winner every month.",
  },
];

export default function DogOfTheMonthPage() {
  return (
    <main>
      <PageHero
        eyebrow="Good Boys & Girls"
        title="Dog of the Month"
        subtitle="Our patio is always dog-friendly. Nominate your pup and they could be our next featured Dog of the Month."
        image={IMG.dogOfMonth}
      />

      {/* INTRO + HOW IT WORKS */}
      <section className="mx-auto grid max-w-[1240px] gap-16 px-6 py-20 md:grid-cols-2 md:px-8 md:py-24">
        <Reveal>
          <span className="label">The Tradition</span>
          <h2 className="mt-4 font-display text-[clamp(28px,4vw,44px)] font-light leading-tight text-parchment">
            Every good dog deserves the spotlight.
          </h2>
          <p className="mt-6 font-sans text-[16px] font-light leading-relaxed text-parchdim">
            Dogs are family at Olde Dominion Tavern — and our patio wouldn&apos;t
            be the same without them. Each month we choose a new Dog of the Month
            to feature on our socials and celebrate right here at the tavern.
          </p>
          <p className="mt-4 font-sans text-[16px] font-light leading-relaxed text-parchdim">
            Nominate your pup below, then bring them by the dog-friendly patio for
            a treat on the house.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#nominate" className="btn btn-solid">
              Nominate Your Dog
            </a>
            <Link href="/visit" className="btn btn-ghost">
              Visit the Patio
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-line bg-char2 p-8 md:p-10">
            <span className="label">How It Works</span>
            <ol className="mt-6 space-y-6">
              {STEPS.map((step, i) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brass font-display text-[16px] text-brass">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[20px] font-light text-parchment">
                      {step.title}
                    </h3>
                    <p className="mt-1 font-sans text-[15px] font-light leading-relaxed text-parchdim">
                      {step.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* NOMINATE — embed your Web3Forms form inside this section */}
      <section
        id="nominate"
        className="scroll-mt-24 border-t border-line bg-char"
      >
        <div className="mx-auto max-w-[820px] px-6 py-20 md:px-8 md:py-24">
          <Reveal>
            <div className="text-center">
              <span className="label">Nominate</span>
              <h2 className="mt-4 font-display text-[clamp(24px,4vw,38px)] font-light leading-tight text-parchment">
                Nominate Your Dog of the Month
              </h2>
              <p className="mx-auto mt-4 max-w-xl font-sans text-[16px] font-light leading-relaxed text-parchdim">
                Fill out the form below and our team will be in touch if your pup
                is chosen.
              </p>
            </div>

            <div className="mt-10">
              <DogOfMonthForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
