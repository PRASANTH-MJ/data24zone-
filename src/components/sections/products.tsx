import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  LIFEOS_DESCRIPTION,
  LIFEOS_TEASER_FEATURES,
  UPCOMING_PRODUCTS,
} from "@/data/products";

const FLOATING_FEATURE_CARDS = [
  { title: "Habit Tracker", position: "left-[4%] top-[10%]" },
  { title: "Finance Tracker", position: "right-[2%] top-[42%]" },
  { title: "Goal Tracking", position: "left-[8%] bottom-[8%]" },
];

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Products"
          title="Building Products That Matter"
          gradientWord="Matter"
          subtitle="Beyond client work, we build our own software — starting with LifeOS, our flagship personal productivity app, with an entire suite of business tools on the way."
        />

        {/* Featured LifeOS showcase */}
        <Reveal delay={0.1} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/60 p-1 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="relative overflow-hidden rounded-[1.35rem] p-8 sm:p-12">
              <GradientBlobs className="-z-10 opacity-70" />
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Copy column */}
                <div>
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                    <Rocket className="h-3.5 w-3.5" aria-hidden />
                    Flagship Product
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl md:text-4xl dark:text-white">
                    Life<span className="text-gradient">OS</span>
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                    {LIFEOS_DESCRIPTION}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {LIFEOS_TEASER_FEATURES.map(({ title, icon: Icon, comingSoon }) => (
                      <span
                        key={title}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-2 text-sm font-medium text-dark dark:border-white/10 dark:bg-white/5 dark:text-white"
                      >
                        <Icon className="h-4 w-4 text-primary" aria-hidden />
                        {title}
                        {comingSoon && (
                          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                            soon
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Button href="/products#lifeos" size="lg">
                      Explore LifeOS
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                {/* Decorative app preview column */}
                <div className="relative hidden min-h-[22rem] lg:block">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-72 w-72 items-center justify-center rounded-[2.5rem] bg-gradient-brand shadow-2xl shadow-primary/30">
                      <div className="absolute inset-3 rounded-[2rem] border border-white/20" />
                      <Sparkles className="h-20 w-20 text-white/90" aria-hidden />
                    </div>
                  </div>

                  {FLOATING_FEATURE_CARDS.map(({ title, position }, i) => {
                    const feature = LIFEOS_TEASER_FEATURES[i];
                    if (!feature) return null;
                    const Icon = feature.icon;
                    return (
                      <div
                        key={title}
                        className={`animate-float pointer-events-none absolute ${position}`}
                        style={{ animationDelay: `${i * 0.7}s` }}
                      >
                        <GlassCard className="flex items-center gap-3 px-4 py-3" hover={false}>
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
                            <Icon className="h-4.5 w-4.5" aria-hidden />
                          </span>
                          <span className="text-sm font-medium text-dark dark:text-white">
                            {title}
                          </span>
                        </GlassCard>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Upcoming products row */}
        <div id="upcoming" className="mt-20">
          <Reveal>
            <h3 className="text-xl font-bold tracking-tight text-dark sm:text-2xl dark:text-white">
              Upcoming Products
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              We&rsquo;re building a suite of business software to power schools, gyms, teams,
              warehouses, restaurants, and hospitals.
            </p>
          </Reveal>

          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
            {UPCOMING_PRODUCTS.map(({ name, description, icon: Icon }, i) => (
              <Reveal key={name} delay={i * 0.05} className="min-w-[16rem] snap-start sm:min-w-0">
                <GlassCard className="h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/15">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <Badge>Coming Soon</Badge>
                  </div>
                  <h4 className="text-base font-semibold text-dark dark:text-white">{name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
