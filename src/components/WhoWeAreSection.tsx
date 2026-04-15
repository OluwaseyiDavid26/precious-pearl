// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// const pillars = [
//   {
//     number: "01",
//     title: "Education",
//     body: "Providing school supplies, tuition support, and learning resources to children who would otherwise go without.",
//   },
//   {
//     number: "02",
//     title: "Community",
//     body: "Mobilising parents, teachers, and local leaders to build a lasting support system around every child we serve.",
//   },
//   {
//     number: "03",
//     title: "Empowerment",
//     body: "Equipping children with mentorship, life skills, and the confidence to pursue the futures they deserve.",
//   },
// ];

// export default function WhoWeAreSection() {
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
//       className="relative bg-[#0a0f2c] overflow-hidden py-28 px-6"
//     >
//       {/* Top rule */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//       {/* Ambient glow */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f5c518]/4 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

//       <div className="max-w-6xl mx-auto relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           {/* ── Left column ── */}
//           <div>
//             {/* Eyebrow */}
//             <div
//               className="flex items-center gap-3 mb-8"
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? "translateY(0)" : "translateY(20px)",
//                 transition: "opacity 0.6s ease, transform 0.6s ease",
//               }}
//             >
//               <div className="w-8 h-px bg-[#f5c518]" />
//               <span className="text-[#f5c518] text-xs tracking-[0.25em] uppercase font-semibold">
//                 Who We Are
//               </span>
//             </div>

//             {/* Heading */}
//             <h2
//               className="text-white text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-8"
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? "translateY(0)" : "translateY(20px)",
//                 transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
//               }}
//             >
//               A Community Built
//               <br />
//               on <span className="text-[#f5c518]">Purpose</span>
//             </h2>

//             {/* Body copy */}
//             <div
//               className="space-y-4 mb-10"
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? "translateY(0)" : "translateY(20px)",
//                 transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
//               }}
//             >
//               <p className="text-white/60 text-base leading-relaxed">
//                 Precious Pearl Support Initiative was founded on one conviction
//                 — that every child, regardless of circumstance, deserves access
//                 to quality education and the tools to thrive.
//               </p>
//               <p className="text-white/45 text-base leading-relaxed">
//                 We work alongside schools, families, and communities to bridge
//                 the gap between need and opportunity — providing resources,
//                 mentorship, and structured programmes that create lasting
//                 change.
//               </p>
//             </div>

//             {/* CTA */}
//             <div
//               style={{
//                 opacity: animate ? 1 : 0,
//                 transform: animate ? "translateY(0)" : "translateY(20px)",
//                 transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
//               }}
//             >
//               <Link
//                 href="/about"
//                 className="inline-flex items-center gap-2 bg-[#f5c518] text-[#0a0f2c] font-bold px-7 py-3.5 rounded-full
//                   text-sm tracking-wide hover:bg-[#e6b800] transition-all duration-300 group"
//               >
//                 <span>Our Full Story</span>
//                 <span className="group-hover:translate-x-1 transition-transform duration-300">
//                   →
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* ── Right column ── */}
//           <div className="flex flex-col gap-0">
//             {pillars.map((pillar, i) => (
//               <div
//                 key={pillar.number}
//                 className="group py-8 flex gap-7 items-start border-t border-white/10 last:border-b
//                   hover:border-[#f5c518]/30 transition-colors duration-500"
//                 style={{
//                   opacity: animate ? 1 : 0,
//                   transform: animate ? "translateY(0)" : "translateY(24px)",
//                   transition: `opacity 0.6s ease ${0.2 + i * 0.12}s, transform 0.6s ease ${0.2 + i * 0.12}s`,
//                 }}
//               >
//                 {/* Number */}
//                 <span className="text-[#f5c518]/35 text-xs font-bold tabular-nums pt-1 flex-shrink-0 group-hover:text-[#f5c518]/70 transition-colors duration-500">
//                   {pillar.number}
//                 </span>

//                 {/* Content */}
//                 <div>
//                   <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#f5c518] transition-colors duration-500">
//                     {pillar.title}
//                   </h3>
//                   <p className="text-white/40 text-sm leading-relaxed">
//                     {pillar.body}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Education",
    body: "Providing school supplies, tuition support, and learning resources to children who would otherwise go without.",
  },
  {
    number: "02",
    title: "Community",
    body: "Mobilising parents, teachers, and local leaders to build a lasting support system around every child we serve.",
  },
  {
    number: "03",
    title: "Empowerment",
    body: "Equipping children with mentorship, life skills, and the confidence to pursue the futures they deserve.",
  },
];

// ── Generic in-view hook ───────────────────────────────────
function useInView(threshold = 0.1, rootMargin = "0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    const timer = setTimeout(() => observer.observe(el), 80);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, visible };
}

// ── ANIMATION A: Per-word mask-lift (theatre curtain) ──────
// Each word slides up from behind an invisible floor
function MaskedWordReveal({
  text,
  visible,
  baseDelay = 0,
  goldWords = [] as string[],
  className = "",
}: {
  text: string;
  visible: boolean;
  baseDelay?: number;
  goldWords?: string[];
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => {
        const isGold = goldWords.includes(word.replace(/[^a-zA-Z]/g, ""));
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              marginRight: "0.28em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                color: isGold ? "#f5c518" : "white",
                transform: visible ? "translateY(0)" : "translateY(110%)",
                opacity: visible ? 1 : 0,
                transition: `transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + i * 0.075}s,
                             opacity 0.3s ease ${baseDelay + i * 0.075}s`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </span>
  );
}

// ── ANIMATION B: Fog-lift (blur + fade) ───────────────────
function FogReveal({
  children,
  visible,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  visible: boolean;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(6px)",
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.8s ease ${delay}s,
                     filter 0.8s ease ${delay}s,
                     transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── ANIMATION C: Spring scale-in (for CTA button) ─────────
function SpringReveal({
  children,
  visible,
  delay = 0,
}: {
  children: React.ReactNode;
  visible: boolean;
  delay?: number;
}) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scale(1) translateY(0)"
          : "scale(0.88) translateY(12px)",
        transition: `opacity 0.5s ease ${delay}s,
                     transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── ANIMATION D: Border-draw + content rise (pillars) ─────
function PillarRow({
  pillar,
  index,
  sectionVisible,
}: {
  pillar: (typeof pillars)[0];
  index: number;
  sectionVisible: boolean;
}) {
  const baseDelay = 0.55 + index * 0.16;

  return (
    <div className="group relative py-8 flex gap-7 items-start last:border-b last:border-white/10">
      {/* Animated border-draw line — grows from left to right */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        {/* Static dim base */}
        <div className="absolute inset-0 bg-white/10" />
        {/* Animated gold sweep */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #f5c518 0%, #f5c518 100%)",
            transformOrigin: "left center",
            transform: sectionVisible ? "scaleX(1)" : "scaleX(0)",
            transition: `transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay}s`,
            opacity: 0.4,
          }}
        />
      </div>

      {/* Hover gold border — slides in on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, #f5c518/60, #f5c518, #f5c518/60)",
        }}
      />

      {/* Number */}
      <span
        style={{
          opacity: sectionVisible ? 0.35 : 0,
          transform: sectionVisible ? "translateX(0)" : "translateX(-12px)",
          transition: `opacity 0.5s ease ${baseDelay + 0.18}s,
                       transform 0.5s ease ${baseDelay + 0.18}s`,
          color: "#f5c518",
          fontSize: "11px",
          fontWeight: 700,
          paddingTop: "2px",
          flexShrink: 0,
          fontVariantNumeric: "tabular-nums",
        }}
        className="group-hover:!opacity-70 transition-all duration-500"
      >
        {pillar.number}
      </span>

      {/* Content block */}
      <div
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? "translateY(0)" : "translateY(18px)",
          transition: `opacity 0.6s ease ${baseDelay + 0.22}s,
                       transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${baseDelay + 0.22}s`,
        }}
      >
        <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#f5c518] transition-colors duration-500">
          {pillar.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">{pillar.body}</p>
      </div>

      {/* Hover arrow indicator */}
      <div
        className="ml-auto pt-1 opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:translate-x-0 -translate-x-2"
        style={{ flexShrink: 0 }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#f5c518"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────
export default function WhoWeAreSection() {
  const { ref: sectionRef, visible } = useInView(0.08, "0px");

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0f2c] overflow-hidden py-28 px-6"
    >
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow — breathes in with section */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)",
          opacity: visible ? 1 : 0,
          transform: `translateX(${visible ? "33%" : "50%"}) translateY(-50%)`,
          transition: "opacity 1.4s ease 0.1s, transform 1.4s ease 0.1s",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 0.3s",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* ── Left column ── */}
          <div>
            {/* Eyebrow — slides in from left */}
            <div
              className="flex items-center gap-3 mb-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-32px)",
                transition:
                  "opacity 0.6s ease 0.0s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0.0s",
              }}
            >
              {/* Animated line that grows rightward */}
              <div
                style={{
                  height: "1px",
                  background: "#f5c518",
                  width: visible ? "32px" : "0px",
                  transition: "width 0.6s cubic-bezier(0.22,1,0.36,1) 0.15s",
                }}
              />
              <span className="text-[#f5c518] text-xs tracking-[0.25em] uppercase font-semibold">
                Who We Are
              </span>
            </div>

            {/* Heading — per-word mask lift (ANIMATION A) */}
            <h2
              className="text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-8"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              <MaskedWordReveal
                text="A Community Built"
                visible={visible}
                baseDelay={0.1}
              />
              <br />
              <MaskedWordReveal
                text="on Purpose"
                visible={visible}
                baseDelay={0.38}
                goldWords={["Purpose"]}
              />
            </h2>

            {/* Body copy — fog lift, staggered per paragraph (ANIMATION B) */}
            <div className="space-y-4 mb-10">
              <FogReveal visible={visible} delay={0.62}>
                <p className="text-white/60 text-base leading-relaxed">
                  Precious Pearl Support Initiative was founded on one
                  conviction — that every child, regardless of circumstance,
                  deserves access to quality education and the tools to thrive.
                </p>
              </FogReveal>
              <FogReveal visible={visible} delay={0.78}>
                <p className="text-white/45 text-base leading-relaxed">
                  We work alongside schools, families, and communities to bridge
                  the gap between need and opportunity — providing resources,
                  mentorship, and structured programmes that create lasting
                  change.
                </p>
              </FogReveal>
            </div>

            {/* CTA — spring bounce (ANIMATION C) */}
            <SpringReveal visible={visible} delay={0.95}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#f5c518] text-[#0a0f2c] font-bold px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-white transition-all duration-300 group"
              >
                <span>Our Full Story</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </SpringReveal>
          </div>

          {/* ── Right column: pillars (ANIMATION D) ── */}
          <div className="flex flex-col gap-0">
            {pillars.map((pillar, i) => (
              <PillarRow
                key={pillar.number}
                pillar={pillar}
                index={i}
                sectionVisible={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
