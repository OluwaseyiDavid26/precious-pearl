"use client";

import { useEffect, useRef, useState } from "react";

const contactDetails = [
  {
    label: "Email",
    icon: "✉️",
    value: "info@preciouspearlinitiative.org",
    href: "mailto:info@preciouspearlinitiative.org",
  },
  {
    label: "Phone",
    icon: "📞",
    value: "+1 832 894 7736",
    href: "tel:+18328947736",
  },
  {
    label: "Location",
    icon: "📍",
    value: "Insert Location Here",
    href: "#",
  },
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    if (pageRef.current) observer.observe(pageRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#0D1B5E] relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />

      {/* Subtle background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(245,196,0,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(245,196,0,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-24 relative">
        {/* ── Page heading ── */}
        <div
          className="mb-16"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-[#F5C400]" />
            <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
              Contact Us
            </span>
          </div>
          <h1
            className="text-white text-4xl lg:text-[50px] font-bold leading-[1.08] tracking-tight mb-4 max-w-xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Let's Start a <span className="text-[#F5C400]">Conversation.</span>
          </h1>
          <p className="text-white/50 text-[15px] leading-[1.85] max-w-lg">
            Whether you want to donate, volunteer, partner with us, or simply
            learn more — we'd love to hear from you.
          </p>
        </div>

        {/* ── Two column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
          {/* Left — contact details */}
          <div
            className="space-y-4"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            }}
          >
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                className="flex items-center gap-4 bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-5 hover:border-[#F5C400]/30 hover:bg-white/[0.08] transition-all duration-200 group block"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.07] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-1">
                    {detail.label}
                  </p>
                  <p className="text-white text-[14.5px] font-semibold">
                    {detail.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Office hours */}
            <div className="bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
                Office Hours
              </p>
              <div className="space-y-2">
                {[
                  { day: "Mon – Fri", hours: "9:00 AM – 5:00 PM" },
                  { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white/45 text-[13.5px]">
                      {row.day}
                    </span>
                    <span className="text-white/80 text-[13.5px] font-semibold">
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 lg:p-10"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
            }}
          >
            {!submitted ? (
              <>
                <h2
                  className="text-white text-[22px] font-bold mb-1"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-white/35 text-[13.5px] mb-8">
                  We typically respond within 24–48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white/50 text-[12px] font-semibold tracking-[0.1em] uppercase mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Adeyemi"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
                        focus:outline-none focus:border-[#F5C400]/40 hover:border-white/20 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-[12px] font-semibold tracking-[0.1em] uppercase mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
                        focus:outline-none focus:border-[#F5C400]/40 hover:border-white/20 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-[12px] font-semibold tracking-[0.1em] uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how you'd like to get involved..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
                        focus:outline-none focus:border-[#F5C400]/40 hover:border-white/20 transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#F5C400] text-[#0D1B5E] font-bold py-[14px] rounded-xl text-[12px] tracking-[0.14em] uppercase
                      hover:bg-white active:scale-[0.99] transition-all duration-200 disabled:opacity-60
                      flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0D1B5E]/30 border-t-[#0D1B5E] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-14 h-14 rounded-full bg-[#F5C400]/10 border border-[#F5C400]/30 flex items-center justify-center mb-6">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#F5C400"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="text-white text-[24px] font-bold mb-3"
                  style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                >
                  Message Received!
                </h3>
                <p className="text-white/45 text-[14px] leading-[1.8] max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24–48
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="mt-8 text-[#F5C400] text-[13px] font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity duration-200"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom tagline */}
        <p
          className="text-center text-white/20 text-[12.5px] mt-16"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          Every child matters. Every dream counts.
        </p>
      </div>
    </main>
  );
}
