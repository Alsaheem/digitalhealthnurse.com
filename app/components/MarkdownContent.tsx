import Link from "next/link";
import ReactMarkdown from "react-markdown";

type MarkdownContentProps = {
  content: string;
};

function isExternalHref(href?: string) {
  return Boolean(href && /^(https?:|mailto:|tel:)/i.test(href));
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      components={{
        a: ({ href = "", children }) => {
          if (isExternalHref(href)) {
            return (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          }

          return <Link href={href || "/"}>{children}</Link>;
        },
        img: ({ src, alt }) => {
          if (!src || typeof src !== "string") return null;

          return (
            // External and absolute image URLs are supported via standard img tags.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt || ""}
              loading="lazy"
              decoding="async"
              className="blog-image"
            />
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
