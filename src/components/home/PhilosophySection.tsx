import ArchImage from "@/components/ui/ArchImage";
import { Reveal, RevealMask } from "@/components/ui/Reveal";
import type { PhilosophyPillar } from "@/types";
import { cn } from "@/lib/utils";

export default function PhilosophySection({ pillars }: { pillars: PhilosophyPillar[] }) {
  return (
    <section className="py-24 md:py-36">
      <div className="container-edit mb-14 md:mb-20">
        <Reveal className="max-w-2xl">
          <p className="text-eyebrow text-xs text-charcoal/50 mb-4">04 &mdash; Design Philosophy</p>
          <h2 className="font-serif text-[10vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
            What holds a building together.
          </h2>
        </Reveal>
      </div>

      <div>
        {pillars.map((p, i) => (
          <div key={p.title} className="border-t border-charcoal/10 last:border-b">
            <div className="container-edit py-10 md:py-14 grid-edit items-center">
              <div
                className={cn(
                  "col-span-4 md:col-span-3 lg:col-span-4",
                  i % 2 === 1 && "md:order-2"
                )}
              >
                <RevealMask>
                  <span className="font-serif text-[16vw] md:text-[6vw] leading-[0.9] tracking-tight block">
                    {p.title}
                  </span>
                </RevealMask>
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-4 mt-4 md:mt-0">
                <Reveal delay={0.1}>
                  <p className="text-charcoal/65 leading-relaxed">{p.description}</p>
                </Reveal>
              </div>
              <div
                className={cn(
                  "col-span-4 md:col-span-3 lg:col-span-4 mt-6 md:mt-0",
                  i % 2 === 1 && "md:order-1"
                )}
              >
                <Reveal delay={0.15} className="relative w-full aspect-[5/3] overflow-hidden bg-sand">
                  <ArchImage image={p.image} />
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
