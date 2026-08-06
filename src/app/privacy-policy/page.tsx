import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Data24Zone's Privacy Policy to understand what information we collect, how we use it, and the choices you have regarding your data.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "July 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-40 sm:pb-16">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                <Shield className="h-3.5 w-3.5" aria-hidden />
                Legal
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl dark:text-white">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Last updated: {LAST_UPDATED}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl space-y-10">
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {SITE_CONFIG.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your
              privacy and is committed to protecting the personal information you share with us.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, use our products, or engage our services.
              By using our website or services, you agree to the practices described in this
              policy.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Information We Collect
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We collect information you provide directly to us, such as your name, email
                address, phone number, company name, and any details you include when you fill
                out a contact form, request a demo, subscribe to our newsletter, or enrol in a
                training course. We may also collect information automatically when you interact
                with our website, including your IP address, browser type, device information,
                pages visited, and time spent on our site, typically through cookies and similar
                tracking technologies. If you make a payment for our products, courses, or
                services, limited billing information may be collected and processed by our
                trusted third-party payment providers.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                How We Use Your Information
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We use the information we collect to provide, operate, and improve our services;
                respond to your enquiries and support requests; process transactions and send
                related confirmations; send administrative information, updates, and marketing
                communications (which you can opt out of at any time); personalize your
                experience on our website; monitor and analyze usage trends to improve our
                offerings; and detect, prevent, and address technical issues, fraud, or misuse of
                our services. We will only use your personal information for purposes consistent
                with those described in this policy unless we obtain your consent to do otherwise.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Cookies &amp; Tracking
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Our website uses cookies and similar tracking technologies to remember your
                preferences, understand how visitors use our site, and improve overall
                functionality. Cookies may be session-based or persistent, and may be set by us
                or by third-party analytics providers we work with. You can control or disable
                cookies through your browser settings; however, doing so may affect the
                functionality of certain parts of our website. Where required by law, we will ask
                for your consent before setting non-essential cookies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Data Sharing &amp; Third Parties
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We do not sell your personal information. We may share your information with
                trusted third-party service providers who help us operate our business, such as
                hosting providers, analytics platforms, email delivery services, and payment
                processors, all of whom are bound by confidentiality obligations. We may also
                disclose information if required to do so by law, to protect our rights and
                safety or that of our users, or in connection with a merger, acquisition, or sale
                of assets, in which case we will notify you of any change in ownership or use of
                your personal information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">Data Security</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We implement reasonable technical and organizational safeguards designed to
                protect your personal information against unauthorized access, alteration,
                disclosure, or destruction. These measures include encryption in transit, access
                controls, and regular security reviews. However, no method of transmission over
                the internet or electronic storage is completely secure, and we cannot guarantee
                absolute security of your information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">Your Rights</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Depending on your location, you may have the right to access, correct, update, or
                delete the personal information we hold about you; object to or restrict certain
                types of processing; withdraw consent where processing is based on consent; and
                request a copy of your data in a portable format. To exercise any of these rights,
                please contact us using the details below and we will respond within a reasonable
                timeframe in accordance with applicable law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Children&apos;s Privacy
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Our website and services are not directed to children under the age of 16, and we
                do not knowingly collect personal information from children. If we become aware
                that we have inadvertently collected personal information from a child without
                verified parental consent, we will take steps to delete such information as soon
                as possible.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Changes to This Policy
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices, technologies, legal requirements, or other factors. When we make
                material changes, we will update the &quot;Last updated&quot; date at the top of
                this page and, where appropriate, provide additional notice. We encourage you to
                review this policy periodically to stay informed about how we protect your
                information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">Contact Us</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                If you have any questions, concerns, or requests regarding this Privacy Policy or
                our data practices, please contact us at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium text-primary hover:underline">
                  {SITE_CONFIG.email}
                </a>
                . We are happy to help.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
