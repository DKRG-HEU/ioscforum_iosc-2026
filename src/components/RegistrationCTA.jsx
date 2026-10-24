import { ArrowUpRight, Mail } from "lucide-react";

export default function RegistrationCTA() {
  return (
    <section id="register" className="bg-cyan-300 py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-800/65">Be part of the conversation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
            Great ideas start when people meet.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-800/75">
            Registration information will be published after the event details are confirmed.
          </p>
        </div>
        <a href="mailto:forum@example.edu.cn" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
          <Mail size={17} /> Contact the organisers <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
