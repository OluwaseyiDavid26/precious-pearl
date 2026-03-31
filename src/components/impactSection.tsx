"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Children Supported",
    description:
      "School-aged children given access to quality education and essential resources.",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Supplies Distributed",
    description:
      "Learning materials delivered directly into the hands of children who need them most.",
  },
  {
    value: 4,
    suffix: "",
    label: "Active Programs",
    description:
      "Structured initiatives running across education, mentorship, and community outreach.",
  },
  {
    value: 50,
    suffix: "+",
    label: "Communities Reached",
    description:
      "Neighbourhoods mobilised around children's futures through sustained engagement.",
  },
];

const testimonial = {
  quote:
    "Before PPSI came to our school, many of our pupils had no books, no bags — nothing. Today, I watch them walk in prepared, confident, and excited to learn. That change is everything.",
  name: "Mrs. Adeyemi",
  role: "Head Teacher, Ibadan Primary School",
};

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
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
      className="group border-t border-white/10 pt-8 pb-6 hover:border-[#f5c518]/40 transition-colors duration-500"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* Number */}
      <div className="flex items-end gap-1 mb-3">
        <span className="text-[56px] leading-none font-bold tracking-tight text-white group-hover:text-[#f5c518] transition-colors duration-500">
          {count.toLocaleString()}
        </span>
        <span className="text-[#f5c518] text-3xl font-bold mb-2">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-white text-base font-semibold mb-2">{stat.label}</p>

      {/* Description */}
      <p className="text-white/40 text-sm leading-relaxed">
        {stat.description}
      </p>
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
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0f2c] overflow-hidden py-28 px-6"
    >
      {/* Horizontal rule accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background texture — subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #ffffff 0px,
            #ffffff 1px,
            transparent 1px,
            transparent 40px
          )`,
        }}
      />

      {/* Gold radial glow — top left */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#f5c518]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* ── Top row: label + heading ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-6"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <div className="w-8 h-px bg-[#f5c518]" />
              <span className="text-[#f5c518] text-xs tracking-[0.25em] uppercase font-semibold">
                Our Impact
              </span>
            </div>

            <h2
              className="text-white text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              Numbers That
              <br />
              <span className="text-[#f5c518]">Tell the Story</span>
            </h2>
          </div>

          {/* Testimonial block */}
          <div
            className="relative border-l-2 border-[#f5c518]/30 pl-7"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <p className="text-white/60 text-base leading-relaxed italic mb-5">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              {/* Avatar initials */}
              <div className="w-9 h-9 rounded-full bg-[#f5c518]/15 border border-[#f5c518]/30 flex items-center justify-center">
                <span className="text-[#f5c518] text-xs font-bold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-white/40 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
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
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.8s ease 0.7s",
          }}
        >
          <p className="text-white/35 text-sm">
            All figures represent verified programme data as of 2025.
          </p>
          <a
            href="/about"
            className="text-[#f5c518] text-sm font-semibold hover:underline underline-offset-4 transition-all"
          >
            Read our full impact report →
          </a>
        </div>
      </div>
    </section>
  );
}
