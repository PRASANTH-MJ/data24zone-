import {
  Activity,
  Boxes,
  Brain,
  CheckSquare,
  CloudUpload,
  Crown,
  Dumbbell,
  Globe,
  HeartPulse,
  ListTodo,
  NotebookPen,
  Receipt,
  School,
  Smartphone,
  ShoppingCart,
  Smile,
  Target,
  UtensilsCrossed,
  Users,
  Wallet,
  Wind,
  BookHeart,
} from "lucide-react";
import type { ProductFeature, UpcomingProduct } from "@/types";

export const LIFEOS_FEATURES: ProductFeature[] = [
  { title: "Habit Tracker", icon: CheckSquare },
  { title: "Task Management", icon: ListTodo },
  { title: "Notes", icon: NotebookPen },
  { title: "Journal", icon: BookHeart },
  { title: "Finance Tracker", icon: Wallet },
  { title: "Expense Management", icon: Receipt },
  { title: "Shopping List", icon: ShoppingCart },
  { title: "Food Tracker", icon: UtensilsCrossed },
  { title: "Workout Tracker", icon: Dumbbell },
  { title: "Meditation", icon: Brain },
  { title: "Breathing Exercises", icon: Wind },
  { title: "Mood Tracker", icon: Smile },
  { title: "Goal Tracking", icon: Target },
  { title: "Cloud Sync", icon: CloudUpload, comingSoon: true },
  { title: "Android App", icon: Smartphone },
  { title: "Web App", icon: Globe, comingSoon: true },
  { title: "Premium Version", icon: Crown },
];

export const UPCOMING_PRODUCTS: UpcomingProduct[] = [
  {
    name: "School ERP",
    description:
      "A complete school management system covering admissions, attendance, fees, exams, and parent communication in one place.",
    icon: School,
  },
  {
    name: "Gym Management System",
    description:
      "Manage memberships, class schedules, trainers, and billing so gyms can run smoothly without the spreadsheet chaos.",
    icon: Activity,
  },
  {
    name: "HRMS",
    description:
      "Streamline hiring, payroll, attendance, and performance reviews with one system built for growing teams.",
    icon: Users,
  },
  {
    name: "Inventory Management",
    description:
      "Track stock levels, purchase orders, and warehouse movements in real time to eliminate costly stockouts.",
    icon: Boxes,
  },
  {
    name: "Restaurant POS",
    description:
      "A fast, reliable point-of-sale built for restaurants — orders, tables, kitchen tickets, and billing in one flow.",
    icon: UtensilsCrossed,
  },
  {
    name: "Hospital Management",
    description:
      "Coordinate patient records, appointments, billing, and staff scheduling across departments with ease.",
    icon: HeartPulse,
  },
];

export const LIFEOS_TAGLINE =
  "An all-in-one productivity and personal growth platform.";

export const LIFEOS_DESCRIPTION =
  "LifeOS brings your habits, tasks, notes, finances, and wellness into a single beautifully designed app — so you spend less time switching tools and more time making progress.";

// A curated, compact subset of the most compelling features for the home page teaser.
export const LIFEOS_TEASER_FEATURE_TITLES = [
  "Habit Tracker",
  "Task Management",
  "Notes",
  "Finance Tracker",
  "Workout Tracker",
  "Meditation",
  "Mood Tracker",
  "Goal Tracking",
  "Cloud Sync",
  "Premium Version",
];

export const LIFEOS_TEASER_FEATURES: ProductFeature[] = LIFEOS_FEATURES.filter((f) =>
  LIFEOS_TEASER_FEATURE_TITLES.includes(f.title),
);
