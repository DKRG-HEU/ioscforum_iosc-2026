
import SpeakerCard from '@/components/SpeakerCard';

const speakers = [
  {
    name: 'Theo Park',
    category: 'Design',
    company: 'Paperplane',
    role: 'Design Engineer',
    day: 'Day 2',
    time: '14:00',
    talkTitle: 'Motion that explains itself',
    introduction:
      'Explore how thoughtful motion design makes digital products easier to understand, navigate and use.',
    image: '/images/theo-park.jpg',
    href: '/speakers/theo-park',
  },
  {
    name: 'Nia Mensah',
    category: 'Product',
    company: 'Harbor',
    role: 'Chief Product Officer',
    day: 'Day 3',
    time: '09:30',
    talkTitle: 'Killing features people love',
    introduction:
      'Discover how product teams make difficult decisions, challenge assumptions and build better products.',
    image: '/images/nia-mensah.jpg',
    href: '/speakers/nia-mensah',
  },
];

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-[#071a32] px-5 pb-24 pt-32 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            IOSC Forum · Our speakers
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            People with
            <br />
            <span className="text-cyan-300">ideas worth sharing.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Meet the people behind the ideas. Explore their talks,
            perspectives and work.
          </p>
        </div>

        {/* Category filters — visual design */}
        <div className="mt-12 flex flex-wrap gap-3 border-b border-white/10 pb-6">
          {['All speakers', 'AI & IoT', 'Engineering', 'Quantum Computing', 'Design'].map(
            (category, index) => (
              <span
                key={category}
                className={`rounded-full border px-4 py-2 text-sm ${
                  index === 0
                    ? 'border-cyan-300 bg-cyan-300 text-slate-950'
                    : 'border-white/15 text-white/70'
                }`}
              >
                {category}
              </span>
            ),
          )}
        </div>

        {/* Speaker grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </main>
  );
}
