import Link from "next/link";
import ArchImage from "@/components/ui/ArchImage";
import type { Article } from "@/types";
import { formatDate } from "@/lib/utils";

export default function BlogCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  return (
    <Link href={`/blogs/${article.slug}`} className="group block">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-sand">
        <ArchImage
          image={article.heroImage}
          zoom
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="pt-4">
        <p className="text-eyebrow text-[0.65rem] text-charcoal/50">
          {article.category} &middot; {formatDate(article.date)}
        </p>
        <h3 className="font-serif text-2xl md:text-[1.7rem] leading-tight mt-2 group-hover:opacity-60 transition-opacity">
          {article.title}
        </h3>
        <p className="text-eyebrow text-[0.65rem] text-charcoal/40 mt-3">{article.readTime}</p>
      </div>
    </Link>
  );
}
