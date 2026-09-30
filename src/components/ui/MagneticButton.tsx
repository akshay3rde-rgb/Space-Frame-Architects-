"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  href,
  children,
  variant = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function onMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  }

  function onMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={cn(
          "group inline-flex items-center gap-3 rounded-full px-7 py-4 text-eyebrow text-xs transition-colors duration-300",
          variant === "dark"
            ? "bg-charcoal text-ivory hover:bg-charcoal/85"
            : "border border-offwhite/40 text-offwhite hover:bg-offwhite hover:text-charcoal",
          className
        )}
      >
        {children}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </motion.span>
  );
}
