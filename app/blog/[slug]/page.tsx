import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownContent from "../../components/MarkdownContent";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { formatPostDate, getAllPosts, getPostBySlug } from "../../../lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found | Digital Health Nurse" };
  }

  return {
    title: `${post.title} | Digital Health Nurse`,
    description: post.description || post.title,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#FFF9F4] text-[#243332]">
      <SiteHeader homePrefix="/" />

      <main className="mx-auto max-w-3xl px-6 py-14 sm:px-8 md:py-20">
        <Link
          href="/blog"
          className="inline-flex text-sm font-semibold text-[#174E4F] underline decoration-[#D96F59] decoration-2 underline-offset-4 transition-colors hover:text-[#123E3F]"
        >
          ← Back to Blog
        </Link>

        <article className="mt-8">
          <header className="border-b border-[#DDE9E2] pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#D96F59]">
              {formatPostDate(post.date)}
            </p>
            <h1 className="font-hero-serif mt-4 text-4xl font-bold leading-tight text-[#174E4F] md:text-5xl">
              {post.title}
            </h1>
            {post.description ? (
              <p className="mt-5 text-lg leading-8 text-[#516361]">
                {post.description}
              </p>
            ) : null}
          </header>

          <div className="blog-prose mt-10">
            <MarkdownContent content={post.content} />
          </div>
        </article>

        <div className="mt-14 rounded-3xl border border-[#DDE9E2] bg-[#DDE9E2]/45 px-6 py-8 text-center sm:px-8">
          <p className="text-lg font-semibold text-[#174E4F]">
            Ready to explore your own next step?
          </p>
          <p className="mt-3 text-base leading-7 text-[#516361]">
            Book a mentoring session for practical, personalised guidance on
            digital health and non-clinical career options.
          </p>
          <a
            href="/#mentoring"
            className="scale-btn mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#174E4F] px-8 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(23,78,79,0.18)] hover:bg-[#123E3F]"
          >
            View Mentoring Options
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
