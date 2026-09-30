/**
 * Horizontal project strip.
 * Desktop: the section is tall, its inner pin is sticky, and vertical scroll is
 * converted into sideways travel. Touch / small screens / reduced motion fall
 * back to a native, swipeable, scroll-snapping row.
 */
import { view, onScroll, onResize, pageTop, clamp, refresh } from "./scroll.js";

const pad = (n) => String(n).padStart(2, "0");

export function initStrip(root, cardCount) {
  const track = root.querySelector("[data-strip-track]");
  const bar = root.querySelector("[data-strip-bar]");
  const count = root.querySelector("[data-strip-count]");
  const figs = [...track.querySelectorAll(".card__fig")];
  const mq = matchMedia("(max-width: 800px), (pointer: coarse), (prefers-reduced-motion: reduce)");

  let pinned = false;
  let top = 0;
  let travel = 0;
  let lefts = [];
  let widths = [];
  let shown = -1;

  onResize(() => {
    pinned = !mq.matches;
    root.classList.toggle("is-native", !pinned);
    if (!pinned) {
      root.style.height = "";
      track.style.transform = "";
      figs.forEach((f) => f.style.removeProperty("--sx"));
      return;
    }
    travel = Math.max(0, track.scrollWidth - view.vw);
    root.style.height = `${travel + view.vh}px`;
    top = pageTop(root);
    const origin = track.getBoundingClientRect().left;
    lefts = figs.map((f) => f.getBoundingClientRect().left - origin);
    widths = figs.map((f) => f.offsetWidth);
  });

  onScroll(() => {
    if (!pinned) return;
    const p = clamp((view.y - top) / Math.max(1, travel));
    const tx = -p * travel;
    track.style.transform = `translate3d(${tx.toFixed(1)}px,0,0)`;
    bar.style.transform = `scaleX(${p.toFixed(4)})`;

    // Photos glide a little slower than their frames.
    for (let i = 0; i < figs.length; i++) {
      const rel = (lefts[i] + tx + widths[i] / 2 - view.vw / 2) / view.vw;
      if (rel > -1.2 && rel < 1.2) figs[i].style.setProperty("--sx", `${(-rel * 9).toFixed(2)}%`);
    }

    const n = Math.min(cardCount, Math.max(1, Math.round(p * (cardCount - 1)) + 1));
    if (n !== shown) {
      shown = n;
      count.textContent = `${pad(n)} / ${pad(cardCount)}`;
    }
  });

  mq.addEventListener("change", refresh);
}
