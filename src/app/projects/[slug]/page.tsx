import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ArchImage from "@/components/ui/ArchImage";
import EditorialCarousel from "@/components/carousel/EditorialCarousel";
import RelatedProjects from "@/components/project/RelatedProjects";
import { Reveal, RevealMask } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbSchema } from "@/lib/structured-data";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | ${project.location}`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} — SpaceFrame Architects`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.heroImage.src }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && (p.category === project.category || p.city === project.city))
    .slice(0, 3);

  const meta = [
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
    { label: "Area", value: project.area },
    { label: "Category", value: project.category },
    { label: "Status", value: project.status },
  ];

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ])}
      />

      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden bg-charcoal">
        <ArchImage image={project.heroImage} priority className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <div className="relative h-full container-edit flex flex-col justify-end pb-12 md:pb-16 pt-28 text-offwhite">
          <p className="text-eyebrow text-xs opacity-75 mb-4">
            {project.category} &middot; {project.city}
          </p>
          <h1 className="font-serif text-[11vw] md:text-7xl lg:text-8xl leading-[0.92] tracking-tight max-w-4xl">
            {project.name}
          </h1>
        </div>
      </section>

      <section className="container-edit py-12 md:py-16 border-b border-charcoal/10">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8 gap-x-4">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-eyebrow text-[0.65rem] text-charcoal/45">{m.label}</p>
              <p className="mt-2 text-base md:text-lg">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-edit py-20 md:py-32">
        <div className="grid-edit">
          <div className="col-span-4 md:col-span-2 lg:col-span-3">
            <Reveal>
              <p className="text-eyebrow text-xs text-charcoal/50">Brief</p>
            </Reveal>
          </div>
          <div className="col-span-4 md:col-span-6 lg:col-span-9 space-y-6">
            {project.brief.map((para, i) => (
              <RevealMask key={i} delay={i * 0.05}>
                <p className="font-serif text-2xl md:text-3xl leading-snug text-charcoal/90">{para}</p>
              </RevealMask>
            ))}
          </div>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="container-edit pb-20 md:pb-32">
          <EditorialCarousel images={project.gallery} />
        </section>
      )}

      <section className="container-edit py-20 md:py-32 border-t border-charcoal/10">
        <div className="grid-edit gap-y-14">
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <p className="text-eyebrow text-xs text-charcoal/50 mb-6">Approach</p>
            <div className="space-y-5">
              {project.approach.map((para, i) => (
                <p key={i} className="text-charcoal/70 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <p className="text-eyebrow text-xs text-charcoal/50 mb-6">Materials</p>
            <ul className="space-y-3">
              {project.materials.map((m) => (
                <li key={m} className="text-charcoal/70 border-t border-charcoal/10 pt-3 first:border-t-0 first:pt-0">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <p className="text-eyebrow text-xs text-charcoal/50 mb-6">Credits</p>
            <ul className="space-y-3">
              {project.credits.map((c) => (
                <li key={c.role} className="border-t border-charcoal/10 pt-3 first:border-t-0 first:pt-0">
                  <p className="text-eyebrow text-[0.6rem] text-charcoal/45">{c.role}</p>
                  <p className="text-charcoal/80 mt-0.5">{c.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <RelatedProjects projects={related} />

      <section className="container-edit pb-24 md:pb-32">
        <Link
          href="/projects"
          className="text-eyebrow text-xs border-b border-charcoal/40 pb-1 hover:border-charcoal"
        >
          ← Back to all projects
        </Link>
      </section>
    </div>
  );
}
