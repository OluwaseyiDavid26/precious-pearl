// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// // ── Icons ──────────────────────────────────────────────────
// const UsersIcon = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// );

// const PackageIcon = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
//     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
//     <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
//     <line x1="12" y1="22.08" x2="12" y2="12" />
//   </svg>
// );

// const LayoutIcon = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <rect x="3" y="3" width="7" height="7" />
//     <rect x="14" y="3" width="7" height="7" />
//     <rect x="14" y="14" width="7" height="7" />
//     <rect x="3" y="14" width="7" height="7" />
//   </svg>
// );

// const MapPinIcon = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// const QuoteIcon = () => (
//   <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
//     <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
//   </svg>
// );

// // ── Data ───────────────────────────────────────────────────
// const stats = [
//   {
//     value: 500,
//     suffix: "+",
//     label: "Children Supported",
//     description:
//       "School-aged children given access to quality education and essential resources.",
//     Icon: UsersIcon,
//   },
//   {
//     value: 1000,
//     suffix: "+",
//     label: "Supplies Distributed",
//     description:
//       "Learning materials delivered directly into the hands of children who need them.",
//     Icon: PackageIcon,
//   },
//   {
//     value: 4,
//     suffix: "",
//     label: "Active Programs",
//     description:
//       "Structured initiatives across education, mentorship, and community outreach.",
//     Icon: LayoutIcon,
//   },
//   {
//     value: 50,
//     suffix: "+",
//     label: "Communities Reached",
//     description:
//       "Neighbourhoods mobilised around children's futures through sustained engagement.",
//     Icon: MapPinIcon,
//   },
// ];

// const testimonial = {
//   quote:
//     "Before PPSI came to our school, many of our pupils had no books, no bags — nothing. Today, I watch them walk in prepared, confident, and excited to learn. That change is everything.",
//   name: "Mrs. Adeyemi",
//   role: "Head Teacher, Ibadan Primary School",
//   initials: "MA",
// };

// // ── Count-up hook ──────────────────────────────────────────
// function useCountUp(target: number, duration: number, start: boolean) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let startTime: number | null = null;
//     const step = (ts: number) => {
//       if (!startTime) startTime = ts;
//       const progress = Math.min((ts - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(eased * target));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [target, duration, start]);
//   return count;
// }

// // ── Stat card ──────────────────────────────────────────────
// function StatCard({
//   stat,
//   index,
//   animate,
// }: {
//   stat: (typeof stats)[0];
//   index: number;
//   animate: boolean;
// }) {
//   const count = useCountUp(stat.value, 1800, animate);
//   return (
//     <div
//       className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-7 hover:border-[#F5C400]/30 hover:bg-white/[0.07] transition-all duration-300"
//       style={{
//         opacity: animate ? 1 : 0,
//         transform: animate ? "translateY(0)" : "translateY(24px)",
//         transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s, border-color 0.3s, background 0.3s`,
//       }}
//     >
//       {/* Icon */}
//       <div className="w-10 h-10 rounded-xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400] mb-5 group-hover:bg-[#F5C400] group-hover:text-[#0D1B5E] group-hover:border-[#F5C400] transition-all duration-300">
//         <stat.Icon />
//       </div>

//       {/* Number */}
//       <div className="flex items-end gap-0.5 mb-2">
//         <span
//           className="text-[48px] leading-none font-bold tracking-tight text-white"
//           style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//         >
//           {count.toLocaleString()}
//         </span>
//         <span className="text-[#F5C400] text-[28px] font-bold mb-1">
//           {stat.suffix}
//         </span>
//       </div>

//       {/* Label */}
//       <p className="text-white text-[15px] font-semibold mb-2">{stat.label}</p>

//       {/* Description */}
//       <p className="text-white/40 text-[13px] leading-[1.75]">
//         {stat.description}
//       </p>

//       {/* Subtle corner accent */}
//       <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-3xl rounded-tl-3xl bg-[#F5C400]/[0.03] pointer-events-none" />
//     </div>
//   );
// }

// // ── Section ────────────────────────────────────────────────
// export default function ImpactSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.15 },
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#0D1B5E] overflow-hidden py-28 px-6"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       {/* Top divider */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.07]" />

//       {/* Gold radial glow */}
//       <div
//         className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(245,196,0,0.06) 0%, transparent 65%)",
//         }}
//       />
//       <div
//         className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(245,196,0,0.04) 0%, transparent 65%)",
//         }}
//       />

//       <div className="max-w-6xl mx-auto relative">
//         {/* ── Header row ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
//           {/* Left: eyebrow + heading */}
//           <div>
//             <div
//               className="flex items-center gap-3 mb-5"
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? "translateY(0)" : "translateY(16px)",
//                 transition: "opacity 0.6s ease, transform 0.6s ease",
//               }}
//             >
//               <div className="w-6 h-[2px] bg-[#F5C400]" />
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                 Our Impact
//               </span>
//             </div>
//             <h2
//               className="text-white text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight"
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? "translateY(0)" : "translateY(16px)",
//                 transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
//                 fontFamily: "'Fraunces', Georgia, serif",
//               }}
//             >
//               Numbers That
//               <br />
//               <span className="text-[#F5C400]">Tell the Story</span>
//             </h2>
//           </div>

//           {/* Right: testimonial */}
//           <div
//             className="bg-white/[0.04] border border-white/10 rounded-3xl p-7 hover:border-[#F5C400]/25 transition-colors duration-300"
//             style={{
//               opacity: animate ? 1 : 0,
//               transform: animate ? "translateY(0)" : "translateY(16px)",
//               transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
//             }}
//           >
//             {/* Quote icon */}
//             <div className="text-[#F5C400]/30 mb-4">
//               <QuoteIcon />
//             </div>

//             <p className="text-white/65 text-[14.5px] leading-[1.85] italic mb-5">
//               &ldquo;{testimonial.quote}&rdquo;
//             </p>

//             {/* Divider */}
//             <div className="w-full h-px bg-white/[0.07] mb-5" />

//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-[#F5C400]/10 border border-[#F5C400]/30 flex items-center justify-center flex-shrink-0">
//                 <span className="text-[#F5C400] text-[11px] font-bold">
//                   {testimonial.initials}
//                 </span>
//               </div>
//               <div>
//                 <p className="text-white text-[14px] font-semibold">
//                   {testimonial.name}
//                 </p>
//                 <p className="text-white/40 text-[12px]">{testimonial.role}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Stats grid ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((stat, i) => (
//             <StatCard
//               key={stat.label}
//               stat={stat}
//               index={i}
//               animate={animate}
//             />
//           ))}
//         </div>

//         {/* ── Bottom bar ── */}
//         <div
//           className="mt-10 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
//           style={{
//             opacity: animate ? 1 : 0,
//             transition: "opacity 0.7s ease 0.65s",
//           }}
//         >
//           <p className="text-white/30 text-[12.5px]">
//             All figures represent verified programme data as of 2025.
//           </p>
//           <Link
//             href="/about"
//             className="inline-flex items-center gap-2 text-[#F5C400] text-[12.5px] font-semibold hover:opacity-75 transition-opacity group"
//           >
//             Read our full impact report
//             <span className="group-hover:translate-x-1 transition-transform duration-200">
//               →
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const UsersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PackageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const LayoutIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Children Supported",
    description:
      "School-aged children given access to quality education and essential resources.",
    Icon: UsersIcon,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Supplies Distributed",
    description:
      "Learning materials delivered directly into the hands of children who need them.",
    Icon: PackageIcon,
  },
  {
    value: 4,
    suffix: "",
    label: "Active Programs",
    description:
      "Structured initiatives across education, mentorship, and community outreach.",
    Icon: LayoutIcon,
  },
  {
    value: 50,
    suffix: "+",
    label: "Communities Reached",
    description:
      "Neighbourhoods mobilised around children's futures through sustained engagement.",
    Icon: MapPinIcon,
  },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({
  stat,
  index,
  animate,
}: {
  stat: (typeof stats)[0];
  index: number;
  animate: boolean;
}) {
  const count = useCountUp(stat.value, 1800, animate);
  return (
    <div
      className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-7 hover:border-[#F5C400]/30 hover:bg-white/[0.07] transition-all duration-300"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s ease ${index * 0.12}s, border-color 0.3s, background 0.3s`,
      }}
    >
      <div className="w-10 h-10 rounded-xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400] mb-5 group-hover:bg-[#F5C400] group-hover:text-[#0D1B5E] group-hover:border-[#F5C400] transition-all duration-300">
        <stat.Icon />
      </div>
      <div className="flex items-end gap-0.5 mb-2">
        <span
          className="text-[48px] leading-none font-bold tracking-tight text-white"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          {count.toLocaleString()}
        </span>
        <span className="text-[#F5C400] text-[28px] font-bold mb-1">
          {stat.suffix}
        </span>
      </div>
      <p className="text-white text-[15px] font-semibold mb-2">{stat.label}</p>
      <p className="text-white/40 text-[13px] leading-[1.75]">
        {stat.description}
      </p>
      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-br-3xl rounded-tl-3xl bg-[#F5C400]/[0.03] pointer-events-none" />
    </div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0D1B5E] overflow-hidden py-28 px-6"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.07]" />
      <div
        className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,196,0,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,196,0,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div
            className="flex items-center justify-center gap-3 mb-5"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="w-6 h-[2px] bg-[#F5C400]" />
            <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
              Our Impact
            </span>
            <div className="w-6 h-[2px] bg-[#F5C400]" />
          </div>
          <h2
            className="text-white text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            Numbers That <span className="text-[#F5C400]">Tell the Story</span>
          </h2>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={i}
              animate={animate}
            />
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-10 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.7s ease 0.65s",
          }}
        >
          <p className="text-white/30 text-[12.5px]">
            All figures represent verified programme data as of 2025.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#F5C400] text-[12.5px] font-semibold hover:opacity-75 transition-opacity group"
          >
            Read our full impact report
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
