import Link from "next/link";

type SiteHeaderProps = {
  /** Use absolute home anchors when not on the homepage */
  homePrefix?: "" | "/";
};

export default function SiteHeader({ homePrefix = "" }: SiteHeaderProps) {
  const prefix = homePrefix;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#DDE9E2] bg-[#FFF9F4]/95 shadow-[0_1px_12px_rgba(23,78,79,0.06)] backdrop-blur-md">
      <div className="mx-auto max-w-[90rem] px-5 py-4 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#174E4F] sm:text-2xl"
          >
            Digital Health Nurse
          </Link>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:justify-end">
            <a
              href={`${prefix}#about`}
              className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
            >
              Meet Stacy
            </a>
            <a
              href={`${prefix}#skills`}
              className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
            >
              How I Help
            </a>
            <a
              href={`${prefix}#projects`}
              className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
            >
              Who It&apos;s For
            </a>
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
            >
              Blog
            </Link>
            <a
              href={`${prefix}#mentoring`}
              className="scale-btn inline-flex min-h-11 items-center rounded-full bg-[#174E4F] px-5 py-2.5 text-[0.95rem] font-semibold text-white shadow-sm hover:bg-[#123E3F] hover:shadow-md"
            >
              Book a Session
            </a>
            <a
              href={`${prefix}#contact`}
              className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
