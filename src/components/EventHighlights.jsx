import { Globe2, Lightbulb, Network, Users } from "lucide-react";

const items = [
  { icon: Globe2, title: "Global perspectives", text: "Bring different research communities into one conversation." },
  { icon: Lightbulb, title: "Ideas to explore", text: "Discuss emerging technologies and research challenges." },
  { icon: Network, title: "New connections", text: "Create opportunities for cross-disciplinary collaboration." },
  { icon: Users, title: "Academic community", text: "Connect students, scholars, and invited experts." },
];

export default function EventHighlights() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">A forum for what&apos;s next</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Where curiosity becomes collaboration.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              The forum is designed as a space for knowledge exchange, fresh
              perspectives, and meaningful academic connections. Together,
              participants can explore ideas and build collaborations across
              disciplines and communities.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {items.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-t border-slate-200 pt-5">
                  <Icon size={22} className="text-cyan-700" strokeWidth={1.7} />
                  <h3 className="mt-4 text-base font-semibold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
