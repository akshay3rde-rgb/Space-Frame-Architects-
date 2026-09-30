export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Institutional"
  | "Hospitality"
  | "Interiors"
  | "Urban";

export type City = "Indore" | "Ujjain" | "Bhopal" | "Guna" | "Shivpuri";

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  /** landscape | portrait | square — governs aspect ratio in galleries */
  orientation?: "landscape" | "portrait" | "square";
}

export interface Project {
  slug: string;
  name: string;
  city: City;
  location: string;
  year: number;
  category: ProjectCategory;
  area: string;
  status: "Completed" | "Under Construction" | "Concept";
  /** one line, used in listings/overlays */
  tagline: string;
  /** short paragraph, used in cards and og:description */
  summary: string;
  brief: string[];
  approach: string[];
  materials: string[];
  credits: { role: string; name: string }[];
  heroImage: ProjectImage;
  gallery: ProjectImage[];
  /** grid span hint for the editorial projects grid */
  gridSpan: "wide" | "tall" | "large" | "regular";
  featured?: boolean;
}

export interface CityContent {
  slug: string;
  name: City;
  state: string;
  editorial: string;
  approach: string;
  stats: { label: string; value: string }[];
  categories: ProjectCategory[];
  heroImage: ProjectImage;
  image: ProjectImage;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: ProjectImage;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  readTime: string;
  author: string;
  excerpt: string;
  heroImage: ProjectImage;
  body: string[]; // paragraphs; a string starting with "> " is a pull quote
  relatedProjectSlugs?: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
  image: ProjectImage;
}

export interface Stat {
  value: string;
  label: string;
}
