import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

// The wildcard rule already allows every crawler, including AI/answer-engine
// bots. These are listed explicitly so it's clear at a glance that this site
// intentionally welcomes AI/answer-engine indexing (AEO/GEO) rather than
// leaving it to an implicit default.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
