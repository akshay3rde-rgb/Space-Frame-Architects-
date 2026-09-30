import type { CityContent } from "@/types";
import { urban, exteriors } from "@/data/images";

export const cities: CityContent[] = [
  {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    editorial:
      "Indore doesn't sit still. It is Madhya Pradesh's commercial engine, a city of jewellery lanes and IT parks, sarafa-market food stalls that open at midnight and gated colonies that keep expanding at its edges. The older city — Rajwada, Sarafa, the narrow streets around Khajuri Bazaar — still runs on a density and a street life that the newer suburbs haven't figured out how to replicate. Building here means answering to both: the informal, densely negotiated logic of the old town, and the plot-by-plot speculation of everywhere else.",
    approach:
      "SpaceFrame is based two streets from Residency Road, and Indore is where the studio tests most of its ideas first — on houses, offices and interiors for clients who are often also neighbours. The city's semi-arid climate, punishing from April through June and then flipped entirely by the monsoon, shapes almost every brief: courtyards, deep shade, cross-ventilation, and a healthy scepticism toward glass that isn't shielded from the west.",
    stats: [
      { label: "Projects", value: "4" },
      { label: "Active since", value: "1999" },
      { label: "Typologies", value: "4" },
    ],
    categories: ["Residential", "Commercial", "Interiors", "Urban"],
    heroImage: { ...urban[0], caption: "Old Indore's street fabric, around Rajwada." },
    image: exteriors[9],
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    state: "Madhya Pradesh",
    editorial:
      "Ujjain is a temple town first, a city second — its calendar set by the Kshipra's ritual calendar more than by any municipal plan. The ghats hold an intensity of use that swings from near-empty to overwhelmed within days, and the built fabric around them, dense and low, has absorbed that rhythm for centuries. Away from the river, the city thins out fast into a smaller-scale, more ordinary Madhya Pradesh town, and it's worth remembering both faces exist within the same municipal limits.",
    approach:
      "Working in Ujjain means designing for extremes of occupancy as much as for climate — a building that sits quiet for months and then holds a crowd it was never sized for on paper. SpaceFrame's projects here, close to the river and further out toward the reservoir, share a habit of treating water as the site's real orientation, not an amenity to glimpse from a balcony.",
    stats: [
      { label: "Projects", value: "2" },
      { label: "Active since", value: "2017" },
      { label: "Typologies", value: "2" },
    ],
    categories: ["Residential", "Hospitality"],
    heroImage: { ...urban[2], caption: "A quiet residential street near the old town, Ujjain." },
    image: exteriors[13],
  },
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    editorial:
      "Bhopal is built on a landscape most cities would have flattened — low sandstone hills, two lakes holding the old and new towns apart, tree cover that survives right into the city centre. It is a gentler climate than Indore's, tempered by all that water, but the topography makes every plot a negotiation with slope, view and shade rather than a blank rectangle. Shyamla Hills and the neighbourhoods around Van Vihar still read as distinct places rather than interchangeable colonies, and that distinctiveness is worth protecting.",
    approach:
      "SpaceFrame's Bhopal work stays close to the city's terrain rather than working against it — houses stepped into slopes, retreats planned around existing tree cover, renovations that recover rather than replace. The studio treats Bhopal's lakes and hills less as scenery and more as a working constraint that, taken seriously, produces better plans.",
    stats: [
      { label: "Projects", value: "3" },
      { label: "Active since", value: "2014" },
      { label: "Typologies", value: "2" },
    ],
    categories: ["Residential", "Interiors", "Hospitality"],
    heroImage: { ...urban[1], caption: "Low-rise fabric across Bhopal's hills and lakes." },
    image: exteriors[0],
  },
  {
    slug: "guna",
    name: "Guna",
    state: "Madhya Pradesh",
    editorial:
      "Guna is a smaller-scale town, its growth pushed almost entirely to the highway corridors that connect it to Shivpuri, Ashoknagar and beyond. The old Civil Lines area still carries a colonial-era institutional character — bungalows, tree-lined lanes, government offices — that the newer highway-facing development doesn't attempt to match. It's a town in transition between the two, and neither pace of change is likely to win outright.",
    approach:
      "SpaceFrame's Guna work sits deliberately at that seam: institutional buildings that respect the Civil Lines' quieter grain, and commercial work along the highway that is honest about the speed and scale it has to compete with. Budgets here are tighter and maintenance capacity lower than in Indore, which the studio treats as a design constraint rather than a compromise.",
    stats: [
      { label: "Projects", value: "2" },
      { label: "Active since", value: "2013" },
      { label: "Typologies", value: "2" },
    ],
    categories: ["Commercial", "Institutional"],
    heroImage: { ...exteriors[8], caption: "A residential courtyard project on Guna's Civil Lines edge." },
    image: urban[0],
  },
  {
    slug: "shivpuri",
    name: "Shivpuri",
    state: "Madhya Pradesh",
    editorial:
      "Shivpuri's identity is bound up with the forest at its edge — Madhav National Park is close enough to shape how the town thinks about its own boundary, where the built fabric should simply stop. The town itself is modest in scale, government-institutional in character around the collectorate, with the old Scindia-era chhatris and lake nearby as a reminder that this was once a summer capital, not just a district headquarters.",
    approach:
      "SpaceFrame's projects here — a technical campus, a government annexe, a park interpretation centre still at concept stage — share a concern with where building should defer to the surrounding landscape rather than compete with it. Water scarcity in the dry months and the proximity of protected forest are treated as fixed conditions the design has to answer to, not obstacles to be engineered around.",
    stats: [
      { label: "Projects", value: "3" },
      { label: "Active since", value: "2015" },
      { label: "Typologies", value: "3" },
    ],
    categories: ["Institutional", "Commercial", "Urban"],
    heroImage: { ...exteriors[3], caption: "The forest edge near Madhav National Park, Shivpuri." },
    image: urban[2],
  },
];
