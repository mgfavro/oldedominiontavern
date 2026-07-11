import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VendorForm from "@/components/VendorForm";
import { IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Farm Van",
  description:
    "Our vintage Farm Van is parked right outside the tavern, serving drinks from the bar menu alongside a rotating lineup of local vendors — the patio experience, elevated.",
};

export default function FarmVanPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Patio Experience, Elevated"
        title="The Farm Van"
        subtitle="A vintage van parked right outside the tavern — pouring drinks from our bar menu alongside a rotating lineup of local vendors."
        image={IMG.farmvan}
      />

      {/* intro */}
      <section className="mx-auto max-w-[820px] px-6 py-20 text-center md:px-8 md:py-24">
        <Reveal>
          <div className="rule mb-8">
            <span />
          </div>
          <h2 className="font-display text-[clamp(28px,4.5vw,46px)] font-light leading-tight text-parchment">
            Meet the newest member of the family
          </h2>
          <p className="mt-6 font-sans text-[17px] font-light leading-relaxed text-parchdim">
            Meet the newest member of the Olde Dominion Tavern family! Our
            vintage Farm Van is parked right outside the tavern, serving up
            refreshing drinks from our bar menu alongside a rotating lineup of
            your favorite local vendors. It&apos;s the patio experience,
            elevated!
          </p>
        </Reveal>
      </section>

      {/* vendor form */}
      <section className="border-t border-line bg-char">
        <div className="mx-auto max-w-[720px] px-6 py-20 md:px-8 md:py-24">
          <Reveal>
            <div className="text-center">
              <span className="label">Interested in Vending?</span>
              <h2 className="mt-4 font-display text-[clamp(26px,4vw,40px)] font-light leading-tight text-parchment">
                Are You a Local Vendor?
              </h2>
              <p className="mt-5 font-sans text-[16px] font-light leading-relaxed text-parchdim">
                We&apos;re always looking for talented local makers and vendors
                to partner with. Tell us a little about what you do and
                we&apos;ll be in touch!
              </p>
            </div>

            <div className="mt-10">
              <VendorForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
