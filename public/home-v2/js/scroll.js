/**
 * Shared scroll / resize bus.
 * One passive scroll listener and one rAF per frame feed every module, so
 * effects never fight each other and nothing reads layout inside a frame.
 */
export const view = {
  y: window.scrollY,
  dy: 0,
  vw: window.innerWidth,
  vh: window.innerHeight,
  fine: matchMedia("(hover: hover) and (pointer: fine)").matches,
  reduce: matchMedia("(prefers-reduced-motion: reduce)").matches,
};

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const pageTop = (el) => el.getBoundingClientRect().top + window.scrollY;

const scrollSubs = new Set();
const resizeSubs = new Set();
let queued = false;
let last = view.y;

function run() {
  queued = false;
  view.y = window.scrollY;
  view.dy = view.y - last;
  last = view.y;
  scrollSubs.forEach((fn) => fn(view));
}

export function request() {
  if (!queued) {
    queued = true;
    requestAnimationFrame(run);
  }
}

/** Runs `fn` on every scroll frame (and once immediately). */
export function onScroll(fn) {
  scrollSubs.add(fn);
  fn(view);
  return () => scrollSubs.delete(fn);
}

/** Runs `fn` now and whenever the viewport or document height changes. */
export function onResize(fn) {
  resizeSubs.add(fn);
  fn(view);
  return () => resizeSubs.delete(fn);
}

let resizeQueued = false;
export function refresh() {
  if (resizeQueued) return;
  resizeQueued = true;
  requestAnimationFrame(() => {
    resizeQueued = false;
    // Mobile URL-bar show/hide changes innerHeight only; ignore it to avoid layout churn.
    view.vw = window.innerWidth;
    view.vh = window.innerHeight;
    resizeSubs.forEach((fn) => fn(view));
    request();
  });
}

window.addEventListener("scroll", request, { passive: true });
window.addEventListener("resize", () => {
  if (!view.fine && window.innerWidth === view.vw) return;
  refresh();
});
if ("ResizeObserver" in window) new ResizeObserver(refresh).observe(document.body);
