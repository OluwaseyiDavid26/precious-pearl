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
        {/* <div
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
        </div> */}
      </div>
    </section>
  );
}
