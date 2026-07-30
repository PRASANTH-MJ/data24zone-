import type { Metadata } from "next";
import { GridPattern } from "@/components/ui/gradient-blobs";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/sections/stats";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { ProjectGrid } from "@/app/portfolio/project-grid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore CRMs, ERPs, dashboards, websites, mobile apps, automations, and analytics platforms Data24Zone has built for clients across industries.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <div className="container-page relative text-center">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
              Our Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-dark sm:text-5xl md:text-6xl dark:text-white">
              Software We&rsquo;ve Built for{" "}
              <span className="text-gradient">Real Businesses</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              From CRMs and ERPs to dashboards, mobile apps, and automation pipelines — here&rsquo;s
              a look at the problems we&rsquo;ve solved and the results our clients have seen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-20 sm:pb-28">
        <div className="container-page">
          <ProjectGrid items={PORTFOLIO_ITEMS} />
        </div>
      </section>

      <Stats />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <GlassCard className="mx-auto flex max-w-3xl flex-col items-center gap-6 p-10 text-center sm:p-14">
              <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                Ready to build something like this for{" "}
                <span className="text-gradient">your business</span>?
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                Tell us about your project and we&rsquo;ll show you exactly how we&rsquo;d approach
                it — no obligation, just a clear plan.
              </p>
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
