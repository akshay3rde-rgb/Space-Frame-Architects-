"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types";

const FALLBACK_TONES = [
  "from-sand to-sage",
  "from-clay to-peach",
  "from-dustyblue to-sand",
  "from-sage to-dustyblue",
];

function toneFor(src: string) {
  let hash = 0;
  for (let i = 0; i < src.length; i++) hash = (hash * 31 + src.charCodeAt(i)) >>> 0;
  return FALLBACK_TONES[hash % FALLBACK_TONES.length];
}

interface ArchImageProps {
  image: ProjectImage;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  imgClassName?: string;
  zoom?: boolean;
  width?: number;
  height?: number;
}

/**
 * next/image wrapper that degrades to a tonal gradient block if a hotlinked
 * placeholder photo fails to load, so a bad URL never renders as a broken icon.
 */
export default function ArchImage({
  image,
  sizes = "100vw",
  priority = false,
  fill = true,
  className,
  imgClassName,
  zoom = false,
  width,
  height,
}: ArchImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={cn(
          "relative w-full h-full bg-gradient-to-br",
          toneFor(image.src),
          className
        )}
        role="img"
        aria-label={image.alt}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", fill && "w-full h-full", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        priority={priority}
        onError={() => setErrored(true)}
        className={cn(
          "object-cover",
          zoom && "transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]",
          imgClassName
        )}
      />
    </div>
  );
}
