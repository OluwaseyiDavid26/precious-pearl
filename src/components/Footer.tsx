"use client";

import { useState } from "react";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/18328947736",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("info@preciouspearlinitiative.org");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative bg-[#060a1a] border-t border-white/10">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5c518]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* ── Left: Logo + Socials ── */}
          <div className="flex flex-col items-center md:items-start gap-5">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50
                    hover:border-[#f5c518]/50 hover:text-[#f5c518] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Brand + tagline */}
            <div>
              <p className="text-white text-sm font-bold">
                Precious Pearl Support Initiative &copy;{" "}
                {new Date().getFullYear()}
              </p>
              <p className="text-white/35 text-xs mt-0.5">
                Nurturing Every Child's Potential
              </p>
            </div>
          </div>

          {/* ── Center: Email copy button ── */}
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 group
                ${
                  copied
                    ? "border-[#f5c518]/60 bg-[#f5c518]/10"
                    : "border-white/15 bg-white/[0.04] hover:border-[#f5c518]/40 hover:bg-[#f5c518]/5"
                }`}
            >
              {/* Mail icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke={copied ? "#f5c518" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={
                  copied
                    ? "text-[#f5c518]"
                    : "text-white/50 group-hover:text-white/80 transition-colors"
                }
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>

              <span
                className={`text-sm font-medium transition-colors duration-300 ${copied ? "text-[#f5c518]" : "text-white/70 group-hover:text-white"}`}
              >
                {copied ? "Copied!" : "info@preciouspearlinitiative.org"}
              </span>
            </button>

            <span className="text-white/25 text-xs">
              {copied ? "Email address copied to clipboard" : "Click to copy ↗"}
            </span>
          </div>

          {/* ── Right: Location + Phone ── */}
          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm font-medium leading-relaxed">
              Houston, Texas, USA
            </p>
            <p className="text-white text-sm font-bold mt-1 tabular-nums">
              +1 832 894 7736
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
