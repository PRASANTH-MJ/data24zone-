"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { BlogCard } from "@/components/sections/blog-card";
import type { BlogPost } from "@/types";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts],
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts],
  );

  const filteredPosts = useMemo(
    () =>
      activeCategory === "All"
        ? sortedPosts
        : sortedPosts.filter((post) => post.category === activeCategory),
    [sortedPosts, activeCategory],
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter articles by category"
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

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredPosts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 6) * 0.06} className="h-full">
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="mt-10 text-center text-slate-600 dark:text-slate-300">
          No articles found in this category yet.
        </p>
      )}
    </div>
  );
}
