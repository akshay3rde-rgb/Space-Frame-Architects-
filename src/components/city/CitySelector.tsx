"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArchImage from "@/components/ui/ArchImage";
import type { CityContent } from "@/types";
import { cn } from "@/lib/utils";

export default function CitySelector({ cities }: { cities: CityContent[] }) {
  const [active, setActive] = useState(0);
  const current = cities[active];

  return (
    <div className="grid-edit items-stretch">
      <div className="col-span-4 md:col-span-3 lg:col-span-4 flex md:flex-col gap-x-6 gap-y-2 overflow-x-auto no-scrollbar md:overflow-visible">
        {cities.map((c, i) => (
          <button
            key={c.slug}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 text-left font-serif text-[9vw] sm:text-4xl md:text-[3.4vw] lg:text-6xl leading-[1.05] transition-colors duration-300 py-1",
              active === i ? "text-charcoal" : "text-charcoal/30 hover:text-charcoal/60"
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="col-span-4 md:col-span-5 lg:col-span-8 mt-8 md:mt-0">
        <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden bg-sand">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <ArchImage image={current.image} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-offwhite flex items-end justify-between gap-4">
            <p className="max-w-md text-sm md:text-base text-offwhite/90">{current.editorial}</p>
            <Link
              href={`/cities/${current.slug}`}
              className="shrink-0 text-eyebrow text-[0.65rem] border border-offwhite/40 rounded-full px-4 py-2 hover:bg-offwhite hover:text-charcoal transition-colors whitespace-nowrap"
            >
              View {current.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
