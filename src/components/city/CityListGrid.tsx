import Link from "next/link";
import ArchImage from "@/components/ui/ArchImage";
import { Reveal } from "@/components/ui/Reveal";
import type { CityContent } from "@/types";

export default function CityListGrid({ cities }: { cities: CityContent[] }) {
  return (
    <div className="grid-edit gap-y-14">
      {cities.map((c, i) => (
        <Reveal
          key={c.slug}
          delay={(i % 3) * 0.08}
          className="col-span-4 md:col-span-4 lg:col-span-4"
        >
          <Link href={`/cities/${c.slug}`} className="group block">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <ArchImage
                image={c.heroImage}
                zoom
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <div className="pt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-3xl leading-tight group-hover:opacity-60 transition-opacity">
                  {c.name}
                </h3>
                <p className="text-eyebrow text-[0.65rem] text-charcoal/50 mt-2">{c.state}</p>
              </div>
              <span className="text-eyebrow text-[0.65rem] text-charcoal/50 whitespace-nowrap mt-1">
                {c.stats[0]?.value} {c.stats[0]?.label}
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
