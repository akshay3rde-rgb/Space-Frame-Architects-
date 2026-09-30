/** Manifesto: words light up one by one as the block travels through the viewport. */
import { view, onScroll, onResize, clamp } from "./scroll.js";

export function initStatement(root) {
  const text = root.querySelector("[data-words]");
  const words = [];

  const wrap = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((tok) => {
          if (!tok) return;
          if (/^\s+$/.test(tok)) return frag.append(tok);
          const s = document.createElement("span");
          s.className = "w";
          s.textContent = tok;
          words.push(s);
          frag.append(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === Node.ELEMENT_NODE) {
        if (n.classList.contains("cap")) {
          n.classList.add("w");
          words.push(n);
        } else wrap(n);
      }
    });
  };

  const spoken = text.textContent.replace(/\s+/g, " ").trim();
  wrap(text);
  text.setAttribute("aria-label", spoken);
  text.querySelectorAll(".w").forEach((w) => w.setAttribute("aria-hidden", "true"));

  if (view.reduce) return words.forEach((w) => w.classList.add("is-lit"));

  let top = 0, height = 1, lit = 0;
  onResize(() => {
    const r = text.getBoundingClientRect();
    top = r.top + window.scrollY;
    height = r.height;
  });
  onScroll(() => {
    // Starts as the block's top reaches 85% of the screen; done a little after its bottom passes the middle.
    const p = clamp((view.y + view.vh * 0.85 - top) / (height + view.vh * 0.4));
    const next = Math.round(p * words.length);
    if (next === lit) return;
    const lo = Math.min(lit, next);
    const hi = Math.max(lit, next);
    for (let i = lo; i < hi; i++) words[i].classList.toggle("is-lit", next > lit);
    lit = next;
  });
}
