import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TechStack } from "@/components/sections/tech-stack";

export const metadata: Metadata = {
  title: "Software Solutions",
  description:
    "Custom CRM, ERP, automation, web, mobile, dashboards, API integration, cloud and support solutions engineered by Data24Zone to help your business scale.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Our Solutions
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl dark:text-white">
                Solutions That <span className="text-gradient">Scale With You</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                From custom CRM and ERP builds to automation, AI, and cloud infrastructure — explore
                the full range of software solutions we deliver for growing businesses.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Services />

      <TechStack />
      <WhyChooseUs />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <GlassCard className="flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-16">
              <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
                Ready to build something <span className="text-gradient">great?</span>
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
