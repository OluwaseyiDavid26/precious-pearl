import { Suspense } from "react";
import LoginClient from "./LoginClient";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0D1B5E]" />}>
      <LoginClient />
    </Suspense>
  );
}
