import type { Metadata } from "next";
import ProjectsExplorer from "@/components/project/ProjectsExplorer";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Architecture & Design",
  description:
    "A collection of residential, commercial, institutional and hospitality projects by SpaceFrame Architects across Indore, Ujjain, Bhopal, Guna and Shivpuri.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | SpaceFrame Architects",
    description:
      "A collection of places shaped by context, material, light and the lives within them.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container-edit mb-14 md:mb-20">
        <Reveal>
          <h1 className="font-serif text-[13vw] sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Projects
          </h1>
          <p className="max-w-xl text-charcoal/60 text-base md:text-lg mt-6 leading-relaxed">
            A collection of places shaped by context, material, light and the lives within them.
          </p>
        </Reveal>
      </div>

      <div className="container-edit">
        <ProjectsExplorer projects={projects} />
      </div>
    </div>
  );
}
