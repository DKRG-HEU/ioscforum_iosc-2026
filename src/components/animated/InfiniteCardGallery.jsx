
"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Draggable } from "gsap/Draggable"

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable)

const cards = [
  {
    title: "Internet of Things",
    category: "Connected Systems",
    image: "https://assets.codepen.io/16327/portrait-number-01.png",
  },
  {
    title: "Ubiquitous Computing",
    category: "Human-Centred Technology",
    image: "https://assets.codepen.io/16327/portrait-number-02.png",
  },
  {
    title: "Smart Environments",
    category: "Intelligent Spaces",
    image: "https://assets.codepen.io/16327/portrait-number-03.png",
  },
  {
    title: "Artificial Intelligence",
    category: "Intelligent Systems",
    image: "https://assets.codepen.io/16327/portrait-number-04.png",
  },
  {
    title: "Human–Computer Interaction",
    category: "Interactive Computing",
    image: "https://assets.codepen.io/16327/portrait-number-05.png",
  },
  {
    title: "Future Technologies",
    category: "Research & Innovation",
    image: "https://assets.codepen.io/16327/portrait-number-06.png",
  },
  {
    title: "Digital Innovation",
    category: "Emerging Research",
    image: "https://assets.codepen.io/16327/portrait-number-07.png",
  },
]

const spacing = 0.1

function buildSeamlessLoop(items, spacing, animateFunc) {
  const overlap = Math.ceil(1 / spacing)
  const startTime = items.length * spacing + 0.5
  const loopTime = (items.length + overlap) * spacing + 1

  const rawSequence = gsap.timeline({ paused: true })

  const seamlessLoop = gsap.timeline({
    paused: true,
    repeat: -1,
  })

  const length = items.length + overlap * 2

  for (let i = 0; i < length; i++) {
    const index = i % items.length
    const time = i * spacing

    rawSequence.add(animateFunc(items[index]), time)

    if (i <= items.length) {
      seamlessLoop.addLabel(`label${i}`, time)
    }
  }

  rawSequence.time(startTime)

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
    )

  return seamlessLoop
}

export default function InfiniteCardGallery() {
  const container = useRef(null)

  useGSAP(
    () => {
      const root = container.current
      if (!root) return

      const list = root.querySelector(".gallery-cards")
      const gallery = root.querySelector(".gallery-viewport")
      const nextButton = root.querySelector(".gallery-next")
      const prevButton = root.querySelector(".gallery-prev")
      const proxy = root.querySelector(".drag-proxy")

      const items = gsap.utils.toArray(
        ".gallery-card",
        root
      )

      if (!items.length) return

      let iteration = 0

      gsap.set(items, {
        xPercent: 400,
        opacity: 0,
        scale: 0,
      })

      const animateCard = (element) => {
        const timeline = gsap.timeline()

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
          )

        return timeline
      }

      const loop = buildSeamlessLoop(
        items,
        spacing,
        animateCard
      )

      const playhead = { offset: 0 }

      const wrapTime = gsap.utils.wrap(
        0,
        loop.duration()
      )

      const scrub = gsap.to(playhead, {
        offset: 0,
        duration: 0.5,
        ease: "power3",
        paused: true,
        onUpdate() {
          loop.time(wrapTime(playhead.offset))
        },
      })

      const trigger = ScrollTrigger.create({
        trigger: gallery,
        start: "top top",
        end: "+=3000",
        pin: gallery,
        invalidateOnRefresh: true,

        onUpdate(self) {
          const scroll = self.scroll()

          if (scroll > self.end - 1) {
            wrap(1, 2)
          } else if (
            scroll < 1 &&
            self.direction < 0
          ) {
            wrap(-1, self.end - 2)
          } else {
            scrub.vars.offset =
              (iteration + self.progress) *
              loop.duration()

            scrub.invalidate().restart()
          }
        },
      })

      const snapTime = gsap.utils.snap(spacing)

      const progressToScroll = (progress) =>
        gsap.utils.clamp(
          1,
          trigger.end - 1,
          gsap.utils.wrap(0, 1, progress) *
            trigger.end
        )

      function wrap(delta, scrollTo) {
        iteration += delta
        trigger.scroll(scrollTo)
        trigger.update()
      }

      function scrollToOffset(offset) {
        const snappedTime = snapTime(offset)

        const progress =
          (snappedTime - loop.duration() * iteration) /
          loop.duration()

        const scroll = progressToScroll(progress)

        if (progress >= 1 || progress < 0) {
          wrap(Math.floor(progress), scroll)
          return
        }

        trigger.scroll(scroll)
      }

      const handleScrollEnd = () => {
        scrollToOffset(scrub.vars.offset)
      }

      ScrollTrigger.addEventListener(
        "scrollEnd",
        handleScrollEnd
      )

      const handleNext = () => {
        scrollToOffset(
          scrub.vars.offset + spacing
        )
      }

      const handlePrev = () => {
        scrollToOffset(
          scrub.vars.offset - spacing
        )
      }

      nextButton?.addEventListener(
        "click",
        handleNext
      )

      prevButton?.addEventListener(
        "click",
        handlePrev
      )

      const draggableInstances = Draggable.create(
        proxy,
        {
          type: "x",
          trigger: list,

          onPress() {
            this.startOffset = scrub.vars.offset
          },

          onDrag() {
            scrub.vars.offset =
              this.startOffset +
              (this.startX - this.x) * 0.001

            scrub.invalidate().restart()
          },

          onDragEnd() {
            scrollToOffset(scrub.vars.offset)
          },
        }
      )

      return () => {
        ScrollTrigger.removeEventListener(
          "scrollEnd",
          handleScrollEnd
        )

        nextButton?.removeEventListener(
          "click",
          handleNext
        )

        prevButton?.removeEventListener(
          "click",
          handlePrev
        )

        draggableInstances.forEach((instance) =>
          instance.kill()
        )
      }
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="relative bg-white text-slate-900"
    >
      <div className="gallery-viewport relative flex h-screen min-h-[650px] w-full flex-col items-center justify-center overflow-hidden">
        {/* Section heading */}
        <div className="absolute left-6 right-6 top-12 z-20 mx-auto max-w-3xl text-center md:top-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 md:text-sm">
            IOSC Forum · Research & Innovation
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Explore Research Themes
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
            Discover ideas, technologies, and research
            shaping the future of connected computing.
          </p>
        </div>

        {/* Infinite cards */}
        <ul className="gallery-cards absolute left-1/2 top-[54%] m-0 h-[350px] w-64 -translate-x-1/2 -translate-y-1/2 list-none p-0 sm:h-[390px] sm:w-72">
          {cards.map((card, index) => (
            <li
              key={card.title}
              className="gallery-card absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${card.image}")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                <span className="mb-3 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur-md">
                  {card.category}
                </span>

                <h3 className="text-2xl font-semibold leading-tight">
                  {card.title}
                </h3>

                <p className="mt-3 text-xs font-medium tracking-widest text-white/70">
                  RESEARCH THEME · {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Navigation */}
        <div className="absolute bottom-8 z-20 flex items-center gap-3">
          <button
            type="button"
            className="gallery-prev rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-cyan-700 hover:text-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
          >
            ← Prev
          </button>

          <button
            type="button"
            className="gallery-next rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
          >
            Next →
          </button>
        </div>

        <p className="absolute bottom-2 text-[10px] uppercase tracking-widest text-slate-400">
          Scroll or drag to explore
        </p>

        <div className="drag-proxy invisible pointer-events-none absolute left-0 top-0 size-1" />
      </div>
    </section>
  )
}
