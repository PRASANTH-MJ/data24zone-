import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/sections/portfolio-card";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

const FEATURED_SLUGS = [
  "retail-crm-multi-branch-distributor",
  "unified-erp-manufacturing-group",
  "executive-sales-dashboard-fmcg",
  "corporate-website-fintech-startup",
  "field-service-mobile-app",
  "invoice-automation-workflow",
];

const FEATURED_ITEMS = PORTFOLIO_ITEMS.filter((item) =>
  FEATURED_SLUGS.includes(item.slug),
);

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects That Deliver Results"
          gradientWord="Results"
          subtitle="A sample of the CRMs, ERPs, dashboards, and applications we've shipped for clients across industries."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_ITEMS.map((item, i) => (
            <Reveal delay={i * 0.06} key={item.slug} className="h-full">
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <Button href="/portfolio" size="lg">
            View All Projects
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
