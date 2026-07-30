"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Loader2, Mail, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { submitCourseEnrollment } from "@/app/academy/enroll-actions";

const enrollFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  course: z.string().min(1),
  message: z.string().optional(),
});

type EnrollFormSchema = z.infer<typeof enrollFormSchema>;

const fieldClasses =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-dark outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500";

export function CourseEnrollForm({ courseName }: { courseName: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnrollFormSchema>({
    resolver: zodResolver(enrollFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: courseName,
      message: "",
    },
  });

  const onSubmit = async (values: EnrollFormSchema) => {
    setStatus("submitting");
    setStatusMessage("");

    try {
      const result = await submitCourseEnrollment(values);
      if (result.success) {
        setStatus("success");
        setStatusMessage(
          `Enrollment request received for ${courseName}! We'll reach out within 24 hours.`,
        );
        reset({ name: "", email: "", phone: "", course: courseName, message: "" });
      } else {
        setStatus("error");
        setStatusMessage(result.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  const mailtoHref = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
    `Enrollment request: ${courseName}`,
  )}&body=${encodeURIComponent(
    `Hi Data24Zone,\n\nI'd like to enroll in the "${courseName}" course.\n\nMy name:\nMy phone:\n\nThanks!`,
  )}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="enroll-course" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
          Course
        </label>
        <input
          id="enroll-course"
          type="text"
          readOnly
          className={cn(fieldClasses, "cursor-not-allowed bg-light font-medium dark:bg-white/10")}
          {...register("course")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enroll-name" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
            Name
          </label>
          <input
            id="enroll-name"
            type="text"
            autoComplete="name"
            className={fieldClasses}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "enroll-name-error" : undefined}
            placeholder="Your full name"
            {...register("name")}
          />
          {errors.name && (
            <p id="enroll-name-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="enroll-email" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
            Email
          </label>
          <input
            id="enroll-email"
            type="email"
            autoComplete="email"
            className={fieldClasses}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "enroll-email-error" : undefined}
            placeholder="you@company.com"
            {...register("email")}
          />
          {errors.email && (
            <p id="enroll-email-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="enroll-phone" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
            Phone
          </label>
          <input
            id="enroll-phone"
            type="tel"
            autoComplete="tel"
            className={fieldClasses}
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "enroll-phone-error" : undefined}
            placeholder="+91 90000 00000"
            {...register("phone")}
          />
          {errors.phone && (
            <p id="enroll-phone-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="enroll-message" className="mb-1.5 block text-sm font-medium text-dark dark:text-white">
          Message <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          id="enroll-message"
          rows={3}
          className={cn(fieldClasses, "resize-none")}
          placeholder="Any questions before you enroll?"
          {...register("message")}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Submitting...
            </>
          ) : (
            <>
              Request Enrollment
              <Rocket className="h-4 w-4" aria-hidden />
            </>
          )}
        </Button>
        <Button href={mailtoHref} variant="secondary" size="lg" className="w-full sm:w-auto">
          <Mail className="h-4 w-4" aria-hidden />
          Email Us Directly
        </Button>
      </div>

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
