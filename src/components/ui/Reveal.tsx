"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useInView } from "@/lib/useInView";

const easing = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.8,
  className,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ once, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}

const lineVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0 },
  },
};

const wordVariants: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.9, ease: easing } },
};

/**
 * Staggered word-by-word reveal for display headlines.
 * Pass one string per visual line via `lines`.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delayChildren: delay }}
      variants={lineVariants}
    >
      {lines.map((line, i) => (
        <div key={i} className={`overflow-hidden ${lineClassName ?? ""}`}>
          <motion.span className="inline-block" variants={wordVariants}>
            {line}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}

export function RevealMask({
  children,
  delay = 0,
  duration = 1,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className ?? ""}`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: inView ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
      transition={{ duration, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}
