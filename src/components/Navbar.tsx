"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setIsOpen(false);
    if (pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D1B5E]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.22)]"
            : "bg-transparent"
        }`}
        style={{
          borderBottom: scrolled
            ? "1.5px solid rgba(245,196,0,0.18)"
            : "1.5px solid rgba(255,255,255,0.10)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-[10px] flex-shrink-0"
            >
              <div
                className="w-[42px] h-[42px] flex items-center justify-center bg-[#F5C400]"
                style={{
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              >
                <span
                  className="font-bold text-[12px] text-[#0D1B5E]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  PP
                </span>
              </div>
              <div className="flex flex-col gap-[2px]">
                <span
                  className="font-bold text-[17px] leading-none tracking-[0.01em] text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Precious Pearl
                </span>
                <span
                  className="text-[8px] font-semibold tracking-[0.22em] uppercase leading-none text-white/60"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  Support Initiative
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-[2px]">
              {navLinks.map((link) => {
                const isContact = link.href === "/#contact";
                const isActive = isContact ? false : pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={isContact ? handleContactClick : undefined}
                    className={`relative text-[11px] font-semibold tracking-[0.1em] uppercase px-[13px] py-[8px] transition-all duration-200 ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-[13px] right-[13px] h-[2px] rounded-[1px] bg-[#F5C400]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Donate CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/donate"
                className="bg-[#F5C400] hover:bg-[#ffd700] text-[#0D1B5E] text-[10.5px] font-bold tracking-[0.14em] uppercase px-[22px] py-[11px] transition-all duration-300"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Donate Now
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-4"}`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[420px]" : "max-h-0"}`}
        >
          <div className="px-6 py-5 flex flex-col border-t bg-[#0D1B5E]/95 backdrop-blur-md border-white/10">
            {navLinks.map((link) => {
              const isContact = link.href === "/#contact";
              const isActive = isContact ? false : pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={
                    isContact ? handleContactClick : () => setIsOpen(false)
                  }
                  className={`py-4 text-[11px] font-semibold tracking-[0.12em] uppercase border-b transition-colors duration-200 ${isActive ? "text-white border-white/10" : "text-white/70 hover:text-white border-white/10"}`}
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-5 text-[11px] font-bold tracking-[0.14em] uppercase py-4 text-center bg-[#F5C400] text-[#0D1B5E] hover:bg-[#ffd700] transition-colors duration-300"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
