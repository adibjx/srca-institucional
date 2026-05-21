import Image from "next/image";
import Link from "next/link";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

export const mdxOptions: NonNullable<MDXRemoteProps["options"]> = {
  parseFrontmatter: false,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["heading-anchor"] },
        },
      ],
    ],
  },
};

function isExternal(href?: string) {
  if (!href) return false;
  return /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

export const mdxComponents: MDXRemoteProps["components"] = {
  a: ({ href, children, ...rest }) => {
    if (isExternal(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-700 underline decoration-accent-500/50 underline-offset-4 transition-colors hover:text-accent-600 hover:decoration-accent-500"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-primary-700 underline decoration-accent-500/50 underline-offset-4 transition-colors hover:text-accent-600 hover:decoration-accent-500"
        {...(rest as any)}
      >
        {children}
      </Link>
    );
  },
  img: (props: any) => {
    const { src, alt, title } = props;
    if (!src) return null;
    return (
      <figure className="my-8">
        <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-cream-100">
          <Image
            src={src}
            alt={alt || ""}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
          />
        </div>
        {title ? (
          <figcaption className="mt-3 text-center text-sm italic text-gray-500">
            {title}
          </figcaption>
        ) : null}
      </figure>
    );
  },
  table: (props: any) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
};
