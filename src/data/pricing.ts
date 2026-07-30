import type { PricingGroup } from "@/types";

export const PRICING_GROUPS: PricingGroup[] = [
  {
    groupTitle: "Software Packages",
    plans: [
      {
        name: "Starter",
        price: "₹24,999",
        period: "project",
        description: "A focused build for founders and small teams who need a single tool or MVP shipped fast.",
        features: [
          "One core module (CRM, booking, or internal tool)",
          "Responsive web app with admin dashboard",
          "Up to 2 third-party integrations",
          "Basic analytics & reporting",
          "30 days of post-launch support",
        ],
        ctaLabel: "Contact Us",
      },
      {
        name: "Growth",
        price: "₹79,999",
        period: "project",
        description: "A full CRM/ERP module built around your workflows, with the integrations and automation to scale.",
        features: [
          "Full CRM or ERP module tailored to your process",
          "Workflow automation across sales, ops, or support",
          "Unlimited third-party & API integrations",
          "Custom dashboards with real-time data",
          "Role-based access & team onboarding",
          "90 days of priority support and tuning",
        ],
        highlighted: true,
        ctaLabel: "Contact Us",
      },
      {
        name: "Enterprise",
        price: "₹1,99,999",
        period: "project",
        description: "A fully custom platform with a dedicated team and guaranteed response times for mission-critical operations.",
        features: [
          "End-to-end custom platform (web, mobile, cloud)",
          "AI-powered features and predictive analytics",
          "Dedicated development & support team",
          "Enterprise security, audit logs & compliance support",
          "Custom SLA with guaranteed response times",
          "Quarterly roadmap reviews and scaling support",
        ],
        ctaLabel: "Contact Us",
      },
    ],
  },
  {
    groupTitle: "Training Plans",
    plans: [
      {
        name: "Self Learning",
        price: "₹1,999",
        period: "course",
        description: "Learn at your own pace with structured recorded content and a supportive peer community.",
        features: [
          "Full recorded video curriculum",
          "Downloadable resources & practice datasets",
          "Access to private learner community",
          "Lifetime access to course updates",
        ],
        ctaLabel: "Contact Us",
      },
      {
        name: "Online Live",
        price: "₹4,999",
        period: "course",
        description: "Instructor-led live sessions with real projects, doubt-clearing, and a certificate on completion.",
        features: [
          "Live interactive classes with industry mentors",
          "Hands-on capstone projects",
          "Weekly doubt-clearing & code review sessions",
          "Verified certificate of completion",
          "Recordings included for revision",
        ],
        highlighted: true,
        ctaLabel: "Contact Us",
      },
      {
        name: "Offline",
        price: "₹6,999",
        period: "course",
        description: "In-person classroom training for learners who want hands-on guidance and campus-style support.",
        features: [
          "In-person classroom sessions",
          "Lab access and pair-programming support",
          "Resume building & interview preparation",
          "Placement assistance with partner companies",
        ],
        ctaLabel: "Contact Us",
      },
      {
        name: "One-to-One Mentoring",
        price: "₹9,999",
        period: "month",
        description: "A personalized curriculum with direct mentor access, built around your goals and schedule.",
        features: [
          "Curriculum personalized to your skill level & goals",
          "Direct 1:1 access to a dedicated mentor",
          "Fully flexible scheduling",
          "Career and project-portfolio guidance",
        ],
        ctaLabel: "Contact Us",
      },
    ],
  },
];
