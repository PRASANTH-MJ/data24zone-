import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { BlogCard } from "@/components/sections/blog-card";
import { BLOG_POSTS, getBlogMeta } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { icon: Icon, gradient } = getBlogMeta(post.category);

  const paragraphs = (post.content ?? post.excerpt)
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category,
  );
  const relatedPosts = [...sameCategory, ...others].slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-36">
        <div className="container-page relative">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Blog
            </Link>
          </Reveal>

          <div
            className={`relative mt-8 flex aspect-[21/9] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} sm:aspect-[3/1]`}
          >
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="100vw"
                priority
                className="object-cover object-top"
              />
            ) : (
              <Icon className="h-20 w-20 text-dark/70 sm:h-28 sm:w-28 dark:text-white/80" aria-hidden />
            )}
          </div>

          <div className="mx-auto mt-8 max-w-3xl">
            <Reveal>
              <Badge>{post.category}</Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl md:text-5xl dark:text-white">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-slate-200 py-4 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
                <span className="font-medium text-dark dark:text-white">{post.author}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden />
                  {post.readTime}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="container-page">
          <article className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-light py-20 sm:py-28 dark:bg-dark/40">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                Related Articles
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {relatedPosts.map((relatedPost, i) => (
                <Reveal key={relatedPost.slug} delay={(i % 3) * 0.08} className="h-full">
                  <BlogCard post={relatedPost} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <Reveal>
            <GlassCard className="mx-auto flex max-w-4xl flex-col items-center gap-6 p-10 text-center sm:p-14">
              <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl dark:text-white">
                Ready to put these ideas to work for your business?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Whether it&apos;s custom software, AI adoption, automation, or data analytics —
                our team can help you turn this into a working plan.
              </p>
              <Button href="/contact" size="lg">
                Talk to Our Team
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
