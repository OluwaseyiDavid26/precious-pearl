"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const options = [
  {
    icon: "💛",
    title: "Donate",
    description:
      "Your financial contribution covers school supplies, tuition fees, and programme resources for children in need. Every amount makes a real difference.",
    cta: "Donate Now",
    href: "/donate",
  },
  {
    icon: "🤝",
    title: "Partner With Us",
    description:
      "Are you a school, business, or community organisation? Let's work together to expand our reach and create lasting impact for children.",
    cta: "Become a Partner",
    href: "/get-involved",
  },
];

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
      className="relative bg-[#0D1B5E] py-24 px-6 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-14"
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {options.map((option, i) => (
            <div
              key={option.title}
              className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 flex flex-col gap-5 hover:border-[#F5C400]/30 hover:bg-white/[0.07] transition-all duration-300"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.15 + i * 0.1}s, transform 0.6s ease ${0.15 + i * 0.1}s`,
              }}
            >
              <span className="text-4xl">{option.icon}</span>

              <div>
                <h3
                  className="text-white text-[22px] font-bold mb-3"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  {option.title}
                </h3>
                <p className="text-white/50 text-[14.5px] leading-[1.8]">
                  {option.description}
                </p>
              </div>

              <Link
                href={option.href}
                className="mt-auto inline-flex items-center gap-2 bg-[#F5C400] text-[#0D1B5E] text-[11.5px] font-bold tracking-[0.12em] uppercase px-6 py-[12px] rounded-full w-fit hover:bg-white transition-colors duration-200 group"
              >
                {option.cta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p
          className="text-center text-white/25 text-[13px]"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          Every child matters. Every dream counts.
        </p>
      </div>
    </section>
  );
}
