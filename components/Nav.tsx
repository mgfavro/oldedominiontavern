"use client";

import { useState } from "react";
import Link from "next/link";
import { site, nav, LOGO } from "@/lib/site";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

const linkClass =
  "font-sans text-[13px] uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-white";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brass/95 backdrop-blur">
      {/* desktop: centered logo above a centered link row */}
      <div className="mx-auto hidden max-w-[1240px] flex-col items-center gap-5 px-6 py-6 lg:flex">
        <Link href="/" aria-label="Olde Dominion Tavern — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO.white}
            alt="Olde Dominion Tavern"
            className="h-20 w-auto xl:h-24"
          />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {nav.map((n) =>
            n.external ? (
              <a
                key={n.label}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {n.label}
              </a>
            ) : (
              <Link key={n.label} href={n.href} className={linkClass}>
                {n.label}
              </Link>
            ),
          )}
        </nav>
      </div>

      {/* mobile: hamburger + centered logo */}
      <div className="flex items-center justify-between px-6 py-4 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="text-white"
          aria-label="Open menu"
        >
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>

        <Link href="/" aria-label="Olde Dominion Tavern — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO.white}
            alt="Olde Dominion Tavern"
            className="h-12 w-auto"
          />
        </Link>

        {/* spacer to keep the logo centered opposite the hamburger */}
        <span className="w-[26px]" aria-hidden="true" />
      </div>

      {/* mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-brass lg:hidden">
          <div className="flex items-center justify-between border-b border-white/15 px-6 py-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO.white}
              alt="Olde Dominion Tavern"
              className="h-12 w-auto"
            />
            <button
              onClick={() => setOpen(false)}
              className="text-white"
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-6 py-4">
            {nav.map((n) =>
              n.external ? (
                <a
                  key={n.label}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="border-b border-white/15 py-4 font-display text-[24px] text-white"
                >
                  {n.label}
                </a>
              ) : (
                <Link
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/15 py-4 font-display text-[24px] text-white"
                >
                  {n.label}
                </Link>
              ),
            )}

            <div className="mt-8 flex items-center gap-5">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/85 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/85 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a
                href={site.phoneHref}
                className="ml-auto font-sans text-[14px] font-medium text-white"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
