import ProjectCard from "@/components/project/ProjectCard";
import type { Project } from "@/types";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid-edit gap-y-14 md:gap-y-20">
      {projects.map((p, i) => (
        <ProjectCard key={p.slug} project={p} priority={i < 2} />
      ))}
    </div>
  );
}
