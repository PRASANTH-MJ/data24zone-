import { SITE_CONFIG, SOCIAL_URLS } from "@/lib/constants";
import type { BlogPost, Course, Service } from "@/types";

const ORG_ID = `${SITE_CONFIG.url}/#organization`;
const WEBSITE_ID = `${SITE_CONFIG.url}/#website`;

function absoluteUrl(path?: string) {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return `${SITE_CONFIG.url}${path}`;
}

// Parses "6 weeks" / "10 weeks" into an ISO 8601 duration ("P6W" / "P10W").
function parseDurationToIso(duration?: string) {
  if (!duration) return undefined;
  const match = duration.match(/(\d+)\s*week/i);
  return match ? `P${match[1]}W` : undefined;
}

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl(SITE_CONFIG.ogImage),
    description: SITE_CONFIG.mission,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Goundanur, Perur",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: Object.values(SOCIAL_URLS),
  };
}

export function getWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.mission,
    publisher: { "@id": ORG_ID },
  };
}

export function getRootJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [getOrganizationSchema(), getWebsiteSchema()],
  };
}

export function getCourseSchema(course: Course) {
  const ratings = course.reviews ?? [];
  const aggregateRating =
    ratings.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: Number(
            (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1),
          ),
          reviewCount: ratings.length,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined;

  const review = ratings.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.comment,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${SITE_CONFIG.url}/academy/${course.slug}`,
    image: absoluteUrl(course.coverImage),
    courseCode: course.slug,
    educationalLevel: course.level,
    provider: { "@id": ORG_ID },
    audience: course.audience
      ? { "@type": "Audience", audienceType: course.audience }
      : undefined,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "blended"],
      courseWorkload: parseDurationToIso(course.duration),
    },
    ...(aggregateRating ? { aggregateRating, review } : {}),
  };
}

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    url: `${SITE_CONFIG.url}/solutions/${service.slug}`,
    image: absoluteUrl(service.coverImage),
    provider: { "@id": ORG_ID },
    areaServed: "IN",
  };
}

export function getBlogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE_CONFIG.url}/blog/${post.slug}`,
  };
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}
