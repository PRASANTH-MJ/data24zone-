import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { GridPattern } from "@/components/ui/gradient-blobs";
import { STATS } from "@/data/stats";

export function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-dark py-20 text-white sm:py-24"
    >
      <GridPattern className="text-white" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-violet/10 to-cyan/20"
      />
      <div className="container-page relative">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal delay={i * 0.08} key={stat.label} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-white/70">{stat.label}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
