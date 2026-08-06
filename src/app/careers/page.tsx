import type { Metadata } from "next";
import {
  Bot,
  Briefcase,
  Code2,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Data24Zone and help build the future of business technology. Explore open roles in software development, AI, automation, and training.",
  alternates: { canonical: "/careers" },
};

const WHY_ITEMS = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Work across real client projects spanning CRM, ERP, AI, and automation — and grow your skills faster than a typical single-stack role allows.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship",
    description:
      "Learn directly from senior engineers and consultants who invest in your development through code reviews, pairing, and structured feedback.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "Build with current frameworks and tools across web, mobile, data, and AI — no legacy systems holding you back.",
  },
  {
    icon: Laptop,
    title: "Flexible & Remote-Friendly",
    description:
      "We care about outcomes, not hours logged. Enjoy a flexible, remote-friendly culture built on trust and ownership.",
  },
];

const OPEN_ROLES = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    type: "Full-time",
    description:
      "Design and build web and mobile applications, custom CRM/ERP modules, and internal tools using modern JavaScript/TypeScript frameworks.",
  },
  {
    icon: Bot,
    title: "AI/ML Engineer",
    type: "Full-time",
    description:
      "Design, train, and deploy AI models and automation pipelines that power intelligent features across our products and client solutions.",
  },
  {
    icon: Briefcase,
    title: "Business Automation Consultant",
    type: "Full-time",
    description:
      "Partner with clients to map business processes and implement automation workflows that save time and reduce manual effort.",
  },
  {
    icon: GraduationCap,
    title: "Training & Placement Coordinator",
    type: "Full-time",
    description:
      "Coordinate our Academy programs end-to-end — from curriculum scheduling to mentoring students and supporting placement outcomes.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Careers at {SITE_CONFIG.name}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl dark:text-white">
                Join Our <span className="text-gradient">Team</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                We&apos;re building the future of business technology — CRM, ERP, automation, AI,
                and training that help companies and students grow. Come build it with us.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Data24Zone"
            gradientWord="Data24Zone"
            subtitle="A place to do meaningful work, learn continuously, and grow your career."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map(({ icon: Icon, title, description }) => (
              <GlassCard key={title} className="text-center sm:text-left">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white sm:mx-0">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold text-dark dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {description}
                </p>
              </GlassCard>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-light py-20 sm:py-28 dark:bg-dark/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Open Roles"
            title="Current Openings"
            gradientWord="Openings"
            subtitle="A few of the roles we're actively hiring for. All positions are remote-friendly."
          />

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {OPEN_ROLES.map(({ icon: Icon, title, type, description }) => (
              <GlassCard key={title} hover={false} className="flex flex-col">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-dark dark:text-white">{title}</h3>
                    <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wide text-primary">
                      {type}
                    </span>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {description}
                </p>
                <Button
                  href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
                    `Application: ${title}`,
                  )}`}
                  variant="outline"
                  size="sm"
                  className="mt-6 self-start"
                >
                  Apply Now
                </Button>
              </GlassCard>
            ))}
          </RevealGroup>

          <Reveal delay={0.15} className="mt-14">
            <GlassCard hover={false} className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <Rocket className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-dark dark:text-white">
                  Don&apos;t see your role?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  We&apos;re always looking for great talent — reach out anyway and tell us how
                  you&apos;d like to contribute.
                </p>
              </div>
              <Button href="/contact" size="md">
                <Users className="h-4 w-4" aria-hidden />
                Get in Touch
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
