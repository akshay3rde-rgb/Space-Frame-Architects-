/**
 * Closing frame. A pinned photograph opens from a letterboxed inset to full
 * bleed while settling from a slight zoom; the title rises once it is large.
 */
import { view, onScroll, onResize, pageTop, clamp, ease } from "./scroll.js";
import { initDepth } from "./depth.js";

export function initFinale(root) {
  const frame = root.querySelector("[data-finale-frame]");
  const photo = root.querySelector("[data-finale-img]");
  initDepth(root);

  if (view.reduce) {
    root.classList.add("is-title");
    return;
  }

  let top = 0;
  let range = 1;
  let titled = false;
  onResize(() => {
    top = pageTop(root);
    range = Math.max(1, root.offsetHeight - view.vh);
  });

  onScroll(() => {
    const p = clamp((view.y - top) / range);
    const open = ease(clamp(p / 0.45));
    const a = 1 - open;
    frame.style.clipPath = `inset(${(a * 17).toFixed(2)}svh ${(a * 13).toFixed(2)}vw)`;
    photo.style.transform = `scale(${(1 + a * 0.28 + p * 0.06).toFixed(4)})`;
    const t = p > 0.3;
    if (t !== titled) {
      titled = t;
      root.classList.toggle("is-title", t);
    }
  });
}
