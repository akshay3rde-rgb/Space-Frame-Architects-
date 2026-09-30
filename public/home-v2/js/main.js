/**
 * Homepage v2 — entry point.
 * Builds the data-driven sections, then wakes each interaction module.
 * Each module owns one behaviour and talks to the page only through the DOM
 * and the shared scroll bus in scroll.js.
 */
import { cities, archive } from "./data.js";
import {
  hydratePhotos, renderShowcase, renderCollage, renderStrip, renderStudio,
  renderCities, renderIndex, renderFinale,
} from "./render.js";
import { refresh } from "./scroll.js";
import { initReveal } from "./reveal.js";
import { initParallax } from "./parallax.js";
import { initDepth } from "./depth.js";
import { initNav } from "./nav.js";
import { initCursor } from "./cursor.js";
import { initStatement } from "./statement.js";
import { initShowcase } from "./carousel.js";
import { initStrip } from "./hstrip.js";
import { initSweep } from "./sweep.js";
import { initPreview } from "./preview.js";
import { initCounters } from "./counters.js";
import { initFinale } from "./finale.js";

const $ = (sel) => document.querySelector(sel);

/* 1 — markup */
renderShowcase($("#work"));
renderCollage($("[data-collage]"));
const stripCount = renderStrip($("[data-strip-track]"));
renderStudio($("#studio"));
renderCities($("[data-sweep-list]"));
renderIndex($("[data-index-list]"));
renderFinale($("#finale"));
hydratePhotos();

/* 2 — behaviour */
initReveal();
initParallax();
initDepth($("#top"));
initStatement($("#manifesto"));
initShowcase($("#work"));
initStrip($("#more"), stripCount);
initSweep($("#cities"));
initFinale($("#finale"));
initCounters();
initPreview({
  list: $("[data-index-list]"),
  box: $("[data-index-preview]"),
  images: archive.map((p) => p.hero),
  sizes: "30vw",
});
initPreview({
  list: $("[data-sweep-list]"),
  box: $("[data-city-preview]"),
  images: cities.map((c) => c.img),
  sizes: "30vw",
});
initNav();
initCursor();

/* 3 — hand over to the entrance animation once type is ready */
const html = document.documentElement;
const go = () => {
  html.classList.add("is-ready");
  refresh();
};
if (document.fonts && document.fonts.ready) {
  Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1400))]).then(go);
} else {
  go();
}
window.addEventListener("load", refresh);
