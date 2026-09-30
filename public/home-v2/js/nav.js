/**
 * Navigation: fixed bar whose colours follow the section underneath it,
 * a live chapter indicator with page progress, and the full-screen menu.
 */
import { view, onScroll, onResize, pageTop, clamp } from "./scroll.js";

const pad = (n) => String(n).padStart(2, "0");

export function initNav() {
  const html = document.documentElement;
  const sections = [...document.querySelectorAll("[data-chapter]")];
  const num = document.querySelector("[data-chapter-num]");
  const name = document.querySelector("[data-chapter-name]");
  const total = document.querySelector("[data-chapter-total]");
  const bar = document.querySelector("[data-nav-progress]");
  const chapter = document.querySelector(".nav__chapter");
  const nav = document.querySelector(".nav");
  if (total) total.textContent = pad(sections.length);

  let tops = [];
  let docH = 1;
  onResize(() => {
    tops = sections.map((s) => pageTop(s));
    docH = Math.max(1, document.documentElement.scrollHeight - view.vh);
  });

  const indexAt = (probe) => {
    let i = 0;
    for (let k = 0; k < tops.length; k++) if (probe >= tops[k]) i = k;
    return i;
  };

  let theme = "";
  let current = -1;
  onScroll(() => {
    // Colour: whatever is behind the bar itself.
    const t = sections[indexAt(view.y + 36)].dataset.nav || "bone";
    if (t !== theme) {
      theme = t;
      html.dataset.navTheme = t;
    }
    // Chapter: whatever holds the middle of the screen.
    const c = indexAt(view.y + view.vh * 0.5);
    if (c !== current) {
      current = c;
      num.textContent = pad(c + 1);
      name.textContent = sections[c].dataset.chapter;
      chapter.classList.remove("is-swap");
      void chapter.offsetWidth; // restart the CSS animation
      chapter.classList.add("is-swap");
    }
    bar.style.transform = `scaleX(${clamp(view.y / docH).toFixed(4)})`;

    if (Math.abs(view.dy) > 4) {
      const hide = view.dy > 0 && view.y > 160 && !html.classList.contains("menu-open");
      nav.classList.toggle("is-hidden", hide);
    }
  });
  nav.addEventListener("focusin", () => nav.classList.remove("is-hidden"));

  /* ---- menu ---- */
  const btn = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  const label = btn.querySelector("[data-menu-label]");
  const links = menu.querySelectorAll("a");

  const setOpen = (open) => {
    html.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    label.textContent = open ? "Close" : "Menu";
    menu.toggleAttribute("inert", !open);
    if (open) links[0]?.focus({ preventScroll: true });
    else btn.focus({ preventScroll: true });
  };
  menu.setAttribute("inert", "");
  btn.addEventListener("click", () => setOpen(!html.classList.contains("menu-open")));
  links.forEach((a) => a.addEventListener("click", () => html.classList.contains("menu-open") && setOpen(false)));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && html.classList.contains("menu-open")) setOpen(false);
  });
}
