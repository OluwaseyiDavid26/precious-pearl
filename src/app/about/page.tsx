"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

const revealStyle: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(32px)",
  transition: "all 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
};

// SVG icon components
const TargetIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HeartIcon = () => (
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

const UsersIcon = () => (
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

const SeedlingIcon = () => (
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
    <path d="M12 22V12" />
    <path d="M12 12C12 12 7 11 5 7c-1-2-1-5 2-6 2-1 5 0 5 0s0 3-2 5c-1 1-2 2-2 4" />
    <path d="M12 12c0 0 5-1 7-5 1-2 1-5-2-6-2-1-5 0-5 0s0 3 2 5c1 1 2 2 2 4" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRightIcon = () => (
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

const values = [
  {
    icon: <HeartIcon />,
    value: "Compassion",
    desc: "We lead with empathy in everything we do.",
  },
  {
    icon: <UsersIcon />,
    value: "Community",
    desc: "We grow stronger by growing together.",
  },
  {
    icon: <BookIcon />,
    value: "Education",
    desc: "Knowledge is the foundation of every future.",
  },
  {
    icon: <SeedlingIcon />,
    value: "Impact",
    desc: "We measure success by lives genuinely changed.",
  },
];

const team = [
  { name: "Team Member", role: "Founder & Executive Director" },
  { name: "Team Member", role: "Programs Coordinator" },
  { name: "Team Member", role: "Community Outreach Lead" },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useReveal(heroRef);
  useReveal(storyRef);
  useReveal(missionRef);
  useReveal(valuesRef);
  useReveal(teamRef);

  return (
    <>
      <Navbar />

      <main
        className="bg-[#0D1B5E] min-h-screen text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── HERO ── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden py-32 px-6 text-center"
        >
          {/* Gold top rule */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />

          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center top, rgba(245,196,0,0.07) 0%, transparent 65%)",
            }}
          />

          <div className="max-w-3xl mx-auto relative">
            <div
              className="reveal flex items-center justify-center gap-3 mb-6"
              style={revealStyle}
            >
              <div className="w-6 h-[2px] bg-[#F5C400]" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.4em] uppercase">
                About Us
              </span>
              <div className="w-6 h-[2px] bg-[#F5C400]" />
            </div>

            <h1
              className="reveal text-5xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tight mb-6 uppercase"
              style={revealStyle}
            >
              We Exist for <span className="text-[#F5C400]">Every Child</span>
            </h1>

            <p
              className="reveal text-white/55 text-lg leading-relaxed max-w-xl mx-auto"
              style={revealStyle}
            >
              Learn about the heart, history, and people behind Precious Pearl
              Support Initiative and our mission to nurture every child's
              potential.
            </p>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section ref={storyRef} className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Real image */}
            <div className="reveal relative" style={revealStyle}>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/0YHrM.jpg"
                  alt="Precious Pearl Support Initiative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Gold accent corners */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-[#F5C400]/50 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-12 h-12 border border-[#F5C400]/25 rounded-xl -z-10" />
            </div>

            <div className="space-y-5">
              <div
                className="reveal flex items-center gap-3"
                style={revealStyle}
              >
                <div className="w-5 h-[2px] bg-[#F5C400]" />
                <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                  Our Story
                </span>
              </div>
              <h2
                className="reveal text-4xl font-bold leading-[1.15]"
                style={{
                  ...revealStyle,
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Born from a Belief That No Child Should Be Left Behind
              </h2>
              <p
                className="reveal text-white/60 leading-[1.85] text-[15px]"
                style={revealStyle}
              >
                Precious Pearl Support Initiative was founded with a singular
                conviction: that every school-age child deserves more than just
                a seat in a classroom. They deserve resources, encouragement,
                and a community that believes in their future.
              </p>
              <p
                className="reveal text-white/50 leading-[1.85] text-[15px]"
                style={revealStyle}
              >
                What started as a small local effort to distribute school
                supplies has grown into a structured initiative supporting over
                500 children through education programs, mentorship, and
                community outreach — all fueled by passionate volunteers and
                generous donors.
              </p>

              {/* Bullet points */}
              <div className="reveal space-y-2 pt-2" style={revealStyle}>
                {[
                  "Founded on community and shared purpose",
                  "100% volunteer and donor-driven",
                  "Programmes operating across 50+ communities",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F5C400]/15 border border-[#F5C400]/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#F5C400]">
                      <CheckIcon />
                    </div>
                    <p className="text-white/60 text-[13.5px] leading-snug">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section
          ref={missionRef}
          className="py-24 px-6 bg-white/[0.02] border-y border-white/[0.05]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div
                className="reveal flex items-center justify-center gap-3 mb-5"
                style={revealStyle}
              >
                <div className="w-5 h-[2px] bg-[#F5C400]" />
                <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                  What Drives Us
                </span>
                <div className="w-5 h-[2px] bg-[#F5C400]" />
              </div>
              <h2
                className="reveal text-4xl font-bold"
                style={{
                  ...revealStyle,
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Mission &amp; Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  label: "Our Mission",
                  Icon: TargetIcon,
                  text: "To empower school-aged children by providing access to quality education, essential resources, and opportunities that enable them to grow, learn, and thrive — regardless of their socioeconomic background.",
                },
                {
                  label: "Our Vision",
                  Icon: StarIcon,
                  text: "A world where every child has the tools, support, and belief in themselves to reach their fullest potential — and where communities rally together to make that vision a reality.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="reveal group bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:border-[#F5C400]/35 hover:bg-white/[0.07] transition-all duration-300"
                  style={revealStyle}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F5C400]/10 border border-[#F5C400]/25 flex items-center justify-center text-[#F5C400] mb-5 group-hover:bg-[#F5C400] group-hover:text-[#0D1B5E] group-hover:border-[#F5C400] transition-all duration-300">
                    <item.Icon />
                  </div>
                  <h3
                    className="text-white font-bold text-xl mb-3"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-white/55 leading-[1.85] text-[14.5px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section ref={valuesRef} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div
                className="reveal flex items-center justify-center gap-3 mb-5"
                style={revealStyle}
              >
                <div className="w-5 h-[2px] bg-[#F5C400]" />
                <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                  What We Stand For
                </span>
                <div className="w-5 h-[2px] bg-[#F5C400]" />
              </div>
              <h2
                className="reveal text-4xl font-bold"
                style={{
                  ...revealStyle,
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.value}
                  className="reveal group bg-white/[0.04] border border-white/10 rounded-3xl p-7 hover:bg-white/[0.08] hover:border-[#F5C400]/30 transition-all duration-300"
                  style={revealStyle}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-[#0D1B5E] group-hover:border-[#F5C400] transition-all duration-300">
                      {v.icon}
                    </div>
                    <span className="text-white/15 text-[28px] font-bold leading-none">
                      0{i + 1}
                    </span>
                  </div>
                  <h4
                    className="text-white font-bold text-[17px] mb-2 group-hover:text-[#F5C400] transition-colors duration-300"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {v.value}
                  </h4>
                  <p className="text-white/45 text-[13px] leading-[1.75]">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section
          ref={teamRef}
          className="py-24 px-6 bg-white/[0.02] border-y border-white/[0.05]"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div
                className="reveal flex items-center justify-center gap-3 mb-5"
                style={revealStyle}
              >
                <div className="w-5 h-[2px] bg-[#F5C400]" />
                <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                  The People Behind PPSI
                </span>
                <div className="w-5 h-[2px] bg-[#F5C400]" />
              </div>
              <h2
                className="reveal text-4xl font-bold"
                style={{
                  ...revealStyle,
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Meet Our Team
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="reveal group bg-white/[0.04] border border-white/10 rounded-3xl p-7 text-center hover:border-[#F5C400]/30 hover:bg-white/[0.07] transition-all duration-300"
                  style={revealStyle}
                >
                  <div className="w-20 h-20 rounded-full bg-[#F5C400]/10 border-2 border-[#F5C400]/30 mx-auto mb-5 flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400]/20 transition-colors duration-300">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h4
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {member.name}
                  </h4>
                  <p className="text-[#F5C400] text-[13px] mt-1 font-medium">
                    {member.role}
                  </p>
                  <div className="w-8 h-[1px] bg-white/10 mx-auto mt-4 mb-4" />
                  <p className="text-white/25 text-[11.5px] italic">
                    Replace with real team data
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(245,196,0,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="max-w-2xl mx-auto text-center relative">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Ready to Make a{" "}
              <span className="text-[#F5C400]">Difference?</span>
            </h2>
            <p className="text-white/55 mb-10 leading-relaxed text-[15px]">
              Join thousands of supporters helping us transform children's
              futures one resource, one smile, one life at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#0D1B5E] font-bold px-8 py-[14px] rounded-full text-[12px] tracking-[0.12em] uppercase hover:bg-[#e6b800] transition-colors duration-200 group"
              >
                Donate Now
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRightIcon />
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-[14px] rounded-full text-[12px] tracking-[0.12em] uppercase hover:border-[#F5C400]/60 hover:text-[#F5C400] transition-all duration-200 group"
              >
                Get in Touch
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
