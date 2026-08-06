import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="What We Do"
          title="Software Solutions"
          gradientWord="Solutions"
          subtitle="Eleven focused disciplines that cover the full software lifecycle — from the first line of code to long-term support and growth."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal delay={i * 0.06} key={service.slug}>
                <GlassCard className="group flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-violet/10 to-cyan/10">
                    {service.coverImage ? (
                      <Image
                        src={service.coverImage}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 380px, 100vw"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <Icon className="absolute inset-0 m-auto h-12 w-12 text-primary dark:text-primary-light" aria-hidden />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-dark dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                    <Link
                      href={`/solutions/${service.slug}`}
                      className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark dark:text-primary-light dark:hover:text-white"
                    >
                      Read More<span className="sr-only"> about {service.title}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
