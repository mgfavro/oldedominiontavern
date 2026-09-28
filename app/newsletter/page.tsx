import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import { IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join Our Newsletter",
  description:
    "Sign up for the Olde Dominion Tavern newsletter in Haymarket, VA — specials, events, and what's new at the tavern, sent straight to your inbox.",
};

export default function NewsletterPage() {
  return (
    <main>
      <PageHero
        eyebrow="Stay in Touch"
        title="Join Our Newsletter"
        subtitle="Specials, events, and what's new at the tavern — sent straight to your inbox."
        image={IMG.newsletter}
      />

      <section className="mx-auto max-w-[760px] px-6 py-20 md:px-8 md:py-24">
        <Reveal>
          <div className="rule mb-8">
            <span />
          </div>
          <h2 className="text-center font-display text-[clamp(26px,4vw,40px)] font-light leading-tight text-parchment">
            Get the latest from the tavern
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center font-sans text-[18px] font-light leading-relaxed text-parchdim">
            Be the first to hear about new menu items, weekend specials, live
            events, and neighborhood news. Fill in your name, email, and
            birthday below and we&apos;ll keep you in the loop.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12">
            <NewsletterForm />
          </div>
        </Reveal>
      </section>
    </main>
  );
}
