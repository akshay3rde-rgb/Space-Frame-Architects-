/**
 * Contextual cursor. The native pointer stays everywhere except over elements
 * that opt in with data-cursor="Label"; there a soft bubble takes over and names
 * the action. Disabled entirely on touch devices.
 */
import { view } from "./scroll.js";

export function initCursor() {
  const el = document.querySelector(".cursor");
  if (!el || !view.fine) return;
  const label = el.querySelector(".cursor__label");
  document.documentElement.classList.add("has-cursor");

  let x = -100, y = -100, tx = -100, ty = -100, raf = 0, shown = false;

  const loop = () => {
    x += (tx - x) * 0.22;
    y += (ty - y) * 0.22;
    el.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
    raf = Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2 ? requestAnimationFrame(loop) : 0;
  };

  const hide = () => {
    el.classList.remove("is-on");
    shown = false;
  };

  const show = (target) => {
    const host = target.closest ? target.closest("[data-cursor]") : null;
    if (!host) return hide();
    label.textContent = host.dataset.cursor;
    const tone = host.dataset.cursorTone || (host.closest("[data-nav]")?.dataset.nav === "ink" ? "ink" : "lime");
    el.classList.toggle("is-ink", tone === "ink");
    if (!shown) { x = tx; y = ty; }
    el.classList.add("is-on");
    shown = true;
  };

  window.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType === "touch") return;
      tx = e.clientX;
      ty = e.clientY;
      show(e.target);
      if (!raf) raf = requestAnimationFrame(loop);
    },
    { passive: true }
  );
  document.addEventListener("pointerleave", hide);
  window.addEventListener("blur", hide);
}
