/**
 * Featured-projects carousel.
 * One project dominates, its neighbours peek in. Drag / swipe, arrow keys,
 * buttons, or click a neighbour. The oversized title rolls letter by letter.
 */
import { view, onResize, clamp } from "./scroll.js";

const pad = (n) => String(n).padStart(2, "0");

export function initShowcase(root) {
  const viewport = root.querySelector("[data-viewport]");
  const track = root.querySelector("[data-track]");
  const slides = [...track.children];
  const titles = [...root.querySelectorAll(".showcase__title")];
  const panels = [...root.querySelectorAll(".panel")];
  const current = root.querySelector("[data-sc-current]");
  const cta = root.querySelector("[data-sc-link]");
  const prev = root.querySelector("[data-sc-prev]");
  const next = root.querySelector("[data-sc-next]");
  const hrefs = slides.map((s) => s.querySelector("a").getAttribute("href"));
  const n = slides.length;

  let index = 0;
  let x = 0;
  let centers = [];

  const place = (animate) => {
    x = viewport.clientWidth / 2 - centers[index];
    track.style.transition = animate && !view.reduce ? "transform 1.05s var(--ease)" : "none";
    track.style.transform = `translate3d(${x}px,0,0)`;
  };

  const select = (i, animate = true) => {
    index = clamp(Math.round(i), 0, n - 1);
    slides.forEach((s, k) => {
      const d = k - index;
      if (Math.abs(d) <= 1) s.querySelector("img").loading = "eager";
      s.classList.toggle("is-active", d === 0);
      s.classList.toggle("is-near", Math.abs(d) === 1);
      s.querySelector("a").dataset.cursor = d === 0 ? "View project →" : d < 0 ? "← Previous" : "Next →";
    });
    titles.forEach((t, k) => {
      t.classList.toggle("is-active", k === index);
      t.classList.toggle("is-past", k < index);
    });
    panels.forEach((p, k) => p.classList.toggle("is-active", k === index));
    current.textContent = pad(index + 1);
    cta.href = hrefs[index];
    prev.disabled = index === 0;
    next.disabled = index === n - 1;
    place(animate);
  };

  onResize(() => {
    // Titles run big, but never past the screen: shrink only the ones that would overflow.
    titles.forEach((t) => {
      t.style.fontSize = "";
      const avail = view.vw - t.offsetLeft * 2;
      const ratio = Math.min(1, avail / t.scrollWidth);
      if (ratio < 1) t.style.fontSize = `calc(var(--t) * ${ratio.toFixed(3)})`;
    });
    centers = slides.map((s) => s.offsetLeft + s.offsetWidth / 2);
    select(index, false);
  });

  /* ---- drag / swipe ---- */
  let down = false, dragging = false, startX = 0, startTx = 0, t0 = 0, moved = 0;

  viewport.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    down = true;
    dragging = false;
    moved = 0;
    startX = e.clientX;
    startTx = x;
    t0 = performance.now();
  });

  viewport.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    moved = Math.max(moved, Math.abs(dx));
    if (!dragging && moved > 6) {
      dragging = true;
      viewport.setPointerCapture(e.pointerId);
      viewport.classList.add("is-dragging");
      track.style.transition = "none";
    }
    if (dragging) track.style.transform = `translate3d(${startTx + dx}px,0,0)`;
  });

  const release = (e) => {
    if (!down) return;
    down = false;
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    const dx = e.clientX - startX;
    const v = dx / Math.max(1, performance.now() - t0);
    if (dx < -60 || v < -0.45) select(index + 1);
    else if (dx > 60 || v > 0.45) select(index - 1);
    else select(index);
  };
  viewport.addEventListener("pointerup", release);
  viewport.addEventListener("pointercancel", release);

  // Clicking a peeking neighbour brings it forward instead of navigating.
  viewport.addEventListener(
    "click",
    (e) => {
      if (moved > 6) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const slide = e.target.closest(".slide");
      if (slide && Number(slide.dataset.index) !== index) {
        e.preventDefault();
        select(Number(slide.dataset.index));
      }
    },
    true
  );

  // Tabbing into an off-centre slide should bring it forward, too.
  viewport.addEventListener("focusin", (e) => {
    const slide = e.target.closest(".slide");
    if (slide && Number(slide.dataset.index) !== index) select(Number(slide.dataset.index));
  });

  prev.addEventListener("click", () => select(index - 1));
  next.addEventListener("click", () => select(index + 1));
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { select(index + 1); e.preventDefault(); }
    if (e.key === "ArrowLeft") { select(index - 1); e.preventDefault(); }
  });

  select(0, false);
}
