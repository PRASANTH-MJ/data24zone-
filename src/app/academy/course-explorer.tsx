"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { COURSES } from "@/data/courses";

export function CourseExplorer() {
  const courses = COURSES;
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(courses.map((course) => course.category)))],
    [courses],
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = useMemo(
    () =>
      activeCategory === "All"
        ? courses
        : courses.filter((course) => course.category === activeCategory),
    [courses, activeCategory],
  );

  return (
    <div className="relative">
      {/* Anchor targets for the global nav dropdown (Academy > Data / AI / Web / Mobile) */}
      <span id="data" className="absolute -top-28" aria-hidden />
      <span id="ai" className="absolute -top-28" aria-hidden />
      <span id="web" className="absolute -top-28" aria-hidden />
      <span id="mobile" className="absolute -top-28" aria-hidden />

      <div
        role="tablist"
        aria-label="Filter courses by category"
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300",
              activeCategory === category
                ? "border-transparent bg-gradient-brand text-white shadow-lg shadow-primary/25"
                : "border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course, i) => {
          const Icon = course.icon;
          return (
            <Reveal key={course.slug} delay={(i % 6) * 0.06}>
              <Link href={`/academy/${course.slug}`} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/10 dark:border-white/10 dark:bg-white/5">
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
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-dark dark:text-white">
                      {course.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {course.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {course.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-primary-dark dark:text-primary-light">
                        View
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <p className="mt-10 text-center text-slate-600 dark:text-slate-300">
          No courses found in this category yet.
        </p>
      )}
    </div>
  );
}
