import { Briefcase, Clock, FileUser, MessageCircle, Presentation, Puzzle, Users } from "lucide-react";
import type { AcademyFeature } from "@/types";

export const SOFT_SKILLS: AcademyFeature[] = [
  {
    title: "Communication Skills",
    description: "Practice explaining technical work clearly to teammates, managers, and clients.",
    icon: MessageCircle,
  },
  {
    title: "Teamwork & Collaboration",
    description: "Work in small project teams using real workflows like stand-ups and code reviews.",
    icon: Users,
  },
  {
    title: "Problem Solving",
    description: "Build the habit of breaking down ambiguous problems into clear, solvable steps.",
    icon: Puzzle,
  },
  {
    title: "Time Management",
    description: "Learn to plan, prioritize, and deliver project work against realistic deadlines.",
    icon: Clock,
  },
  {
    title: "Presentation Skills",
    description: "Present your project work and results with confidence, as you would to a client.",
    icon: Presentation,
  },
  {
    title: "Resume & Profile Building",
    description: "Build a strong resume, LinkedIn profile, and project portfolio that recruiters notice.",
    icon: FileUser,
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews and portfolio reviews to get you ready for real job applications.",
    icon: Briefcase,
  },
];
