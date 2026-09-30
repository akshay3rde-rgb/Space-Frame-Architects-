import Link from "next/link";
import ProjectCard from "@/components/project/ProjectCard";
import type { Project } from "@/types";

export default function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <section className="container-edit py-24 md:py-36 border-t border-charcoal/10">
      <div className="flex items-end justify-between mb-14 gap-6">
        <h2 className="font-serif text-4xl md:text-5xl leading-[0.95] tracking-tight">
          Related projects
        </h2>
        <Link
          href="/projects"
          className="hidden sm:block text-eyebrow text-xs border-b border-charcoal/40 pb-1 hover:border-charcoal whitespace-nowrap"
        >
          View all projects
        </Link>
      </div>
      <div className="grid-edit gap-y-14">
        {projects.map((p) => (
          <div key={p.slug} className="col-span-4 md:col-span-4 lg:col-span-4">
            <ProjectCard project={p} overlay={false} />
          </div>
        ))}
      </div>
    </section>
  );
}
