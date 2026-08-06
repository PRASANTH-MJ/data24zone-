import type { Metadata } from "next";
import { Award, GraduationCap, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Data24Zone is a technology startup building software, automation, and AI solutions while training the next generation of tech talent through our Academy.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Innovation First",
    description: "We stay curious about new tools and technologies, and bring only the ones that create real value into our work.",
    icon: Sparkles,
  },
  {
    title: "Client Success",
    description: "Our engagements are measured by the outcomes you get, not the features we ship.",
    icon: Award,
  },
  {
    title: "Integrity",
    description: "Transparent pricing, honest timelines, and straight answers — even when the news is a schedule slip.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Learning",
    description: "Our team and our students share the same habit: never stop upgrading skills for what's next.",
    icon: GraduationCap,
  },
];

export default function AboutPage() {
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
                About Us
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl dark:text-white">
                {SITE_CONFIG.tagline}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {SITE_CONFIG.mission}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-8">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                Our <span className="text-gradient">Story</span>
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <Reveal delay={0.05}>
                <p>
                  Data24Zone started with a simple observation: most businesses don&apos;t need more
                  software, they need the right software — built around how their teams actually
                  work. We set out to be a technology partner that combines hands-on engineering
                  with a genuine understanding of operations, sales, and support, so every system we
                  build removes friction instead of adding another dashboard nobody opens.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Today we work across six focus areas — Software Development, Business Automation,
                  Artificial Intelligence, Data Engineering, Training, and Innovation. Whether it&apos;s
                  a custom CRM for a growing sales team, a workflow that eliminates hours of manual
                  data entry, or an AI feature that surfaces insight from years of historical data,
                  our approach stays the same: understand the problem deeply, then build the simplest
                  thing that solves it well.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  We also believe technology talent should be accessible, not gate-kept. Through the
                  Data24Zone Academy, we run industry-oriented training programs that take students
                  and working professionals from fundamentals to job-ready skills — because the same
                  expertise that powers our client projects should also power someone&apos;s first
                  career break. Growing businesses and growing careers, side by side, is the mission
                  behind everything we build.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section className="bg-light py-20 sm:py-28 dark:bg-dark/40">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                Our Values
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
                What Guides Our <span className="text-gradient">Work</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal delay={i * 0.06} key={value.title}>
                  <GlassCard className="h-full text-center sm:text-left">
                    <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-brand text-white sm:mx-0">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-dark dark:text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {value.description}
                    </p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FAQ />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <GlassCard className="flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-16">
              <Heart className="h-10 w-10 text-primary dark:text-primary-light" aria-hidden />
              <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
                Let&apos;s build something <span className="text-gradient">worthwhile</span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Whether you&apos;re scoping a project or exploring a training track, we&apos;d love to
                hear what you&apos;re working toward.
              </p>
              <Button href="/contact" size="lg">
                Work With Us
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
