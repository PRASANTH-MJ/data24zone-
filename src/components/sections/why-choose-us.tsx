import {
  Award,
  Bot,
  Cpu,
  DollarSign,
  Headset,
  Layers,
  Users,
  Zap,
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import type { WhyChooseUsItem } from "@/types";

const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Experienced Developers",
    description: "A senior team that has shipped production software across CRM, ERP, and web platforms.",
    icon: Users,
  },
  {
    title: "AI Powered Solutions",
    description: "We bake practical AI features into your product, not just bolt them on as an afterthought.",
    icon: Bot,
  },
  {
    title: "Affordable Pricing",
    description: "Transparent, value-driven pricing that fits growing businesses without cutting corners.",
    icon: DollarSign,
  },
  {
    title: "Fast Delivery",
    description: "Agile sprints and clear milestones keep your project moving from kickoff to launch.",
    icon: Zap,
  },
  {
    title: "Scalable Architecture",
    description: "Every system we build is designed to grow with your user base, not buckle under it.",
    icon: Layers,
  },
  {
    title: "Modern Technologies",
    description: "We use current, battle-tested frameworks and tools — never outdated stacks.",
    icon: Cpu,
  },
  {
    title: "Industry Experts",
    description: "Deep domain knowledge across sales, operations, finance, and data-driven industries.",
    icon: Award,
  },
  {
    title: "Dedicated Support",
    description: "A responsive team that stays with you well after go-live, not just through delivery.",
    icon: Headset,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-light py-20 sm:py-28 dark:bg-dark/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Data24Zone"
          title="Why Businesses Choose Us"
          gradientWord="Choose"
          subtitle="A team built to deliver software that actually moves the business forward."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal delay={i * 0.05} key={item.title}>
                <GlassCard className="h-full text-center sm:text-left">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-brand text-white sm:mx-0">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-dark dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
