import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site, IMG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menus",
  description:
    "Scratch-made American fare in Haymarket, VA. View our All Day, Brunch, and Drink menus.",
};

const MENUS: { title: string; note: string; href: string }[] = [
  { title: "All Day Menu", note: "Starters, handhelds, entrées & more", href: "/all-day-menu.pdf" },
  { title: "Brunch Menu", note: "Served on weekends", href: "/brunch-menu.pdf" },
  { title: "Drink Menu", note: "Cocktails, beer, wine & spirits", href: "/drink-menu.pdf" },
];

export default function MenusPage() {
  return (
    <main>
      <PageHero
        eyebrow="From the Kitchen"
        title="Our Menus"
        subtitle="Made from scratch, served without fuss. Tap a menu below to view it."
        image={IMG.menus}
      />

      <section className="mx-auto max-w-[1000px] px-6 py-20 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {MENUS.map((menu, i) => (
            <Reveal key={menu.title} delay={i * 80}>
              <a
                href={menu.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center justify-center border border-line bg-char2 px-6 py-14 text-center transition-colors hover:border-brass hover:bg-char"
              >
                <span className="label">View Menu</span>
                <h2 className="mt-4 font-display text-[clamp(22px,3vw,30px)] font-light leading-tight text-parchment">
                  {menu.title}
                </h2>
                <p className="mt-3 font-sans text-[14px] font-light text-parchdim">
                  {menu.note}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-brass transition-colors group-hover:text-brasslt">
                  Open PDF
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-line pt-12 text-center">
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
