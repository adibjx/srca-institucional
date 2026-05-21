import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents, mdxOptions } from "@/lib/mdx";

export function ArticleContent({ source }: { source: string }) {
  return (
    <div className="prose prose-srca max-w-none">
      <MDXRemote source={source} components={mdxComponents} options={mdxOptions} />
    </div>
  );
}
