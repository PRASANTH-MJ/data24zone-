"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PortfolioCard } from "@/components/sections/portfolio-card";
import type { PortfolioItem } from "@/types";

export function ProjectGrid({ items }: { items: PortfolioItem[] }) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)));
    return ["All", ...unique];
  }, [items]);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category
                ? "border-transparent bg-gradient-brand text-white shadow-lg shadow-primary/25"
                : "border-slate-200 bg-transparent text-slate-600 hover:border-primary hover:text-primary dark:border-white/10 dark:text-slate-300 dark:hover:text-primary-light",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, i) => (
          <Reveal delay={(i % 6) * 0.06} key={item.slug} className="h-full">
            <PortfolioCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
