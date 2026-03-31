// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Programs", href: "/programs" },
//   { label: "Events", href: "/events" },
//   { label: "Blog", href: "/blog" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <header
//         className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-[#0D1B5E] shadow-[0_2px_24px_rgba(0,0,0,0.22)]"
//             : "bg-[#F5C400]/95 backdrop-blur-md"
//         }`}
//         style={{
//           borderBottom: scrolled
//             ? "1.5px solid rgba(245,196,0,0.18)"
//             : "1.5px solid rgba(13,27,94,0.12)",
//         }}
//       >
//         {/* Brand stripe — echoes the flyer's navy/red divider, only visible in default state */}
//         {!scrolled && (
//           <div
//             className="absolute bottom-0 inset-x-0 h-[2px] pointer-events-none"
//             style={{
//               background: "linear-gradient(90deg, #0D1B5E 50%, #C0392B 50%)",
//               opacity: 0.45,
//             }}
//           />
//         )}

//         <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
//           <div className="flex items-center justify-between h-[72px]">
//             {/* ── Logo ── */}
//             <Link
//               href="/"
//               className="flex items-center gap-[10px] flex-shrink-0"
//             >
//               {/* Star icon — mirrors the brand star on the flyer */}
//               <div
//                 className={`w-[42px] h-[42px] flex items-center justify-center transition-colors duration-500 ${
//                   scrolled ? "bg-[#F5C400]" : "bg-[#0D1B5E]"
//                 }`}
//                 style={{
//                   clipPath:
//                     "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
//                 }}
//               >
//                 <span
//                   className={`font-bold text-[12px] transition-colors duration-500 ${
//                     scrolled ? "text-[#0D1B5E]" : "text-[#F5C400]"
//                   }`}
//                   style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//                 >
//                   PP
//                 </span>
//               </div>

//               <div className="flex flex-col gap-[2px]">
//                 <span
//                   className={`font-bold text-[17px] leading-none tracking-[0.01em] transition-colors duration-500 ${
//                     scrolled ? "text-white" : "text-[#0D1B5E]"
//                   }`}
//                   style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
//                 >
//                   Precious Pearl
//                 </span>
//                 <span
//                   className={`text-[8px] font-semibold tracking-[0.22em] uppercase leading-none transition-colors duration-500 ${
//                     scrolled ? "text-white/50" : "text-[#0D1B5E]/60"
//                   }`}
//                   style={{ fontFamily: "'Barlow', sans-serif" }}
//                 >
//                   Support Initiative
//                 </span>
//               </div>
//             </Link>

//             {/* ── Desktop Nav ── */}
//             <nav className="hidden lg:flex items-center gap-[2px]">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`relative text-[11px] font-semibold tracking-[0.1em] uppercase px-[13px] py-[8px] transition-all duration-200 ${
//                       scrolled
//                         ? isActive
//                           ? "text-white"
//                           : "text-white/70 hover:text-white"
//                         : isActive
//                           ? "text-[#0D1B5E]"
//                           : "text-[#0D1B5E]/75 hover:text-[#0D1B5E]"
//                     }`}
//                     style={{ fontFamily: "'Barlow', sans-serif" }}
//                   >
//                     {link.label}
//                     {isActive && (
//                       <span
//                         className={`absolute bottom-0 left-[13px] right-[13px] h-[2px] rounded-[1px] transition-colors duration-500 ${
//                           scrolled ? "bg-[#F5C400]" : "bg-[#0D1B5E]"
//                         }`}
//                       />
//                     )}
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* ── Donate CTA ── */}
//             <div className="hidden lg:flex items-center">
//               <Link
//                 href="/donate"
//                 className={`text-[10.5px] font-bold tracking-[0.14em] uppercase px-[22px] py-[11px] transition-all duration-300 ${
//                   scrolled
//                     ? "bg-[#F5C400] text-[#0D1B5E] hover:bg-[#ffd700]"
//                     : "bg-[#0D1B5E] text-[#F5C400] hover:bg-[#1a2e8a]"
//                 }`}
//                 style={{ fontFamily: "'Barlow', sans-serif" }}
//               >
//                 Donate Now
//               </Link>
//             </div>

//             {/* ── Mobile Hamburger ── */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden flex flex-col gap-[5px] p-2"
//               aria-label="Toggle menu"
//             >
//               <span
//                 className={`block w-6 h-[1.5px] transition-all duration-300 ${
//                   scrolled ? "bg-white" : "bg-[#0D1B5E]"
//                 } ${isOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
//               />
//               <span
//                 className={`block h-[1.5px] transition-all duration-300 ${
//                   scrolled ? "bg-white" : "bg-[#0D1B5E]"
//                 } ${isOpen ? "w-0 opacity-0" : "w-4"}`}
//               />
//               <span
//                 className={`block w-6 h-[1.5px] transition-all duration-300 ${
//                   scrolled ? "bg-white" : "bg-[#0D1B5E]"
//                 } ${isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
//               />
//             </button>
//           </div>
//         </div>

//         {/* ── Mobile Menu ── */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${
//             isOpen ? "max-h-[420px]" : "max-h-0"
//           }`}
//         >
//           <div
//             className={`px-6 py-5 flex flex-col border-t transition-colors duration-500 ${
//               scrolled
//                 ? "bg-[#0D1B5E] border-white/10"
//                 : "bg-[#F5C400] border-[#0D1B5E]/15"
//             }`}
//           >
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href;
//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`py-4 text-[11px] font-semibold tracking-[0.12em] uppercase border-b transition-colors duration-200 ${
//                     scrolled
//                       ? isActive
//                         ? "text-white border-white/10"
//                         : "text-white/70 hover:text-white border-white/08"
//                       : isActive
//                         ? "text-[#0D1B5E] border-[#0D1B5E]/15"
//                         : "text-[#0D1B5E]/70 hover:text-[#0D1B5E] border-[#0D1B5E]/10"
//                   }`}
//                   style={{ fontFamily: "'Barlow', sans-serif" }}
//                 >
//                   {link.label}
//                 </Link>
//               );
//             })}

//             <Link
//               href="/donate"
//               onClick={() => setIsOpen(false)}
//               className={`mt-5 text-[11px] font-bold tracking-[0.14em] uppercase py-4 text-center transition-colors duration-300 ${
//                 scrolled
//                   ? "bg-[#F5C400] text-[#0D1B5E] hover:bg-[#ffd700]"
//                   : "bg-[#0D1B5E] text-[#F5C400] hover:bg-[#1a2e8a]"
//               }`}
//               style={{ fontFamily: "'Barlow', sans-serif" }}
//             >
//               Donate Now
//             </Link>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
            {/* ── Logo ── */}
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

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-[2px]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[11px] font-semibold tracking-[0.1em] uppercase px-[13px] py-[8px] transition-all duration-200 ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
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

            {/* ── Donate CTA ── */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/donate"
                className="bg-[#F5C400] hover:bg-[#ffd700] text-[#0D1B5E] text-[10.5px] font-bold tracking-[0.14em] uppercase px-[22px] py-[11px] transition-all duration-300"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Donate Now
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white transition-all duration-300 ${
                  isOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[420px]" : "max-h-0"
          }`}
        >
          <div className="px-6 py-5 flex flex-col border-t bg-[#0D1B5E]/95 backdrop-blur-md border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-4 text-[11px] font-semibold tracking-[0.12em] uppercase border-b transition-colors duration-200 ${
                    isActive
                      ? "text-white border-white/10"
                      : "text-white/70 hover:text-white border-white/08"
                  }`}
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
