import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchImage from "@/components/ui/ArchImage";
import ProjectGrid from "@/components/project/ProjectGrid";
import MagneticButton from "@/components/ui/MagneticButton";
import { Reveal, RevealMask } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbSchema } from "@/lib/structured-data";
import { cities } from "@/data/cities";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: `Architects in ${city.name}`,
    description: city.editorial,
    alternates: { canonical: `/cities/${city.slug}` },
    openGraph: {
      title: `SpaceFrame Architects in ${city.name}`,
      description: city.editorial,
      url: `/cities/${city.slug}`,
      images: [{ url: city.heroImage.src }],
    },
  };
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const cityProjects = projects.filter((p) => p.city === city.name);

  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Cities", path: "/cities" },
          { name: city.name, path: `/cities/${city.slug}` },
        ])}
      />

      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden bg-charcoal">
        <ArchImage image={city.heroImage} priority className="opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/35" />
        <div className="relative h-full container-edit flex items-end pb-14 md:pb-20 pt-28 text-offwhite">
          <div>
            <p className="text-eyebrow text-xs opacity-75 mb-5">{city.state}, India</p>
            <h1 className="font-serif text-[14vw] md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
              {city.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="container-edit py-20 md:py-32">
        <div className="grid-edit">
          <div className="col-span-4 md:col-span-2 lg:col-span-3">
            <Reveal>
              <p className="text-eyebrow text-xs text-charcoal/50">Sense of Place</p>
            </Reveal>
          </div>
          <div className="col-span-4 md:col-span-6 lg:col-span-9">
            <RevealMask>
              <p className="font-serif text-[7vw] sm:text-3xl md:text-4xl leading-[1.25] tracking-tight text-charcoal/90">
                {city.editorial}
              </p>
            </RevealMask>
            <Reveal delay={0.15} className="mt-10 max-w-2xl">
              <p className="text-charcoal/65 leading-relaxed">{city.approach}</p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 md:mt-28">
          {city.stats.map((s) => (
            <div key={s.label} className="border-t border-charcoal/10 pt-4">
              <p className="font-serif text-4xl md:text-5xl">{s.value}</p>
              <p className="text-eyebrow text-[0.65rem] text-charcoal/50 mt-2">{s.label}</p>
            </div>
          ))}
          {city.categories.map((cat) => (
            <div key={cat} className="border-t border-charcoal/10 pt-4">
              <p className="font-serif text-lg md:text-xl">{cat}</p>
              <p className="text-eyebrow text-[0.65rem] text-charcoal/50 mt-2">Typology</p>
            </div>
          ))}
        </div>
      </section>

      {cityProjects.length > 0 && (
        <section className="container-edit pb-24 md:pb-36 border-t border-charcoal/10 pt-20 md:pt-32">
          <div className="flex items-end justify-between mb-14 md:mb-20 gap-6">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Projects in {city.name}
            </h2>
          </div>
          <ProjectGrid projects={cityProjects} />
        </section>
      )}

      <section className="bg-charcoal text-offwhite py-24 md:py-32">
        <div className="container-edit flex flex-col items-start gap-8">
          <p className="font-serif text-4xl md:text-5xl max-w-xl leading-tight">
            Starting a project in {city.name}?
          </p>
          <MagneticButton href="/contact" variant="light">
            Start a Conversation
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
