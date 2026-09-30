import type { Metadata } from "next";
import ArchImage from "@/components/ui/ArchImage";
import Timeline from "@/components/about/Timeline";
import PhilosophyGrid from "@/components/about/PhilosophyGrid";
import TeamGrid from "@/components/about/TeamGrid";
import ApproachProcess from "@/components/about/ApproachProcess";
import StatBlock from "@/components/ui/StatBlock";
import PullQuote from "@/components/ui/PullQuote";
import { Reveal, RevealMask } from "@/components/ui/Reveal";
import { timeline } from "@/data/timeline";
import { philosophy } from "@/data/philosophy";
import { team } from "@/data/team";
import { stats, approachSteps } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
import { exteriors } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "SpaceFrame Architects is a 25-year architecture and design practice in Indore, working across residential, commercial, institutional and hospitality typologies in Madhya Pradesh.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SpaceFrame Architects | 25+ Years of Architecture in Indore",
    description:
      "25 years of designing places that respond to people, climate, culture and context.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[85svh] min-h-[560px] w-full overflow-hidden bg-charcoal">
        <ArchImage image={exteriors[8]} priority className="opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/40" />
        <div className="relative h-full container-edit flex items-end pb-14 md:pb-20 pt-28 text-offwhite">
          <div>
            <p className="text-eyebrow text-xs opacity-75 mb-5">About the Practice</p>
            <h1 className="font-serif text-[13vw] md:text-7xl lg:text-8xl leading-[0.92] tracking-tight max-w-4xl">
              25 years of
              <br />
              making space.
            </h1>
          </div>
        </div>
      </section>

      <section className="container-edit py-24 md:py-36">
        <div className="grid-edit">
          <div className="col-span-4 md:col-span-2 lg:col-span-3">
            <Reveal>
              <p className="text-eyebrow text-xs text-charcoal/50">The Practice</p>
            </Reveal>
          </div>
          <div className="col-span-4 md:col-span-6 lg:col-span-9">
            <RevealMask>
              <p className="font-serif text-[8vw] sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
                Founded in Indore in 1999, SpaceFrame has spent twenty-five years learning what this
                region asks of a building &mdash; and answering in concrete, brick, courtyard and shade.
              </p>
            </RevealMask>
          </div>
        </div>
      </section>

      <section className="container-edit pb-24 md:pb-36">
        <Reveal className="mb-10 md:mb-14">
          <p className="text-eyebrow text-xs text-charcoal/50">Timeline</p>
        </Reveal>
        <Timeline entries={timeline} />
      </section>

      <PullQuote testimonial={testimonials[0]} />

      <section className="bg-charcoal text-offwhite py-24 md:py-36">
        <div className="container-edit">
          <Reveal className="mb-14 md:mb-20 max-w-xl">
            <p className="text-eyebrow text-xs opacity-60 mb-4">Experience</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              A practice measured in decades, not deadlines.
            </h2>
          </Reveal>
          <StatBlock stats={stats} />
        </div>
      </section>

      <section className="container-edit py-24 md:py-36">
        <Reveal className="mb-14 md:mb-20 max-w-xl">
          <p className="text-eyebrow text-xs text-charcoal/50 mb-4">Philosophy</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Six ideas that shape every project.
          </h2>
        </Reveal>
        <PhilosophyGrid pillars={philosophy} />
      </section>

      <section className="container-edit py-24 md:py-36 border-t border-charcoal/10">
        <Reveal className="mb-14 md:mb-20 max-w-xl">
          <p className="text-eyebrow text-xs text-charcoal/50 mb-4">The Team</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            The people behind the practice.
          </h2>
        </Reveal>
        <TeamGrid team={team} />
      </section>

      <section className="container-edit py-24 md:py-36 border-t border-charcoal/10">
        <Reveal className="mb-10 md:mb-14 max-w-xl">
          <p className="text-eyebrow text-xs text-charcoal/50 mb-4">Approach</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">How a project moves.</h2>
        </Reveal>
        <ApproachProcess steps={approachSteps} />
      </section>
    </div>
  );
}
