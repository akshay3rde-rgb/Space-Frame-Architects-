import type { PhilosophyPillar } from "@/types";
import { details, materials, interiors } from "@/data/images";

export const philosophy: PhilosophyPillar[] = [
  {
    title: "Context",
    description:
      "A building has no meaning apart from where it stands. Before a single wall is drawn, we read the site — its slope, its neighbours, the way the sun moves across it in May and again in December — because a plan that ignores those facts is a plan for somewhere else.",
    image: details[2],
  },
  {
    title: "Material",
    description:
      "Materials should announce what they are, not perform as something cheaper pretending to be expensive. Concrete stays concrete, brick stays brick, and both are left to age visibly rather than sealed against the years. A material chosen honestly needs no ornament to justify itself.",
    image: materials[0],
  },
  {
    title: "Light",
    description:
      "Daylight is the one finish that never needs maintenance. We design the section — the ceiling height, the clerestory, the depth of an overhang — before we specify a single fitting, because a room lit well by the sun rarely needs much else.",
    image: interiors[2],
  },
  {
    title: "Climate",
    description:
      "Indore's summer is not a problem to be solved with tonnage of air conditioning; it is a brief. Shade, cross-ventilation and thermal mass do most of the real work, quietly, for the fifty years a building will stand after the client has forgotten which contractor installed the compressor.",
    image: details[5],
  },
  {
    title: "People",
    description:
      "A plan is only a diagram until someone lives in it. We test every layout against the ordinary friction of a real week — where shoes come off, where a child does homework, where a family actually eats — because architecture that photographs well and lives badly has failed at the only brief that matters.",
    image: interiors[7],
  },
  {
    title: "Time",
    description:
      "Nothing we build is finished on handover day. A building's real character shows up in how it takes on monsoon stains, how its brick weathers, how thirty years of a family's life leave marks on a stair. We design for that patina, not against it.",
    image: materials[2],
  },
];
