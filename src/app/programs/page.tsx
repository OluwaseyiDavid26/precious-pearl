"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const programs = [
  {
    id: 1,
    number: "01",
    icon: "📚",
    tag: "Education",
    title: "School Support Program",
    description:
      "Providing essential learning materials such as books, bags, uniforms, and supplies to children from low-income families. What may seem like a small gift to a donor can be the difference between a child attending or missing school entirely.",
    stat1: { value: "1,000+", label: "Supplies Distributed" },
    stat2: { value: "300+", label: "Children Reached" },
    accent: "#2563EB",
    lightBg: "#EFF6FF",
  },
  {
    id: 2,
    number: "02",
    icon: "🎓",
    tag: "Scholarship",
    title: "Scholarship Program",
    description:
      "Financial assistance for children who cannot afford school fees. We work directly with schools to cover fees for identified children in need — keeping them in classrooms and keeping their futures bright.",
    stat1: { value: "200+", label: "Children Sponsored" },
    stat2: { value: "12", label: "Partner Schools" },
    accent: "#7C3AED",
    lightBg: "#F5F3FF",
  },
  {
    id: 3,
    number: "03",
    icon: "🤝",
    tag: "Mentorship",
    title: "Mentorship & Tutoring",
    description:
      "Academic support and life skills training to guide children toward success. Our trained volunteer mentors provide consistent emotional support, career guidance, and a trusted presence for children who need it most.",
    stat1: { value: "150+", label: "Active Mentorships" },
    stat2: { value: "80+", label: "Trained Mentors" },
    accent: "#059669",
    lightBg: "#ECFDF5",
  },
  {
    id: 4,
    number: "04",
    icon: "💙",
    tag: "Wellness",
    title: "Health & Wellness",
    description:
      "Promoting hygiene, nutrition, and access to basic healthcare. We run health screenings, nutrition awareness sessions, and hygiene education — because a child's well-being is inseparable from their ability to thrive in school.",
    stat1: { value: "300+", label: "Children Reached" },
    stat2: { value: "20+", label: "Health Sessions" },
    accent: "#DC2626",
    lightBg: "#FEF2F2",
  },
  {
    id: 5,
    number: "05",
    icon: "🌍",
    tag: "Community",
    title: "Community Outreach",
    description:
      "Engaging families and communities to support children's education. Through workshops, events, and partnerships with local leaders, we build an ecosystem of support so every child is surrounded by people who believe in their future.",
    stat1: { value: "50+", label: "Communities Reached" },
    stat2: { value: "500+", label: "Volunteers Engaged" },
    accent: "#D97706",
    lightBg: "#FFFBEB",
  },
];

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".reveal-item")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.style.opacity = "1";
                  el.style.transform = "translateY(0)";
                }, i * 100);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

const hiddenStyle: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(24px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
};

export default function ProgramsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef);
  useReveal(gridRef);
  useReveal(ctaRef);

  return (
    <main
      className="bg-white min-h-screen"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative bg-[#0D1B5E] overflow-hidden py-28 px-6"
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />
        <div
          className="absolute right-[-16px] bottom-0 text-[240px] font-black leading-none select-none pointer-events-none"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            color: "rgba(245,196,0,0.04)",
          }}
        >
          05
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div
            className="reveal-item flex items-center gap-3 mb-6"
            style={hiddenStyle}
          >
            <div className="w-6 h-[2px] bg-[#F5C400]" />
            <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
              Our Programmes
            </span>
          </div>

          <h1
            className="reveal-item text-white text-4xl lg:text-[54px] font-bold leading-[1.07] tracking-tight mb-6 max-w-2xl"
            style={{ ...hiddenStyle, fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Five Ways We
            <br />
            <span className="text-[#F5C400]">Change Lives.</span>
          </h1>

          <p
            className="reveal-item text-white/50 text-[15px] leading-[1.85] max-w-lg"
            style={hiddenStyle}
          >
            Every programme is intentional, measurable, and designed to remove
            the barriers standing between a child and their potential.
          </p>
        </div>
      </section>

      {/* ── PROGRAMMES LIST ── */}
      <section ref={gridRef} className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="reveal-item rounded-2xl border border-[#E5E7EB] overflow-hidden hover:shadow-md transition-shadow duration-300"
              style={hiddenStyle}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
                {/* Main content */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[11px] font-black tracking-[0.25em] text-[#CBD5E1]">
                      {program.number}
                    </span>
                    <span
                      className="text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-[5px] rounded-full"
                      style={{
                        backgroundColor: program.lightBg,
                        color: program.accent,
                      }}
                    >
                      {program.tag}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ backgroundColor: program.lightBg }}
                    >
                      {program.icon}
                    </div>
                    <div className="pt-1">
                      <h2
                        className="text-[#0D1B5E] text-[22px] font-bold leading-snug"
                        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                      >
                        {program.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-[#6B7280] text-[14.5px] leading-[1.85] max-w-xl">
                    {program.description}
                  </p>
                </div>

                {/* Stats sidebar */}
                <div className="lg:w-[220px] p-8 lg:p-10 flex lg:flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-[#E5E7EB] bg-[#FAFAFA]">
                  {[program.stat1, program.stat2].map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="text-[32px] font-black leading-none mb-1"
                        style={{
                          fontFamily: "'Fraunces', Georgia, serif",
                          color: program.accent,
                        }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF] font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section ref={ctaRef} className="py-20 px-6 bg-[#F9F7F3]">
        <div className="max-w-5xl mx-auto">
          <div
            className="reveal-item relative rounded-3xl bg-[#0D1B5E] overflow-hidden px-10 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
            style={hiddenStyle}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />
            <div
              className="absolute right-8 top-1/2 -translate-y-1/2 text-[160px] font-black leading-none select-none pointer-events-none"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                color: "rgba(245,196,0,0.04)",
              }}
            >
              PPSI
            </div>

            <div className="relative">
              <p className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">
                Make a Difference
              </p>
              <h2
                className="text-white text-3xl lg:text-[38px] font-bold leading-[1.12] mb-3"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Every contribution
                <br />
                changes a child's story.
              </h2>
              <p className="text-white/45 text-[14px] max-w-md leading-[1.8]">
                Whether you donate, volunteer, or simply share — you're part of
                the movement building better futures.
              </p>
            </div>

            <div className="relative flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-[#F5C400] text-[#0D1B5E] text-[11.5px] font-bold tracking-[0.14em] uppercase px-7 py-[14px] rounded-full hover:bg-white transition-colors duration-200 group"
              >
                Donate Now
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-[11.5px] font-bold tracking-[0.14em] uppercase px-7 py-[14px] rounded-full hover:border-white/50 hover:text-white transition-colors duration-200"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
