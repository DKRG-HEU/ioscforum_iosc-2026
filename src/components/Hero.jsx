// "use client";
// import OceanScene from "./ocean/OceanSceneClient";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import {
//   ArrowDown,
//   ArrowRight,
//   ArrowUpRight,
//   CalendarDays,
//   MapPin,
//   Waves,
//   Activity,
// } from "lucide-react";

// export default function Hero() {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power3.out" },
//       });

//       tl.from(".hero-eyebrow", {
//         y: 20,
//         opacity: 0,
//         duration: 0.7,
//       })
//         .from(
//           ".hero-title-line",
//           {
//             y: 55,
//             opacity: 0,
//             duration: 0.9,
//             stagger: 0.16,
//           },
//           "-=0.35"
//         )
//         .from(
//           ".hero-description, .hero-actions, .hero-meta",
//           {
//             y: 22,
//             opacity: 0,
//             duration: 0.7,
//             stagger: 0.15,
//           },
//           "-=0.4"
//         )
//         .from(
//           ".ocean-panel",
//           {
//             opacity: 0,
//             x: 25,
//             duration: 0.9,
//             stagger: 0.2,
//           },
//           "-=0.8"
//         );

//       // Research vessel: gentle movement on the waves
//       gsap.to(".research-ship", {
//         y: -7,
//         rotation: 0.6,
//         duration: 2.8,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         transformOrigin: "50% 50%",
//       });

//       // AUV moving independently underwater
//       gsap.to(".auv", {
//         x: 15,
//         y: -10,
//         rotation: -2,
//         duration: 3.5,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       // Sonar rings expand from the AUV
//       gsap.to(".sonar-ring", {
//         scale: 2.2,
//         opacity: 0,
//         duration: 2.4,
//         repeat: -1,
//         stagger: 0.8,
//         ease: "power1.out",
//         transformOrigin: "center",
//       });

//       // Moving data points along the underwater network
//       gsap.to(".data-pulse", {
//         strokeDashoffset: -50,
//         duration: 2.5,
//         repeat: -1,
//         ease: "none",
//       });

//       // Sensor markers gently pulse
//       gsap.to(".sensor-node", {
//         opacity: 0.35,
//         scale: 1.35,
//         duration: 1.4,
//         repeat: -1,
//         yoyo: true,
//         stagger: 0.25,
//         transformOrigin: "center",
//         ease: "sine.inOut",
//       });

//       // Ocean surface movement
//       gsap.to(".surface-wave", {
//         x: -30,
//         duration: 5,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       id="home"
//       className="relative isolate min-h-[780px] overflow-hidden
//         bg-[#031426] text-white lg:min-h-screen"
//     >
//       {/* Ocean background */}
//       <div className="absolute inset-0 -z-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br
//           from-[#092e50] via-[#031a31] to-[#010914]" />

//         <div className="absolute -right-20 top-20 h-96 w-96
//           rounded-full bg-cyan-400/10 blur-[120px]" />

//         <div className="absolute bottom-0 left-1/3 h-96 w-96
//           rounded-full bg-blue-500/10 blur-[100px]" />

//         <div className="ocean-grid absolute inset-0 opacity-20" />
//       </div>

//       {/* Animated ocean illustration */}
//       <div
//         className="pointer-events-none absolute inset-0 -z-10
//           overflow-hidden"
//         aria-hidden="true"
//       >
//         <OceanScene />
//       </div>

//       {/* Readability overlays */}
//       <div className="pointer-events-none absolute inset-0 -z-[5]
//         bg-gradient-to-r from-[#031426] via-[#031426]/90
//         to-transparent lg:via-[#031426]/70" />

//       <div className="pointer-events-none absolute inset-0 -z-[5]
//         bg-gradient-to-t from-[#031426] via-transparent
//         to-[#031426]/30" />

//       {/* Navigation */}
//       <header className="relative z-20 mx-auto flex max-w-7xl
//         items-center justify-between px-6 py-6 lg:px-12">
//         <a href="#home" className="flex items-center gap-3">
//           <span className="flex h-11 w-11 items-center justify-center
//             rounded-full border border-cyan-300/50 bg-cyan-300/10">
//             <Waves className="text-cyan-300" size={25} />
//           </span>
//           <span>
//             <span className="block text-xl font-semibold tracking-wide">
//               IOSC Forum
//             </span>
//             <span className="text-[10px] tracking-[0.18em] text-cyan-100/60">
//               INTELLIGENT OCEAN SYSTEMS
//             </span>
//           </span>
//         </a>

//         <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
//           <a href="#home" className="text-cyan-300">Home</a>
//           <a href="#about" className="transition hover:text-cyan-300">About</a>
//           <a href="#programme" className="transition hover:text-cyan-300">
//             Programme
//           </a>
//           <a href="#research" className="transition hover:text-cyan-300">
//             Research
//           </a>
//           <a href="#contact" className="transition hover:text-cyan-300">
//             Contact
//           </a>
//         </nav>

//         <a
//           href="#programme"
//           className="hidden items-center gap-2 rounded-full
//             border border-cyan-300/50 px-5 py-3 text-sm
//             transition hover:bg-cyan-300 hover:text-[#031426] sm:flex"
//         >
//           Explore forum <ArrowUpRight size={16} />
//         </a>
//       </header>

//       {/* Main hero */}
//       <div className="relative z-10 mx-auto flex max-w-7xl
//         flex-col justify-center px-6 pb-20 pt-16
//         lg:min-h-[calc(100vh-100px)] lg:px-12 lg:pb-28 lg:pt-8">

//         <div className="max-w-3xl">
//           <div className="hero-eyebrow mb-7 inline-flex items-center
//             gap-3 rounded-full border border-cyan-300/25
//             bg-cyan-300/[0.06] px-4 py-2 text-xs
//             tracking-[0.22em] text-cyan-200">
//             <span className="h-2 w-2 animate-pulse rounded-full
//               bg-cyan-300" />
//             INTERNATIONAL FORUM · 2026
//           </div>

//           <h1 className="text-5xl font-semibold leading-[1.05]
//             tracking-tight sm:text-6xl lg:text-[76px]">
//             <span className="hero-title-line block">
//               Intelligent Ocean
//             </span>
//             <span className="hero-title-line mt-2 block
//               bg-gradient-to-r from-cyan-200 via-cyan-400
//               to-blue-400 bg-clip-text text-transparent">
//               Sensing & Computing
//             </span>
//           </h1>

//           <p className="hero-description mt-7 max-w-xl
//             text-base leading-8 text-slate-300 sm:text-lg">
//             Connecting ocean observation, autonomous underwater
//             systems, and intelligent computing to understand
//             the ocean and support sustainable marine futures.
//           </p>

//           <div className="hero-actions mt-9 flex flex-wrap gap-4">
//             <a
//               href="#about"
//               className="group inline-flex items-center gap-3
//                 rounded-full bg-cyan-300 px-6 py-4 font-medium
//                 text-[#031426] transition hover:bg-white"
//             >
//               Discover the forum
//               <ArrowRight size={18}
//                 className="transition-transform group-hover:translate-x-1" />
//             </a>

//             <a
//               href="#research"
//               className="inline-flex items-center gap-3
//                 rounded-full border border-white/25 px-6 py-4
//                 text-white transition hover:border-cyan-300
//                 hover:bg-white/5"
//             >
//               Explore ocean research
//               <Activity size={18} className="text-cyan-300" />
//             </a>
//           </div>

//           <div className="hero-meta mt-12 flex flex-wrap gap-x-10
//             gap-y-5 border-t border-white/15 pt-7">
//             <div className="flex items-center gap-3">
//               <CalendarDays size={22} className="text-cyan-300" />
//               <div>
//                 <p className="text-xs text-white/50">Date</p>
//                 <p className="mt-1 text-sm">To be announced</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <MapPin size={22} className="text-cyan-300" />
//               <div>
//                 <p className="text-xs text-white/50">Location</p>
//                 <p className="mt-1 text-sm">Harbin, China</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Floating research status */}
//         <div className="ocean-panel absolute bottom-20 right-12
//           hidden w-64 rounded-2xl border border-cyan-300/20
//           bg-[#061a2b]/70 p-5 shadow-2xl backdrop-blur-xl
//           xl:block">
//           <div className="flex items-center justify-between">
//             <span className="text-xs tracking-widest text-cyan-200">
//               OCEAN OBSERVATION
//             </span>
//             <span className="h-2 w-2 rounded-full bg-emerald-400" />
//           </div>

//           <div className="mt-5 space-y-4">
//             {[
//               ["01", "Autonomous navigation"],
//               ["02", "Seafloor mapping"],
//               ["03", "Intelligent sensing"],
//             ].map(([number, label]) => (
//               <div key={number}
//                 className="flex items-center gap-3 border-b
//                   border-white/10 pb-3 last:border-0">
//                 <span className="text-xs text-cyan-400">{number}</span>
//                 <span className="text-sm text-white/80">{label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-6 left-1/2 z-10
//         -translate-x-1/2 text-center">
//         <a href="#about" className="flex flex-col items-center
//           gap-2 text-xs tracking-widest text-white/55
//           transition hover:text-cyan-300">
//           <ArrowDown size={18} className="animate-bounce" />
//           SCROLL TO EXPLORE
//         </a>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import OceanScene from "./ocean/OceanSceneClient";
import EventCountdown from '@/components/EventCountdown';
import TypingText from "@/components/animated/TypingText";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Waves,
  Activity,
} from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline
        .from(".hero-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-title-line",
          {
            y: 45,
            opacity: 0,
            duration: 0.9,
            stagger: 0.16,
          },
          "-=0.35"
        )
        .from(
          ".hero-description, .hero-actions, .hero-meta",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.35"
        )
        .from(
          ".ocean-panel",
          {
            x: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );

      // Floating interface elements
      gsap.to(".hero-floating-dot", {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.35,
      });

      // Decorative lines
      gsap.to(".hero-signal-line", {
        opacity: 0.25,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: "sine.inOut",
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate min-h-[760px] overflow-hidden
        bg-[#031426] text-white lg:min-h-screen"
    >
      {/* =========================================
          3D OCEAN BACKGROUND
          Uses procedural Three.js models.
          No images or GLB files required.
      ========================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <OceanScene />
      </div>

      {/* Ocean color grading */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]
          bg-gradient-to-br from-[#031426]/35
          via-[#031426]/20 to-[#010914]/60"
      />

      {/* Protect text readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[2]
          bg-gradient-to-r from-[#031426]/95
          via-[#031426]/75 to-transparent
          lg:via-[#031426]/50"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[2]
          bg-gradient-to-t from-[#031426]
          via-transparent to-[#031426]/20"
      />

      {/* Subtle grid texture */}
      <div
        className="hero-signal-line pointer-events-none absolute
          inset-0 z-[2] opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(80,220,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(80,220,255,0.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* =========================================
          NAVIGATION
      ========================================== */}
      

      {/* =========================================
          MAIN HERO CONTENT
      ========================================== */}
      <div
        className="relative z-10 mx-auto flex max-w-7xl
          flex-col justify-center px-6 pb-28 pt-16
          sm:pt-20 lg:min-h-[calc(100vh-100px)]
          lg:px-12 lg:pb-32 lg:pt-8"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="hero-eyebrow mb-7 inline-flex max-w-full
              items-center gap-3 rounded-full
              border border-cyan-300/25
              bg-[#062139]/70 px-4 py-2.5
              text-[10px] tracking-[0.15em]
              text-cyan-200 backdrop-blur-md
              sm:text-xs sm:tracking-[0.22em]"
          >
            <span className="hero-floating-dot relative flex h-2 w-2 shrink-0">
              <span
                className="absolute inline-flex h-full w-full
                  animate-ping rounded-full bg-cyan-300 opacity-60"
              />
              <span
                className="relative inline-flex h-2 w-2
                  rounded-full bg-cyan-300"
              />
            </span>

            INTERNATIONAL FORUM · 2026
          </div>

          {/* Heading */}
          {/* Heading */}
        <h1
          className="text-4xl font-semibold leading-[1.08]
            tracking-tight sm:text-6xl
            lg:text-[76px] xl:text-[82px]"
        >
          <span className="hero-title-line block">
            Intelligent Ocean &
          </span>

          <span
            className="hero-title-line mt-2 block
              bg-gradient-to-r from-cyan-200
              via-cyan-400 to-blue-400
              bg-clip-text text-transparent"
          >
            <TypingText
              text={[
                "Sensing & Computing",
                "Sensing",
                "Computing",
              ]}
              delay={50}
              holdDelay={1800}
              loop={true}
              cursor={true}
              cursorClassName="bg-cyan-300"
            />
          </span>
        </h1>

          {/* Description */}
          <p
            className="hero-description mt-7 max-w-xl
              text-base leading-7 text-slate-300
              sm:text-lg sm:leading-8"
          >
            Connecting ocean observation, autonomous underwater
            systems, and intelligent computing to understand
            the ocean and support sustainable marine futures.
          </p>

          {/* Actions */}
          <div
            className="hero-actions mt-9 flex flex-col
              gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#about"
              className="group inline-flex min-h-14
                items-center justify-center gap-3
                rounded-full bg-cyan-300 px-6 py-4
                font-medium text-[#031426]
                shadow-lg shadow-cyan-500/10
                transition duration-300
                hover:-translate-y-0.5 hover:bg-white"
            >
              Discover the forum

              <ArrowRight
                size={18}
                className="transition-transform
                  group-hover:translate-x-1"
              />
            </a>

            <a
              href="#research"
              className="inline-flex min-h-14
                items-center justify-center gap-3
                rounded-full border border-white/25
                bg-white/[0.03] px-6 py-4
                text-white backdrop-blur-sm
                transition duration-300
                hover:-translate-y-0.5
                hover:border-cyan-300/70
                hover:bg-white/[0.08]"
            >
              Explore ocean research

              <Activity size={18} className="text-cyan-300" />
            </a>
          </div>

          {/* Forum details */}
          <div
            className="hero-meta mt-12 flex flex-wrap
              gap-x-9 gap-y-5 border-t border-white/15
              pt-7 sm:gap-x-12"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center
                  justify-center rounded-xl
                  border border-cyan-300/20
                  bg-cyan-300/[0.07]"
              >
                <CalendarDays
                  size={20}
                  className="text-cyan-300"
                />
              </span>

              <div>
                <p className="text-xs text-white/50">
                  Date
                </p>
                <EventCountdown />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center
                  justify-center rounded-xl
                  border border-cyan-300/20
                  bg-cyan-300/[0.07]"
              >
                <MapPin
                  size={20}
                  className="text-cyan-300"
                />
              </span>

              <div>
                <p className="text-xs text-white/50">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium">
                  Harbin, China
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            FLOATING OCEAN RESEARCH PANEL
        ========================================== */}
        <aside
          className="ocean-panel mt-12 w-full max-w-sm
            rounded-2xl border border-cyan-300/20
            bg-[#061a2b]/75 p-5 shadow-2xl
            backdrop-blur-xl sm:p-6
            lg:absolute lg:bottom-24 lg:right-12
            lg:mt-0 lg:w-64 xl:right-14"
          aria-label="Ocean research areas"
        >
          <div className="flex items-center justify-between gap-3">
            <span
              className="text-[10px] tracking-[0.16em]
                text-cyan-200 sm:text-xs sm:tracking-widest"
            >
              OCEAN OBSERVATION
            </span>

            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full
                  animate-ping rounded-full
                  bg-emerald-400 opacity-50"
              />
              <span
                className="relative inline-flex h-2.5 w-2.5
                  rounded-full bg-emerald-400"
              />
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-white/50">
            Exploring connected and intelligent ocean systems.
          </p>

          <div className="mt-5 space-y-1">
            {[
              ["01", "Autonomous navigation"],
              ["02", "Seafloor mapping"],
              ["03", "Intelligent sensing"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="flex items-center gap-3
                  border-b border-white/[0.08]
                  py-3 last:border-0"
              >
                <span className="text-xs text-cyan-400">
                  {number}
                </span>

                <span className="text-sm text-white/80">
                  {label}
                </span>

                <ArrowUpRight
                  size={14}
                  className="ml-auto text-white/30"
                />
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}
      <div
        className="absolute bottom-5 left-1/2 z-10
          -translate-x-1/2 sm:bottom-7"
      >
        <a
          href="#about"
          className="group flex flex-col items-center
            gap-2 whitespace-nowrap text-[10px]
            tracking-[0.2em] text-white/50
            transition hover:text-cyan-300"
        >
          SCROLL TO EXPLORE

          <ArrowDown
            size={18}
            className="animate-bounce transition-colors
              group-hover:text-cyan-300"
          />
        </a>
      </div>
    </section>
  );
}



