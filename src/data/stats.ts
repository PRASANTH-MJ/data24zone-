import { CheckCircle2, Clock, Users, Workflow, GraduationCap } from "lucide-react";
import type { StatItem } from "@/types";

export const STATS: StatItem[] = [
  {
    label: "Projects Completed",
    value: 120,
    suffix: "+",
    icon: CheckCircle2,
  },
  {
    label: "Happy Clients",
    value: 85,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Students Trained",
    value: 950,
    suffix: "+",
    icon: GraduationCap,
  },
  {
    label: "Automation Workflows Built",
    value: 300,
    suffix: "+",
    icon: Workflow,
  },
  {
    label: "Hours Saved",
    value: 50,
    suffix: "K+ Hrs",
    icon: Clock,
  },
];
