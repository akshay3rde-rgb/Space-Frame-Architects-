import ArchImage from "@/components/ui/ArchImage";
import { Reveal } from "@/components/ui/Reveal";
import type { PhilosophyPillar } from "@/types";

const TONES = ["bg-sand", "bg-sage", "bg-dustyblue", "bg-clay", "bg-peach", "bg-sand"];

export default function PhilosophyGrid({ pillars }: { pillars: PhilosophyPillar[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pillars.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.06}>
          <div className={`relative aspect-square overflow-hidden ${TONES[i % TONES.length]}`}>
            <ArchImage
              image={p.image}
              className="opacity-95"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/25" />
            <span className="absolute top-5 left-5 font-serif text-3xl md:text-4xl text-offwhite">
              {p.title}
            </span>
          </div>
          <p className="text-charcoal/65 leading-relaxed mt-4 text-sm">{p.description}</p>
        </Reveal>
      ))}
    </div>
  );
}
