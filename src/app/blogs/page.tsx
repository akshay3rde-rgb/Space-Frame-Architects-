import type { Metadata } from "next";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import BlogCard from "@/components/blog/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { articles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Thoughts on architecture, cities, materials, climate and the spaces between them — from SpaceFrame Architects, Indore.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Field Notes | SpaceFrame Architects",
    description:
      "Thoughts on architecture, cities, materials, climate and the spaces between them.",
    url: "/blogs",
  },
};

export default function BlogsPage() {
  const sorted = [...articles].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const [featured, ...rest] = sorted;

  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container-edit mb-16 md:mb-24">
        <Reveal>
          <h1 className="font-serif text-[13vw] sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Field Notes
          </h1>
          <p className="max-w-xl text-charcoal/60 text-base md:text-lg mt-6 leading-relaxed">
            Thoughts on architecture, cities, materials, climate and the spaces between them.
          </p>
        </Reveal>
      </div>

      <div className="container-edit mb-24 md:mb-36">
        <FeaturedArticle article={featured} />
      </div>

      <div className="container-edit">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {rest.map((a, i) => (
            <BlogCard key={a.slug} article={a} priority={i < 2} />
          ))}
        </div>
      </div>
    </div>
  );
}
