import type { Metadata } from "next";
import CitySelector from "@/components/city/CitySelector";
import CityListGrid from "@/components/city/CityListGrid";
import { Reveal } from "@/components/ui/Reveal";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "Cities",
  description:
    "SpaceFrame Architects works across Indore, Ujjain, Bhopal, Guna and Shivpuri — architecture shaped by place, climate, culture and context in Madhya Pradesh.",
  alternates: { canonical: "/cities" },
  openGraph: {
    title: "Architecture Across Madhya Pradesh | SpaceFrame Architects",
    description: "Architecture shaped by place, climate, culture and context.",
    url: "/cities",
  },
};

export default function CitiesPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container-edit mb-14 md:mb-20">
        <Reveal>
          <h1 className="font-serif text-[12vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl">
            Rooted in Madhya Pradesh.
          </h1>
          <p className="max-w-xl text-charcoal/60 text-base md:text-lg mt-6 leading-relaxed">
            Architecture shaped by place, climate, culture and context.
          </p>
        </Reveal>
      </div>

      <div className="container-edit mb-24 md:mb-36">
        <CitySelector cities={cities} />
      </div>

      <div className="container-edit">
        <CityListGrid cities={cities} />
      </div>
    </div>
  );
}
