import type { Metadata } from "next";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { LIFEOS_DESCRIPTION, LIFEOS_FEATURES, UPCOMING_PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover LifeOS, Data24Zone's all-in-one productivity and personal growth platform, plus our upcoming suite of business products including School ERP, HRMS, Inventory Management, and more.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <GradientBlobs className="opacity-70" />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Products
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl dark:text-white">
              Software We <span className="text-gradient">Build for Ourselves</span> — and for
              You
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Alongside client work, we invest in our own products. LifeOS is live in
              development today, with a full suite of business tools launching soon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LifeOS full showcase */}
      <section id="lifeos" className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Flagship Product"
            title="Meet LifeOS"
            gradientWord="LifeOS"
            subtitle={LIFEOS_DESCRIPTION}
          />

          <Reveal delay={0.1} className="mt-14">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/60 p-1 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="relative overflow-hidden rounded-[1.35rem] p-8 sm:p-12">
                <GradientBlobs className="-z-10 opacity-60" />

                <div className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-primary/25">
                      <Rocket className="h-8 w-8" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-dark sm:text-2xl dark:text-white">
                        LifeOS
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        17 tools. One app. Zero clutter.
                      </p>
                    </div>
                  </div>
                  <Button href="/contact" size="lg">
                    Explore LifeOS
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {LIFEOS_FEATURES.map(({ title, icon: Icon, comingSoon }, i) => (
                    <Reveal key={title} delay={i * 0.03}>
                      <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                        <div className="flex w-full items-start justify-between">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/15">
                            <Icon className="h-5 w-5" aria-hidden />
                          </span>
                          {comingSoon && <Badge>Coming Soon</Badge>}
                        </div>
                        <span className="text-sm font-semibold text-dark dark:text-white">
                          {title}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Upcoming products */}
      <section id="upcoming" className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What's Next"
            title="Upcoming Products"
            gradientWord="Upcoming"
            subtitle="A growing suite of business software, built with the same care as LifeOS — for schools, gyms, teams, warehouses, restaurants, and hospitals."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UPCOMING_PRODUCTS.map(({ name, description, icon: Icon }, i) => (
              <Reveal key={name} delay={i * 0.06}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/15">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <Badge>Coming Soon</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-dark dark:text-white">{name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden pb-24 sm:pb-32">
        <div className="container-page">
          <Reveal>
            <GlassCard
              hover={false}
              className="flex flex-col items-center gap-6 rounded-3xl px-8 py-14 text-center sm:px-16"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Early Access
              </span>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
                Want early access to <span className="text-gradient">LifeOS</span> or our
                upcoming products?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Join our early access list and be the first to know when LifeOS and our upcoming
                business tools launch.
              </p>
              <Button href="/contact" size="lg">
                Get Early Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
