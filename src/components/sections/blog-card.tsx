import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getBlogMeta } from "@/data/blog";
import type { BlogPost } from "@/types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  const { icon: Icon, gradient } = getBlogMeta(post.category);

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-white/5">
      <Link href={`/blog/${post.slug}`} className="block focus-visible:outline-none">
        <div
          className={`relative aspect-video overflow-hidden rounded-t-2xl bg-gradient-to-br ${gradient}`}
        >
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <Icon
              className="absolute inset-0 m-auto h-16 w-16 text-dark/70 transition-transform duration-300 group-hover:scale-110 dark:text-white/80"
              aria-hidden
            />
          )}
        </div>

        <div className="p-6">
          <Badge className="mb-4">{post.category}</Badge>

          <h3 className="text-lg font-semibold leading-snug text-dark transition-colors group-hover:text-primary sm:text-xl dark:text-white">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
            <span className="font-medium text-slate-700 dark:text-slate-200">{post.author}</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
