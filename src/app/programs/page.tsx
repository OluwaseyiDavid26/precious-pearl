// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// // ── SVG Icons ──────────────────────────────────────────────
// const BookIcon = () => (
//   <svg
//     width="22"
//     height="22"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
//     <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
//     <line x1="9" y1="7" x2="15" y2="7" />
//     <line x1="9" y1="11" x2="13" y2="11" />
//   </svg>
// );

// const GraduationIcon = () => (
//   <svg
//     width="22"
//     height="22"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
//     <path d="M6 12v5c3 3 9 3 12 0v-5" />
//   </svg>
// );

// const MentorIcon = () => (
//   <svg
//     width="22"
//     height="22"
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

// const HeartPulseIcon = () => (
//   <svg
//     width="22"
//     height="22"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//     <polyline points="22 12 18 12 15 19 9 5 6 12 2 12" />
//   </svg>
// );

// const GlobeIcon = () => (
//   <svg
//     width="22"
//     height="22"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="12" cy="12" r="10" />
//     <line x1="2" y1="12" x2="22" y2="12" />
//     <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//   </svg>
// );

// const ArrowRight = () => (
//   <svg
//     width="15"
//     height="15"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <line x1="5" y1="12" x2="19" y2="12" />
//     <polyline points="12 5 19 12 12 19" />
//   </svg>
// );

// // ── Data ───────────────────────────────────────────────────
// const programs = [
//   {
//     id: 1,
//     number: "01",
//     Icon: BookIcon,
//     tag: "Education",
//     title: "School Support Program",
//     description:
//       "Providing essential learning materials such as books, bags, uniforms, and supplies to children from low-income families. What may seem like a small gift to a donor can be the difference between a child attending or missing school entirely.",
//     stats: [
//       { value: "1,000+", label: "Supplies Distributed" },
//       { value: "300+", label: "Children Reached" },
//     ],
//   },
//   {
//     id: 2,
//     number: "02",
//     Icon: GraduationIcon,
//     tag: "Scholarship",
//     title: "Scholarship Program",
//     description:
//       "Financial assistance for children who cannot afford school fees. We work directly with schools to cover fees for identified children in need — keeping them in classrooms and keeping their futures bright.",
//     stats: [
//       { value: "200+", label: "Children Sponsored" },
//       { value: "12", label: "Partner Schools" },
//     ],
//   },
//   {
//     id: 3,
//     number: "03",
//     Icon: MentorIcon,
//     tag: "Mentorship",
//     title: "Mentorship & Tutoring",
//     description:
//       "Academic support and life skills training to guide children toward success. Our trained volunteer mentors provide consistent emotional support, career guidance, and a trusted presence for children who need it most.",
//     stats: [
//       { value: "150+", label: "Active Mentorships" },
//       { value: "80+", label: "Trained Mentors" },
//     ],
//   },
//   {
//     id: 4,
//     number: "04",
//     Icon: HeartPulseIcon,
//     tag: "Wellness",
//     title: "Health & Wellness",
//     description:
//       "Promoting hygiene, nutrition, and access to basic healthcare. We run health screenings, nutrition awareness sessions, and hygiene education — because a child's well-being is inseparable from their ability to thrive in school.",
//     stats: [
//       { value: "300+", label: "Children Reached" },
//       { value: "20+", label: "Health Sessions" },
//     ],
//   },
//   {
//     id: 5,
//     number: "05",
//     Icon: GlobeIcon,
//     tag: "Community",
//     title: "Community Outreach",
//     description:
//       "Engaging families and communities to support children's education. Through workshops, events, and partnerships with local leaders, we build an ecosystem of support so every child is surrounded by people who believe in their future.",
//     stats: [
//       { value: "50+", label: "Communities Reached" },
//       { value: "500+", label: "Volunteers Engaged" },
//     ],
//   },
// ];

// // ── Reveal hook ────────────────────────────────────────────
// function useReveal(ref: React.RefObject<HTMLElement | null>) {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target
//               .querySelectorAll<HTMLElement>(".reveal-item")
//               .forEach((el, i) => {
//                 setTimeout(() => {
//                   el.style.opacity = "1";
//                   el.style.transform = "translateY(0)";
//                 }, i * 100);
//               });
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.08 },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [ref]);
// }

// const hidden: React.CSSProperties = {
//   opacity: 0,
//   transform: "translateY(24px)",
//   transition: "opacity 0.6s ease, transform 0.6s ease",
// };

// // ── Page ───────────────────────────────────────────────────
// export default function ProgramsPage() {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const listRef = useRef<HTMLDivElement>(null);
//   const ctaRef = useRef<HTMLDivElement>(null);

//   useReveal(heroRef);
//   useReveal(listRef);
//   useReveal(ctaRef);

//   return (
//     <>
//       <Navbar />

//       <main
//         className="bg-[#0D1B5E] min-h-screen text-white"
//         style={{ fontFamily: "'DM Sans', sans-serif" }}
//       >
//         {/* ── HERO ── */}
//         <section ref={heroRef} className="relative overflow-hidden py-28 px-6">
//           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background:
//                 "radial-gradient(ellipse at top left, rgba(245,196,0,0.07) 0%, transparent 60%)",
//             }}
//           />
//           {/* Watermark */}
//           <div
//             className="absolute right-0 bottom-0 text-[220px] font-black leading-none select-none pointer-events-none"
//             style={{
//               color: "rgba(245,196,0,0.03)",
//               fontFamily: "'Fraunces', Georgia, serif",
//             }}
//           >
//             05
//           </div>

//           <div className="max-w-5xl mx-auto relative">
//             <div
//               className="reveal-item flex items-center gap-3 mb-6"
//               style={hidden}
//             >
//               <div className="w-6 h-[2px] bg-[#F5C400]" />
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                 Our Programmes
//               </span>
//             </div>
//             <h1
//               className="reveal-item text-4xl lg:text-[56px] font-bold leading-[1.07] tracking-tight mb-6 max-w-2xl"
//               style={{ ...hidden, fontFamily: "'Fraunces', Georgia, serif" }}
//             >
//               Five Ways We
//               <br />
//               <span className="text-[#F5C400]">Change Lives.</span>
//             </h1>
//             <p
//               className="reveal-item text-white/50 text-[15px] leading-[1.85] max-w-lg"
//               style={hidden}
//             >
//               Every programme is intentional, measurable, and designed to remove
//               the barriers standing between a child and their potential.
//             </p>
//           </div>
//         </section>

//         {/* ── PROGRAMME CARDS ── */}
//         <section ref={listRef} className="py-20 px-6">
//           <div className="max-w-5xl mx-auto space-y-5">
//             {programs.map((p) => (
//               <div
//                 key={p.id}
//                 className="reveal-item group bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden hover:border-[#F5C400]/30 hover:bg-white/[0.07] transition-all duration-300"
//                 style={hidden}
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px]">
//                   {/* ── Left: content ── */}
//                   <div className="p-8 lg:p-10">
//                     {/* Number + tag row */}
//                     <div className="flex items-center gap-4 mb-6">
//                       <span className="text-[11px] font-black tracking-[0.3em] text-white/20">
//                         {p.number}
//                       </span>
//                       <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-[5px] rounded-full bg-[#F5C400]/10 border border-[#F5C400]/20 text-[#F5C400]">
//                         {p.tag}
//                       </span>
//                     </div>

//                     {/* Icon + title */}
//                     <div className="flex items-start gap-4 mb-5">
//                       <div className="w-12 h-12 rounded-2xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400] flex-shrink-0 group-hover:bg-[#F5C400] group-hover:text-[#0D1B5E] group-hover:border-[#F5C400] transition-all duration-300">
//                         <p.Icon />
//                       </div>
//                       <h2
//                         className="text-white text-[22px] font-bold leading-snug pt-1"
//                         style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                       >
//                         {p.title}
//                       </h2>
//                     </div>

//                     <p className="text-white/50 text-[14.5px] leading-[1.85] max-w-xl">
//                       {p.description}
//                     </p>
//                   </div>

//                   {/* ── Right: stats ── */}
//                   <div className="flex lg:flex-col justify-between gap-4 px-8 py-8 lg:px-8 lg:py-10 border-t lg:border-t-0 lg:border-l border-white/[0.07]">
//                     {p.stats.map((s) => (
//                       <div key={s.label}>
//                         <p
//                           className="text-[#F5C400] text-[30px] font-black leading-none mb-1"
//                           style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                         >
//                           {s.value}
//                         </p>
//                         <p className="text-white/35 text-[11px] uppercase tracking-[0.18em] font-medium">
//                           {s.label}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── CTA BANNER ── */}
//         <section
//           ref={ctaRef}
//           className="py-20 px-6 border-t border-white/[0.06]"
//         >
//           <div className="max-w-5xl mx-auto">
//             <div
//               className="reveal-item relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 px-10 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 hover:border-[#F5C400]/25 transition-colors duration-300"
//               style={hidden}
//             >
//               {/* Gold top line */}
//               <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5C400]" />

//               {/* Watermark */}
//               <div
//                 className="absolute right-10 top-1/2 -translate-y-1/2 text-[140px] font-black leading-none select-none pointer-events-none"
//                 style={{
//                   color: "rgba(245,196,0,0.03)",
//                   fontFamily: "'Fraunces', Georgia, serif",
//                 }}
//               >
//                 PPSI
//               </div>

//               <div className="relative">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-5 h-[2px] bg-[#F5C400]" />
//                   <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                     Make a Difference
//                   </span>
//                 </div>
//                 <h2
//                   className="text-white text-3xl lg:text-[38px] font-bold leading-[1.12] mb-3"
//                   style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                 >
//                   Every contribution
//                   <br />
//                   changes a child's story.
//                 </h2>
//                 <p className="text-white/45 text-[14px] max-w-md leading-[1.8]">
//                   Whether you donate, volunteer, or simply share — you're part
//                   of the movement building better futures.
//                 </p>
//               </div>

//               <div className="relative flex flex-col sm:flex-row gap-3 flex-shrink-0">
//                 <Link
//                   href="/donate"
//                   className="inline-flex items-center gap-2 bg-[#F5C400] text-[#0D1B5E] text-[11.5px] font-bold tracking-[0.14em] uppercase px-7 py-[14px] rounded-full hover:bg-white transition-colors duration-200 group"
//                 >
//                   Donate Now
//                   <span className="group-hover:translate-x-1 transition-transform duration-200">
//                     <ArrowRight />
//                   </span>
//                 </Link>
//                 <Link
//                   href="/#contact"
//                   className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-[11.5px] font-bold tracking-[0.14em] uppercase px-7 py-[14px] rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 group"
//                 >
//                   Get Involved
//                   <span className="group-hover:translate-x-1 transition-transform duration-200">
//                     <ArrowRight />
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ── Icons ──────────────────────────────────────────────────
const BookIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="13" y2="11" />
  </svg>
);
const GraduationIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const MentorIcon = () => (
  <svg
    width="22"
    height="22"
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
const HeartPulseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    <polyline points="22 12 18 12 15 19 9 5 6 12 2 12" />
  </svg>
);
const GlobeIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const ArrowRight = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────
const programs = [
  {
    id: 1,
    number: "01",
    Icon: BookIcon,
    tag: "Education",
    title: "School Support Program",
    description:
      "Providing essential learning materials such as books, bags, uniforms, and supplies to children from low-income families. What may seem like a small gift to a donor can be the difference between a child attending or missing school entirely.",
    stats: [
      { value: "1,000+", label: "Supplies Distributed" },
      { value: "300+", label: "Children Reached" },
    ],
  },
  {
    id: 2,
    number: "02",
    Icon: GraduationIcon,
    tag: "Scholarship",
    title: "Scholarship Program",
    description:
      "Financial assistance for children who cannot afford school fees. We work directly with schools to cover fees for identified children in need — keeping them in classrooms and keeping their futures bright.",
    stats: [
      { value: "200+", label: "Children Sponsored" },
      { value: "12", label: "Partner Schools" },
    ],
  },
  {
    id: 3,
    number: "03",
    Icon: MentorIcon,
    tag: "Mentorship",
    title: "Mentorship & Tutoring",
    description:
      "Academic support and life skills training to guide children toward success. Our trained volunteer mentors provide consistent emotional support, career guidance, and a trusted presence for children who need it most.",
    stats: [
      { value: "150+", label: "Active Mentorships" },
      { value: "80+", label: "Trained Mentors" },
    ],
  },
  {
    id: 4,
    number: "04",
    Icon: HeartPulseIcon,
    tag: "Wellness",
    title: "Health & Wellness",
    description:
      "Promoting hygiene, nutrition, and access to basic healthcare. We run health screenings, nutrition awareness sessions, and hygiene education — because a child's well-being is inseparable from their ability to thrive in school.",
    stats: [
      { value: "300+", label: "Children Reached" },
      { value: "20+", label: "Health Sessions" },
    ],
  },
  {
    id: 5,
    number: "05",
    Icon: GlobeIcon,
    tag: "Community",
    title: "Community Outreach",
    description:
      "Engaging families and communities to support children's education. Through workshops, events, and partnerships with local leaders, we build an ecosystem of support so every child is surrounded by people who believe in their future.",
    stats: [
      { value: "50+", label: "Communities Reached" },
      { value: "500+", label: "Volunteers Engaged" },
    ],
  },
];

// ── Scroll reveal hook ─────────────────────────────────────
function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Individual card reveal (each card gets its own observer) ──
function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden hover:border-[#F5C400]/30 hover:bg-white/[0.07] transition-all duration-300 relative"
      style={{
        opacity: visible ? 1 : 0,
        // Unroll: clip from left + slight translateX
        clipPath: visible
          ? "inset(0% 0% 0% 0% round 24px)"
          : "inset(0% 100% 0% 0% round 24px)",
        transform: visible ? "translateX(0)" : "translateX(-24px)",
        transition: `opacity 0.5s ease ${index * 0.1}s,
                     clip-path 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s,
                     transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s,
                     border-color 0.3s, background 0.3s`,
      }}
    >
      {/* Left gold reveal bar — animates with the clip */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#F5C400]/60 via-[#F5C400] to-[#F5C400]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px]">
        {/* Content */}
        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-black tracking-[0.3em] text-white/20">
              {program.number}
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-[5px] rounded-full bg-[#F5C400]/10 border border-[#F5C400]/20 text-[#F5C400]">
              {program.tag}
            </span>
          </div>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400] flex-shrink-0 group-hover:bg-[#F5C400] group-hover:text-[#0D1B5E] group-hover:border-[#F5C400] transition-all duration-300">
              <program.Icon />
            </div>
            <h2
              className="text-white text-[22px] font-bold leading-snug pt-1"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              {program.title}
            </h2>
          </div>
          <p className="text-white/50 text-[14.5px] leading-[1.85] max-w-xl">
            {program.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex lg:flex-col justify-between gap-4 px-8 py-8 lg:px-8 lg:py-10 border-t lg:border-t-0 lg:border-l border-white/[0.07]">
          {program.stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-[#F5C400] text-[30px] font-black leading-none mb-1"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {s.value}
              </p>
              <p className="text-white/35 text-[11px] uppercase tracking-[0.18em] font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────
export default function ProgramsPage() {
  const { ref: heroRef, visible: heroVisible } = useScrollReveal(0.1);
  const { ref: ctaRef, visible: ctaVisible } = useScrollReveal(0.15);

  function slideLeft(delay = 0) {
    return {
      opacity: heroVisible ? 1 : 0,
      transform: heroVisible ? "translateX(0)" : "translateX(-48px)",
      transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    };
  }

  return (
    <>
      <Navbar />
      <main
        className="bg-[#0D1B5E] min-h-screen text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── HERO: left slide ── */}
        <section
          ref={heroRef as React.RefObject<HTMLElement>}
          className="relative overflow-hidden py-28 px-6"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top left, rgba(245,196,0,0.07) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute right-0 bottom-0 text-[220px] font-black leading-none select-none pointer-events-none"
            style={{
              color: "rgba(245,196,0,0.03)",
              fontFamily: "'Fraunces', Georgia, serif",
            }}
          >
            05
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="flex items-center gap-3 mb-6" style={slideLeft(0)}>
              <div className="w-6 h-[2px] bg-[#F5C400]" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                Our Programmes
              </span>
            </div>
            <h1
              className="text-4xl lg:text-[56px] font-bold leading-[1.07] tracking-tight mb-6 max-w-2xl"
              style={{
                ...slideLeft(0.1),
                fontFamily: "'Fraunces', Georgia, serif",
              }}
            >
              Five Ways We
              <br />
              <span className="text-[#F5C400]">Change Lives.</span>
            </h1>
            <p
              className="text-white/50 text-[15px] leading-[1.85] max-w-lg"
              style={slideLeft(0.2)}
            >
              Every programme is intentional, measurable, and designed to remove
              the barriers standing between a child and their potential.
            </p>
          </div>
        </section>

        {/* ── PROGRAMME CARDS: unroll left-to-right ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto space-y-5">
            {programs.map((p, i) => (
              <ProgramCard key={p.id} program={p} index={i} />
            ))}
          </div>
        </section>

        {/* ── CTA BANNER: perspective-tilt snap ── */}
        <section
          ref={ctaRef as React.RefObject<HTMLElement>}
          className="py-20 px-6 border-t border-white/[0.06]"
        >
          <div className="max-w-5xl mx-auto">
            <div
              className="relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 px-10 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 hover:border-[#F5C400]/25 transition-colors duration-300"
              style={{
                opacity: ctaVisible ? 1 : 0,
                transform: ctaVisible
                  ? "perspective(800px) rotateX(0deg) translateY(0)"
                  : "perspective(800px) rotateX(8deg) translateY(40px)",
                transformOrigin: "bottom center",
                transition:
                  "opacity 0.7s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5C400]" />
              <div
                className="absolute right-10 top-1/2 -translate-y-1/2 text-[140px] font-black leading-none select-none pointer-events-none"
                style={{
                  color: "rgba(245,196,0,0.03)",
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                PPSI
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-[2px] bg-[#F5C400]" />
                  <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                    Make a Difference
                  </span>
                </div>
                <h2
                  className="text-white text-3xl lg:text-[38px] font-bold leading-[1.12] mb-3"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  Every contribution
                  <br />
                  changes a child's story.
                </h2>
                <p className="text-white/45 text-[14px] max-w-md leading-[1.8]">
                  Whether you donate, volunteer, or simply share — you're part
                  of the movement building better futures.
                </p>
              </div>

              <div className="relative flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-[#F5C400] text-[#0D1B5E] text-[11.5px] font-bold tracking-[0.14em] uppercase px-7 py-[14px] rounded-full hover:bg-white transition-colors duration-200 group"
                >
                  Donate Now
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight />
                  </span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-[11.5px] font-bold tracking-[0.14em] uppercase px-7 py-[14px] rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 group"
                >
                  Get Involved
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
