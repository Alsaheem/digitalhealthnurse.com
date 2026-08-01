import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Notice | Digital Health Nurse",
  description:
    "How Digital Health Nurse collects, uses, shares and retains personal information.",
};

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <main className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            ← Back to Digital Health Nurse
          </Link>

          <article className="mt-6 rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 md:p-12">
            <header className="border-b border-slate-200 pb-8 dark:border-slate-800">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
                Privacy Notice
              </h1>
              <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                Last updated: 30 July 2026
              </p>
            </header>

            <div className="mt-8 space-y-10 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <div className="space-y-4">
                <p>
                  This Privacy Notice explains how personal information is collected,
                  used, shared and retained when you contact Digital Health Nurse or
                  use its career-mentoring services.
                </p>
                <p>
                  For the purposes of UK data protection law,{" "}
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    Stacy Nyangere, operating Digital Health Nurse, is responsible for
                    the personal information described in this notice.
                  </strong>
                </p>
                <p>
                  If you have a question about this notice or how your personal
                  information is handled, please email{" "}
                  <a
                    href="mailto:stacy@digitalhealthnurse.com"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    stacy@digitalhealthnurse.com
                  </a>
                  .
                </p>
              </div>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  1. Information collected
                </h2>
                <p className="mb-4">
                  Depending on how you contact or use Digital Health Nurse, the
                  following information may be collected:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your telephone number, if you choose to provide it</li>
                  <li>Your current role and relevant career information</li>
                  <li>
                    Your career goals, challenges and answers submitted through
                    booking questions
                  </li>
                  <li>
                    A link to your LinkedIn profile, if you choose to provide one
                  </li>
                  <li>Details of bookings, rescheduling and cancellations</li>
                  <li>
                    Communications connected with an enquiry or mentoring session
                  </li>
                  <li>
                    Payment status, transaction references and records relating to
                    payments or refunds
                  </li>
                </ul>
                <p className="mt-4">
                  Payments are handled through Stripe. Digital Health Nurse may
                  receive confirmation that a payment has been made, refunded or
                  declined, together with limited transaction information needed to
                  manage the booking. Digital Health Nurse does not receive or store
                  your full payment-card details.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  2. How information is collected
                </h2>
                <p className="mb-4">Personal information may be collected:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Directly from you when you send an email</li>
                  <li>Through Cal.com booking forms</li>
                  <li>
                    During communications relating to an enquiry or mentoring
                    session
                  </li>
                  <li>
                    Through Stripe when you book and pay for a paid session
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  3. Why information is used and the lawful bases
                </h2>
                <p className="mb-4">Personal information may be used to:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Respond to your questions and enquiries</li>
                  <li>Arrange, prepare for and deliver mentoring sessions</li>
                  <li>Process or confirm payments</li>
                  <li>Manage cancellations, rescheduling and refunds</li>
                  <li>
                    Maintain financial, tax and business records where required by
                    law
                  </li>
                  <li>
                    Protect the website and services, maintain security and prevent
                    misuse
                  </li>
                </ul>
                <p className="mt-4">
                  UK data protection law requires a lawful reason for using personal
                  information. Depending on the circumstances, Digital Health Nurse
                  may rely on:
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Taking steps before entering into a contract or performing a
                      contract:
                    </strong>{" "}
                    for example, responding to a booking request, arranging a
                    session, providing the agreed service or managing payment and
                    cancellation matters.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Legal obligations:
                    </strong>{" "}
                    for example, retaining financial or transaction records required
                    for tax, accounting or legal purposes.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Legitimate interests:
                    </strong>{" "}
                    for example, responding to general enquiries, administering the
                    service, keeping appropriate business records, maintaining
                    security and preventing misuse. Personal information will only be
                    used in this way where those interests are not overridden by your
                    rights and interests.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Consent:
                    </strong>{" "}
                    where consent is specifically requested and is the appropriate
                    lawful basis. You may withdraw your consent at any time, although
                    this will not affect uses made before consent was withdrawn.
                  </li>
                </ul>
                <p className="mt-4">
                  Digital Health Nurse does not currently operate a marketing mailing
                  list.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  4. Sensitive and confidential information
                </h2>
                <p className="mb-4">Please do not provide:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Patient-identifiable information</li>
                  <li>Medical records</li>
                  <li>
                    Confidential information belonging to an employer, customer or
                    another organisation
                  </li>
                  <li>Passwords or payment-card details</li>
                  <li>
                    Special-category personal information, such as detailed
                    information about your health, ethnicity, religion, sexual
                    orientation or trade-union membership. The mentoring service does
                    not require this information.
                  </li>
                </ul>
                <p className="mt-4">
                  Career mentoring should focus on your own professional experience
                  and goals. Please remove or generalise information that could
                  identify a patient or reveal confidential information belonging to
                  another person or organisation.
                </p>
                <p className="mt-4">
                  If sensitive or confidential information is provided unnecessarily,
                  it may be deleted as soon as reasonably possible.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  5. Service providers
                </h2>
                <p className="mb-4">
                  Digital Health Nurse may use the following service providers:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Cal.com
                    </strong>{" "}
                    for scheduling appointments and collecting booking-form
                    information
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Stripe
                    </strong>{" "}
                    for processing payments
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Google Calendar and Google Meet
                    </strong>{" "}
                    for scheduling and conducting video sessions
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      The email provider
                    </strong>{" "}
                    used for communications
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      GitHub Pages
                    </strong>{" "}
                    for hosting the website
                  </li>
                </ul>
                <p className="mt-4">
                  These providers may process personal information as necessary to
                  provide their services. Their handling of information is also
                  governed by their own privacy notices and applicable terms.
                </p>
                <p className="mt-4">
                  Some providers may process or store information outside the United
                  Kingdom. Where this happens, information must be protected through
                  an applicable UK adequacy arrangement, appropriate contractual
                  safeguards or another transfer mechanism permitted under UK data
                  protection law.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  6. How long information is kept
                </h2>
                <p className="mb-4">
                  Personal information will normally be retained for the following
                  periods:
                </p>
                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      General enquiries that do not lead to a booking:
                    </strong>{" "}
                    up to 12 months
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Booking information, mentoring communications and
                      session-preparation information:
                    </strong>{" "}
                    up to 24 months after your final session
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Payment, refund and transaction records:
                    </strong>{" "}
                    up to 6 years where required for tax, accounting or legal
                    purposes
                  </li>
                </ul>
                <p className="mt-4">
                  Information may be retained for longer only where this is legally
                  required or reasonably necessary to establish, exercise or defend
                  legal rights or resolve a dispute.
                </p>
                <p className="mt-4">
                  When personal information is no longer required, it will be deleted
                  or securely disposed of where reasonably possible.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  7. Sharing personal information
                </h2>
                <p>Digital Health Nurse does not sell personal information.</p>
                <p className="mt-4">Personal information may be shared only:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    With service providers where necessary to arrange bookings,
                    process payments, communicate with you, conduct sessions or host
                    the website
                  </li>
                  <li>
                    With professional advisers, such as an accountant or legal
                    adviser, where reasonably necessary
                  </li>
                  <li>
                    With courts, regulators, law-enforcement bodies or other public
                    authorities where disclosure is legally required
                  </li>
                </ul>
                <p className="mt-4">
                  Only information reasonably necessary for the relevant purpose will
                  be shared.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  8. Your rights
                </h2>
                <p className="mb-4">
                  Depending on the circumstances, you may have the right to:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Ask for access to the personal information held about you
                  </li>
                  <li>
                    Ask for inaccurate or incomplete information to be corrected
                  </li>
                  <li>Ask for your information to be deleted</li>
                  <li>Ask for the use of your information to be restricted</li>
                  <li>Object to certain uses of your information</li>
                  <li>
                    Receive information you provided in a portable format where this
                    right applies
                  </li>
                  <li>
                    Withdraw consent where consent is being used as the lawful basis
                  </li>
                </ul>
                <p className="mt-4">
                  These rights are not absolute and may not apply in every situation.
                  For example, some information may need to be retained to meet a
                  legal obligation or deal with a dispute.
                </p>
                <p className="mt-4">
                  To make a request, email{" "}
                  <a
                    href="mailto:stacy@digitalhealthnurse.com"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    stacy@digitalhealthnurse.com
                  </a>
                  .
                </p>
                <p className="mt-4">
                  If you are concerned about how your personal information has been
                  handled, please contact Digital Health Nurse first so the concern
                  can be considered. You also have the right to complain to the
                  Information Commissioner&apos;s Office:
                </p>
                <p className="mt-4">
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    Information Commissioner&apos;s Office:
                  </strong>{" "}
                  <a
                    href="https://ico.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    https://ico.org.uk/
                  </a>
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  9. Automated decisions
                </h2>
                <p>
                  Digital Health Nurse does not use personal information to make
                  automated decisions about individuals.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  10. Age restriction
                </h2>
                <p>
                  Digital Health Nurse&apos;s career-mentoring service is intended
                  only for people aged 18 or over.
                </p>
                <p className="mt-4">
                  Please do not book a mentoring session or provide personal
                  information through the service if you are under 18.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  11. Third-party links
                </h2>
                <p>
                  The website and booking communications may contain links to
                  external services or websites, including Cal.com, Stripe and
                  LinkedIn.
                </p>
                <p className="mt-4">
                  Digital Health Nurse does not control and is not responsible for
                  the privacy practices, security or content of external websites.
                  You should review the privacy notice of each external service
                  before providing personal information to it.
                </p>
              </section>

              <section className="border-t border-slate-200 pt-8 dark:border-slate-800">
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Contact
                </h2>
                <p>
                  For questions, requests or concerns about this Privacy Notice or the
                  handling of your personal information, contact:
                </p>
                <address className="mt-4 not-italic">
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    Stacy Nyangere
                  </strong>
                  <br />
                  Digital Health Nurse
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:stacy@digitalhealthnurse.com"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    stacy@digitalhealthnurse.com
                  </a>
                </address>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
