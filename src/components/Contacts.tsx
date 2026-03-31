// "use client";

// import { useEffect, useRef, useState } from "react";

// const contactDetails = [
//   {
//     label: "Email",
//     icon: "✉️",
//     value: "info@preciouspearlinitiative.org",
//     href: "mailto:info@preciouspearlinitiative.org",
//   },
//   {
//     label: "Phone",
//     icon: "📞",
//     value: "+1 832 894 7736",
//     href: "tel:+18328947736",
//   },
//   {
//     label: "Location",
//     icon: "📍",
//     value: "Insert Location Here",
//     href: "#",
//   },
// ];

// export default function ContactPage() {
//   const pageRef = useRef<HTMLDivElement>(null);
//   const [animate, setAnimate] = useState(false);
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.05 },
//     );
//     if (pageRef.current) observer.observe(pageRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1500));
//     setLoading(false);
//     setSubmitted(true);
//   };

//   return (
//     <main
//       ref={pageRef}
//       className="min-h-screen bg-[#0D1B5E] relative overflow-hidden"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       {/* Gold top border */}
//       <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />

//       {/* Subtle background glow */}
//       <div
//         className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at top right, rgba(245,196,0,0.06) 0%, transparent 65%)",
//         }}
//       />
//       <div
//         className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at bottom left, rgba(245,196,0,0.04) 0%, transparent 65%)",
//         }}
//       />

//       <div className="max-w-5xl mx-auto px-6 py-24 relative">
//         {/* ── Page heading ── */}
//         <div
//           className="mb-16"
//           style={{
//             opacity: animate ? 1 : 0,
//             transform: animate ? "translateY(0)" : "translateY(16px)",
//             transition: "opacity 0.6s ease, transform 0.6s ease",
//           }}
//         >
//           <div className="flex items-center gap-3 mb-5">
//             <div className="w-6 h-[2px] bg-[#F5C400]" />
//             <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//               Contact Us
//             </span>
//           </div>
//           <h1
//             className="text-white text-4xl lg:text-[50px] font-bold leading-[1.08] tracking-tight mb-4 max-w-xl"
//             style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//           >
//             Let's Start a <span className="text-[#F5C400]">Conversation.</span>
//           </h1>
//           <p className="text-white/50 text-[15px] leading-[1.85] max-w-lg">
//             Whether you want to donate, volunteer, partner with us, or simply
//             learn more — we'd love to hear from you.
//           </p>
//         </div>

//         {/* ── Two column layout ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
//           {/* Left — contact details */}
//           <div
//             className="space-y-4"
//             style={{
//               opacity: animate ? 1 : 0,
//               transform: animate ? "translateY(0)" : "translateY(20px)",
//               transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
//             }}
//           >
//             {contactDetails.map((detail) => (
//               <a
//                 key={detail.label}
//                 href={detail.href}
//                 className="flex items-center gap-4 bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-5 hover:border-[#F5C400]/30 hover:bg-white/[0.08] transition-all duration-200 group block"
//               >
//                 <div className="w-11 h-11 rounded-xl bg-white/[0.07] flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
//                   {detail.icon}
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-1">
//                     {detail.label}
//                   </p>
//                   <p className="text-white text-[14.5px] font-semibold">
//                     {detail.value}
//                   </p>
//                 </div>
//               </a>
//             ))}

//             {/* Office hours */}
//             <div className="bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-5">
//               <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
//                 Office Hours
//               </p>
//               <div className="space-y-2">
//                 {[
//                   { day: "Mon – Fri", hours: "9:00 AM – 5:00 PM" },
//                   { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
//                   { day: "Sunday", hours: "Closed" },
//                 ].map((row) => (
//                   <div
//                     key={row.day}
//                     className="flex items-center justify-between"
//                   >
//                     <span className="text-white/45 text-[13.5px]">
//                       {row.day}
//                     </span>
//                     <span className="text-white/80 text-[13.5px] font-semibold">
//                       {row.hours}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right — form */}
//           <div
//             className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 lg:p-10"
//             style={{
//               opacity: animate ? 1 : 0,
//               transform: animate ? "translateY(0)" : "translateY(20px)",
//               transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
//             }}
//           >
//             {!submitted ? (
//               <>
//                 <h2
//                   className="text-white text-[22px] font-bold mb-1"
//                   style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                 >
//                   Send Us a Message
//                 </h2>
//                 <p className="text-white/35 text-[13.5px] mb-8">
//                   We typically respond within 24–48 hours.
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <label className="block text-white/50 text-[12px] font-semibold tracking-[0.1em] uppercase mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="e.g. John Adeyemi"
//                       value={formState.name}
//                       onChange={(e) =>
//                         setFormState({ ...formState, name: e.target.value })
//                       }
//                       className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
//                         focus:outline-none focus:border-[#F5C400]/40 hover:border-white/20 transition-colors duration-200"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-white/50 text-[12px] font-semibold tracking-[0.1em] uppercase mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       placeholder="you@example.com"
//                       value={formState.email}
//                       onChange={(e) =>
//                         setFormState({ ...formState, email: e.target.value })
//                       }
//                       className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
//                         focus:outline-none focus:border-[#F5C400]/40 hover:border-white/20 transition-colors duration-200"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-white/50 text-[12px] font-semibold tracking-[0.1em] uppercase mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       required
//                       rows={5}
//                       placeholder="Tell us how you'd like to get involved..."
//                       value={formState.message}
//                       onChange={(e) =>
//                         setFormState({ ...formState, message: e.target.value })
//                       }
//                       className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
//                         focus:outline-none focus:border-[#F5C400]/40 hover:border-white/20 transition-colors duration-200 resize-none"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-[#F5C400] text-[#0D1B5E] font-bold py-[14px] rounded-xl text-[12px] tracking-[0.14em] uppercase
//                       hover:bg-white active:scale-[0.99] transition-all duration-200 disabled:opacity-60
//                       flex items-center justify-center gap-2 group"
//                   >
//                     {loading ? (
//                       <>
//                         <span className="w-4 h-4 border-2 border-[#0D1B5E]/30 border-t-[#0D1B5E] rounded-full animate-spin" />
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <span className="group-hover:translate-x-1 transition-transform duration-200">
//                           →
//                         </span>
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </>
//             ) : (
//               <div className="flex flex-col items-center justify-center text-center py-16">
//                 <div className="w-14 h-14 rounded-full bg-[#F5C400]/10 border border-[#F5C400]/30 flex items-center justify-center mb-6">
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#F5C400"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <polyline points="20 6 9 17 4 12" />
//                   </svg>
//                 </div>
//                 <h3
//                   className="text-white text-[24px] font-bold mb-3"
//                   style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                 >
//                   Message Received!
//                 </h3>
//                 <p className="text-white/45 text-[14px] leading-[1.8] max-w-xs">
//                   Thank you for reaching out. We'll get back to you within 24–48
//                   hours.
//                 </p>
//                 <button
//                   onClick={() => {
//                     setSubmitted(false);
//                     setFormState({ name: "", email: "", message: "" });
//                   }}
//                   className="mt-8 text-[#F5C400] text-[13px] font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity duration-200"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Bottom tagline */}
//         <p
//           className="text-center text-white/20 text-[12.5px] mt-16"
//           style={{
//             opacity: animate ? 1 : 0,
//             transition: "opacity 0.6s ease 0.6s",
//           }}
//         >
//           Every child matters. Every dream counts.
//         </p>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    reason: "",
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
      className="min-h-screen bg-[#0D1B5E] relative overflow-hidden flex items-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F5C400]" />

      {/* Background glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(245,196,0,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(245,196,0,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left: heading + info ── */}
          <div
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[#F5C400]" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                Contact Us
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-white text-4xl lg:text-[48px] font-bold leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Let's Start a{" "}
              <span className="text-[#F5C400]">Conversation.</span>
            </h1>

            {/* Body */}
            <p className="text-white/55 text-[15px] leading-[1.9] mb-10 max-w-md">
              Whether you want to donate, volunteer, partner with us, or simply
              learn more — we'd love to hear from you. Fill out the form and
              we'll get back to you shortly.
            </p>

            {/* Office hours badge */}
            <div className="inline-flex items-center gap-2 bg-[#F5C400]/10 border border-[#F5C400]/20 rounded-full px-4 py-2 mb-10">
              <div className="w-2 h-2 rounded-full bg-[#F5C400] animate-pulse" />
              <span className="text-[#F5C400] text-[12px] font-semibold tracking-wide">
                Office Hours: Mon–Fri, 9AM – 5PM
              </span>
            </div>

            {/* Contact links */}
            <div className="space-y-4">
              {[
                {
                  label: "Email us",
                  value: "info@preciouspearlinitiative.org",
                  href: "mailto:info@preciouspearlinitiative.org",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
                {
                  label: "Call us",
                  value: "+1 832 894 7736",
                  href: "tel:+18328947736",
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.63-1.63a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-[#F5C400] group-hover:border-[#F5C400]/30 transition-all duration-200 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 font-semibold tracking-[0.2em] uppercase mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white/70 text-[13.5px] font-medium group-hover:text-white transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 lg:p-10"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
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
                <p className="text-white/35 text-[13px] mb-8">
                  We typically respond within 24–48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/45 text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Adeyemi"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
                          focus:outline-none focus:border-[#F5C400]/50 hover:border-white/20 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-white/45 text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
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
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
                          focus:outline-none focus:border-[#F5C400]/50 hover:border-white/20 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Reason dropdown */}
                  <div>
                    <label className="block text-white/45 text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                      Reason for Reaching Out
                    </label>
                    <select
                      required
                      value={formState.reason}
                      onChange={(e) =>
                        setFormState({ ...formState, reason: e.target.value })
                      }
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white/70
                        focus:outline-none focus:border-[#F5C400]/50 hover:border-white/20 transition-colors duration-200
                        appearance-none cursor-pointer"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    >
                      <option
                        value=""
                        disabled
                        style={{ background: "#0D1B5E" }}
                      >
                        Select a reason
                      </option>
                      <option value="donate" style={{ background: "#0D1B5E" }}>
                        I want to donate
                      </option>
                      <option
                        value="volunteer"
                        style={{ background: "#0D1B5E" }}
                      >
                        I want to volunteer
                      </option>
                      <option value="partner" style={{ background: "#0D1B5E" }}>
                        Partnership enquiry
                      </option>
                      <option value="sponsor" style={{ background: "#0D1B5E" }}>
                        Sponsor a child
                      </option>
                      <option value="other" style={{ background: "#0D1B5E" }}>
                        General enquiry
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/45 text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us how you'd like to get involved..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/20
                        focus:outline-none focus:border-[#F5C400]/50 hover:border-white/20 transition-colors duration-200 resize-none"
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
                    setFormState({
                      name: "",
                      email: "",
                      reason: "",
                      message: "",
                    });
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
          className="text-center text-white/20 text-[12.5px] mt-20"
          style={{
            opacity: animate ? 1 : 0,
            transition: "opacity 0.6s ease 0.7s",
          }}
        >
          Every child matters. Every dream counts.
        </p>
      </div>
    </main>
  );
}
