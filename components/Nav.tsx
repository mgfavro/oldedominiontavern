"use client";

import { useState } from "react";
import Link from "next/link";
import { site, nav, LOGO } from "@/lib/site";
import { InstagramBadge, FacebookBadge } from "@/components/SocialIcons";

const linkClass =
  "font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-white/85 transition-colors hover:text-white";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {nav.map((n) =>
        n.external ? (
          <a
            key={n.label}
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onNavigate}
            className={linkClass}
          >
            {n.label}
          </a>
        ) : (
          <Link
            key={n.label}
            href={n.href}
            onClick={onNavigate}
            className={linkClass}
          >
            {n.label}
          </Link>
        ),
      )}
    </>
  );
}

function SocialLinks({ size = "h-9 w-9" }: { size?: string }) {
  return (
    <>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition-opacity hover:opacity-90"
      >
        <InstagramBadge className={size} />
      </a>
      <a
        href={site.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="transition-opacity hover:opacity-90"
      >
        <FacebookBadge className={size} />
      </a>
    </>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brass shadow-sm">
      {/* desktop */}
      <div className="mx-auto hidden max-w-[1240px] px-6 md:px-8 lg:block">
        {/* top zone: centered logo, social icons pinned right */}
        <div className="relative flex items-center justify-center pt-4 pb-3">
          <Link href="/" aria-label="Olde Dominion Tavern — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO.white}
              alt="Olde Dominion Tavern"
              className="w-[280px] max-w-full"
            />
          </Link>
          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-3">
            <SocialLinks />
          </div>
        </div>

        {/* bottom zone: centered nav row */}
        <nav className="flex items-center justify-center gap-x-10 pb-4">
          <NavLinks />
        </nav>
      </div>

      {/* mobile bar */}
      <div className="flex items-center justify-between px-6 py-3 lg:hidden">
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
            className="w-[170px]"
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
              className="w-[170px]"
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
            <div className="flex flex-col">
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
            </div>

            <div className="mt-8 flex items-center gap-4">
              <SocialLinks size="h-10 w-10" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
