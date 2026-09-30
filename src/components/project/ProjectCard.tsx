"use client";

import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import ArchImage from "@/components/ui/ArchImage";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const SPAN_CLASSES: Record<Project["gridSpan"], string> = {
  regular: "col-span-4 md:col-span-4 lg:col-span-4",
  wide: "col-span-4 md:col-span-8 lg:col-span-8",
  tall: "col-span-4 md:col-span-4 lg:col-span-4",
  large: "col-span-4 md:col-span-8 lg:col-span-12",
};

const ASPECT_CLASSES: Record<Project["gridSpan"], string> = {
  regular: "aspect-[4/5]",
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4.4]",
  large: "aspect-[16/8] md:aspect-[21/9]",
};

export default function ProjectCard({
  project,
  priority = false,
  overlay,
}: {
  project: Project;
  priority?: boolean;
  overlay?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const useOverlay = overlay ?? project.gridSpan === "large";

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block", SPAN_CLASSES[project.gridSpan])}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={onMove}
    >
      <div className={cn("relative w-full overflow-hidden bg-sand", ASPECT_CLASSES[project.gridSpan])}>
        <ArchImage
          image={project.heroImage}
          zoom
          priority={priority}
          className="w-full h-full"
          sizes={
            project.gridSpan === "regular" || project.gridSpan === "tall"
              ? "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              : "100vw"
          }
        />

        {useOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        )}

        <motion.div
          className="hidden md:flex pointer-events-none absolute z-10 w-24 h-24 rounded-full bg-offwhite text-charcoal items-center justify-center text-eyebrow text-[0.6rem] text-center leading-tight"
          animate={{
            opacity: hover ? 1 : 0,
            scale: hover ? 1 : 0.6,
            left: pos.x - 48,
            top: pos.y - 48,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22, opacity: { duration: 0.2 } }}
        >
          View
          <br />
          Project
        </motion.div>

        {useOverlay && (
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-9 text-offwhite">
            <p className="text-eyebrow text-[0.65rem] opacity-70 mb-2">
              {project.location} &middot; {project.year}
            </p>
            <h3 className="font-serif text-[7vw] sm:text-4xl md:text-5xl leading-[0.95]">
              {project.name}
            </h3>
          </div>
        )}
      </div>

      {!useOverlay && (
        <div className="pt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl leading-tight group-hover:opacity-60 transition-opacity">
              {project.name}
            </h3>
            <p className="text-eyebrow text-[0.65rem] text-charcoal/50 mt-2">
              {project.location} &middot; {project.year}
            </p>
          </div>
          <span className="text-eyebrow text-[0.65rem] text-charcoal/50 whitespace-nowrap mt-1">
            {project.category}
          </span>
        </div>
      )}
    </Link>
  );
}
