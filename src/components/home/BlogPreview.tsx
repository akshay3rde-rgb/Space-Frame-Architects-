import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Article } from "@/types";

export default function BlogPreview({ articles }: { articles: Article[] }) {
  return (
    <section className="container-edit py-24 md:py-36">
      <div className="flex items-end justify-between mb-14 md:mb-20 gap-6">
        <Reveal>
          <p className="text-eyebrow text-xs text-charcoal/50 mb-4">05 &mdash; Field Notes</p>
          <h2 className="font-serif text-[10vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
            Recent writing
          </h2>
        </Reveal>
        <Link
          href="/blogs"
          className="hidden sm:block text-eyebrow text-xs border-b border-charcoal/40 pb-1 hover:border-charcoal whitespace-nowrap"
        >
          All articles
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-14">
        {articles.map((a, i) => (
          <BlogCard key={a.slug} article={a} priority={i === 0} />
        ))}
      </div>
    </section>
  );
}
