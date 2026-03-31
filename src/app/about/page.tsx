"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

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
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

const revealStyle: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(40px)",
  transition: "all 0.7s ease",
};

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
    <main className="bg-[#0a0f2c] min-h-screen text-white">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden py-32 px-6 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#f5c51815_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f5c518] to-transparent" />

        <div className="max-w-3xl mx-auto relative">
          <p
            className="reveal text-[#f5c518] text-sm font-semibold tracking-[0.4em] uppercase mb-4"
            style={revealStyle}
          >
            About Us
          </p>
          <h1
            className="reveal text-5xl lg:text-7xl font-bold leading-tight mb-6"
            style={revealStyle}
          >
            We Exist for{" "}
            <span className="text-[#f5c518] italic">Every Child</span>
          </h1>
          <p
            className="reveal text-white/60 text-lg leading-relaxed max-w-xl mx-auto"
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
          {/* Image placeholder */}
          <div className="reveal relative" style={revealStyle}>
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/3] flex items-center justify-center">
              {/* Replace with <Image src="..." .../> when you have the asset */}
              <div className="text-center text-white/20">
                <div className="text-6xl mb-3">📸</div>
                <p className="text-sm">Add your photo here</p>
              </div>
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#f5c518] rounded-2xl -z-10" />
          </div>

          <div className="space-y-5">
            <p
              className="reveal text-[#f5c518] text-sm font-semibold tracking-[0.3em] uppercase"
              style={revealStyle}
            >
              Our Story
            </p>
            <h2
              className="reveal text-4xl font-bold leading-tight"
              style={revealStyle}
            >
              Born from a Belief That No Child Should Be Left Behind
            </h2>
            <p
              className="reveal text-white/65 leading-relaxed"
              style={revealStyle}
            >
              Precious Pearl Support Initiative was founded with a singular
              conviction: that every school-age child deserves more than just a
              seat in a classroom. They deserve resources, encouragement, and a
              community that believes in their future.
            </p>
            <p
              className="reveal text-white/55 leading-relaxed"
              style={revealStyle}
            >
              What started as a small local effort to distribute school supplies
              has grown into a structured initiative supporting over 500
              children through education programs, mentorship, and community
              outreach — all fueled by passionate volunteers and generous
              donors.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section ref={missionRef} className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="reveal text-[#f5c518] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
              style={revealStyle}
            >
              What Drives Us
            </p>
            <h2 className="reveal text-4xl font-bold" style={revealStyle}>
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "Our Mission",
                icon: "🎯",
                text: "To empower school-aged children by providing access to quality education, essential resources, and opportunities that enable them to grow, learn, and thrive — regardless of their socioeconomic background.",
              },
              {
                label: "Our Vision",
                icon: "🌟",
                text: "A world where every child has the tools, support, and belief in themselves to reach their fullest potential — and where communities rally together to make that vision a reality.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="reveal bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f5c518]/40 transition-colors duration-300"
                style={revealStyle}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-[#f5c518] font-bold text-xl mb-3">
                  {item.label}
                </h3>
                <p className="text-white/65 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section ref={valuesRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="reveal text-[#f5c518] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
              style={revealStyle}
            >
              What We Stand For
            </p>
            <h2 className="reveal text-4xl font-bold" style={revealStyle}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💛",
                value: "Compassion",
                desc: "We lead with empathy in everything we do.",
              },
              {
                icon: "🤝",
                value: "Community",
                desc: "We grow stronger by growing together.",
              },
              {
                icon: "📚",
                value: "Education",
                desc: "Knowledge is the foundation of every future.",
              },
              {
                icon: "🌱",
                value: "Impact",
                desc: "We measure success by lives genuinely changed.",
              },
            ].map((v) => (
              <div
                key={v.value}
                className="reveal group bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-[#f5c518]/5 hover:border-[#f5c518]/30 transition-all duration-300"
                style={revealStyle}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#f5c518] transition-colors">
                  {v.value}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section ref={teamRef} className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="reveal text-[#f5c518] text-sm font-semibold tracking-[0.3em] uppercase mb-3"
              style={revealStyle}
            >
              The People Behind PPSI
            </p>
            <h2 className="reveal text-4xl font-bold" style={revealStyle}>
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Team Member", role: "Founder & Executive Director" },
              { name: "Team Member", role: "Programs Coordinator" },
              { name: "Team Member", role: "Community Outreach Lead" },
            ].map((member, i) => (
              <div
                key={i}
                className="reveal bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#f5c518]/30 transition-colors duration-300"
                style={revealStyle}
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-[#f5c518]/20 border-2 border-[#f5c518]/40 mx-auto mb-4 flex items-center justify-center text-2xl">
                  👤
                </div>
                <h4 className="text-white font-bold text-lg">{member.name}</h4>
                <p className="text-[#f5c518] text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>

          <p
            className="reveal text-center text-white/30 text-sm mt-8"
            style={revealStyle}
          >
            Replace placeholder names and photos with real team data.
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Make a <span className="text-[#f5c518]">Difference?</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Join thousands of supporters helping us transform children's futures
            one resource, one smile, one life at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-[#f5c518] text-[#0a0f2c] font-bold px-8 py-4 rounded-full hover:bg-[#e6b800] transition-all duration-300"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:border-[#f5c518] hover:text-[#f5c518] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
