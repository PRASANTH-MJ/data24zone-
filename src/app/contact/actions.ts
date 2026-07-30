"use server";

import { z } from "zod";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import type { ContactFormValues } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(
  values: ContactFormValues,
): Promise<{ success: boolean; error?: string }> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Please check the form for errors." };
  }

  const { name, email, phone, company, service, message } = parsed.data;

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      phone,
      company: company ?? null,
      service,
      message,
      created_at: new Date().toISOString(),
    });

    if (error) {
      return { success: false, error: "Something went wrong. Please try again." };
    }

    return { success: true };
  }

  console.log("[contact-form:dev-fallback]", values);
  return { success: true };
}
