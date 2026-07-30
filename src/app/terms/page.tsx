import type { Metadata } from "next";
import { Scale } from "lucide-react";
import { GradientBlobs, GridPattern } from "@/components/ui/gradient-blobs";
import { Reveal } from "@/components/ui/reveal";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the Terms & Conditions governing your use of Data24Zone's website, products, and services.",
};

const LAST_UPDATED = "July 1, 2026";

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-40 sm:pb-16">
        <GridPattern />
        <GradientBlobs />
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/10">
                <Scale className="h-3.5 w-3.5" aria-hidden />
                Legal
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark sm:text-5xl dark:text-white">
                Terms &amp; <span className="text-gradient">Conditions</span>
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
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of
              the {SITE_CONFIG.name} website, products, and services (collectively, the
              &quot;Services&quot;). Please read these Terms carefully before using our Services.
              By accessing or using the Services, you agree to be bound by these Terms. If you do
              not agree, please do not use our Services.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Acceptance of Terms
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                By visiting our website, submitting a form, purchasing a product, enrolling in a
                course, or otherwise engaging with {SITE_CONFIG.name}, you confirm that you have
                read, understood, and agree to be bound by these Terms and our Privacy Policy. If
                you are using our Services on behalf of a company or other legal entity, you
                represent that you have the authority to bind that entity to these Terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">Use of Services</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                You agree to use our Services only for lawful purposes and in accordance with
                these Terms. You must not misuse our Services by introducing malicious code,
                attempting unauthorized access to our systems, interfering with the proper
                functioning of our website, or using our Services in any way that could damage,
                disable, or impair them. We reserve the right to suspend or restrict access to
                any user who violates these conditions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Intellectual Property
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                All content on our website and within our products, including but not limited to
                text, graphics, logos, software, course materials, and designs, is the property of
                {" "}{SITE_CONFIG.name} or its licensors and is protected by applicable
                intellectual property laws. You may not reproduce, distribute, modify, or create
                derivative works from any part of our Services without our prior written consent,
                except as necessary for your own personal, non-commercial use of the Services as
                intended.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Payment &amp; Refunds
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Certain Services, including custom development engagements and training courses,
                require payment in advance or in agreed installments as outlined in your specific
                service agreement or invoice. All fees are quoted in the applicable currency and
                are exclusive of taxes unless stated otherwise. Refund eligibility, if any, will
                be governed by the specific terms agreed upon at the time of purchase or in your
                service contract. We reserve the right to change our pricing at any time, with
                changes not affecting services already purchased or in progress.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Service Availability
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We strive to keep our website and Services available and performing reliably at
                all times, but we do not guarantee uninterrupted or error-free operation. We may
                perform scheduled or emergency maintenance, and we reserve the right to modify,
                suspend, or discontinue any part of our Services at any time without prior notice,
                where reasonably necessary.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                To the fullest extent permitted by law, {SITE_CONFIG.name} shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages, or any loss
                of profits, revenue, data, or goodwill arising from your use of, or inability to
                use, our Services. Our total liability for any claim arising out of these Terms
                shall not exceed the amount you paid to us for the Services giving rise to the
                claim in the twelve months preceding the claim.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">Termination</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We may suspend or terminate your access to our Services at any time if we
                reasonably believe you have violated these Terms or engaged in conduct that could
                harm {SITE_CONFIG.name}, other users, or third parties. You may also stop using
                our Services at any time. Provisions of these Terms that by their nature should
                survive termination, including intellectual property and limitation of liability
                clauses, will continue to apply.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">Governing Law</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                These Terms shall be governed by and construed in accordance with the laws of
                India, without regard to its conflict of law principles. Any disputes arising out
                of or relating to these Terms or our Services shall be subject to the exclusive
                jurisdiction of the courts located in India.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">
                Changes to Terms
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We may revise these Terms from time to time to reflect changes in our Services,
                business practices, or legal requirements. The updated Terms will be posted on
                this page with a revised &quot;Last updated&quot; date. Your continued use of our
                Services after any changes take effect constitutes your acceptance of the revised
                Terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white">Contact Us</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                If you have any questions about these Terms &amp; Conditions, please contact us at{" "}
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium text-primary hover:underline">
                  {SITE_CONFIG.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
