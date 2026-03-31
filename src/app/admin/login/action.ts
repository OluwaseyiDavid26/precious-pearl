// "use server";

// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";

// export async function login(
//   formData: FormData,
// ): Promise<{ error: string } | void> {
//   const supabase = await createClient();

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     return { error: "Invalid email or password. Please try again." };
//   }

//   redirect("/admin");
// }

// export async function logout(): Promise<void> {
//   const supabase = await createClient();
//   await supabase.auth.signOut();
//   redirect("/admin/login");
// }

// "use server";

// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";

// // ── SIGN UP ──────────────────────────────────────────────────────────────────
// // Creates the admin account and triggers OTP email
// export async function signup(
//   formData: FormData,
// ): Promise<{ error: string } | void> {
//   const supabase = await createClient();

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   const { error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       emailRedirectTo: undefined, // use OTP not magic link
//     },
//   });

//   if (error) {
//     if (error.message.toLowerCase().includes("already registered")) {
//       return { error: "An admin account already exists. Please sign in." };
//     }
//     return { error: error.message };
//   }
//   // No error = OTP sent, UI moves to OTP step
// }

// // ── VERIFY OTP ───────────────────────────────────────────────────────────────
// // Verifies the 6-digit code sent to email after signup
// export async function verifyOtp(
//   formData: FormData,
// ): Promise<{ error: string } | void> {
//   const supabase = await createClient();

//   const email = formData.get("email") as string;
//   const token = formData.get("otp") as string;

//   const { error } = await supabase.auth.verifyOtp({
//     email,
//     token,
//     type: "signup",
//   });

//   if (error) {
//     return { error: "Invalid or expired code. Please try again." };
//   }

//   redirect("/admin");
// }

// // ── SIGN IN ──────────────────────────────────────────────────────────────────
// // Logs in with email + password after account is verified
// export async function login(
//   formData: FormData,
// ): Promise<{ error: string } | void> {
//   const supabase = await createClient();

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     return { error: "Invalid email or password. Please try again." };
//   }

//   redirect("/admin");
// }

// // ── SIGN OUT ─────────────────────────────────────────────────────────────────
// export async function logout(): Promise<void> {
//   const supabase = await createClient();
//   await supabase.auth.signOut();
//   redirect("/admin/login");
// }

// "use server";

// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";

// // ── SIGN UP ──────────────────────────────────────────────────────────────────
// export async function signup(
//   formData: FormData,
// ): Promise<{ error: string } | void> {
//   const supabase = await createClient();

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   // 1. Optional: Strict "Only One Admin" check
//   // This requires your 'profiles' table or similar to be set up.
//   // If you just want to rely on the "already registered" error, the code below handles it.

//   const { error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       // Ensure Supabase doesn't try to auto-confirm via link
//       emailRedirectTo: undefined,
//     },
//   });

//   if (error) {
//     // Supabase returns 422 or a specific message if user exists
//     if (
//       error.message.toLowerCase().includes("already registered") ||
//       error.status === 422
//     ) {
//       return { error: "Admin account already exists. Please sign in." };
//     }
//     return { error: error.message };
//   }

//   // Success: OTP is sent to email automatically by Supabase
// }

// // ── VERIFY OTP ───────────────────────────────────────────────────────────────
// export async function verifyOtp(
//   formData: FormData,
// ): Promise<{ error: string } | void> {
//   const supabase = await createClient();

//   const email = formData.get("email") as string;
//   const token = formData.get("otp") as string;

//   // Crucial: 'signup' type is for the very first time they verify
//   const { error } = await supabase.auth.verifyOtp({
//     email,
//     token,
//     type: "signup",
//   });

//   if (error) {
//     return { error: "Invalid or expired code. Please check your email." };
//   }

//   // Verification successful, session is set, go to dashboard
//   redirect("/admin");
// }

// // ── SIGN IN ──────────────────────────────────────────────────────────────────
// export async function login(
//   formData: FormData,
// ): Promise<{ error: string } | void> {
//   const supabase = await createClient();

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   const { error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     return { error: "Invalid email or password." };
//   }

//   redirect("/admin");
// }

// // ── SIGN OUT ─────────────────────────────────────────────────────────────────
// export async function logout(): Promise<void> {
//   const supabase = await createClient();
//   await supabase.auth.signOut();
//   redirect("/admin/login");
// }

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
