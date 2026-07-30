import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog";
import { SERVICES } from "@/data/services";
import { COURSES } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/solutions",
    "/academy",
    "/products",
    "/portfolio",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/careers",
  ].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE_CONFIG.url}/solutions/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const courseRoutes = COURSES.map((course) => ({
    url: `${SITE_CONFIG.url}/academy/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...courseRoutes];
}
