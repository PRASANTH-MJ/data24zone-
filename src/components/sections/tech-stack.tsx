import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TECH_STACK } from "@/data/tech-stack";

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Toolbox"
          title="Technology Stack We Trust"
          gradientWord="Trust"
          subtitle="Modern, proven tools chosen for reliability, performance, and long-term maintainability."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal delay={i * 0.06} key={category.category}>
                <GlassCard className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 via-violet/10 to-cyan/10 text-primary dark:text-primary-light">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-dark dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item.name}>{item.name}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
