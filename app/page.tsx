import Image from "next/image";
import Link from "next/link";
import profilePhoto from "../public/stacy-mentoring-portrait.png";
import FadeUp from "./components/FadeUp";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

const careerRoles = [
  {
    title: "Clinical Informatics",
    description:
      "Use clinical expertise to improve healthcare systems, workflows and patient outcomes.",
  },
  {
    title: "Customer Success",
    description:
      "Support healthcare organisations in successfully adopting digital health solutions.",
  },
  {
    title: "Clinical Applications Specialist",
    description:
      "Train and support clinicians using healthcare technologies and software.",
  },
  {
    title: "Implementation Consultant",
    description:
      "Help hospitals and healthcare organisations deploy new digital solutions.",
  },
  {
    title: "Clinical Product Specialist",
    description:
      "Bridge the gap between clinicians and product teams to improve healthcare technology.",
  },
  {
    title: "Digital Transformation",
    description:
      "Lead projects that improve healthcare delivery through technology and innovation.",
  },
  {
    title: "Clinical Safety",
    description:
      "Ensure digital health products are safe for patients and compliant with healthcare regulations.",
  },
  {
    title: "Product Management",
    description:
      "Work with engineers, designers and clinicians to shape products that solve real healthcare challenges.",
  },
];

const helpCards = [
  {
    title: "Discover Careers You Didn't Know You Were Already Qualified For",
    description:
      "Explore opportunities across digital health, health informatics, customer success and other non-clinical healthcare careers. Together we'll identify realistic directions that align with your experience, interests and long-term goals.",
    tone: "sage" as const,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
      </svg>
    ),
  },
  {
    title: "Learn How Employers See Your Clinical Experience",
    description:
      "Understand the transferable skills you've developed throughout your healthcare career and learn how to communicate them in a way that resonates with hiring managers outside traditional clinical roles.",
    tone: "blush" as const,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.6-3 2.4-5 5.5-5s4.9 2 5.5 5" />
        <circle cx="18" cy="7" r="1.5" />
        <circle cx="19" cy="15" r="1.5" />
        <path d="m11.5 9.5 5.1-1.8M13.5 14.5l4 .5" />
      </svg>
    ),
  },
  {
    title: "Position Yourself With Confidence",
    description:
      "Receive practical guidance on strengthening your CV, LinkedIn profile and interview story so your experience clearly reflects the value you bring beyond clinical practice.",
    tone: "blush" as const,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M6 3.5h8l4 4V20.5H6z" />
        <path d="M14 3.5v4h4M9 12h6M9 15.5h6" />
      </svg>
    ),
  },
  {
    title: "Leave With a Clear Action Plan",
    description:
      "Turn uncertainty into practical next steps. We'll identify which roles to pursue, what skills to develop, where to network and how to move forward with confidence.",
    tone: "sage" as const,
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="6" r="2" />
        <path d="M7 18h3.5a3 3 0 0 0 3-3v-6a3 3 0 0 1 3-3H17" />
        <path d="m10 12 2 2 3-3" />
      </svg>
    ),
  },
];

function CheckIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF9F4] text-[#243332]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-[#DDE9E2] bg-[#FFF9F4]/95 shadow-[0_1px_12px_rgba(23,78,79,0.06)] backdrop-blur-md">
        <div className="mx-auto max-w-[90rem] px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-xl font-bold tracking-tight text-[#174E4F] sm:text-2xl">
              Digital Health Nurse
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:justify-end">
              <a
                href="#about"
                className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
              >
                Meet Stacy
              </a>
              <a
                href="#skills"
                className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
              >
                How I Help
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
              >
                Who It&apos;s For
              </a>
              <a
                href="#mentoring"
                className="scale-btn inline-flex min-h-11 items-center rounded-full bg-[#174E4F] px-5 py-2.5 text-[0.95rem] font-semibold text-white shadow-sm hover:bg-[#123E3F] hover:shadow-md"
              >
                Book a Session
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-full px-3 py-2.5 text-[0.95rem] font-semibold text-[#243332] transition-colors hover:bg-[#DDE9E2] hover:text-[#174E4F] sm:px-4"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#FFF9F4_0%,#FFF9F4_50%,#F7DED4_100%)]">
        <div
          aria-hidden="true"
          className="absolute -left-24 bottom-[-10rem] h-80 w-80 rounded-full bg-[#DDE9E2]/80 blur-sm sm:h-96 sm:w-96"
        />
        <div
          aria-hidden="true"
          className="absolute right-[8%] top-14 h-3 w-3 rounded-full bg-[#D96F59] sm:h-4 sm:w-4"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-14 text-center sm:px-8 md:py-18 lg:py-20">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#D96F59] sm:text-base">
            DIGITAL HEALTH NURSE
          </p>

          <h1 className="font-hero-serif mx-auto mb-7 max-w-[53rem] text-[2.5rem] font-bold leading-[1.08] tracking-[-0.025em] text-[#174E4F] md:text-[2.875rem] lg:text-[3.75rem]">
            You Don&apos;t Have to Leave Healthcare to Leave Clinical Practice.
          </h1>

          <p className="mx-auto mb-9 max-w-[47.5rem] text-[1.1875rem] leading-8 text-[#243332]/85">
            I help nurses and healthcare professionals transition into digital health,
            health tech and other non-clinical careers by showing them how to leverage
            the experience they already have.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="#mentoring"
              className="scale-btn inline-flex min-h-12 items-center justify-center rounded-full bg-[#174E4F] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(23,78,79,0.18)] hover:bg-[#123E3F] hover:shadow-[0_14px_30px_rgba(23,78,79,0.24)]"
            >
              View Mentoring Options
            </a>

            <a
              href="#about"
              className="scale-btn inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#D96F59] bg-[#FFFFFF]/70 px-8 py-4 text-base font-bold text-[#174E4F] shadow-sm hover:bg-[#F7DED4]"
            >
              Meet Stacy
            </a>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section
        aria-label="Professional background"
        className="border-y border-[#C8D8CF] bg-[#FFFCF9]"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-6 px-6 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-y-0">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[#174E4F]"
            >
              <path d="M12 3 5 6v5c0 4.6 2.8 8.3 7 10 4.2-1.7 7-5.4 7-10V6l-7-3Z" />
              <path d="M9 12h6M12 9v6" />
            </svg>
            <p className="text-base font-semibold text-[#174E4F]">
              Registered Adult Nurse
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center lg:border-l lg:border-[#C8D8CF]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[#174E4F]"
            >
              <path d="M4 20h16M7 20V8h10v12M9 8V5h6v3M10 12h4M12 10v4" />
            </svg>
            <p className="text-base font-semibold text-[#174E4F]">
              Clinical &amp; Oncology Background
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center lg:border-l lg:border-[#C8D8CF]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[#174E4F]"
            >
              <rect x="3" y="5" width="18" height="12" rx="2" />
              <path d="M8 21h8M12 17v4M8 11h2l1.2-2.5L13 14l1.2-3H16" />
            </svg>
            <p className="text-base font-semibold text-[#174E4F]">
              Digital Health &amp; Customer Success Experience
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center lg:border-l lg:border-[#C8D8CF]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[#174E4F]"
            >
              <path d="m3 9 9-5 9 5-9 5-9-5Z" />
              <path d="M7 12v4.5c2.8 2 7.2 2 10 0V12M21 9v6" />
            </svg>
            <p className="text-base font-semibold text-[#174E4F]">
              MSc Healthcare Informatics — In Progress
            </p>
          </div>
        </div>
      </section>

      {/* Meet Stacy */}
      <section id="about" className="bg-[#DDE9E2] scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:py-24">
          <FadeUp className="relative mx-auto w-full max-w-md lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 h-full w-full rounded-[3rem_1.5rem_3rem_1.5rem] bg-[#F7DED4] sm:-bottom-7 sm:-right-7"
            />
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-[#D96F59]/90 sm:h-20 sm:w-20"
            />
            <div className="relative aspect-square overflow-hidden rounded-[3rem_1.5rem_3rem_1.5rem] border-4 border-white bg-white shadow-[0_22px_50px_rgba(23,78,79,0.18)]">
              <Image
                src={profilePhoto}
                alt="Stacy Nyangere"
                width={500}
                height={600}
                className="h-full w-full object-cover object-[center_40%]"
                priority
              />
            </div>
          </FadeUp>

          <FadeUp delayMs={80}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D96F59] sm:text-base">
              Meet Stacy
            </p>
            <h2 className="font-hero-serif mb-7 max-w-2xl text-4xl font-bold leading-tight text-[#174E4F] sm:text-5xl">
              I&apos;ve made the transition you&apos;re considering.
            </h2>
            <div className="max-w-2xl space-y-6 text-lg leading-8 text-[#243332]">
              <p>
                I&apos;ve been exactly where you are. Confused by unfamiliar job
                titles, unsure whether my nursing experience was enough and wondering
                if I had to start all over again.
              </p>
              <p>
                Hi, I&apos;m Stacy, a Registered Adult Nurse who moved from frontline
                nursing and specialist oncology into digital health and customer
                success. When I began exploring opportunities beyond traditional
                clinical practice, unfamiliar job titles and unclear career pathways
                made it difficult to understand where my experience fitted.
              </p>
              <p>
                Making that transition taught me how to identify transferable skills,
                explore realistic career options and communicate the value of
                healthcare experience in a different way. I created Digital Health
                Nurse to offer the practical, honest and personalised guidance I wish
                I had when planning my own next move.
              </p>
              <p className="border-l-4 border-[#D96F59] bg-[#F7DED4]/65 px-5 py-4 font-medium text-[#174E4F]">
                My approach is supportive and straightforward: no generic career
                advice, unrealistic promises or pressure, just focused guidance to
                help you make informed decisions.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* How I Can Help */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-20 md:py-24">
        <FadeUp>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#174E4F] md:text-5xl">
            How I Can Help You Move Forward
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-8 text-[#516361] md:mb-12">
            Focused support to help you understand your options, communicate your value
            and take practical steps towards a career that fits your experience and
            priorities.
          </p>
        </FadeUp>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {helpCards.map((card, index) => (
            <FadeUp key={card.title} delayMs={index * 60}>
              <div
                className={`lift-card relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#DDE9E2] p-8 shadow-[0_12px_32px_rgba(23,78,79,0.08)] hover:border-[#B9D0C3] hover:shadow-[0_16px_38px_rgba(23,78,79,0.12)] md:p-10 ${
                  card.tone === "sage" ? "bg-white" : "bg-[#FFFCF9]"
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute left-8 top-0 h-1 w-16 rounded-b-full bg-[#D96F59]"
                />
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-[#174E4F] ${
                    card.tone === "sage" ? "bg-[#DDE9E2]" : "bg-[#F7DED4]"
                  }`}
                >
                  {card.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold leading-tight text-[#174E4F]">
                  {card.title}
                </h3>
                <p className="text-base leading-7 text-[#516361]">{card.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section id="projects" className="bg-[#174E4F] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <FadeUp>
            <h2 className="mb-5 max-w-4xl text-4xl font-bold tracking-tight text-[#FFF9F4] md:text-5xl">
              This Mentoring May Be Right for You If…
            </h2>
            <p className="mb-12 max-w-3xl text-lg leading-8 text-[#DDE9E2]">
              You do not need to have your next career completely figured out. This
              support is designed for healthcare professionals who want greater clarity
              and practical direction.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2">
            <div className="flex gap-5 pb-8 md:pr-10">
              <CheckIcon className="mt-1 h-6 w-6 shrink-0 text-[#D96F59]" />
              <div>
                <h3 className="mb-3 text-2xl font-bold text-[#FFF9F4]">
                  You Want Something Different
                </h3>
                <p className="text-base leading-7 text-[#DDE9E2]">
                  You know you want to move beyond your current clinical or healthcare
                  role, but you are unsure which opportunities to search for or where
                  to begin.
                </p>
              </div>
            </div>

            <div className="flex gap-5 border-t border-[#DDE9E2]/25 py-8 md:border-l md:border-t-0 md:py-0 md:pl-10">
              <CheckIcon className="mt-1 h-6 w-6 shrink-0 text-[#D96F59]" />
              <div>
                <h3 className="mb-3 text-2xl font-bold text-[#FFF9F4]">
                  You Are Curious About Digital Health
                </h3>
                <p className="text-base leading-7 text-[#DDE9E2]">
                  You keep seeing roles in digital health, health informatics, customer
                  success or healthcare technology, but you are unsure whether your
                  experience is relevant.
                </p>
              </div>
            </div>

            <div className="flex gap-5 border-t border-[#DDE9E2]/25 py-8 md:pb-0 md:pr-10">
              <CheckIcon className="mt-1 h-6 w-6 shrink-0 text-[#D96F59]" />
              <div>
                <h3 className="mb-3 text-2xl font-bold text-[#FFF9F4]">
                  You Struggle to Explain Your Transferable Skills
                </h3>
                <p className="text-base leading-7 text-[#DDE9E2]">
                  You know you have valuable healthcare experience, but find it
                  difficult to communicate how those skills apply to different roles
                  and employers.
                </p>
              </div>
            </div>

            <div className="flex gap-5 border-t border-[#DDE9E2]/25 pt-8 md:border-l md:pl-10 md:pb-0">
              <CheckIcon className="mt-1 h-6 w-6 shrink-0 text-[#D96F59]" />
              <div>
                <h3 className="mb-3 text-2xl font-bold text-[#FFF9F4]">
                  You Want Practical Next Steps
                </h3>
                <p className="text-base leading-7 text-[#DDE9E2]">
                  You are ready to move beyond general career advice and develop a
                  clearer, realistic approach to researching roles and planning your
                  transition.
                </p>
              </div>
            </div>

            <div className="flex gap-5 border-t border-[#DDE9E2]/25 pt-8 md:col-span-2 md:mt-2">
              <CheckIcon className="mt-1 h-6 w-6 shrink-0 text-[#D96F59]" />
              <div className="max-w-3xl">
                <h3 className="mb-3 text-2xl font-bold text-[#FFF9F4]">
                  You&apos;re Applying But Not Getting Interviews
                </h3>
                <p className="text-base leading-7 text-[#DDE9E2]">
                  You&apos;ve started applying for digital health or non-clinical roles
                  but aren&apos;t getting the responses you expected. Together we&apos;ll
                  identify what&apos;s missing and how to better position your
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section
        id="career-pathways"
        className="bg-[#FFF9F4] scroll-mt-20"
        aria-labelledby="career-pathways-heading"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <FadeUp>
            <h2
              id="career-pathways-heading"
              className="mb-5 max-w-4xl text-4xl font-bold tracking-tight text-[#174E4F] md:text-5xl"
            >
              What Does a Career Beyond Clinical Practice Look Like?
            </h2>
            <p className="mb-12 max-w-3xl text-lg leading-8 text-[#516361]">
              Digital Health is much broader than most healthcare professionals
              realise. Your experience could open doors into roles that combine
              healthcare knowledge with technology, innovation and patient impact.
            </p>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {careerRoles.map((role, index) => (
              <FadeUp key={role.title} delayMs={(index % 4) * 50}>
                <article className="lift-card flex h-full flex-col rounded-3xl border border-[#DDE9E2] bg-white p-6 shadow-[0_10px_28px_rgba(23,78,79,0.07)] hover:border-[#B9D0C3] hover:shadow-[0_14px_34px_rgba(23,78,79,0.11)] sm:p-7">
                  <div
                    aria-hidden="true"
                    className="mb-5 h-1 w-10 rounded-full bg-[#D96F59]"
                  />
                  <h3 className="mb-3 text-xl font-bold leading-tight text-[#174E4F]">
                    {role.title}
                  </h3>
                  <p className="text-base leading-7 text-[#516361]">
                    {role.description}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-12 text-center">
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#243332]">
              You don&apos;t need experience in every one of these roles. The skills
              you&apos;ve already built in healthcare may be more transferable than you
              think.
            </p>
            <a
              href="#mentoring"
              className="scale-btn inline-flex min-h-12 items-center justify-center rounded-full bg-[#174E4F] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(23,78,79,0.18)] hover:bg-[#123E3F] hover:shadow-[0_14px_30px_rgba(23,78,79,0.24)]"
            >
              Explore My Career Options
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Career Mentoring Section */}
      <section
        id="mentoring"
        className="mx-auto max-w-7xl px-6 pb-6 pt-20 scroll-mt-36 sm:px-8 md:pb-10 md:pt-24 lg:scroll-mt-24"
      >
        <FadeUp>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#174E4F] md:text-5xl">
            Career Mentoring
          </h2>
          <p className="mb-12 max-w-4xl text-lg leading-8 text-[#516361]">
            Choose the support that matches where you are now. If you are unsure whether
            mentoring is suitable, begin with a brief introductory call. If you are ready
            for focused guidance, book a Career Strategy Session.
          </p>
        </FadeUp>

        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Introductory Call */}
          <FadeUp>
            <div className="lift-card rounded-3xl border border-[#C8D8CF] bg-[#FFFCF9] p-8 shadow-[0_12px_32px_rgba(23,78,79,0.08)] md:p-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#D96F59]">
                Free Offer
              </p>
              <h3 className="mb-5 text-2xl font-bold leading-tight text-[#174E4F] md:text-3xl">
                Free 15-Minute Introductory Call
              </h3>
              <p className="mb-6 text-base leading-7 text-[#516361]">
                A brief conversation to understand where you are in your career, what
                you are considering and whether a Career Strategy Session would be
                appropriate.
              </p>

              <ul className="mb-6 space-y-4">
                <li className="flex gap-3 text-base leading-7 text-[#243332]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#174E4F]" />
                  <span>Ask initial questions about the mentoring service</span>
                </li>
                <li className="flex gap-3 text-base leading-7 text-[#243332]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#174E4F]" />
                  <span>Briefly explain the career change you are considering</span>
                </li>
                <li className="flex gap-3 text-base leading-7 text-[#243332]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#174E4F]" />
                  <span>Decide whether the full session is suitable for you</span>
                </li>
              </ul>

              <p className="mb-7 border-l-4 border-[#D96F59] pl-4 text-sm leading-6 text-[#516361]">
                This is an introductory suitability call rather than a detailed
                mentoring session.
              </p>

              <a
                href="https://cal.com/stacy-nyangere/career-intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="scale-btn inline-flex min-h-12 items-center justify-center rounded-full bg-[#174E4F] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(23,78,79,0.18)] hover:bg-[#123E3F] hover:shadow-[0_14px_30px_rgba(23,78,79,0.24)]"
              >
                Book a Free Introductory Call
              </a>
            </div>
          </FadeUp>

          {/* Career Strategy Session */}
          <FadeUp delayMs={80}>
            <div className="lift-card relative rounded-3xl border-2 border-[#174E4F] bg-[#174E4F] p-8 shadow-[0_18px_45px_rgba(23,78,79,0.20)] md:p-10">
              <span className="mb-5 inline-flex rounded-full bg-[#D96F59] px-4 py-2 text-sm font-bold text-white">
                Focused Support
              </span>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#F7DED4]">
                Paid Offer
              </p>
              <h3 className="mb-5 text-2xl font-bold leading-tight text-[#FFF9F4] md:text-3xl">
                45-Minute Career Strategy Session
              </h3>
              <p className="mb-6 text-base leading-7 text-[#DDE9E2]">
                A focused one-to-one session designed to help you explore realistic
                career directions, recognise the value of your experience and identify
                practical priorities for moving forward.
              </p>

              <div className="mb-7">
                <p className="text-2xl font-semibold tracking-tight text-[#DDE9E2]/80 line-through decoration-[#D96F59] decoration-2">
                  £49
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#F7DED4]">
                  Introductory Price
                </p>
                <p className="mt-1 text-5xl font-bold tracking-tight text-[#FFF9F4] md:text-6xl">
                  £25
                </p>
              </div>

              <ul className="mb-7 space-y-4">
                <li className="flex gap-3 text-base leading-7 text-[#FFF9F4]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#D96F59]" />
                  <span>
                    Explore career directions that may fit your experience and
                    priorities
                  </span>
                </li>
                <li className="flex gap-3 text-base leading-7 text-[#FFF9F4]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#D96F59]" />
                  <span>Identify transferable skills relevant to different roles</span>
                </li>
                <li className="flex gap-3 text-base leading-7 text-[#FFF9F4]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#D96F59]" />
                  <span>
                    Discuss your CV, LinkedIn positioning or interview story where
                    relevant
                  </span>
                </li>
                <li className="flex gap-3 text-base leading-7 text-[#FFF9F4]">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-[#D96F59]" />
                  <span>Agree practical next steps for continuing your transition</span>
                </li>
              </ul>

              <p className="mb-7 border-l-4 border-[#D96F59] pl-4 text-sm leading-6 text-[#DDE9E2]">
                The aim is for you to leave with greater clarity about the options worth
                exploring and the actions to prioritise next.
              </p>

              <a
                href="https://cal.com/stacy-nyangere/career-strategy-session"
                target="_blank"
                rel="noopener noreferrer"
                className="scale-btn inline-flex min-h-12 items-center justify-center rounded-full bg-[#FFF9F4] px-8 py-4 text-base font-bold text-[#174E4F] shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:bg-white hover:shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                Book a Career Strategy Session
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 md:pt-10">
        <FadeUp>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#174E4F] md:text-5xl">
            How It Works
          </h2>
          <p className="mb-12 max-w-3xl text-lg leading-8 text-[#516361]">
            A simple, focused process designed to make good use of your time and keep
            the conversation relevant to your career goals.
          </p>
        </FadeUp>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-7 top-8 w-px bg-[#C8D8CF] lg:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#C8D8CF] lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Session",
                body: "Book the free introductory call if you are still deciding whether mentoring is suitable, or choose the Career Strategy Session when you are ready for focused support.",
              },
              {
                step: "02",
                title: "Share Your Career Context",
                body: "Before the session, provide brief information about your current role, the change you are considering and what you would most like help with.",
              },
              {
                step: "03",
                title: "Have a Focused Conversation",
                body: "We will explore your experience, transferable skills, possible career directions and the challenges affecting your next move.",
              },
              {
                step: "04",
                title: "Prioritise Your Next Steps",
                body: "We will identify practical priorities to help you continue researching, positioning and planning your career transition.",
              },
            ].map((item) => (
              <div key={item.step} className="relative flex gap-5 lg:block lg:text-center">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D96F59] text-base font-bold text-white shadow-[0_6px_16px_rgba(217,111,89,0.22)] lg:mx-auto lg:mb-6">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold leading-tight text-[#174E4F]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-7 text-[#516361]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="bg-[#F7DED4]/45 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D96F59]">
            BEFORE YOU BOOK
          </p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-[#174E4F] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-8 text-[#516361]">
            A few helpful answers about who mentoring is for, what to expect and how
            the sessions work.
          </p>

          <div className="border-t border-[#C8D8CF]">
            <details className="group border-b border-[#C8D8CF]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-[#174E4F] outline-none transition-colors hover:text-[#123E3F] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FDF0EA] [&::-webkit-details-marker]:hidden">
                <span>Is this mentoring only for nurses?</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-[#D96F59] transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-[#243332]">
                No. The service is designed for nurses and other healthcare
                professionals who are exploring digital health, health informatics,
                customer success or other non-clinical career directions.
              </p>
            </details>

            <details className="group border-b border-[#C8D8CF]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-[#174E4F] outline-none transition-colors hover:text-[#123E3F] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FDF0EA] [&::-webkit-details-marker]:hidden">
                <span>Do I need to know which career I want?</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-[#D96F59] transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-[#243332]">
                No. You can book a session while you are still exploring. The
                conversation can help you consider realistic directions based on your
                experience, interests and priorities.
              </p>
            </details>

            <details className="group border-b border-[#C8D8CF]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-[#174E4F] outline-none transition-colors hover:text-[#123E3F] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FDF0EA] [&::-webkit-details-marker]:hidden">
                <span>Is this a recruitment or job-placement service?</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-[#D96F59] transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-[#243332]">
                No. Digital Health Nurse provides career mentoring and practical
                guidance. It does not place candidates into roles, submit applications
                or guarantee interviews or employment.
              </p>
            </details>

            <details className="group border-b border-[#C8D8CF]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-[#174E4F] outline-none transition-colors hover:text-[#123E3F] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FDF0EA] [&::-webkit-details-marker]:hidden">
                <span>
                  Can we discuss my CV, LinkedIn profile or interview preparation?
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-[#D96F59] transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-[#243332]">
                Yes. These can be discussed during the Career Strategy Session where
                relevant to your goals. The session provides focused guidance rather
                than a complete CV-writing or recruitment service.
              </p>
            </details>

            <details className="group border-b border-[#C8D8CF]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-[#174E4F] outline-none transition-colors hover:text-[#123E3F] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FDF0EA] [&::-webkit-details-marker]:hidden">
                <span>How are sessions held?</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-[#D96F59] transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-[#243332]">
                Sessions take place online through Google Meet. Your booking
                confirmation will contain the meeting information and scheduled time.
              </p>
            </details>

            <details className="group border-b border-[#C8D8CF]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-[#174E4F] outline-none transition-colors hover:text-[#123E3F] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FDF0EA] [&::-webkit-details-marker]:hidden">
                <span>What is the cancellation and rescheduling policy?</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-[#D96F59] transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-[#243332]">
                The applicable cancellation, refund and rescheduling information is
                explained in the{" "}
                <Link
                  href="/booking-terms"
                  className="font-semibold text-[#174E4F] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#123E3F] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2"
                >
                  Booking Terms
                </Link>
                .
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#F7DED4] scroll-mt-20"
      >
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-[#174E4F]/10 sm:h-80 sm:w-80"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 md:py-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D96F59]">
            READY WHEN YOU ARE
          </p>
          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-bold tracking-tight text-[#174E4F] md:text-5xl">
            Ready to Explore Your Next Career Move?
          </h2>
          <p className="mx-auto mb-9 max-w-3xl text-lg leading-8 text-[#243332]">
            Choose a focused Career Strategy Session if you are ready to work through
            your options, or begin with a free introductory call if you are still
            deciding whether mentoring is right for you.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="https://cal.com/stacy-nyangere/career-strategy-session"
              target="_blank"
              rel="noopener noreferrer"
              className="scale-btn inline-flex min-h-12 items-center justify-center rounded-full bg-[#174E4F] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(23,78,79,0.18)] hover:bg-[#123E3F] hover:shadow-[0_14px_30px_rgba(23,78,79,0.24)]"
            >
              Book a Career Strategy Session
            </a>
            <a
              href="https://cal.com/stacy-nyangere/career-intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="scale-btn inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#174E4F] bg-[#FFF9F4]/70 px-8 py-4 text-base font-bold text-[#174E4F] hover:bg-[#FFF9F4]"
            >
              Book a Free Introductory Call
            </a>
          </div>

          <p className="mt-7 text-sm leading-6 text-[#516361]">
            Have another question?{" "}
            <a
              href="mailto:stacynyangere@gmail.com"
              className="font-semibold text-[#174E4F] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#123E3F] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2"
            >
              Email Stacy
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/snyangere"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#174E4F] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#123E3F] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2"
            >
              connect on LinkedIn
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
