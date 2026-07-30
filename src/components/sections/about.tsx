import { Bot, Code2, Database, GraduationCap, Lightbulb, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SITE_CONFIG } from "@/lib/constants";

interface FocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Software Development",
    description: "Custom web, mobile, CRM, and ERP applications engineered around how your business actually works.",
    icon: Code2,
  },
  {
    title: "Business Automation",
    description: "We replace repetitive manual work with reliable workflows that save hours every week.",
    icon: Workflow,
  },
  {
    title: "Artificial Intelligence",
    description: "Practical AI features — from insights to intelligent assistants — built into real products.",
    icon: Bot,
  },
  {
    title: "Data Engineering",
    description: "Clean pipelines and dashboards that turn scattered data into decisions you can trust.",
    icon: Database,
  },
  {
    title: "Training",
    description: "Industry-oriented courses that take learners from fundamentals to job-ready skills.",
    icon: GraduationCap,
  },
  {
    title: "Innovation",
    description: "We stay close to emerging tools and technologies so your roadmap never falls behind.",
    icon: Lightbulb,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Data24Zone"
          title="We're a Technology Startup Focused On What Matters"
          gradientWord="Matters"
          subtitle={SITE_CONFIG.mission}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal delay={i * 0.06} key={area.title}>
                <GlassCard className="h-full">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 via-violet/10 to-cyan/10 text-primary dark:text-primary-light">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {area.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button href="/about" variant="secondary" size="lg">
              Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
