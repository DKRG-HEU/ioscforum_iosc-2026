
// import Link from "next/link";
// import {
//   CalendarDays,
//   Clock3,
//   MapPin,
//   Hotel,
//   Utensils,
//   Bus,
//   ArrowUpRight,
//   ClipboardList,
//   Users,
//   Info,
// } from "lucide-react";

// const eventDays = [
//   {
//     date: "11",
//     month: "DEC",
//     title: "Arrival & Welcome",
//     description: "Hotel check-in and welcome dinner.",
//   },
//   {
//     date: "12",
//     month: "DEC",
//     title: "Forum Activities",
//     description: "Forum-related activities and dinner.",
//   },
//   {
//     date: "13",
//     month: "DEC",
//     title: "Main Forum",
//     description: "Main programme and distinguished talks.",
//   },
// ];

// const informationCards = [
//   {
//     icon: Utensils,
//     title: "Meal Arrangements",
//     description:
//       "Dinner is scheduled for December 11 at 18:30 and December 12 at 19:00. Please confirm restaurant names, addresses, and any additional meal arrangements with the organizers.",
//   },
//   {
//     icon: Hotel,
//     title: "Accommodation",
//     description:
//       "Sofitel Hotel Wanda Harbin",
//     detail:
//       "No. 68, Ganshui Road, Xiangfang District, Harbin, China",
//   },
//   {
//     icon: Bus,
//     title: "Transportation",
//     description:
//       "Point-to-point shuttle service will be provided. Please follow the transportation instructions shared by the organizing committee.",
//   },
// ];

// export default function ForumSchedulePage() {
//   return (
//     <main className="min-h-screen bg-white text-slate-900">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-[#06172b]">
//         <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
//         <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-10 lg:px-14 lg:pb-24">
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-4 py-2 text-sm text-cyan-200">
//             <span className="h-2 w-2 rounded-full bg-cyan-300" />
//             Harbin Engineering University
//           </div>

//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
//             International Forum & Summit
//           </p>

//           <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
//             Forum Schedule
//             <span className="block text-cyan-300">
//               & Event Information
//             </span>
//           </h1>

//           <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
//             Find essential information about the forum programme,
//             distinguished talks, accommodation, meals, and transportation.
//           </p>

//           <div className="mt-9 flex flex-wrap gap-4">
//             <a
//               href="#schedule"
//               className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-[#06172b] transition hover:bg-white"
//             >
//               View schedule
//               <ArrowUpRight size={18} />
//             </a>

//             <a
//               href="#travel"
//               className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-medium text-white transition hover:bg-white/10"
//             >
//               Travel information
//               <MapPin size={18} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Event summary */}
//       <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-6 sm:px-10 lg:px-14">
//         <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-900/5 sm:grid-cols-3">
//           <SummaryItem
//             icon={CalendarDays}
//             label="Event dates"
//             value="11–13 December 2025"
//           />
//           <SummaryItem
//             icon={Clock3}
//             label="Main forum"
//             value="13 December · 08:30–17:30"
//           />
//           <SummaryItem
//             icon={MapPin}
//             label="Host institution"
//             value="Harbin Engineering University"
//           />
//         </div>
//       </section>

//       {/* Schedule */}
//       <section id="schedule" className="scroll-mt-24 py-20 sm:py-28">
//         <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
//           <SectionHeading
//             eyebrow="Plan your visit"
//             title="Forum Schedule"
//             description="An overview of the three-day event. Refer to the official programme for confirmed session times and locations."
//           />

//           <div className="mt-12 grid gap-5 md:grid-cols-3">
//             {eventDays.map((day, index) => (
//               <article
//                 key={day.date}
//                 className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-900/5"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-[#06172b] text-white">
//                     <span className="text-2xl font-semibold">
//                       {day.date}
//                     </span>
//                     <span className="text-[10px] tracking-[0.2em] text-cyan-300">
//                       {day.month}
//                     </span>
//                   </div>

//                   <span className="text-sm font-medium text-slate-400">
//                     DAY 0{index + 1}
//                   </span>
//                 </div>

//                 <h3 className="mt-7 text-xl font-semibold text-slate-900">
//                   {day.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-7 text-slate-600">
//                   {day.description}
//                 </p>

//                 <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">
//                   <CalendarDays size={16} className="text-cyan-600" />
//                   December {day.date}, 2025
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="mt-8 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
//             <Info size={20} className="mt-0.5 shrink-0" />
//             <p>
//               The detailed session timetable and the exact locations for
//               individual activities should be confirmed against the official
//               forum programme before publication.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Distinguished talks */}
//       <section className="bg-slate-50 py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
//           <SectionHeading
//             eyebrow="Knowledge & collaboration"
//             title="Distinguished Talks"
//             description="A dedicated space for keynote presentations, distinguished speakers, and research insights."
//           />

//           <div className="mt-10 grid gap-5 md:grid-cols-2">
//             <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
//                 <Users size={23} />
//               </div>
//               <h3 className="mt-5 text-xl font-semibold">
//                 Invited Speakers
//               </h3>
//               <p className="mt-3 text-sm leading-7 text-slate-600">
//                 Discover the distinguished speakers, their institutional
//                 affiliations, presentation topics, and session times.
//               </p>
//               <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
//                 Speaker details to be added
//               </p>
//             </div>

//             <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
//                 <ClipboardList size={23} />
//               </div>
//               <h3 className="mt-5 text-xl font-semibold">
//                 Talk Programme
//               </h3>
//               <p className="mt-3 text-sm leading-7 text-slate-600">
//                 Organize each presentation with its title, speaker,
//                 start time, duration, and venue.
//               </p>
//               <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
//                 Official talk schedule required
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Travel and arrangements */}
//       <section id="travel" className="scroll-mt-24 py-20 sm:py-28">
//         <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
//           <SectionHeading
//             eyebrow="Visitor information"
//             title="Plan Your Stay"
//             description="Important practical information for guests attending the forum in Harbin."
//           />

//           <div className="mt-12 grid gap-5 lg:grid-cols-3">
//             {informationCards.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <article
//                   key={item.title}
//                   className="rounded-2xl border border-slate-200 p-6 sm:p-7"
//                 >
//                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06172b] text-cyan-300">
//                     <Icon size={23} />
//                   </div>

//                   <h3 className="mt-6 text-xl font-semibold">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-7 text-slate-600">
//                     {item.description}
//                   </p>

//                   {item.detail && (
//                     <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-800">
//                       {item.detail}
//                     </p>
//                   )}
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Registration instructions */}
//       <section className="bg-[#06172b] py-16 sm:py-20">
//         <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">
//           <div className="max-w-2xl">
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Before you arrive
//             </p>
//             <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
//               Registration & Check-in
//             </h2>
//             <p className="mt-4 text-base leading-7 text-slate-300">
//               According to the supplied event information, separate event
//               check-in is not required. Guests should proceed directly to
//               Sofitel Hotel Wanda Harbin for hotel check-in. Confirm any
//               updated instructions with the organizers.
//             </p>
//           </div>

//           <a
//             href="#schedule"
//             className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-cyan-300 px-6 py-4 font-semibold text-[#06172b] transition hover:bg-white"
//           >
//             Review event information
//             <ArrowUpRight size={19} />
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

// function SummaryItem({ icon: Icon, label, value }) {
//   return (
//     <div className="flex items-start gap-4 bg-white p-5 sm:p-6">
//       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
//         <Icon size={21} />
//       </div>
//       <div>
//         <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
//           {label}
//         </p>
//         <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
//           {value}
//         </p>
//       </div>
//     </div>
//   );
// }

// function SectionHeading({ eyebrow, title, description }) {
//   return (
//     <div className="max-w-3xl">
//       <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
//         {eyebrow}
//       </p>
//       <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
//         {title}
//       </h2>
//       <p className="mt-5 text-base leading-8 text-slate-600">
//         {description}
//       </p>
//     </div>
//   );
// }


import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Hotel,
  Utensils,
  Bus,
  ClipboardList,
  Users,
  Info,
} from "lucide-react";

import {
  forumDetails,
  eventDays,
  mealArrangements,
  accommodation,
  transportation,
  informationCards,
  summaryItems,
  campusBackgrounds,
} from "@/app/data/forumSchedule";

export const metadata = {
  title: "Forum Schedule",
  description:
    "Forum schedule, accommodation, meals, and transportation information for IOSC Forum 2026.",
};

export default function ForumSchedulePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Hero */}
      <BackgroundSection image={campusBackgrounds.hero}>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-10 lg:px-14 lg:pb-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {forumDetails.institution}
          </span>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            International Forum & Summit
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {forumDetails.title}
            <span className="mt-2 block text-cyan-300">
              {forumDetails.subtitle}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Essential information for your visit, including the forum
            timetable, dining arrangements, hotel accommodation, and
            transportation in Harbin.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-white"
            >
              View schedule <ArrowUpRight size={18} />
            </a>

            <a
              href="#travel"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-medium text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Travel information <MapPin size={18} />
            </a>
          </div>
        </div>
      </BackgroundSection>

      {/* Summary */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid gap-4 md:grid-cols-3">
          {summaryItems.map((item) => (
            <GlassCard key={item.label} className="flex gap-4 p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/15 text-cyan-200">
                <item.icon size={22} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-300">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white">
                  {item.value}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Schedule with campus background 2 */}
      <BackgroundSection
        id="schedule"
        image={campusBackgrounds.schedule}
        className="mt-10"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
          <SectionHeading
            eyebrow="Plan your visit"
            title="Forum Schedule"
            description="An overview of the three-day event and its main activities."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {eventDays.map((day, index) => (
              <GlassCard
                key={day.date}
                className="group p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/15"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-cyan-300 text-slate-950">
                    <span className="text-2xl font-bold">{day.date}</span>
                    <span className="text-[10px] tracking-[0.2em]">
                      {day.month}
                    </span>
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-cyan-200">
                    DAY 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {day.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-200">
                  {day.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-white/15 pt-5 text-sm text-slate-300">
                  <CalendarDays size={16} className="text-cyan-300" />
                  {day.fullDate}
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-8 flex gap-3 rounded-2xl border border-amber-200/30 bg-amber-950/30 p-5 text-sm leading-7 text-amber-100 backdrop-blur-xl">
            <Info size={20} className="mt-1 shrink-0" />
            <p>
              Please confirm the detailed session timetable and individual
              activity locations with the organizing committee.
            </p>
          </div>
        </div>
      </BackgroundSection>

      {/* Distinguished talks with campus background 3 */}
      <BackgroundSection image={campusBackgrounds.talks}>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
          <SectionHeading
            eyebrow="Knowledge & collaboration"
            title="Distinguished Talks"
            description="Explore the invited speakers, research presentations, and programme information."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <GlassCard className="p-7 sm:p-9">
              <IconBox>
                <Users size={23} />
              </IconBox>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Invited Speakers
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-200">
                Discover distinguished speakers, their institutional
                affiliations, presentation topics, and session times.
              </p>

              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-cyan-200">
                Speaker details to be announced
              </p>
            </GlassCard>

            <GlassCard className="p-7 sm:p-9">
              <IconBox>
                <ClipboardList size={23} />
              </IconBox>

              <h3 className="mt-5 text-xl font-semibold text-white">
                Talk Programme
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-200">
                Consult the confirmed programme for presentation titles,
                speakers, start times, durations, and venues.
              </p>

              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-cyan-200">
                Detailed timetable to be confirmed
              </p>
            </GlassCard>
          </div>
        </div>
      </BackgroundSection>

      {/* Meals */}
      <BackgroundSection image={campusBackgrounds.schedule}>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
          <SectionHeading
            eyebrow="Dining arrangements"
            title="Meals & Restaurants"
            description="Review the scheduled dinners and restaurant details supplied by the organizers."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {mealArrangements.map((meal) => (
              <GlassCard key={meal.date} className="p-6 sm:p-7">
                <IconBox>
                  <Utensils size={23} />
                </IconBox>

                <p className="mt-5 text-sm font-medium text-cyan-200">
                  {meal.date}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-200">
                  <Clock3 size={16} className="text-cyan-300" />
                  {meal.time}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {meal.restaurant}
                </h3>

                <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-200">
                  <MapPin size={17} className="mt-1 shrink-0 text-cyan-300" />
                  {meal.venue}
                </p>

                {meal.note && (
                  <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-6 text-slate-300">
                    {meal.note}
                  </p>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </BackgroundSection>

      {/* Accommodation and transportation */}
      <BackgroundSection id="travel" image={campusBackgrounds.travel}>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
          <SectionHeading
            eyebrow="Visitor information"
            title="Plan Your Stay"
            description="Important practical arrangements for visitors attending the forum in Harbin."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {informationCards.map((item) => (
              <GlassCard key={item.title} className="p-6 sm:p-7">
                <IconBox>
                  <item.icon size={23} />
                </IconBox>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-200">
                  {item.description}
                </p>

                {item.detail && (
                  <p className="mt-4 border-t border-white/15 pt-4 text-sm leading-6 text-cyan-100">
                    {item.detail}
                  </p>
                )}
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-6 flex items-start gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
              <Bus size={23} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Shuttle Service
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                {transportation.description} Please check pickup times and
                locations with the organizing committee.
              </p>
            </div>
          </GlassCard>
        </div>
      </BackgroundSection>

      {/* Registration */}
      <BackgroundSection image={campusBackgrounds.registration}>
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-14">
          <GlassCard className="flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Before you arrive
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Registration & Hotel Check-in
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-200">
                Separate event check-in is not required according to the
                supplied information. Please proceed directly to{" "}
                <span className="font-semibold text-white">
                  {accommodation.hotel}
                </span>{" "}
                to complete your hotel check-in.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {accommodation.address}
              </p>
            </div>

            <a
              href="#schedule"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-cyan-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-white"
            >
              Review schedule <ArrowUpRight size={19} />
            </a>
          </GlassCard>
        </div>
      </BackgroundSection>
    </main>
  );
}

function BackgroundSection({
  children,
  image,
  id,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`relative isolate scroll-mt-20 overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${image}")` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/65 backdrop-blur-[3px]"
      />

      <div className="relative z-10">{children}</div>
    </section>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <article
      className={`rounded-2xl border border-white/20 bg-white/[0.09] shadow-xl shadow-slate-950/10 backdrop-blur-2xl ${className}`}
    >
      {children}
    </article>
  );
}

function IconBox({ children }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/15 text-cyan-200">
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-200">
        {description}
      </p>
    </div>
  );
}