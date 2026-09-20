import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TallyForm from "@/components/TallyForm";
import { IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Now hiring at Olde Dominion Tavern in Haymarket, VA. Apply to join our kitchen, bar, and front-of-house team — good people, made-from-scratch food, a great crew.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Now Hiring"
        title="Join Our Team"
        subtitle="Good food, good people, and a neighborhood that shows up. Tell us about yourself below."
        image={IMG.careers}
      />

      <section className="mx-auto max-w-[760px] px-6 py-20 md:px-8 md:py-24">
        <Reveal>
          <div className="rule mb-8">
            <span />
          </div>
          <h2 className="text-center font-display text-[clamp(26px,4vw,40px)] font-light leading-tight text-parchment">
            We&apos;d love to meet you
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center font-sans text-[18px] font-light leading-relaxed text-parchdim">
            Whether you&apos;re behind the bar, in the kitchen, or greeting
            guests at the door, we&apos;re always looking for hardworking,
            friendly people. Fill out the application and we&apos;ll be in touch.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 border border-line bg-void/40 p-4 md:p-6">
            <TallyForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
