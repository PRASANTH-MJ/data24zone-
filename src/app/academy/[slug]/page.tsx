import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  FolderKanban,
  GraduationCap,
  Quote,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Badge } from "@/components/ui/badge";
import { ToolBadge } from "@/components/ui/tool-badge";
import { Reveal } from "@/components/ui/reveal";
import { COURSES } from "@/data/courses";
import { SOFT_SKILLS } from "@/data/soft-skills";
import { getModuleWeekRange } from "@/lib/utils";

export async function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return {};

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) notFound();

  const Icon = course.icon;
  const related = COURSES.filter(
    (c) => c.slug !== course.slug && c.category === course.category,
  ).slice(0, 3);

  const enrollHref = `/contact?service=${encodeURIComponent("Academy Training")}&message=${encodeURIComponent(
    `I'd like to enroll in the "${course.title}" course. Please share the next batch dates and enrollment steps.`,
  )}`;

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page relative">
          <Reveal>
            <Link
              href="/academy"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All Courses
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.05}>
              <span
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.gradient} text-white shadow-lg`}
              >
                <Icon className="h-7 w-7" aria-hidden />
              </span>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge>{course.category}</Badge>
                <Badge>{course.level}</Badge>
                {course.duration && <Badge>{course.duration}</Badge>}
              </div>
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-dark sm:text-4xl md:text-5xl dark:text-white">
                {course.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {course.description}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href={enrollHref} size="lg">
                  Enroll Now
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Talk to an Advisor
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                style={course.coverImage ? { aspectRatio: course.coverImageRatio ?? 1 } : undefined}
                className={`relative flex w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${course.gradient} ${course.coverImage ? "" : "aspect-square"}`}
              >
                {course.coverImage ? (
                  <Image
                    src={course.coverImage}
                    alt={course.title}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <Icon className="h-20 w-20 text-white/90" aria-hidden strokeWidth={1.25} />
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-light py-20 sm:py-28 dark:bg-dark/40">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {course.learn && course.learn.length > 0 && (
              <>
                <Reveal>
                  <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                    What you&apos;ll learn
                  </h2>
                </Reveal>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {course.learn.map((item, i) => (
                    <Reveal delay={i * 0.06} key={item}>
                      <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                        <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                          <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                        </span>
                        <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {item}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>

          <Reveal delay={0.1}>
            <GlassCard hover={false} className="sticky top-24">
              <h3 className="text-lg font-semibold text-dark dark:text-white">Course details</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Duration
                    </p>
                    <p className="text-sm font-medium text-dark dark:text-white">
                      {course.duration ?? "Flexible"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Best for
                    </p>
                    <p className="text-sm font-medium text-dark dark:text-white">
                      {course.audience ?? "Motivated learners of any background"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      On completion
                    </p>
                    <p className="text-sm font-medium text-dark dark:text-white">
                      Verified certificate & placement assistance
                    </p>
                  </div>
                </li>
              </ul>
              <Button href={enrollHref} size="md" className="mt-6 w-full">
                Enroll Now
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {course.curriculum && course.curriculum.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                Course <span className="text-gradient">Curriculum</span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                A module-by-module breakdown of what you&apos;ll cover in {course.title}.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {course.curriculum.map((module, i) => {
                const weekRange = getModuleWeekRange(course.duration, course.curriculum!.length, i);
                return (
                <Reveal delay={i * 0.06} key={module.title}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <div className="flex flex-wrap items-center gap-4">
                      <span
                        className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${course.gradient} text-sm font-bold text-white`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold text-dark dark:text-white">
                        {module.title}
                      </h3>
                      {weekRange && (
                        <Badge className="ml-auto">{weekRange}</Badge>
                      )}
                    </div>
                    <ul className="mt-4 grid grid-cols-1 gap-2.5 pl-14 sm:grid-cols-2">
                      {module.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 flex-none text-primary"
                            aria-hidden
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {course.tools && course.tools.length > 0 && (
        <section className="bg-light py-20 sm:py-28 dark:bg-dark/40">
          <div className="container-page">
            <Reveal>
              <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                <Wrench className="h-6 w-6 text-primary" aria-hidden />
                Tools &amp; Technologies
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Hands-on practice with the same tools used by working professionals.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {course.tools.map((tool, i) => (
                <Reveal delay={i * 0.05} key={tool}>
                  <ToolBadge name={tool} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {course.projects && course.projects.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="container-page">
            <Reveal>
              <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                <FolderKanban className="h-6 w-6 text-primary" aria-hidden />
                Hands-on Projects
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                This is project-based learning — you&apos;ll build real, portfolio-ready work as you go,
                not just watch lectures.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {course.projects.map((project, i) => (
                <Reveal delay={i * 0.06} key={project}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                      <FolderKanban className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {project}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-8">
              <div className="flex flex-col items-start gap-4 rounded-2xl bg-gradient-brand p-6 text-white sm:flex-row sm:items-center">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/20">
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm leading-relaxed sm:text-base">
                  Every course includes a guided internship on top of your project work — so you graduate
                  with real experience, not just a certificate.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-light py-20 sm:py-28 dark:bg-dark/40">
        <div className="container-page">
          <Reveal>
            <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
              <Briefcase className="h-6 w-6 text-primary" aria-hidden />
              Communication &amp; Soft Skills
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Built into every course, alongside the technical curriculum.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOFT_SKILLS.map((skill, i) => {
              const SkillIcon = skill.icon;
              return (
                <Reveal delay={i * 0.06} key={skill.title}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                      <SkillIcon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-dark dark:text-white">
                      {skill.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {skill.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {course.reviews && course.reviews.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                Student <span className="text-gradient">Reviews</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {course.reviews.map((review, i) => (
                <Reveal delay={i * 0.06} key={review.name}>
                  <GlassCard hover={false} className="h-full">
                    <Quote className="h-6 w-6 text-primary/30" aria-hidden />
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-dark dark:text-white">
                          {review.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {review.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: review.rating }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                            aria-hidden
                          />
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                More in <span className="text-gradient">{course.category}</span>
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((item, i) => {
                const RelatedIcon = item.icon;
                return (
                  <Reveal delay={i * 0.06} key={item.slug}>
                    <Link href={`/academy/${item.slug}`} className="group block h-full">
                      <GlassCard className="flex h-full flex-col overflow-hidden p-0">
                        <div
                          className={`relative aspect-video overflow-hidden bg-gradient-to-br ${item.gradient}`}
                        >
                          {item.coverImage ? (
                            <Image
                              src={item.coverImage}
                              alt={item.title}
                              fill
                              sizes="(min-width: 1024px) 350px, 100vw"
                              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <RelatedIcon className="absolute inset-0 m-auto h-11 w-11 text-white" aria-hidden />
                          )}
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="text-base font-semibold text-dark dark:text-white">
                            {item.title}
                          </h3>
                          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark dark:text-primary-light">
                            View course
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
