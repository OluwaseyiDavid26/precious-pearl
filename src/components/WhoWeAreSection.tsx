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

export default function WhoWeAreSection() {
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
      className="relative bg-[#0a0f2c] overflow-hidden py-28 px-6"
    >
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f5c518]/4 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* ── Left column ── */}
          <div>
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-8"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <div className="w-8 h-px bg-[#f5c518]" />
              <span className="text-[#f5c518] text-xs tracking-[0.25em] uppercase font-semibold">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-white text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-8"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              A Community Built
              <br />
              on <span className="text-[#f5c518]">Purpose</span>
            </h2>

            {/* Body copy */}
            <div
              className="space-y-4 mb-10"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
              }}
            >
              <p className="text-white/60 text-base leading-relaxed">
                Precious Pearl Support Initiative was founded on one conviction
                — that every child, regardless of circumstance, deserves access
                to quality education and the tools to thrive.
              </p>
              <p className="text-white/45 text-base leading-relaxed">
                We work alongside schools, families, and communities to bridge
                the gap between need and opportunity — providing resources,
                mentorship, and structured programmes that create lasting
                change.
              </p>
            </div>

            {/* CTA */}
            <div
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
              }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#f5c518] text-[#0a0f2c] font-bold px-7 py-3.5 rounded-full
                  text-sm tracking-wide hover:bg-[#e6b800] transition-all duration-300 group"
              >
                <span>Our Full Story</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-0">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.number}
                className="group py-8 flex gap-7 items-start border-t border-white/10 last:border-b
                  hover:border-[#f5c518]/30 transition-colors duration-500"
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${0.2 + i * 0.12}s, transform 0.6s ease ${0.2 + i * 0.12}s`,
                }}
              >
                {/* Number */}
                <span className="text-[#f5c518]/35 text-xs font-bold tabular-nums pt-1 flex-shrink-0 group-hover:text-[#f5c518]/70 transition-colors duration-500">
                  {pillar.number}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#f5c518] transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
