import type { ProjectImage } from "@/types";

/**
 * Curated placeholder photography pool (hotlinked from Pexels, free-to-use
 * license). Swap these for SpaceFrame's own commissioned photography when
 * available — every reference in the content data below points here so
 * replacement is a one-file change.
 */

function p(id: number, w = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const exteriors: ProjectImage[] = [
  { src: p(32031452), alt: "Modern residential house with contemporary design", orientation: "portrait" },
  { src: p(34698803), alt: "Modern architectural building exterior", orientation: "landscape" },
  { src: p(32520267), alt: "Contemporary architecture with traditional influences", orientation: "landscape" },
  { src: p(37129015), alt: "Modern house with lush garden setting", orientation: "landscape" },
  { src: p(29216476), alt: "Angular contemporary building facade against the sky", orientation: "portrait" },
  { src: p(32666364), alt: "Modern urban house with distinctive design elements", orientation: "portrait" },
  { src: p(33911286), alt: "Institutional building with modern facade", orientation: "landscape" },
  { src: p(35229793), alt: "Contemporary residential building", orientation: "landscape" },
  { src: p(34968508), alt: "Residential architecture with courtyard planning", orientation: "landscape" },
  { src: p(18273285), alt: "Modern house building exterior", orientation: "landscape" },
  { src: p(37574349), alt: "Modern white house with lush greenery", orientation: "landscape" },
  { src: p(35399301), alt: "Residential street with minimalist architecture", orientation: "landscape" },
  { src: p(29462973), alt: "Modern minimalist architecture with clean lines", orientation: "portrait" },
  { src: p(30211366), alt: "Modern white house with palm trees and patio", orientation: "landscape" },
  { src: p(30484316), alt: "Minimalist house design, exterior view", orientation: "portrait" },
  { src: p(35371013), alt: "Modern building with palm trees in an urban setting", orientation: "portrait" },
];

export const interiors: ProjectImage[] = [
  { src: p(33559373), alt: "Modern living room with warm wood accents", orientation: "landscape" },
  { src: p(30857589), alt: "Kitchen interior with wooden staircase", orientation: "portrait" },
  { src: p(36195703), alt: "Bedroom interior with soft natural light", orientation: "landscape" },
  { src: p(33688058), alt: "Living room interior in a neutral material palette", orientation: "landscape" },
  { src: p(34946066), alt: "Living room with exposed brick accent wall", orientation: "landscape" },
  { src: p(35657825), alt: "Minimalist interior with round table and art", orientation: "portrait" },
  { src: p(16625884), alt: "Seating and coffee table in a minimal interior", orientation: "landscape" },
  { src: p(20582004), alt: "Modern living room interior", orientation: "landscape" },
  { src: p(36353282), alt: "Contemporary living room interior", orientation: "landscape" },
  { src: p(36962663), alt: "Cozy minimalist interior with natural light", orientation: "landscape" },
  { src: p(27459712), alt: "Seating and side table against a textured wall", orientation: "portrait" },
  { src: p(20390764), alt: "Furniture composition in a minimalist living room", orientation: "landscape" },
];

export const details: ProjectImage[] = [
  { src: p(36422484), alt: "Architectural concrete staircase, outdoor", orientation: "portrait" },
  { src: p(16712146), alt: "Spiral staircase in a concrete building", orientation: "portrait" },
  { src: p(39486678), alt: "Brutalist architecture with concrete staircase", orientation: "landscape" },
  { src: p(37266528), alt: "Weathered stone facade detail, corner balconies", orientation: "landscape" },
  { src: p(37266526), alt: "Stone and brick facade detail with deep-set windows", orientation: "landscape" },
  { src: p(37763125), alt: "Architectural interior with curved staircase", orientation: "landscape" },
];

export const materials: ProjectImage[] = [
  { src: p(38808615), alt: "Minimalist concrete building facade texture", orientation: "square" },
  { src: p(16001335), alt: "Stone and pebble wall texture", orientation: "square" },
  { src: p(19884844), alt: "Close-up of a brick wall", orientation: "square" },
  { src: p(36081877), alt: "Close-up of wood texture with detailed grain", orientation: "square" },
];

export const portraits: ProjectImage[] = [
  { src: p(38889922, 1200), alt: "Studio portrait, principal architect", orientation: "portrait" },
  { src: p(30794920, 1200), alt: "Studio portrait, design director", orientation: "portrait" },
  { src: p(33261955, 1200), alt: "Studio portrait, senior architect", orientation: "portrait" },
  { src: p(33261949, 1200), alt: "Studio portrait, associate architect", orientation: "portrait" },
  { src: p(38451328, 1200), alt: "Studio portrait, urban design lead", orientation: "portrait" },
];

export const urban: ProjectImage[] = [
  { src: p(18287957), alt: "Streetscape of buildings in an Indian city", orientation: "landscape" },
  { src: p(20322353), alt: "Cityscape of a Madhya Pradesh city", orientation: "landscape" },
  { src: p(18484785), alt: "Narrow city street with old residential buildings", orientation: "landscape" },
];
