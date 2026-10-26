import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mic2,
} from 'lucide-react';

import speakers from '@/app/data/speakers';

export function generateStaticParams() {
  return speakers.map((speaker) => ({
    slug: speaker.slug,
  }));
}

export default async function SpeakerDetailPage({ params }) {
  const { slug } = await params;
  const speaker = speakers.find((item) => item.slug === slug);

  if (!speaker) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f8fc] text-[#071b32]">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-[#06172b] text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24">
          <Link
            href="/speakers/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-300"
          >
            <ArrowLeft size={17} />
            Back to all speakers
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Talk information */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                <Mic2 size={15} />
                {speaker.category || 'Featured Speaker'}
              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                IOSC Forum 2026
                {speaker.talkNumber &&
                speaker.talkNumber !== 'To be announced'
                  ? ` · ${speaker.talkNumber}`
                  : ''}
              </p>

              <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {speaker.talkTitle || 'Talk title to be announced'}
              </h1>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  {speaker.name}
                </h2>

                <p className="mt-2 text-base text-slate-300 sm:text-lg">
                  {speaker.role ? `${speaker.role} · ` : ''}
                  {speaker.company}
                </p>
              </div>

              {/* Schedule cards */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Talk time
                    </p>
                    <p className="mt-1 font-semibold">
                      {speaker.startTime && speaker.endTime
                        ? `${speaker.startTime} – ${speaker.endTime}`
                        : speaker.time || 'To be announced'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300">
                    <CalendarDays size={21} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Session date
                    </p>
                    <p className="mt-1 font-semibold">
                      {speaker.day || 'To be announced'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker portrait */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] border border-cyan-300/20" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-800 shadow-2xl shadow-black/30">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06172b] via-[#06172b]/65 to-transparent p-6 pt-24">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Featured speaker
                  </p>
                  <p className="mt-2 text-xl font-semibold">
                    {speaker.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {speaker.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography and abstract */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          {/* Biography */}
          <article className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-cyan-50 p-3 text-cyan-700">
                <Mic2 size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Speaker profile
                </p>
                <h2 className="mt-1 text-2xl font-bold">
                  Biography
                </h2>
              </div>
            </div>

            <p className="leading-8 text-slate-600">
              {speaker.introduction ||
                'Speaker biography will be announced soon.'}
            </p>

            {speaker.href && (
              <a
                href={speaker.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-700 transition hover:text-cyan-900"
              >
                Official profile
                <ArrowUpRight size={17} />
              </a>
            )}

            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Affiliation
              </p>
              <p className="mt-2 font-medium leading-7 text-[#071b32]">
                {speaker.company || 'To be announced'}
              </p>
            </div>
          </article>

          {/* Abstract */}
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Talk overview
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Talk Abstract
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-cyan-500" />
            </div>

            <h3 className="mb-6 text-xl font-semibold leading-relaxed text-[#071b32] sm:text-2xl">
              {speaker.talkTitle || 'Talk title to be announced'}
            </h3>

            <p className="whitespace-pre-line text-base leading-8 text-slate-600">
              {speaker.abstract || 'Talk abstract to be announced.'}
            </p>

            <div className="mt-9 rounded-2xl bg-[#f1f8fc] p-5 sm:p-6">
              <p className="font-semibold text-[#071b32]">
                IOSC Forum 2026
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Please check the official forum programme for confirmed
                session times and venue information.
              </p>
            </div>
          </article>
        </div>

        {/* Return to speakers */}
        <div className="mt-12 text-center">
          <Link
            href="/speakers/"
            className="inline-flex items-center gap-2 rounded-full bg-[#071b32] px-7 py-3.5 font-semibold text-white transition hover:bg-cyan-800"
          >
            <ArrowLeft size={17} />
            Explore all speakers
          </Link>
        </div>
      </section>
    </main>
  );
}