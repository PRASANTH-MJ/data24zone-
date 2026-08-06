import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ACADEMY_FEATURES } from "@/data/academy-features";
import { COURSES } from "@/data/courses";
import { CourseExplorer } from "./course-explorer";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Data24Zone Academy offers industry-ready training in Data Analytics, AI & Machine Learning, Web Development, Mobile Development, Cybersecurity, Product & Design, and Digital Marketing — with live classes, mentoring, internships, and placement assistance.",
  alternates: { canonical: "/academy" },
};

export default function AcademyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                Data24Zone Academy
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl dark:text-white">
                Learn <span className="text-gradient">Industry Ready</span> Skills
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {COURSES.length} career-focused programs across data, AI, web, mobile, cybersecurity,
                and design — taught by practitioners, built around live projects, and backed by real
                placement support.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="courses" className="relative pb-24">
        <div className="container-page relative">
          <CourseExplorer />
        </div>
      </section>

      <section id="career" className="relative py-24 sm:py-32">
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Career Programs"
            title="More Than Just Classes"
            gradientWord="Just Classes"
            subtitle="Every program is backed by mentorship, real projects, and support that carries you from first lesson to first job."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACADEMY_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={i * 0.06}>
                  <GlassCard className="h-full">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-lg">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-dark dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-24 sm:pb-32">
        <div className="container-page relative">
          <Reveal>
            <GlassCard hover={false} className="mx-auto max-w-4xl px-8 py-14 text-center sm:px-16">
              <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
                Ready to Start Your <span className="text-gradient">Learning Journey</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Talk to our academy advisors to find the right program for your goals, schedule,
                and experience level.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" className="w-full sm:w-auto">
                  Enroll Now
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Talk to an Advisor
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
