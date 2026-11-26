import SpeakerCard from '@/components/SpeakerCard';
import speakers from '@/app/data/speakers';

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-[#071a32] px-5 pb-24 pt-32 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        {/* <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            IOSC Forum 2026
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Speakers
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Meet researchers and experts advancing the fields of IoT,
            ubiquitous computing, intelligent sensing, and networked systems.
            Explore each speaker’s profile, biography, and talk details.
          </p>
        </div> */}
        {/* Page heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            The 2nd IOSC Forum · 2026
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Invited Speakers
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Meet distinguished researchers, academics, and industry
            experts from around the world. Explore their profiles,
            research contributions, biographies, and presentations
            in intelligent ocean sensing and computing.
          </p>
        </div>

        {/* Speaker count */}
        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
          <p className="text-sm text-slate-300">
            Explore our invited speakers
          </p>

          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-200">
            {speakers.length} Speakers
          </span>
        </div>

        {/* Speaker cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.slug} {...speaker} />
          ))}
        </div>

        {/* Schedule notice */}
        <p className="mt-12 text-center text-sm text-slate-400">
          Join us on November 28–29, 2026, for insightful speaker
          presentations and engaging academic discussions.
        </p>
      </div>
    </main>
  );
}
