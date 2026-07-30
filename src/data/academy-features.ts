import {
  Award,
  Briefcase,
  Building2,
  CalendarDays,
  FolderGit2,
  Handshake,
  Laptop,
  UserCheck,
  Video,
} from "lucide-react";
import type { AcademyFeature } from "@/types";

export const ACADEMY_FEATURES: AcademyFeature[] = [
  {
    title: "Live Classes",
    description: "Interactive, instructor-led sessions with real-time doubt clearing.",
    icon: Video,
  },
  {
    title: "One-to-One Mentoring",
    description: "Personalized guidance from industry mentors tailored to your goals.",
    icon: UserCheck,
  },
  {
    title: "Weekend Batches",
    description: "Flexible weekend schedules built for working professionals and students.",
    icon: CalendarDays,
  },
  {
    title: "Online Classes",
    description: "Learn from anywhere with a fully interactive virtual classroom experience.",
    icon: Laptop,
  },
  {
    title: "Offline Training",
    description: "In-person classroom training at our centers for a hands-on learning experience.",
    icon: Building2,
  },
  {
    title: "Internships",
    description: "Real-world internship opportunities to apply your skills on live projects.",
    icon: Briefcase,
  },
  {
    title: "Projects",
    description: "Build a portfolio of industry-grade projects that showcase your capabilities.",
    icon: FolderGit2,
  },
  {
    title: "Certificates",
    description: "Earn recognized certification upon successful completion of every course.",
    icon: Award,
  },
  {
    title: "Placement Assistance",
    description: "Dedicated support with resume building, interview prep, and hiring referrals.",
    icon: Handshake,
  },
];
