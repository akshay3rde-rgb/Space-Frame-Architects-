/** Scroll-into-view reveals: [data-reveal] gets `.is-in` once, [data-stagger] children cascade. */
import { view } from "./scroll.js";

export function initReveal() {
  document.querySelectorAll("[data-stagger]").forEach((group) => {
    [...group.children].forEach((child, i) => child.style.setProperty("--d", `${i * 80}ms`));
  });

  const targets = [...document.querySelectorAll("[data-reveal]")];
  if (view.reduce || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-in"));
    return;
  }

  // Masked elements are fully clipped until revealed, and browsers treat a fully
  // clipped target as never intersecting — so watch their parent instead.
  const watched = new Map();
  for (const el of targets) {
    const watch = el.dataset.reveal === "mask" ? el.parentElement : el;
    if (!watched.has(watch)) watched.set(watch, []);
    watched.get(watch).push(el);
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        watched.get(entry.target).forEach((el) => el.classList.add("is-in"));
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  watched.forEach((_, watch) => io.observe(watch));
}
