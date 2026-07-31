import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

function parsePost(filename: string): BlogPost | null {
  const slug = filename.replace(/\.md$/i, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  if (data.draft === true) return null;

  const title = typeof data.title === "string" ? data.title.trim() : "";
  const date = typeof data.date === "string" ? data.date.trim() : "";
  const description =
    typeof data.description === "string" ? data.description.trim() : "";

  if (!title || !date) return null;

  return {
    slug,
    title,
    date,
    description,
    content: content.trim(),
  };
}

export function getAllPosts(): BlogPostMeta[] {
  ensureBlogDir();

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md")
    .map(parsePost)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ slug, title, date, description }) => ({
      slug,
      title,
      date,
      description,
    }));
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir();

  const filename = `${slug}.md`;
  const fullPath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(fullPath)) return null;

  return parsePost(filename);
}

export function formatPostDate(date: string): string {
  const parsed = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;

  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
