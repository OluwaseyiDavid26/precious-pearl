// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";
// import { logout } from "./login/actions";

// export default async function AdminDashboard() {
//   const supabase = await createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) redirect("/admin/login");

//   // Fetch counts for all tables
//   const [
//     { count: eventsCount },
//     { count: flyersCount },
//     { count: postsCount },
//     { count: donationsCount },
//   ] = await Promise.all([
//     supabase.from("events").select("*", { count: "exact", head: true }),
//     supabase.from("flyers").select("*", { count: "exact", head: true }),
//     supabase.from("posts").select("*", { count: "exact", head: true }),
//     supabase.from("donations").select("*", { count: "exact", head: true }),
//   ]);

//   const stats = [
//     {
//       label: "Total Events",
//       count: eventsCount ?? 0,
//       icon: "📅",
//       color: "bg-blue-50 border-blue-200 text-blue-700",
//       href: "/admin/events",
//     },
//     {
//       label: "Flyers / Gallery",
//       count: flyersCount ?? 0,
//       icon: "🖼️",
//       color: "bg-yellow-50 border-yellow-200 text-yellow-700",
//       href: "/admin/flyers",
//     },
//     {
//       label: "Blog Posts",
//       count: postsCount ?? 0,
//       icon: "📝",
//       color: "bg-green-50 border-green-200 text-green-700",
//       href: "/admin/posts",
//     },
//     {
//       label: "Donations",
//       count: donationsCount ?? 0,
//       icon: "💰",
//       color: "bg-red-50 border-red-200 text-red-700",
//       href: "/admin/donations",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top bar */}
//       <header className="bg-[#0D1B5E] shadow-md">
//         <div className="h-1 w-full bg-gradient-to-r from-[#F5C400] via-[#C8102E] to-[#F5C400]" />
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 rounded-full bg-[#1a2e7a] border-2 border-[#F5C400] flex items-center justify-center">
//               <span className="text-[#F5C400] font-extrabold text-xs">PP</span>
//             </div>
//             <div>
//               <p className="text-white font-bold text-sm leading-none">
//                 Precious Pearl
//               </p>
//               <p className="text-white/50 text-[10px] tracking-widest uppercase">
//                 Admin Portal
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <span className="text-white/60 text-sm hidden sm:block">
//               {user.email}
//             </span>
//             <form action={logout}>
//               <button
//                 type="submit"
//                 className="text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/50 px-4 py-1.5 rounded-full transition-all duration-200"
//               >
//                 Sign Out
//               </button>
//             </form>
//           </div>
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="max-w-7xl mx-auto px-6 py-10">
//         {/* Welcome */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-extrabold text-[#0D1B5E]">Dashboard</h1>
//           <p className="text-gray-400 text-sm mt-1">
//             Welcome back — here&apos;s an overview of everything.
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
//           {stats.map((stat) => (
//             <a
//               key={stat.label}
//               href={stat.href}
//               className={`flex items-center gap-4 p-5 rounded-xl border ${stat.color} hover:shadow-md transition-all duration-200 bg-white`}
//             >
//               <span className="text-3xl">{stat.icon}</span>
//               <div>
//                 <p className="text-2xl font-extrabold">{stat.count}</p>
//                 <p className="text-xs font-medium opacity-70">{stat.label}</p>
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Quick Links */}
//         <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
//           <h2 className="text-base font-bold text-[#0D1B5E] mb-4">
//             Quick Actions
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//             {[
//               { label: "New Event", href: "/admin/events/new", icon: "➕" },
//               { label: "Upload Flyer", href: "/admin/flyers/new", icon: "🖼️" },
//               { label: "New Post", href: "/admin/posts/new", icon: "✍️" },
//               {
//                 label: "Add Donation",
//                 href: "/admin/donations/new",
//                 icon: "💳",
//               },
//             ].map((action) => (
//               <a
//                 key={action.label}
//                 href={action.href}
//                 className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50 hover:bg-[#0D1B5E] hover:text-white text-gray-700 text-sm font-medium transition-all duration-200 border border-gray-100"
//               >
//                 <span>{action.icon}</span>
//                 {action.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "./login/action";

type Step = "auth" | "otp";
type Mode = "login" | "signup";

export default function LoginPage() {
  const [step, setStep] = useState<Step>("auth");
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleAuthSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const enteredEmail = formData.get("email") as string;

    if (mode === "signup") {
      const result = await signup(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        setEmail(enteredEmail);
        setStep("otp");
      }
    } else {
      const result = await login(formData);
      if (result?.error) {
        setError(result.error);
      }
    }

    setLoading(false);
  }

  async function handleOtpSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("email", email);

    const result = await verifyOtp(formData);
    if (result?.error) {
      setError(result.error);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0D1B5E] flex items-center justify-center px-4">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F5C400]/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#C8102E]/5" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#F5C400] via-[#C8102E] to-[#F5C400]" />

          <div className="px-8 py-10">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#0D1B5E] flex items-center justify-center mb-4 shadow-lg">
                <span className="text-[#F5C400] font-extrabold text-xl tracking-tight">
                  PP
                </span>
              </div>
              <h1 className="text-2xl font-extrabold text-[#0D1B5E] tracking-tight">
                {step === "otp"
                  ? "Check Your Email"
                  : mode === "signup"
                    ? "Create Admin Account"
                    : "Admin Portal"}
              </h1>
              <p className="text-sm text-gray-400 mt-1 text-center">
                {step === "otp"
                  ? `We sent a 6-digit code to ${email}`
                  : "Precious Pearl Support Initiative"}
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </div>
            )}

            {/* ── STEP 1: Login or Signup ── */}
            {step === "auth" && (
              <form onSubmit={handleAuthSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="admin@preciouspearlinitiative.org"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete={
                      mode === "signup" ? "new-password" : "current-password"
                    }
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full bg-[#0D1B5E] hover:bg-[#162580] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      {mode === "signup"
                        ? "Creating account..."
                        : "Signing in..."}
                    </>
                  ) : mode === "signup" ? (
                    "Create Account"
                  ) : (
                    "Sign In"
                  )}
                </button>

                {/* Toggle mode */}
                <p className="text-center text-sm text-gray-400">
                  {mode === "login" ? (
                    <>
                      No account yet?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setMode("signup");
                          setError(null);
                        }}
                        className="text-[#0D1B5E] font-semibold hover:underline"
                      >
                        Create one
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setMode("login");
                          setError(null);
                        }}
                        className="text-[#0D1B5E] font-semibold hover:underline"
                      >
                        Sign in
                      </button>
                    </>
                  )}
                </p>
              </form>
            )}

            {/* ── STEP 2: OTP Verification ── */}
            {step === "otp" && (
              <form onSubmit={handleOtpSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="otp"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Verification Code
                  </label>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    required
                    maxLength={6}
                    placeholder="Enter 6-digit code"
                    autoComplete="one-time-code"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 text-center tracking-[0.5em] placeholder:tracking-normal placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200 font-mono text-lg"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Check your inbox and spam folder
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0D1B5E] hover:bg-[#162580] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    "Verify & Continue"
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep("auth");
                    setError(null);
                  }}
                  className="text-sm text-gray-400 hover:text-gray-600 text-center transition-colors"
                >
                  ← Back to sign up
                </button>
              </form>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">
              Restricted access — authorised personnel only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
