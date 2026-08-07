export interface SearchEntry {
  title: string;
  description: string;
  href: string;
  group: string;
}

export const SEARCH_INDEX: SearchEntry[] = [
  { title: "Home", description: "Data24Zone homepage", href: "/", group: "Pages" },
  { title: "Solutions", description: "Software solutions we build", href: "/solutions", group: "Pages" },
  { title: "Academy", description: "Industry-ready training programs", href: "/academy", group: "Pages" },
  { title: "Products", description: "Flowsy and upcoming products", href: "/products", group: "Pages" },
  { title: "Portfolio", description: "Projects we have delivered", href: "/portfolio", group: "Pages" },
  { title: "About", description: "Who we are and what we believe", href: "/about", group: "Pages" },
  { title: "Blog", description: "Articles on tech, AI and automation", href: "/blog", group: "Pages" },
  { title: "Contact", description: "Get in touch with our team", href: "/contact", group: "Pages" },
  { title: "Custom CRM Development", description: "Solutions", href: "/solutions/crm", group: "Services" },
  { title: "Custom ERP Development", description: "Solutions", href: "/solutions/erp", group: "Services" },
  { title: "Business Automation", description: "Solutions", href: "/solutions/automation", group: "Services" },
  { title: "Zoho Development", description: "Solutions", href: "/solutions/zoho", group: "Services" },
  { title: "Digital Marketing", description: "Solutions", href: "/solutions/digital-marketing", group: "Services" },
  { title: "Flowsy", description: "Productivity and personal growth platform", href: "/products#flowsy", group: "Products" },
  { title: "Data Analytics Course", description: "Academy", href: "/academy/data-analytics", group: "Courses" },
  { title: "Web Development Course", description: "Academy", href: "/academy/web-development", group: "Courses" },
  { title: "React Course", description: "Academy", href: "/academy/react", group: "Courses" },
  { title: "Python Course", description: "Academy", href: "/academy/python", group: "Courses" },
  { title: "Pricing", description: "Software and training plans", href: "/#pricing", group: "Pages" },
  { title: "FAQ", description: "Frequently asked questions", href: "/#faq", group: "Pages" },
];
