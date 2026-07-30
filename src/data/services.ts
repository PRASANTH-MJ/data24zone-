import {
  Boxes,
  Cloud,
  Code2,
  LayoutDashboard,
  LineChart,
  Megaphone,
  Plug,
  Puzzle,
  RefreshCw,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "crm",
    title: "Custom CRM Development",
    description:
      "Purpose-built CRM systems that mirror your exact sales process, so your team tracks leads, deals, and customers without fighting generic software.",
    icon: LayoutDashboard,
    details: [
      "Custom pipelines, lead scoring, and deal stages tailored to your workflow",
      "Role-based dashboards for sales, support, and management teams",
      "Seamless migration from spreadsheets or legacy CRM tools",
      "Automated follow-ups, reminders, and customer lifecycle tracking",
    ],
  
    coverImage: "/images/portfolio/retail-crm-multi-branch-distributor.jpg",
  },
  {
    slug: "erp",
    title: "Custom ERP Development",
    description:
      "Unify finance, inventory, procurement, and operations into a single connected system that scales as your business grows.",
    icon: Boxes,
    details: [
      "Modular ERP covering finance, inventory, HR, and procurement",
      "Real-time stock and order tracking across multiple locations",
      "Custom approval chains and audit-ready financial reporting",
      "Integrates with existing accounting and payroll tools",
    ],
  
    coverImage: "/images/solutions/erp.jpg",
  },
  {
    slug: "automation",
    title: "Business Automation",
    description:
      "We identify repetitive, manual work across your operations and replace it with reliable automated workflows that run themselves.",
    icon: Workflow,
    details: [
      "Automated data entry, approvals, and document generation",
      "Trigger-based workflows across email, CRM, and internal tools",
      "Scheduled reports and notifications with zero manual effort",
      "Process audits to find the highest-impact automation opportunities",
    ],
  
    coverImage: "/images/solutions/automation.jpg",
  },
  {
    slug: "zoho",
    title: "Zoho Development",
    description:
      "Expert customization and integration across the Zoho suite — CRM, Books, Creator, and more — configured to match how your business actually runs.",
    icon: Puzzle,
    details: [
      "Custom modules, workflows, and blueprints in Zoho CRM and Creator",
      "Deluge scripting for advanced automation and validations",
      "Integration between Zoho apps and third-party systems",
      "Migration and data cleanup from other platforms into Zoho",
    ],
  
    coverImage: "/images/solutions/zoho.jpg",
  },
  {
    slug: "web",
    title: "Web Application Development",
    description:
      "Fast, responsive, and SEO-friendly web applications built on modern stacks, engineered to scale from first launch to enterprise traffic.",
    icon: Code2,
    details: [
      "React and Next.js applications with server-side rendering",
      "Secure authentication, payments, and role-based access control",
      "Performance-tuned for Core Web Vitals and fast load times",
      "API-first architecture ready for mobile and third-party clients",
    ],
  
    coverImage: "/images/solutions/web.jpg",
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    description:
      "Native-quality iOS and Android apps built for smooth performance, offline reliability, and a polished user experience.",
    icon: Smartphone,
    details: [
      "Cross-platform apps for iOS and Android from a single codebase",
      "Offline-first design with background sync",
      "Push notifications, in-app analytics, and crash reporting",
      "App Store and Play Store deployment and release management",
    ],
  
    coverImage: "/images/courses/mobile-app-development.jpg",
  },
  {
    slug: "dashboard",
    title: "Dashboard & BI Solutions",
    description:
      "Turn scattered raw data into live, decision-ready dashboards your leadership team can actually act on.",
    icon: LineChart,
    details: [
      "Real-time dashboards pulling from multiple data sources",
      "Custom KPI tracking, drill-downs, and cohort views",
      "Automated report scheduling and export to PDF or Excel",
      "Built on Power BI or fully custom analytics interfaces",
    ],
  
    coverImage: "/images/solutions/dashboard.jpg",
  },
  {
    slug: "api-integration",
    title: "API Integration",
    description:
      "Connect the tools you already use — payment gateways, CRMs, marketing platforms — into one seamless, synchronized ecosystem.",
    icon: Plug,
    details: [
      "REST and webhook integrations between internal and third-party systems",
      "Payment gateway, SMS, and email service integrations",
      "Custom middleware for data transformation and syncing",
      "Robust error handling, retries, and integration monitoring",
    ],
  
    coverImage: "/images/solutions/api-integration.jpg",
  },
  {
    slug: "cloud",
    title: "Cloud Applications",
    description:
      "Deploy and scale your applications reliably on modern cloud infrastructure, built for uptime, security, and cost efficiency.",
    icon: Cloud,
    details: [
      "Cloud architecture on AWS, Google Cloud, or Azure",
      "Auto-scaling infrastructure with load balancing",
      "CI/CD pipelines for zero-downtime deployments",
      "Cost monitoring and infrastructure security hardening",
    ],
  
    coverImage: "/images/solutions/cloud.jpg",
  },
  {
    slug: "support",
    title: "Maintenance & Support",
    description:
      "Ongoing monitoring, updates, and rapid-response support that keeps your software secure, current, and running smoothly.",
    icon: RefreshCw,
    details: [
      "Proactive monitoring and uptime alerting",
      "Regular security patches and dependency updates",
      "Priority bug fixes with guaranteed response times",
      "Ongoing feature enhancements as your business evolves",
    ],
  
    coverImage: "/images/solutions/support.jpg",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "SEO, social media, and performance marketing that gets your software, courses, and products in front of the right audience.",
    icon: Megaphone,
    details: [
      "SEO audits and on-page/technical optimization for higher rankings",
      "Social media strategy, content, and paid campaign management",
      "Google and Meta ads with conversion tracking and reporting",
      "Landing pages and funnels built to turn traffic into leads",
    ],
  
    coverImage: "/images/courses/digital-marketing.jpg",
  },
];
