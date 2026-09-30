import Link from "next/link";
import ArchImage from "@/components/ui/ArchImage";
import { Reveal } from "@/components/ui/Reveal";
import type { Article } from "@/types";
import { formatDate } from "@/lib/utils";

export default function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Link href={`/blogs/${article.slug}`} className="group block">
      <div className="grid-edit items-center">
        <Reveal className="col-span-4 md:col-span-5 lg:col-span-7 order-2 md:order-1 mt-6 md:mt-0">
          <p className="text-eyebrow text-xs text-charcoal/50">
            {article.category} &middot; {article.readTime} &middot; {formatDate(article.date)}
          </p>
          <h2 className="font-serif text-[9vw] sm:text-5xl md:text-6xl leading-[1.02] tracking-tight mt-4 group-hover:opacity-60 transition-opacity">
            {article.title}
          </h2>
          <p className="text-charcoal/65 leading-relaxed mt-6 max-w-lg">{article.excerpt}</p>
          <span className="inline-block text-eyebrow text-xs border-b border-charcoal/40 pb-1 mt-8">
            Read the article
          </span>
        </Reveal>
        <Reveal delay={0.1} className="col-span-4 md:col-span-3 lg:col-span-5 order-1 md:order-2">
          <div className="relative w-full aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-sand">
            <ArchImage image={article.heroImage} zoom priority />
          </div>
        </Reveal>
      </div>
    </Link>
  );
}
