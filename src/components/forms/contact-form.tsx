"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/contact/actions";

const SERVICE_OPTIONS = [
  "Custom CRM Development",
  "Custom ERP Development",
  "Business Automation",
  "Web/Mobile App Development",
  "AI Solutions",
  "Data Analytics & BI",
  "Academy Training",
  "Other",
];

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

const fieldClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormSchema) => {
    setStatus("submitting");
    setStatusMessage("");

    try {
      const result = await submitContactForm(values);
      if (result.success) {
        setStatus("success");
        setStatusMessage("Message sent! We'll get back to you within 24 hours.");
        reset();
      } else {
        setStatus("error");
        setStatusMessage(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={fieldClasses}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your full name"
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClasses}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClasses}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="+91 90000 00000"
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
            Company <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className={fieldClasses}
            aria-invalid={errors.company ? "true" : "false"}
            aria-describedby={errors.company ? "company-error" : undefined}
            placeholder="Your company name"
            {...register("company")}
          />
          {errors.company && (
            <p id="company-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
          Service Required
        </label>
        <select
          id="service"
          defaultValue=""
          className={cn(fieldClasses, "appearance-none")}
          aria-invalid={errors.service ? "true" : "false"}
          aria-describedby={errors.service ? "service-error" : undefined}
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
            {errors.service.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(fieldClasses, "resize-none")}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us about your project or requirement..."
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </Button>

      <div role="status" className="min-h-6">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
            {statusMessage}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
