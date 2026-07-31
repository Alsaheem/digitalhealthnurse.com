import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { formatPostDate, getAllPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on nurse career change, digital health careers for nurses, transferable clinical skills and non-clinical healthcare pathways.",
  keywords: [
    "nurse career change",
    "digital health careers for nurses",
    "transferable skills for nurses",
    "nursing to digital health",
    "non-clinical nursing careers",
    "healthcare career transition",
  ],
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#FFF9F4] text-[#243332]">
      <SiteHeader homePrefix="/" />

      <main>
        <section className="border-b border-[#DDE9E2] bg-[linear-gradient(135deg,#FFF9F4_0%,#FFF9F4_55%,#F7DED4_100%)]">
          <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 md:py-20">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D96F59]">
              Blog
            </p>
            <h1 className="font-hero-serif max-w-3xl text-4xl font-bold leading-tight text-[#174E4F] md:text-5xl">
              Practical guidance for healthcare professionals exploring digital
              health careers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#516361]">
              Short, honest pieces on career transitions, transferable skills and
              roles beyond clinical practice.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-14 sm:px-8 md:py-16">
          {posts.length === 0 ? (
            <p className="rounded-3xl border border-[#DDE9E2] bg-white px-6 py-10 text-base leading-7 text-[#516361]">
              No posts yet. Add a markdown file to{" "}
              <code className="rounded bg-[#DDE9E2] px-1.5 py-0.5 text-sm text-[#174E4F]">
                content/blog
              </code>{" "}
              to publish your first article.
            </p>
          ) : (
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article className="lift-card rounded-3xl border border-[#DDE9E2] bg-white p-7 shadow-[0_10px_28px_rgba(23,78,79,0.07)] hover:border-[#B9D0C3] hover:shadow-[0_14px_34px_rgba(23,78,79,0.11)] sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D96F59]">
                      {formatPostDate(post.date)}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold leading-tight text-[#174E4F]">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="transition-colors hover:text-[#123E3F]"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.description ? (
                      <p className="mt-4 text-base leading-7 text-[#516361]">
                        {post.description}
                      </p>
                    ) : null}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex text-base font-semibold text-[#174E4F] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#123E3F]"
                    >
                      Read article
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
