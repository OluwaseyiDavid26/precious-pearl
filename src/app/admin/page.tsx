// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";
// import { logout } from "@/app/admin/login/action";

// export default async function AdminPage() {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();

//   if (!user) redirect("/admin/login");

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-[#0D1B5E] text-white px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-full bg-[#F5C400] flex items-center justify-center">
//             <span className="text-[#0D1B5E] font-extrabold text-xs">PP</span>
//           </div>
//           <span className="font-bold">Precious Pearl Admin</span>
//         </div>
//         <div className="flex items-center gap-4">
//           <span className="text-sm text-white/60">{user.email}</span>
//           <form action={logout}>
//             <button
//               type="submit"
//               className="text-sm bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-lg transition-colors"
//             >
//               Sign Out
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <h1 className="text-2xl font-bold text-[#0D1B5E] mb-2">Dashboard</h1>
//         <p className="text-gray-500">Welcome back, {user.email}</p>
//       </div>
//     </div>
//   );
// }

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "@/app/admin/login/action";

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  // Fetch event count for the stat card
  const { count: eventCount } = await supabase
    .from("events")
    .select("*", { count: "exact", head: true });

  const { count: publishedCount } = await supabase
    .from("events")
    .select("*", { count: "exact", head: true })
    .eq("is_published", true);

  return (
    <div className="min-h-screen bg-[#F4F6FB] font-sans">
      {/* ── NAV ── */}
      <header className="bg-[#0D1B5E] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F5C400] flex items-center justify-center shadow-md">
              <span className="text-[#0D1B5E] font-black text-xs tracking-tight">
                PP
              </span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">
                Precious Pearl
              </p>
              <p className="text-white/40 text-[10px] tracking-widest uppercase">
                Admin Portal
              </p>
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
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <div className="bg-[#0D1B5E] border-b-4 border-[#F5C400]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-[#F5C400] text-xs font-bold tracking-widest uppercase mb-1">
            Welcome back
          </p>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-white/50 text-sm mt-1">
            Manage your NGO events and content from here
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* ── STAT CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <StatCard
            label="Total Events"
            value={eventCount ?? 0}
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
            accent="#F5C400"
          />
          <StatCard
            label="Published"
            value={publishedCount ?? 0}
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            }
            accent="#10b981"
          />
          <StatCard
            label="Drafts"
            value={(eventCount ?? 0) - (publishedCount ?? 0)}
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            }
            accent="#0D1B5E"
          />
        </div>

        {/* ── QUICK ACTIONS ── */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#0D1B5E] tracking-tight">
            Quick Actions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Create Event Card */}
          <a
            href="/admin/events"
            className="group relative bg-white rounded-2xl border-2 border-[#0D1B5E]/10 hover:border-[#F5C400] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-7 flex items-center gap-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5C400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-14 h-14 rounded-2xl bg-[#F5C400] flex items-center justify-center shadow-md flex-shrink-0">
              <svg
                className="w-7 h-7 text-[#0D1B5E]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#0D1B5E] text-base">
                Create New Event
              </p>
              <p className="text-gray-400 text-sm mt-0.5">
                Upload flyers and event details
              </p>
            </div>
            <svg
              className="w-5 h-5 text-gray-300 group-hover:text-[#F5C400] ml-auto transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          {/* Manage Events Card */}
          <a
            href="/admin/events"
            className="group relative bg-[#0D1B5E] rounded-2xl border-2 border-[#0D1B5E] hover:border-[#F5C400] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-7 flex items-center gap-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-7 h-7 text-[#F5C400]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-white text-base">Manage Events</p>
              <p className="text-white/40 text-sm mt-0.5">
                Edit, publish or delete events
              </p>
            </div>
            <svg
              className="w-5 h-5 text-white/20 group-hover:text-[#F5C400] ml-auto transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* ── FOOTER NOTE ── */}
        <p className="text-center text-xs text-gray-400 mt-14">
          Precious Pearl Support Initiative &mdash; Admin Portal &mdash;
          Restricted Access
        </p>
      </div>
    </div>
  );
}

// ── STAT CARD COMPONENT ──────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  icon,
  accent,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${accent}20`, color: accent }}
      >
        {icon}
      </div>
      <div>
        <p className="text-2xl font-black text-[#0D1B5E]">{value}</p>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
          {label}
        </p>
      </div>
    </div>
  );
}
