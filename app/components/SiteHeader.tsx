"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

type SiteHeaderProps = {
  /** Use absolute home anchors when not on the homepage */
  homePrefix?: "" | "/";
};

const navLinkClass =
  "inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4";

export default function SiteHeader({ homePrefix = "" }: SiteHeaderProps) {
  const prefix = homePrefix;
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  const links = [
    { href: `${prefix}#about`, label: "Meet Stacy" },
    { href: `${prefix}#skills`, label: "How I Help" },
    { href: `${prefix}#projects`, label: "Who It's For" },
    { href: "/blog", label: "Blog", isRoute: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE9E2] bg-[#FFF9F4]/95 shadow-[0_1px_12px_rgba(23,78,79,0.06)] backdrop-blur-md">
      <nav className="mx-auto max-w-[90rem] px-5 py-3 sm:px-8 sm:py-4" aria-label="Main">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="min-w-0 truncate text-lg font-bold tracking-tight text-[#174E4F] sm:text-2xl"
          >
            Digital Health Nurse
          </Link>

          <div className="hidden items-center gap-2 lg:flex lg:gap-3">
            {links.map((link) =>
              link.isRoute ? (
                <Link key={link.href} href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={navLinkClass}>
                  {link.label}
                </a>
              ),
            )}
            <a
              href={`${prefix}#mentoring`}
              className="scale-btn inline-flex min-h-11 items-center rounded-full bg-[#174E4F] px-5 py-2.5 text-[0.95rem] font-semibold text-white shadow-sm hover:bg-[#123E3F] hover:shadow-md"
            >
              Book a Session
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`${prefix}#mentoring`}
              onClick={closeMenu}
              className="scale-btn inline-flex min-h-10 items-center rounded-full bg-[#174E4F] px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#123E3F]"
            >
              Book
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C8D8CF] bg-white text-[#174E4F] transition-colors hover:bg-[#DDE9E2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          id={menuId}
          hidden={!open}
          className="mt-3 border-t border-[#DDE9E2] pt-3 lg:hidden"
        >
          <div className="flex flex-col gap-1 pb-2">
            {links.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F]"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F]"
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href={`${prefix}#mentoring`}
              onClick={closeMenu}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-[#174E4F] px-5 py-3 text-base font-semibold text-white"
            >
              Book a Session
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
