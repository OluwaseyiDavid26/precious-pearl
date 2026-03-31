"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// ── SIGN UP ───────────────────────────────────────────────────────────────
// Admin enters email + password → Supabase sends a verification link to Gmail
export async function signup(
  formData: FormData,
): Promise<{ error: string } | { success: string }> {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/auth/callback`,
    },
  });

  if (error) {
    if (error.message.toLowerCase().includes("already registered")) {
      return { error: "An admin account already exists. Please sign in." };
    }
    return { error: error.message };
  }

  return { success: `Verification link sent to ${email}. Check your inbox.` };
}

// ── SIGN IN ───────────────────────────────────────────────────────────────
// After account is verified, admin logs in with email + password
export async function login(
  formData: FormData,
): Promise<{ error: string } | void> {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Invalid email or password. Please try again." };
  }

  redirect("/admin");
}

// ── SIGN OUT ──────────────────────────────────────────────────────────────
export async function logout(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
