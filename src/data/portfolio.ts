import type { PortfolioItem } from "@/types";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    slug: "retail-crm-multi-branch-distributor",
    title: "Retail CRM for a Multi-Branch Distributor",
    category: "CRM",
    description:
      "Replaced scattered spreadsheets with a unified CRM that tracks leads, orders, and branch-wise sales performance in real time.",
    technologies: ["React", "Next.js", "Supabase", "Zoho"],
    image: "/images/portfolio/retail-crm-multi-branch-distributor.jpg",
    color: "from-primary to-violet",
  },
  {
    slug: "unified-erp-manufacturing-group",
    title: "Unified ERP for a Manufacturing Group",
    category: "ERP",
    description:
      "Connected finance, inventory, and procurement across three plants into one system, cutting month-end closing time from 10 days to 3.",
    technologies: ["Next.js", "PostgreSQL", "Python", "FastAPI"],
    image: "/images/portfolio/unified-erp-manufacturing-group.jpg",
    color: "from-violet to-cyan",
  },
  {
    slug: "executive-sales-dashboard-fmcg",
    title: "Executive Sales Dashboard for an FMCG Brand",
    category: "Dashboard",
    description:
      "A live executive dashboard that pulls data from five regional ERPs, giving leadership a single view of revenue, stock, and target attainment.",
    technologies: ["Power BI", "Python", "Supabase", "SQL"],
    image: "/images/portfolio/executive-sales-dashboard-fmcg.jpg",
    color: "from-cyan to-primary",
  },
  {
    slug: "corporate-website-fintech-startup",
    title: "Corporate Website for a Fintech Startup",
    category: "Website",
    description:
      "A fast, SEO-optimized marketing site and investor portal that helped the client raise a seed round within two months of launch.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/portfolio/corporate-website-fintech-startup.jpg",
    color: "from-primary to-cyan",
  },
  {
    slug: "field-service-mobile-app",
    title: "Field Service Mobile App for a Logistics Company",
    category: "Mobile App",
    description:
      "An offline-first mobile app for field technicians to log deliveries, capture signatures, and sync data the moment connectivity returns.",
    technologies: ["React Native", "Supabase", "Node.js"],
    image: "/images/portfolio/field-service-mobile-app.jpg",
    color: "from-violet to-primary",
  },
  {
    slug: "invoice-automation-workflow",
    title: "Invoice Automation for a Professional Services Firm",
    category: "Automation",
    description:
      "Automated invoice generation, approval routing, and payment reminders, cutting manual finance work by 70% each month.",
    technologies: ["Zoho", "Python", "Power Automate"],
    image: "/images/portfolio/invoice-automation-workflow.jpg",
    color: "from-cyan to-violet",
  },
  {
    slug: "customer-churn-analytics-platform",
    title: "Customer Churn Analytics Platform for a SaaS Company",
    category: "Analytics",
    description:
      "Built a predictive analytics pipeline that flags at-risk accounts weeks in advance, helping the client reduce churn by 22%.",
    technologies: ["Python", "FastAPI", "Power BI", "PostgreSQL"],
    image: "/images/portfolio/customer-churn-analytics-platform.jpg",
    color: "from-primary to-violet",
  },
  {
    slug: "franchise-operations-portal",
    title: "Franchise Operations Portal for a Retail Chain",
    category: "Website",
    description:
      "A secure partner portal where 40+ franchise owners manage orders, view royalty statements, and access marketing assets in one place.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    image: "/images/portfolio/franchise-operations-portal.jpg",
    color: "from-violet to-cyan",
  },
];
