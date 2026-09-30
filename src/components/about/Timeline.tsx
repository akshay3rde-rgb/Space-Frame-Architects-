import { Reveal } from "@/components/ui/Reveal";
import type { TimelineEntry } from "@/types";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div>
      {entries.map((e, i) => (
        <Reveal key={e.year} delay={i * 0.06} amount={0.4}>
          <div className="grid-edit py-8 md:py-10 border-t border-charcoal/10 last:border-b items-baseline">
            <span className="col-span-4 md:col-span-2 lg:col-span-2 font-serif text-3xl md:text-4xl text-charcoal/40">
              {e.year}
            </span>
            <span className="col-span-4 md:col-span-2 lg:col-span-3 text-eyebrow text-xs mt-2 md:mt-0">
              {e.title}
            </span>
            <p className="col-span-4 md:col-span-4 lg:col-span-7 text-charcoal/65 leading-relaxed mt-2 md:mt-0">
              {e.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
