"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven viewport-visibility hook used for reveal animations.
 *
 * Deliberately avoids IntersectionObserver: some browser/automation
 * environments throttle or never deliver its callbacks, which would leave
 * content permanently hidden. Scroll/resize + rAF-batched geometry checks
 * are a few percent less efficient but fire reliably everywhere, and content
 * must never depend on an animation trigger that might not come.
 */
export function useInView<T extends HTMLElement>(
  { once = true, amount = 0.25 }: { once?: boolean; amount?: number } = {}
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const check = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.height <= 0) return;
      const visibleHeight = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
      const ratio = Math.max(0, visibleHeight) / rect.height;
      const isVisible = ratio >= amount;

      if (isVisible) {
        setInView(true);
        if (once) cleanup();
      } else if (!once) {
        setInView(false);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(check);
    };

    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();

    return () => {
      cleanup();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [once, amount]);

  return { ref, inView };
}
