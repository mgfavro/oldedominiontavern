import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site, IMG, MENU_SECTIONS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menus",
  description:
    "Scratch-made American fare in Haymarket, VA — starters, handhelds, steaks, seafood, and weekend brunch. Order online or dine in.",
};

export default function MenusPage() {
  return (
    <main>
      <PageHero
        eyebrow="From the Kitchen"
        title="Our Menus"
        subtitle="Made from scratch, served without fuss. Menu items and pricing below are samples — swap in your live menu."
        image={IMG.menus}
      />

      <section className="mx-auto max-w-[900px] px-6 py-20 md:px-8 md:py-24">
        {MENU_SECTIONS.map((section, si) => (
          <Reveal key={section.title} delay={si * 60} className="mb-16">
            <div className="mb-8 flex items-center gap-5">
              <h2 className="font-display text-[clamp(28px,4vw,40px)] font-light text-parchment">
                {section.title}
              </h2>
              <span className="h-px flex-1 bg-line" />
            </div>

            <ul className="space-y-7">
              {section.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-[22px] font-medium text-parchment">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-sans text-[15px] text-brass">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1.5 font-sans text-[15px] font-light leading-relaxed text-parchdim">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal className="mt-4 border-t border-line pt-12 text-center">
          <p className="font-sans text-[15px] font-light text-parchdim">
            Ready to eat? Order online for pickup, or bring the tavern to your
            next gathering.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={site.ext.toast}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Order Online
            </a>
            <a
              href={site.ext.ezcater}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Catering
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
