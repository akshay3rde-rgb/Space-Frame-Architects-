"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ArchImage from "@/components/ui/ArchImage";
import type { ProjectImage } from "@/types";
import { cn } from "@/lib/utils";

export default function EditorialCarousel({
  images,
  className,
  aspect = "aspect-[4/3] md:aspect-[16/9]",
}: {
  images: ProjectImage[];
  className?: string;
  aspect?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
  });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncs initial slide state from the embla instance once it mounts
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative", className)}>
      <div
        className="overflow-hidden no-scrollbar"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project image gallery"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") emblaApi?.scrollNext();
          if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
        }}
      >
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_88%] sm:flex-[0_0_72%] min-w-0 pr-4">
              <div className={cn("relative w-full", aspect)}>
                <ArchImage image={img} priority={i === 0} />
              </div>
              {img.caption && (
                <p className="text-eyebrow text-[0.65rem] text-charcoal/50 mt-3">{img.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <span className="text-eyebrow text-xs text-charcoal/60">
          {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous image"
            disabled={!canPrev}
            onClick={() => emblaApi?.scrollPrev()}
            className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center disabled:opacity-30 hover:bg-charcoal hover:text-ivory transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next image"
            disabled={!canNext}
            onClick={() => emblaApi?.scrollNext()}
            className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center disabled:opacity-30 hover:bg-charcoal hover:text-ivory transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div className="h-px bg-charcoal/10 mt-4 relative overflow-hidden">
        <div
          className="h-full bg-charcoal transition-[width] duration-300"
          style={{ width: `${((selected + 1) / images.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
