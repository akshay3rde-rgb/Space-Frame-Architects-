import CitySelector from "@/components/city/CitySelector";
import { Reveal } from "@/components/ui/Reveal";
import type { CityContent } from "@/types";

export default function CitiesSection({ cities }: { cities: CityContent[] }) {
  return (
    <section className="container-edit py-24 md:py-36">
      <Reveal className="mb-14 md:mb-20 max-w-2xl">
        <p className="text-eyebrow text-xs text-charcoal/50 mb-4">03 &mdash; Where We Work</p>
        <h2 className="font-serif text-[10vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
          Five cities, one region.
        </h2>
      </Reveal>
      <CitySelector cities={cities} />
    </section>
  );
}
