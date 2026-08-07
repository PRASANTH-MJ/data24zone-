import { FAQS } from "@/data/faq";
import { COURSES } from "@/data/courses";
import { SERVICES } from "@/data/services";
import { SITE_CONFIG } from "@/lib/constants";

export interface ChatLink {
  label: string;
  href: string;
}

export interface ChatAnswer {
  text: string;
  links?: ChatLink[];
}

interface KnowledgeEntry {
  titleTokens: Set<string>;
  bodyTokens: Set<string>;
  answer: ChatAnswer;
}

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "do", "does", "did",
  "i", "you", "your", "we", "our", "of", "in", "on", "for", "to", "with", "and",
  "or", "how", "what", "which", "who", "can", "could", "would", "should", "about",
  "me", "my", "please", "it", "its", "this", "that", "at", "as", "if", "so",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOPWORDS.has(word));
}

export const GREETING_ANSWER: ChatAnswer = {
  text: "Hi! I'm the Data24Zone assistant. Ask me about our courses, services, pricing, or how to get in touch — or tap a suggestion below.",
};

const COURSES_OVERVIEW_ANSWER: ChatAnswer = {
  text: "Data24Zone Academy runs 27 courses across Data & AI, Web Development, Mobile Development, Cybersecurity, Product & Design, and Digital Marketing.",
  links: [{ label: "Browse all courses", href: "/academy" }],
};

const SERVICES_OVERVIEW_ANSWER: ChatAnswer = {
  text: "We build custom CRM, ERP, automation, AI features, and web/mobile apps for businesses.",
  links: [{ label: "See all solutions", href: "/solutions" }],
};

const PRICING_ANSWER: ChatAnswer = {
  text: "Pricing depends on the project or course — software packages start around ₹24,999, and Academy course pricing varies. The fastest way to get an exact quote is to reach out directly.",
  links: [{ label: "Contact us for pricing", href: "/contact" }],
};

const CONTACT_ANSWER: ChatAnswer = {
  text: `You can reach us at ${SITE_CONFIG.email} or ${SITE_CONFIG.phone}, or message us directly on WhatsApp.`,
  links: [
    { label: "Contact page", href: "/contact" },
    { label: "Chat on WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}` },
  ],
};

const ADDRESS_ANSWER: ChatAnswer = {
  text: `We're based at ${SITE_CONFIG.address}.`,
};

const ENROLL_ANSWER: ChatAnswer = {
  text: "You can enroll in any course from its course page, or tell us which one you're interested in through our contact form and we'll guide you through the next steps.",
  links: [{ label: "Browse all courses", href: "/academy" }],
};

export const FALLBACK_ANSWER: ChatAnswer = {
  text: "I'm not totally sure about that one, but our team can help directly.",
  links: [
    { label: "Contact us", href: "/contact" },
    { label: "Chat on WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}` },
  ],
};

// Quick-reply chips resolve directly to a canned answer — no fuzzy matching,
// so they always behave predictably regardless of how the knowledge base scores.
const QUICK_REPLY_ANSWERS: Record<string, ChatAnswer> = {
  "our courses": COURSES_OVERVIEW_ANSWER,
  "our services": SERVICES_OVERVIEW_ANSWER,
  "pricing": PRICING_ANSWER,
  "contact us": CONTACT_ANSWER,
};

export const QUICK_REPLIES = ["Our courses", "Our services", "Pricing", "Contact us"];

const GREETING_PATTERN = /\b(hi|hello|hey|good morning|good afternoon|good evening|yo)\b/;

const FALLBACK_INTENTS: Array<{ pattern: RegExp; answer: ChatAnswer }> = [
  { pattern: /\b(price|pricing|cost|fee|fees|charges|how much|budget)\b/, answer: PRICING_ANSWER },
  { pattern: /\b(contact|reach|talk to|call|phone|email|whatsapp|support)\b/, answer: CONTACT_ANSWER },
  { pattern: /\b(address|location|where are you|office|based)\b/, answer: ADDRESS_ANSWER },
  { pattern: /\b(enroll|enrol|admission|join|sign up|register)\b/, answer: ENROLL_ANSWER },
  { pattern: /\b(course|courses|academy|training|learn|class|classes)\b/, answer: COURSES_OVERVIEW_ANSWER },
  { pattern: /\b(service|services|solution|solutions|build|crm|erp|automation|website|app)\b/, answer: SERVICES_OVERVIEW_ANSWER },
];

function buildKnowledgeBase(): KnowledgeEntry[] {
  const entries: KnowledgeEntry[] = [];

  for (const faq of FAQS) {
    entries.push({
      titleTokens: new Set(tokenize(faq.question)),
      bodyTokens: new Set(tokenize(faq.answer)),
      answer: { text: faq.answer },
    });
  }

  for (const course of COURSES) {
    entries.push({
      titleTokens: new Set(tokenize(`${course.title} ${course.category}`)),
      bodyTokens: new Set(tokenize(`course academy training learn ${course.description} ${course.audience ?? ""}`)),
      answer: {
        text: `${course.title}: ${course.description}`,
        links: [{ label: `View the ${course.title} course`, href: `/academy/${course.slug}` }],
      },
    });
  }

  for (const service of SERVICES) {
    entries.push({
      titleTokens: new Set(tokenize(service.title)),
      bodyTokens: new Set(tokenize(`service solution ${service.description}`)),
      answer: {
        text: `${service.title}: ${service.description}`,
        links: [{ label: `Learn more about ${service.title}`, href: `/solutions/${service.slug}` }],
      },
    });
  }

  return entries;
}

let knowledgeBase: KnowledgeEntry[] | null = null;
function getKnowledgeBase() {
  if (!knowledgeBase) knowledgeBase = buildKnowledgeBase();
  return knowledgeBase;
}

// Title-token overlaps count 3x as much as body-token overlaps, and the score
// is weighted by how much of the ENTRY's own vocabulary was matched (not just
// how much of the query), so a concise, exactly-on-topic entry (e.g. the
// "Python" course) beats a longer entry that only mentions the term in passing
// (e.g. "Data Science" mentioning Python as one of several tools).
function scoreEntry(queryTokens: string[], entry: KnowledgeEntry): number {
  const titleOverlap = queryTokens.filter((t) => entry.titleTokens.has(t)).length;
  const bodyOverlap = queryTokens.filter((t) => entry.bodyTokens.has(t)).length;
  const weightedOverlap = titleOverlap * 3 + bodyOverlap;
  if (weightedOverlap === 0) return 0;

  const recall = (titleOverlap + bodyOverlap) / queryTokens.length;
  const entrySize = entry.titleTokens.size + entry.bodyTokens.size;
  const precision = (titleOverlap + bodyOverlap) / Math.max(entrySize, 1);

  return weightedOverlap * recall * (0.5 + precision);
}

export function findBestAnswer(query: string): ChatAnswer {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return FALLBACK_ANSWER;

  const quickReply = QUICK_REPLY_ANSWERS[trimmed];
  if (quickReply) return quickReply;

  if (GREETING_PATTERN.test(trimmed) && trimmed.split(/\s+/).length <= 4) {
    return GREETING_ANSWER;
  }

  const queryTokens = tokenize(trimmed);
  if (queryTokens.length > 0) {
    let best: { answer: ChatAnswer; score: number } | null = null;

    for (const entry of getKnowledgeBase()) {
      const score = scoreEntry(queryTokens, entry);
      if (score === 0) continue;
      if (!best || score > best.score) {
        best = { answer: entry.answer, score };
      }
    }

    if (best && best.score >= 0.9) {
      return best.answer;
    }
  }

  for (const intent of FALLBACK_INTENTS) {
    if (intent.pattern.test(trimmed)) {
      return intent.answer;
    }
  }

  return FALLBACK_ANSWER;
}
