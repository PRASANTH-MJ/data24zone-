"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PRICING_GROUPS } from "@/data/pricing";

export function Pricing() {
  const [activeGroup, setActiveGroup] = useState(0);
  const group = PRICING_GROUPS[activeGroup];

  return (
    <section id="pricing" className="bg-light py-20 sm:py-28 dark:bg-dark/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Plans"
          gradientWord="Transparent"
          subtitle="Honest INR pricing, well below typical agency and bootcamp rates — pick the track that fits and talk to us for the exact scope."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex w-fit max-w-full items-center gap-1 rounded-full border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-white/5">
            {PRICING_GROUPS.map((g, i) => (
              <button
                key={g.groupTitle}
                type="button"
                onClick={() => setActiveGroup(i)}
                aria-pressed={activeGroup === i}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 sm:px-6",
                  activeGroup === i
                    ? "bg-gradient-brand text-white shadow-lg shadow-primary/25"
                    : "text-slate-600 hover:text-dark dark:text-slate-300 dark:hover:text-white",
                )}
              >
                {g.groupTitle}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          className={cn(
            "mt-14 grid grid-cols-1 gap-6",
            group.plans.length === 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {group.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <GlassCard
                className={cn(
                  "relative flex h-full flex-col",
                  plan.highlighted &&
                    "border-primary/40 shadow-2xl shadow-primary/20 lg:-translate-y-3 dark:border-primary/40",
                )}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 border-transparent bg-gradient-brand text-white">
                    <Sparkles className="h-3 w-3" aria-hidden />
                    Most Popular
                  </Badge>
                )}

                <h3 className="text-lg font-semibold text-dark dark:text-white">{plan.name}</h3>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold tracking-tight text-dark dark:text-white">
                    {plan.price ?? "Custom"}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      / {plan.period}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {plan.description}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {plan.ctaLabel}
                </Button>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
