import { RevealLines, Reveal } from "@/components/ui/Reveal";
import type { Stat } from "@/types";

export default function StatsSection({ stats }: { stats: Stat[] }) {
  const [years, ...rest] = stats;

  return (
    <section className="bg-charcoal text-offwhite py-28 md:py-40 overflow-hidden">
      <div className="container-edit">
        <RevealLines
          lines={[years.value]}
          className="font-serif"
          lineClassName="text-[26vw] sm:text-[22vw] md:text-[24vw] leading-[0.78] tracking-tight"
        />
        <Reveal delay={0.3}>
          <p className="text-eyebrow text-sm md:text-base tracking-[0.3em] mt-2 md:-mt-4 opacity-70">
            {years.label}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-6 mt-24 md:mt-32">
          {rest.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="rule-light mb-6" />
              <p className="font-serif text-6xl md:text-7xl leading-none">{s.value}</p>
              <p className="text-eyebrow text-xs mt-4 opacity-60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
