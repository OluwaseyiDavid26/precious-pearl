
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "@/app/admin/login/action";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0D1B5E] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#F5C400] flex items-center justify-center">
            <span className="text-[#0D1B5E] font-extrabold text-xs">PP</span>
          </div>
          <span className="font-bold">Precious Pearl Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/60">{user.email}</span>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-lg transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-[#0D1B5E] mb-2">Dashboard</h1>
        <p className="text-gray-500">Welcome back, {user.email}</p>
      </div>
    </div>
  );
}
