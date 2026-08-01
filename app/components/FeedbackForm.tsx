"use client";

import { FormEvent, useMemo, useState } from "react";

const STAR_OPTIONS = [1, 2, 3, 4, 5] as const;

const FEEDBACK_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyqcn4suMI1dCDIfslClegXDtqVOGcJeSeG57BOzL3AY0wfyjVMxjTEmx_do5dFvto_yg/exec";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const activeRating = hoverRating ?? rating;

  const ratingLabel = useMemo(() => {
    if (!rating) return "Select a rating from 1 to 5 stars";
    return `${rating} out of 5 stars selected`;
  }, [rating]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!rating) {
      setError("Please select a star rating before submitting.");
      return;
    }

    setError("");
    setSubmitting(true);

    try {
      // Google Apps Script often needs no-cors from browsers.
      // The row is still written even though the response is opaque.
      await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: name.trim(),
          comment: comment.trim(),
          rating,
        }),
      });

      setSent(true);
      setName("");
      setComment("");
      setRating(null);
    } catch {
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div
        className="rounded-3xl border border-[#C8D8CF] bg-white px-6 py-10 text-center shadow-[0_12px_32px_rgba(23,78,79,0.08)] sm:px-10"
        role="status"
      >
        <p className="text-2xl font-bold text-[#174E4F]">Thank you for your feedback</p>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-[#516361]">
          Your message has been saved. I appreciate you taking the time to share your
          experience.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="scale-btn mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#174E4F] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(23,78,79,0.18)] hover:bg-[#123E3F]"
        >
          Send another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#DDE9E2] bg-white p-7 shadow-[0_12px_32px_rgba(23,78,79,0.08)] sm:p-10"
    >
      <div className="space-y-7">
        <div>
          <label
            htmlFor="feedback-name"
            className="mb-2 block text-sm font-bold uppercase tracking-[0.12em] text-[#174E4F]"
          >
            Name
          </label>
          <input
            id="feedback-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="min-h-12 w-full rounded-2xl border border-[#C8D8CF] bg-[#FFFCF9] px-4 py-3 text-base text-[#243332] outline-none transition-[border-color,box-shadow] placeholder:text-[#516361]/70 focus:border-[#174E4F] focus:ring-2 focus:ring-[#D96F59]/35"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="feedback-comment"
            className="mb-2 block text-sm font-bold uppercase tracking-[0.12em] text-[#174E4F]"
          >
            Comment
          </label>
          <textarea
            id="feedback-comment"
            name="comment"
            required
            rows={6}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            className="w-full resize-y rounded-2xl border border-[#C8D8CF] bg-[#FFFCF9] px-4 py-3 text-base leading-7 text-[#243332] outline-none transition-[border-color,box-shadow] placeholder:text-[#516361]/70 focus:border-[#174E4F] focus:ring-2 focus:ring-[#D96F59]/35"
            placeholder="Share your experience or suggestions"
          />
        </div>

        <fieldset>
          <legend className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#174E4F]">
            Rating
          </legend>
          <p className="mb-4 text-sm leading-6 text-[#516361]" id="rating-help">
            {ratingLabel}
          </p>
          <div
            className="flex flex-wrap items-center gap-2"
            role="radiogroup"
            aria-labelledby="rating-help"
          >
            {STAR_OPTIONS.map((value) => {
              const selected = activeRating !== null && value <= activeRating;
              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={rating === value}
                  aria-label={`${value} star${value === 1 ? "" : "s"}`}
                  onMouseEnter={() => setHoverRating(value)}
                  onMouseLeave={() => setHoverRating(null)}
                  onFocus={() => setHoverRating(value)}
                  onBlur={() => setHoverRating(null)}
                  onClick={() => {
                    setRating(value);
                    setError("");
                  }}
                  className="rounded-xl p-1.5 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96F59] focus-visible:ring-offset-2"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={`h-9 w-9 ${
                      selected ? "fill-[#D96F59]" : "fill-[#DDE9E2]"
                    }`}
                  >
                    <path d="M10 1.5 12.6 7l6 .5-4.6 4 1.4 5.8L10 14.8 4.6 17.3 6 11.5 1.4 7.5l6-.5L10 1.5Z" />
                  </svg>
                </button>
              );
            })}
          </div>
          {error ? (
            <p className="mt-3 text-sm font-medium text-[#B42318]" role="alert">
              {error}
            </p>
          ) : null}
        </fieldset>

        <button
          type="submit"
          disabled={submitting}
          className="scale-btn inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#174E4F] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(23,78,79,0.18)] hover:bg-[#123E3F] hover:shadow-[0_14px_30px_rgba(23,78,79,0.24)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting ? "Submitting..." : "Submit Feedback"}
        </button>
      </div>
    </form>
  );
}
