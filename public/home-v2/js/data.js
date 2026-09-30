/**
 * Homepage v2 — content.
 *
 * Every string and photograph below is lifted from the site's existing data
 * (src/data/*.ts). Nothing is invented; long copy is trimmed, never rewritten.
 * Photography is the same hotlinked Pexels pool the main site uses, so swapping
 * in commissioned photography stays a one-file change on either homepage.
 */

export const site = {
  name: "SpaceFrame Architects",
  founded: 1999,
  city: "Indore",
  state: "Madhya Pradesh",
  email: "hello@spaceframearchitects.in",
  phone: "+91 98765 43210",
  address: ["14 Residency Road, South Tukoganj", "Indore, Madhya Pradesh 452001"],
  socials: [
    { label: "Instagram", href: "https://instagram.com/spaceframearchitects" },
    { label: "LinkedIn", href: "https://linkedin.com/company/spaceframearchitects" },
    { label: "Pinterest", href: "https://pinterest.com/spaceframearchitects" },
  ],
  menu: [
    { label: "Projects", href: "/projects" },
    { label: "Studio", href: "/about" },
    { label: "Cities", href: "/cities" },
    { label: "Journal", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
};

/** Pexels image helpers. `w` keeps payloads proportional to the slot they fill. */
export const photoUrl = (id, w) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/* id, alt, orientation — copied from src/data/images.ts */
const ph = (id, alt, o = "landscape") => ({ id, alt, o });

const P = {
  courtyard: ph(34698803, "Modern architectural building exterior"),
  atrium: ph(18273285, "Modern house building exterior"),
  valley: ph(32031452, "Modern residential house with contemporary design", "portrait"),
  lake: ph(29216476, "Angular contemporary building facade against the sky", "portrait"),
  edge: ph(32666364, "Modern urban house with distinctive design elements", "portrait"),
  institute: ph(34968508, "Residential architecture with courtyard planning"),
  sarafa: ph(33559373, "Modern living room with warm wood accents"),
  rajwada: ph(18287957, "Streetscape of buildings in an Indian city"),
  kshipra: ph(30211366, "Modern white house with palm trees and patio"),
  shyamla: ph(33688058, "Living room interior in a neutral material palette"),
  vanvihar: ph(37129015, "Modern house with lush garden setting"),
  library: ph(32520267, "Contemporary architecture with traditional influences"),
  madhav: ph(18484785, "Narrow city street with old residential buildings"),
  collectorate: ph(37574349, "Modern white house with lush greenery"),
};

/* `short` is a display-scale name for oversized type; `name` stays the real title. */
export const projects = [
  {
    slug: "courtyard-house-indore", name: "Courtyard House", short: "Courtyard House",
    city: "Indore", location: "Bicholi Mardana, Indore", year: 2019, category: "Residential",
    area: "420 sq.m.", status: "Completed",
    tagline: "A house that keeps its distance from the sun.",
    summary: "On a quiet plot in Bicholi Mardana, a family home turns its back on the street and opens instead onto a sunken courtyard that keeps the interior cool through Indore's long summer.",
    hero: P.courtyard,
  },
  {
    slug: "the-atrium-indore", name: "The Atrium", short: "The Atrium",
    city: "Indore", location: "Vijay Nagar, Indore", year: 2022, category: "Commercial",
    area: "6,800 sq.m.", status: "Completed",
    tagline: "An office building organised around a shaft of light.",
    summary: "A seven-storey commercial building in Vijay Nagar wrapped around a full-height atrium, built for a city where tenants now ask for daylight and cross-ventilation as often as parking.",
    hero: P.atrium,
  },
  {
    slug: "valley-residence-bhopal", name: "Valley Residence", short: "Valley Residence",
    city: "Bhopal", location: "Kolar Road, Bhopal", year: 2017, category: "Residential",
    area: "560 sq.m.", status: "Completed",
    tagline: "A house stepped into its own slope.",
    summary: "On a sloped plot above Kolar Road, a house for a retired couple steps down in three shallow terraces instead of cutting and levelling the land.",
    hero: P.valley,
  },
  {
    slug: "lake-house-ujjain", name: "Lake House", short: "Lake House",
    city: "Ujjain", location: "Gambhir Dam Road, Ujjain", year: 2021, category: "Residential",
    area: "610 sq.m.", status: "Completed",
    tagline: "A house that faces water, not the road.",
    summary: "Set above the Gambhir backwaters outside Ujjain, this house turns every principal room toward the reservoir and treats the approach from the road as a formality.",
    hero: P.lake,
  },
  {
    slug: "urban-edge-guna", name: "Urban Edge", short: "Urban Edge",
    city: "Guna", location: "Guna–Shivpuri Highway, Guna", year: 2023, category: "Commercial",
    area: "4,200 sq.m.", status: "Completed",
    tagline: "A retail and office block built for a highway, not a high street.",
    summary: "A mixed retail and office development on the Guna–Shivpuri highway, designed to register at driving speed while still holding together as a place to park, walk and stay.",
    hero: P.edge,
  },
  {
    slug: "central-institute-shivpuri", name: "Central Institute", short: "Central Institute",
    city: "Shivpuri", location: "NH-27, Shivpuri", year: 2016, category: "Institutional",
    area: "12,500 sq.m.", status: "Completed",
    tagline: "A campus planned around its own shade.",
    summary: "A residential polytechnic campus on the edge of Shivpuri, planned around shaded walkways and a central quadrangle so that movement between classrooms never requires crossing open sun.",
    hero: P.institute,
  },
  {
    slug: "sarafa-lane-offices-indore", name: "Sarafa Lane Offices", short: "Sarafa Lane",
    city: "Indore", location: "Sarafa Bazaar, Indore", year: 2024, category: "Interiors",
    area: "340 sq.m.", status: "Completed",
    tagline: "An old jewellery house, refitted without forgetting its trade.",
    summary: "An interior fit-out for a fourth-generation jewellery business above Sarafa Bazaar, keeping the building's original vaults and narrow stair while inserting a contemporary working office.",
    hero: P.sarafa,
  },
  {
    slug: "rajwada-quarter-redevelopment-indore", name: "Rajwada Quarter Redevelopment", short: "Rajwada Quarter",
    city: "Indore", location: "Rajwada, Indore", year: 2025, category: "Urban",
    area: "2.3 hectares", status: "Under Construction",
    tagline: "Giving the streets around Rajwada back to people on foot.",
    summary: "A public realm redevelopment of the lanes around Rajwada palace, reclaiming street width from parked vehicles for pedestrians, hawkers and the palace's own setting.",
    hero: P.rajwada,
  },
  {
    slug: "kshipra-ghat-pavilion-ujjain", name: "Kshipra Ghat Pavilion", short: "Kshipra Ghat",
    city: "Ujjain", location: "Ram Ghat Road, Ujjain", year: 2018, category: "Hospitality",
    area: "780 sq.m.", status: "Completed",
    tagline: "A guesthouse that keeps its eyes on the river.",
    summary: "A small pilgrim guesthouse and pavilion near Ram Ghat, built for visitors staying through the Kshipra's ritual bathing days, with rooms and a public terrace oriented entirely toward the river.",
    hero: P.kshipra,
  },
  {
    slug: "shyamla-hills-residence-bhopal", name: "Shyamla Hills Residence", short: "Shyamla Hills",
    city: "Bhopal", location: "Shyamla Hills, Bhopal", year: 2015, category: "Interiors",
    area: "310 sq.m.", status: "Completed",
    tagline: "An eighties bungalow, relieved of thirty years of additions.",
    summary: "An interior renovation of a 1980s bungalow, stripping back three decades of partition walls and false ceilings to recover the volume and cross-ventilation the original plan had.",
    hero: P.shyamla,
  },
  {
    slug: "van-vihar-retreat-bhopal", name: "Van Vihar Nature Retreat", short: "Van Vihar",
    city: "Bhopal", location: "Van Vihar Road, Bhopal", year: 2026, category: "Hospitality",
    area: "3,600 sq.m.", status: "Under Construction",
    tagline: "A retreat that keeps its distance from the tree line.",
    summary: "A boutique retreat under construction near Van Vihar National Park, built as a loose scatter of low pavilions rather than a single block, to keep tree cover and sightlines to the park undisturbed.",
    hero: P.vanvihar,
  },
  {
    slug: "guna-district-library", name: "Guna District Library", short: "Guna Library",
    city: "Guna", location: "Civil Lines, Guna", year: 2014, category: "Institutional",
    area: "1,850 sq.m.", status: "Completed",
    tagline: "A reading room built to outlast its book collection.",
    summary: "A public library in Guna's Civil Lines area, designed as a single naturally lit reading hall with modest running costs, on a budget that left no room for mechanical cooling.",
    hero: P.library,
  },
  {
    slug: "madhav-national-park-interpretation-centre-shivpuri", name: "Madhav National Park Interpretation Centre", short: "Madhav Park",
    city: "Shivpuri", location: "Madhav National Park, Shivpuri", year: 2026, category: "Urban",
    area: "2,100 sq.m.", status: "Concept",
    tagline: "A threshold building between town and forest.",
    summary: "A concept design for a visitor interpretation centre at the edge of Madhav National Park, conceived as a sequence of thresholds that slow visitors down before they enter the forest itself.",
    hero: P.madhav,
  },
  {
    slug: "shivpuri-collectorate-annexe", name: "Shivpuri Collectorate Annexe", short: "Collectorate Annexe",
    city: "Shivpuri", location: "Collectorate Campus, Shivpuri", year: 2020, category: "Commercial",
    area: "2,900 sq.m.", status: "Completed",
    tagline: "A government office that doesn't feel like a queue.",
    summary: "A new annexe to the Shivpuri collectorate campus, built to reduce the crowding and long outdoor waits typical of district government offices, with shaded courtyards standing in for corridors.",
    hero: P.collectorate,
  },
];

export const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
export const pick = (slugs) => slugs.map((s) => bySlug[s]);

/* 02 — the carousel: the six projects the main site flags as featured. */
export const featured = pick([
  "courtyard-house-indore",
  "the-atrium-indore",
  "kshipra-ghat-pavilion-ujjain",
  "central-institute-shivpuri",
  "shyamla-hills-residence-bhopal",
  "madhav-national-park-interpretation-centre-shivpuri",
]);

/* 05 — the horizontal strip: everything else except the closing project. */
export const strip = pick([
  "valley-residence-bhopal",
  "lake-house-ujjain",
  "urban-edge-guna",
  "sarafa-lane-offices-indore",
  "rajwada-quarter-redevelopment-indore",
  "guna-district-library",
  "shivpuri-collectorate-annexe",
]);

/* 09 — the closing frame. */
export const finale = bySlug["van-vihar-retreat-bhopal"];

/* Index: newest first. */
export const archive = [...projects].sort((a, b) => b.year - a.year);

/* 04 — collage. Each frame is a gallery image credited to the project it belongs to. */
export const collage = [
  { key: "brick", slug: "courtyard-house-indore", img: ph(34946066, "Living room with exposed brick accent wall"), tone: "magenta" },
  { key: "spiral", slug: "the-atrium-indore", img: ph(16712146, "Spiral staircase in a concrete building", "portrait"), tone: "lime" },
  { key: "wall", slug: "lake-house-ujjain", img: ph(19884844, "Close-up of a brick wall", "square"), tone: "blue" },
  { key: "stone", slug: "lake-house-ujjain", img: ph(37266528, "Weathered stone facade detail, corner balconies"), tone: "orange" },
  { key: "stair", slug: "guna-district-library", img: ph(36422484, "Architectural concrete staircase, outdoor", "portrait"), tone: "ink" },
  { key: "kitchen", slug: "sarafa-lane-offices-indore", img: ph(30857589, "Kitchen interior with wooden staircase", "portrait"), tone: "lime" },
  { key: "brutal", slug: "valley-residence-bhopal", img: ph(39486678, "Brutalist architecture with concrete staircase"), tone: "magenta" },
  { key: "slab", slug: "courtyard-house-indore", img: ph(38808615, "Minimalist concrete building facade texture", "square"), tone: "blue" },
];

/* 07 — cities; `line` is the opening sentence of each city's editorial on the main site. */
export const cities = [
  { slug: "indore", name: "Indore", count: 4, since: 1999, line: "Indore doesn't sit still.", img: ph(18273285, "Modern house building exterior") },
  { slug: "ujjain", name: "Ujjain", count: 2, since: 2017, line: "A temple town first, a city second.", img: ph(30211366, "Modern white house with palm trees and patio") },
  { slug: "bhopal", name: "Bhopal", count: 3, since: 2014, line: "Built on a landscape most cities would have flattened.", img: ph(32031452, "Modern residential house with contemporary design", "portrait") },
  { slug: "guna", name: "Guna", count: 2, since: 2013, line: "Growth pushed almost entirely to the highway.", img: ph(18287957, "Streetscape of buildings in an Indian city") },
  { slug: "shivpuri", name: "Shivpuri", count: 3, since: 2015, line: "Where the built fabric should simply stop.", img: ph(18484785, "Narrow city street with old residential buildings") },
];

export const stats = [
  { value: 25, suffix: "+", label: "Years of practice" },
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 5, suffix: "", label: "Cities in Madhya Pradesh" },
  { value: 6, suffix: "", label: "Typologies" },
];

export const process = ["Observe", "Understand", "Imagine", "Design", "Build", "Evolve"];

export const timeline = [
  { year: "1999", title: "The beginning" },
  { year: "2005", title: "Growing with the region" },
  { year: "2012", title: "New typologies" },
  { year: "2018", title: "Expanding across Madhya Pradesh" },
  { year: "2026", title: "25+ years of practice" },
];

/* Founder portrait (src/data/team.ts). */
export const founder = {
  name: "Aniruddha Deshpande",
  role: "Founder & Principal Architect",
  img: ph(38889922, "Studio portrait, principal architect", "portrait"),
};
