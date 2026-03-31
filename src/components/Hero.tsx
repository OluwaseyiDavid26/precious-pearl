// import Link from "next/link";
// import Image from "next/image";

// export default function Hero() {
//   const stats = [
//     { num: "500", sup: "+", label: "Children Supported" },
//     { num: "1K", sup: "+", label: "Supplies Distributed" },
//     { num: "4", sup: "+", label: "Active Programs" },
//   ];

//   const programItems = [
//     "Back-to-school kits",
//     "Uniform sponsorship",
//     "Textbook & stationery packs",
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

//       {/*
//         Directional overlay — very dark on the left where text lives,
//         fades to near-transparent on the right so the image breathes.
//         This replaces the flat 75% black overlay that was smothering the image.
//       */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(105deg, rgba(10,20,60,0.97) 0%, rgba(10,20,60,0.85) 40%, rgba(10,20,60,0.40) 70%, rgba(10,20,60,0.10) 100%)",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 pt-[72px]">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
//           {/* ── Left: Main Content ── */}
//           <div className="max-w-[560px]">
//             {/* Eyebrow */}
//             <div className="flex items-center gap-[10px] mb-6">
//               <div className="w-7 h-px bg-[#F5C400]" />
//               <span
//                 className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#F5C400]"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Nurturing Every Child's Potential
//               </span>
//               <div className="w-7 h-px bg-[#F5C400]" />
//             </div>

//             {/* Headline */}
//             <h1
//               className="text-[52px] sm:text-[62px] font-bold text-white leading-[1.06] tracking-[-0.5px] mb-5"
//               style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
//             >
//               Empowering Children.
//               <br />
//               <em className="italic text-[#F5C400]">Transforming</em> Futures.
//             </h1>

//             {/* Description */}
//             <p
//               className="text-[15px] font-light text-white/72 leading-[1.8] max-w-[460px] mb-9"
//               style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//             >
//               Precious Pearl Support Initiative is dedicated to helping school
//               children access quality education, essential resources, and
//               opportunities to thrive.
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-wrap items-center gap-3 mb-12">
//               <Link
//                 href="/donate"
//                 className="bg-[#F5C400] hover:bg-white text-[#0D1B5E] text-[10.5px] font-bold tracking-[0.16em] uppercase px-8 py-[14px] transition-colors duration-200"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Donate Now
//               </Link>
//               <Link
//                 href="/get-involved"
//                 className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-[10.5px] font-semibold tracking-[0.16em] uppercase px-8 py-[14px] transition-all duration-200"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Sponsor a Child
//               </Link>
//             </div>

//             {/* Stats */}
//             <div className="flex items-start border-t border-white/15 pt-7 gap-0">
//               {stats.map((stat, i) => (
//                 <div
//                   key={stat.label}
//                   className={`pr-7 mr-7 ${
//                     i !== stats.length - 1
//                       ? "border-r border-white/15"
//                       : "border-none pr-0 mr-0"
//                   }`}
//                 >
//                   <div
//                     className="text-[38px] font-bold text-white leading-none"
//                     style={{
//                       fontFamily: "var(--font-playfair), Georgia, serif",
//                     }}
//                   >
//                     {stat.num}
//                     <sup className="text-[17px] text-[#F5C400] align-super">
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

//           {/* ── Right: Featured Program Card ── */}
//           <div className="hidden lg:flex justify-end items-center">
//             <div
//               className="w-[268px] border border-[#F5C400]/20 p-7"
//               style={{
//                 background: "rgba(13, 27, 94, 0.45)",
//                 backdropFilter: "blur(6px)",
//               }}
//             >
//               {/* Badge */}
//               <span
//                 className="inline-block bg-[#F5C400] text-[#0D1B5E] text-[8.5px] font-bold tracking-[0.18em] uppercase px-3 py-[5px] mb-4"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Featured Program
//               </span>

//               {/* Card title */}
//               <h3
//                 className="text-[19px] font-bold text-white leading-[1.3] mb-2"
//                 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
//               >
//                 School Supplies Drive 2025
//               </h3>
//               <p
//                 className="text-[12px] text-white/60 leading-[1.65] mb-5"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Help us equip 200+ children with the tools they need to succeed
//                 this term.
//               </p>

//               <div className="h-px bg-[#F5C400]/20 mb-5" />

//               {/* Program items */}
//               <ul className="flex flex-col gap-3 mb-5">
//                 {programItems.map((item) => (
//                   <li key={item} className="flex items-center gap-[10px]">
//                     <span className="w-[6px] h-[6px] bg-[#F5C400] flex-shrink-0" />
//                     <span
//                       className="text-[11.5px] text-white/75"
//                       style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//                     >
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>

//               <Link
//                 href="/programs"
//                 className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#F5C400] hover:text-white transition-colors duration-200"
//                 style={{ fontFamily: "var(--font-barlow), sans-serif" }}
//               >
//                 Learn more →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
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
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 pt-[72px]">
        <div className="py-20 lg:py-32">
          <div className="max-w-[680px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-[10px] mb-7">
              <div className="w-8 h-px bg-[#F5C400]" />
              <span
                className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#F5C400]"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                Nurturing Every Child's Potential
              </span>
              <div className="w-8 h-px bg-[#F5C400]" />
            </div>

            {/* Headline */}
            <h1
              className="text-[56px] sm:text-[68px] lg:text-[76px] font-bold text-white leading-[1.04] tracking-[-1px] mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Empowering
              <br />
              Children.
              <br />
              <em className="italic text-[#F5C400]">Transforming</em> Futures.
            </h1>

            {/* Description */}
            <p
              className="text-[16px] font-light text-white/75 leading-[1.85] max-w-[520px] mb-10"
              style={{ fontFamily: "var(--font-barlow), sans-serif" }}
            >
              Precious Pearl Support Initiative is dedicated to helping school
              children access quality education, essential resources, and
              opportunities to thrive.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="/donate"
                className="bg-[#F5C400] hover:bg-white text-[#0D1B5E] text-[11px] font-bold tracking-[0.16em] uppercase px-10 py-[15px] transition-colors duration-200"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                Donate Now
              </Link>
              <Link
                href="/get-involved"
                className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-[11px] font-semibold tracking-[0.16em] uppercase px-10 py-[15px] transition-all duration-200"
                style={{ fontFamily: "var(--font-barlow), sans-serif" }}
              >
                Sponsor a Child
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-start border-t border-white/15 pt-8 gap-0">
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
