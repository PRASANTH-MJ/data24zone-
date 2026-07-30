import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { MAP_EMBED_SRC, SITE_CONFIG, SOCIAL_URLS } from "@/lib/constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Data24Zone for custom CRM, ERP, automation, AI, web/mobile development or training enquiries. We'll get back to you within 24 hours.",
};

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: SITE_CONFIG.address,
    href: undefined,
  },
];

const SOCIALS = [
  { label: "LinkedIn", href: SOCIAL_URLS.linkedin, icon: LinkedinIcon },
  { label: "Twitter", href: SOCIAL_URLS.twitter, icon: TwitterIcon },
  { label: "Instagram", href: SOCIAL_URLS.instagram, icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL_URLS.facebook, icon: FacebookIcon },
  { label: "YouTube", href: SOCIAL_URLS.youtube, icon: YoutubeIcon },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Get In Touch
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl md:text-6xl dark:text-white">
                Let&apos;s Build Something <span className="text-gradient">Great Together</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Have a project in mind, a question about our services, or just want to say hello?
                Send us a message and our team will get back to you within 24 hours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
            <Reveal className="lg:col-span-3">
              <GlassCard hover={false} className="p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-dark sm:text-2xl dark:text-white">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Fill out the form below and a member of our team will reach out shortly.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.1} className="space-y-6 lg:col-span-2">
              <GlassCard hover={false}>
                <h2 className="text-lg font-semibold text-dark dark:text-white">Contact Information</h2>
                <ul className="mt-5 space-y-5">
                  {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white">
                        <Icon className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-dark hover:text-primary dark:text-white"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-dark dark:text-white">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-slate-200 pt-6 dark:border-white/10">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Follow us
                  </p>
                  <div className="flex items-center gap-2">
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
              </GlassCard>

              <GlassCard hover={false} className="bg-gradient-brand text-white">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">Chat with us on WhatsApp</h3>
                    <p className="mt-1 text-sm text-white/85">
                      Prefer instant messaging? Reach our team directly for quick queries.
                    </p>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
                    >
                      Start a chat
                    </a>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
              <iframe
                src={MAP_EMBED_SRC}
                className="h-80 w-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Data24Zone location"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
