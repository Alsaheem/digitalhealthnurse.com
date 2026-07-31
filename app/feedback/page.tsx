import type { Metadata } from "next";
import FeedbackForm from "../components/FeedbackForm";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Feedback",
  description:
    "Share feedback about Digital Health Nurse career mentoring for nurses exploring digital health and non-clinical careers.",
  alternates: {
    canonical: "/feedback",
  },
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-[#FFF9F4] text-[#243332]">
      <SiteHeader homePrefix="/" />

      <main>
        <section className="border-b border-[#DDE9E2] bg-[linear-gradient(135deg,#FFF9F4_0%,#FFF9F4_55%,#F7DED4_100%)]">
          <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 md:py-20">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D96F59]">
              Feedback
            </p>
            <h1 className="font-hero-serif max-w-2xl text-4xl font-bold leading-tight text-[#174E4F] md:text-5xl">
              I&apos;d love to hear from you
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#516361]">
              Share your experience of mentoring or the website. Your feedback helps
              me keep the guidance practical, clear and useful.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-14 sm:px-8 md:py-16">
          <FeedbackForm />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
