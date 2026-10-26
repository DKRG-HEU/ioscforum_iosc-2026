
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Mic2,
  Presentation,
  MessagesSquare,
} from "lucide-react";

const sessions = [
  {
    number: "01",
    category: "WELCOME",
    title: "Opening Session",
    description:
      "Welcome remarks and an introduction to the forum.",
    icon: CalendarDays,
  },
  {
    number: "02",
    category: "KEYNOTE",
    title: "Keynote Talks",
    description:
      "Research perspectives on intelligent ocean sensing and computing.",
    icon: Mic2,
  },
  {
    number: "03",
    category: "RESEARCH",
    title: "Research Presentations",
    description:
      "Scientific contributions and emerging technological ideas.",
    icon: Presentation,
  },
  {
    number: "04",
    category: "DISCUSSION",
    title: "Discussion & Closing",
    description:
      "Exchange ideas and reflect on future research directions.",
    icon: MessagesSquare,
  },
];

export default function ConferenceProgramme() {
  return (
    <section
      id="programme"
      className="relative overflow-hidden bg-[#06172b] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              IOSC Forum 2026
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Conference{" "}
              <span className="text-cyan-300">Programme</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore the programme highlights bringing together
              research, ideas, and innovation in intelligent ocean
              sensing and computing.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.08] px-4 py-2 text-xs text-amber-200">
            <CalendarDays size={15} />
            Detailed schedule to be announced
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {sessions.map((session) => {
            const Icon = session.icon;

            return (
              <article
                key={session.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.06] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-[#06172b]">
                    <Icon size={23} />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-slate-500">
                    {session.number}
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-cyan-300">
                  {session.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                  {session.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {session.description}
                </p>

                <p className="mt-5 text-xs text-slate-500">
                  Timing and details to be confirmed
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            The official programme will be updated as session
            information becomes available.
          </p>

          <Link
            href="/speakers/"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#06172b] transition hover:bg-cyan-200"
          >
            Explore Speakers
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
