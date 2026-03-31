// "use client";

// import { useState } from "react";
// // import { login } from "./actions";
// import { logout } from "./login/actions";

// export default function LoginPage() {
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);
//     const result = await login(formData);

//     if (result?.error) {
//       setError(result.error);
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#0D1B5E] flex items-center justify-center px-4">
//       {/* Background pattern */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F5C400]/5" />
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#C8102E]/5" />
//       </div>

//       <div className="relative w-full max-w-md">
//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* Top accent bar */}
//           <div className="h-1.5 w-full bg-gradient-to-r from-[#F5C400] via-[#C8102E] to-[#F5C400]" />

//           <div className="px-8 py-10">
//             {/* Logo / Brand */}
//             <div className="flex flex-col items-center mb-8">
//               <div className="w-16 h-16 rounded-full bg-[#0D1B5E] flex items-center justify-center mb-4 shadow-lg">
//                 <span className="text-[#F5C400] font-extrabold text-xl tracking-tight">
//                   PP
//                 </span>
//               </div>
//               <h1 className="text-2xl font-extrabold text-[#0D1B5E] tracking-tight">
//                 Admin Portal
//               </h1>
//               <p className="text-sm text-gray-400 mt-1">
//                 Precious Pearl Support Initiative
//               </p>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
//                 <svg
//                   className="w-4 h-4 flex-shrink-0"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {error}
//               </div>
//             )}

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//               {/* Email */}
//               <div className="flex flex-col gap-1.5">
//                 <label
//                   htmlFor="email"
//                   className="text-sm font-semibold text-gray-700"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   placeholder="admin@preciouspearlinitiative.org"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
//                 />
//               </div>

//               {/* Password */}
//               <div className="flex flex-col gap-1.5">
//                 <label
//                   htmlFor="password"
//                   className="text-sm font-semibold text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   placeholder="••••••••"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="mt-2 w-full bg-[#0D1B5E] hover:bg-[#162580] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
//               >
//                 {loading ? (
//                   <>
//                     <svg
//                       className="w-4 h-4 animate-spin"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8H4z"
//                       />
//                     </svg>
//                     Signing in...
//                   </>
//                 ) : (
//                   "Sign In"
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Footer */}
//           <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
//             <p className="text-xs text-gray-400">
//               Restricted access — authorised personnel only
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// // import { signup, verifyOtp, login } from "./login/actions";
// import { signup, verifyOtp, login } from "./action";

// // 3 steps: signup → otp → then next login uses "login" step
// type Step = "signup" | "otp" | "login";

// export default function LoginPage() {
//   const [step, setStep] = useState<Step>("login");
//   const [email, setEmail] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   // ── Handle Signup ──────────────────────────────────────
//   async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);
//     const enteredEmail = formData.get("email") as string;

//     const result = await signup(formData);

//     if (result?.error) {
//       setError(result.error);
//     } else {
//       setEmail(enteredEmail);
//       setSuccess(`A 6-digit code has been sent to ${enteredEmail}`);
//       setStep("otp");
//     }

//     setLoading(false);
//   }

//   // ── Handle OTP Verify ──────────────────────────────────
//   async function handleOtp(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);
//     formData.append("email", email);

//     const result = await verifyOtp(formData);

//     if (result?.error) {
//       setError(result.error);
//     }
//     // On success → server redirects to /admin

//     setLoading(false);
//   }

//   // ── Handle Login ───────────────────────────────────────
//   async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);
//     const result = await login(formData);

//     if (result?.error) {
//       setError(result.error);
//     }
//     // On success → server redirects to /admin

//     setLoading(false);
//   }

//   return (
//     <div className="min-h-screen bg-[#0D1B5E] flex items-center justify-center px-4">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F5C400]/5" />
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#C8102E]/5" />
//       </div>

//       <div className="relative w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* Top accent bar */}
//           <div className="h-1.5 w-full bg-gradient-to-r from-[#F5C400] via-[#C8102E] to-[#F5C400]" />

//           <div className="px-8 py-10">
//             {/* Logo + Title */}
//             <div className="flex flex-col items-center mb-8">
//               <div className="w-16 h-16 rounded-full bg-[#0D1B5E] flex items-center justify-center mb-4 shadow-lg">
//                 <span className="text-[#F5C400] font-extrabold text-xl tracking-tight">
//                   PP
//                 </span>
//               </div>
//               <h1 className="text-2xl font-extrabold text-[#0D1B5E] tracking-tight">
//                 {step === "signup" && "Create Admin Account"}
//                 {step === "otp" && "Verify Your Email"}
//                 {step === "login" && "Admin Portal"}
//               </h1>
//               <p className="text-sm text-gray-400 mt-1 text-center">
//                 {step === "otp"
//                   ? `Code sent to ${email}`
//                   : "Precious Pearl Support Initiative"}
//               </p>
//             </div>

//             {/* Step indicator */}
//             {step === "otp" && (
//               <div className="flex items-center justify-center gap-2 mb-6">
//                 <div className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-[#0D1B5E] flex items-center justify-center">
//                     <svg
//                       className="w-3 h-3 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-xs text-gray-400">Account created</span>
//                 </div>
//                 <div className="w-8 h-px bg-gray-200" />
//                 <div className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-[#F5C400] flex items-center justify-center">
//                     <span className="text-[#0D1B5E] text-xs font-bold">2</span>
//                   </div>
//                   <span className="text-xs font-medium text-[#0D1B5E]">
//                     Verify email
//                   </span>
//                 </div>
//               </div>
//             )}

//             {/* Success message */}
//             {success && (
//               <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">
//                 <svg
//                   className="w-4 h-4 flex-shrink-0"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {success}
//               </div>
//             )}

//             {/* Error message */}
//             {error && (
//               <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
//                 <svg
//                   className="w-4 h-4 flex-shrink-0"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {error}
//               </div>
//             )}

//             {/* ── SIGNUP FORM ── */}
//             {step === "signup" && (
//               <form onSubmit={handleSignup} className="flex flex-col gap-5">
//                 <div className="flex flex-col gap-1.5">
//                   <label
//                     htmlFor="email"
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     autoComplete="email"
//                     placeholder="admin@preciouspearlinitiative.org"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label
//                     htmlFor="password"
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     Password
//                   </label>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     minLength={8}
//                     autoComplete="new-password"
//                     placeholder="Min. 8 characters"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-2 w-full bg-[#0D1B5E] hover:bg-[#162580] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
//                 >
//                   {loading ? (
//                     <Spinner text="Creating account..." />
//                   ) : (
//                     "Create Account & Get OTP"
//                   )}
//                 </button>

//                 <p className="text-center text-sm text-gray-400">
//                   Already have an account?{" "}
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setStep("login");
//                       setError(null);
//                       setSuccess(null);
//                     }}
//                     className="text-[#0D1B5E] font-semibold hover:underline"
//                   >
//                     Sign in
//                   </button>
//                 </p>
//               </form>
//             )}

//             {/* ── OTP FORM ── */}
//             {step === "otp" && (
//               <form onSubmit={handleOtp} className="flex flex-col gap-5">
//                 <div className="flex flex-col gap-1.5">
//                   <label
//                     htmlFor="otp"
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     6-Digit Verification Code
//                   </label>
//                   <input
//                     id="otp"
//                     name="otp"
//                     type="text"
//                     required
//                     maxLength={6}
//                     autoComplete="one-time-code"
//                     placeholder="• • • • • •"
//                     className="w-full px-4 py-4 rounded-lg border border-gray-200 text-gray-800 text-center tracking-[0.6em] placeholder:tracking-normal placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200 font-mono text-2xl"
//                   />
//                   <p className="text-xs text-gray-400 text-center mt-1">
//                     Check your inbox and spam folder
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-[#F5C400] hover:bg-[#e0b300] disabled:opacity-60 disabled:cursor-not-allowed text-[#0D1B5E] font-bold text-sm py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
//                 >
//                   {loading ? (
//                     <Spinner text="Verifying..." color="text-[#0D1B5E]" />
//                   ) : (
//                     "Verify & Enter Dashboard"
//                   )}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setStep("signup");
//                     setError(null);
//                     setSuccess(null);
//                   }}
//                   className="text-sm text-gray-400 hover:text-gray-600 text-center transition-colors"
//                 >
//                   ← Back
//                 </button>
//               </form>
//             )}

//             {/* ── LOGIN FORM ── */}
//             {step === "login" && (
//               <form onSubmit={handleLogin} className="flex flex-col gap-5">
//                 <div className="flex flex-col gap-1.5">
//                   <label
//                     htmlFor="login-email"
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     id="login-email"
//                     name="email"
//                     type="email"
//                     required
//                     autoComplete="email"
//                     placeholder="admin@preciouspearlinitiative.org"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-1.5">
//                   <label
//                     htmlFor="login-password"
//                     className="text-sm font-semibold text-gray-700"
//                   >
//                     Password
//                   </label>
//                   <input
//                     id="login-password"
//                     name="password"
//                     type="password"
//                     required
//                     autoComplete="current-password"
//                     placeholder="••••••••"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D1B5E]/30 focus:border-[#0D1B5E] transition-all duration-200"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-2 w-full bg-[#0D1B5E] hover:bg-[#162580] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
//                 >
//                   {loading ? <Spinner text="Signing in..." /> : "Sign In"}
//                 </button>

//                 <p className="text-center text-sm text-gray-400">
//                   First time?{" "}
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setStep("signup");
//                       setError(null);
//                       setSuccess(null);
//                     }}
//                     className="text-[#0D1B5E] font-semibold hover:underline"
//                   >
//                     Create admin account
//                   </button>
//                 </p>
//               </form>
//             )}
//           </div>

//           {/* Footer */}
//           <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
//             <p className="text-xs text-gray-400">
//               Restricted access — authorised personnel only
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Spinner helper ────────────────────────────────────────
// function Spinner({
//   text,
//   color = "text-white",
// }: {
//   text: string;
//   color?: string;
// }) {
//   return (
//     <>
//       <svg
//         className={`w-4 h-4 animate-spin ${color}`}
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <circle
//           className="opacity-25"
//           cx="12"
//           cy="12"
//           r="10"
//           stroke="currentColor"
//           strokeWidth="4"
//         />
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8v8H4z"
//         />
//       </svg>
//       {text}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// // Fixed import: points to the singular 'action' file in the same directory
// import { signup, verifyOtp, login } from "./action";

// type Step = "signup" | "otp" | "login";

// export default function LoginPage() {
//   const [step, setStep] = useState<Step>("login");
//   const [email, setEmail] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);
//     const enteredEmail = formData.get("email") as string;

//     const result = await signup(formData);

//     if (result?.error) {
//       setError(result.error);
//     } else {
//       setEmail(enteredEmail);
//       setSuccess(`A 6-digit code has been sent to ${enteredEmail}`);
//       setStep("otp");
//     }
//     setLoading(false);
//   }

//   async function handleOtp(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);
//     // Append the email saved in state so verifyOtp action has it
//     formData.append("email", email);

//     const result = await verifyOtp(formData);
//     if (result?.error) {
//       setError(result.error);
//     }
//     setLoading(false);
//   }

//   async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);
//     const result = await login(formData);

//     if (result?.error) {
//       setError(result.error);
//     }
//     setLoading(false);
//   }

//   return (
//     <div className="min-h-screen bg-[#0D1B5E] flex items-center justify-center px-4">
//       <div className="relative w-full max-w-md">
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           <div className="h-1.5 w-full bg-gradient-to-r from-[#F5C400] via-[#C8102E] to-[#F5C400]" />

//           <div className="px-8 py-10">
//             <div className="flex flex-col items-center mb-8">
//               <div className="w-16 h-16 rounded-full bg-[#0D1B5E] flex items-center justify-center mb-4">
//                 <span className="text-[#F5C400] font-extrabold text-xl">
//                   PP
//                 </span>
//               </div>
//               <h1 className="text-2xl font-extrabold text-[#0D1B5E]">
//                 {step === "signup" && "Create Admin Account"}
//                 {step === "otp" && "Verify Your Email"}
//                 {step === "login" && "Admin Portal"}
//               </h1>
//             </div>

//             {error && (
//               <div className="mb-6 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
//                 {error}
//               </div>
//             )}
//             {success && (
//               <div className="mb-6 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">
//                 {success}
//               </div>
//             )}

//             {/* SIGNUP FORM */}
//             {step === "signup" && (
//               <form onSubmit={handleSignup} className="flex flex-col gap-5">
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-sm font-semibold text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     name="email"
//                     type="email"
//                     required
//                     className="w-full px-4 py-3 rounded-lg border"
//                     placeholder="admin@email.com"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-sm font-semibold text-gray-700">
//                     Password
//                   </label>
//                   <input
//                     name="password"
//                     type="password"
//                     required
//                     minLength={8}
//                     className="w-full px-4 py-3 rounded-lg border"
//                   />
//                 </div>
//                 <button
//                   disabled={loading}
//                   className="w-full bg-[#0D1B5E] text-white py-3.5 rounded-lg font-bold"
//                 >
//                   {loading ? "Processing..." : "Create & Get OTP"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setStep("login")}
//                   className="text-[#0D1B5E] text-sm font-semibold"
//                 >
//                   Back to Login
//                 </button>
//               </form>
//             )}

//             {/* OTP FORM */}
//             {step === "otp" && (
//               <form onSubmit={handleOtp} className="flex flex-col gap-5">
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-sm font-semibold text-gray-700 text-center">
//                     Enter 6-Digit Code
//                   </label>
//                   <input
//                     name="otp"
//                     type="text"
//                     required
//                     maxLength={6}
//                     className="w-full px-4 py-4 rounded-lg border text-center text-2xl font-mono tracking-widest"
//                     placeholder="000000"
//                   />
//                 </div>
//                 <button
//                   disabled={loading}
//                   className="w-full bg-[#F5C400] text-[#0D1B5E] py-3.5 rounded-lg font-bold"
//                 >
//                   {loading ? "Verifying..." : "Verify Account"}
//                 </button>
//               </form>
//             )}

//             {/* LOGIN FORM */}
//             {step === "login" && (
//               <form onSubmit={handleLogin} className="flex flex-col gap-5">
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-sm font-semibold text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     name="email"
//                     type="email"
//                     required
//                     className="w-full px-4 py-3 rounded-lg border"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1.5">
//                   <label className="text-sm font-semibold text-gray-700">
//                     Password
//                   </label>
//                   <input
//                     name="password"
//                     type="password"
//                     required
//                     className="w-full px-4 py-3 rounded-lg border"
//                   />
//                 </div>
//                 <button
//                   disabled={loading}
//                   className="w-full bg-[#0D1B5E] text-white py-3.5 rounded-lg font-bold"
//                 >
//                   {loading ? "Signing in..." : "Sign In"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setStep("signup")}
//                   className="text-[#0D1B5E] text-sm font-semibold"
//                 >
//                   Create admin account
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
