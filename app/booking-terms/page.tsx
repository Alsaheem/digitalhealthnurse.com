import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Booking Terms | Digital Health Nurse",
  description:
    "Terms covering Digital Health Nurse career mentoring bookings, payments, cancellations, rescheduling and customer responsibilities.",
};

export default function BookingTerms() {
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
                Booking Terms
              </h1>
              <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                Last updated: 30 July 2026
              </p>
            </header>

            <div className="mt-8 space-y-10 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              <div className="space-y-4">
                <p>
                  These Booking Terms are provided by{" "}
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    Stacy Nyangere, operating Digital Health Nurse
                  </strong>
                  .
                </p>
                <p>
                  If you have any questions about these terms, please email{" "}
                  <a
                    href="mailto:stacynyangere@gmail.com"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    stacynyangere@gmail.com
                  </a>
                  .
                </p>
              </div>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  1. About these terms
                </h2>
                <p>
                  These terms apply when you book a Digital Health Nurse
                  career-mentoring session.
                </p>
                <p className="mt-4">
                  By making a booking, you confirm that you have read and accepted
                  these terms. Please read them before completing your booking.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  2. Services
                </h2>
                <p className="mb-4">Digital Health Nurse currently offers:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Free Introductory Call:
                    </strong>{" "}
                    a brief introductory call lasting up to 20 minutes.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Career Strategy Session:
                    </strong>{" "}
                    a focused career-mentoring session lasting up to 45 minutes.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      Interview Readiness &amp; Mock Interviews:
                    </strong>{" "}
                    includes 2 AI practice interviews and 1 live 30-minute mock
                    interview session.
                  </li>
                </ul>
                <p className="mt-4">
                  Sessions normally take place online through Google Meet. Any
                  different arrangement will be agreed with you in advance.
                </p>
                <p className="mt-4">
                  Career mentoring provides practical guidance to help you consider
                  your experience, transferable skills, career options and possible
                  next steps.
                </p>
                <p className="mt-4">The service is not:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>A recruitment or employment-placement service</li>
                  <li>Legal or financial advice</li>
                  <li>Clinical or medical advice</li>
                  <li>
                    Therapy, counselling or another regulated therapeutic service
                  </li>
                </ul>
                <p className="mt-4">
                  No job, interview, promotion, salary increase or other career
                  outcome is promised or guaranteed.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  3. Eligibility
                </h2>
                <p>
                  You must be aged 18 or over to book or use the mentoring service.
                </p>
                <p className="mt-4">
                  You must provide complete and accurate information when making a
                  booking. Please let Digital Health Nurse know if relevant booking
                  information changes.
                </p>
                <p className="mt-4">
                  You must not provide patient-identifiable information or
                  confidential information belonging to an employer, customer or
                  other organisation.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  4. Price and payment
                </h2>
                <p>
                  The current price of a Career Strategy Session is{" "}
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    £30
                  </strong>
                  . The current price of the Interview Readiness &amp; Mock Interviews
                  package is{" "}
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    £50
                  </strong>
                  .
                </p>
                <p className="mt-4">
                  Payment must be made in full through Stripe when the session is
                  booked. Your paid booking is confirmed only after:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>The payment has been completed successfully; and</li>
                  <li>You have received a booking confirmation.</li>
                </ul>
                <p className="mt-4">
                  Digital Health Nurse does not receive or store your full
                  payment-card details. Stripe processes the payment and provides
                  limited payment-status and transaction information needed to
                  administer your booking.
                </p>
                <p className="mt-4">
                  Prices may change in the future. Any new price will apply only to
                  bookings made after the change and will be displayed before
                  payment. A price change will not alter the price of a booking that
                  has already been confirmed.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  5. Consumer cancellation rights
                </h2>
                <p>
                  If you are a UK consumer booking online, you will normally have a
                  statutory right to cancel the service contract within 14 days
                  without giving a reason. The cancellation period normally begins on
                  the day after the contract is entered into.
                </p>
                <p className="mt-4">
                  If you book a session that is scheduled to take place before the end
                  of this 14-day period, Digital Health Nurse must receive your express
                  request for the service to begin during the cancellation period. You
                  will be asked to make this request as part of the booking process.
                </p>
                <p className="mt-4">The following rules may apply:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    If you cancel before any part of the service has been supplied,
                    your statutory cancellation rights may entitle you to a full
                    refund.
                  </li>
                  <li>
                    If you expressly requested that the service begin during the
                    cancellation period and part of the service has already been
                    supplied when you cancel, you may be required to pay a
                    proportionate amount for the part supplied.
                  </li>
                  <li>
                    If the service has been fully performed during the cancellation
                    period after your express request, and you acknowledged in advance
                    that you would lose your cancellation right once the service had
                    been fully performed, your statutory right to cancel may end.
                  </li>
                  <li>
                    Booking a session does not, by itself, mean that you automatically
                    waive every cancellation right.
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise a statutory cancellation right, email{" "}
                  <a
                    href="mailto:stacynyangere@gmail.com"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    stacynyangere@gmail.com
                  </a>{" "}
                  and clearly state that you wish to cancel. You may use any clear
                  written statement; no particular wording is required.
                </p>
                <p className="mt-4">
                  Nothing in these terms limits or removes any statutory consumer
                  rights you may have.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  6. Standard cancellation and refund policy
                </h2>
                <p className="mb-4">
                  In addition to any statutory rights that apply:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    If you cancel at least one full business day before the scheduled
                    start time, you will normally receive a full refund.
                  </li>
                  <li>
                    A business day means Monday to Friday, excluding public holidays
                    in England.
                  </li>
                  <li>
                    Cancellations made with less than one full business day&apos;s
                    notice are normally non-refundable because the reserved
                    appointment time may not be filled.
                  </li>
                  <li>
                    If you do not attend your session, the booking is normally
                    non-refundable.
                  </li>
                  <li>This policy does not override your statutory rights.</li>
                </ul>
                <p className="mt-4">
                  For example, cancellation of a session scheduled for Monday would
                  normally need to be received by the corresponding start time on the
                  preceding Friday, unless that Friday is a public holiday in England.
                </p>
                <p className="mt-4">
                  Approved refunds will normally be returned to the original payment
                  method. Banking and payment-processing times may affect when the
                  refunded amount appears in your account.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  7. Rescheduling and lateness
                </h2>
                <p>
                  You may reschedule a booking once without charge if you provide at
                  least one full business day&apos;s notice before the scheduled start
                  time.
                </p>
                <p className="mt-4">
                  Requests made with less notice will be considered at Stacy&apos;s
                  discretion. A new appointment is not confirmed until you receive
                  confirmation of the replacement time.
                </p>
                <p className="mt-4">
                  If you arrive late, the session will still finish at its originally
                  scheduled end time. The session cannot normally be extended because
                  another commitment may follow it.
                </p>
                <p className="mt-4">
                  If you have not joined the session within 15 minutes of its
                  scheduled start time and have not contacted Stacy, the booking may
                  be treated as a no-show. The standard cancellation and refund policy
                  will then apply.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  8. Cancellation by Digital Health Nurse
                </h2>
                <p>
                  If Stacy needs to cancel a paid session, you will be offered either:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>A suitable alternative appointment; or</li>
                  <li>A full refund of the session fee.</li>
                </ul>
                <p className="mt-4">
                  Digital Health Nurse will not be responsible for indirect or
                  additional costs arising from a cancellation, such as lost working
                  time, travel expenses or other arrangements you have made, except
                  where responsibility cannot legally be excluded or limited.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  9. Customer responsibilities and conduct
                </h2>
                <p className="mb-4">When attending a session, you must:</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Join from a suitable and reasonably private location</li>
                  <li>
                    Have a reliable internet connection and a compatible device
                  </li>
                  <li>Treat Stacy and anyone else involved respectfully</li>
                  <li>Use the service lawfully</li>
                  <li>
                    Avoid sharing confidential information belonging to patients,
                    employers, customers or other organisations
                  </li>
                </ul>
                <p className="mt-4">
                  You are responsible for checking that Google Meet works on your
                  device before the session begins.
                </p>
                <p className="mt-4">
                  Abusive, discriminatory, threatening or otherwise inappropriate
                  behaviour may result in the session being ended. In those
                  circumstances, a refund will not normally be provided, subject
                  always to your statutory rights.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  10. Confidentiality and session records
                </h2>
                <p>
                  Career discussions will be treated respectfully and kept private as
                  far as reasonably possible.
                </p>
                <p className="mt-4">
                  Information may still be disclosed where:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Disclosure is required by law; or</li>
                  <li>
                    Disclosure is reasonably necessary to protect someone from a
                    serious risk of harm.
                  </li>
                </ul>
                <p className="mt-4">
                  You must not share patient-identifiable information or confidential
                  information belonging to an employer, customer or another
                  organisation during a session or in any booking information.
                </p>
                <p className="mt-4">
                  Neither you nor Digital Health Nurse may record a session in audio,
                  video or another format without the other party&apos;s prior
                  agreement.
                </p>
                <p className="mt-4">
                  Personal information is handled in accordance with the{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    Privacy Notice
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  11. Materials and personal use
                </h2>
                <p>
                  Any worksheets, plans, templates, notes or other written materials
                  supplied by Digital Health Nurse are provided for your personal use.
                </p>
                <p className="mt-4">
                  You must not sell, publish, license or commercially redistribute
                  those materials without prior written permission from Digital
                  Health Nurse.
                </p>
                <p className="mt-4">
                  You retain ownership of your own CV, LinkedIn content and other
                  documents that you create or provide. Providing a document for
                  discussion during mentoring does not transfer its ownership to
                  Digital Health Nurse.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  12. Liability and statutory rights
                </h2>
                <p>
                  Digital Health Nurse will provide the mentoring service with
                  reasonable care and skill.
                </p>
                <p className="mt-4">You remain responsible for:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    The accuracy and honesty of your CV, applications, profiles and
                    statements
                  </li>
                  <li>Deciding whether to apply for or accept a role</li>
                  <li>Checking the suitability of any career option</li>
                  <li>Your professional, financial and personal decisions</li>
                  <li>Any actions you take following a session</li>
                </ul>
                <p className="mt-4">
                  Digital Health Nurse is not responsible for a particular
                  employer&apos;s recruitment decisions or for outcomes that depend on
                  circumstances outside its reasonable control.
                </p>
                <p className="mt-4">
                  Nothing in these terms excludes or limits liability for:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Death or personal injury caused by negligence</li>
                  <li>Fraud or fraudulent misrepresentation</li>
                  <li>Breach of any statutory consumer right</li>
                  <li>
                    Any other matter for which liability cannot legally be excluded
                    or limited
                  </li>
                </ul>
                <p className="mt-4">
                  Nothing in these terms affects your right to receive services
                  performed with reasonable care and skill or any other mandatory
                  rights available under consumer law.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  13. Complaints
                </h2>
                <p>
                  If you are unhappy with the service or have a concern about your
                  booking, please email{" "}
                  <a
                    href="mailto:stacynyangere@gmail.com"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    stacynyangere@gmail.com
                  </a>
                  .
                </p>
                <p className="mt-4">
                  Please explain what happened and how you would like the matter to be
                  addressed. Your concern will be considered reasonably and as
                  promptly as possible.
                </p>
                <p className="mt-4">
                  Making a complaint does not affect any statutory rights you may
                  have.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  14. Changes to these terms
                </h2>
                <p>
                  These terms may be updated when the service, booking process or
                  legal requirements change.
                </p>
                <p className="mt-4">
                  Revised terms will apply to future bookings made after the revised
                  version is published or otherwise provided to customers.
                </p>
                <p className="mt-4">
                  A revision will not retrospectively change the terms of an already
                  confirmed booking unless:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    You and Digital Health Nurse agree to the change; or
                  </li>
                  <li>A change is required by law.</li>
                </ul>
                <p className="mt-4">
                  The date at the top of this page shows when the terms were last
                  updated.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  15. Governing law
                </h2>
                <p>These terms are governed by the laws of England and Wales.</p>
                <p className="mt-4">
                  If you live elsewhere in the United Kingdom or another country, you
                  retain any mandatory consumer protections that apply to you where
                  you live. Nothing in these terms removes any right you may have to
                  bring a claim in a court that has jurisdiction under applicable
                  consumer law.
                </p>
              </section>

              <section className="border-t border-slate-200 pt-8 dark:border-slate-800">
                <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Contact
                </h2>
                <address className="not-italic">
                  <strong className="font-semibold text-slate-900 dark:text-slate-100">
                    Stacy Nyangere
                  </strong>
                  <br />
                  Digital Health Nurse
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:stacynyangere@gmail.com"
                    className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-700 dark:text-slate-100 dark:decoration-slate-600 dark:hover:decoration-slate-300"
                  >
                    stacynyangere@gmail.com
                  </a>
                </address>
                <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
                  These Booking Terms provide general business information. They do
                  not claim or guarantee that the service, booking process or these
                  terms comply with every legal requirement that may apply.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
