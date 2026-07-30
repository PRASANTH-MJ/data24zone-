import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { SERVICES } from "@/data/services";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page relative">
          <Reveal>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All Solutions
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.05}>
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-violet/10 to-cyan/10 text-primary dark:text-primary-light">
                <Icon className="h-7 w-7" aria-hidden />
              </span>
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-dark sm:text-4xl md:text-5xl dark:text-white">
                {service.title}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Get a Quote
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg">
                  See Related Work
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-violet/10 to-cyan/10 lg:aspect-square">
                {service.coverImage ? (
                  <Image
                    src={service.coverImage}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-contain p-3"
                    priority
                  />
                ) : (
                  <Icon
                    className="h-20 w-20 text-primary dark:text-primary-light"
                    aria-hidden
                    strokeWidth={1.25}
                  />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {service.details && service.details.length > 0 && (
        <section className="bg-light py-20 sm:py-28 dark:bg-dark/40">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                What&apos;s included
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.details.map((detail, i) => (
                <Reveal delay={i * 0.06} key={detail}>
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {detail}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
              Other <span className="text-gradient">Solutions</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((item, i) => {
              const RelatedIcon = item.icon;
              return (
                <Reveal delay={i * 0.06} key={item.slug}>
                  <Link href={`/solutions/${item.slug}`} className="group block h-full">
                    <GlassCard className="flex h-full flex-col overflow-hidden p-0">
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-violet/10 to-cyan/10">
                        {item.coverImage ? (
                          <Image
                            src={item.coverImage}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1024px) 350px, 100vw"
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <RelatedIcon className="absolute inset-0 m-auto h-10 w-10 text-primary dark:text-primary-light" aria-hidden />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-base font-semibold text-dark dark:text-white">
                          {item.title}
                        </h3>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark dark:text-primary-light">
                          Learn more
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                        </span>
                      </div>
                    </GlassCard>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15} className="mt-16">
            <GlassCard className="flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-16">
              <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
                Ready to get started with{" "}
                <span className="text-gradient">{service.title}?</span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Tell us about your project and we&apos;ll help you scope the right solution — no
                obligation, just a clear plan forward.
              </p>
              <Button href="/contact" size="lg">
                Get Started
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
