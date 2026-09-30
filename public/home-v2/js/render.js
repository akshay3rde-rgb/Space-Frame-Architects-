/**
 * Homepage v2 — markup builders.
 * Turns the content in data.js into the DOM for the data-driven sections.
 * Static, hand-composed parts (hero, manifesto, footer) live in index.html.
 */
import {
  photoUrl, featured, strip, finale, archive, collage, cities, stats, process, timeline, bySlug,
} from "./data.js";

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const pad = (n) => String(n).padStart(2, "0");

/** Responsive <img> for a Pexels photo. `sizes` should mirror the CSS slot the image fills. */
export function imgTag(image, { widths = [600, 1000, 1600], sizes = "100vw", eager = false, alt } = {}) {
  const mid = widths[Math.min(1, widths.length - 1)];
  const srcset = widths.map((w) => `${photoUrl(image.id, w)} ${w}w`).join(", ");
  const loading = eager ? 'fetchpriority="high"' : 'loading="lazy"';
  return `<img src="${photoUrl(image.id, mid)}" srcset="${srcset}" sizes="${sizes}" alt="${esc(alt ?? image.alt)}" ${loading} decoding="async">`;
}

/** Fill any `[data-photo]` placeholder (id + alt + sizes) with a real <img>. */
export function hydratePhotos(scope = document) {
  scope.querySelectorAll("[data-photo]").forEach((el) => {
    const widths = (el.dataset.w || "600,1000,1600").split(",").map(Number);
    el.insertAdjacentHTML(
      "afterbegin",
      imgTag(
        { id: el.dataset.photo, alt: el.dataset.alt || "" },
        { widths, sizes: el.dataset.sizes || "100vw", eager: el.hasAttribute("data-eager") }
      )
    );
  });
}

const chars = (text) =>
  text
    .split(" ")
    .map((word, wi, all) => {
      const letters = [...word]
        .map((c, i) => `<span class="ch"><span style="--i:${i + wi * 2}">${esc(c)}</span></span>`)
        .join("");
      return `<span class="wd">${letters}</span>${wi < all.length - 1 ? " " : ""}`;
    })
    .join("");

/* ---------- 02 · featured carousel ---------- */
export function renderShowcase(root) {
  const total = featured.length;
  root.querySelector("[data-track]").innerHTML = featured
    .map(
      (p, i) => `
      <li class="slide" data-index="${i}" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${total}">
        <a class="slide__link" href="/projects/${p.slug}" data-cursor="View project →" aria-label="${esc(p.name)}, ${esc(p.city)}">
          <figure class="slide__fig">
            ${imgTag(p.hero, { widths: [800, 1400, 2000], sizes: "(max-width: 760px) 84vw, 58vw", eager: i < 2 })}
          </figure>
          <span class="slide__num label">${pad(i + 1)}</span>
        </a>
      </li>`
    )
    .join("");

  root.querySelector("[data-titles]").innerHTML = featured
    .map((p, i) => `<h3 class="showcase__title d" data-index="${i}">${chars(p.short)}</h3>`)
    .join("");

  root.querySelector("[data-panels]").innerHTML = featured
    .map(
      (p, i) => `
      <article class="panel" data-index="${i}">
        <dl class="panel__meta label">
          <div><dt>Location</dt><dd>${esc(p.location)}</dd></div>
          <div><dt>Year</dt><dd>${p.year}</dd></div>
          <div><dt>Type</dt><dd>${esc(p.category)}</dd></div>
          <div><dt>Area</dt><dd>${esc(p.area)}</dd></div>
        </dl>
        <div class="panel__text">
          <h3 class="panel__name">${esc(p.name)}</h3>
          <p class="panel__tag">${esc(p.tagline)}</p>
          <p class="panel__summary">${esc(p.summary)}</p>
        </div>
      </article>`
    )
    .join("");

  root.querySelector("[data-sc-total]").textContent = pad(total);
}

/* ---------- 04 · collage ---------- */
export function renderCollage(root) {
  root.innerHTML = collage
    .map((c) => {
      const p = bySlug[c.slug];
      return `
      <a class="tile tile--${c.key} tile--${c.img.o}" href="/projects/${p.slug}" data-cursor="Explore" data-tone="${c.tone}">
        <figure class="tile__fig" data-reveal="mask">
          ${imgTag(c.img, { widths: [500, 900, 1400], sizes: "(max-width: 760px) 50vw, 34vw" })}
        </figure>
        <span class="tile__label"><b>${esc(p.short)}</b><i>${esc(p.city)}, ${p.year}</i></span>
      </a>`;
    })
    .join("");
}

/* ---------- 05 · horizontal strip ---------- */
export function renderStrip(track) {
  const cards = strip
    .map(
      (p, i) => `
      <li class="card card--${p.hero.o} card--${i % 3}">
        <a class="card__link" href="/projects/${p.slug}" data-cursor="View project →" aria-label="${esc(p.name)}, ${esc(p.city)}">
          <span class="card__num d" aria-hidden="true">${pad(i + 1)}</span>
          <figure class="card__fig">
            ${imgTag(p.hero, { widths: [600, 1000, 1500], sizes: "(max-width: 800px) 70vw, 34vw" })}
          </figure>
          <span class="card__meta">
            <span class="card__name d">${esc(p.short)}</span>
            <span class="card__info label">${esc(p.city)} · ${p.year} · ${esc(p.category)}</span>
            <span class="card__tag">${esc(p.tagline)}</span>
          </span>
        </a>
      </li>`
    )
    .join("");
  track.insertAdjacentHTML(
    "beforeend",
    cards +
      `<li class="card card--end"><a class="card__all" href="/projects" data-cursor="Open" ><span class="d">All<br>${archive.length}<br>projects</span><span class="card__arrow" aria-hidden="true">→</span></a></li>`
  );
  return strip.length;
}

/* ---------- 06 · studio ---------- */
export function renderStudio(root) {
  root.querySelector("[data-stats]").innerHTML = stats
    .map(
      (s) => `
      <li class="stat">
        <span class="stat__value d"><span data-count="${s.value}">${s.value}</span>${s.suffix}</span>
        <span class="stat__label label">${esc(s.label)}</span>
      </li>`
    )
    .join("");

  const words = process.map((w) => `<span class="marquee__item d">${esc(w)}</span><span class="marquee__dot" aria-hidden="true">✦</span>`).join("");
  root.querySelector("[data-marquee]").innerHTML =
    `<div class="marquee__group">${words}</div><div class="marquee__group" aria-hidden="true">${words}</div>`;

  root.querySelector("[data-timeline]").innerHTML = timeline
    .map((t) => `<li><b>${t.year}</b><span>${esc(t.title)}</span></li>`)
    .join("");
}

/* ---------- 07 · cities ---------- */
export function renderCities(list) {
  list.innerHTML = cities
    .map(
      (c, i) => `
      <li class="city">
        <a class="city__link" href="/cities/${c.slug}" data-cursor="Explore" data-cursor-tone="lime" data-preview="${i}">
          <span class="city__n label">${pad(i + 1)}</span>
          <span class="city__name d">${esc(c.name)}</span>
          <span class="city__line">${esc(c.line)}</span>
          <span class="city__count label"><b>${c.count}</b><span class="city__unit"> projects</span></span>
        </a>
      </li>`
    )
    .join("");
}

/* ---------- 08 · index ---------- */
export function renderIndex(list) {
  list.innerHTML = archive
    .map(
      (p, i) => `
      <li>
        <a class="row" href="/projects/${p.slug}" data-preview="${i}" data-cursor="View" data-cursor-tone="ink" aria-label="${esc(p.name)}, ${esc(p.city)}, ${p.year}">
          <span class="row__n label">${pad(i + 1)}</span>
          <span class="row__thumb" aria-hidden="true">${imgTag(p.hero, { widths: [200, 400], sizes: "72px" })}</span>
          <span class="row__name d" title="${esc(p.name)}">${esc(p.short)}</span>
          <span class="row__city label">${esc(p.city)}</span>
          <span class="row__cat label">${esc(p.category)}</span>
          <span class="row__year label">${p.year}</span>
        </a>
      </li>`
    )
    .join("");
}

/** Preview stack for hover-image lists (index + cities). */
export function renderPreviewStack(stackEl, images, sizes) {
  stackEl.innerHTML = images
    .map((im, i) => `<div class="preview__img" data-i="${i}">${imgTag(im, { widths: [500, 800], sizes, alt: "" })}</div>`)
    .join("");
  // Previews sit hidden until hovered; fetch them eagerly only once the list is on screen.
  stackEl.querySelectorAll("img").forEach((i) => i.setAttribute("loading", "lazy"));
}

/* ---------- 09 · finale ---------- */
export function renderFinale(root) {
  const p = finale;
  root.querySelector("[data-finale-img]").innerHTML = imgTag(p.hero, {
    widths: [1000, 1600, 2400],
    sizes: "100vw",
  });
  root.querySelector("[data-finale-title]").innerHTML = p.short
    .split(" ")
    .map((w) => `<span class="line"><span>${esc(w)}</span></span>`)
    .join("");
  root.querySelector("[data-finale-tags]").innerHTML = [p.city, String(p.year), p.area, p.status]
    .map((t, i) => `<li class="tag tag--${i}">${esc(t)}</li>`)
    .join("");
  root.querySelector("[data-finale-line]").textContent = p.tagline;
  root.querySelector("[data-finale-link]").href = `/projects/${p.slug}`;
}
