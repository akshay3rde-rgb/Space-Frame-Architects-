import type { TeamMember } from "@/types";
import { portraits } from "@/data/images";

export const team: TeamMember[] = [
  {
    slug: "aniruddha-deshpande",
    name: "Aniruddha Deshpande",
    role: "Founder & Principal Architect",
    bio: "Aniruddha founded SpaceFrame in 1999 after five years at a Mumbai practice, returning to Indore convinced that central India's institutions and homes deserved the same rigour as its metros. A graduate of SPA Delhi, he has spent twenty-five years working out what concrete, brick and a courtyard can do against a semi-arid climate. He still visits every site personally, twice a month, until the keys are handed over.",
    image: portraits[0],
  },
  {
    slug: "rukmini-oak",
    name: "Rukmini Oak",
    role: "Design Director",
    bio: "Rukmini trained at CEPT Ahmedabad and spent four years restoring wadas in Pune before joining SpaceFrame in 2008, where she now leads the studio's design direction. Her particular interest is adaptive reuse — old structures, walked through slowly, until they tell you what they want to become. She has led the firm's interiors and hospitality work for over a decade.",
    image: portraits[1],
  },
  {
    slug: "kabir-saxena",
    name: "Kabir Saxena",
    role: "Senior Architect",
    bio: "Kabir studied at SPA Bhopal and has spent fourteen years designing houses that treat Indore's summer sun as a design constraint rather than a problem to air-condition away. Courtyards, deep verandahs and cross-ventilation run through everything he draws. He leads the residential studio and mentors the firm's younger architects on site.",
    image: portraits[2],
  },
  {
    slug: "ishaan-trivedi",
    name: "Ishaan Trivedi",
    role: "Associate Architect",
    bio: "Ishaan joined SpaceFrame in 2018 after a master's in landscape architecture from CEPT Ahmedabad, and has since made the case, project after project, that a building's edges matter as much as its plan. He works closely with landscape consultants from the first sketch rather than the last, and has been central to the firm's hospitality and retreat work.",
    image: portraits[3],
  },
  {
    slug: "priyanka-bhargava",
    name: "Priyanka Bhargava",
    role: "Urban Design Lead",
    bio: "Priyanka trained in urban planning at SPA Delhi and spent six years with a heritage-conservation consultancy before joining SpaceFrame in 2014. She leads the studio's public realm and urban work, from ghat-front pavilions to district masterplans, always starting from how a place is already used before deciding what it should become.",
    image: portraits[4],
  },
];
