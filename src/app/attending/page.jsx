import Link from 'next/link';
import {
  ArrowUpRight,
  Globe2,
  ClipboardList,
  Hotel,
  Info,
} from 'lucide-react';
import AttendingPageHeader from '@/components/AttendingPageHeader';

const pages = [
  {
    number: '01',
    title: 'Visa Information',
    description:
      'Prepare for international travel to China and check the entry requirements that apply to your nationality.',
    href: '/attending/visa-information',
    icon: Globe2,
  },
  {
    number: '02',
    title: 'Registration',
    description:
      'Find information about registration procedures, participation requirements, fees, and deadlines when announced.',
    href: '/attending/registration',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Accommodation & Travel',
    description:
      'Review accommodation information and plan your journey to Harbin Engineering University.',
    href: '/attending/accommodation-travel',
    icon: Hotel,
  },
];

export default function AttendingPage() {
  return (
    <>
      <AttendingPageHeader
        title="Attending"
        description="Plan your participation in the IOSC Forum at Harbin Engineering University. Explore essential information for registration, international travel, accommodation, and your visit to Harbin."
      />

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
                Welcome to HEU
              </p>

              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Everything you need to prepare for your visit
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                This section brings together practical information for forum
                participants, invited speakers, and international guests.
                Please check this website for confirmed event arrangements
                before making travel or payment plans.
              </p>

              <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <Info
                  size={20}
                  className="mt-0.5 shrink-0 text-amber-700"
                />
                <p className="text-sm leading-6 text-amber-900">
                  Event dates, registration details, hotel arrangements, and
                  transportation information should be confirmed by the
                  organizers before you make bookings.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#071a32] p-7 text-white sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Event information
              </p>

              <div className="mt-7 space-y-6">
                <div>
                  <p className="text-sm text-white/50">Host institution</p>
                  <p className="mt-1 text-lg font-medium">
                    Harbin Engineering University
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-sm text-white/50">Event dates</p>
                  <p className="mt-1 text-lg font-medium">
                    To be confirmed
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="text-sm text-white/50">Location</p>
                  <p className="mt-1 text-lg font-medium">Harbin, China</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
                Plan your visit
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Attendee information
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {pages.map((page) => {
                const Icon = page.icon;

                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-400">
                        {page.number}
                      </span>

                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-50 text-cyan-800 transition group-hover:bg-[#071a32] group-hover:text-cyan-200">
                        <Icon size={23} />
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold text-slate-900">
                      {page.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {page.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800">
                      Explore information
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}