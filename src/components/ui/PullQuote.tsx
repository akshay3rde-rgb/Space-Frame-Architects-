import { RevealMask, Reveal } from "@/components/ui/Reveal";
import type { Testimonial } from "@/types";

export default function PullQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="container-edit py-10">
      <RevealMask>
        <p className="font-serif italic text-[7vw] sm:text-4xl md:text-5xl leading-[1.15] tracking-tight max-w-4xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </RevealMask>
      <Reveal delay={0.15}>
        <p className="text-eyebrow text-xs text-charcoal/50 mt-8">
          {testimonial.name} &mdash; {testimonial.role}
        </p>
      </Reveal>
    </div>
  );
}
