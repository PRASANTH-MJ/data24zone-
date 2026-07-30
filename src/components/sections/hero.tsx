"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, LineChart, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";

const HEADLINE_LINES = ["Build Smarter.", "Automate Faster.", "Grow Bigger."];

const FLOATING_CARDS = [
  { icon: Workflow, label: "40+ Workflows Automated", position: "left-[2%] top-[18%] sm:left-[6%]" },
  { icon: Bot, label: "AI-Powered Insights", position: "right-[2%] top-[8%] sm:right-[8%]" },
  { icon: LineChart, label: "Real-time Dashboards", position: "right-[4%] bottom-[10%] sm:right-[10%]" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <GridPattern />
      <motion.div style={{ y }}>
        <GradientBlobs />
      </motion.div>

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Technology &middot; Automation &middot; AI
            </span>
          </Reveal>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-6xl md:text-7xl dark:text-white">
            {HEADLINE_LINES.map((line, i) => (
              <Reveal key={line} delay={i * 0.1} as="span" className="block">
                {i === 1 ? <span className="text-gradient">{line}</span> : line}
              </Reveal>
            ))}
          </h1>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Data24Zone helps businesses with CRM, ERP, Web Applications, Mobile Apps, AI
              Solutions, Business Automation, Data Analytics and Professional Training.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/solutions" variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </div>
          </Reveal>
        </div>

        <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0 hidden lg:block">
          {FLOATING_CARDS.map(({ icon: Icon, label, position }, i) => (
            <motion.div
              key={label}
              className={`animate-float pointer-events-auto absolute ${position}`}
              style={{ animationDelay: `${i * 0.8}s` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
            >
              <GlassCard className="flex items-center gap-3 px-4 py-3" hover={false}>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white">
                  <Icon className="h-4.5 w-4.5" aria-hidden />
                </span>
                <span className="text-sm font-medium text-dark dark:text-white">{label}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
