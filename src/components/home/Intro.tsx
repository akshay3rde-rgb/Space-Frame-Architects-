import { RevealMask } from "@/components/ui/Reveal";
import { Reveal } from "@/components/ui/Reveal";

export default function Intro() {
  return (
    <section className="container-edit py-24 md:py-36">
      <div className="grid-edit">
        <div className="col-span-4 md:col-span-2 lg:col-span-3">
          <Reveal>
            <p className="text-eyebrow text-xs text-charcoal/50">01 &mdash; Studio</p>
          </Reveal>
        </div>
        <div className="col-span-4 md:col-span-6 lg:col-span-9">
          <RevealMask>
            <p className="font-serif text-[9vw] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Twenty-five years of designing places that respond to people,
              <span className="italic"> climate</span>, culture and context.
            </p>
          </RevealMask>
          <Reveal delay={0.15} className="mt-10 md:mt-14 max-w-xl">
            <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">
              SpaceFrame works in the space between a plan and the life it holds &mdash; from
              courtyard houses in Indore to institutions in Shivpuri. Every project starts on
              site, in the weather, with the people who will use it.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
