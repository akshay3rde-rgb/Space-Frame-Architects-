import type { Stat } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

export default function StatBlock({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <p className="font-serif text-[15vw] sm:text-7xl md:text-8xl leading-[0.85] tracking-tight">
            {s.value}
          </p>
          <p className="text-eyebrow text-[0.65rem] md:text-xs mt-3 md:mt-4 opacity-60">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
