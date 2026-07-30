"use server";

import { z } from "zod";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { isEmailConfigured, sendNotificationEmail } from "@/lib/email";
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
  let delivered = false;

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
    delivered = true;
  }

  if (isEmailConfigured()) {
    try {
      await sendNotificationEmail({
        subject: `New course enrollment: ${course}`,
        heading: "New Course Enrollment Request",
        rows: [
          { label: "Course", value: course },
          { label: "Name", value: name },
          { label: "Email", value: email },
          { label: "Phone", value: phone },
          { label: "Message", value: message || "—" },
        ],
      });
      delivered = true;
    } catch (err) {
      console.error("[course-enrollment:email-failed]", err);
      if (!delivered) {
        return { success: false, error: "Something went wrong. Please try again." };
      }
    }
  }

  if (!delivered) {
    console.log("[course-enrollment:dev-fallback]", values);
  }

  return { success: true };
}
