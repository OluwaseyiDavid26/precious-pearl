// import Link from "next/link";
// import Image from "next/image";

// export default function Hero() {
//   const stats = [
//     { num: "500", sup: "+", label: "Children Supported" },
//     { num: "1K", sup: "+", label: "Supplies Distributed" },
//     { num: "4", sup: "+", label: "Active Programs" },
//   ];

//   return (
//     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0A143C]">
//       {/* Background Image */}
//       <Image
//         src="/r3vkA.jpg"
//         alt="Children supported by Precious Pearl Support Initiative"
//         fill
//         priority
//         className="object-cover object-center"
//       />

//       {/* Overlay — darker on left, fades right */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(105deg, rgba(10,20,60,0.95) 0%, rgba(10,20,60,0.80) 45%, rgba(10,20,60,0.30) 75%, rgba(10,20,60,0.05) 100%)",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 pt-[72px]">
//         <div className="py-20 lg:py-32">
//           <div className="max-w-[680px]">
//             {/* Eyebrow */}
//             <div className="flex items-center gap-[10px] mb-7">
//               <div className="w-8 h-px bg-[#F5C400]" />
//               <span
//                 className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#F5C400]"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Nurturing Every Child's Potential
//               </span>
//               <div className="w-8 h-px bg-[#F5C400]" />
//             </div>

//             {/* Headline */}
//             <h1
//               className="text-[56px] sm:text-[68px] lg:text-[76px] font-bold text-white leading-[1.04] tracking-[-1px] mb-6"
//               style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
//             >
//               Empowering
//               <br />
//               Children.
//               <br />
//               <em className="italic text-[#F5C400]">Transforming</em> Futures.
//             </h1>

//             {/* Description */}
//             <p
//               className="text-[16px] font-light text-white/75 leading-[1.85] max-w-[520px] mb-10"
//               style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//             >
//               Precious Pearl Support Initiative is dedicated to helping school
//               children access quality education, essential resources, and
//               opportunities to thrive.
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-wrap items-center gap-4 mb-16">
//               <Link
//                 href="/donate"
//                 className="bg-[#F5C400] hover:bg-white text-[#0D1B5E] text-[11px] font-bold tracking-[0.16em] uppercase px-10 py-[15px] transition-colors duration-200"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Donate Now
//               </Link>
//               <Link
//                 href="/get-involved"
//                 className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-[11px] font-semibold tracking-[0.16em] uppercase px-10 py-[15px] transition-all duration-200"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Sponsor a Child
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="flex items-start border-t border-white/15 pt-8 gap-0">
//               {stats.map((stat, i) => (
//                 <div
//                   key={stat.label}
//                   className={`pr-8 mr-8 ${
//                     i !== stats.length - 1
//                       ? "border-r border-white/15"
//                       : "border-none pr-0 mr-0"
//                   }`}
//                 >
//                   <div
//                     className="text-[42px] font-bold text-white leading-none"
//                     style={{
//                       fontFamily: "var(--font-playfair), Georgia, serif",
//                     }}
//                   >
//                     {stat.num}
//                     <sup className="text-[18px] text-[#F5C400] align-super">
//                       {stat.sup}
//                     </sup>
//                   </div>
//                   <div
//                     className="text-[9.5px] font-medium tracking-[0.18em] uppercase text-white/50 mt-1"
//                     style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//                   >
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".hero-animate");
    if (!elements) return;

    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateX(-60px)";
    });

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        elements.forEach((el, i) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.transition = `opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + i * 0.18}s, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + i * 0.18}s`;
          htmlEl.style.opacity = "1";
          htmlEl.style.transform = "translateX(0)";
        });
      });
    });

    return () => {};
  }, []);

  const stats = [
    { num: "500", sup: "+", label: "Children Supported" },
    { num: "1K", sup: "+", label: "Supplies Distributed" },
    { num: "4", sup: "+", label: "Active Programs" },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0A143C]">
      {/* Background Image */}
      <Image
        src="/r3vkA.jpg"
        alt="Children supported by Precious Pearl Support Initiative"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay — darker on left, fades right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,20,60,0.95) 0%, rgba(10,20,60,0.80) 45%, rgba(10,20,60,0.30) 75%, rgba(10,20,60,0.05) 100%)",
        }}
      />

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 pt-[72px]"
      >
        <div className="py-20 lg:py-32">
          <div className="max-w-[680px]">
            {/* Eyebrow — animates first */}
            <div className="hero-animate flex items-center gap-[10px] mb-7">
              <div className="w-8 h-px bg-[#F5C400]" />
              <span
                className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#F5C400]"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                Nurturing Every Child's Potential
              </span>
              <div className="w-8 h-px bg-[#F5C400]" />
            </div>

            {/* Headline — each line staggers */}
            <h1
              className="text-[56px] sm:text-[68px] lg:text-[76px] font-bold text-white leading-[1.04] tracking-[-1px] mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              <span className="hero-animate block">Empowering</span>
              <span className="hero-animate block">Children.</span>
              <span className="hero-animate block">
                <em className="italic text-[#F5C400]">Transforming</em> Futures.
              </span>
            </h1>

            {/* Description */}
            <p
              className="hero-animate text-[16px] font-light text-white/75 leading-[1.85] max-w-[520px] mb-10"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              Precious Pearl Support Initiative is dedicated to helping school
              children access quality education, essential resources, and
              opportunities to thrive.
            </p>

            {/* CTAs */}
            <div className="hero-animate flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="/donate"
                className="bg-[#F5C400] hover:bg-white text-[#0D1B5E] text-[11px] font-bold tracking-[0.16em] uppercase px-10 py-[15px] transition-colors duration-200"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                Donate Now
              </Link>
              {/* <Link
                href="/get-involved"
                className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-[11px] font-semibold tracking-[0.16em] uppercase px-10 py-[15px] transition-all duration-200"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                Sponsor a Child
              </Link> */}
            </div>

            {/* Stats */}
            <div className="hero-animate flex items-start border-t border-white/15 pt-8 gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`pr-8 mr-8 ${
                    i !== stats.length - 1
                      ? "border-r border-white/15"
                      : "border-none pr-0 mr-0"
                  }`}
                >
                  <div
                    className="text-[42px] font-bold text-white leading-none"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {stat.num}
                    <sup className="text-[18px] text-[#F5C400] align-super">
                      {stat.sup}
                    </sup>
                  </div>
                  <div
                    className="text-[9.5px] font-medium tracking-[0.18em] uppercase text-white/50 mt-1"
                    style={{ fontFamily: "var(--font-barlow), sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
