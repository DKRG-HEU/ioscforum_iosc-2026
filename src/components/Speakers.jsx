// "use client";

// import Link from "next/link";
// import { ArrowRight, Users } from "lucide-react";
// import SpeakerCard from "@/components/SpeakerCard";
// import speakers from "@/app/data/speakers";

// export default function Speakers() {
//   if (!speakers.length) return null;

//   // Duplicate the list to create a seamless infinite marquee.
//   const repeatedSpeakers = [...speakers, ...speakers];

//   return (
//     <section
//       id="featured-speakers"
//       className="relative overflow-hidden bg-[#071a32] py-20 text-white sm:py-24 lg:py-28"
//     >
//       {/* Decorative background */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
//       />

//       {/* Heading */}
//       <div className="relative z-10 mx-auto mb-12 max-w-7xl px-5 sm:px-8 lg:mb-16 lg:px-12">
//         <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
//           <div className="max-w-3xl">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
//               <Users size={15} />
//               IOSC Forum 2026
//             </div>

//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
//               Meet Our{" "}
//               <span className="text-cyan-300">Speakers</span>
//             </h2>

//             <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
//               Discover the researchers and experts advancing ubiquitous
//               computing, the Internet of Things, intelligent sensing,
//               networked systems, and emerging technologies.
//             </p>
//           </div>

//           <Link
//             href="/speakers/"
//             className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-300/50 hover:bg-cyan-300 hover:text-[#071a32]"
//           >
//             View all speakers
//             <ArrowRight
//               size={17}
//               className="transition-transform group-hover:translate-x-1"
//             />
//           </Link>
//         </div>

//         <div className="mt-8 flex items-center justify-between border-b border-white/10 pb-5">
//           <p className="text-sm text-slate-400">
//             Featured researchers and invited experts
//           </p>

//           <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
//             {speakers.length} speakers
//           </span>
//         </div>
//       </div>

//       {/* Auto-scrolling cards */}
//       <div className="speaker-marquee relative z-10">
//         {/* Fade edges */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#071a32] to-transparent sm:w-16 lg:w-28"
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#071a32] to-transparent sm:w-16 lg:w-28"
//         />

//         <div className="speaker-marquee-track flex w-max items-stretch gap-5 px-3 sm:gap-7 sm:px-6">
//           {[0, 1].map((group) => (
//             <div
//               key={group}
//               className="flex shrink-0 items-stretch gap-5 pr-5 sm:gap-7 sm:pr-7"
//               aria-hidden={group === 1 ? "true" : undefined}
//             >
//               {speakers.map((speaker) => (
//                 <div
//                   key={`${group}-${speaker.slug}`}
//                   className="w-[250px] shrink-0 sm:w-[285px] lg:w-[310px]"
//                 >
//                   <SpeakerCard {...speaker} />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer note */}
//       <div className="relative z-10 mx-auto mt-10 max-w-7xl px-5 sm:px-8 lg:px-12">
//         <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
//           <p>
//             Explore speaker profiles to discover biographies and talk details.
//           </p>

//           <p className="uppercase tracking-[0.18em] text-cyan-200/70">
//             Research · Innovation · Collaboration
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";

// import SpeakerCard from "@/components/SpeakerCard";
// import speakers from "@/app/data/speakers";

// gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

// const SPACING = 0.1;

// function buildSeamlessLoop(items, spacing, animateCard) {
//   const overlap = Math.ceil(1 / spacing);
//   const startTime = items.length * spacing + 0.5;
//   const loopTime = (items.length + overlap) * spacing + 1;

//   const rawSequence = gsap.timeline({ paused: true });

//   const seamlessLoop = gsap.timeline({
//     paused: true,
//     repeat: -1,
//   });

//   const length = items.length + overlap * 2;

//   for (let i = 0; i < length; i++) {
//     const index = i % items.length;
//     const time = i * spacing;

//     rawSequence.add(animateCard(items[index]), time);

//     if (i <= items.length) {
//       seamlessLoop.addLabel(`label${i}`, time);
//     }
//   }

//   rawSequence.time(startTime);

//   seamlessLoop
//     .to(rawSequence, {
//       time: loopTime,
//       duration: loopTime - startTime,
//       ease: "none",
//     })
//     .fromTo(
//       rawSequence,
//       { time: overlap * spacing + 1 },
//       {
//         time: startTime,
//         duration: startTime - (overlap * spacing + 1),
//         immediateRender: false,
//         ease: "none",
//       }
//     );

//   return { seamlessLoop, rawSequence };
// }

// export default function Speakers() {
//   const container = useRef(null);

//   useGSAP(
//     () => {
//       const root = container.current;

//       if (!root || !speakers.length) return;

//       const gallery = root.querySelector(".gallery-viewport");
//       const list = root.querySelector(".gallery-cards");
//       const proxy = root.querySelector(".drag-proxy");
//       const nextButton = root.querySelector(".gallery-next");
//       const prevButton = root.querySelector(".gallery-prev");

//       const items = gsap.utils.toArray(".gallery-card", root);

//       if (
//         !gallery ||
//         !list ||
//         !proxy ||
//         !nextButton ||
//         !prevButton ||
//         !items.length
//       ) {
//         return;
//       }

//       let loop;
//       let rawSequence;
//       let scrub;
//       let trigger;
//       let draggableInstances = [];

//       const prefersReducedMotion = window.matchMedia(
//         "(prefers-reduced-motion: reduce)"
//       ).matches;

//       if (prefersReducedMotion) {
//         // Keep the first speaker visible without continuous motion.
//         gsap.set(items, {
//           xPercent: 0,
//           opacity: 0,
//           scale: 1,
//           zIndex: 0,
//         });

//         gsap.set(items[0], {
//           opacity: 1,
//           zIndex: 1,
//         });

//         return;
//       }

//       gsap.set(items, {
//         xPercent: 400,
//         opacity: 0,
//         scale: 0,
//         zIndex: 0,
//         force3D: true,
//       });

//       const animateCard = (element) => {
//         const timeline = gsap.timeline();

//         timeline
//           .fromTo(
//             element,
//             {
//               scale: 0,
//               opacity: 0,
//             },
//             {
//               scale: 1,
//               opacity: 1,
//               zIndex: 10,
//               duration: 0.5,
//               yoyo: true,
//               repeat: 1,
//               ease: "power1.in",
//               immediateRender: false,
//             }
//           )
//           .fromTo(
//             element,
//             {
//               xPercent: 400,
//             },
//             {
//               xPercent: -400,
//               duration: 1,
//               ease: "none",
//               immediateRender: false,
//             },
//             0
//           );

//         return timeline;
//       };

//       const loopData = buildSeamlessLoop(
//         items,
//         SPACING,
//         animateCard
//       );

//       loop = loopData.seamlessLoop;
//       rawSequence = loopData.rawSequence;

//       const playhead = { offset: 0 };

//       const wrapTime = gsap.utils.wrap(0, loop.duration());

//       scrub = gsap.to(playhead, {
//         offset: 0,
//         duration: 0.35,
//         ease: "power2.out",
//         paused: true,
//         onUpdate() {
//           loop.time(wrapTime(playhead.offset));
//         },
//       });

//       // Scroll controls the animation.
//       // There is deliberately no scroll-boundary wrapping.
//       trigger = ScrollTrigger.create({
//         trigger: gallery,
//         start: "top top",
//         end: "+=3000",
//         pin: gallery,
//         pinSpacing: true,
//         invalidateOnRefresh: true,

//         onUpdate(self) {
//           const progress = gsap.utils.clamp(
//             0,
//             1,
//             self.progress
//           );

//           scrub.vars.offset = progress * loop.duration();
//           scrub.invalidate().restart();
//         },
//       });

//       // Move by a portion of the scroll range.
//       // Never send the page back to the start.
//       const moveGallery = (direction) => {
//         if (!trigger) return;

//         const range = trigger.end - trigger.start;
//         const step = range * SPACING;

//         const currentScroll = trigger.scroll();

//         const targetScroll = gsap.utils.clamp(
//           trigger.start + 1,
//           trigger.end - 1,
//           currentScroll + direction * step
//         );

//         trigger.scroll(targetScroll);
//         trigger.update();
//       };

//       const handleNext = () => moveGallery(1);
//       const handlePrev = () => moveGallery(-1);

//       nextButton.addEventListener("click", handleNext);
//       prevButton.addEventListener("click", handlePrev);

//       // Dragging controls the animation directly.
//       // It does not reset the browser's scroll position.
//       draggableInstances = Draggable.create(proxy, {
//         type: "x",
//         trigger: list,
//         inertia: false,

//         onPress() {
//           this.startOffset = scrub.vars.offset;
//         },

//         onDrag() {
//           scrub.vars.offset =
//             this.startOffset +
//             (this.startX - this.x) * 0.001;

//           scrub.invalidate().restart();
//         },
//       });

//       // Clean up the event listeners and all GSAP instances.
//       return () => {
//         nextButton.removeEventListener("click", handleNext);
//         prevButton.removeEventListener("click", handlePrev);

//         draggableInstances.forEach((instance) => instance.kill());

//         trigger?.kill();
//         scrub?.kill();
//         loop?.kill();
//         rawSequence?.kill();
//       };
//     },
//     { scope: container }
//   );

//   if (!speakers.length) return null;

//   return (
//     <section
//       ref={container}
//       id="featured-speakers"
//       className="relative overflow-hidden bg-[#071a32] text-white"
//     >
//       <div className="gallery-viewport relative flex h-screen min-h-[680px] w-full flex-col items-center justify-center overflow-hidden">
//         {/* Background glow */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[120px] sm:h-[600px] sm:w-[600px]"
//         />

//         {/* Heading */}
//         <div className="absolute left-4 right-4 top-9 z-20 mx-auto max-w-3xl text-center sm:top-12 md:top-14">
//           <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-xs md:text-sm">
//             IOSC Forum 2026
//           </p>

//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
//             Meet Our Speakers
//           </h2>

//           <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-300 sm:mt-4 sm:text-sm md:text-base md:leading-6">
//             Discover the researchers and experts shaping the
//             future of ubiquitous computing and connected technology.
//           </p>

//           <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-xs">
//             {speakers.length} Featured Speakers
//           </p>
//         </div>

//         {/* Infinite animated cards */}
//         <ul
//           aria-label="Featured speakers"
//           className="gallery-cards absolute left-1/2 top-[53%] m-0 h-[300px] w-[240px] -translate-x-1/2 -translate-y-1/2 list-none cursor-grab p-0 active:cursor-grabbing sm:h-[360px] sm:w-[288px] md:h-[390px] md:w-[312px]"
//         >
//           {speakers.map((speaker) => (
//             <li
//               key={speaker.slug}
//               className="gallery-card absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b2340] shadow-2xl shadow-black/30"
//             >
//               <div className="h-full w-full">
//                 <SpeakerCard {...speaker} />
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Previous / Next controls */}
//         <div className="absolute bottom-12 z-30 flex items-center justify-center gap-3 sm:bottom-10">
//           <button
//             type="button"
//             className="gallery-prev inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-3 text-xs font-semibold text-white backdrop-blur-md transition hover:border-cyan-300 hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-5 sm:text-sm"
//           >
//             <span aria-hidden="true">←</span>
//             Previous
//           </button>

//           <button
//             type="button"
//             className="gallery-next inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 py-3 text-xs font-semibold text-[#071a32] transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-5 sm:text-sm"
//           >
//             Next
//             <span aria-hidden="true">→</span>
//           </button>
//         </div>

//         {/* Draggable proxy */}
//         <div className="drag-proxy pointer-events-none invisible absolute left-0 top-0 size-1" />

//         <p className="absolute bottom-3 z-10 px-3 text-center text-[9px] uppercase tracking-[0.16em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
//           Scroll, drag, or use the arrows to explore
//         </p>
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import speakers from "@/app/data/speakers";

gsap.registerPlugin(useGSAP);

const spacing = 0.1;

function buildSeamlessLoop(items, spacing, animateFunc) {
  const overlap = Math.ceil(1 / spacing);
  const startTime = items.length * spacing + 0.5;
  const loopTime = (items.length + overlap) * spacing + 1;

  const rawSequence = gsap.timeline({ paused: true });

  const seamlessLoop = gsap.timeline({
    paused: true,
    repeat: -1,
  });

  const length = items.length + overlap * 2;

  for (let i = 0; i < length; i++) {
    const index = i % items.length;
    const time = i * spacing;

    rawSequence.add(animateFunc(items[index]), time);

    if (i <= items.length) {
      seamlessLoop.addLabel(`label${i}`, time);
    }
  }

  rawSequence.time(startTime);

  seamlessLoop
    .to(rawSequence, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: "none",
    })
    .fromTo(
      rawSequence,
      { time: overlap * spacing + 1 },
      {
        time: startTime,
        duration: startTime - (overlap * spacing + 1),
        immediateRender: false,
        ease: "none",
      }
    );

  return seamlessLoop;
}

export default function Speakers() {
  const container = useRef(null);
  const loopRef = useRef(null);

  useGSAP(
    () => {
      const root = container.current;
      if (!root || speakers.length === 0) return;

      const gallery = root.querySelector(".gallery-viewport");

      const items = gsap.utils.toArray(".gallery-card", root);

      if (!items.length) return;

      gsap.set(items, {
        xPercent: 400,
        opacity: 0,
        scale: 0,
      });

      const animateCard = (element) => {
        const timeline = gsap.timeline();

        timeline
          .fromTo(
            element,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              zIndex: 10,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "power1.in",
              immediateRender: false,
            }
          )
          .fromTo(
            element,
            { xPercent: 400 },
            {
              xPercent: -400,
              duration: 1,
              ease: "none",
              immediateRender: false,
            },
            0
          );

        return timeline;
      };

      const loop = buildSeamlessLoop(
        items,
        spacing,
        animateCard
      );

      loopRef.current = loop;

      // Start automatic infinite animation.
      loop.timeScale(0.05);
      loop.play(0);

      // Pause while the visitor interacts with the gallery.
      const pauseAnimation = () => {
        loop.pause();
      };

      const resumeAnimation = () => {
        loop.play();
      };

      gallery?.addEventListener("mouseenter", pauseAnimation);
      gallery?.addEventListener("mouseleave", resumeAnimation);
      gallery?.addEventListener("focusin", pauseAnimation);
      gallery?.addEventListener("focusout", resumeAnimation);

      return () => {
        gallery?.removeEventListener("mouseenter", pauseAnimation);
        gallery?.removeEventListener("mouseleave", resumeAnimation);
        gallery?.removeEventListener("focusin", pauseAnimation);
        gallery?.removeEventListener("focusout", resumeAnimation);

        loop.kill();
        loopRef.current = null;
      };
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden bg-[#071a32] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="gallery-viewport relative flex min-h-[720px] w-full flex-col items-center justify-center overflow-hidden py-20 md:min-h-[800px]">
        {/* Section heading */}
        <div className="absolute left-5 right-5 top-12 z-20 mx-auto max-w-3xl text-center md:top-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 md:text-sm">
            IOSC Forum 2026 · Research & Innovation
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Meet Our Speakers
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300 md:text-base">
            Discover the researchers and thought leaders
            shaping the future of ubiquitous computing,
            connected systems, and intelligent technologies.
          </p>
        </div>

        {/* Infinite speaker cards */}
        <ul
          className="gallery-cards absolute left-1/2 top-[55%] m-0 h-[350px] w-[260px] -translate-x-1/2 -translate-y-1/2 list-none p-0 sm:h-[400px] sm:w-[290px] md:h-[430px] md:w-[310px]"
          aria-label="Featured speakers"
        >
          {speakers.map((speaker, index) => {
            const speakerHref = `/speakers/${speaker.slug}/`;

            return (
              <li
                key={speaker.slug || speaker.name}
                className="gallery-card absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30"
              >
                <Link
                  href={speakerHref}
                  className="group absolute inset-0 block"
                  aria-label={`View speaker ${speaker.name}`}
                  draggable={false}
                >
                  {speaker.image ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${speaker.image}")`,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 via-blue-950 to-cyan-950">
                      <span className="text-7xl font-bold text-white/30">
                        {speaker.name?.charAt(0) || "S"}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/35 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="mb-3 inline-flex max-w-full rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cyan-200 backdrop-blur-md">
                      <span className="truncate">
                        {speaker.category || "Featured Speaker"}
                      </span>
                    </span>

                    <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                      {speaker.name}
                    </h3>

                    {speaker.role && (
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        {speaker.role}
                      </p>
                    )}

                    {speaker.company && (
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-300">
                        {speaker.company}
                      </p>
                    )}

                    <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3">
                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                        Speaker · {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-semibold text-cyan-300 transition-transform group-hover:translate-x-1">
                        View profile ↗
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Gallery hint — no navigation buttons */}
        <p className="absolute bottom-8 z-20 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
          Introducing our speakers · Automatic presentation
        </p>

        <div className="pointer-events-none absolute left-0 top-0 size-px opacity-0" />
      </div>
    </section>
  );
}

