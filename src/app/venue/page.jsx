
'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  MapPin,
  TrainFront,
  Accessibility,
  Users,
  ChevronDown,
  Building2,
  Coffee,
  Wifi,
  CalendarDays,
} from 'lucide-react';

const spaces = [
  {
    number: '01',
    name: 'Main Auditorium',
    capacity: 'Main stage',
    description: 'Opening keynote, invited talks and major forum sessions.',
    icon: Building2,
    size: 'lg:col-span-2',
  },
  {
    number: '02',
    name: 'Research Hall',
    capacity: 'Technical sessions',
    description: 'Presentations on intelligent ocean systems, IoT and marine engineering.',
    icon: Users,
    size: '',
  },
  {
    number: '03',
    name: 'Workshop Rooms',
    capacity: 'Hands-on sessions',
    description: 'Small-group discussions, demonstrations and collaborative research.',
    icon: CalendarDays,
    size: '',
  },
  {
    number: '04',
    name: 'Exhibition Space',
    capacity: 'Projects & innovation',
    description: 'Research posters, technology demonstrations and partner exhibits.',
    icon: Building2,
    size: '',
  },
  {
    number: '05',
    name: 'Networking Lounge',
    capacity: 'Meet and connect',
    description: 'An informal space to meet researchers, speakers and fellow attendees.',
    icon: Coffee,
    size: 'lg:col-span-2',
  },
];

const facilities = [
  {
    icon: Accessibility,
    title: 'Accessible facilities',
    description: 'Check step-free routes and accessibility arrangements with the venue.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi connectivity',
    description: 'Internet access information will be provided to registered attendees.',
  },
  {
    icon: Coffee,
    title: 'Refreshments',
    description: 'Details of coffee breaks, meals and networking arrangements will be announced.',
  },
  {
    icon: TrainFront,
    title: 'Travel information',
    description: 'Transport guidance and recommended routes will be added before the event.',
  },
];

const faqs = [
  {
    question: 'Where will IOSC Forum take place?',
    answer:
      'The confirmed venue name, street address and campus access instructions will be published here once finalized.',
  },
  {
    question: 'How can I get to the venue?',
    answer:
      'Travel directions, nearby public transport options and campus entry information will be shared with registered participants.',
  },
  {
    question: 'Will the venue be accessible?',
    answer:
      'Accessibility arrangements are being confirmed. Contact the organizing team before the event if you need specific assistance.',
  },
  {
    question: 'Are there places to stay nearby?',
    answer:
      'Accommodation suggestions and travel guidance can be provided once the venue and event dates are confirmed.',
  },
];

export default function VenuePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-[#071a32] text-white">
      {/* HERO */}
      <section className="relative px-5 pb-20 pt-36 sm:px-8 sm:pb-28 lg:px-12 lg:pt-44">
        <div className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              <MapPin size={15} />
              IOSC Forum · Venue
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Where ideas
              <br />
              meet the
              <br />
              <span className="text-cyan-300">ocean.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              A place for researchers, engineers and innovators to share ideas,
              explore intelligent ocean systems and build new collaborations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#spaces"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
              >
                Explore the venue <ArrowUpRight size={17} />
              </a>

              <a
                href="#location"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Location <MapPin size={16} />
              </a>
            </div>
          </div>

          {/* Venue image */}
          <div className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[480px]">
            <img
              src="/images/venue-main.jpg"
              alt="Venue for the IOSC Forum"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a32] via-transparent to-black/10" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                  The gathering place
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  IOSC Forum Venue
                </h2>
              </div>
              <span className="rounded-full border border-white/20 bg-black/30 p-3 backdrop-blur-md">
                <ArrowUpRight size={20} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
          {[
            { value: 'Main stage', label: 'Keynotes & invited talks' },
            { value: 'Research', label: 'Technical presentations' },
            { value: 'Workshops', label: 'Interactive sessions' },
            { value: 'Networking', label: 'Ideas and collaboration' },
          ].map((fact) => (
            <div key={fact.value} className="px-5 py-8 sm:px-7 sm:py-10">
              <p className="text-xl font-semibold text-cyan-200 sm:text-2xl">
                {fact.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/50">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPACES */}
      <section id="spaces" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Inside the venue
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Different spaces.
                <br />
                <span className="text-white/45">One community.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/55">
              From focused research presentations to informal conversations,
              the venue is designed to bring the ocean technology community together.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {spaces.map((space) => {
              const Icon = space.icon;

              return (
                <article
                  key={space.number}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b2440] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 sm:p-8 ${space.size}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-cyan-300">
                      {space.number}
                    </span>
                    <Icon
                      size={23}
                      className="text-white/45 transition group-hover:text-cyan-200"
                    />
                  </div>

                  <h3 className="mt-12 text-2xl font-semibold">
                    {space.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cyan-200">
                    {space.capacity}
                  </p>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
                    {space.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-white/10">
                    <div className="h-px w-0 bg-yellow-300 transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="border-y border-white/10 bg-[#0a2039] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Good to know
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Made for
              <br />
              <span className="text-white/45">your experience.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Practical information to help you plan your visit and enjoy
              your time at the forum.
            </p>
          </div>

          <div className="divide-y divide-white/10">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <div
                  key={facility.title}
                  className="flex gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 text-cyan-200">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{facility.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {facility.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Find us
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Plan your
              <br />
              <span className="text-cyan-300">journey.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
              Check this section before travelling for the confirmed venue
              address, transport routes and visitor access details.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-cyan-300" size={22} />
              <div>
                <h3 className="font-semibold">IOSC Forum venue</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Confirmed venue address to be announced.
                  <br />
                  Harbin, China
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs leading-5 text-white/40">
              Replace the location details when the venue has been officially confirmed.
            </p>
          </div>

          <div className="relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0b2440] p-8 text-center sm:min-h-[400px]">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(125,211,252,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.25)_1px,transparent_1px)] [background-size:36px_36px]" />

            <div className="relative grid h-16 w-16 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-cyan-200">
              <MapPin size={30} />
            </div>
            <h3 className="relative mt-5 text-xl font-semibold">
              Venue map
            </h3>
            <p className="relative mt-2 max-w-xs text-sm leading-6 text-white/50">
              An interactive map and directions can be added once the venue address is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#0a2039] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Venue FAQ
            </p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Before you
              <br />
              <span className="text-white/45">arrive.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55">
              Have another question? Contact the IOSC Forum organizing team
              for venue and travel updates.
            </p>
            <a
              href="mailto:ioscforum@example.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-yellow-300"
            >
              Contact the organizers <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="flex gap-4 sm:gap-6">
                    <span className="pt-0.5 text-xs text-cyan-300">
                      0{index + 1}
                    </span>
                    <span className="font-medium">{faq.question}</span>
                  </span>

                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-white/50 transition-transform ${
                      openFaq === index ? 'rotate-180 text-cyan-200' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === index
                      ? 'grid-rows-[1fr] pb-6 opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden pl-8 sm:pl-11">
                    <p className="text-sm leading-7 text-white/55">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Be part of the conversation
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              We look forward to welcoming you.
            </h2>
          </div>

          <a
            href="/#register"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            Join the forum <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
