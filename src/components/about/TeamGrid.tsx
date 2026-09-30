import ArchImage from "@/components/ui/ArchImage";
import { Reveal } from "@/components/ui/Reveal";
import type { TeamMember } from "@/types";

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
      {team.map((member, i) => (
        <Reveal key={member.slug} delay={i * 0.05}>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-sand">
            <ArchImage
              image={member.image}
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
            />
          </div>
          <p className="font-serif text-xl md:text-2xl mt-4 leading-tight">{member.name}</p>
          <p className="text-eyebrow text-[0.6rem] text-charcoal/50 mt-1">{member.role}</p>
        </Reveal>
      ))}
    </div>
  );
}
