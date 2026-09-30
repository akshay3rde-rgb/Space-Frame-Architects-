/**
 * Depth on scroll. [data-speed="0.12"] drifts against the scroll direction.
 * Positions are measured once (and on resize) from the element's parent, so a
 * frame only does arithmetic and writes one custom property.
 */
import { view, onScroll, onResize } from "./scroll.js";

export function initParallax() {
  if (view.reduce) return;
  const items = [...document.querySelectorAll("[data-speed]")].map((el) => ({
    el,
    speed: parseFloat(el.dataset.speed) || 0,
    mid: 0,
    span: 0,
    prev: null,
  }));
  if (!items.length) return;

  onResize(() => {
    for (const it of items) {
      const r = it.el.parentElement.getBoundingClientRect();
      it.mid = r.top + window.scrollY + r.height / 2;
      it.span = r.height / 2 + view.vh;
    }
  });

  onScroll(() => {
    const center = view.y + view.vh / 2;
    for (const it of items) {
      const off = it.mid - center;
      if (Math.abs(off) > it.span) continue;
      const py = Math.round(-off * it.speed * 10) / 10;
      if (py !== it.prev) {
        it.el.style.setProperty("--py", `${py}px`);
        it.prev = py;
      }
    }
  });
}
