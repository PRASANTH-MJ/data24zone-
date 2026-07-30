import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { BlogCard } from "@/components/sections/blog-card";
import { BLOG_POSTS } from "@/data/blog";

export function BlogPreview() {
  const latestPosts = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="relative py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="From the Blog"
          title="Latest Articles & Insights"
          gradientWord="Insights"
          subtitle="Practical, no-fluff writing on software, AI, automation, and data — from the team building it every day."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {latestPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button href="/blog" variant="secondary" size="lg">
            View All Articles
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
