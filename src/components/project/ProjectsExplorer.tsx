"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/project/ProjectCard";
import type { Project, ProjectCategory, City } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES: (ProjectCategory | "All")[] = [
  "All",
  "Residential",
  "Commercial",
  "Institutional",
  "Hospitality",
  "Interiors",
  "Urban",
];

const CITIES: (City | "All")[] = ["All", "Indore", "Ujjain", "Bhopal", "Guna", "Shivpuri"];

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-eyebrow text-[0.68rem] px-4 py-2 rounded-full border transition-colors duration-300",
        active
          ? "bg-charcoal text-ivory border-charcoal"
          : "border-charcoal/25 text-charcoal/60 hover:border-charcoal/60 hover:text-charcoal"
      )}
    >
      {children}
    </button>
  );
}

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [city, setCity] = useState<City | "All">("All");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) => (category === "All" || p.category === category) && (city === "All" || p.city === city)
      ),
    [projects, category, city]
  );

  return (
    <div>
      <div className="flex flex-col gap-4 mb-14 md:mb-20">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <FilterButton key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </FilterButton>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {CITIES.map((c) => (
            <FilterButton key={c} active={city === c} onClick={() => setCity(c)}>
              {c}
            </FilterButton>
          ))}
        </div>
      </div>

      <motion.p layout className="text-eyebrow text-xs text-charcoal/40 mb-8">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </motion.p>

      <motion.div layout className="grid-edit gap-y-14 md:gap-y-20">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={
                {
                  regular: "col-span-4 md:col-span-4 lg:col-span-4",
                  wide: "col-span-4 md:col-span-8 lg:col-span-8",
                  tall: "col-span-4 md:col-span-4 lg:col-span-4",
                  large: "col-span-4 md:col-span-8 lg:col-span-12",
                }[p.gridSpan]
              }
            >
              <ProjectCard project={p} priority={i < 2} overlay={p.gridSpan === "large" ? true : undefined} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-charcoal/50 py-20 text-center font-serif text-2xl">
          No projects match this filter yet.
        </p>
      )}
    </div>
  );
}
