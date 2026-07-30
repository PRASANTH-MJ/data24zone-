import {
  Boxes,
  Code2,
  Cloud,
  GraduationCap,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  Megaphone,
  Plug,
  Repeat,
  Rocket,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Custom CRM Development",
        href: "/solutions/crm",
        description: "Tailored CRM systems built around your sales process",
        icon: LayoutDashboard,
      },
      {
        label: "Custom ERP Development",
        href: "/solutions/erp",
        description: "Unify operations, finance, and inventory in one system",
        icon: Boxes,
      },
      {
        label: "Business Automation",
        href: "/solutions/automation",
        description: "Automate repetitive workflows and save hours weekly",
        icon: Workflow,
      },
      {
        label: "Zoho Development",
        href: "/solutions/zoho",
        description: "Custom Zoho apps, workflows, and integrations",
        icon: Repeat,
      },
      {
        label: "Web Application Development",
        href: "/solutions/web",
        description: "Fast, scalable web apps with modern stacks",
        icon: Code2,
      },
      {
        label: "Mobile App Development",
        href: "/solutions/mobile",
        description: "Native-quality apps for iOS and Android",
        icon: Smartphone,
      },
      {
        label: "Dashboard & BI Solutions",
        href: "/solutions/dashboard",
        description: "Turn raw data into decisions with live dashboards",
        icon: LineChart,
      },
      {
        label: "API Integration",
        href: "/solutions/api-integration",
        description: "Connect the tools your business already relies on",
        icon: Plug,
      },
      {
        label: "Cloud Applications",
        href: "/solutions/cloud",
        description: "Deploy and scale reliably on the cloud",
        icon: Cloud,
      },
      {
        label: "Maintenance & Support",
        href: "/solutions/support",
        description: "Ongoing updates, monitoring, and dedicated support",
        icon: LifeBuoy,
      },
      {
        label: "Digital Marketing",
        href: "/solutions/digital-marketing",
        description: "SEO, social, and paid campaigns that drive leads",
        icon: Megaphone,
      },
    ],
  },
  {
    label: "Academy",
    href: "/academy",
    children: [
      {
        label: "Data Analytics & Science",
        href: "/academy#data",
        description: "Python, SQL, Power BI, Excel and more",
        icon: LineChart,
      },
      {
        label: "AI & Machine Learning",
        href: "/academy#ai",
        description: "Hands-on AI/ML with real projects",
        icon: Sparkles,
      },
      {
        label: "Web Development",
        href: "/academy#web",
        description: "Frontend, backend, and full stack tracks",
        icon: Code2,
      },
      {
        label: "Mobile Development",
        href: "/academy#mobile",
        description: "React Native and Flutter courses",
        icon: Smartphone,
      },
      {
        label: "Career Programs",
        href: "/academy#career",
        description: "Internships, projects and placement assistance",
        icon: GraduationCap,
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "LifeOS",
        href: "/products#lifeos",
        description: "All-in-one productivity and personal growth platform",
        icon: Rocket,
      },
      {
        label: "School ERP",
        href: "/products#upcoming",
        description: "Coming soon",
        icon: Boxes,
      },
      {
        label: "HRMS",
        href: "/products#upcoming",
        description: "Coming soon",
        icon: Repeat,
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
