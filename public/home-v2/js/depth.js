/** Pointer depth: publishes --mx / --my (-0.5…0.5, eased) on a container for CSS to consume. */
import { view } from "./scroll.js";

export function initDepth(root) {
  if (!root || !view.fine || view.reduce) return;
  let tx = 0, ty = 0, x = 0, y = 0, raf = 0;

  const loop = () => {
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;
    root.style.setProperty("--mx", x.toFixed(3));
    root.style.setProperty("--my", y.toFixed(3));
    raf = Math.abs(tx - x) > 0.001 || Math.abs(ty - y) > 0.001 ? requestAnimationFrame(loop) : 0;
  };

  root.addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      if (!raf) raf = requestAnimationFrame(loop);
    },
    { passive: true }
  );
}
