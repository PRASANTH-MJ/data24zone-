import { BarChart3, Bot, Database, Layers, Server, Zap } from "lucide-react";
import type { TechCategory } from "@/types";

export const TECH_STACK: TechCategory[] = [
  {
    category: "Frontend",
    icon: Layers,
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [{ name: "Python" }, { name: "FastAPI" }, { name: "Node.js" }],
  },
  {
    category: "Database",
    icon: Database,
    items: [{ name: "Supabase" }, { name: "PostgreSQL" }, { name: "SQLite" }],
  },
  {
    category: "Automation",
    icon: Zap,
    items: [{ name: "Zoho" }, { name: "Google Cloud" }, { name: "REST APIs" }],
  },
  {
    category: "AI",
    icon: Bot,
    items: [{ name: "OpenAI" }, { name: "Gemini" }, { name: "Machine Learning" }],
  },
  {
    category: "Data Analytics",
    icon: BarChart3,
    items: [
      { name: "Power BI" },
      { name: "Python" },
      { name: "Pandas" },
      { name: "NumPy" },
    ],
  },
];
