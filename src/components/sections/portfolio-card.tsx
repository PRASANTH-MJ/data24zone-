"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Boxes,
  Globe,
  LayoutDashboard,
  Smartphone,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/types";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  CRM: LayoutDashboard,
  ERP: Boxes,
  Dashboard: BarChart3,
  Website: Globe,
  "Mobile App": Smartphone,
  Automation: Workflow,
  Analytics: BarChart3,
};

function getCategoryIcon(category: string): LucideIcon {
  return CATEGORY_ICONS[category] ?? Boxes;
}

function ProjectVisual({ item, className }: { item: PortfolioItem; className?: string }) {
  const Icon = getCategoryIcon(item.category);

  if (item.image) {
    return (
      <div
        className={cn(
          "relative aspect-video overflow-hidden rounded-t-2xl bg-gradient-to-br",
          item.color,
          className,
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-video items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br",
        item.color,
        className,
      )}
    >
      <Icon className="h-14 w-14 text-white/90" strokeWidth={1.5} aria-hidden />
    </div>
  );
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <GlassCard className="flex h-full flex-col overflow-hidden p-0">
        <ProjectVisual item={item} />
        <div className="flex flex-1 flex-col p-6">
          <Badge className="w-fit">{item.category}</Badge>
          <h3 className="mt-4 text-lg font-semibold text-dark dark:text-white">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {item.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Badge key={tech} className="bg-primary/5 text-primary dark:bg-primary/10 dark:text-primary-light">
                {tech}
              </Badge>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-6 w-full"
            onClick={() => setOpen(true)}
          >
            View Details
          </Button>
        </div>
      </GlassCard>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div
            className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="glass relative w-full max-w-lg rounded-2xl p-0 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/30"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <ProjectVisual item={item} className="rounded-t-2xl rounded-b-none" />
            <div className="p-6">
              <Badge className="w-fit">{item.category}</Badge>
              <h3 id={titleId} className="mt-4 text-xl font-semibold text-dark dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Technologies Used
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <Button href="/contact" className="mt-6 w-full">
                Start a Similar Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
