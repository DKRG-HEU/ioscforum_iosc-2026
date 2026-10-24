import { ArrowUpRight, Cpu, Waves, RadioTower } from "lucide-react";

const themes = [
  {
    number: "01",
    icon: Cpu,
    title: "Emerging technologies",
    text: "Explore new ideas, methods, and technologies shaping research and industry.",
    tag: "Innovation",
  },
  {
    number: "02",
    icon: Waves,
    title: "Ocean and engineering",
    text: "Connect engineering perspectives with challenges across marine and ocean systems.",
    tag: "Engineering",
  },
  {
    number: "03",
    icon: RadioTower,
    title: "Intelligent connected systems",
    text: "Discuss connected devices, data-driven systems, and interdisciplinary applications.",
    tag: "Digital futures",
  },
];

export default function Themes() {
  return (
    <section id="themes" className="bg-[#f3f7fa] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">Explore the conversation</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Ideas across disciplines.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Illustrative themes for the initial design. Replace these with the
            forum&apos;s officially approved topics.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {themes.map(({ number, icon: Icon, title, text, tag }) => (
            <article key={number} className="group flex min-h-[300px] flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">{number} / THEME</span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cyan-50 text-cyan-800 transition group-hover:bg-cyan-300">
                  <Icon size={21} />
                </span>
              </div>
              <span className="mt-8 w-fit rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">{tag}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-slate-950">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{text}</p>
              <a href="#programme" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-cyan-800">
                Explore topic <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
