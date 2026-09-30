/**
 * Hover previews for lists (project index, cities).
 * A large photograph follows the pointer, swapping as rows change. Built lazily
 * on first hover, and skipped entirely on touch devices.
 */
import { view } from "./scroll.js";
import { renderPreviewStack } from "./render.js";

export function initPreview({ list, box, images, sizes }) {
  if (!view.fine) return;
  const stack = box.querySelector(".preview__stack");

  let built = false;
  let x = 0, y = 0, tx = 0, ty = 0, rot = 0, raf = 0, active = -1;

  const build = () => {
    if (built) return;
    built = true;
    renderPreviewStack(stack, images, sizes);
    // The images are hidden until hovered, so lazy-loading would never fire; fetch them now.
    stack.querySelectorAll("img").forEach((img) => img.setAttribute("loading", "eager"));
  };

  const loop = () => {
    const px = x;
    x += (tx - x) * 0.16;
    y += (ty - y) * 0.16;
    rot += (Math.max(-8, Math.min(8, (x - px) * 0.5)) - rot) * 0.2;
    box.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0) rotate(${rot.toFixed(2)}deg)`;
    const moving = Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3 || Math.abs(rot) > 0.05;
    raf = moving ? requestAnimationFrame(loop) : 0;
  };

  const set = (i) => {
    if (i === active) return;
    active = i;
    box.classList.toggle("is-on", i >= 0);
    stack.querySelectorAll(".preview__img").forEach((el, k) => el.classList.toggle("is-active", k === i));
  };

  list.addEventListener("pointerenter", build);
  list.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType === "touch") return;
      tx = e.clientX;
      ty = e.clientY;
      const row = e.target.closest("[data-preview]");
      if (active < 0) { x = tx; y = ty; }
      set(row ? Number(row.dataset.preview) : -1);
      if (!raf) raf = requestAnimationFrame(loop);
    },
    { passive: true }
  );
  list.addEventListener("pointerleave", () => set(-1));
}
