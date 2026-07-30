"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SITE_CONFIG, SOCIAL_URLS } from "@/lib/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";

const FOOTER_LINKS = {
  Services: [
    { label: "Custom CRM Development", href: "/solutions/crm" },
    { label: "Custom ERP Development", href: "/solutions/erp" },
    { label: "Business Automation", href: "/solutions/automation" },
    { label: "Zoho Development", href: "/solutions/zoho" },
    { label: "Web Application Development", href: "/solutions/web" },
    { label: "Mobile App Development", href: "/solutions/mobile" },
    { label: "Digital Marketing", href: "/solutions/digital-marketing" },
  ],
  Courses: [
    { label: "Data Analytics & Science", href: "/academy#data" },
    { label: "AI & Machine Learning", href: "/academy#ai" },
    { label: "Web Development", href: "/academy#web" },
    { label: "Mobile Development", href: "/academy#mobile" },
    { label: "Digital Marketing", href: "/academy" },
  ],
  Products: [
    { label: "LifeOS", href: "/products#lifeos" },
    { label: "School ERP", href: "/products#upcoming" },
    { label: "HRMS", href: "/products#upcoming" },
    { label: "Gym Management", href: "/products#upcoming" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Careers", href: "/careers" },
  ],
};

const SOCIALS = [
  { label: "LinkedIn", href: SOCIAL_URLS.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: SOCIAL_URLS.instagram, icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL_URLS.facebook, icon: FacebookIcon },
  { label: "YouTube", href: SOCIAL_URLS.youtube, icon: YoutubeIcon },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("done");
    setEmail("");
  }

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-light dark:border-white/10 dark:bg-dark">
      <div className="container-page grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <Image
              src="/logo.png"
              alt="Data24Zone"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0"
            />
            <span className="text-dark dark:text-white">
              Data<span className="text-gradient">24</span>Zone
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {SITE_CONFIG.mission}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" aria-hidden />
              <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary">
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden />
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`} className="hover:text-primary">
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{SITE_CONFIG.address}</span>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10 dark:text-slate-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-sm font-semibold text-dark dark:text-white">{title}</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary dark:text-slate-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">
          <div>
            <h3 className="text-sm font-semibold text-dark dark:text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Product updates, tech insights, and course launches — no spam.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2">
            <label htmlFor="footer-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-dark outline-none focus-visible:border-primary dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white transition-transform hover:scale-105"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
        {status === "done" && (
          <p className="container-page pb-4 text-sm text-primary" role="status">
            Thanks for subscribing! Check your inbox to confirm.
          </p>
        )}
      </div>

      <div className="border-t border-slate-200 py-6 dark:border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
