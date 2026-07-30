import type { ComponentType, SVGProps } from "react";
import {
  AwsIcon,
  Css3Icon,
  DockerIcon,
  ExcelIcon,
  FigmaIcon,
  FirebaseIcon,
  FlutterIcon,
  GitIcon,
  GoogleIcon,
  Html5Icon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  PostgresqlIcon,
  PowerBiIcon,
  PythonIcon,
  ReactIcon,
  SqlIcon,
  SupabaseIcon,
  TailwindIcon,
  TensorflowIcon,
  VercelIcon,
  VscodeIcon,
} from "@/components/ui/tool-icons";

export interface ToolMeta {
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  colorClass: string;
}

/**
 * Maps every tool name used across course `tools` lists to a visual badge:
 * a dedicated logo-style icon where we have one, otherwise a colored
 * monogram fallback so every tool still gets an icon treatment.
 */
export const TOOL_META: Record<string, ToolMeta> = {
  Python: { icon: PythonIcon, label: "Py", colorClass: "bg-[#3776AB]/10" },
  SQL: { icon: SqlIcon, label: "SQL", colorClass: "bg-[#4479A1]/10" },
  "Power BI": { icon: PowerBiIcon, label: "BI", colorClass: "bg-[#F2C811]/10" },
  Excel: { icon: ExcelIcon, label: "Xl", colorClass: "bg-[#1D6F42]/10" },
  React: { icon: ReactIcon, label: "Rct", colorClass: "bg-[#61DAFB]/10" },
  "React Native": { icon: ReactIcon, label: "RN", colorClass: "bg-[#61DAFB]/10" },
  "Next.js": { icon: NextjsIcon, label: "Next", colorClass: "bg-black/5 dark:bg-white/10" },
  JavaScript: { icon: JavaScriptIcon, label: "JS", colorClass: "bg-[#F7DF1E]/10" },
  HTML: { icon: Html5Icon, label: "HTML", colorClass: "bg-[#E44D26]/10" },
  CSS: { icon: Css3Icon, label: "CSS", colorClass: "bg-[#1572B6]/10" },
  "Node.js": { icon: NodejsIcon, label: "Node", colorClass: "bg-[#539E43]/10" },
  Git: { icon: GitIcon, label: "Git", colorClass: "bg-[#F05033]/10" },
  Docker: { icon: DockerIcon, label: "Dkr", colorClass: "bg-[#2496ED]/10" },
  AWS: { icon: AwsIcon, label: "AWS", colorClass: "bg-[#232F3E]/10" },
  Figma: { icon: FigmaIcon, label: "Fig", colorClass: "bg-[#A259FF]/10" },
  PostgreSQL: { icon: PostgresqlIcon, label: "PG", colorClass: "bg-[#336791]/10" },
  TensorFlow: { icon: TensorflowIcon, label: "TF", colorClass: "bg-[#FF6F00]/10" },
  Flutter: { icon: FlutterIcon, label: "Flt", colorClass: "bg-[#42A5F5]/10" },
  Firebase: { icon: FirebaseIcon, label: "Fb", colorClass: "bg-[#FFA000]/10" },
  "VS Code": { icon: VscodeIcon, label: "VS", colorClass: "bg-[#2489CA]/10" },
  "Tailwind CSS": { icon: TailwindIcon, label: "Tw", colorClass: "bg-[#38BDF8]/10" },
  Vercel: { icon: VercelIcon, label: "Vc", colorClass: "bg-black/5 dark:bg-white/10" },
  Supabase: { icon: SupabaseIcon, label: "Sb", colorClass: "bg-[#3ECF8E]/10" },
  "Google Ads": { icon: GoogleIcon, label: "Ads", colorClass: "bg-[#4285F4]/10" },
  "Google Analytics": { icon: GoogleIcon, label: "GA", colorClass: "bg-[#4285F4]/10" },

  // Monogram fallbacks (no dedicated illustrated icon yet)
  "Android Studio": { label: "AS", colorClass: "bg-[#3DDC84]/10" },
  DAX: { label: "DAX", colorClass: "bg-[#F2C811]/10" },
  Dart: { label: "Dt", colorClass: "bg-[#0175C2]/10" },
  DBeaver: { label: "DB", colorClass: "bg-[#8763B8]/10" },
  Expo: { label: "Exp", colorClass: "bg-black/5 dark:bg-white/10" },
  FastAPI: { label: "API", colorClass: "bg-[#009688]/10" },
  "Gemini API": { label: "Gem", colorClass: "bg-[#8E75FF]/10" },
  "GitHub Actions": { label: "GH", colorClass: "bg-black/5 dark:bg-white/10" },
  "Jupyter Notebook": { label: "Jn", colorClass: "bg-[#F37626]/10" },
  Macros: { label: "Mac", colorClass: "bg-slate-400/10" },
  "Meta Ads Manager": { label: "Meta", colorClass: "bg-[#0866FF]/10" },
  "MySQL Workbench": { label: "SQL", colorClass: "bg-[#4479A1]/10" },
  NumPy: { label: "Np", colorClass: "bg-[#4D77CF]/10" },
  "OpenAI API": { label: "AI", colorClass: "bg-black/5 dark:bg-white/10" },
  Pandas: { label: "Pd", colorClass: "bg-[#150458]/10" },
  "Pivot Tables": { label: "PT", colorClass: "bg-[#1D6F42]/10" },
  "Power Query": { label: "PQ", colorClass: "bg-[#F2C811]/10" },
  Postman: { label: "Pm", colorClass: "bg-[#FF6C37]/10" },
  PyPI: { label: "Pi", colorClass: "bg-[#3776AB]/10" },
  SEMrush: { label: "SEM", colorClass: "bg-[#FF642D]/10" },
  "Scikit-learn": { label: "skl", colorClass: "bg-[#F7931E]/10" },
  Terraform: { label: "TF", colorClass: "bg-[#7B42BC]/10" },
  Vite: { label: "Vt", colorClass: "bg-[#646CFF]/10" },
  Xcode: { label: "Xc", colorClass: "bg-[#147EFB]/10" },
};

export function getToolMeta(name: string): ToolMeta {
  return TOOL_META[name] ?? { label: name.slice(0, 3), colorClass: "bg-primary/10" };
}
