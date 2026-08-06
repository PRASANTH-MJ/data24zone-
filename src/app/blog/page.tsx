import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { BlogGrid } from "@/app/blog/blog-grid";
import { BLOG_POSTS } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and resources on software development, AI adoption, business automation, and data analytics from the Data24Zone team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                <Newspaper className="h-3.5 w-3.5" aria-hidden />
                Data24Zone Blog
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl dark:text-white">
                Insights &amp; <span className="text-gradient">Resources</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Practical, no-fluff writing on software, AI, automation, and data — from the team
                building it every day for our clients.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-page">
          <BlogGrid posts={BLOG_POSTS} />
        </div>
      </section>
    </>
  );
}
