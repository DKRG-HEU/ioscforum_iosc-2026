import { ArrowUpRight } from "lucide-react";

const speakers = [
  {
    name: "Invited Speaker",
    role: "Keynote speaker",
    organisation: "Speaker details to be announced",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Research Leader",
    role: "Featured speaker",
    organisation: "Speaker details to be announced",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Academic Expert",
    role: "Panel contributor",
    organisation: "Speaker details to be announced",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">People who move ideas forward</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Meet the voices.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600">Speaker profiles are placeholders until the official list is confirmed.</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <article key={speaker.name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/4.2] overflow-hidden bg-slate-100">
                <img
                  src={speaker.image}
                  alt="Placeholder portrait for speaker profile"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-slate-950/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                  Speaker 0{index + 1}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-800">{speaker.role}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">{speaker.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{speaker.organisation}</p>
                <a href="#programme" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-cyan-800">
                  View programme <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
