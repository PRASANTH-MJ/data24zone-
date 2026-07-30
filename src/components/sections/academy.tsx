import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ACADEMY_FEATURES } from "@/data/academy-features";
import { COURSES } from "@/data/courses";

const FEATURED_SLUGS = [
  "data-analytics",
  "data-science",
  "artificial-intelligence",
  "web-development",
  "react",
  "mobile-app-development",
  "react-native",
  "digital-marketing",
  "cloud-computing",
];

const FEATURED_COURSES = FEATURED_SLUGS.map((slug) =>
  COURSES.find((course) => course.slug === slug),
).filter((course): course is (typeof COURSES)[number] => Boolean(course));

export function Academy() {
  return (
    <section id="academy" className="relative py-24 sm:py-32">
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Data24Zone Academy"
          title="Learn Industry Ready Skills"
          gradientWord="Industry Ready"
          subtitle="Hands-on, mentor-led training across data, AI, web, and mobile — designed to get you job-ready, not just certificate-ready."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COURSES.map((course, i) => {
            const Icon = course.icon;
            return (
              <Reveal key={course.slug} delay={i * 0.06}>
                <Link href={`/academy/${course.slug}`} className="group block h-full">
                  <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/10 dark:border-white/10 dark:bg-white/5">
                    <div
                      className={`relative aspect-video overflow-hidden bg-gradient-to-br ${course.gradient}`}
                    >
                      {course.coverImage ? (
                        <Image
                          src={course.coverImage}
                          alt={course.title}
                          fill
                          sizes="(min-width: 1024px) 380px, 100vw"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <Icon className="absolute inset-0 m-auto h-12 w-12 text-white" aria-hidden />
                      )}
                      <span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {course.level}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-dark dark:text-white">
                        {course.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {ACADEMY_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <span
                  key={feature.title}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-dark shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  <Icon className="h-4 w-4 text-primary" aria-hidden />
                  {feature.title}
                </span>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Button href="/academy" size="lg">
              Explore All Courses
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
