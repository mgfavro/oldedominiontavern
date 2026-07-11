import Link from "next/link";
import { site, nav, HOURS, LOGO } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#0d0906]">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
        {/* brand + contact */}
        <div className="md:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO.white}
            alt="Olde Dominion Tavern"
            className="h-11 w-auto"
          />
          <p className="mt-4 font-sans text-[14px] leading-relaxed text-parchdim">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <a
            href={site.phoneHref}
            className="mt-3 inline-block font-sans text-[14px] text-brass transition-colors hover:text-brasslt"
          >
            {site.phone}
          </a>
        </div>

        {/* explore */}
        <div>
          <div className="label mb-4">Explore</div>
          <ul className="space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="font-sans text-[14px] text-parchdim transition-colors hover:text-parchment"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* order & reserve */}
        <div>
          <div className="label mb-4">Order & Reserve</div>
          <ul className="space-y-2.5">
            <li>
              <a
                href={site.ext.resy}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-parchdim transition-colors hover:text-parchment"
              >
                Reserve a Table
              </a>
            </li>
            <li>
              <a
                href={site.ext.toast}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-parchdim transition-colors hover:text-parchment"
              >
                Order Online
              </a>
            </li>
            <li>
              <a
                href={site.ext.ezcater}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[14px] text-parchdim transition-colors hover:text-parchment"
              >
                Catering
              </a>
            </li>
          </ul>
        </div>

        {/* hours */}
        <div>
          <div className="label mb-4">Hours</div>
          <ul className="space-y-1.5">
            {HOURS.map((h) => (
              <li
                key={h.day}
                className="flex justify-between gap-4 font-sans text-[13px] text-parchdim"
              >
                <span>{h.day}</span>
                <span className="text-parchmute">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-3 px-6 py-6 md:flex-row md:px-8">
          <p className="font-sans text-[12px] text-parchmute">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.12em] text-parchmute transition-colors hover:text-brass"
            >
              Instagram
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[12px] uppercase tracking-[0.12em] text-parchmute transition-colors hover:text-brass"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
