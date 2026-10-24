import { ArrowUpRight, Clock3 } from "lucide-react";

const sessions = [
  { time: "09:00", type: "Opening", title: "Welcome and opening remarks", detail: "Introduction to the forum and its objectives." },
  { time: "10:00", type: "Keynote", title: "Keynote presentations", detail: "Invited talks and perspectives from the research community." },
  { time: "13:30", type: "Discussion", title: "Research exchange and panel discussion", detail: "Shared challenges, questions, and opportunities for collaboration." },
];

export default function Programme() {
  return (
    <section id="programme" className="bg-[#071a32] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Plan your visit</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">A day of ideas and exchange.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300/75">
              This is a sample programme layout to demonstrate the design.
              Session times and titles must be replaced with the confirmed agenda.
            </p>
            <a href="#register" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold transition hover:border-cyan-300 hover:bg-white/5">
              Participation details <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="border-t border-white/15">
            {sessions.map((session, index) => (
              <article key={session.time} className="grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[95px_1fr] sm:gap-7 sm:py-7">
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300 sm:block">
                  <Clock3 size={16} className="sm:mb-2" />
                  {session.time}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">{session.type} · 0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">{session.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300/70">{session.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
