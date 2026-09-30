import { Reveal } from "@/components/ui/Reveal";

export default function ApproachProcess({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <div>
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.05} amount={0.4}>
          <div className="grid-edit py-7 md:py-9 border-t border-charcoal/10 last:border-b items-center group">
            <span className="col-span-1 md:col-span-1 lg:col-span-1 text-eyebrow text-xs text-charcoal/35">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="col-span-3 md:col-span-2 lg:col-span-3 font-serif text-3xl md:text-5xl transition-[padding] duration-500 group-hover:pl-3">
              {step.title}
            </span>
            <p className="col-span-4 md:col-span-5 lg:col-span-8 text-charcoal/60 leading-relaxed mt-2 md:mt-0">
              {step.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
