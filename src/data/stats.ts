import type { Stat } from "@/types";

export const stats: Stat[] = [
  { value: "25+", label: "Years of Practice" },
  { value: "100+", label: "Projects Delivered" },
  { value: "5", label: "Cities in Madhya Pradesh" },
  { value: "6", label: "Typologies" },
];

export const approachSteps: { title: string; description: string }[] = [
  {
    title: "Observe",
    description: "We walk the site at different hours and seasons before we measure it, noting how sun, shade and people already move across it.",
  },
  {
    title: "Understand",
    description: "We read the brief against the client's actual routines, budget and maintenance capacity, not just their wish list.",
  },
  {
    title: "Imagine",
    description: "We sketch several genuinely different ideas before committing to one, testing each against climate, structure and cost in rough terms.",
  },
  {
    title: "Design",
    description: "We develop the chosen direction in detail — plan, section, material and structure resolved together, not one after another.",
  },
  {
    title: "Build",
    description: "We stay on site through construction, working closely with contractors and craftspeople to hold the design's intent under real-world pressure.",
  },
  {
    title: "Evolve",
    description: "We check back on completed projects years later, because how a building actually ages is the only honest review of how well it was designed.",
  },
];
