import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#174E4F]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 h-1 w-12 rounded-full bg-[#D96F59]" />
            <p className="text-2xl font-bold tracking-tight text-[#FFF9F4]">
              Digital Health Nurse
            </p>
            <p className="mt-3 text-base leading-7 text-[#DDE9E2]">
              Practical career mentoring for nurses and healthcare professionals
              exploring new career directions.
            </p>
          </div>

          <nav
            aria-label="Legal information"
            className="flex flex-col items-start gap-3 sm:flex-row sm:gap-6"
          >
            <Link
              href="/blog"
              className="rounded-sm py-2 text-sm font-semibold text-[#FFF9F4] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#F7DED4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2 focus-visible:ring-offset-[#174E4F]"
            >
              Blog
            </Link>
            <Link
              href="/feedback"
              className="rounded-sm py-2 text-sm font-semibold text-[#FFF9F4] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#F7DED4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2 focus-visible:ring-offset-[#174E4F]"
            >
              Feedback
            </Link>
            <Link
              href="/privacy"
              className="rounded-sm py-2 text-sm font-semibold text-[#FFF9F4] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#F7DED4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2 focus-visible:ring-offset-[#174E4F]"
            >
              Privacy Notice
            </Link>
            <Link
              href="/booking-terms"
              className="rounded-sm py-2 text-sm font-semibold text-[#FFF9F4] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#F7DED4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2 focus-visible:ring-offset-[#174E4F]"
            >
              Booking Terms
            </Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-[#DDE9E2]/30 pt-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-[#FFF9F4]">
              © 2026 Digital Health Nurse. All rights reserved.
            </p>
            <p className="mt-4 text-sm leading-6 text-[#DDE9E2]">
              Digital Health Nurse is an independent personal website. The views
              expressed are my own and do not represent any current or former
              employer. Please do not share patient-identifiable information or
              confidential information belonging to an employer, customer or other
              organisation.
            </p>
            <p className="mt-4 text-sm leading-6 text-[#DDE9E2]">
              Career mentoring provides practical guidance only. It does not
              guarantee employment or replace legal, financial, clinical or other
              regulated professional advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
