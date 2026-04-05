"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ── Icons ──────────────────────────────────────────────────
const DonateIcon = () => (
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
  </svg>
);

const PartnerIcon = () => (
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

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
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
const options = [
  {
    Icon: DonateIcon,
    title: "Donate",
    tag: "Financial Support",
    description:
      "Your financial contribution covers school supplies, tuition fees, and programme resources for children in need. Every amount makes a real difference.",
    cta: "Donate Now",
    href: "/donate",
    primary: true,
  },
  {
    Icon: PartnerIcon,
    title: "Partner With Us",
    tag: "Organisations",
    description:
      "Are you a school, business, or community organisation? Let's work together to expand our reach and create lasting impact for children.",
    cta: "Become a Partner",
    href: "/contact",
    primary: false,
  },
];

// ── Component ──────────────────────────────────────────────
export default function GetInvolvedSection() {
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
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0D1B5E] py-28 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Decorative glows */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(245,196,0,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom right, rgba(245,196,0,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* ── Header ── */}
        <div
          className="text-center mb-16"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-[#F5C400]" />
            <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
              Get Involved
            </span>
            <div className="w-6 h-[2px] bg-[#F5C400]" />
          </div>
          <h2
            className="text-white text-4xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-5"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Make a Difference Today.
          </h2>
          <p className="text-white/50 text-[15px] leading-[1.85] max-w-md mx-auto">
            There is no single way to change a child's life. Choose how you want
            to show up.
          </p>
        </div>

        {/* ── Main cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {options.map((opt, i) => (
            <div
              key={opt.title}
              className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 flex flex-col gap-6 hover:border-[#F5C400]/30 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s, border-color 0.3s, background 0.3s`,
              }}
            >
              {/* Subtle corner watermark */}
              <div
                className="absolute bottom-4 right-5 text-[80px] font-black leading-none select-none pointer-events-none"
                style={{
                  color: "rgba(245,196,0,0.03)",
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                0{i + 1}
              </div>

              {/* Icon + tag row */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-[#0D1B5E] group-hover:border-[#F5C400] transition-all duration-300">
                  <opt.Icon />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#F5C400]/60 bg-[#F5C400]/8 border border-[#F5C400]/15 px-3 py-[5px] rounded-full">
                  {opt.tag}
                </span>
              </div>

              {/* Text */}
              <div className="relative">
                <h3
                  className="text-white text-[22px] font-bold mb-3"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {opt.title}
                </h3>
                <p className="text-white/50 text-[14.5px] leading-[1.85]">
                  {opt.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={opt.href}
                className={`mt-auto inline-flex items-center gap-2 text-[11.5px] font-bold tracking-[0.12em] uppercase px-6 py-[13px] rounded-full w-fit transition-colors duration-200 group/btn
                  ${
                    opt.primary
                      ? "bg-[#F5C400] text-[#0D1B5E] hover:bg-white"
                      : "bg-white/10 text-white border border-white/15 hover:bg-white/20 hover:border-white/30"
                  }`}
              >
                {opt.cta}
                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* ── Bottom tagline ── */}
        <p
          className="text-center text-white/20 text-[12.5px] mt-14 tracking-wide"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          Every child matters. Every dream counts.
        </p>
      </div>
    </section>
  );
}
