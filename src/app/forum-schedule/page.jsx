
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Hotel,
  Utensils,
  Bus,
  ArrowUpRight,
  ClipboardList,
  Users,
  Info,
} from "lucide-react";

const eventDays = [
  {
    date: "11",
    month: "DEC",
    title: "Arrival & Welcome",
    description: "Hotel check-in and welcome dinner.",
  },
  {
    date: "12",
    month: "DEC",
    title: "Forum Activities",
    description: "Forum-related activities and dinner.",
  },
  {
    date: "13",
    month: "DEC",
    title: "Main Forum",
    description: "Main programme and distinguished talks.",
  },
];

const informationCards = [
  {
    icon: Utensils,
    title: "Meal Arrangements",
    description:
      "Dinner is scheduled for December 11 at 18:30 and December 12 at 19:00. Please confirm restaurant names, addresses, and any additional meal arrangements with the organizers.",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description:
      "Sofitel Hotel Wanda Harbin",
    detail:
      "No. 68, Ganshui Road, Xiangfang District, Harbin, China",
  },
  {
    icon: Bus,
    title: "Transportation",
    description:
      "Point-to-point shuttle service will be provided. Please follow the transportation instructions shared by the organizing committee.",
  },
];

export default function ForumSchedulePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06172b]">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-10 lg:px-14 lg:pb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-4 py-2 text-sm text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Harbin Engineering University
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            International Forum & Summit
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Forum Schedule
            <span className="block text-cyan-300">
              & Event Information
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Find essential information about the forum programme,
            distinguished talks, accommodation, meals, and transportation.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-[#06172b] transition hover:bg-white"
            >
              View schedule
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#travel"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-medium text-white transition hover:bg-white/10"
            >
              Travel information
              <MapPin size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Event summary */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-900/5 sm:grid-cols-3">
          <SummaryItem
            icon={CalendarDays}
            label="Event dates"
            value="11–13 December 2025"
          />
          <SummaryItem
            icon={Clock3}
            label="Main forum"
            value="13 December · 08:30–17:30"
          />
          <SummaryItem
            icon={MapPin}
            label="Host institution"
            value="Harbin Engineering University"
          />
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Plan your visit"
            title="Forum Schedule"
            description="An overview of the three-day event. Refer to the official programme for confirmed session times and locations."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {eventDays.map((day, index) => (
              <article
                key={day.date}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-[#06172b] text-white">
                    <span className="text-2xl font-semibold">
                      {day.date}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] text-cyan-300">
                      {day.month}
                    </span>
                  </div>

                  <span className="text-sm font-medium text-slate-400">
                    DAY 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-slate-900">
                  {day.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {day.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
                  <CalendarDays size={16} className="text-cyan-600" />
                  December {day.date}, 2025
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
            <Info size={20} className="mt-0.5 shrink-0" />
            <p>
              The detailed session timetable and the exact locations for
              individual activities should be confirmed against the official
              forum programme before publication.
            </p>
          </div>
        </div>
      </section>

      {/* Distinguished talks */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Knowledge & collaboration"
            title="Distinguished Talks"
            description="A dedicated space for keynote presentations, distinguished speakers, and research insights."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <Users size={23} />
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                Invited Speakers
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Discover the distinguished speakers, their institutional
                affiliations, presentation topics, and session times.
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
                Speaker details to be added
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                <ClipboardList size={23} />
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                Talk Programme
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organize each presentation with its title, speaker,
                start time, duration, and venue.
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
                Official talk schedule required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel and arrangements */}
      <section id="travel" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Visitor information"
            title="Plan Your Stay"
            description="Important practical information for guests attending the forum in Harbin."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {informationCards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-6 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06172b] text-cyan-300">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {item.detail && (
                    <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-800">
                      {item.detail}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration instructions */}
      <section className="bg-[#06172b] py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Before you arrive
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Registration & Check-in
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              According to the supplied event information, separate event
              check-in is not required. Guests should proceed directly to
              Sofitel Hotel Wanda Harbin for hotel check-in. Confirm any
              updated instructions with the organizers.
            </p>
          </div>

          <a
            href="#schedule"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-cyan-300 px-6 py-4 font-semibold text-[#06172b] transition hover:bg-white"
          >
            Review event information
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}

function SummaryItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4 bg-white p-5 sm:p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
        <Icon size={21} />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {label}
        </p>
        <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}
