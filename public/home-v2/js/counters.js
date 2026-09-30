/** Numbers count up the first time they scroll into view. */
import { view } from "./scroll.js";

export function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (view.reduce || !("IntersectionObserver" in window)) return;

  const run = (el) => {
    const end = Number(el.dataset.count);
    const t0 = performance.now();
    const dur = 1400;
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - t, 4)));
      if (t < 1) requestAnimationFrame(step);
    };
    el.textContent = "0";
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        run(e.target);
        io.unobserve(e.target);
      });
    },
    { threshold: 0.6 }
  );
  els.forEach((el) => io.observe(el));
}
