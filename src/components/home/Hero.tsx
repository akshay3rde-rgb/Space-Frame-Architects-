"use client";

import { motion } from "framer-motion";
import ArchImage from "@/components/ui/ArchImage";
import type { ProjectImage } from "@/types";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Hero({ image }: { image: ProjectImage }) {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-charcoal">
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: easing }}
        className="absolute inset-0"
      >
        <ArchImage image={image} priority sizes="100vw" className="opacity-80" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

      <div className="relative h-full container-edit flex flex-col justify-between pt-28 pb-10 md:pb-14 text-offwhite">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: easing }}
          className="text-eyebrow text-[0.68rem] md:text-xs max-w-xs md:max-w-none opacity-80"
        >
          Indore, India &middot; Est. 1999
          <br className="md:hidden" /> Architecture / Interiors / Planning
        </motion.p>

        <div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.15, ease: easing }}
              className="font-serif text-[15vw] md:text-[8.5vw] leading-[0.92] tracking-tight"
            >
              Spaces that
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.28, ease: easing }}
              className="font-serif italic text-[15vw] md:text-[8.5vw] leading-[0.92] tracking-tight"
            >
              belong.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: easing }}
            className="flex items-end justify-between mt-8 md:mt-10"
          >
            <p className="max-w-[15rem] md:max-w-xs text-sm md:text-base text-offwhite/80">
              25 years of architecture, interiors and urban design across Madhya Pradesh.
            </p>
            <span className="hidden sm:block text-eyebrow text-xs opacity-70">Scroll</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
