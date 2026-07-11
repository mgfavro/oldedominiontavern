import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CareersForm from "@/components/CareersForm";
import { IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "Now hiring at Olde Dominion Tavern in Haymarket, VA. Join a neighborhood tavern built on scratch cooking and genuine hospitality — apply today.",
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers"
        title="Join Our Team"
        subtitle="We're a neighborhood tavern built on scratch cooking and genuine hospitality — and we're always looking for great people."
        image={IMG.events}
      />

      {/* intro */}
      <section className="mx-auto max-w-[820px] px-6 py-20 text-center md:px-8 md:py-24">
        <Reveal>
          <div className="rule mb-8">
            <span />
          </div>
          <h2 className="font-display text-[clamp(28px,4.5vw,46px)] font-light leading-tight text-parchment">
            Come work with us
          </h2>
          <p className="mt-6 font-sans text-[17px] font-light leading-relaxed text-parchdim">
            From the kitchen to the bar to the floor, our team is what makes the
            tavern feel like home. If you take pride in your craft and love
            taking care of people, we&apos;d love to hear from you. Tell us a
            little about yourself below and attach your resume.
          </p>
        </Reveal>
      </section>

      {/* application form */}
      <section className="border-t border-line bg-char">
        <div className="mx-auto max-w-[760px] px-6 py-20 md:px-8 md:py-24">
          <Reveal className="mb-10">
            <span className="label">Apply Now</span>
            <h2 className="mt-4 font-display text-[clamp(26px,4vw,40px)] font-light leading-tight text-parchment">
              Application
            </h2>
            <p className="mt-5 font-sans text-[16px] font-light leading-relaxed text-parchdim">
              Fill out the form below and our team will be in touch about
              current openings.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <CareersForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
