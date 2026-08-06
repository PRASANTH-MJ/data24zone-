"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs } from "@/components/ui/gradient-blobs";
import { cn } from "@/lib/utils";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 sm:py-28">
      <GradientBlobs />
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved By Businesses Like Yours"
          gradientWord="Loved"
          subtitle="Real feedback from the founders and operators we've partnered with to build software that actually moves the needle."
        />

        <div className="relative mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <GlassCard className="flex h-full flex-col" hover={false}>
                    <Quote
                      className="h-8 w-8 text-primary/20 dark:text-primary-light/25"
                      aria-hidden
                    />
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>
                    <div
                      className="mt-5 flex"
                      role="img"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-amber-400"
                          fill="currentColor"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                        {testimonial.image}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-dark dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous testimonial"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-dark transition-colors hover:text-primary dark:text-white dark:hover:text-primary-light"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === selectedIndex}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    i === selectedIndex
                      ? "w-6 bg-gradient-brand"
                      : "w-2.5 bg-slate-300 dark:bg-white/20",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next testimonial"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-dark transition-colors hover:text-primary dark:text-white dark:hover:text-primary-light"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
