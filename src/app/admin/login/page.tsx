"use client";

import { useState } from "react";
import { signup, login } from "./action";

type Step = "login" | "signup" | "check-email";

export default function LoginPage() {
  const [step, setStep] = useState<Step>("login");
  const [sentTo, setSentTo] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // ── Handle Signup ────────────────────────────────────────
  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const result = await signup(formData);

    if ("error" in result) {
      setError(result.error);
    } else {
      setSentTo(email);
      setStep("check-email");
    }

    setLoading(false);
  }

  // ── Handle Login ─────────────────────────────────────────
  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
    }
    // On success → server redirects to /admin

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0D1B5E] flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F5C400]/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#C8102E]/5" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Top accent bar */}
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
                {step === "login" && "Admin Portal"}
                {step === "signup" && "Create Admin Account"}
                {step === "check-email" && "Check Your Email"}
              </h1>
              <p className="text-sm text-gray-400 mt-1 text-center">
                {step === "check-email"
                  ? `We sent a verification link to ${sentTo}`
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

            {/* ── LOGIN FORM ── */}
            {step === "login" && (
              <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full bg-[#0D1B5E] hover:bg-[#162580] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  {loading ? <Spinner text="Signing in..." /> : "Sign In"}
                </button>

                <p className="text-center text-sm text-gray-400">
                  First time?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setStep("signup");
                      setError(null);
                    }}
                    className="text-[#0D1B5E] font-semibold hover:underline"
                  >
                    Create admin account
                  </button>
                </p>
              </form>
            )}

            {/* ── SIGNUP FORM ── */}
            {step === "signup" && (
              <form onSubmit={handleSignup} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="su-email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="su-email"
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
                    htmlFor="su-password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="su-password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Min. 8 characters"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full bg-[#0D1B5E] hover:bg-[#162580] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  {loading ? (
                    <Spinner text="Creating account..." />
                  ) : (
                    "Create Account"
                  )}
                </button>

                <p className="text-center text-sm text-gray-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setStep("login");
                      setError(null);
                    }}
                    className="text-[#0D1B5E] font-semibold hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}

            {/* ── CHECK EMAIL SCREEN ── */}
            {step === "check-email" && (
              <div className="flex flex-col items-center gap-5 text-center">
                {/* Email icon */}
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Click the verification link in your email to activate your
                    account. After verifying, come back and sign in.
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Don&apos;t see it? Check your spam folder.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setStep("login");
                    setError(null);
                  }}
                  className="w-full bg-[#F5C400] hover:bg-[#e0b300] text-[#0D1B5E] font-bold text-sm py-3.5 rounded-lg transition-all duration-200 shadow-md"
                >
                  Go to Sign In
                </button>
              </div>
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

function Spinner({ text }: { text: string }) {
  return (
    <>
      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
      {text}
    </>
  );
}
