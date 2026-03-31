// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// const programs = [
//   {
//     id: 1,
//     number: "01",
//     category: "Education",
//     title: "School Supply Drive",
//     description:
//       "We equip school children with essential learning materials — notebooks, pens, bags, and uniforms — ensuring no child walks into a classroom unprepared.",
//     stat: { value: "1,000+", label: "Supplies Distributed" },
//   },
//   {
//     id: 2,
//     number: "02",
//     category: "Scholarship",
//     title: "Tuition Support Programme",
//     description:
//       "We partner with schools to sponsor tuition fees for children whose families cannot afford formal education, breaking the cycle of poverty through learning.",
//     stat: { value: "200+", label: "Children Sponsored" },
//   },
//   {
//     id: 3,
//     number: "03",
//     category: "Mentorship",
//     title: "Child Mentorship Network",
//     description:
//       "Our mentors walk alongside vulnerable children — offering guidance, emotional support, and life skills training to help them thrive beyond the classroom.",
//     stat: { value: "150+", label: "Active Mentorships" },
//   },
//   {
//     id: 4,
//     number: "04",
//     category: "Community",
//     title: "Community Outreach",
//     description:
//       "We engage parents, local leaders, and volunteers to build a support system around every child — because lasting change starts with the community.",
//     stat: { value: "50+", label: "Communities Reached" },
//   },
// ];

// export default function ProgramsSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [animate, setAnimate] = useState(false);
//   const [activeId, setActiveId] = useState<number | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 },
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#0a0f2c] overflow-hidden py-28 px-6"
//     >
//       {/* Top rule */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//       {/* Ambient glow */}
//       <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[#f5c518]/4 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

//       <div className="max-w-6xl mx-auto relative">
//         {/* ── Header row ── */}
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
//           <div>
//             {/* Eyebrow */}
//             <div
//               className="flex items-center gap-3 mb-6"
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? "translateY(0)" : "translateY(20px)",
//                 transition: "opacity 0.6s ease, transform 0.6s ease",
//               }}
//             >
//               <div className="w-8 h-px bg-[#f5c518]" />
//               <span className="text-[#f5c518] text-xs tracking-[0.25em] uppercase font-semibold">
//                 What We Do
//               </span>
//             </div>

//             <h2
//               className="text-white text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight"
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? "translateY(0)" : "translateY(20px)",
//                 transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
//               }}
//             >
//               Programmes That
//               <br />
//               <span className="text-[#f5c518]">Change Lives</span>
//             </h2>
//           </div>

//           <p
//             className="text-white/40 text-sm leading-relaxed max-w-xs lg:text-right"
//             style={{
//               opacity: animate ? 1 : 0,
//               transform: animate ? "translateY(0)" : "translateY(20px)",
//               transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
//             }}
//           >
//             Every programme we run is built around one goal — giving children
//             the resources and support they need to reach their full potential.
//           </p>
//         </div>

//         {/* ── Programme rows ── */}
//         <div className="flex flex-col">
//           {programs.map((program, i) => {
//             const isActive = activeId === program.id;

//             return (
//               <div
//                 key={program.id}
//                 className="border-t border-white/10 last:border-b"
//                 style={{
//                   opacity: animate ? 1 : 0,
//                   transform: animate ? "translateY(0)" : "translateY(24px)",
//                   transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
//                 }}
//               >
//                 {/* Row header — always visible */}
//                 <button
//                   className="w-full text-left group"
//                   onClick={() => setActiveId(isActive ? null : program.id)}
//                 >
//                   <div className="flex items-center justify-between gap-6 py-7">
//                     <div className="flex items-center gap-8 flex-1 min-w-0">
//                       {/* Number */}
//                       <span
//                         className={`text-xs font-bold tabular-nums flex-shrink-0 transition-colors duration-400
//                           ${isActive ? "text-[#f5c518]" : "text-white/25 group-hover:text-[#f5c518]/60"}`}
//                       >
//                         {program.number}
//                       </span>

//                       {/* Category */}
//                       <span
//                         className={`text-xs uppercase tracking-widest font-semibold flex-shrink-0 w-24 transition-colors duration-300
//                           ${isActive ? "text-[#f5c518]" : "text-white/30 group-hover:text-white/50"}`}
//                       >
//                         {program.category}
//                       </span>

//                       {/* Title */}
//                       <h3
//                         className={`text-base lg:text-lg font-semibold truncate transition-colors duration-300
//                           ${isActive ? "text-[#f5c518]" : "text-white group-hover:text-[#f5c518]"}`}
//                       >
//                         {program.title}
//                       </h3>
//                     </div>

//                     {/* Stat + toggle */}
//                     <div className="flex items-center gap-8 flex-shrink-0">
//                       {/* Stat — hidden on small screens */}
//                       <div className="hidden md:block text-right">
//                         <p
//                           className={`text-sm font-bold tabular-nums transition-colors duration-300
//                             ${isActive ? "text-[#f5c518]" : "text-white/60"}`}
//                         >
//                           {program.stat.value}
//                         </p>
//                         <p className="text-white/25 text-xs">
//                           {program.stat.label}
//                         </p>
//                       </div>

//                       {/* Toggle */}
//                       <div
//                         className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300
//                           ${
//                             isActive
//                               ? "border-[#f5c518]/50 bg-[#f5c518]/10 rotate-45"
//                               : "border-white/15 group-hover:border-white/30"
//                           }`}
//                       >
//                         <span
//                           className={`text-base leading-none transition-colors duration-300
//                             ${isActive ? "text-[#f5c518]" : "text-white/40"}`}
//                         >
//                           +
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </button>

//                 {/* Expanded content */}
//                 <div
//                   className={`overflow-hidden transition-all duration-500 ease-in-out
//                     ${isActive ? "max-h-64 opacity-100 pb-8" : "max-h-0 opacity-0"}`}
//                 >
//                   <div className="pl-0 lg:pl-36 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
//                     <p className="text-white/50 text-sm leading-relaxed max-w-xl">
//                       {program.description}
//                     </p>

//                     <div className="flex-shrink-0">
//                       {/* Mobile stat */}
//                       <div className="mb-4 md:hidden">
//                         <p className="text-[#f5c518] text-xl font-bold">
//                           {program.stat.value}
//                         </p>
//                         <p className="text-white/30 text-xs">
//                           {program.stat.label}
//                         </p>
//                       </div>

//                       <Link
//                         href={`/programs/${program.id}`}
//                         className="inline-flex items-center gap-2 text-sm font-semibold text-[#f5c518]
//                           hover:gap-3 transition-all duration-300"
//                       >
//                         <span>Learn more</span>
//                         <span>→</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* ── Bottom CTA ── */}
//         <div
//           className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-14 pt-10 border-t border-white/10"
//           style={{
//             opacity: animate ? 1 : 0,
//             transition: "opacity 0.6s ease 0.65s",
//           }}
//         >
//           <p className="text-white/35 text-sm">
//             Four structured initiatives. One shared mission.
//           </p>

//           <div className="flex items-center gap-3">
//             <Link
//               href="/programs"
//               className="inline-flex items-center gap-2 bg-[#f5c518] text-[#0a0f2c] font-bold px-7 py-3.5
//                 rounded-full text-sm tracking-wide hover:bg-[#e6b800] transition-all duration-300 group"
//             >
//               <span>All Programmes</span>
//               <span className="group-hover:translate-x-1 transition-transform duration-300">
//                 →
//               </span>
//             </Link>
//             <Link
//               href="/donate"
//               className="inline-flex items-center gap-2 border border-white/15 text-white/60 font-semibold
//                 px-7 py-3.5 rounded-full text-sm hover:border-[#f5c518]/40 hover:text-white transition-all duration-300"
//             >
//               Donate Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const highlights = [
  {
    id: 1,
    label: "Provide school supplies and uniforms",
    detail:
      "Books, bags, stationery & uniforms for children who need them most.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="13" y2="11" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Offer scholarships and sponsorships",
    detail: "Covering school fees so financial hardship never blocks a future.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Run mentorship and tutoring programs",
    detail:
      "Academic coaching, life skills, and a trusted adult in every child's corner.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Support children's health and well-being",
    detail: "Health screenings, hygiene education, and nutrition awareness.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0D1B5E] py-24 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Decorative corner accents */}
      <div
        className="absolute top-0 left-0 w-72 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(245,196,0,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(245,196,0,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Two-col layout: heading left, items right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-20 items-start">
          {/* Left: heading + CTA */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[2px] bg-[#F5C400]" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                What We Do
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-white text-3xl lg:text-[40px] font-bold leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              How we show
              <br />
              up for children.
            </h2>

            {/* Body copy */}
            <p className="text-white/60 text-[14.5px] leading-[1.85] mb-8">
              From classroom supplies to one-on-one mentorship, every programme
              we run is designed to remove barriers and create real, lasting
              change in children's lives.
            </p>

            {/* Primary CTA */}
            <Link
              href="/programs"
              className="inline-flex items-center gap-3 bg-white text-[#0D1B5E] text-[11.5px] font-bold tracking-[0.14em] uppercase px-7 py-[14px] rounded-full hover:bg-[#F5C400] transition-colors duration-200 group"
            >
              See All Programmes
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>

          {/* Right: 4 highlight rows */}
          <div className="space-y-3">
            {highlights.map((item, i) => (
              <div
                key={item.id}
                className="flex items-start gap-5 bg-white/5 rounded-2xl px-6 py-5 border border-white/10 hover:border-[#F5C400]/30 hover:bg-white/10 transition-all duration-200 group cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
                }}
              >
                {/* Icon bubble */}
                <div className="w-11 h-11 rounded-xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center flex-shrink-0 text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-[#0D1B5E] transition-colors duration-200">
                  {item.icon}
                </div>

                {/* Text */}
                <div className="pt-[2px] flex-1 min-w-0">
                  <p className="text-white text-[15px] font-semibold leading-snug mb-1">
                    {item.label}
                  </p>
                  <p className="text-white/50 text-[13px] leading-[1.7]">
                    {item.detail}
                  </p>
                </div>

                {/* Arrow hint */}
                <div className="ml-auto pl-3 self-center text-white/20 text-sm flex-shrink-0 group-hover:text-[#F5C400] group-hover:translate-x-1 transition-all duration-200">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip: quick stats + donate CTA */}
        <div
          className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.65s",
          }}
        >
          <p className="text-white/40 text-[12.5px]">
            500+ children supported · 1,000+ supplies distributed · 50+
            communities reached
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 bg-[#F5C400] text-[#0D1B5E] text-[11px] font-bold tracking-[0.15em] uppercase px-6 py-[11px] rounded-full hover:bg-[#e6b800] transition-colors duration-200 group"
          >
            Support a Child
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
