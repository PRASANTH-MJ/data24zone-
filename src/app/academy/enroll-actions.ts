"use server";

import { z } from "zod";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import type { CourseEnrollmentValues } from "@/types";

const enrollmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  course: z.string().min(1, "Course is required."),
  message: z.string().optional(),
});

export async function submitCourseEnrollment(
  values: CourseEnrollmentValues,
): Promise<{ success: boolean; error?: string }> {
  const parsed = enrollmentSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Please check the form for errors." };
  }

  const { name, email, phone, course, message } = parsed.data;

  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    const { error } = await supabase.from("course_enrollments").insert({
      name,
      email,
      phone,
      course,
      message: message ?? null,
      created_at: new Date().toISOString(),
    });

    if (error) {
      return { success: false, error: "Something went wrong. Please try again." };
    }

    return { success: true };
  }

  console.log("[course-enrollment:dev-fallback]", values);
  return { success: true };
}
