import Link from "next/link";
import ProjectCard from "@/components/project/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/types";

export default function SelectedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="container-edit py-24 md:py-36">
      <div className="flex items-end justify-between mb-14 md:mb-20 gap-6">
        <Reveal>
          <p className="text-eyebrow text-xs text-charcoal/50 mb-4">02 &mdash; Selected Work</p>
          <h2 className="font-serif text-[10vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
            Projects
          </h2>
        </Reveal>
        <Link
          href="/projects"
          className="hidden sm:block text-eyebrow text-xs border-b border-charcoal/40 pb-1 hover:border-charcoal whitespace-nowrap"
        >
          View all projects
        </Link>
      </div>

      <div className="grid-edit gap-y-14 md:gap-y-24">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i === 0} />
        ))}
      </div>

      <Link
        href="/projects"
        className="sm:hidden mt-14 inline-block text-eyebrow text-xs border-b border-charcoal/40 pb-1"
      >
        View all projects
      </Link>
    </section>
  );
}
