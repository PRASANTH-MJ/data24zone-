"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getFAQSchema } from "@/lib/schema";
import { FAQS } from "@/data/faq";

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section id="faq" className="py-20 sm:py-28">
      <JsonLd data={getFAQSchema(FAQS)} />
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          gradientWord="Questions"
          subtitle="Answers to the questions we hear most from businesses and learners exploring Data24Zone."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openIndexes.includes(i);
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <Reveal delay={i * 0.04} key={item.question}>
                <div className="glass overflow-hidden rounded-2xl">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="flex items-center gap-3 text-base font-semibold text-dark dark:text-white">
                        <MessageCircleQuestion
                          className="h-5 w-5 flex-none text-primary dark:text-primary-light"
                          aria-hidden
                        />
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 flex-none text-slate-500 transition-transform duration-300 dark:text-slate-400",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 pl-14 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
