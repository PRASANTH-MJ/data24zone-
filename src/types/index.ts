import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
  coverImage?: string;
}

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseReview {
  name: string;
  role: string;
  rating: number;
  comment: string;
}

export interface Course {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  level: "Beginner" | "Intermediate" | "Advanced";
  gradient: string;
  duration?: string;
  audience?: string;
  learn?: string[];
  curriculum?: CourseModule[];
  reviews?: CourseReview[];
  tools?: string[];
  projects?: string[];
  coverImage?: string;
}

export interface AcademyFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductFeature {
  title: string;
  icon: LucideIcon;
  comingSoon?: boolean;
}

export interface UpcomingProduct {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  icon?: LucideIcon;
}

export interface TechCategory {
  category: string;
  icon: LucideIcon;
  items: TechItem[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  color: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  review: string;
  rating: number;
  image: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  price?: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export interface PricingGroup {
  groupTitle: string;
  plans: PricingPlan[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

export interface CourseEnrollmentValues {
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
}
