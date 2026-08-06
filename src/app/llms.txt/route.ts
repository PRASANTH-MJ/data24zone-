import { SITE_CONFIG } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { COURSES } from "@/data/courses";
import { BLOG_POSTS } from "@/data/blog";

// llms.txt: a plain-text, markdown-formatted summary of the site for LLMs
// and AI answer engines to consume directly, generated from the same data
// that drives the actual pages so it can't drift out of sync.
function buildLlmsTxt() {
  const lines: string[] = [];

  lines.push(`# ${SITE_CONFIG.name}`);
  lines.push("");
  lines.push(
    `> ${SITE_CONFIG.tagline}. ${SITE_CONFIG.name} builds custom software — CRM, ERP, business automation, AI features, and web/mobile apps — and runs ${SITE_CONFIG.name} Academy, industry-oriented training programs across data, AI, web, mobile, cybersecurity, and product/design.`,
  );
  lines.push("");

  lines.push("## Solutions");
  for (const service of SERVICES) {
    lines.push(`- [${service.title}](${SITE_CONFIG.url}/solutions/${service.slug}): ${service.description}`);
  }
  lines.push("");

  lines.push("## Academy Courses");
  for (const course of COURSES) {
    lines.push(`- [${course.title}](${SITE_CONFIG.url}/academy/${course.slug}): ${course.description}`);
  }
  lines.push("");

  if (BLOG_POSTS.length > 0) {
    lines.push("## Blog");
    for (const post of BLOG_POSTS) {
      lines.push(`- [${post.title}](${SITE_CONFIG.url}/blog/${post.slug}): ${post.excerpt}`);
    }
    lines.push("");
  }

  lines.push("## Company");
  lines.push(`- [About](${SITE_CONFIG.url}/about)`);
  lines.push(`- [Portfolio](${SITE_CONFIG.url}/portfolio)`);
  lines.push(`- [Contact](${SITE_CONFIG.url}/contact): ${SITE_CONFIG.email} · ${SITE_CONFIG.phone} · ${SITE_CONFIG.address}`);
  lines.push("");

  return lines.join("\n");
}

export async function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
