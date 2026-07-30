import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Academy } from "@/components/sections/academy";
import { Products } from "@/components/sections/products";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TechStack } from "@/components/sections/tech-stack";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQ } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Academy />
      <Products />
      <WhyChooseUs />
      <TechStack />
      <Portfolio />
      <Testimonials />
      <Stats />
      <Pricing />
      <About />
      <BlogPreview />
      <FAQ />

      <section className="relative overflow-hidden py-24">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page">
          <Reveal className="glass mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl px-8 py-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white">
              Ready to <span className="text-gradient">Build Smarter?</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Tell us about your project or team — we&apos;ll help you find the right mix of
              software, automation, and training to get there faster.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                See Our Work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
