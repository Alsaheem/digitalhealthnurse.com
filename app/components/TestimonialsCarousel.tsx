const testimonials = [
  {
    name: "Amira K.",
    role: "Registered Nurse exploring digital health",
    quote:
      "Stacy helped me see that my clinical experience was an asset, not something I needed to leave behind. I finally understood which roles were realistic for me.",
  },
  {
    name: "James O.",
    role: "Healthcare assistant transitioning careers",
    quote:
      "I had been applying for months with no replies. One session clarified how to talk about my transferable skills, and my applications started getting responses.",
  },
  {
    name: "Priya S.",
    role: "Ward sister considering health tech",
    quote:
      "The conversation felt calm and honest. No pressure, just clear guidance on where my experience fits outside traditional clinical practice.",
  },
  {
    name: "Daniel M.",
    role: "Allied health professional",
    quote:
      "I left with a practical action plan: roles to research, LinkedIn changes to make, and a clearer story for interviews. Exactly what I needed.",
  },
  {
    name: "Chloe R.",
    role: "Nurse specialist, early career change",
    quote:
      "It was reassuring to speak with someone who had already made the move. I felt understood for the first time in this process.",
  },
  {
    name: "Fatima H.",
    role: "Community nurse exploring informatics",
    quote:
      "Stacy translated unfamiliar job titles into something I could actually picture myself doing. That alone made the next steps feel possible.",
  },
];

function Stars() {
  return (
    <div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-[#D96F59]"
        >
          <path d="M10 1.5 12.6 7l6 .5-4.6 4 1.4 5.8L10 14.8 4.6 17.3 6 11.5 1.4 7.5l6-.5L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <article className="testimonial-card flex w-[min(88vw,20rem)] shrink-0 flex-col rounded-3xl border border-[#DDE9E2] bg-white p-6 shadow-[0_12px_32px_rgba(23,78,79,0.08)] sm:w-[24rem] sm:p-8">
      <Stars />
      <p className="mb-5 flex-1 text-[0.95rem] leading-7 text-[#243332] sm:mb-6 sm:text-base">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-base font-bold text-[#174E4F]">{name}</p>
        <p className="mt-1 text-sm leading-6 text-[#516361]">{role}</p>
      </div>
    </article>
  );
}

export default function TestimonialsCarousel() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section
      aria-label="What mentees say"
      className="overflow-hidden border-y border-[#C8D8CF] bg-[#FFFCF9] py-16 md:py-20"
    >
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center sm:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D96F59]">
          Testimonials
        </p>
        <h2 className="font-hero-serif text-[1.75rem] font-bold leading-tight text-[#174E4F] sm:text-4xl md:text-5xl">
          Guidance from someone who understands the journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#516361] sm:mt-5 sm:text-lg sm:leading-8">
          Reflections from healthcare professionals exploring careers beyond
          clinical practice.
        </p>
      </div>

      <div className="testimonial-marquee relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#FFFCF9] to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#FFFCF9] to-transparent sm:w-16" />

        <div className="testimonial-track flex w-max gap-5 px-5 sm:gap-6 sm:px-8">
          {loop.map((item, index) => (
            <TestimonialCard
              key={`${item.name}-${index}`}
              name={item.name}
              role={item.role}
              quote={item.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
