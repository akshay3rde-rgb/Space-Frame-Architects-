"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- closes the menu on route change, not a render loop
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Only pages that open on a full-bleed dark/image hero can support a
  // transparent header with light text before the user scrolls.
  const hasDarkHero =
    pathname === "/" ||
    pathname === "/about" ||
    /^\/projects\/[^/]+$/.test(pathname) ||
    /^\/cities\/[^/]+$/.test(pathname);

  const light = hasDarkHero && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled || menuOpen
            ? "bg-ivory/90 backdrop-blur-md border-b border-charcoal/10"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container-edit flex items-center justify-between py-4 md:py-5">
          <Link
            href="/"
            className={cn(
              "font-serif leading-[0.9] text-[1.05rem] md:text-[1.2rem] tracking-tight transition-colors duration-500",
              light ? "text-offwhite" : "text-charcoal"
            )}
          >
            <span className="block">SpaceFrame</span>
            <span className="block text-eyebrow text-[0.55rem] md:text-[0.6rem] mt-0.5 opacity-70">
              Architects
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-eyebrow text-[0.68rem] transition-colors duration-500 relative py-1",
                  light ? "text-offwhite/85 hover:text-offwhite" : "text-charcoal/70 hover:text-charcoal",
                  pathname === item.href && (light ? "text-offwhite" : "text-charcoal")
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className={cn(
                "text-eyebrow text-[0.68rem] border rounded-full px-4 py-2 transition-colors duration-500",
                light
                  ? "border-offwhite/40 text-offwhite hover:bg-offwhite hover:text-charcoal"
                  : "border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory"
              )}
            >
              Start a Conversation
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-[60] w-8 h-6 flex flex-col justify-between"
          >
            <span
              className={cn(
                "h-[1.5px] w-full transition-transform duration-300 origin-center",
                menuOpen ? "translate-y-[10.5px] rotate-45" : "",
                menuOpen ? "bg-charcoal" : light ? "bg-offwhite" : "bg-charcoal"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-full transition-opacity duration-200",
                menuOpen ? "opacity-0" : "opacity-100",
                menuOpen ? "bg-charcoal" : light ? "bg-offwhite" : "bg-charcoal"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] w-full transition-transform duration-300 origin-center",
                menuOpen ? "-translate-y-[10.5px] -rotate-45" : "",
                menuOpen ? "bg-charcoal" : light ? "bg-offwhite" : "bg-charcoal"
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-ivory flex flex-col justify-between pt-28 pb-10"
          >
            <nav className="container-edit flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="font-serif text-[13vw] leading-[1.05] text-charcoal hover:opacity-60 transition-opacity block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-edit flex flex-col sm:flex-row sm:items-end justify-between gap-6 text-charcoal/70">
              <div className="text-eyebrow text-xs">
                {site.city}, {site.country}
                <br />
                {site.email}
              </div>
              <div className="text-eyebrow text-xs">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} className="mr-4 hover:text-charcoal">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
