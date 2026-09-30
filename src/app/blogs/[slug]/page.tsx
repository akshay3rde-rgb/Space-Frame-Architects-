import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ArchImage from "@/components/ui/ArchImage";
import EditorialCarousel from "@/components/carousel/EditorialCarousel";
import BlogCard from "@/components/blog/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import { articles } from "@/data/blog";
import { projects } from "@/data/projects";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blogs/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/blogs/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.heroImage.src }],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedProjects = (article.relatedProjectSlugs ?? [])
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const galleryImages = relatedProjects[0]?.gallery.slice(0, 6) ?? [];

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          date: article.date,
          author: article.author,
          path: `/blogs/${article.slug}`,
          image: article.heroImage.src,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Field Notes", path: "/blogs" },
          { name: article.title, path: `/blogs/${article.slug}` },
        ])}
      />

      <header className="pt-32 md:pt-40 pb-12 md:pb-16 container-edit">
        <Reveal className="max-w-3xl">
          <p className="text-eyebrow text-xs text-charcoal/50">
            {article.category} &middot; {formatDate(article.date)} &middot; {article.readTime}
          </p>
          <h1 className="font-serif text-[10vw] sm:text-6xl md:text-7xl leading-[0.98] tracking-tight mt-5">
            {article.title}
          </h1>
          <p className="text-eyebrow text-xs text-charcoal/50 mt-6">By {article.author}</p>
        </Reveal>
      </header>

      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-sand">
        <ArchImage image={article.heroImage} priority />
      </div>

      <div className="container-edit py-16 md:py-24">
        <div className="grid-edit">
          <div className="col-span-4 md:col-span-1 lg:col-span-2" />
          <div className="col-span-4 md:col-span-6 lg:col-span-7 space-y-7">
            {article.body.map((para, i) =>
              para.startsWith("> ") ? (
                <blockquote
                  key={i}
                  className="font-serif italic text-2xl md:text-3xl leading-snug border-l-2 border-charcoal/30 pl-6 my-10 text-charcoal/85"
                >
                  {para.slice(2)}
                </blockquote>
              ) : (
                <p key={i} className="text-charcoal/75 text-base md:text-lg leading-relaxed">
                  {para}
                </p>
              )
            )}
          </div>
        </div>
      </div>

      {galleryImages.length > 1 && (
        <div className="container-edit pb-20 md:pb-28">
          <p className="text-eyebrow text-xs text-charcoal/50 mb-6">From the field</p>
          <EditorialCarousel images={galleryImages} />
        </div>
      )}

      {relatedProjects.length > 0 && (
        <div className="container-edit pb-20 md:pb-28">
          <p className="text-eyebrow text-xs text-charcoal/50 mb-6">Related project</p>
          <div className="flex flex-wrap gap-3">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="text-eyebrow text-xs border border-charcoal/25 rounded-full px-4 py-2 hover:border-charcoal transition-colors"
              >
                {p.name} — {p.location}
              </Link>
            ))}
          </div>
        </div>
      )}

      <section className="container-edit py-20 md:py-28 border-t border-charcoal/10">
        <p className="text-eyebrow text-xs text-charcoal/50 mb-10">More field notes</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-14">
          {related.map((a) => (
            <BlogCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </article>
  );
}
