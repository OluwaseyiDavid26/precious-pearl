import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "@/app/admin/login/action";
import EventsClient from "@/components/admin/EventsClient";

export default async function EventsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: events } = await supabase
    .from("events")
    .select(`*, event_images(id, image_url, sort_order)`)
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#F4F6FB]">
      <header className="bg-[#0D1B5E] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F5C400] flex items-center justify-center shadow-md">
              <span className="text-[#0D1B5E] font-black text-xs tracking-tight">PP</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">Precious Pearl</p>
              <p className="text-white/40 text-[10px] tracking-widest uppercase">Admin Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/70 text-xs">{user.email}</span>
            </div>
            <form action={logout}>
              <button
                type="submit"
                className="flex items-center gap-2 text-sm bg-white/10 hover:bg-[#C8102E] border border-white/10 hover:border-[#C8102E] text-white px-4 py-1.5 rounded-lg transition-all duration-200 font-medium"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <EventsClient initialEvents={events ?? []} />
    </div>
  );
}
