/**
 * Image → colour transition.
 * A pinned full-bleed photograph is flooded by a yellow disc that grows with
 * scroll (a transform-only effect). Once the colour has taken over, the list of
 * cities fades in on top of it, and the navigation flips to dark ink.
 */
import { view, onScroll, onResize, pageTop, clamp, ease } from "./scroll.js";

export function initSweep(root) {
  const disc = root.querySelector("[data-sweep-disc]");
  const photo = root.querySelector("[data-sweep-photo]");
  const list = root.querySelector("[data-sweep-list]");
  const hint = root.querySelector("[data-sweep-hint]");
  const heads = root.querySelectorAll(".sweep__title, .sweep__kicker");

  let top = 0;
  let range = 1;
  let coverAt = 0.7; // disc scale at which it reaches the far top corners
  let inkAt = 0.6; // disc scale at which the navigation bar sits on colour

  onResize(() => {
    top = pageTop(root);
    range = Math.max(1, root.offsetHeight - view.vh);
    const reach = 1.1 * Math.max(view.vw, view.vh); // disc radius at scale 1
    coverAt = Math.hypot(view.vw / 2, view.vh) / reach;
    inkAt = Math.hypot(view.vw / 2, view.vh * 0.94) / reach;
  });

  let ready = false;
  let ink = false;
  let headInk = false;

  onScroll(() => {
    const p = clamp((view.y - top) / range);
    // Disc: 0 → covers the screen by p ≈ 0.55, then holds.
    const s = ease(clamp(p / 0.55)) * (coverAt * 1.02);
    disc.style.transform = `scale(${s.toFixed(4)})`;
    photo.style.transform = `translate3d(0,0,0) scale(${(1.22 - 0.22 * clamp(p * 1.4)).toFixed(4)})`;

    const c = clamp((p - 0.42) / 0.22);
    list.style.opacity = c.toFixed(3);
    list.style.transform = `translate3d(0,${((1 - c) * 6).toFixed(2)}vh,0)`;
    if (hint) hint.style.opacity = (1 - clamp(p / 0.15)).toFixed(3);

    const nowReady = c > 0.9;
    if (nowReady !== ready) {
      ready = nowReady;
      root.classList.toggle("is-ready", ready);
    }
    const nowHeadInk = s > coverAt * 0.9;
    if (nowHeadInk !== headInk) {
      headInk = nowHeadInk;
      heads.forEach((h) => h.classList.toggle("is-ink", headInk));
    }
    const nowInk = s > inkAt;
    if (nowInk !== ink) {
      ink = nowInk;
      root.dataset.nav = ink ? "ink" : "bone";
    }
  });
}
